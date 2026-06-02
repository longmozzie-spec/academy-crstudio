# Dương Minh Thơ — Học Viện Hậu Kỳ Cinematic

Website cá nhân của giảng viên **Dương Minh Thơ** ([duongminhtho.vn](https://duongminhtho.vn)) — Founder CR Studio, dạy hậu kỳ video cinematic & A.I workflow.

Brand: **luxury cinematic** (đen + vàng `#D4A853` + serif Playfair Display).

---

## 🏗️ Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript** strict
- **Tailwind CSS v4**
- **Three.js** + **next-themes** (DottedSurface animated background)
- **framer-motion** (animation)
- **lucide-react** (icons)

---

## 📂 Cấu trúc routes

```
/                                          → Trang chủ (Hero, About, 4 video featured, courses teaser, Why Us, Contact)
/khoa-hoc                                  → Overview 2 nhánh khóa học
/khoa-hoc/co-ban                           → Khóa 0Đ landing (2 lớp)
  /khoa-hoc/co-ban/premiere                → Lớp Premiere 0Đ — slider 5 buổi video
  /khoa-hoc/co-ban/after-effect            → Lớp AE 0Đ — slider 3 buổi video
/khoa-hoc/nang-cao                         → Khóa Nâng Cao landing (3 lớp)
  /khoa-hoc/nang-cao/after-effect          → 18 buổi · accordion + Mục tiêu/Nội dung
  /khoa-hoc/nang-cao/premiere              → 18 buổi · accordion
  /khoa-hoc/nang-cao/quay-phim             → 12 buổi · accordion có Mục tiêu
/khoa-hoc-capcut                           → 🔒 PROTECTED: 18 buổi video CapCut Pro Creator
/giang-vien                                → Profile giảng viên + CR Studio + YouTube/TikTok cards
/du-an                                     → 28 video (19 instructor + 9 student FB reels)
/preview/digital-loom                      → Demo component
```

---

## ⚙️ Setup & chạy local

```bash
# Cài deps
npm install

# Dev server
npm run dev
# → http://localhost:3000

# Build production
npm run build
npm run start
```

---

## 📦 Files quan trọng

### Cấu hình nội dung — **chỉ sửa các file này thôi**

| File | Nội dung |
|---|---|
| [`lib/site-config.ts`](lib/site-config.ts) | Brand info, contact, logo path, video featured, all projects, course categories với 5 lớp |
| [`lib/capcut-data.ts`](lib/capcut-data.ts) | Khóa CapCut: 18 buổi curriculum + 18 video library + danh sách học viên đăng ký |

### Assets

```
public/brand/
├── logo.png              → Logo navbar + footer
├── cr-studio-logo.png    → Logo CR Studio banner
├── hero-bg.png           → Background blur Hero trang chủ
└── hero-signature.jpg    → Ảnh signature panel phải Hero

public/instructor/
└── avatar.png            → Ảnh giảng viên (trang chủ + /giang-vien)

public/thumbnails/students/
└── s01.jpg → s15.jpg     → Thumbnails cho Facebook Reels (optional, có fallback)
```

---

## 🔐 Bảo mật khóa CapCut

Trang `/khoa-hoc-capcut` có **auth gate** + **anti-piracy**:
- Email + password login (lưu sessionStorage)
- Watermark email động đè lên video (di chuyển 8s/lần)
- Block: right-click, F12, Ctrl+S/U/P, text selection, print
- YouTube embed với `rel=0` + `modestbranding`

**Tài khoản demo:** `demo@duongminhtho.vn` / `demo123`

**⚠️ Production cảnh báo:** Auth hiện tại là **mock client-side** với password hardcode. Khi go-live thật:
1. Migrate sang **Supabase Auth** / **NextAuth.js** + DB (bcrypt hash)
2. Host video qua **Mux** / **Vimeo OTT** / **Cloudflare Stream** với signed URL
3. Cấp DRM (Widevine/FairPlay) nếu cần bảo vệ enterprise-grade

---

## 🎨 Design tokens

| Token | Giá trị |
|---|---|
| Gold (primary) | `#D4A853` |
| Gold light | `#F0C870` |
| Gold deep | `#B8902E` |
| Emerald (free course accent) | `#4FAE7E` / `#2F7D5B` |
| Background | `#0a0a0a` |
| Ink | `#050505` |
| Heading font | Playfair Display (Bold + Italic) |
| Sub-heading font | Montserrat (Medium/SemiBold UPPERCASE) |
| Body font | Montserrat (Light/Regular) |

---

## 📞 Contact info

- **Phone/Zalo:** 0945 657 611
- **Email:** editornghiepdu93@gmail.com
- **Facebook:** [tho.duongminh.hanhtinhxanh](https://www.facebook.com/tho.duongminh.hanhtinhxanh)
- **Address:** N15, KDC Nam Long, Cái Răng, Cần Thơ
- **YouTube:** [Crom Creator](https://www.youtube.com/@cromcreator6809) (8.87K subs)
- **TikTok:** [Thơ EDITOR](https://www.tiktok.com/@lopphovlog) (126.3K followers)
- **Studio:** [crstudio.vn](https://crstudio.vn)

---

© 2025 Dương Minh Thơ · All rights reserved.
