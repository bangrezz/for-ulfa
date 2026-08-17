# For Ulfa ♡

A personal, romantic, and elegant digital celebration & surprise website for **Ulfa** on her **Yudisium (18 August 2026)**.

Designed with soft lavender tones, editorial typography, mobile-first touch optimization, subtle micro-animations, and full compatibility with GitHub Pages.

---

## 🌸 Features

- **Intimate Opening**: Soft ambient greeting with interactive *"Open Your Surprise ♡"* reveal and celebration sparkles.
- **Hero Presentation**: Editorial portrait layout with Ulfa's Yudisium sash (*Ulfatul Mutthoimah, S.Farm*).
- **Spacious Achievement Callout**: Minimalist milestone tribute for 18.08.2026.
- **Personal Message**: Translucent glassmorphism letter card with heartfelt note and handwritten signature.
- **Floating Memories Gallery**: Editorial scrapbook layout with responsive cards, gentle tilt, and full-featured fullscreen Lightbox.
- **Things I'm Proud of You For**: Vertical storytelling cards celebrating her dedication, resilience, and journey.
- **Cinematic Milestone**: Spotlight on her Seminar Proposal journey with soft lavender overlay.
- **Next Chapter Teaser**: Graduation teaser for September 2026 (with extensible countdown support).
- **Interactive Love Letter**: Tap-to-reveal envelope with closing words.
- **Tribute Ending**: Intimate close-up photograph and warm sign-off.
- **Audio Experience**: Background music controller with graceful silent fallback.
- **Mobile First**: Optimized for smartphones (320px–430px) through large desktop monitors (1920px+).

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open `http://localhost:5173/for-ulfa/` in your browser.

### 3. Build & Preview
```bash
npm run build
npm run preview
```

### 4. Expose via ngrok
```bash
# Terminal 1: Run Vite with host flag
npm run dev -- --host

# Terminal 2: Expose Vite port via ngrok
ngrok http 5173
```
Then visit the generated ngrok URL with `/for-ulfa/`, e.g. `https://xxxx.ngrok-free.app/for-ulfa/`.

---

## 🌐 Deploy to GitHub Pages

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: For Ulfa surprise website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/for-ulfa.git
   git push -u origin main
   ```
2. Go to **Repository Settings > Pages**.
3. Under **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the site to:
   `https://<YOUR_USERNAME>.github.io/for-ulfa/`

---

## ⚙️ Content Configuration

All texts, dates, and settings are centralized in:
`src/data/content.js`

### Setting Exact Graduation Date
When the official graduation date is known, simply set the `date` string in `src/data/content.js`:
```javascript
graduation: {
  month: "September",
  year: 2026,
  date: "2026-09-20", // YYYY-MM-DD format activates countdown timer
}
```

### Background Music
To add music, place your audio file at `public/audio/bgm.mp3`. It will automatically play when the surprise is opened.
