# Photo Audit & Visual Analysis — For Ulfa

Audit dilakukan pada seluruh 10 file foto asli di dalam folder `for-ulfa` tanpa melakukan perubahan, overwrite, cropping permanen, maupun kompresi destruktif pada file aslinya.

---

## 1. Metadata & Dimensi Foto

| File | Resolution | Ratio | Orientation | File Size | Framing & Subjek | Cropping Risk & Notes | Recommended Section |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `main-4x5.jpeg` | 3024 × 4032 | 3:4 | Portrait | 1.05 MB | Ulfa duduk di tangga kayu, mengenakan selempang yudisium *"Ulfatul Mutthoimah, S.Farm"* & memegang buket bunga mawar/lili. Arsitektur lengkung elegan di latar belakang. | Ruang atas luas, wajah di sepertiga tengah. Aman dicrop dengan `object-position: center 30%`. | **Hero Section** (Foto Utama) |
| `WhatsApp Image 2026-08-16 at 21.45.06.jpeg` | 2268 × 4032 | 9:16 | Portrait | 355 KB | Ulfa berdiri mengenakan jas almamater biru & jilbab hitam memegang buket bunga, latar dinding putih minimalis. | Rasio asli sudah 9:16 (mobile screen fit). Sepertiga atas adalah dinding kosong, sangat aman untuk mobile portrait. | **Gallery — Memory Card (Semhas/Sempro)** |
| `WhatsApp Image 2026-08-16 at 21.45.08.jpeg` | 3024 × 4032 | 3:4 | Portrait | 1.03 MB | Ulfa duduk di tangga kayu (seri sama dengan Hero), tersenyum candid menatap ke arah samping. | Pencahayaan hangat & intim, komposisi sangat seimbang. | **Gallery — Editorial Scrapbook** |
| `WhatsApp Image 2026-08-16 at 21.45.081.jpeg` | 3024 × 4032 | 3:4 | Portrait | 935 KB | Ulfa berdiri di depan lift marmer hotel/gedung dengan selempang yudisium & buket bunga. | Komposisi vertikal simetris dengan pintu lift. Wajah di tengah atas. | **Gallery — Floating Memory Card** |
| `WhatsApp Image 2026-08-16 at 21.45.083.jpeg` | 3024 × 4032 | 3:4 | Portrait | 1.06 MB | Ulfa di tangga bersandar pada pegangan kayu, menatap ke atas dengan pilar megah di sisi kanan. | Sudut pandang anggun & editorial. Perlu `object-position: center 25%` agar tatapan dan wajah tidak terpotong. | **Proud of You Section / Gallery Hero** |
| `WhatsApp Image 2026-08-16 at 21.45.32.jpeg` | 2340 × 4160 | 9:16 | Portrait | 652 KB | Ulfa tersenyum di depan backdrop seminar proposal Farmasi FKIK Universitas Mataram memegang buket ungu/lavender raksasa. | Nuansa warna backdrop & bunga ungu/lavender sangat selaras dengan tema website (*soft lavender*). | **Cinematic Milestone Section** |
| `WhatsApp Image 2026-08-16 at 21.45.323.jpeg` | 2340 × 4160 | 9:16 | Portrait | 1.86 MB | Ulfa duduk di rumput taman kampus memegang naskah proposal skripsi penuh sticky notes, dikelilingi belasan buket bunga & hadiah. Menatap kamera. | Sangat kaya warna dan detail emosional (perjuangan skripsi). Format 9:16 tinggi, `object-position: center 40%`. | **Gallery — The Journey & Hard Work** |
| `WhatsApp Image 2026-08-16 at 21.45.324.jpeg` | 2340 × 4160 | 9:16 | Portrait | 1.91 MB | Momen candid di taman kampus bersama tumpukan buket bunga, Ulfa tersenyum melihat ke arah naskah skripsinya. | Nuansa sangat natural dan menyentuh. | **Gallery Scrapbook — The Process** |
| `WhatsApp Image 2026-08-16 at 21.46.11.jpeg` | 3024 × 4032 | 3:4 | Portrait | 970 KB | Pose candid playful: Ulfa mengintip / menutupi wajahnya di balik buket bunga besar, memperlihatkan selempang *"Ulfatul Mutthoimah, S.Farm"*. | Momen ceria dan manis. Sangat cocok sebagai sentuhan kejutan / *One Last Thing* / Lightbox easter egg. | **Gallery — Playful Moment / Envelope Accent** |
| `WhatsApp Image 2026-08-16 at 21.46.113.jpeg` | 3024 × 4032 | 3:4 | Portrait | 1.19 MB | Close-up macro detail: selempang bludru marun bersulam emas *"Ulfatul Mutthoimah, S.Farm"* dan rangkaian bunga lili & mawar ungu/pink. | Detail estetis tekstur bunga dan gelar kesarjanaan. Sangat cocok untuk penutup intim / *Ending Section*. | **Ending Section — Final Photograph / Closing Tribute** |

---

## 2. Analisis Komposisi & Art Direction

1. **Konsistensi Subjek & Cerita:**
   - Foto mendokumentasikan dua babak utama perjalanan Ulfa:
     1. **Momen Seminar Proposal Skripsi Farmasi Unram** (dengan jas almamater, naskah skripsi penuh catatan revisi, dan dukungan teman-teman).
     2. **Momen Yudisium S.Farm** (dengan selempang kesarjanaan *"Ulfatul Mutthoimah, S.Farm"*, baju putih, buket bunga istimewa, dan suasana tangga arsitektural yang anggun).
2. **Kesesuaian Palet Warna:**
   - Semua foto memiliki aksen bunga ungu, lavender, pink lembut, serta nuansa netral marmer & kayu hangat. Ini secara alami sangat harmonis dengan sistem warna *soft lavender* (`#FBF9FF`, `#A875E4`, `#7047A5`).
3. **Strategi Responsif (Mobile First & Desktop Adaptability):**
   - Karena seluruh 10 foto berorientasi *portrait* (3:4 dan 9:16), pengalaman mobile (320px–430px) akan sangat memukau secara native tanpa distorsi.
   - Pada desktop, foto ditampilkan dengan editorial card floating, split layout, dan dynamic aspect-ratio container untuk menghindari cropping yang memotong mata atau wajah.
