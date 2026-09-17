# دليل رفع موقع Robox Industries على Hostinger

المشروع مقسوم لجزئين:

- `frontend/` → React (Vite) — بيتحول لملفات HTML/CSS/JS ثابتة وبترفعها في `public_html`.
- `backend/` → PHP + MySQL API — بيتترفع في `public_html/api` (أو subdomain مستقل زي `api.robox-industries.com`).

---

## 0) الرفع الأوتوماتيكي (GitHub Actions)

في المشروع ملف `.github/workflows/deploy.yml` بيعمل ديبلوي أوتوماتيك لـ Hostinger عن طريق FTP في كل مرة تعمل push على branch `main`:
- بيعمل build للفرونت إند وبيرفع محتوى `frontend/dist/` على جذر الاستضافة.
- بيرفع `backend/api/` على `public_html/api/`.
- **مش بيلمس** `backend/api/config.php` أبدًا (عشان ملف الداتابيز الحقيقي بتاعك على السيرفر ما يتمسحش لما تعمل push جديد).

### لازم تضيف الـ Secrets دي في GitHub (مرة واحدة فقط):

من صفحة الريبو على GitHub: **Settings → Secrets and variables → Actions → New repository secret**

| الاسم | القيمة |
|---|---|
| `FTP_SERVER` | من hPanel → **Files → FTP Accounts** (مثلاً `ftp.robox-industries.com`) |
| `FTP_USERNAME` | اسم مستخدم FTP من نفس الصفحة |
| `FTP_PASSWORD` | باسورد حساب الـ FTP |

اختياري (تبويب **Variables** جنب Secrets، لو الإعدادات الافتراضية مش مناسبة لحسابك):

| الاسم | الافتراضي | لإمتى تغيّره |
|---|---|---|
| `VITE_API_URL` | `https://robox-industries.com/api` | لو الدومين النهائي مختلف |
| `FTP_ROOT_DIR` | `./` | لو حساب الـ FTP بيبدأ مش من `public_html` مباشرة (مثلاً `domains/robox-industries.com/public_html/`) |
| `FTP_API_DIR` | `./api/` | لو عايز الباك إند في مسار تاني |

**أنا (Claude) معنديش وصول لحساب Hostinger أو GitHub بتاعك، فمينفعش أضيف الـ Secrets دي بدالك — لازم تدخلها إنت من صفحة الريبو مباشرة.**

بعد ما تضيفهم، أي `git push` على `main` هيعمل ديبلوي أوتوماتيك. تقدر كذلك تشغّله يدويًا من تبويب **Actions** في الريبو (Run workflow).

**أول مرة فقط** لازم كذلك تعمل الخطوات اليدوية في قسم (1) و(2) تحت (إنشاء الداتابيز، واستيراد `schema.sql` و`seed.sql`، وإنشاء `config.php` على السيرفر بالبيانات الحقيقية) — الـ Action مش بيعمل الحاجات دي، بس بيرفع الكود.

---

## 1) قاعدة البيانات (MySQL)

1. من **hPanel** → **Databases** → **MySQL Databases** أنشئ:
   - Database جديدة (مثلاً `u123456789_robox`)
   - User جديد بباسورد قوي، واربطه بالـ Database (كل الصلاحيات).
2. افتح **phpMyAdmin** من نفس الصفحة، اختار الداتابيز، وادخل على تبويب **Import**:
   - Import أول `backend/sql/schema.sql` (بيعمل الجداول).
   - بعد كده Import `backend/sql/seed.sql` (بيحشو الجداول بالمنتجات والشركاء والمدونة الحالية).

---

## 2) الباك إند (PHP API)

> **ملحوظة لو بتستخدم GitHub Actions (قسم 0):** الـ Action عمدًا مش بيرفع `config.php` (عشان ميمسحش نسخة السيرفر الحقيقية بعدين). يعني الخطوة دي (تحديد بيانات الداتابيز) لازم تعملها إنت مرة واحدة بس، يدويًا، عن طريق **File Manager** في hPanel: افتح `public_html/api/config.php` (لو ملوش وجود لسه، انسخ محتوى `backend/api/config.php` من الريبو وحطه في ملف جديد بنفس الاسم على السيرفر) وعدّل فيه البيانات الحقيقية تحت.

1. افتح `backend/api/config.php` وعدّل القيم دي بالبيانات الحقيقية اللي طلعت من الخطوة السابقة:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_NAME', 'u123456789_robox');
   define('DB_USER', 'u123456789_robox');
   define('DB_PASS', 'your-real-password');
   ```
2. لو الفرونت والباك إند هيكونوا على نفس الدومين، سيبها زي ما هي:
   ```php
   define('ALLOWED_ORIGINS', '*');
   ```
   لو عايز تقفلها على الدومين بتاعك بس (أأمن):
   ```php
   define('ALLOWED_ORIGINS', 'https://robox-industries.com,https://www.robox-industries.com');
   ```
3. ارفع محتويات مجلد `backend/api/` (الملفات اللي جوه، مش المجلد سول `sql/`) إلى:
   - `public_html/api/` عن طريق **File Manager** في hPanel، أو FTP.
   - **لا ترفع مجلد `backend/sql/` أبدًا** — هو للاستيراد اليدوي في phpMyAdmin فقط.
4. تأكد إن استضافتك بتدعم PHP 8+ (Hostinger شغالة بيها افتراضيًا) من **hPanel → Advanced → PHP Configuration**.

بعد الرفع، جرب تفتح المسار ده في المتصفح للتأكد إن الـ API شغال:
```
https://robox-industries.com/api/products.php
```
لو ظهرت ليك بيانات JSON، يعني كل حاجة تمام.

---

## 3) الفرونت إند (React)

1. من جهازك، جوه `frontend/`:
   ```bash
   cp .env.example .env
   ```
   وعدّل `VITE_API_URL` في `.env` عشان يشاور على مكان الـ API بعد الرفع:
   ```
   VITE_API_URL=https://robox-industries.com/api
   ```
2. بعد كده اعمل build:
   ```bash
   npm install
   npm run build
   ```
3. هيتعمل مجلد `dist/` — ارفع **كل اللي جواه** (مش المجلد نفسه) إلى `public_html/` (جذر الدومين) عن طريق File Manager أو FTP.
4. ملف `.htaccess` موجود جوه `dist/` تلقائيًا (بيتنسخ من `frontend/public/.htaccess` وقت الـ build) وهو المسؤول عن خلي روابط React Router (زي `/products` أو `/company`) تشتغل بعد الـ refresh من غير 404.

---

## 4) فورم التواصل

فورم "Contact Us" بيبعت البيانات لـ `POST /api/contact.php`، اللي بيعمل:
- Insert للرسالة في جدول `contact_messages` في قاعدة البيانات.
- محاولة إرسال إيميل تنبيه لـ `info@robox-industries.com` عن طريق `mail()` المدمجة في PHP (شغالة على استضافة Hostinger بشكل طبيعي). لو الإيميلات مش بتوصل أو بتقع في Spam، ممكن نبدلها بخدمة زي SMTP (PHPMailer + Gmail/SendGrid) بعدين.

---

## 5) بعد الرفع — چيك ليست سريع

- [ ] `https://robox-industries.com/` → الصفحة الرئيسية شغالة والسلايدر بيتحرك.
- [ ] `https://robox-industries.com/products` → المنتجات ظاهرة (يعني الـ API متوصل صح).
- [ ] فتح منتج ودوس Refresh → لازم الصفحة تفتح تاني من غير 404 (يعني `.htaccess` شغال).
- [ ] فورم Contact → إرسال رسالة تجريبية والتأكد إنها ظهرت في جدول `contact_messages` بالـ phpMyAdmin.
- [ ] تجربة الموقع على الموبايل.

---

## بنية المشروع

```
rrr/
  .github/workflows/deploy.yml   الديبلوي الأوتوماتيك على Hostinger عن طريق FTP
  frontend/           React app (Vite)
    src/
      pages/          الصفحات (Home, Products, ProductDetail, Company, Blogs, BlogDetail, Contact)
      components/     عناصر مشتركة (Navbar, Footer, ProductCard, ...)
      data/company.js نصوص الشركة الثابتة (About/Home/Contact info)
      lib/api.js       الاتصال بالـ API
  backend/
    api/              ملفات PHP (دي اللي بترفع على public_html/api)
    sql/              schema.sql + seed.sql (بيتستوردوا من phpMyAdmin بس، مش بيترفعوا)
```
