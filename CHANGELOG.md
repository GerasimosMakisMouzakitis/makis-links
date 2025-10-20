# 📦 CHANGELOG — MAKIS LINKS

All notable changes to this project are documented in this file.  
This project adheres to [Semantic Versioning](https://semver.org/).

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
