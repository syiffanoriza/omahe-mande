<p align="center"><img src="https://github.com/syiffanoriza/omahe-mande/blob/8c0920b06575b92c93b3927764fe4e3426b281f2/public/assets/app.svg" width="400" alt="Omahe Mande Logo" /></p>

# Omahe Mande

Website _Company Profile_ milik Omahe Group yang bekerjasama dengan Yukomikus Digital Creative Agency.

---
## Development Team

🔍 Bu Eka: Founder, Supervisor

🎨 Yuko Antonio: UI/UX, Graphic Designer

🛠️ Syiffa Noriza: Web Developer (10/2024 - 1/2025)

---
**About**

File README ini bertujuan untuk menyediakan ringkasan informasi mengenai project website ini serta arahan untuk memulai proses development selanjutnya.

**Perhatian**

Untuk developer selanjutnya, harap melampirkan segala penambahan ataupun pengurangan dev dependency dan plugins di file ini.

---
## Development Tools

1. Local Development Environment
    - Rekomendasi: [Laragon Full ^6.0](https://laragon.org/download/)

2. PHP version ^8.2
    - [Download Here](https://www.php.net/downloads.php)
    - Upgrade Laragon / LDE PHP version.

3. Visual C++ Redist latest version
    - [Download Here](https://www.apachelounge.com/download/)

4. Apache Binary version ^2.4 VS17
    - [Download Here](https://www.apachelounge.com/download/)
    - Upgrade Laragon / LDE Apache version.

5. Composer version ^2.8.4
    - [Download Here](https://getcomposer.org/download/)

6. Node.js version ^8.19
    - [Download Here](https://nodejs.org/en/download)
    - for `npm` commands

### Dev Requirements
```json
"php": "^8.2",
"laravel/framework": "^11.31",
"laravel/tinker": "^2.9",
"statamic/cms": "^5.0"
```

### Dev Dependencies
```json
"@tailwindcss/typography": "^0.5.12",
"autoprefixer": "^10.4.20",
"concurrently": "^9.0.1",
"flowbite": "^2.5.2",
"laravel-vite-plugin": "^1.0.2",
"postcss": "^8.5.1",
"tailwindcss": "^3.4.17",
"vite": "^6.0.7"
```

---
## Project Setup

Tutorial ini diperuntukkan bagi developer selanjutnya yang akan membuat local copy dari project ini menggunakan [git](https://git-scm.com/downloads). Pastikan git, composer, node.js dan tools-tools development lainnya sudah di-install pada device.

### Clone Repository

Pada IDE anda, Buka Terminal lalu jalankan command berikut:

```git
cd C:\laragon\www
git clone https://github.com/syiffanoriza/omahe-mande.git
cd omahe-mande
```

### Install Project Dependency

```
composer install
npm install
```

### Set Up Environment

```
cp .env.example .env
```

### Generate Application Key

```
php artisan key:generate
```

### Run Local Development

```
npm run dev
php artisan serve
```
