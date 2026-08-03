/**
 * User Interface Events Handler
 * 
 * Registers event listeners for language toggling, light/dark themes,
 * and handles local storage states.
 */

import { setCurrentLocale, getCurrentLocale } from './constants/i18n.js';

export function initializeEventListeners(onStateChange) {
  // Theme Toggle Event Listener
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Update browser theme meta colors if present
      updateMetaThemeColors(newTheme);
      
      // Trigger a re-render to swap theme-dependent SVG logos
      onStateChange();
    });
  }

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
 * Initializes the default or stored theme on startup.
 */
export function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark'; // default to dark
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateMetaThemeColors(savedTheme);
  return savedTheme;
}

function updateMetaThemeColors(theme) {
  // Sync the theme meta tag color
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme === 'dark' ? '#0A0A0A' : '#FFFFFF');
  }
}
