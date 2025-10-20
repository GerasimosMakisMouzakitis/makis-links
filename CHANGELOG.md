# 📦 CHANGELOG — MAKIS LINKS

All notable changes to this project are documented in this file.  
This project adheres to [Semantic Versioning](https://semver.org/).

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
