# Project Status — For Ulfa ♡

Website kejutan yudisium personal untuk **Ulfa** (**18 Agustus 2026**) telah selesai diimplementasikan secara penuh, responsif, dan terverifikasi untuk mode lokal, ngrok, serta publikasi GitHub Pages.

---

## 1. Ringkasan Implementasi & Komponen

Website dirancang dengan estetika *digital love letter / personal celebration*:
- **Opening (Section 01)**: Layar pembuka intim dengan teks *"Hey, I made something for you."*, subtext, tombol *"Open Your Surprise ♡"*, efek konfeti lembut lavender/emas, dan pemicu audio background.
- **Hero (Section 02)**: Menampilkan foto utama `main-4x5.jpeg` dengan tata letak editorial split (desktop) dan vertikal terfokus (mobile), memastikan wajah dan selempang *"Ulfatul Mutthoimah, S.Farm"* terlihat jelas tanpa terpotong (`object-position: 50% 30%`).
- **Achievement (Section 03)**: Minimal statement milestone *"You did it, Ulfa. 18.08.2026"* dengan whitespace lega.
- **Personal Message (Section 04)**: Kartu kaca transparan (*glassmorphic card*) berisi pesan personal menyentuh dan tanda tangan *"— F"*.
- **Photo Story / Gallery (Section 05)**: Tata letak *editorial scrapbook* / *floating memories* dengan rotasi halus (1–2°), kartu foto asimetris, dan modal **Lightbox Fullscreen** (mendukung sentuhan, klik, dan keyboard ESC).
- **Proud of You (Section 06)**: 4 kartu *vertical storytelling* (Your Hard Work, Your Strength, Your Journey, And You).
- **Cinematic Section (Section 07)**: Foto Seminar Proposal dengan buket ungu raksasa, dilengkapi overlay gradien lavender lembut dan teks *"This is your moment. You earned it."*.
- **Next Chapter (Section 08)**: Teaser wisuda *"Graduation 🎓 September 2026"*. Terhubung dengan hook hitung mundur dinamis yang aman (tidak memunculkan countdown palsu selama `date: null`).
- **Final Letter (Section 09)**: Kartu interaktif *"One last thing..."* yang dapat diklik untuk membuka surat penutup.
- **Ending (Section 10)**: Penutup tenang dengan foto detail selempang bersulam emas dan buket bunga mawar/lili.
- **Music Control**: Tombol mengambang elegan di pojok kanan bawah dengan visualizer soundwave (otomatis hening tanpa error jika file audio belum dimasukkan).
- **Ambient Decorations**: Partikel kelopak bunga lavender terapung ringan berbasis SVG & CSS tanpa memberatkan performa mobile.

---

## 2. Pemetaan & Penggunaan 10 Foto

Semua 10 foto asli dipertahankan di root folder tanpa modifikasi. Salinan aman untuk web tersedia di `public/photos/`:

| No | File Asli | File Web Asset | Section Penggunaan | Framing & Positioning |
|:---|:---|:---|:---|:---|
| 1 | `main-4x5.jpeg` | `hero-main.jpeg` | **Hero Section** | `object-position: 50% 30%` (fokus wajah, senyum, & selempang) |
| 2 | `WhatsApp Image 2026-08-16 at 21.45.32.jpeg` | `cinematic-milestone.jpeg` | **Cinematic Milestone Section** | `object-position: 50% 45%` (backdrop sempro & buket ungu) |
| 3 | `WhatsApp Image 2026-08-16 at 21.45.323.jpeg` | `gallery-05.jpeg` | **Gallery: The Milestones** | `object-position: 50% 35%` (duduk di taman bersama naskah skripsi bertabur sticky notes) |
| 4 | `WhatsApp Image 2026-08-16 at 21.45.06.jpeg` | `gallery-01.jpeg` | **Gallery: Semangat Baru** | `object-position: 50% 40%` (jas almamater & buket bunga) |
| 5 | `WhatsApp Image 2026-08-16 at 21.45.08.jpeg` | `gallery-02.jpeg` | **Gallery: Penuh Syukur** | `object-position: 50% 30%` (duduk di tangga, senyum candid) |
| 6 | `WhatsApp Image 2026-08-16 at 21.45.324.jpeg` | `gallery-06.jpeg` | **Gallery: Lembar Perjalanan** | `object-position: 50% 40%` (membaca naskah skripsi di taman) |
| 7 | `WhatsApp Image 2026-08-16 at 21.45.083.jpeg` | `gallery-04.jpeg` | **Gallery: Langkah Tegap** | `object-position: 50% 25%` (pose pilar megah di tangga) |
| 8 | `WhatsApp Image 2026-08-16 at 21.45.081.jpeg` | `gallery-03.jpeg` | **Gallery: Hari Istimewa** | `object-position: 50% 35%` (lobby lift marmer dengan selempang) |
| 9 | `WhatsApp Image 2026-08-16 at 21.46.11.jpeg` | `gallery-07.jpeg` | **Gallery: Joy & Laughter** | `object-position: 50% 45%` (pose candid di balik buket bunga) |
| 10 | `WhatsApp Image 2026-08-16 at 21.46.113.jpeg` | `ending-detail.jpeg` | **Ending Tribute Section** | `object-position: 50% 50%` (close-up makro selempang emas & mawar) |

---

## 3. Tech Stack & Dependencies

- **Runtime & Bundler**: Vite 6 + React 19
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design System (Soft Lavender Palette)
- **Typography**: Google Fonts (*Playfair Display*, *Cormorant Garamond*, *Plus Jakarta Sans*, *Great Vibes*, *Caveat*)
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Confetti**: Canvas-Confetti (ringan, ramah mobile)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)

---

## 4. Panduan Menjalankan Project

### A. Menjalankan secara Lokal
```bash
npm install
npm run dev
```
Akses di browser pada: `http://localhost:5173/for-ulfa/`

### B. Preview Build Production
```bash
npm run build
npm run preview
```

### C. Menjalankan untuk ngrok
Jalankan dev server dengan akses jaringan:
```bash
npm run dev -- --host
```
Lalu di terminal terpisah jalankan ngrok ke port 5173:
```bash
ngrok http 5173
```
Buka URL ngrok yang dihasilkan dengan menambahkan path `/for-ulfa/`, misalnya:
`https://xxxx.ngrok-free.app/for-ulfa/`

---

## 5. Panduan Deploy ke GitHub Pages

1. Buat repository baru di GitHub bernama `for-ulfa` (atau sesuaikan dengan setting `base` di `vite.config.js`).
2. Push seluruh folder project ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "feat: surprise website for Ulfa"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/for-ulfa.git
   git push -u origin main
   ```
3. Di repository GitHub Anda, buka **Settings > Pages**.
4. Di bagian **Build and deployment > Source**, pilih **GitHub Actions**.
5. Workflow di `.github/workflows/deploy.yml` akan otomatis mem-build dan mempublikasikan website ke:
   `https://<USERNAME>.github.io/for-ulfa/`

---

## 6. Lokasi Konfigurasi & Pengeditan Teks

Seluruh teks dan tanggal dikumpulkan terpusat di:
`src/data/content.js`

### Mengatur Tanggal Wisuda (Jika Sudah Diumumkan)
Buka file `src/data/content.js` pada bagian `graduation`:
```javascript
graduation: {
  badge: "Next Chapter",
  title: "Graduation 🎓",
  month: "September",
  year: 2026,
  date: "2026-09-20", // Isi tanggal pasti (format YYYY-MM-DD) untuk mengaktifkan countdown otomatis
  copy: "Another beautiful moment is waiting for you."
}
```

### Menambahkan Musik Latar Belakang (Opsional)
Jika ingin menyertakan musik latar:
1. Simpan file lagu berformat MP3 di: `public/audio/bgm.mp3`
2. Musik akan otomatis diputar saat Ulfa menekan tombol *"Open Your Surprise ♡"*.
