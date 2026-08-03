/**
 * Central Data Loader
 * 
 * Fetches the unified bilingual profile data from profile.json.
 */

import { resolvePath } from '../utils/paths.js';

let appData = null;

export async function loadData() {
  const dataPath = 'src/js/constants/profile.json';
  
  try {
    const response = await fetch(resolvePath(dataPath));
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    appData = await response.json();
  } catch (err) {
    // Fallback if fetch fails
    appData = {
      name: "Mr. Tech | سيد التقنية",
      handle: "@sayedtechs",
      bio_ar: "الدليل الرسمي لحسابات سيد التقنية على منصات التواصل الاجتماعي.",
      bio_en: "Official directory for Mr. Tech's social media platforms.",
      links: []
    };
  }
  return appData;
}

export function getData() {
  if (!appData) {
    throw new Error('Data has not been loaded. Call loadData() first.');
  }
  return appData;
}
