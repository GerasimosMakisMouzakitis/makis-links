/**
 * Main Application Module
 * Handles dynamic loading and injection of HTML modules
 * @module app.module
 * @version 0.0.2
 * @author Gerasimos Makis Mouzakitis
 */

/**
 * Load links data from JSON file
 * @async
 * @returns {Promise<Object>} Links data object
 */
async function loadLinksData() {
  try {
    const response = await fetch('src/data/links.data.json', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to load links data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading links data:', error);
    throw error;
  }
}

/**
 * Render links from data
 * @param {Object} linksData - Links data object
 * @returns {string} HTML string with rendered links
 */
function renderLinks(linksData) {
  if (!linksData || !linksData.categories) {
    throw new Error('Invalid links data structure');
  }

  let html = '<ol>';
  
  // Sort categories by order
  const sortedCategories = [...linksData.categories].sort((a, b) => a.order - b.order);
  
  // Render each category's links
  sortedCategories.forEach(category => {
    // Sort links by priority
    const sortedLinks = [...category.links].sort((a, b) => a.priority - b.priority);
    
    // Render each link
    sortedLinks.forEach(link => {
      // Skip links with empty URLs
      if (!link.url) {
        html += `<li><span style="color: #999;">${link.title} (URL pending)</span></li>`;
      } else {
        html += `<li><a href="${link.url}" target="_blank" title="${link.description || link.title}">${link.title}</a></li>`;
      }
    });
  });
  
  html += '</ol>';
  return html;
}

/**
 * Inject links from data
 * @param {Object} linksData - Links data object
 * @throws {Error} If links container not found
 */
function injectLinksFromData(linksData) {
  const linksContainer = document.getElementById('links-container');
  if (!linksContainer) {
    throw new Error('Links container not found');
  }
  
  const linksHTML = renderLinks(linksData);
  linksContainer.innerHTML = linksHTML;
  
  console.log(`✅ Loaded ${linksData.totalLinks} links from ${linksData.categories.length} categories`);
}

/**
 * Load all modules and inject into DOM
 * Main entry point for the application
 * @async
 * @returns {Promise<void>}
 */
export async function loadModules() {
  try {
    // Load all modules and data in parallel
    const [headerRes, footerRes, versionRes, linksData] = await Promise.all([
      fetch('header.module.html', { cache: 'no-store' }),
      fetch('footer.module.html', { cache: 'no-store' }),
      fetch('version.json', { cache: 'no-store' }),
      loadLinksData()
    ]);

    // Convert responses to usable formats
    const [headerHTML, footerHTML, versionData] = await Promise.all([
      headerRes.text(),
      footerRes.text(),
      versionRes.json()
    ]);

    // Inject modules into DOM
    injectHeader(headerHTML, versionData);
    injectLinksFromData(linksData);
    injectFooter(footerHTML, versionData);

    console.log(`✅ All modules loaded successfully - v${versionData.version}`);
    
    // Re-initialize theme system after header is loaded
    if (typeof initTheme === 'function') {
      console.log('[App] Re-initializing theme system after header loaded');
      initTheme();
    }

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
