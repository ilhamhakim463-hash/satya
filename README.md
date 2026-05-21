# SATYA'PROPERTY – Enterprise Real Estate Website
## Dokumentasi Lengkap

---

## 📁 Struktur File

```
satya-property/
├── index.html              ← Homepage utama dengan hero slider
├── properties.html         ← Daftar semua 6 properti
├── property-detail.html    ← Halaman detail properti (dynamic by ?id=1-6)
├── about.html              ← Tentang kami & tim
├── articles.html           ← Daftar artikel & edukasi
├── article-detail.html     ← Detail artikel dengan reading progress
├── contact.html            ← Halaman kontak enterprise
│
├── css/
│   └── main.css            ← Semua styling (tema navy-gold luxury)
│
├── js/
│   ├── main.js             ← JavaScript utama (slider, animasi, form)
│   └── components.js       ← Shared components (opsional)
│
└── assets/
    └── images/
        ├── logo.svg         ← Logo SATYA'PROPERTY
        ├── favicon.svg      ← Favicon
        ├── hero-1.jpg       ← Hero slide 1 (Villa Kintamani Hills)
        ├── hero-2.jpg       ← Hero slide 2 (Skyline Residence)
        ├── hero-3.jpg       ← Hero slide 3 (Royal Highlands)
        ├── hero-4.jpg       ← Hero slide 4 (Harmoni Seaview)
        ├── prop-1-main.jpg  ← Villa Kintamani Hills
        ├── prop-2-main.jpg  ← Griya Nusantara
        ├── prop-3-main.jpg  ← Skyline Residence
        ├── prop-4-main.jpg  ← Harmoni Seaview
        ├── prop-5-main.jpg  ← Royal Highlands
        ├── prop-6-main.jpg  ← The Pinnacle
        ├── prop-*-pool.jpg  ← Foto kolam renang tiap properti
        ├── prop-*-interior.jpg ← Foto interior tiap properti
        ├── testi-1.jpg ... testi-6.jpg ← 6 foto testimoni
        ├── team-1.jpg ... team-4.jpg   ← Foto tim
        ├── agent-1.jpg      ← Foto agen properti
        ├── about-main.jpg   ← Foto halaman about
        ├── article-1.jpg ... article-6.jpg ← Thumbnail artikel
        └── avatar-placeholder.svg
```

---

## 🎨 Fitur Utama

### ✅ Sudah Diimplementasikan:
1. **Dual Language** (ID/EN) – Switcher di atas navbar, menyimpan pilihan di localStorage
2. **Auto-Sliding Hero** – 4 slides dengan Ken Burns effect, interval 6 detik
3. **Property Grid** – 6 properti dengan filter kategori
4. **Property Detail** dengan:
   - Gallery foto multi-ruangan (Eksterior, Kolam, Kamar, Dapur, Taman)
   - Modal gallery lightbox dengan keyboard navigation
   - Peta interaktif (OpenStreetMap dengan dark filter)
   - Tombol "Lihat Rute" & "Jelajahi Area Sekitar" → Google Maps
   - Analisis investasi & artikel per properti
   - Form WhatsApp dengan pesan default otomatis
5. **WhatsApp Float Button** – Selalu ada di semua halaman
6. **Contact Form** → Mengirim via WhatsApp dengan format pesan enterprise
7. **Reading Progress Bar** – di article-detail.html dan property-detail.html
8. **Fade-in Scroll Animations** – Semua section animate on scroll
9. **Counter Animation** – Angka statistik animate saat masuk viewport
10. **FAQ Accordion** – di halaman kontak
11. **Social Media Links** – Semua dapat diklik (Instagram, Facebook, WA, TikTok, YouTube, LinkedIn)
12. **Mobile Responsive** – Hamburger menu, responsive grid

---

## 🔧 Kustomisasi Mudah

### Ganti Nomor WhatsApp:
Cari dan ganti `6281234567890` di semua file HTML dengan nomor Anda.

### Ganti Foto Properti:
Ganti file di `assets/images/prop-*-main.jpg` dengan foto asli.
Ukuran yang disarankan: 900x675px untuk properti, 1920x1080px untuk hero.

### Tambah/Edit Properti:
Di `property-detail.html`, cari array `properties` di bagian `<script>` dan update data.

### Ubah Warna Tema:
Di `css/main.css`, edit variabel CSS di `:root`:
```css
--gold: #c9a84c;        /* Warna emas */
--navy: #0a0e1a;        /* Warna navy gelap */
--gold-light: #e8c97a;  /* Emas terang hover */
```

---

## 🌐 Cara Menggunakan

1. **Buka langsung**: Double-click `index.html` di browser
2. **Local server** (recommended): `python3 -m http.server 8000` lalu buka `http://localhost:8000`
3. **Deploy**: Upload semua file ke hosting (shared/VPS/Vercel/Netlify)

---

## 📱 Social Media yang Sudah Dikonfigurasi

| Platform | URL |
|----------|-----|
| Instagram | instagram.com/satyaproperty |
| Facebook | facebook.com/satyaproperty |
| WhatsApp | wa.me/6281234567890 |
| TikTok | tiktok.com/@satyaproperty |
| YouTube | youtube.com/@satyaproperty |
| LinkedIn | linkedin.com/company/satyaproperty |

*Ganti username sesuai akun klien.*

---

## 🏠 6 Properti yang Tersedia

| ID | Nama | Lokasi | Harga |
|----|------|--------|-------|
| 1 | Villa Kintamani Hills | Kintamani, Bali | Rp 14,5 M |
| 2 | Griya Nusantara | Pondok Indah, Jakarta | Rp 8,2 M |
| 3 | Skyline Residence | Menteng, Jakarta | Rp 22 M |
| 4 | Harmoni Seaview | Seminyak, Bali | Rp 18,5 M |
| 5 | Royal Highlands | Citraland, Surabaya | Rp 11,8 M |
| 6 | The Pinnacle | BSD City, Tangerang | Rp 6,5 M |

---

© 2024 SATYA'PROPERTY. Dibuat dengan ❤️ untuk klien istimewa.
