/**
 * Theme Switcher Module
 * Version: 0.0.1
 * 
 * Manages theme switching between original and modern-dark themes.
 * Features:
 * - localStorage persistence
 * - Instant theme switching
 * - Keyboard accessibility
 * - Console logging for debugging
 */

// Available themes
const THEMES = {
  MODERN_DARK: 'modern-dark',
  ORIGINAL: 'original'
};

// Default theme
const DEFAULT_THEME = THEMES.MODERN_DARK;

/**
 * Get the current theme from localStorage or return default
 * @returns {string} Current theme name
 */
function getCurrentTheme() {
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      console.log(`[Theme] Retrieved from localStorage: ${savedTheme}`);
      return savedTheme;
    }
  } catch (e) {
    console.error('[Theme] localStorage read error:', e);
  }
  
  console.log(`[Theme] Using default theme: ${DEFAULT_THEME}`);
  return DEFAULT_THEME;
}

/**
 * Apply theme to the document
 * @param {string} theme - Theme name to apply
 */
function applyTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  console.log(`[Theme] Applied theme: ${theme}`);
  
  // Update button text
  updateButtonText(theme);
  
  // Save to localStorage
  try {
    localStorage.setItem('theme', theme);
    console.log(`[Theme] Saved to localStorage: ${theme}`);
  } catch (e) {
    console.error('[Theme] localStorage write error:', e);
  }
}

/**
 * Update the theme toggle button text
 * @param {string} currentTheme - Current active theme
 */
function updateButtonText(currentTheme) {
  const button = document.getElementById('theme-toggle');
  if (!button) {
    console.warn('[Theme] Toggle button not found');
    return;
  }
  
  if (currentTheme === THEMES.ORIGINAL) {
    button.textContent = '🌙 Dark Theme';
    button.setAttribute('aria-label', 'Switch to modern dark theme');
  } else {
    button.textContent = '🌞 Original Theme';
    button.setAttribute('aria-label', 'Switch to original colorful theme');
  }
}

/**
 * Toggle between themes
 */
function toggleTheme() {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === THEMES.MODERN_DARK 
    ? THEMES.ORIGINAL 
    : THEMES.MODERN_DARK;
  
  console.log(`[Theme] Switching from ${currentTheme} to ${newTheme}`);
  applyTheme(newTheme);
}

/**
 * Initialize theme system
 * - Apply saved/default theme
 * - Set up event listeners
 */
function initTheme() {
  console.log('[Theme] Initializing theme system...');
  
  // Apply current theme
  const currentTheme = getCurrentTheme();
  applyTheme(currentTheme);
  
  // Set up toggle button
  const button = document.getElementById('theme-toggle');
  if (button) {
    // Click event
    button.addEventListener('click', toggleTheme);
    
    // Keyboard accessibility (Enter and Space)
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
    
    console.log('[Theme] Event listeners attached to toggle button');
  } else {
    console.warn('[Theme] Toggle button not found - theme switching disabled');
  }
  
  console.log('[Theme] Theme system initialized successfully');
  console.log(`[Theme] Current theme: ${currentTheme}`);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  // DOM already loaded
  initTheme();
}

// Export functions for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getCurrentTheme,
    applyTheme,
    toggleTheme,
    initTheme,
    THEMES
  };
}
