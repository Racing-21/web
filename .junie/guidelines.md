# Racing21 Project Style Guide

This document outlines the coding standards, architectural patterns, and best practices for the Racing21 project. Following these guidelines ensures consistency, maintainability, and high code quality across the codebase.

## Core Technologies

- **TypeScript**: Primary language for type safety and developer experience
- **React**: UI library for component-based architecture
- **Next.js**: React framework for server-side rendering and routing
- **TailwindCSS**: Utility-first CSS framework for styling
- **TinaCMS**: Content management system for content editing

## TypeScript Guidelines

### Type Definitions

- Always use explicit type annotations for function parameters and return types
- Prefer interfaces for object shapes that will be extended or implemented
- Use type aliases for unions, intersections, and simpler object shapes
- Avoid `any` type; use `unknown` when type is truly uncertain
- Use generics for reusable components and functions

```typescript
// ✅ Good
interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// ✅ Good
type ButtonVariant = 'primary' | 'secondary' | 'ghost';

// Example event handler with proper type annotation
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { /* ... */ };
```

### Naming Conventions

- Use PascalCase for component names, interfaces, and type aliases
- Use camelCase for variables, functions, and methods
- Use UPPER_SNAKE_CASE for constants
- Prefix interface names with `I` only when necessary to avoid naming conflicts
- Prefix private properties with underscore (_)

```typescript
// Component naming
export const PageLayout: FC<PropsWithChildren> = ({ children }) => { /* ... */ };

// Variable naming
const cloudName = "dkhdp7qmd";

// Constants
const MAXIMUM_FILES = 20;
```

## React/Next.js Guidelines

### Component Structure

- Use functional components with hooks instead of class components
- Separate components into logical directories based on functionality
- Keep components small and focused on a single responsibility
- Use the App Router pattern for Next.js pages

```typescript
// ✅ Good - Simple functional component
export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {children}
    </div>
  );
};
```

### Props and State Management

- Use destructuring for props
- Define prop types with TypeScript interfaces
- Keep state as local as possible
- Use React Context for global state when necessary
- Consider using React Query for server state management

```typescript
// ✅ Good - Destructured props with TypeScript
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ variant, onClick, children }) => {
  // Component implementation
};
```

### Hooks Usage

- Follow the Rules of Hooks
- Create custom hooks for reusable logic
- Keep useEffect dependencies array accurate
- Use useCallback for functions passed to child components
- Use useMemo for expensive calculations

```typescript
// ✅ Good - Custom hook
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [query]);
  
  return matches;
}
```

## TailwindCSS Guidelines

### Class Organization

- Group related classes together
- Order classes from layout to typography to visual styles
- Use consistent spacing and sizing scales
- Extract common patterns to components

```tsx
// ✅ Good - Organized Tailwind classes
<div className="w-full max-w-7xl mx-auto flex flex-col gap-10 pt-6 px-2 md:px-4 xl:px-2">
  {children}
</div>
```

### Responsive Design

- Use mobile-first approach
- Apply responsive modifiers consistently (sm, md, lg, xl, 2xl)
- Test all breakpoints regularly

```tsx
// ✅ Good - Mobile-first responsive design
<div className="px-2 md:px-4 xl:px-6">
  {/* Content */}
</div>
```

## Common Pitfalls to Avoid

- **Type Assertions**: Avoid `as` keyword when possible; use type guards instead
- **Prop Drilling**: Don't pass props through many component layers; use Context
- **Large Components**: Break down components that exceed 100-150 lines
- **Inline Styles**: Use Tailwind classes instead of inline styles
- **Uncontrolled Side Effects**: Manage side effects carefully in useEffect
- **Missing Key Props**: Always provide unique keys for list items
- **Direct DOM Manipulation**: Use refs instead of direct DOM manipulation

## Architectural Patterns

### Feature-Based Organization

Organize code by feature rather than by technical role:

```
src/
  features/
    auth/
      components/
      hooks/
      types/
      utils/
    dashboard/
      components/
      hooks/
      types/
      utils/
  components/ (shared components)
  hooks/ (shared hooks)
  utils/ (shared utilities)
```

### Data Fetching

- Use TinaCMS for content fetching
- Implement proper error handling and loading states
- Consider using SWR or React Query for data fetching with caching

### Performance Optimization

- Use Next.js Image component for optimized images
- Implement code splitting with dynamic imports
- Memoize expensive computations and component renders
- Virtualize long lists when appropriate

## Code Quality and Maintenance

- Write unit tests for critical functionality
- Use ESLint and Prettier for code formatting and linting
- Document complex logic with clear comments
- Keep dependencies updated regularly
- Review and refactor code periodically
