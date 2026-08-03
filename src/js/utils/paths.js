/**
 * Path Utilities
 * 
 * Provides centralized logic for computing base paths and resolving
 * resource URLs correctly.
 */

export function getBasePath() {
  return '';
}

const BASE_PATH = getBasePath();

/**
 * Resolves a relative path to an absolute path from the root of the app.
 * @param {string} path - Relative path (e.g., 'src/assets/logo.png')
 * @returns {string} Resolved path (e.g., '/src/assets/logo.png')
 */
export function resolvePath(path) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('/') || path.startsWith('data:')) {
    return path;
  }

  const cleanPath = path.startsWith('./') ? path.slice(2) : path;
  return `${BASE_PATH}/${cleanPath}`.replace(/\/+/g, '/');
}
