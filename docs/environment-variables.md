# Environment Variables in Next.js App Router

This document outlines the proper way to handle environment variables in a Next.js App Router project.

## Key Concepts

In Next.js App Router, there are two types of components:
1. **Server Components** (default): Run on the server and never on the client
2. **Client Components**: Run on both the server (for initial render) and the client

Environment variables must be handled differently depending on the component type:

- **Server-side environment variables**: Only accessible in Server Components, Route Handlers, Server Actions, and Middleware
- **Public environment variables**: Accessible in both Server and Client Components, must be prefixed with `NEXT_PUBLIC_`

## Security Considerations

- Never expose sensitive environment variables (API keys, secrets, tokens) to the client
- Always prefix environment variables that need to be accessible on the client with `NEXT_PUBLIC_`
- Be careful when using environment variables in Server Components that render Client Components

## Using the Environment Variables Utility

We've created a utility to help manage environment variables securely:

```typescript
// src/utils/env.ts
```

This utility provides two objects:

1. `serverEnv`: Contains server-side environment variables
2. `publicEnv`: Contains public environment variables (prefixed with NEXT_PUBLIC_)

### Usage in Server Components

```typescript
import { serverEnv } from "@/utils/env";

// In a Server Component (page.tsx, layout.tsx, etc.)
export default function Page() {
  // Access server-side environment variables
  const apiKey = serverEnv.GOOGLE_MAPS_API_KEY;

  return (
    // Use the environment variable
    <GoogleMapsEmbed apiKey={apiKey} />
  );
}
```

### Usage in Client Components

```typescript
"use client"; // Mark as Client Component

import { publicEnv } from "@/utils/env";

export default function ClientComponent() {
  // Access public environment variables
  const cloudName = publicEnv.CLOUDINARY_CLOUD_NAME;

  return (
    // Use the environment variable
    <div>Cloud Name: {cloudName}</div>
  );
}
```

## Common Pitfalls to Avoid

1. **Accessing server-side variables in Client Components**: This will expose sensitive information to the client
   ```typescript
   // ❌ WRONG: Importing serverEnv in a Client Component
   "use client";
   import { serverEnv } from "@/utils/env";
   ```

2. **Not prefixing client-accessible variables with NEXT_PUBLIC_**: Variables without this prefix won't be included in the client bundle
   ```typescript
   // ❌ WRONG: Using non-prefixed variables in Client Components
   const apiKey = process.env.API_KEY; // This will be undefined on the client
   ```

3. **Hardcoding sensitive values**: Always use environment variables for sensitive information
   ```typescript
   // ❌ WRONG: Hardcoding API keys
   const apiKey = "sk_live_123456789";
   ```

## Best Practices

1. **Use descriptive names**: Make it clear what the environment variable is used for
2. **Group related variables**: Keep related environment variables together in the .env file
3. **Document required variables**: Include a .env.example file with all required variables (without values)
4. **Validate environment variables**: Check that required variables are present at startup
5. **Use different values for different environments**: Use .env.development, .env.production, etc.

## Environment Variables Validation

We've implemented a validation utility to check that required environment variables are present at startup:

```typescript
// src/utils/validateEnv.ts
```

This utility is called in the application's layout.tsx file during development:

```typescript
// Validate environment variables in development
if (process.env.NODE_ENV === 'development') {
  try {
    validateEnv();
  } catch (error) {
    console.error('Environment validation failed:', error.message);
    // In development, we'll log the error but not crash the app
  }
}
```

If any required environment variables are missing, an error will be logged to the console during development. This helps catch configuration issues early and provides clear error messages to developers.
