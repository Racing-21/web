"use client";

import { useEffect } from "react";
import { publicEnv, isProduction } from "@/utils/env";

/**
 * EnvironmentProvider component
 *
 * This component ensures that environment variables are available at runtime
 * in production environments like Netlify. It injects the environment variables
 * into the window object so they can be accessed by client components.
 */
export const EnvironmentProvider = () => {
  useEffect(() => {
    // Only run in production to avoid overriding local development values
    if (isProduction()) {
      // Create a global object to store environment variables if it doesn't exist
      if (typeof window !== "undefined") {
        window.__ENV__ = window.__ENV__ || {};

        // Add Cloudinary environment variables
        window.__ENV__.CLOUDINARY_CLOUD_NAME = publicEnv.CLOUDINARY_CLOUD_NAME;
        window.__ENV__.CLOUDINARY_API_KEY = publicEnv.CLOUDINARY_API_KEY;
      }
    }
  }, []);

  // This component doesn't render anything
  return null;
};

// Add type definition for the window object
declare global {
  interface Window {
    __ENV__?: {
      CLOUDINARY_CLOUD_NAME?: string;
      CLOUDINARY_API_KEY?: string;
    };
  }
}
