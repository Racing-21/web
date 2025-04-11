// Environment variables utility for Next.js App Router
// This file provides a secure way to access environment variables

/**
 * Server-side environment variables
 * These should only be used in:
 * - Server Components
 * - Route Handlers
 * - Server Actions
 * - Middleware
 *
 * NEVER import this in client components or it will expose secrets
 */
export const serverEnv = {
  // Cloudinary
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,

  // Google
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  GOOGLE_SERVICE_ACCOUNT_KEY: process.env.GOOGLE_SERVICE_ACCOUNT_KEY,

  // GitHub
  GITHUB_PERSONAL_ACCESS_TOKEN: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  GITHUB_OWNER: process.env.GITHUB_OWNER,
  GITHUB_REPO: process.env.GITHUB_REPO,

  // MongoDB
  MONGODB_URI: process.env.MONGODB_URI,

  // Tina CMS
  TINA_TOKEN: process.env.TINA_TOKEN,
};

/**
 * Public environment variables
 * These can be used in both client and server components
 * Must be prefixed with NEXT_PUBLIC_ in the .env file
 */
export const publicEnv = {
  // Cloudinary
  CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,

  // Tina CMS
  TINA_CLIENT_ID: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  TINA_IS_LOCAL: process.env.TINA_PUBLIC_IS_LOCAL === "true",
};

// Runtime public environment variables for client components
// This ensures environment variables are available at runtime in production
if (typeof window !== 'undefined') {
  // Only run on client side
  publicEnv.CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || window.__ENV__?.CLOUDINARY_CLOUD_NAME || window.__NEXT_DATA__?.props?.pageProps?.env?.CLOUDINARY_CLOUD_NAME || publicEnv.CLOUDINARY_CLOUD_NAME;
  publicEnv.CLOUDINARY_API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || window.__ENV__?.CLOUDINARY_API_KEY || window.__NEXT_DATA__?.props?.pageProps?.env?.CLOUDINARY_API_KEY || publicEnv.CLOUDINARY_API_KEY;
}
