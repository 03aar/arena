# Arena - Early Access Landing Page

> Where innovation lives.

Ultra-minimal, Apple-inspired landing page for Arena early access.

## 🚀 Deployment

### Vercel (Recommended - Production Ready)

**Fastest & easiest deployment with custom domain support:**

1. Go to [vercel.com](https://vercel.com) and login with GitHub
2. Click "Add New..." → "Project"
3. Import your `03aar/arena` repository
4. Click "Deploy"
5. Done! Your site is live in ~30 seconds

**Benefits:**
- ✅ Free HTTPS/SSL
- ✅ Global CDN (ultra-fast worldwide)
- ✅ Auto-deploy on git push
- ✅ Custom domain support
- ✅ Zero configuration

📖 **Detailed guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md) for full instructions

---

### Alternative Hosting Options

**HTML Preview (Instant Access - No Setup):**
```
https://htmlpreview.github.io/?https://github.com/03aar/arena/blob/claude/arena-landing-page-01AYHNtQFBJnoYHKb6njemSA/index.html
```

**GitHub Pages:**
1. Merge to main branch
2. Go to repository **Settings** → **Pages**
3. Select branch: **main** and folder: **/ (root)**
4. Your site will be at: `https://03aar.github.io/arena/`

## Design Philosophy

- **Ultra-minimal**: Clean, intentional design with plenty of white space
- **Apple-like aesthetic**: Soft gradients, subtle shadows, fluid motion
- **Calm & focused**: No noise, no clutter, just clarity

## Brand Colors

- **Obsidian Black**: `#0B0B0D`
- **Deep Midnight Blue**: `#0F1A2B`
- **Electric Blue Accent**: `#277CFF`
- **Soft Ice Light**: `#E7EDF7`
- **Pure White**: `#FFFFFF`

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations
- Subtle hover interactions
- Atmospheric gradient effects
- Apple-style button interactions with ripple effect
- Direct link to early access form via TinyURL
- Optimized performance

## Early Access Integration

Both CTA buttons ("Get Started" and "Apply for Early Access") link to:
```
https://tinyurl.com/ARENA-Early-Access
```

Users will be redirected to your early access form when they click the buttons.

## Structure

```
/
├── index.html        # Main landing page
├── styles.css        # All styling (brand colors, layout, animations)
├── script.js         # Interactions and subtle animations
├── vercel.json       # Vercel deployment configuration
├── README.md         # Documentation
└── DEPLOYMENT.md     # Detailed deployment guide
```

## Local Development

Simply open `index.html` in a modern browser.

For live preview with hot reload:
```bash
# Using Python
python3 -m http.server 8000

# Or using Node.js
npx serve
```

Then visit `http://localhost:8000`

## Technology Stack

- Pure HTML5, CSS3, JavaScript (ES6+)
- No frameworks, no dependencies
- Vanilla, lightweight, fast

## Company

**LuminaFi Technologies**

_"Designed with intention."_
