# G:URL*s Website

The official website for G:URL*s Coding Club - A FLINTA* coding community in Vienna.

> **🚧 Work in Progress**
> This website is currently under active development. Features, design, and content may change frequently. We welcome your feedback and suggestions!
>
> **📝 Want to contribute or have ideas?**
> Please open an issue in the [Issues tab](../../issues) with your suggestions, bug reports, or feature requests. We'd love to hear from you!

## Features

- 🌍 **Bilingual** - Full English and German support with clean URL structure
- 🎨 **Modern Design** - Responsive, accessible, light mode design
- 📝 **Content Management** - Markdown-based blog posts and events with content collections
- ⚡ **Fast** - Built with Astro for optimal performance and zero-JS by default
- 🎯 **Type-Safe** - Full TypeScript support with strict mode
- ♻️ **DRY Architecture** - Shared page components to minimize code duplication

## Tech Stack

- **Framework:** [Astro](https://astro.build) v5
- **Styling:** [Tailwind CSS](https://tailwindcss.com) v4
- **Language:** TypeScript (strict mode)
- **Deployment:** Ready for Vercel, Netlify, or any static host

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see the site.

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npx astro check` | Type-check the project |

## Project Structure

```
/
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── pages/          # Shared page components (DRY pattern)
│   │   │   ├── HomePage.astro
│   │   │   ├── BlogListPage.astro
│   │   │   ├── BlogPostPage.astro
│   │   │   ├── ContactPage.astro
│   │   │   └── FAQPage.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ...
│   ├── layouts/            # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/              # File-based routing
│   │   ├── index.astro     # English homepage (/)
│   │   ├── blog.astro      # English blog (/blog)
│   │   ├── contact.astro   # English contact (/contact)
│   │   ├── blog/
│   │   │   └── [...slug].astro  # English blog posts
│   │   └── [locale]/       # German & other languages
│   │       ├── index.astro      # /de/
│   │       ├── blog.astro       # /de/blog
│   │       └── ...
│   ├── content/            # Markdown content
│   │   ├── blog/           # Blog posts (en/de)
│   │   ├── events/         # Events (en/de)
│   │   └── config.ts       # Content collection schemas
│   ├── i18n/               # Translation files
│   │   ├── en.json
│   │   ├── de.json
│   │   └── utils.ts
│   └── styles/             # Global styles
│       └── global.css
└── public/                 # Static assets
```

## Adding Content

### Blog Posts

Create a new markdown file in `src/content/blog/en/` (or `de/` for German):

```markdown
---
title: "Your Post Title"
description: "Brief description"
author: "Author Name"
date: 2025-01-20
tags: ["tag1", "tag2"]
---

Your content here...
```

### Events

Create a new markdown file in `src/content/events/en/`:

```markdown
---
title: "Event Title"
description: "Event description"
date: 2025-03-15
eventType: "workshop"
location: "Vienna"
registrationUrl: "https://..."
---

Event details...
```

## Internationalization

The site uses a clean URL structure with no prefix for the default language:

- **English (default):** Root paths - `/`, `/blog`, `/contact`
- **German:** Prefixed with `/de` - `/de/`, `/de/blog`, `/de/contact`
- **Adding translations:** Edit `src/i18n/en.json` and `src/i18n/de.json`

### Architecture

We use a **shared component pattern** to avoid code duplication:
- Shared page components in `src/components/pages/` contain the UI logic
- Root-level pages (`src/pages/*.astro`) are thin wrappers for English
- `[locale]` pages (`src/pages/[locale]/*.astro`) are thin wrappers for other languages

See [CLAUDE.md](./CLAUDE.md) for detailed architecture documentation.

## Deployment

### Vercel / Netlify

1. Push code to GitHub
2. Connect repository to Vercel/Netlify
3. Deploy (zero configuration needed)

### Manual Build

```bash
npm run build
# Upload ./dist/ folder to your host
```

## Contributing

We welcome contributions from the community! Please see our [Contributing Guide](./CONTRIBUTING.md) for:
- How to report bugs
- How to suggest features
- Development setup
- Code style guidelines
- Pull request process

For architecture and technical details, see [CLAUDE.md](./CLAUDE.md).

## License

© 2025 G:URL*s Coding Club
