# AGENTS.md

## Project Overview

Astro portfolio website with Miku OS design system and dark/light theme support. Built with Astro, Tailwind CSS, and TypeScript.

## Project Structure

```sh
src/
├── components/           (Reusable UI components)
│   ├── Hero.astro
│   ├── Navigation.astro
│   ├── DesktopNav.astro
│   ├── Projects.astro
│   ├── Skills.astro
│   ├── Experience.astro
│   └── ThemeToggle.astro
├── layouts/            (Page layouts)
│   └── Layout.astro   (Main layout with navigation)
├── pages/              (Page routes)
│   └── index.astro    (Home page)
└── data/              (Static data files)
    └── profile.json   (User information, projects, skills)

public/              (Static files served directly)
└── favicon.svg
astro.config.mjs     (Astro configuration)
tailwind.config.mjs  (Tailwind CSS configuration)
tsconfig.json         (TypeScript configuration)
package.json         (Dependencies and scripts)
.prettierrc          (Prettier formatting configuration)
.gitignore           (Git ignore rules)
dist/               (Production build output - generated)
node_modules/       (Dependencies - generated)
```

## Build Commands

- `npm run dev` - Start local development server at localhost:4321
- `npm run build` - Build production-ready site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run astro -- --help` - Get Astro CLI help

## Code Style Guidelines

### Component Structure

- Components must start with frontmatter block using `---`
- Use `<script>` tags for inline JavaScript with `type="module"`
- Place `<style>` tags after script tags for proper loading order
- Use TypeScript for type annotations in Astro variables

### File Organization

- Source files in `src/components/`, `src/layouts/`, `src/pages/`
- Component files: `<ComponentName>.astro`
- Use descriptive names following PascalCase

### Import Order

1. Frontmatter imports
2. Page imports
3. Component imports
4. Style imports (if any)
5. Inline script imports (if any)

### HTML Structure

- Start with `<!doctype html>`
- Always include `lang` attribute: use `lang="es"` for Spanish
- Include viewport meta tag: `<meta name="viewport" ...>`
- Add favicon reference: `<link rel="icon" ...>`

### CSS / Tailwind

- Use Tailwind utility classes exclusively
- Dark mode support: use `dark:` prefix on colors and classes
- Responsive design: use `sm:`, `md:`, `lg:` breakpoints
- Custom classes in `<style>` tags for complex animations
- Glassmorphism effects with backdrop blur utilities

### JavaScript / Scripts

- Use `type="module"` for all JavaScript code
- Avoid inline `<script>` in body for production code
- Use `<script is:inline>` for dynamic client-side scripts
- Define variables clearly in script tags with descriptive names

### TypeScript

- Add type annotations to Astro frontmatter variables
- Use proper interface definitions for data types
- Leverage TypeScript IntelliSense for better autocomplete

### Color Usage (Miku OS Design System)

**Brand Colors:**

- `miku-cyan` (Main signature color) - Active borders, primary buttons, icons
- `miku-glow` (Electric cyan) - Glow effects, hover states, terminal cursor
- `miky-magenta` (Complementary accent) - Critical notifications, errors, "Me encanta"
- `tech-violet` (Tertiary accent) - Secondary gradients, magical elements

**Semantic Colors:**

- `miku-text-main` (Primary text) - Main content in both themes
- `miku-text-dim` (Secondary text) - Auxiliary content and captions
- `miku-surface` (Surface layer) - Cards, sidebars, and containers
- `miku-base` (Background base) - Main page background

**Dark Mode Colors:**

- `miku-dark-base` - Dark background (#0F1419, never use #000000)
- `miku-dark-surface` - Dark surface layer (#161B22 for cards and sidebars)
- `miku-dark-text` - Dark mode text variants
- `miku-dark-border` - Dark mode borders

**Light Mode Colors:**

- Never use text Cyan on white background - use `miku-teal-strong` instead
- `miku-light-surface` - Light surface layer for containers

**Functional Colors (Semantic States):**

- Success: `miku-success` (#00E676 dark mode) - Completed operations, stable systems
- Warning: `miku-warning` (#FFD700 dark mode) - Warnings, low battery, high CPU
- Error: `miku-error` (#FF2E63 dark mode) - Critical failures, disconnections
- Info: `miku-info` (#29B6F6 dark mode) - Neutral information, available updates

**Design Tokens:**

- Border radius: `rounded-xl` (15px) for standard elements, `rounded-lg` (10px) for small elements
- Active border: Use `border-miku-cyan` with opacity for subtle effects
- Opacity values: Use percentages (e.g., `miku-cyan/30`)
- Glassmorphism: Apply backdrop blur on surfaces with 80-90% opacity

### Responsive Design

- Mobile-first approach: base styles for mobile, add `md:`, `lg:` for larger screens
- Use Tailwind spacing and typography scales
- Ensure content scrolls horizontally on small screens when needed

### Accessibility

- Include descriptive `alt` text for all images
- Use semantic HTML elements: `<section>`, `<article>`, `<header>`, `<footer>`
- Ensure color contrast meets accessibility standards
- Use semantic headings in proper hierarchy: `<h1>`, `<h2>`, `<h3>`
- Add `aria-label` where appropriate for icon-only buttons

### Naming Conventions

- Variables: camelCase (e.g., `profile`, `terminalCode`)
- Functions: camelCase (e.g., `typeCode`, `highlightCode`)
- Components: PascalCase (e.g., `Hero`, `Navigation`)
- Classes: camelCase or dash-separated (Tailwind classes use dash-separated)
- Constants: UPPER_Snake_CASE (e.g., `MIKU_CYAN`)

### Error Handling

- Always check for null/undefined before accessing data properties
- Use optional chaining (`?.`) for safe property access
- Provide fallback values when displaying dynamic content
- Validate data types when using JSON imports

### Comments

- Add descriptive comments for complex logic
- Comment on component purpose and usage
- Document function parameters and return types
- Use clear, concise language in comments

## Testing

- Run type checking: `npm run astro check`
- Build to verify no compilation errors: `npm run build`
- Preview build to verify runtime behavior: `npm run preview`

## Development Workflow

1. Make changes to Astro components, layouts, or pages
2. Run `npm run astro check` for TypeScript validation
3. Run `npm run dev` to see changes in browser
4. Run `npm run format` to ensure code consistency
5. Run `npm run build` to verify production build works
6. Run `npm run preview` to test production build locally
