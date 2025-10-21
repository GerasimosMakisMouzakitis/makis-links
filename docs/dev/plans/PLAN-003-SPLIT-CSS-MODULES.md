# 📋 Implementation Plan: Split CSS into Module-Specific Files

**Task:** Split monolithic CSS file into module-specific files  
**Priority:**  MEDIUM  
**Status:** 🟡 READY TO START  
**Effort:** 1-2 hours  
**Impact:** ⭐⭐⭐  
**Started:** -  
**Completed:** -

---

## 🎯 Objective

Split the single monolithic `style.module.css` file (61 lines) into multiple module-specific CSS files to improve:

**What problem does this solve?**
- Currently all styles are in one file (`style.module.css`)
- Header, links, footer styles are all mixed together
- Difficult to find and update specific component styles
- No CSS custom properties (hard-coded values everywhere)
- Violates separation of concerns principle

**What benefits will it bring?**
- Better code organization (each component has its own stylesheet)
- Easier maintenance (change header styles without affecting footer)
- Scalability (easy to add new component stylesheets)
- CSS custom properties enable theming
- Reusable utility classes

**How does it improve modularity?**
### Post-Implementation
- [ ] All tests pass (visual, console, network)
- [ ] No CSS regressions (compare with backup visually)
- [ ] Documentation updated (version.json, CHANGELOG.md)
- [ ] Changes pushed to GitHub
- [ ] Verified on GitHub web interface
- [ ] Mark PLAN-003 as ✅ COMPLETED in `docs/dev/plans/README.md`

### Validation
- [ ] All 20 success criteria met (see Success Criteria section above)
- [ ] Rollback plan tested (optional - revert to backup and back)
- [ ] Browser cache cleared and retested
- [ ] Tested in multiple browsers (Chrome, Firefox, Safari - if available)
- [ ] No console warnings or errors
- [ ] Network tab shows efficient loading

---

## 📊 Post-Implementation Metrics

**Code Structure:**
- Files created: 7 new CSS files
- Lines of code: 61 lines → 219 lines (+158 lines, +259%)
- File count: 1 CSS file → 7 CSS files (+6 files)
- Modularity: Monolithic → Component-based

**Modularity Scores:**
- CSS Modularity: 5/10 → 9/10 ⬆️ **+4 points**
- Overall Modularity: 8.0/10 → 8.5/10 ⬆️ **+0.5 points**

**Design Tokens:**
- CSS Custom Properties: 0 → 20+ variables
- Color tokens: 0 → 6 (--color-bg, --color-text, --color-link, etc.)
- Spacing tokens: 0 → 5 (--space-xs through --space-xl)
- Typography tokens: 0 → 3 (--font-family, --font-size-base, --line-height)
- Layout tokens: 0 → 2 (--max-width, --border-radius)

**Organization:**
- Component separation: 0% → 100%
- Utility classes: Mixed → Dedicated utilities.module.css
- Layout utilities: Mixed → Dedicated layout.module.css

---

## 🎉 Success Criteria Met

When all checkboxes in the Completion Checklist are checked, this implementation is **COMPLETE**.

**Next Tasks:**
- Implement PLAN-004 (next improvement from MODULARITY_IMPROVEMENTS.md)
- Consider CSS optimization/minification for production
- Add more CSS custom properties as needed
- Document CSS architecture in README.md

---

**Plan Created:** 2025-01-20  
**Plan Version:** 1.0  
**Based On:** MODULARITY_IMPROVEMENTS.md - Improvement #3  
**Estimated Time:** 90 minutes (1.5 hours)  
**Actual Time:** ___ minutes (fill in after completion)  
**Created By:** Gerasimos Makis Mouzakitis  
**Plan Status:** ✅ READY FOR IMPLEMENTATION  
**Last Updated:** 2025-01-20

---

## 📎 Appendix

### A. Related Files

**Created Files:**
- `src/styles/index.css` - Main CSS entry point (19 lines)
- `src/styles/base.module.css` - CSS variables & resets (46 lines)
- `src/styles/header.module.css` - Header component (23 lines)
- `src/styles/links.module.css` - Link cards & lists (48 lines)
- `src/styles/footer.module.css` - Footer component (28 lines)
- `src/styles/layout.module.css` - Layout utilities (29 lines)
- `src/styles/utilities.module.css` - Helper classes (26 lines)

**Modified Files:**
- `index.html` - Updated CSS link (1 line change)
- `version.json` - Version bump 0.0.11 → 0.0.12
- `CHANGELOG.md` - New entry for v0.0.12
- `meta.module.json` - Added CSS module entries (optional)

**Backup Files:**
- `style.module.css.backup` - Original 61-line CSS (for rollback)
- `index.html.backup` - Original index.html (for rollback)

**Preserved Files:**
- `style.module.css` - Original file (kept for reference/rollback)

---

### B. Dependencies

**Runtime:**
- None - Pure CSS, no external dependencies
- Browser support: CSS @import (all modern browsers)
- Browser support: CSS custom properties (Chrome 49+, Firefox 31+, Safari 9.1+)

**Development:**
- Python 3.12.1 http.server (for testing)
- Git (for version control)

---

### C. Breaking Changes

- [ ] **None** - Implementation is backward-compatible at runtime

**Notes:**
- Visual output is identical to before
- Only file structure changed (internal refactoring)
- Old `style.module.css` still exists (not deleted)
- Rollback is simple (change 1 line in index.html)

---

### D. Migration Notes

**No migration required for users.** This is an internal refactoring.

**For developers:**
1. **To use new CSS structure:**
   - Reference `src/styles/index.css` instead of `style.module.css`
   - Use CSS custom properties instead of hard-coded values
   - Example: `color: var(--color-link);` instead of `color: #3498db;`

2. **To add new styles:**
   - Add to appropriate module file (header → header.module.css)
   - Or create new module file and @import in index.css
   - Use existing CSS variables from base.module.css

3. **To modify design tokens:**
   - Edit `src/styles/base.module.css` :root section
   - Changes propagate to all modules automatically

4. **To rollback:**
   - See "Rollback Plan" section above
   - Quick rollback: `sed -i 's|src/styles/index.css|style.module.css|g' index.html`

---

### E. CSS Custom Properties Reference

**Colors:**
```css
--color-bg: #1a1a1a;           /* Background color */
--color-text: #e0e0e0;         /* Main text color */
--color-link: #3498db;         /* Link color */
--color-link-hover: #5dade2;   /* Link hover color */
--color-accent: #e74c3c;       /* Accent/highlight color */
```

**Spacing:**
```css
--space-xs: 0.5rem;   /* 8px - Extra small */
--space-sm: 1rem;     /* 16px - Small */
--space-md: 1.5rem;   /* 24px - Medium */
--space-lg: 2rem;     /* 32px - Large */
--space-xl: 3rem;     /* 48px - Extra large */
```

**Typography:**
```css
--font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-size-base: 16px;
--line-height: 1.6;
```

**Layout:**
```css
--max-width: 800px;
--border-radius: 8px;
```

**Usage Example:**
```css
.my-element {
  background-color: var(--color-bg);
  color: var(--color-text);
  padding: var(--space-md);
  border-radius: var(--border-radius);
}
```

---

### F. File Organization Rationale

**Why 7 files instead of 1?**
- **base.module.css**: Foundation (variables, resets) - shared by all
- **header.module.css**: Header-specific styles - isolated component
- **links.module.css**: Link cards/lists - isolated component
- **footer.module.css**: Footer-specific styles - isolated component
- **layout.module.css**: Spacing/containers - reusable utilities
- **utilities.module.css**: Helper classes - reusable utilities
- **index.css**: Orchestrator (@import order matters)

**Benefits:**
- ✅ Edit header styles without touching footer
- ✅ Change spacing scale in one place (base.module.css)
- ✅ Add new component = new CSS file (scalable)
- ✅ Clear ownership (each developer can own a module)
- ✅ Easier code reviews (smaller diffs)

---

**END OF PLAN-003-SPLIT-CSS-MODULES.md**

---
- Clear separation between base styles, component styles, and utilities

---

## 📊 Success Criteria

Check all items when complete:

- [ ] Created `/src/styles/` directory structure
- [ ] Created `base.module.css` with CSS custom properties (design tokens)
- [ ] Created `header.module.css` with header-specific styles
- [ ] Created `links.module.css` with links and list styles
- [ ] Created `footer.module.css` with footer-specific styles
- [ ] Created `layout.module.css` with layout utilities
- [ ] Created `utilities.module.css` with helper classes
- [ ] Created `index.css` as main CSS import file
- [ ] Updated `index.html` to reference `src/styles/index.css`
- [ ] All functionality works identically to before
- [ ] No visual regressions (page looks pixel-perfect identical)
- [ ] No console errors in browser
- [ ] All 7 CSS files load with 200 OK status
- [ ] CSS custom properties work correctly (--color-primary, etc.)
- [ ] Code is properly documented (comments in each CSS file)
- [ ] All tests pass (visual, console, network)
- [ ] Version numbers updated to 0.0.12
- [ ] Documentation updated (CHANGELOG, meta.module.json, version.json)
- [ ] Changes committed to Git
- [ ] Changes pushed to GitHub

---

## 📈 Before & After Metrics

### Before Implementation
```
CSS Structure:
- File: style.module.css (61 lines, monolithic)
- All styles mixed together (header, links, footer, layout)
- No CSS custom properties
- Hard-coded color values
- Hard-coded spacing values
- No component separation

Metrics:
- CSS files: 1
- CSS custom properties: 0
- Component separation: None
- CSS Modularity score: 5/10
- Overall Modularity score: 8.0/10
```

### After Implementation (Expected)
```
CSS Structure:
- Main import: src/styles/index.css
- Base module: base.module.css (CSS variables, resets)
- Component modules: header.module.css, links.module.css, footer.module.css
- Layout module: layout.module.css (containers, spacing utilities)
- Utilities module: utilities.module.css (helper classes)
- Clear separation by purpose

Metrics:
- CSS files: 7 (1 main + 6 modules)
- CSS custom properties: 20+ design tokens
- Component separation: 100% isolated
- CSS Modularity score: 9/10 ⬆️ +4
- Overall Modularity score: 8.5/10 ⬆️ +0.5
- Improvement: +0.5 points overall, +4 points CSS modularity
```

---

## 🗺️ Implementation Steps

### Phase 1: Preparation & Backup (15 minutes)

#### 1.1 Create Directory Structure
```bash
# Create styles directory
mkdir -p src/styles

# Verify creation
ls -la src/
```

Expected output:
```
drwxr-xr-x data/
drwxr-xr-x scripts/
drwxr-xr-x styles/     ← NEW
```

#### 1.2 Backup Current CSS
```bash
# Create backup of existing CSS
cp style.module.css style.module.css.backup

# Verify backup
ls -la style.module.css*
```

Expected output:
```
-rw-r--r-- style.module.css
-rw-r--r-- style.module.css.backup    ← NEW
```

#### 1.3 Plan Module Split

Read current `style.module.css` (61 lines) and identify sections:
- Lines 1-6: Base layout → `base.module.css`
- Lines 7-13: Header styles → `header.module.css`
- Lines 14-20: Link styles → `links.module.css`
- Lines 21-37: List styles → `links.module.css` (part of links component)
- Lines 38-41: Highlight → `utilities.module.css`
- Lines 42-56: Footer → `footer.module.css`
- Spacing/layout → `layout.module.css`

**⏱️ Phase 1 Time: 15 minutes**

---

#### Step 1.2: [Another Preparation Task]
[Description of what to do]

**Files Affected:**
- `/path/to/file1`
- `/path/to/file2`

---

### Phase 2: Create Module Files (30 minutes)

#### 2.1 Create base.module.css (CSS Variables & Resets)

**Purpose:** Define CSS custom properties (design tokens) and base resets

**File:** `src/styles/base.module.css`

**Content:**
```css
/* Base Module - CSS Custom Properties & Resets
   Version: 0.0.11
   Defines design tokens and base styles
*/

:root {
  /* Color Palette */
  --color-bg: #1a1a1a;
  --color-text: #e0e0e0;
  --color-link: #3498db;
  --color-link-hover: #5dade2;
  --color-accent: #e74c3c;
  
  /* Spacing Scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  
  /* Typography */
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-size-base: 16px;
  --line-height: 1.6;
  
  /* Layout */
  --max-width: 800px;
  --border-radius: 8px;
}

/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  line-height: var(--line-height);
  background-color: var(--color-bg);
  color: var(--color-text);
  padding: var(--space-md);
}
```

**Verification:**
```bash
# Create file
cat > src/styles/base.module.css << 'EOF'
[paste content above]
EOF

# Verify
wc -l src/styles/base.module.css  # Should be ~46 lines
```

---

#### 2.2 Create header.module.css

**Purpose:** Header component styles

**File:** `src/styles/header.module.css`

**Content:**
```css
/* Header Module - Header Component Styles
   Version: 0.0.11
   Styles for page header
*/

header {
  text-align: center;
  margin-bottom: var(--space-lg);
  padding: var(--space-md);
  border-bottom: 2px solid var(--color-accent);
}

header h1 {
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: var(--space-sm);
}

header p {
  color: var(--color-link);
  font-size: 1.1rem;
}
```

**Verification:**
```bash
wc -l src/styles/header.module.css  # Should be ~23 lines
```

---

#### 2.3 Create links.module.css

**Purpose:** Links component styles (cards, lists, highlights)

**File:** `src/styles/links.module.css`

**Content:**
```css
/* Links Module - Links Component Styles
   Version: 0.0.11
   Styles for link cards and lists
*/

.link-card {
  background: rgba(255, 255, 255, 0.05);
  padding: var(--space-md);
  margin: var(--space-sm) 0;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--color-link);
}

.link-card h2 {
  color: var(--color-link);
  font-size: 1.5rem;
  margin-bottom: var(--space-sm);
}

.link-card a {
  color: var(--color-link);
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-card a:hover {
  color: var(--color-link-hover);
  text-decoration: underline;
}

.link-card ul {
  list-style: none;
  padding-left: 0;
}

.link-card li {
  padding: var(--space-xs) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.link-card li:last-child {
  border-bottom: none;
}

.highlight {
  background: rgba(231, 76, 60, 0.1);
  border-left-color: var(--color-accent);
}
```

**Verification:**
```bash
wc -l src/styles/links.module.css  # Should be ~48 lines
```

---

#### 2.4 Create footer.module.css

**Purpose:** Footer component styles

**File:** `src/styles/footer.module.css`

**Content:**
```css
/* Footer Module - Footer Component Styles
   Version: 0.0.11
   Styles for page footer
*/

footer {
  margin-top: var(--space-xl);
  padding-top: var(--space-lg);
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(224, 224, 224, 0.6);
  font-size: 0.9rem;
}

footer p {
  margin: var(--space-xs) 0;
}

footer a {
  color: var(--color-link);
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
```

**Verification:**
```bash
wc -l src/styles/footer.module.css  # Should be ~28 lines
```

---

#### 2.5 Create layout.module.css

**Purpose:** Layout utilities (containers, spacing)

**File:** `src/styles/layout.module.css`

**Content:**
```css
/* Layout Module - Layout & Spacing Utilities
   Version: 0.0.11
   Container and spacing utilities
*/

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-md);
}

.section {
  margin-bottom: var(--space-lg);
}

/* Spacing utilities */
.mt-sm { margin-top: var(--space-sm); }
.mt-md { margin-top: var(--space-md); }
.mt-lg { margin-top: var(--space-lg); }

.mb-sm { margin-bottom: var(--space-sm); }
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }

.p-sm { padding: var(--space-sm); }
.p-md { padding: var(--space-md); }
.p-lg { padding: var(--space-lg); }
```

**Verification:**
```bash
wc -l src/styles/layout.module.css  # Should be ~29 lines
```

---

#### 2.6 Create utilities.module.css

**Purpose:** Helper classes (text alignment, visibility, etc.)

**File:** `src/styles/utilities.module.css`

**Content:**
```css
/* Utilities Module - Helper Classes
   Version: 0.0.11
   Reusable utility classes
*/

/* Text utilities */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* Visibility */
.hidden { display: none; }
.visible { display: block; }

/* Highlight */
.highlight {
  background: rgba(231, 76, 60, 0.1);
  border-left: 4px solid var(--color-accent);
}

/* Loading state */
.loading {
  opacity: 0.5;
  pointer-events: none;
}
```

**Verification:**
```bash
wc -l src/styles/utilities.module.css  # Should be ~26 lines
```

---

#### 2.7 Create index.css (Main Import File)

**Purpose:** Import all modules in correct order

**File:** `src/styles/index.css`

**Content:**
```css
/* Main CSS Entry Point
   Version: 0.0.11
   Imports all CSS modules in dependency order
*/

/* 1. Base (CSS variables & resets) - Must be first */
@import './base.module.css';

/* 2. Layout utilities */
@import './layout.module.css';

/* 3. Component modules */
@import './header.module.css';
@import './links.module.css';
@import './footer.module.css';

/* 4. Utilities (helper classes) - Last to allow overrides */
@import './utilities.module.css';
```

**Verification:**
```bash
wc -l src/styles/index.css  # Should be ~19 lines

# Verify all 7 files created
ls -la src/styles/
```

Expected output:
```
-rw-r--r-- base.module.css      (~46 lines)
-rw-r--r-- header.module.css    (~23 lines)
-rw-r--r-- links.module.css     (~48 lines)
-rw-r--r-- footer.module.css    (~28 lines)
-rw-r--r-- layout.module.css    (~29 lines)
-rw-r--r-- utilities.module.css (~26 lines)
-rw-r--r-- index.css            (~19 lines)
Total: 7 files, ~219 lines (vs original 61 lines)
```

**⏱️ Phase 2 Time: 30 minutes**

---

### Phase 3: Integration (10 minutes)

#### Step 3.1: Update index.html

**File to Update:**
- [ ] `index.html` - Change CSS link from root to modular structure

**Change:**

Find this line:
```html
    <link rel="stylesheet" href="style.module.css">
```

Replace with:
```html
    <link rel="stylesheet" href="src/styles/index.css">
```

**Commands:**
```bash
# Backup index.html first
cp index.html index.html.backup

# Make the change
sed -i 's|style\.module\.css|src/styles/index.css|g' index.html

# Verify change
grep "stylesheet" index.html
```

Expected output:
```html
    <link rel="stylesheet" href="src/styles/index.css">
```

---

#### Step 3.2: Verify File Structure

**Verification Commands:**
```bash
# Check complete structure
tree -L 2 src/

# Or use ls
ls -la src/styles/
ls -la *.html
ls -la style.module.css*
```

**Expected Structure:**
```
src/
├── data/
│   └── links.data.json
├── scripts/
│   └── app.module.js
└── styles/          ← NEW
    ├── index.css
    ├── base.module.css
    ├── header.module.css
    ├── links.module.css
    ├── footer.module.css
    ├── layout.module.css
    └── utilities.module.css

Root:
- index.html (updated)
- style.module.css (old - keep for rollback)
- style.module.css.backup (backup)
```

**Integration Points:**
1. `index.html` → `src/styles/index.css` (main entry)
2. `index.css` → 6 module files via @import
3. All modules use CSS variables from `base.module.css`

**⏱️ Phase 3 Time: 10 minutes**

---

### Phase 4: Testing (15 minutes)

#### Step 4.1: Server Setup

**Ensure server is running:**
```bash
# Check if server is running
ps aux | grep "http.server 3000"

# If not running, start it
cd /workspaces/makis-links
python3 -m http.server 3000 > /dev/null 2>&1 &
```

**Verify server:**
```bash
curl -I http://localhost:3000/
```

**Expected:** HTTP/1.0 200 OK

---

#### Step 4.2: File Access Tests

**Test all CSS modules are accessible:**
```bash
# Test main CSS
curl -I http://localhost:3000/src/styles/index.css

# Test individual modules
curl -I http://localhost:3000/src/styles/base.module.css
curl -I http://localhost:3000/src/styles/header.module.css
curl -I http://localhost:3000/src/styles/links.module.css
curl -I http://localhost:3000/src/styles/footer.module.css
curl -I http://localhost:3000/src/styles/layout.module.css
curl -I http://localhost:3000/src/styles/utilities.module.css
```

**Expected:** All return HTTP/1.0 200 OK

---

#### Step 4.3: Visual Testing Checklist

**Open:** http://localhost:3000 in browser

**Visual Tests:**
- [ ] Page loads without errors (no 404s)
- [ ] Header displays with correct styling (centered, border-bottom)
- [ ] Link cards have background color and border-left accent
- [ ] Footer appears at bottom with border-top
- [ ] All colors match original design
- [ ] Spacing/padding looks identical to before
- [ ] Hover effects work on links
- [ ] No visual regressions

**Browser Console Tests:**
- [ ] No CSS loading errors
- [ ] No 404 errors for stylesheets
- [ ] No CSS parsing errors

**Network Tab Tests:**
- [ ] `index.css` loads (200 OK)
- [ ] All 6 module files load via @import (200 OK)
- [ ] No extra requests for old `style.module.css`
- [ ] Total CSS size similar to before (~61 lines → ~219 lines, but compressed)

**Console Tests (F12 → Console):**
- [ ] No red errors
- [ ] No CSS warnings
- [ ] No 404 errors for any files
- [ ] No CORS errors

**Functionality Tests:**
- [ ] All links render correctly
- [ ] Link hover states work
- [ ] Highlight class applies correctly
- [ ] Footer displays properly
- [ ] No regression in existing features

**⏱️ Phase 4 Time: 15 minutes**

---

### Phase 5: Documentation (10 minutes)

#### Step 5.1: Update version.json

**File:** `/workspaces/makis-links/version.json`

**Current version:** 0.0.11

**Changes:**
1. Increment patch version: `0.0.11` → `0.0.12`
2. Update `lastUpdated` timestamp
3. Add CSS module entries

**Example update:**
```json
{
  "app": "MAKIS LINKS",
  "version": "0.0.12",
  "lastUpdated": "2025-01-20T14:30:00Z",
  "modules": {
    "app.module.js": "0.0.2",
    "header.module.html": "0.0.1",
    "links.module.html": "0.0.1",
    "footer.module.html": "0.0.1",
    "index.css": "0.0.1",
    "base.module.css": "0.0.1",
    "header.module.css": "0.0.1",
    "links.module.css": "0.0.1",
    "footer.module.css": "0.0.1",
    "layout.module.css": "0.0.1",
    "utilities.module.css": "0.0.1"
  }
}
```

**Command:**
```bash
# Edit manually or use jq
nano version.json
```

---

#### Step 5.2: Update CHANGELOG.md

**File:** `/workspaces/makis-links/CHANGELOG.md`

**Add new entry at the top:**
```markdown
## [0.0.12] — 2025-01-20
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
- CSS custom properties: --color-*, --space-*, --font-*, --max-width, --border-radius

### 🛠️ Changed
- Updated `index.html` to reference `src/styles/index.css` instead of `style.module.css`
- Moved from 1 monolithic file (61 lines) to 7 modular files (219 lines total)
- All color values now use CSS variables for consistency

### 📦 Backup
- Created `style.module.css.backup` (original 61-line file preserved)
```

---

#### Step 5.3: Update meta.module.json (Optional)

**File:** `/workspaces/makis-links/meta.module.json`

**If tracking CSS modules, add:**
```json
{
  "css": {
    "modules": [
      "src/styles/index.css",
      "src/styles/base.module.css",
      "src/styles/header.module.css",
      "src/styles/links.module.css",
      "src/styles/footer.module.css",
      "src/styles/layout.module.css",
      "src/styles/utilities.module.css"
    ],
    "modularity": "9/10"
  }
}
```

**⏱️ Phase 5 Time: 10 minutes**

---

### Phase 6: Git Commit & Push (10 minutes)
- [Bug fix 2]

### 👤 Author
- Gerasimos Makis Mouzakitis
```

**⏱️ Phase 5 Time: 10 minutes**

---

### Phase 6: Git Commit & Push (10 minutes)

#### Step 6.1: Review Changes

```bash
cd /workspaces/makis-links
git status
git diff
```

**Expected files changed:**
- [ ] New directory: `src/styles/`
- [ ] New file: `src/styles/index.css`
- [ ] New file: `src/styles/base.module.css`
- [ ] New file: `src/styles/header.module.css`
- [ ] New file: `src/styles/links.module.css`
- [ ] New file: `src/styles/footer.module.css`
- [ ] New file: `src/styles/layout.module.css`
- [ ] New file: `src/styles/utilities.module.css`
- [ ] Modified: `index.html` (CSS link updated)
- [ ] Modified: `version.json` (v0.0.11 → v0.0.12)
- [ ] Modified: `CHANGELOG.md` (new entry added)
- [ ] New backup: `style.module.css.backup`
- [ ] (Optional) Modified: `meta.module.json`

---

#### Step 6.2: Stage Changes

```bash
# Add new styles directory
git add src/styles/

# Add modified files
git add index.html
git add version.json
git add CHANGELOG.md

# Add backups (optional - might be in .gitignore)
git add style.module.css.backup
git add index.html.backup

# (Optional) Add meta if updated
git add meta.module.json

# Verify staged changes
git status
```

**Expected output:**
```
Changes to be committed:
  new file:   src/styles/index.css
  new file:   src/styles/base.module.css
  new file:   src/styles/header.module.css
  new file:   src/styles/links.module.css
  new file:   src/styles/footer.module.css
  new file:   src/styles/layout.module.css
  new file:   src/styles/utilities.module.css
  modified:   index.html
  modified:   version.json
  modified:   CHANGELOG.md
```

---

#### Step 6.3: Commit with Descriptive Message

```bash
git commit -m "refactor: Split CSS into modular files (v0.0.12)

- Created src/styles/ directory with 7 CSS modules
- Added CSS custom properties for design tokens (colors, spacing, typography)
- Split monolithic style.module.css (61 lines) into component-specific modules
- Organized as: base (variables), header, links, footer, layout, utilities
- Updated index.html to reference new src/styles/index.css entry point
- Improved CSS Modularity from 5/10 to 9/10 (+4 points)
- Overall Modularity increased from 8.0/10 to 8.5/10
- Preserved original file as style.module.css.backup for rollback

Files added:
  - src/styles/index.css (19 lines) - Main @import file
  - src/styles/base.module.css (46 lines) - Variables & resets
  - src/styles/header.module.css (23 lines) - Header component
  - src/styles/links.module.css (48 lines) - Link cards & lists
  - src/styles/footer.module.css (28 lines) - Footer component
  - src/styles/layout.module.css (29 lines) - Layout utilities
  - src/styles/utilities.module.css (26 lines) - Helper classes

Follows: PLAN-003-SPLIT-CSS-MODULES.md"
```

---

#### Step 6.4: Push to GitHub

```bash
# Push to main branch
git push origin main

# Verify push
git log --oneline -1
```

**Expected output:**
```
[commit-hash] refactor: Split CSS into modular files (v0.0.12)
```

**Verify on GitHub:**
1. Go to: https://github.com/yourusername/makis-links
2. Check commits: Should see new commit
3. Check files: Browse `src/styles/` directory
4. Verify CHANGELOG.md and version.json updated

**⏱️ Phase 6 Time: 10 minutes**

---

## 🎯 Total Time Estimate

| Phase | Time | Description |
|-------|------|-------------|
| Phase 1 | 15 min | Preparation & Backup |
| Phase 2 | 30 min | Create 7 CSS Module Files |
| Phase 3 | 10 min | Integration (update index.html) |
| Phase 4 | 15 min | Testing (visual, console, network) |
| Phase 5 | 10 min | Documentation (version, CHANGELOG) |
| Phase 6 | 10 min | Git Commit & Push |
| **TOTAL** | **90 min** | **1.5 hours** |

---

## 📝 Implementation Checklist

### Pre-Implementation
- [ ] Read this entire plan
- [ ] Ensure Git repository is clean (`git status`)
- [ ] Ensure server is running on port 3000
- [ ] Create backup of `style.module.css`

### During Implementation
- [ ] ✅ Phase 1: Create directory, backup files
- [ ] ✅ Phase 2: Create all 7 CSS module files
- [ ] ✅ Phase 3: Update index.html CSS link
- [ ] ✅ Phase 4: Test visual, console, network
- [ ] ✅ Phase 5: Update version.json, CHANGELOG.md
- [ ] ✅ Phase 6: Git commit and push

### Post-Implementation
- [ ] All tests pass (visual, console, network)
- [ ] No CSS regressions
- [ ] Documentation updated
- [ ] Changes pushed to GitHub
- [ ] Mark PLAN-003 as ✅ COMPLETED in README

---

## 🐛 Troubleshooting

### Issue 1: CSS Not Loading (404 Errors)

**Symptom:** Page displays with no styling, console shows 404 for CSS files

**Causes:**
- Wrong path in `index.html`
- Wrong paths in `index.css` @import statements
- Files not created in correct location

**Solution:**
```bash
# Verify file structure
ls -la src/styles/

# Check index.html link
grep "stylesheet" index.html

# Should show: href="src/styles/index.css"

# Check @import paths in index.css
cat src/styles/index.css

# All @import should use './filename.css' (relative paths)
```

**Fix:**
- Update `index.html`: `<link rel="stylesheet" href="src/styles/index.css">`
- Update `index.css` @import statements to use `./` prefix
- Ensure all 7 CSS files exist in `src/styles/`

---

### Issue 2: Styles Not Applied (Files Load but No Effect)

**Symptom:** CSS files load (200 OK) but styles don't apply

**Causes:**
- CSS syntax errors
- Missing CSS variable definitions
- Wrong CSS selectors
- @import order incorrect

**Solution:**
```bash
# Check browser console for CSS parsing errors
# Press F12 → Console

# Validate CSS syntax
# Use online validator or browser DevTools

# Verify @import order in index.css:
# 1. base.module.css (MUST be first - defines variables)
# 2. layout, header, links, footer
# 3. utilities (LAST - for overrides)
```

**Fix:**
- Ensure `base.module.css` is imported first
- Check for typos in CSS variable names (--color-bg vs --color-background)
- Validate all CSS syntax

---

### Issue 3: CSS Variables Not Working

**Symptom:** Colors show as plain text, spacing broken

**Causes:**
- `base.module.css` not loaded first
- Typo in variable name (`var(--color-bg)` vs `var(--bg-color)`)
- Browser doesn't support CSS variables (very old browsers)

**Solution:**
```bash
# Check browser support (Chrome 49+, Firefox 31+, Safari 9.1+)

# Verify base.module.css is first in index.css
head -n 10 src/styles/index.css

# Should see:
# @import './base.module.css';  ← FIRST

# Test in browser console:
getComputedStyle(document.documentElement).getPropertyValue('--color-bg')

# Should return: #1a1a1a
```

**Fix:**
- Move `@import './base.module.css';` to top of `index.css`
- Fix variable name typos
- For old browsers, add fallback values: `color: var(--color-text, #e0e0e0);`

---

### Issue 4: Visual Regressions (Looks Different)

**Symptom:** Page looks different from before (colors, spacing, layout changed)

**Causes:**
- Missing styles from original `style.module.css`
- CSS variable values don't match original hard-coded values
- Specificity issues (new selectors less specific)

**Solution:**
```bash
# Compare original vs new
diff style.module.css.backup src/styles/links.module.css

# Check specific element in browser DevTools
# Right-click element → Inspect → Styles tab
# See which rules are applied/overridden
```

**Fix:**
- Review original `style.module.css.backup` for missing rules
- Adjust CSS variable values to match original
- Increase specificity if needed (`.link-card h2` vs `h2`)
- Copy missing styles to appropriate module

---

### Issue 5: @import Not Working

**Symptom:** Only first CSS file loads, others don't

**Causes:**
- @import statements not at top of file
- Syntax error in @import statement
- Server doesn't allow @import (rare)

**Solution:**
```bash
# Verify @import syntax in index.css
cat src/styles/index.css

# Correct syntax:
# @import './base.module.css';    ✅
# @import './base.module.css'     ❌ (missing semicolon)
# @import 'base.module.css';      ❌ (missing ./)

# Check browser Network tab
# All 7 CSS files should load
```

**Fix:**
- Ensure @import statements are at top of `index.css` (before any CSS rules)
- Add semicolons to all @import statements
- Use relative paths with `./` prefix

---

### Issue 6: Performance Issues (Slow Loading)

**Symptom:** Page loads slower than before

**Causes:**
- 7 separate HTTP requests instead of 1
- No caching configured
- Large file sizes

**Solution:**
```bash
# Check file sizes
ls -lh src/styles/

# Should be small (1-3 KB each)

# Test with browser Network tab
# Enable "Disable cache" and reload
# Then disable it and reload again
# Second load should use cached files (from memory/disk cache)
```

**Fix:**
- Enable browser caching (should happen automatically)
- In production, consider CSS bundling/minification
- Current approach is fine for development (7 small files vs 1 monolithic)

---

## 🔄 Rollback Plan

**Cause:** [Why it happens]

**Solution:**
```bash
# Commands or code to fix
```

**Verification:**
```bash
# How to verify it's fixed
```

---

### Issue 2: [Another Problem]

**Symptom:** [What the user will see]

**Cause:** [Why it happens]

**Solution:**
[Step-by-step fix]

---

### Issue 3: [Edge Case]

**Symptom:** [What the user will see]

**Cause:** [Why it happens]

**Solution:**
[How to resolve]

---

## 🔄 Rollback Plan

If something goes wrong, here's how to rollback:

### Option 1: Git Revert (Recommended)

```bash
# Revert to previous commit

---

## 🔄 Rollback Plan

**If implementation fails or causes issues, follow these steps to rollback:**

### Step 1: Identify the Problem

```bash
# Check what's broken
# Browser console (F12)
# Visual comparison with backup

# Check Git status
git status
git log --oneline -5
```

---

### Step 2: Quick Rollback (Restore Old CSS)

**Fastest method - restore original CSS:**

```bash
# Restore original CSS in index.html
sed -i 's|src/styles/index.css|style.module.css|g' index.html

# Verify change
grep "stylesheet" index.html

# Test in browser
# Should show original styling
```

**Result:** Page uses original `style.module.css` (61 lines), new modules ignored

**When to use:** Quick fix during testing, problem with new CSS

---

### Step 3: Complete Rollback (Remove All Changes)

**Option A: Git Revert (Recommended - Preserves History)**

```bash
# Revert the commit (creates new commit that undoes changes)
git revert HEAD

# Resolve conflicts if any, then:
git revert --continue

# Push revert
git push origin main
```

**Benefits:**
- ✅ Preserves history (shows attempted change + revert)
- ✅ Safe for shared repositories
- ✅ Can re-apply later if needed

---

**Option B: Restore from Backup Files**

```bash
# Restore index.html from backup
cp index.html.backup index.html

# Remove new CSS directory
rm -rf src/styles/

# Verify restoration
grep "stylesheet" index.html  # Should show style.module.css
ls -la src/                   # Should NOT show styles/

# Commit restoration
git add index.html
git commit -m "rollback: Restore original CSS structure

- Removed src/styles/ modular CSS
- Restored original style.module.css reference in index.html
- Reverted to v0.0.11 styling"

git push origin main
```

---

**Option C: Hard Reset (DANGER - Only if No One Else Uses Repo)**

```bash
# CAUTION: This erases commit history!

# Reset to commit before changes
git reset --hard HEAD~1

# Force push (overwrites remote)
git push --force origin main
```

**⚠️ WARNING:**
- ❌ Loses commit history permanently
- ❌ Breaks other people's local repos
- ❌ Cannot recover easily
- ✅ Only use if you're the sole developer AND commit was very recent

---

### Step 4: Rollback Documentation Changes

```bash
# Restore version.json from backup or Git
git checkout HEAD~1 -- version.json

# Or manually edit
nano version.json
# Change version back to 0.0.11

# Restore CHANGELOG.md
git checkout HEAD~1 -- CHANGELOG.md

# Or manually remove the CSS entry
nano CHANGELOG.md
# Delete the [0.0.12] section

# Commit documentation rollback
git add version.json CHANGELOG.md
git commit -m "docs: Rollback documentation to v0.0.11"
git push origin main
```

---

### Step 5: Verify Rollback Success

```bash
# Check file structure
ls -la src/              # Should NOT have styles/
grep "stylesheet" index.html  # Should show style.module.css

# Test in browser
python3 -m http.server 3000 > /dev/null 2>&1 &
```

**Open:** http://localhost:3000

**Verify:**
- [ ] Page loads with original styling
- [ ] No CSS errors in console
- [ ] All colors, spacing match original
- [ ] Original `style.module.css` is used (check Network tab)

---

### Step 6: Clean Up Backup Files (Optional)

```bash
# Remove backup files if rollback successful
rm -f style.module.css.backup
rm -f index.html.backup

# Commit cleanup
git add -A
git commit -m "chore: Remove backup files after rollback"
git push origin main
```

---

## 📚 References

### Official Documentation
- **CSS @import:** https://developer.mozilla.org/en-US/docs/Web/CSS/@import
- **CSS Custom Properties:** https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **CSS Modules:** https://github.com/css-modules/css-modules

### Project Documentation
- **MODULARITY_IMPROVEMENTS.md:** Improvement #3 - Split CSS into Module-Specific Files
- **TEMPLATE-IMPLEMENTATION-PLAN.md:** Plan structure template (757 lines)
- **CRITICAL-IMPLEMENTATION-RULES.md:** Mandatory workflow rules (321 lines)
- **QUICK-REFERENCE.md:** Quick start guide for plans (255 lines)

### Related Plans
- **PLAN-001-EXTRACT-JAVASCRIPT.md:** JavaScript extraction (completed)
- **PLAN-002-DATA-DRIVEN-LINKS.md:** Data-driven links (completed, retroactive)

---

## 🎯 Expected Outcomes

### Before Implementation
```
CSS Structure:
- Files: 1 (style.module.css)
- Lines: 61 lines total
- Organization: Monolithic (all styles mixed)
- CSS Variables: 0
- Component Separation: None
- CSS Modularity: 5/10
- Overall Modularity: 8.0/10
```

### After Implementation
```
CSS Structure:
- Files: 7 (1 main + 6 modules)
  - index.css (19 lines) - @import statements
  - base.module.css (46 lines) - Variables & resets
  - header.module.css (23 lines) - Header component
  - links.module.css (48 lines) - Link cards & lists
  - footer.module.css (28 lines) - Footer component
  - layout.module.css (29 lines) - Layout utilities
  - utilities.module.css (26 lines) - Helper classes
- Lines: 219 lines total (vs 61 before)
- Organization: Component-based, clear separation
- CSS Variables: 20+ design tokens (:root custom properties)
- Component Separation: 100% isolated by purpose
- CSS Modularity: 9/10 ⬆️ +4 points
- Overall Modularity: 8.5/10 ⬆️ +0.5 points
```

### Benefits Achieved
- ✅ **Improved Organization:** Styles grouped by component (header, links, footer)
- ✅ **Design Tokens:** CSS variables for colors, spacing, typography (20+ tokens)
- ✅ **Easier Maintenance:** Each module can be edited independently
- ✅ **Better Reusability:** Utility classes (layout, helpers) can be reused
- ✅ **Clear Dependencies:** @import order shows dependency chain
- ✅ **Scalability:** New components get their own CSS module
- ✅ **No Breaking Changes:** Visual output identical to before
- ✅ **Modularity Score:** +4 points CSS, +0.5 points overall

---

## ✅ Completion Checklist

### Pre-Implementation
- [ ] Read this implementation plan completely (1,400+ lines)
- [ ] Read MODULARITY_IMPROVEMENTS.md Improvement #3
- [ ] Understand CSS custom properties (design tokens)
- [ ] Backup current working code (`style.module.css.backup`)
- [ ] Ensure development environment ready (Python server port 3000)
- [ ] Clear browser cache (Ctrl+Shift+Delete)

### Implementation
- [ ] Phase 1 completed (15 min - Preparation & Backup)
  - [ ] Created `src/styles/` directory
  - [ ] Backed up `style.module.css`
  - [ ] Planned module split
  
- [ ] Phase 2 completed (30 min - Create Module Files)
  - [ ] Created `base.module.css` (46 lines, CSS variables)
  - [ ] Created `header.module.css` (23 lines)
  - [ ] Created `links.module.css` (48 lines)
  - [ ] Created `footer.module.css` (28 lines)
  - [ ] Created `layout.module.css` (29 lines)
  - [ ] Created `utilities.module.css` (26 lines)
  - [ ] Created `index.css` (19 lines, @import statements)
  
- [ ] Phase 3 completed (10 min - Integration)
  - [ ] Updated `index.html` CSS link
  - [ ] Verified file structure
  
- [ ] Phase 4 completed (15 min - Testing)
  - [ ] Server running on port 3000
  - [ ] All CSS files accessible (200 OK)
  - [ ] Visual testing passed (no regressions)
  - [ ] Console clean (no errors)
  - [ ] Network tab shows all 7 files loading
  
- [ ] Phase 5 completed (10 min - Documentation)
  - [ ] Updated `version.json` (0.0.11 → 0.0.12)
  - [ ] Updated `CHANGELOG.md` (new [0.0.12] entry)
  - [ ] (Optional) Updated `meta.module.json`
  
- [ ] Phase 6 completed (10 min - Git Commit & Push)
  - [ ] Reviewed changes (`git status`, `git diff`)
  - [ ] Staged all files (`git add`)
  - [ ] Committed with descriptive message
  - [ ] Pushed to GitHub (`git push origin main`)

### Post-Implementation
- [ ] Phase 6 completed (Git Commit & Push)

### Post-Implementation
- [ ] All tests pass
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] Documentation is updated
- [ ] Changes are on GitHub
- [ ] Plan status updated to "✅ COMPLETED"
- [ ] Mark task as done in TODO list
- [ ] Celebrate! 🎉

---

## 📊 Metrics & KPIs

**Code Quality:**
- Lines of code: [Before] → [After]
- File count: [Before] → [After]
- Cyclomatic complexity: [Before] → [After]

**Performance:**
- Load time: [Before]ms → [After]ms
- Bundle size: [Before]KB → [After]KB
- Cache hit rate: [X%]

**Modularity:**
- Component coupling: [Before] → [After]
- Component cohesion: [Before] → [After]
- Overall score: [Before]/10 → [After]/10

---

## 🎉 Success Criteria Met

When all checkboxes above are checked, this implementation is **COMPLETE**.

**Next Task:** [Link to next implementation plan]

---

**Plan Created:** 2025-10-20  
**Plan Version:** 1.0  
**Estimated Time:** ___ hours  
**Actual Time:** ___ hours (fill in after completion)  
**Created By:** Gerasimos Makis Mouzakitis  
**Last Updated:** 2025-10-20

---

## 📎 Appendix

### A. Related Files
- File 1: `/path/to/file1`
- File 2: `/path/to/file2`

### B. Dependencies
- Dependency 1: [Name + Version]
- Dependency 2: [Name + Version]

### C. Breaking Changes
- [ ] None
- [ ] [Description of breaking change 1]
- [ ] [Description of breaking change 2]

### D. Migration Notes
[If there are breaking changes, provide migration steps]

---

## 💡 Tips & Best Practices

1. **Always backup before making changes**
   - Use Git to create save points
   - Keep backup files until implementation is verified

2. **Test incrementally**
   - Don't wait until the end to test
   - Test after each phase

3. **Document as you go**
   - Update comments while coding
   - Keep CHANGELOG.md current

4. **Commit frequently**
   - Small, focused commits are better
   - Makes rollback easier if needed

5. **Verify in browser**
   - Always test in actual browser
   - Check console for errors
   - Verify network requests

---

## 🔍 Code Review Checklist

Before finalizing, review:

**Code Quality:**
- [ ] Code follows project style guide
- [ ] Functions are well-named and single-purpose
- [ ] No hardcoded values (use constants)
- [ ] No commented-out code
- [ ] No console.log in production code (unless intentional)

**Documentation:**
- [ ] All functions have JSDoc comments
- [ ] Complex logic is explained with comments
- [ ] README is updated if needed
- [ ] CHANGELOG is accurate

**Testing:**
- [ ] All edge cases are tested
- [ ] Error handling is in place
- [ ] No console errors
- [ ] Performance is acceptable

**Security:**
- [ ] No sensitive data exposed
- [ ] Input is validated
- [ ] XSS vulnerabilities addressed
- [ ] CORS is properly configured

---

**END OF TEMPLATE**

---

## 📖 How to Use This Template

1. **Copy this template** to create a new plan:
   ```bash
   cp docs/dev/plans/TEMPLATE-IMPLEMENTATION-PLAN.md \
      docs/dev/plans/PLAN-00X-FEATURE-NAME.md
   ```

2. **Fill in all sections** with specific details for your implementation

3. **Update the header** with correct task name, priority, effort estimate

4. **Customize phases** based on your specific needs (add/remove as needed)

5. **Update checklists** with specific items for your implementation

6. **Add code templates** that are copy-paste ready

7. **Include realistic time estimates** for each phase

8. **Reference this plan** during implementation to stay on track

9. **Update status** as you progress through phases

10. **Mark complete** when all criteria are met

---

**This template ensures:**
- ✅ Consistent implementation process
- ✅ Complete documentation
- ✅ Thorough testing
- ✅ Proper version control
- ✅ Clear success criteria
- ✅ Easy rollback if needed
