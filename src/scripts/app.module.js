/**
 * Main Application Module
 * Handles dynamic loading and injection of HTML modules
 * @module app.module
 * @version 0.0.1
 * @author Gerasimos Makis Mouzakitis
 */

/**
 * Load all modules and inject into DOM
 * Main entry point for the application
 * @async
 * @returns {Promise<void>}
 */
export async function loadModules() {
  try {
    // Load all modules and version.json in parallel
    const [headerRes, linksRes, footerRes, versionRes] = await Promise.all([
      fetch('header.module.html', { cache: 'no-store' }),
      fetch('links.module.html', { cache: 'no-store' }),
      fetch('footer.module.html', { cache: 'no-store' }),
      fetch('version.json', { cache: 'no-store' })
    ]);

    // Convert responses to usable formats
    const [headerHTML, linksHTML, footerHTML, versionData] = await Promise.all([
      headerRes.text(),
      linksRes.text(),
      footerRes.text(),
      versionRes.json()
    ]);

    // Inject modules into DOM
    injectHeader(headerHTML, versionData);
    injectLinks(linksHTML);
    injectFooter(footerHTML, versionData);

    console.log(`✅ All modules loaded successfully - v${versionData.version}`);

  } catch (err) {
    console.error('❌ Error loading modules:', err);
    showErrorMessage('Failed to load application modules. Please refresh the page.');
  }
}

/**
 * Inject header module with version info
 * @param {string} headerHTML - Header HTML content
 * @param {Object} versionData - Version metadata from version.json
 * @throws {Error} If header container not found
 */
function injectHeader(headerHTML, versionData) {
  const headerContainer = document.getElementById('header-container');
  if (!headerContainer) {
    throw new Error('Header container not found');
  }
  
  headerContainer.innerHTML = headerHTML;
  const h1 = headerContainer.querySelector('h1');
  if (h1) {
    h1.textContent += ` v${versionData.version}`;
  }
}

/**
 * Inject links module
 * @param {string} linksHTML - Links HTML content
 * @throws {Error} If links container not found
 */
function injectLinks(linksHTML) {
  const linksContainer = document.getElementById('links-container');
  if (!linksContainer) {
    throw new Error('Links container not found');
  }
  
  linksContainer.innerHTML = linksHTML;
}

/**
 * Inject footer module with version info
 * @param {string} footerHTML - Footer HTML content
 * @param {Object} versionData - Version metadata from version.json
 * @throws {Error} If footer container not found
 */
function injectFooter(footerHTML, versionData) {
  const footerContainer = document.getElementById('footer-container');
  if (!footerContainer) {
    throw new Error('Footer container not found');
  }
  
  footerContainer.innerHTML = footerHTML;
  
  const footer = footerContainer.querySelector('footer');
  if (footer) {
    const versionDiv = document.createElement('div');
    versionDiv.className = 'version-info';
    versionDiv.style.marginTop = '10px';
    versionDiv.style.fontSize = '12px';
    versionDiv.style.color = '#999';
    versionDiv.textContent = `App Version: ${versionData.version} | Last Updated: ${versionData.lastUpdated}`;
    footer.appendChild(versionDiv);
  }
}

/**
 * Show error message to user
 * Displays a fixed-position error banner with auto-hide
 * @param {string} message - Error message to display
 */
function showErrorMessage(message) {
  console.error(`❌ ${message}`);
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.cssText = `
    background: #ff4444;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 16px;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    max-width: 500px;
  `;
  errorDiv.textContent = `⚠️ ${message}`;
  document.body.prepend(errorDiv);
  
  // Auto-hide after 5 seconds
  setTimeout(() => errorDiv.remove(), 5000);
}

// Auto-execute when module loads
loadModules();
