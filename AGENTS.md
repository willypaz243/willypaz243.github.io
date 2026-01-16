# Agent Coding Guidelines

This document provides essential information for agentic coding agents working with this Astro-based portfolio website codebase.

## Build/Lint/Test Commands

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Astro CLI Commands

```bash
# Add new integration
npm run astro add

# Check for type errors
npm run astro check

# Get help with Astro CLI
npm run astro -- --help
```

### Testing Individual Components

Astro doesn't have built-in unit testing. For component testing, you would typically:

1. Manually verify components in the browser during development (`npm run dev`)
2. Use end-to-end testing tools like Playwright or Cypress for integration testing
3. For unit testing individual functions, Jest or Vitest could be added to the project

## Code Style Guidelines

### File Organization

- `.astro` files for components and pages
- `src/components/` for reusable UI components
- `src/layouts/` for layout templates
- `src/pages/` for routable pages
- `public/` for static assets
- `src/assets/` for assets that need processing

### Imports

- Use relative imports for local files
- Import dependencies as needed without specific ordering
- Prefer named imports over default imports when available
- Use Astro's built-in components via `import { ComponentName } from 'astro/components'`

### Formatting

- Use 2-space indentation
- No trailing commas in object/array literals
- Leave blank line at end of file
- Use double quotes for attributes and strings
- Self-close void elements (`<img />`, `<input />`, etc.)

### Component Structure

- Use Astro's component syntax with `---` delimiters for the script section
- Declare variables in the script section at the top of the file
- Use descriptive variable names in camelCase
- Place imports above component logic
- Separate concerns with clear whitespace

### Types

- TypeScript is enabled with strict configuration
- Leverage type inference when possible
- Define explicit types for complex objects or props
- Use Astro's built-in types when available

### Naming Conventions

- Component files: PascalCase (e.g., `Hero.astro`, `Navigation.astro`)
- Variables and functions: camelCase
- CSS classes: kebab-case with semantic naming
- Constants: UPPER_SNAKE_CASE

### Error Handling

- Handle potential undefined values gracefully
- Use optional chaining (`?.`) when accessing nested properties
- Provide fallback values for dynamic content
- Validate external data before using it

## Framework-Specific Guidelines

### Astro Components (.astro files)

1. Script section (between `---`):
   - Component logic, imports, and data fetching
   - Variable declarations using `const` or `let`
   - Props destructuring with defaults
   - Helper functions

2. Template section:
   - HTML markup with Astro/JSX-like syntax
   - Dynamic expressions using curly braces `{}`
   - Conditional rendering with `{condition && <element />}` or ternary operators
   - List rendering with `.map()`

3. Styling:
   - Use Tailwind CSS utility classes
   - Custom colors defined in `tailwind.config.mjs`
   - Responsive design with responsive prefixes (`sm:`, `md:`, `lg:`, etc.)

### Data Flow

- Pass data down through component props
- Use component state for interactive elements
- Fetch data in the script section of components or pages
- Share global data through layouts or context providers

### Best Practices

1. Keep components small and focused
2. Use fragments (`<>...</>`) for grouping elements without extra DOM nodes
3. Optimize images with Astro's built-in Image component
4. Use client-side directives sparingly (`client:load`, `client:idle`, etc.)
5. Follow accessibility guidelines (semantic HTML, ARIA attributes)
6. Use CSS animations/transitions for enhanced UX
7. Maintain consistent spacing and typography
8. Comment complex logic for maintainability

## Project-Specific Information

### Color Scheme

The project uses a light/dark color scheme with accent colors:

- Primary: Blue accents
- Secondary: Purple and green accents
- Light/Dark variants for all colors

### Responsive Design

Mobile-first approach with breakpoints:

- Default: Mobile styles
- `sm`: Small devices (640px)
- `md`: Medium devices (768px)
- `lg`: Large devices (1024px)
- `xl`: Extra large devices (1280px)
- `2xl`: 2X large devices (1536px)

### Animations

- Use CSS animations for entrance effects (fade-in)
- Hover effects for interactive elements
- Smooth transitions for state changes

This guide should help agentic coding agents effectively contribute to this Astro portfolio website project while maintaining consistency and quality.
