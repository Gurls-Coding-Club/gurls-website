# Contributing to G:URL*s Website

Thank you for your interest in contributing to the G:URL*s Coding Club website! We're excited to have you here. 🎉

## 🚧 Project Status

This project is currently **under active development**. We welcome all contributions, whether you're:
- Reporting bugs
- Suggesting new features
- Improving documentation
- Submitting code changes
- Fixing typos

## 📋 Table of Contents

- [How Can I Contribute?](#how-can-i-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Development Setup](#development-setup)
- [Code Guidelines](#code-guidelines)
- [Pull Request Process](#pull-request-process)
- [Questions?](#questions)

## How Can I Contribute?

### Reporting Bugs

Found a bug? Help us fix it!

1. **Check existing issues** - Someone might have already reported it
2. **Create a new issue** - Use the [Issues tab](../../issues/new)
3. **Describe the bug** - Include:
   - What you expected to happen
   - What actually happened
   - Steps to reproduce the issue
   - Screenshots (if applicable)
   - Browser/device information

**Example:**
```
**Bug Description**
The navigation menu doesn't close on mobile when clicking a link.

**Steps to Reproduce**
1. Open the site on mobile (< 768px width)
2. Click the hamburger menu
3. Click a navigation link
4. Menu stays open (expected: should close)

**Environment**
- Browser: Safari on iOS 17
- Device: iPhone 14
```

### Suggesting Features

Have an idea to make the site better?

1. **Check existing issues** - Your idea might already be there!
2. **Create a new issue** - Use the [Issues tab](../../issues/new)
3. **Describe your idea** - Include:
   - What problem it solves
   - How it would work
   - Why it would be useful
   - Any examples from other sites (if applicable)

**Example:**
```
**Feature Request**
Add a newsletter subscription form

**Problem**
Users currently have no way to stay updated with club news and events.

**Proposed Solution**
Add a newsletter signup form in the footer that integrates with
[email service provider].

**Benefits**
- Keeps community engaged
- Increases event attendance
- Builds our mailing list
```

## Development Setup

### Prerequisites

- **Node.js** 18 or higher
- **npm** (comes with Node.js)
- **Git**
- A code editor (e.g.: [VS Code](https://code.visualstudio.com/))

### Getting Started

1. **Fork the repository**
   - Click the "Fork" button at the top right of this page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/gurls-website.git
   cd gurls-website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Visit `http://localhost:4321`
   - You should see the site running!

### Development Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npx astro check      # Type-check TypeScript
```

## Pull Request Process

### Before Submitting

1. **Test your changes** locally
2. **Run type checking**: `npx astro check`
3. **Build the project**: `npm run build`
4. **Update documentation** if needed
5. **Write clear commit messages**

### Submitting a PR

1. **Push to your fork**
   ```bash
   git push origin your-branch-name
   ```

2. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch

3. **Fill out the PR template**
   - Describe what you changed
   - Reference any related issues
   - Add screenshots for UI changes
   - List any breaking changes

4. **Wait for review**
   - We'll review your PR as soon as possible
   - Be open to feedback and questions
   - Make requested changes if needed

### PR Title Format

Use the same format as commit messages:

```
feat: add dark mode toggle
fix: correct mobile navigation layout
docs: update installation instructions
```

## Code Review Process

- All PRs require at least **one review**
- Reviewers may **request changes**
- Once approved, maintainers will **merge** your PR
- Your contribution will be **credited** in the commit history

## Questions?

Have questions? Need help?

- **Open an issue** - We're happy to help!
- **Check [CLAUDE.md](./CLAUDE.md)** - Technical architecture details
- **Read [README.md](./README.md)** - Project overview

## Code of Conduct

This project follows the principle of being **welcoming and inclusive**. We expect all contributors to:

- Be respectful and considerate
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy toward others

## Recognition

All contributors will be recognized in our project. Thank you for helping make G:URL*s Coding Club better! 🌟

---

**Thank you for contributing! Your work helps build a stronger coding community in Vienna.** 💜
