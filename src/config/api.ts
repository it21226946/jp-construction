// API Configuration
// This file handles API endpoint configuration for different environments

const getApiUrl = (): string => {
  // Check if we're in production (Vite uses import.meta.env)
  if (import.meta.env.PROD) {
    // Use environment variable if set, otherwise use a default production URL
    return import.meta.env.VITE_API_URL || 'https://your-backend-url.railway.app';
  }
  
  // Development: use localhost
  return import.meta.env.VITE_API_URL || 'http://localhost:5001';
};

export const API_BASE_URL = getApiUrl();

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/api/contact`,
  PROJECTS: `${API_BASE_URL}/api/projects`,
  HEALTH: `${API_BASE_URL}/health`,
};

