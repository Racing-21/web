/**
 * Utility to validate that required environment variables are present
 * This should be imported and called at the application startup
 */

type EnvVar = {
  name: string;
  required: boolean;
  isPublic?: boolean;
};

const requiredEnvVars: EnvVar[] = [
  // Cloudinary
  { name: 'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME', required: true, isPublic: true },
  { name: 'NEXT_PUBLIC_CLOUDINARY_API_KEY', required: true, isPublic: true },
  { name: 'CLOUDINARY_API_SECRET', required: true },

  // Google
  { name: 'GOOGLE_MAPS_API_KEY', required: true },
  { name: 'GOOGLE_SERVICE_ACCOUNT_KEY', required: true },

  // GitHub
  { name: 'GITHUB_PERSONAL_ACCESS_TOKEN', required: true },
  { name: 'GITHUB_OWNER', required: true },
  { name: 'GITHUB_REPO', required: true },

  // MongoDB
  { name: 'MONGODB_URI', required: true },

  // Tina CMS
  { name: 'NEXT_PUBLIC_TINA_CLIENT_ID', required: true, isPublic: true },
  { name: 'TINA_TOKEN', required: true },
  { name: 'TINA_PUBLIC_IS_LOCAL', required: false, isPublic: true },
];

export function validateEnv(): void {
  const missingVars: string[] = [];

  for (const envVar of requiredEnvVars) {
    const value = process.env[envVar.name];

    if (envVar.required && (!value || value.trim() === '')) {
      missingVars.push(envVar.name);
    }

    // Check that public vars are properly prefixed
    if (envVar.isPublic && !envVar.name.startsWith('NEXT_PUBLIC_') && !envVar.name.startsWith('TINA_PUBLIC_')) {
      console.warn(`Warning: Public environment variable ${envVar.name} should be prefixed with NEXT_PUBLIC_ or TINA_PUBLIC_`);
    }
  }

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}
