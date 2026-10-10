# Sistem Dashboard Logistik SATGAS KARHUTLA Kab. Pulau Taliabu

Dashboard web interaktif untuk transparansi persediaan dan penyaluran logistik bencana (Karhutla) Posko Utama Pemda Kabupaten Pulau Taliabu.

Sistem ini dirancang menggunakan arsitektur **Serverless Modern**:
- **Frontend**: HTML5, CSS3, dan JavaScript (Vanilla ES6+) yang terpisah dan siap di-hosting gratis via **GitHub Pages**.
- **Database Backend**: **Google Sheets** yang dikendalikan melalui **Google Apps Script (GAS) Web App API**.
- **Akses**: Terbuka untuk umum (publik) dalam mode baca/monitoring, dilengkapi sistem proteksi **PIN Petugas** untuk input transaksi masuk/keluar, tambah barang, dan koreksi data.

---

## 📁 Struktur Berkas

```
dashboard_satgas_karhutla/
├── index.html        # Kerangka antarmuka dashboard responsif & modal interaktif
├── style.css         # Styling modern, tema kebencanaan/karhutla, cetak & mobile-ready
├── app.js            # Logika frontend, state management, filter/sort, koneksi API GAS
├── Code.gs           # Kode backend Google Apps Script (API Web App & Database Handler)
└── README.md         # Informasi Ringkas Tentang Aplikasi ini
```

---


## 🛡️ Fitur Utama Sistem

1. **Dashboard Publik Real-Time**:
   - Kartu Indikator KPI: Total Jenis Barang, Total Stok Masuk, Total Disalurkan, Sisa di Gudang, dan Peringatan Stok Menipis/Habis.
   - Pencarian cerdas (fuzzy search nama barang dan satuan).
   - Filter Status Stok: Semua, Tersedia (> 5), Menipis (1-5), dan Habis (0).
   - Filter Kategori Satuan (Dos, Karung, Rak, Renteng, Pak, Bungkus, Kg, Kaleng).
   - Pengurutan data (No urut, Nama A-Z, Stok Terbanyak, Stok Tersedikit, Penyaluran Terbanyak).
2. **Sistem Keamanan Akses Petugas (Admin Mode)**:
   - Pengunjung umum hanya dapat melihat data (read-only).
   - Petugas Posko dapat login dengan PIN untuk membuka akses input.
3. **Pencatatan Transaksi Masuk & Keluar**:
   - Form input mutasi stok dengan validasi otomatis (mencegah penyaluran melebihi sisa fisik di gudang).
   - Mencatat keterangan penerima/sumber dan nama petugas.
   - Otomatis mencatat riwayat ke sheet `LOG_TRANSAKSI`.
4. **Koreksi Data & Tambah Barang Baru**:
   - Kemudahan menambah varian barang bantuan baru kapan saja.
   - Fitur koreksi data untuk audit / stok opname fisik.
5. **Ekspor & Cetak Laporan**:
   - Tombol **Unduh CSV** siap olah di Excel.
   - Tombol **Cetak** teroptimasi format kertas A4/F4 bebas tombol navigasi.
