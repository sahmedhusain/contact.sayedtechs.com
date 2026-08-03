/**
 * Component: Social Portal Renderer
 * 
 * Assembles the dynamic HTML structure for the Linktree portal.
 */

import { getCurrentLocale, isRTL } from '../constants/i18n.js';
import { resolvePath } from '../utils/paths.js';

function getIconForPlatform(platform) {
  switch (platform.toLowerCase()) {
    case 'snapchat':
      return 'fa-brands fa-snapchat';
    case 'facebook':
      return 'fa-brands fa-facebook';
    case 'instagram':
      return 'fa-brands fa-instagram';
    case 'x':
      return 'fa-brands fa-x-twitter';
    case 'tiktok':
      return 'fa-brands fa-tiktok';
    case 'youtube':
      return 'fa-brands fa-youtube';
    case 'email':
      return 'fa-solid fa-envelope';
    case 'website':
      return 'fa-solid fa-globe';
    default:
      return 'fa-solid fa-link';
  }
}

export function renderPortal(data) {
  // Always use the white reversed logo for dark mode
  const logoPath = resolvePath('SayedTech-Logo-System/SVG/logo-horizontal-reversed.svg');
  const avatarPath = resolvePath('SayedTech-Logo-System/SVG/icon-badge.svg');

  // Render link cards
  const cardsHtml = data.links.map(link => {
    const iconClass = getIconForPlatform(link.platform);
    return `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link-card pulse-hover card-${link.platform}" 
         style="--card-accent-color: ${link.accentColor}; --card-glow-color: ${link.glowColor};"
         aria-label="${link.title_en} - ${link.title_ar}">
        <span class="card-icon"><i class="${iconClass}"></i></span>
        <span class="card-title">
          <span class="title-en">${link.title_en}</span>
          <span class="title-ar">${link.title_ar}</span>
        </span>
      </a>
    `;
  }).join('');

  // Translations for layout elements
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} <a href="https://sayedtechs.com" target="_blank" rel="noopener noreferrer" class="footer-link">@SayedTechs</a>. All rights reserved.`;

  return `
    <!-- Profile Branding Card -->
    <section class="profile-card">
      <div class="profile-avatar-container">
        <img src="${avatarPath}" alt="${data.name} Logo Badge" class="profile-avatar" onerror="this.src='favicon-256.png'">
      </div>
      <div class="profile-details">
        <h1 class="profile-name">${data.name}</h1>
        <a href="https://sayedtechs.com" target="_blank" rel="noopener noreferrer" class="profile-handle" dir="ltr">
          ${data.handle}
        </a>
        <p class="profile-bio bio-ar" dir="rtl">${data.bio_ar}</p>
        <p class="profile-bio bio-en" dir="ltr">${data.bio_en}</p>
      </div>
    </section>

    <!-- Links List -->
    <main class="links-stack">
      ${cardsHtml}
    </main>

    <!-- Footer -->
    <footer class="portal-footer">
      <img src="${logoPath}" alt="SayedTech Footer Wordmark" class="footer-logo">
      <p class="footer-text" dir="ltr">${footerText}</p>
    </footer>
  `;
}
