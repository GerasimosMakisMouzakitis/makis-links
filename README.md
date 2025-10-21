# 🔗 MAKIS LINKS

A modular HTML project for curated links, versioned components, and civic transparency.

**Version:** 0.0.13  
**Author:** [Gerasimos Makis Mouzakitis](https://github.com/GerasimosMakisMouzakitis)  
**License:** MIT

---

## 📋 Overview

**MAKIS LINKS** is a lightweight, modular web application that serves as a curated directory of civic, creative, and technical resources. The project emphasizes:

- **Modular Architecture**: Separate HTML modules for header, links, and footer
- **Dynamic Loading**: JavaScript-based module injection with version tracking
- **Semantic Versioning**: Built-in version management via `version.json`
- **Module Metadata**: Traceability with `meta.module.json`
- **Dual Theme System**: Original colorful theme + modern dark theme with instant switching
- **Cache-Optimized**: Fetch configurations to prevent 304 (Not Modified) issues
- **Development-Friendly**: Static server with ETag disabled for consistent content delivery

---

## ✨ Features

- 🎨 **Dual Theme System**: Choose between original colorful theme or modern dark theme
- 🌞 **Original Theme**: Blue background, green header, orange list items, yellow highlights
- 🌙 **Modern Dark Theme**: Professional dark design with blue accents
- 🔄 **Dynamic Version Injection**: Header and footer display live version info
- 💾 **Theme Persistence**: Your theme preference is saved in browser localStorage
- ⌨️ **Keyboard Accessible**: Full keyboard navigation support (Tab, Enter, Space)
- 📦 **Modular Components**: Easy to maintain and extend
- 🚀 **Single-Page App Mode**: Uses `serve` for client-side routing
- 🔒 **Cache Control**: Configured to avoid browser caching issues during development
- 📝 **Changelog Tracking**: Comprehensive changelog in `CHANGELOG.md`

---

## 🚀 Quick Start

### Prerequisites

- **Python 3** (pre-installed on most systems)
- Alternatively, **Node.js** and **npm** (for the `serve` option)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GerasimosMakisMouzakitis/makis-links.git
   cd makis-links
   ```

2. **No installation required!** The project uses Python's built-in HTTP server.

### Running the Project

**Start the development server:**
```bash
npm start
```

Or run Python HTTP server directly:
```bash
python3 -m http.server 3000
```

This will:
- Start a static server on **http://localhost:3000**
- Serve all `.html` files correctly without redirects
- Provide a simple, zero-configuration development server

**Open in your browser:**
```
http://localhost:3000
```

### Alternative Commands

- **Development mode (same as start):**
  ```bash
  npm run dev
  ```

- **Using the serve package (requires npm install):**
  ```bash
  npm install
  npm run serve
  ```

- **Manual Python server on different port:**
  ```bash
  python3 -m http.server 8080
  ```

---

## 🎨 Theme System

**MAKIS LINKS** supports two themes for different visual preferences:

### Available Themes

1. **Original Theme** (Colorful)
   - Blue background
   - Green header with white text
   - Orange list items
   - Yellow highlights
   - Classic, vibrant design

2. **Modern Dark Theme** (Professional)
   - Dark backgrounds (#1a1a1a)
   - Blue accents (#3498db)
   - Clean, minimalist design
   - Better for low-light environments

### Switching Themes

Click the theme toggle button in the header (top-right corner):
- **🌞 Original Theme** - Switch to colorful theme
- **🌙 Dark Theme** - Switch to dark theme

Your theme preference is automatically saved in browser localStorage and persists across sessions.

### Keyboard Accessibility

- Press **Tab** to focus the theme toggle button
- Press **Enter** or **Space** to switch themes
- Button has proper focus indicators and aria-labels

### Technical Details

- **Theme Files:** `src/styles/themes/theme-original.css`, `theme-modern-dark.css`
- **Switcher:** `src/scripts/theme-switcher.js`
- **Implementation:** CSS `data-theme` attribute on `<html>` element
- **Persistence:** Browser localStorage (`theme` key)
- **Default:** Modern Dark Theme

---

## 📁 Project Structure

```
makis-links/
├── index.html                   # Main entry point (loads modules dynamically)
├── header.module.html           # Header component with theme toggle
├── links.module.html            # Curated list of links
├── footer.module.html           # Footer component with metadata
├── src/
│   ├── scripts/
│   │   ├── app.module.js        # Main application logic
│   │   └── theme-switcher.js    # Theme switching module
│   ├── styles/
│   │   ├── index.css            # Main CSS entry point
│   │   ├── base.module.css      # Base variables and resets (theme-agnostic)
│   │   ├── header.module.css    # Header component styles
│   │   ├── links.module.css     # Links component styles
│   │   ├── footer.module.css    # Footer component styles
│   │   ├── layout.module.css    # Layout utilities
│   │   ├── utilities.module.css # Utility classes
│   │   └── themes/
│   │       ├── theme-original.css      # Original colorful theme
│   │       └── theme-modern-dark.css   # Modern dark theme
│   └── data/
│       └── links.data.json      # Links data
├── version.json                 # Version and metadata
├── meta.module.json             # Module-level traceability
├── package.json                 # npm configuration and scripts
├── CHANGELOG.md                 # Version history and changes
├── LICENSE                      # MIT License
└── README.md                    # This file
```

---

## 🔧 How It Works

### Dynamic Module Loading

The `index.html` file uses JavaScript to dynamically load and inject HTML modules:

```javascript
const [headerRes, linksRes, footerRes, versionRes] = await Promise.all([
  fetch('header.module.html', { cache: 'no-store' }),
  fetch('links.module.html', { cache: 'no-store' }),
  fetch('footer.module.html', { cache: 'no-store' }),
  fetch('version.json', { cache: 'no-store' })
]);
```

**Why `cache: 'no-store'`?**
- Prevents the browser from serving cached content
- Avoids HTTP 304 (Not Modified) responses with empty bodies
- Ensures modules always load with fresh content during development

### Server Configuration

The project uses Python's built-in `http.server` module for simplicity:
- **No configuration needed**: Works out of the box
- **No redirects**: Serves `.html` files exactly as requested
- **No caching issues**: Simple and predictable behavior
- **Zero dependencies**: Python 3 is pre-installed on most systems

Combined with the `cache: 'no-store'` fetch configuration in `index.html`, this ensures modules always load with fresh content during development.

---

## 🛠️ Development

### Adding a New Link

1. Open `links.module.html`
2. Add a new `<li>` item:
   ```html
   <li><a href="https://example.com" target="_blank">New Link</a></li>
   ```
3. Save and refresh the browser

### Updating Version

1. Open `version.json`
2. Update the `version` and `lastUpdated` fields:
   ```json
   {
     "version": "0.1.0",
     "lastUpdated": "2025-10-21T10:00"
   }
   ```
3. Document changes in `CHANGELOG.md`

### Modifying Styles

- Edit `style.module.css` to change colors, fonts, or layout
- Changes apply globally across all modules

---

## 🐛 Troubleshooting

### Issue: Getting 304 (Not Modified) errors

**Solution:**
- The Python HTTP server doesn't send ETags by default, preventing 304 responses
- Verify fetch calls in `index.html` include `{ cache: 'no-store' }`
- Clear browser cache: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

### Issue: Port 3000 already in use

**Solution:**
```bash
# Kill process using port 3000
lsof -ti :3000 | xargs kill -9

# Or use a different port
python3 -m http.server 8080
```

### Issue: Modules not loading

**Solution:**
- Check browser console for errors (F12)
- Verify all `.module.html` files exist in the project root
- Ensure `version.json` is valid JSON
- Confirm server is running: `curl http://localhost:3000/header.module.html`

---

## 📜 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

## 👤 Author

**Gerasimos Makis Mouzakitis**
- GitHub: [@GerasimosMakisMouzakitis](https://github.com/GerasimosMakisMouzakitis)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- Built with vanilla HTML, CSS, and JavaScript
- Served with Python's built-in `http.server` module
- Inspired by the principles of civic transparency and open web

---

**Happy Linking! 🔗**
