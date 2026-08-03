/**
 * User Interface Events Handler
 * 
 * Registers event listeners for language toggling and handles storage.
 * Theme is hardcoded to dark mode only.
 */

import { setCurrentLocale, getCurrentLocale } from './constants/i18n.js';

export function initializeEventListeners(onStateChange) {
  // Language Toggle Event Listener
  const langToggle = document.getElementById('lang-toggle-btn');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const currentLang = getCurrentLocale();
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      
      setCurrentLocale(newLang);
      
      // Load the new language data file and re-render
      onStateChange({ reloadData: true });
    });
  }
}

/**
 * Initializes the default dark theme on startup.
 */
export function initializeTheme() {
  document.documentElement.setAttribute('data-theme', 'dark');
  updateMetaThemeColors('dark');
  return 'dark';
}

function updateMetaThemeColors(theme) {
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', '#0A0A0A');
  }
}
