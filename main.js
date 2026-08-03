/**
 * Application Entry Point
 * 
 * Orchestrates resources, registers Service Workers, handles dynamic rendering,
 * and synchronizes state updates between components and event interactions.
 */

import { loadData, getData } from './src/js/constants/index.js';
import { renderPortal } from './src/js/renderers/portal.js';
import { initializeEventListeners, initializeTheme } from './src/js/events.js';

// Register Service Worker for PWA offline capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .catch((err) => {
        // Silently capture registration errors
      });
  });
}

/**
 * Main application rendering and setup pipeline.
 */
async function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  // 1. Load active data constants
  await loadData();
  const data = getData();

  // 2. Render HTML templates to DOM
  app.innerHTML = `
    <div class="portal-container animate-fade-in">
      ${renderPortal(data)}
    </div>
  `;

  // 3. Attach interactive click triggers
  initializeEventListeners(handleStateUpdate);
}

/**
 * Callback handler to refresh the UI when theme or language changes.
 * @param {Object} options - Update preferences (e.g. force data reload)
 */
async function handleStateUpdate(options = {}) {
  const app = document.getElementById('app');
  if (!app) return;

  if (options.reloadData) {
    // Reload dynamic profile files for language change
    await loadData();
  }

  const data = getData();
  const container = app.querySelector('.portal-container');
  
  if (container) {
    // Re-compile HTML template details
    container.innerHTML = renderPortal(data);
    
    // Re-bind actions triggers
    initializeEventListeners(handleStateUpdate);
  } else {
    // Full recovery render
    await renderApp();
  }
}

// Start application cycle
(function init() {
  // Pre-load theme settings to prevent flash of light mode
  initializeTheme();

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', renderApp);
  } else {
    renderApp();
  }
})();
