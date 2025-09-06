# Article App

**Author:** Ali Dhiaus Syamsi
**Live Demo:** [https://article-app-bay.vercel.app/login](https://article-app-bay.vercel.app/login)
**Repository:** [https://github.com/AliDhiaus/article-app](https://github.com/AliDhiaus/article-app)

---

## Deskripsi Projek

Article App adalah aplikasi web untuk mengelola dan mempublikasikan artikel secara profesional.
Fitur utamanya meliputi CRUD artikel, login/authentication, dan validasi formulir.
Dibuat menggunakan **Next.js**, **React**, **Tailwind CSS**, **Shadcn UI**, serta di-deploy di **Vercel**.

---

## Fitur Utama

* Login dan autentikasi menggunakan Cookies
* Formulir dengan validasi menggunakan `react-hook-form` + `zod`
* CRUD artikel (buat, edit, hapus, lihat)
* Dashboard responsif menggunakan Shadcn UI
* Live preview artikel

---

## Teknologi & Dependencies

* **Frontend:** Next.js, React, Tailwind CSS
* **UI Components:** Shadcn UI
* **Form Handling:** react-hook-form
* **Validation:** zod
* **Cookies / Session:** js-cookie
* **Version Control:** Git & GitHub
* **Deployment:** Vercel

Dependencies utama yang digunakan:

```bash
npm install react-hook-form zod js-cookie @radix-ui/react-<komponen> shadcn-ui tailwindcss
```

---

## Cara Menjalankan Projek Secara Lokal

1. Clone repository:

```bash
git clone https://github.com/AliDhiaus/article-app.git
cd article-app
```

2. Install dependencies:

```bash
npm install
```

3. Jalankan projek:

```bash
npm run dev
```

4. Buka browser di `http://localhost:3000`

---

## Struktur Projek

```
/article-app
├─ /pages        # Halaman Next.js
├─ /components   # Komponen UI reusable
├─ /public       # File statis
├─ /styles       # Styling global
├─ /lib          # Helper / util (misal api, cookies)
└─ README.md     # Dokumentasi projek
```

---

## Cara Menggunakan

1. Buka halaman login: [Login](https://article-app-bay.vercel.app/login)
2. Masukkan akun yang tersedia atau daftar baru
3. Masuk ke dashboard untuk menambahkan atau mengelola artikel

---

## Kontributor

* Ali Dhiaus Syamsi – Developer utama

---

## Catatan

* Pastikan koneksi internet stabil saat mengakses live demo di Vercel.
* Pastikan semua dependencies telah ter-install agar fitur form dan UI berfungsi dengan benar.
