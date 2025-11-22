# G:URL*s Website

The official website for G:URL*s Coding Club - A FLINTA* coding community in Vienna.

## Features

- 🌍 **Bilingual** - Full English and German support
- 🎨 **Modern Design** - Responsive, accessible, with light/dark mode
- 📝 **Content Management** - Markdown-based blog posts and events
- ⚡ **Fast** - Built with Astro for optimal performance
- 🎯 **Type-Safe** - Full TypeScript support

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
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   │   ├── index.astro  # English homepage
│   │   └── de/          # German pages
│   ├── content/         # Markdown content
│   │   ├── blog/        # Blog posts (en/de)
│   │   └── events/      # Events (en/de)
│   ├── i18n/            # Translation files
│   └── styles/          # Global styles
└── public/              # Static assets
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

- **Default language:** English (root paths: `/`, `/about`, etc.)
- **German:** Prefixed with `/de` (`/de`, `/de/about`, etc.)
- **Adding translations:** Edit `src/i18n/en.json` and `src/i18n/de.json`

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

See [CLAUDE.md](./CLAUDE.md) for detailed architecture and development guidelines.

## License

© 2025 G:URL*s Coding Club
