# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

G:URL*s website - A bilingual (English/German) website for a FLINTA* coding club in Vienna. Built with Astro, TypeScript, and Tailwind CSS, featuring i18n support with dynamic locale routing, content collections for blog posts and events, and a light mode design.

**Tech Stack:**
- Framework: Astro (v5.x with TypeScript strict mode)
- Styling: Tailwind CSS v4
- i18n: Astro's built-in i18n with custom translation utilities
- Content: Content Collections for blogs and events

## Development Commands

```bash
# Start dev server (runs on http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npx astro check

# Lint/Format (add these as needed)
npm run format  # if configured
npm run lint    # if configured
```

## Project Structure

```
/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Header.astro     # Navigation with dropdowns
│   │   ├── NavigationItem.astro      # Simple navigation link
│   │   ├── NavigationDropdown.astro  # Dropdown navigation
│   │   ├── navigationConfig.ts       # Array-based nav configuration
│   │   ├── Footer.astro     # Footer with donation info
│   │   ├── Hero.astro       # Hero section
│   │   ├── Button.astro     # Reusable button component
│   │   ├── Section.astro    # Reusable section wrapper
│   │   └── ...
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout with meta tags
│   ├── pages/
│   │   ├── [locale]/        # Dynamic locale routing
│   │   │   ├── index.astro  # Homepage for all locales
│   │   │   ├── blog.astro   # Blog listing for all locales
│   │   │   ├── contact.astro # Contact page for all locales
│   │   │   └── blog/
│   │   │       └── [...slug].astro  # Blog post pages
│   │   └── 404.astro        # Not found page
│   ├── content/             # Content Collections
│   │   ├── config.ts        # Collection schemas
│   │   ├── blog/
│   │   │   ├── en/          # English blog posts
│   │   │   └── de/          # German blog posts
│   │   └── events/
│   │       ├── en/          # English events
│   │       └── de/          # German events
│   ├── i18n/
│   │   ├── en.json          # English translations (includes all page text)
│   │   ├── de.json          # German translations (includes all page text)
│   │   └── utils.ts         # i18n utility functions
│   └── styles/
│       └── global.css       # Global styles (light mode only)
├── public/                  # Static assets (images, fonts, etc.)
└── astro.config.mjs         # Astro configuration with i18n
```

## Architecture & Patterns

### Internationalization (i18n)

**Language Support:** English (default) and German
**Routing:** Both languages use locale prefixes (`/en/`, `/de/`) with `prefixDefaultLocale: true`

**Translation Pattern for Dynamic [locale] Pages:**
```typescript
import { languages, useTranslations } from '../../i18n/utils';
import type { Language } from '../../i18n/utils';

export async function getStaticPaths() {
  return languages.map((locale) => ({
    params: { locale },
  }));
}

const { locale } = Astro.params as { locale: Language };
const t = useTranslations(locale);

// Usage
t('nav.about')  // Returns translated string
t('pages.home.title')  // Returns page-specific translation
```

**Translation Pattern for Static Pages (e.g., 404):**
```typescript
import { useTranslations, getLangFromUrl } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
```

**Translation File Structure:**
- All UI translations are in `src/i18n/en.json` and `src/i18n/de.json`
- Page-specific translations are under the `pages` key (e.g., `pages.home.title`, `pages.blog.heroTitle`)
- NO hardcoded translatable text should exist in page files - everything goes through the `t()` function

**Adding Translations:**
1. Add key-value pairs to both `src/i18n/en.json` and `src/i18n/de.json`
2. Use dot notation for nested keys: `t('section.subsection.key')`
3. For new pages, add translations under `pages.pageName` in both JSON files

### Content Collections

**Blog Posts:**
- Location: `src/content/blog/{lang}/`
- Schema: `title`, `description`, `author`, `date`, `image`, `tags`
- Format: Markdown with frontmatter

**Events:**
- Location: `src/content/events/{lang}/`
- Schema: `title`, `description`, `date`, `endDate`, `location`, `eventType`, `image`, `registrationUrl`
- Event Types: `workshop`, `talk`, `social`, `coworking`, `other`

**Querying Collections:**
```typescript
import { getCollection } from 'astro:content';

const englishPosts = await getCollection('blog', ({ id }) => id.startsWith('en/'));
const upcomingEvents = await getCollection('events', ({ data }) => data.date > new Date());
```

### Component Patterns

**Reusable Components:**
- `Button.astro`: Variants (primary, secondary, outline), sizes (sm, md, lg)
- `Section.astro`: Consistent section wrapper with background color options
- `NavigationItem.astro`: Simple navigation link with hover styles
- `NavigationDropdown.astro`: Accessible dropdown with keyboard navigation
- All components use TypeScript interfaces for props

**Navigation Configuration:**
Navigation is managed through an array-based configuration in `src/components/navigationConfig.ts`:
```typescript
export const navigationItems: NavigationItem[] = [
  {
    type: "link",
    labelKey: "nav.blog",
    href: "/blog",
  },
  {
    type: "dropdown",
    labelKey: "nav.about",
    items: [
      { label: "nav.ourStory", href: "/#about" },
      { label: "nav.ourMission", href: "/#mission" },
    ],
  },
];
```

To add new navigation items, simply add objects to this array. The Header component automatically generates the navigation from this configuration.

**Component Props Example:**
```typescript
interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const { variant = 'primary', size = 'md', className = '' } = Astro.props;
```

### Theming

**Color System (Light Mode Only):**
- Primary: `#5759a6` (purple) - Main brand color
- Secondary: `#6c95b8` (blue) - Supporting color
- Accent: `#6466e1` (bright purple) - Highlights
- Cream: `#F5F3ED` - Soft background
- Blues: `#e0f3fb` (light), `#b5e3f5` (medium) - Additional palette
- Grays: Various shades for text and borders

All colors are WCAG AA compliant with 4.5:1+ contrast ratios on their backgrounds.

**CSS Variables:**
- Backgrounds: `--bg-primary`, `--bg-secondary`, `--bg-tertiary`
- Text: `--text-primary`, `--text-secondary`
- Buttons: `--button-primary-bg`, `--button-primary-text`, `--button-secondary-bg`
- Links: `--link-color`, `--link-hover`
- UI Elements: `--border-color`, `--color-primary`, `--color-secondary`, `--color-accent`, `--color-cream`

**Using Theme Colors:**
```astro
<div class="bg-[var(--bg-primary)] text-[var(--text-primary)]">
  <button class="bg-[var(--button-primary-bg)] text-[var(--button-primary-text)]">
    Click me
  </button>
</div>
```

**Note:** The site uses light mode only. Dark mode was removed to simplify the design system.

### Responsive Design

- Mobile-first approach
- Breakpoints: Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- Navigation: Mobile menu for screens < 1024px
- Grid layouts: Responsive columns using `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Adding New Pages

All pages now use dynamic `[locale]` routing. To add a new page:

1. **Create the page file:**
```typescript
// src/pages/[locale]/new-page.astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import Section from '../../components/Section.astro';
import { languages, useTranslations } from '../../i18n/utils';
import type { Language } from '../../i18n/utils';

export async function getStaticPaths() {
  return languages.map((locale) => ({
    params: { locale },
  }));
}

const { locale } = Astro.params as { locale: Language };
const t = useTranslations(locale);
---

<BaseLayout title={t('pages.newPage.title')} description={t('pages.newPage.description')}>
  <Header />
  <main>
    <Section bgColor="primary">
      <h1>{t('pages.newPage.heading')}</h1>
      <p>{t('pages.newPage.content')}</p>
    </Section>
  </main>
  <Footer />
</BaseLayout>
```

2. **Add translations to both i18n files:**
```json
// src/i18n/en.json and src/i18n/de.json
{
  "pages": {
    "newPage": {
      "title": "New Page | G:URL*s Coding Club",
      "description": "Description for the new page",
      "heading": "New Page Heading",
      "content": "Page content here"
    }
  }
}
```

3. **Add navigation link (if needed):**
Update `src/components/navigationConfig.ts` to add the page to navigation.

The page will automatically be generated for both `/en/new-page` and `/de/new-page`.

## Content Management (Phase 2: Tina CMS)

This project is designed to add Tina CMS in the future:
- Tina will read/write markdown files in `src/content/`
- Current markdown structure is Tina-compatible
- No changes needed to existing content structure when adding Tina

## Design System

- Brand: G:URL*s (note the asterisk)
- Typography: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, etc.)
- Spacing: Tailwind utility classes
- Shadows: Tailwind shadow utilities
- Animations: Smooth transitions (duration-200, duration-300)
