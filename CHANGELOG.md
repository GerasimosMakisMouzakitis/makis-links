# 📦 CHANGELOG — MAKIS LINKS

All notable changes to this project are documented in this file.  
This project adheres to [Semantic Versioning](https://semver.org/).

---

## [0.0.12] — 2025-10-21
### 🎯 Improved
- Split monolithic CSS into 7 modular files for better organization
- Added CSS custom properties (design tokens) for colors, spacing, typography
- Organized styles by component (header, links, footer) and purpose (layout, utilities)
- Improved CSS Modularity from 5/10 to 9/10 (+4 points)
- Overall Modularity increased from 8.0/10 to 8.5/10

### ✨ Added
- `src/styles/` directory structure
- `src/styles/index.css` - Main CSS entry point with @import statements
- `src/styles/base.module.css` - CSS variables and resets (46 lines)
- `src/styles/header.module.css` - Header component styles (23 lines)
- `src/styles/links.module.css` - Link cards and lists (48 lines)
- `src/styles/footer.module.css` - Footer component styles (28 lines)
- `src/styles/layout.module.css` - Layout and spacing utilities (29 lines)
- `src/styles/utilities.module.css` - Helper classes (26 lines)
- CSS custom properties: --color-*, --space-*, --font-*, --max-width, --border-radius (20+ variables)

### 🛠️ Changed
- Updated `index.html` to reference `src/styles/index.css` instead of `style.module.css`
- Moved from 1 monolithic file (61 lines) to 7 modular files (219 lines total)
- All color values now use CSS variables for consistency

### 📦 Backup
- Created `style.module.css.backup` (original 61-line file preserved)

### 👤 Author
- Gerasimos Makis Mouzakitis

---

## [0.0.11] — 2025-10-20
### ✨ Added
- Created `src/data/links.data.json` with structured link data
- Added 5 link categories (AI Tools, Dev Tools, Shopping, Personal, Utilities)
- Added rich metadata for each link (descriptions, tags, priorities, dates)
- Added `loadLinksData()` function to fetch JSON data
- Added `renderLinks()` function to generate HTML from data
- Added `injectLinksFromData()` function for data-driven rendering

### 🛠️ Changed
- Migrated 21 hardcoded links from `links.module.html` to JSON
- Updated `app.module.js` to load and render links from data (v0.0.2)
- Removed dependency on `links.module.html` HTML file

### 🎯 Improved
- Links now easy to edit (just update JSON file)
- Better organization with 5 categories
- Future-ready for search/filter features
- Cleaner separation of data and presentation
- Modularity score: 7.5/10 → 8.0/10 ⬆️

### 👤 Author
- Gerasimos Makis Mouzakitis

---

## [0.0.10] — 2025-10-20
### ✨ Added
- Created `/src/scripts/app.module.js` - Extracted JavaScript from HTML
- Enhanced error handling with visual error messages
- Added JSDoc documentation to all functions
- Added success logging to console
- Created implementation plan documentation in `/docs/dev/plans/`

### 🛠️ Changed
- Migrated inline script to ES6 module
- Reduced `index.html` from 70 to 23 lines (67% reduction)
- Improved separation of concerns (HTML vs JavaScript)

### 🎯 Improved
- Better browser caching (JS file cached separately)
- Easier testing (can import and test functions)
- Cleaner HTML (no inline scripts)
- Better code organization
- Modularity score improved from 7/10 to 7.5/10

### 👤 Author
- Gerasimos Makis Mouzakitis

---

## [0.0.9] — 2025-10-20
### ✨ Added
- Injected dynamic version and lastUpdated from `version.json` into header and footer
- Created `manifest.json` for PWA compatibility
- Created `meta.module.json` for module-level traceability

### 🛠️ Changed
- Updated `index.html` to load modules with `fetch()` and inject metadata
- Improved error handling and CSP diagnostics

### 👤 Author
- Gerasimos Makis Mouzakitis

---

## [0.0.8] — 2025-10-19
### ✨ Added
- Modularized project into:
  - `header.module.html`
  - `links.module.html`
  - `footer.module.html`
  - `style.module.css`
  - `version.json`

### 🛠️ Changed
- Replaced static HTML with dynamic injection via JavaScript
- Introduced semantic versioning and changelog structure

### 👤 Author
- Gerasimos Makis Mouzakitis

---

## [0.0.1] — Initial Draft
### 🧪 Prototype
- Static HTML with curated civic and creative links
- No modularization or version tracking

### 👤 Author
- Gerasimos Makis Mouzakitis
