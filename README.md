# Lynera Host - Landing Page

A simple, responsive landing page for Lynera Hosting showcasing various hosting services.

## Features

- **VPS Hosting** - Full root access with high-performance SSD storage
- **CPanel Hosting** - Easy-to-use cPanel with one-click installs
- **Minecraft Hosting** - Instant setup with DDoS protection and mod support
- **Bot Hosting (Discord)** - 24/7 online Discord bot hosting with Node.js support

## Dynamic Pricing

All prices are loaded dynamically from `prices.json`, making it easy to update pricing without modifying the HTML or JavaScript code.

### Updating Prices

To update prices, simply edit the `prices.json` file:

```json
{
  "vps": {
    "name": "VPS Hosting",
    "price": "$9.99",
    "period": "month"
  },
  ...
}
```

## Files

- `index.html` - Main landing page structure
- `styles.css` - Responsive styling with gradient background
- `script.js` - Dynamic price loading functionality
- `prices.json` - Master pricing configuration file

## Usage

Simply open `index.html` in a web browser, or serve it with any web server:

```bash
python3 -m http.server 8000
```

Then navigate to `http://localhost:8000` in your browser.