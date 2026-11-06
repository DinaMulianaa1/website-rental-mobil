WEBSITE PENYEWAAN MOBIL - RodaRental

ISI FOLDER
- index.html               : Beranda/Dashboard
- katalog_011.html    : Katalog mobil (nama file harus disesuaikan)
- form.html                : Form penyewaan
- style.css                : CSS layout, Flexbox, Grid, dan responsive
- script.js                : Validasi event submit dengan JavaScript

PENTING: PERSONALISASI NIM
1. Ganti "NIM_ANDA" pada nama file katalog_011.html dengan 3 digit terakhir NIM.
   Contoh NIM berakhiran 011: ubah nama file menjadi katalog_011.html.
2. Buka index.html dan form.html, ganti semua href "katalog_011.html"
   menjadi "katalog_011.html" (gunakan akhiran NIM Anda sendiri).
3. Pada script.js, ubah const NIM_AKHIR = "011" menjadi tiga digit terakhir NIM Anda.
4. Pada form.html, sesuaikan contoh nama pada petunjuk jika diperlukan.

CARA MENJALANKAN
- Ekstrak ZIP ke sebuah folder.
- Buka folder dengan Visual Studio Code.
- Jalankan index.html menggunakan ekstensi Live Server (klik kanan > Open with Live Server).
  Alternatif: jalankan server lokal dari folder ini dengan Python:
      python -m http.server 8000
  lalu buka http://localhost:8000

PENGUJIAN WAJIB
1. Buka halaman katalog melalui localhost.
2. Tekan F12 > Network, muat ulang halaman.
3. Klik permintaan dokumen HTML katalog. Pastikan Request Method: GET
   dan Status Code: 200 OK. Simpan screenshot tab Headers.
4. Uji tampilan katalog pada lebar desktop, lalu mode perangkat/mobile di DevTools.
   Ambil dua screenshot yang menunjukkan susunan kartu.
5. Uji form dengan lama sewa 0 atau kosong: pesan error harus muncul.
6. Uji form dengan nama yang tidak diakhiri tiga digit NIM: pesan error nama harus muncul.
7. Uji form dengan nama yang benar, mobil dipilih, dan lama sewa minimal 1 hari:
   pesan validasi berhasil harus muncul.
8. Ambil screenshot pesan error dan screenshot validasi berhasil.
9. Jangan menuliskan bahwa pengujian berhasil sebelum Anda menjalankannya sendiri.

CATATAN
Website ini merupakan demonstrasi front-end. Data pesanan belum disimpan ke database
dan tombol kirim hanya menampilkan hasil validasi pada browser.
