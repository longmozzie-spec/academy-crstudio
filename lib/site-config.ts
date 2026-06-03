// Cấu hình trung tâm cho website. Khi bạn gửi nội dung mới, chỉ cần cập nhật file này.

export const site = {
  brandName: "Dương Minh Thơ",
  brandDomain: "DuongMinhTho.vn",
  brandTagline: "Học Viện Hậu Kỳ Cinematic",
  shortBio: "Nâng tầm câu chuyện hình ảnh — từ tư duy đạo diễn đến kỹ thuật hậu kỳ chuyên sâu.",

  // ─── BRAND ASSETS ─────────────────────────────────────────────────────────
  // Logo — drop file vào public/brand/logo.png (hoặc .svg / .webp).
  // Tự fallback về icon Sparkles nếu file không tồn tại.
  logo: "/brand/logo.png",

  // Ảnh nền cho Hero trang chủ — drop file vào public/brand/hero-bg.jpg.
  // Tự ẩn nếu file không tồn tại (giữ aurora blobs gradient).
  heroBackground: "/brand/hero-bg.png",
  // Cường độ overlay tối (0-1). 0 = ảnh rõ nhất, 1 = đen hoàn toàn. Khuyến nghị 0.45-0.65.
  heroBackgroundOverlay: 0.55,
  // Blur ảnh nền (px). 0 = sắc nét, 8-12 = mờ vừa, 20+ = mờ hẳn.
  heroBackgroundBlur: 8,

  // Ảnh signature trong khung decorative phải Hero — drop file vào public/brand/hero-signature.jpg.
  // Đây là frame đẹp nhất đại diện cho phong cách dựng của bạn (poster/frame video).
  // Tự fallback về Sparkles + quote nếu file không tồn tại.
  heroSignatureImage: "/brand/hero-signature.jpg",
  heroSignatureQuote: "Mỗi khung hình là một câu chuyện.",

  // Ảnh giảng viên — drop file vào public/instructor/avatar.jpg
  instructorPhoto: "/instructor/avatar.png",
  // Vị trí crop: "center", "top", "bottom" hoặc px tùy chỉnh, ví dụ "center 20%"
  instructorPhotoPosition: "center top",

  contact: {
    phone: "0945 657 611",
    email: "editornghiepdu93@gmail.com",
    facebook: "https://www.facebook.com/tho.duongminh.hanhtinhxanh",
    zalo: "0945 657 611",
    address: "N15, KDC Nam Long, Cái Răng, Cần Thơ",
    hours: "8:00 – 21:00 hàng ngày",
  },
} as const;

// ─── VIDEO TYPES ──────────────────────────────────────────────────────────────
// Video có thể đến từ YouTube hoặc Facebook Reel.
// - YouTube: dùng youtubeId (thumbnail tự động từ i.ytimg.com).
// - Facebook: dùng facebookUrl (thumbnail là placeholder stylized vì FB không expose public thumb).
export type Video = {
  id: string;
  title: string;
  youtubeId?: string;
  facebookUrl?: string;     // Full URL của Facebook reel/video
  isShort?: boolean;        // 9:16 mode cho modal (auto true cho FB reel)
  thumb?: string;           // Custom thumbnail (optional — override mặc định)
  author?: "instructor" | "student";
  category?: string;
};

// Tất cả dự án giảng viên đã thực hiện (15 video)
export const allProjects: Video[] = [
  { id: "p01", youtubeId: "5CEuUzsYEzQ", author: "instructor", category: "Real Estate", title: "Bên Trong Penthouse 170 Tỷ: Dinh Thự Trên Không Xa Hoa Bậc Nhất The Opera Thủ Thiêm" },
  { id: "p02", youtubeId: "fsb9ifLCUDw", author: "instructor", category: "Real Estate", title: "Chạm Tay Vào Giấc Mơ Thượng Lưu Tại Loft House — Opera Thủ Thiêm" },
  { id: "p03", youtubeId: "UCFzNSiJdys", author: "instructor", category: "Real Estate", title: "Will The Picturesque Beauty Of The Crest Residence Steal Your Heart?" },
  { id: "p04", youtubeId: "e8_HAZdBQP8", author: "instructor", category: "Real Estate", title: "Ngắm Nhìn Thành Phố Điện Ảnh Đầu Tiên Của Đông Nam Á Từ Căn Hộ 4 Phòng Ngủ The Galleria" },
  { id: "p05", youtubeId: "Uusk5XVzXAI", author: "instructor", category: "Real Estate", title: "Khám Phá Những Tiện Ích Đẳng Cấp Tại Grand Marina Sài Gòn" },
  { id: "p06", youtubeId: "cBYOQaPYnq0", author: "instructor", category: "Real Estate", title: "Căn Hộ Triệu Đô — Cuộc Sống Trong Mơ Tại Grand Marina Sài Gòn" },
  { id: "p07", youtubeId: "DsoCBasY9yI", author: "instructor", category: "Real Estate", title: "Zeit River Thủ Thiêm — Khám Phá View Sài Gòn Và Tiện Ích Cùng Trinh Lee" },
  { id: "p08", youtubeId: "UlBtrIz31vg", author: "instructor", category: "Real Estate", title: "Duplex The River Thủ Thiêm — Resort Giữa Trung Tâm Sài Gòn" },
  { id: "p09", youtubeId: "AhokN5S8VNc", author: "instructor", category: "Real Estate", title: "Opera Thủ Thiêm Với Căn Hộ 4 Phòng Ngủ View Sông Sài Gòn" },
  { id: "p10", youtubeId: "Pc1hmA52C0o", author: "instructor", category: "Podcast",     title: "TẬP 1: Phố Đông Thượng Hải Có Phải Là Tương Lai Cho Thủ Thiêm, Thủ Đức?" },
  { id: "p11", youtubeId: "imCOxBGLyN8", author: "instructor", category: "Real Estate", title: "Loft House Với Nội Thất Indochine Tại Opera Residence — Metropole Thủ Thiêm" },
  { id: "p12", youtubeId: "bmYne_u1Snc", author: "instructor", category: "Real Estate", title: "Căn Hộ Sân Vườn Full Nội Thất Tại The River Thủ Thiêm — Kevin Khánh" },
  { id: "p13", youtubeId: "yQNlUBiJ-JY", author: "instructor", category: "Real Estate", title: "55 Tỷ Cho Căn Lofthouse Nội Thất Chỉnh Chu Đến Từng Centimet Tại Metropole Thủ Thiêm" },
  { id: "p14", youtubeId: "YiC-B-9oA7k", author: "instructor", category: "Real Estate", title: "Căn Hộ 4 Phòng Ngủ Opera Residence — Thuộc Metropole Thủ Thiêm" },
  { id: "p15", youtubeId: "fog1NnhZSJ4", author: "instructor", category: "Podcast",     title: "Trinh Lee & Soul Home | Vì Sao Giá Căn Hộ Cao Cấp Thủ Thiêm Cao Hơn Quận 1?" },
  { id: "p16", youtubeId: "tf0P3grOhEo", author: "instructor", category: "Commercial",  title: "OFFICIAL TEASER — 25 Vietnam Best & Mùa Thẻ Đặc Biệt: Tất Cả Đã Sẵn Sàng" },
  { id: "p17", youtubeId: "8VqaLvlwSsY", author: "instructor", category: "Commercial",  title: "Vietcombank Loyal" },
  { id: "p18", youtubeId: "NSwCXzYOM30", author: "instructor", category: "Commercial",  title: "Quang Hải Prime — Coming Soon" },
  { id: "p19", youtubeId: "19JacPVzIrM", author: "instructor", category: "VFX",         title: "DK VFX Billboard — Draft 8" },

  // ─── Sản phẩm học viên (Facebook Reels) ───────────────────────────────────
  // Drop ảnh thumb vào public/thumbnails/students/ với tên s01.jpg → s09.jpg.
  // Đuôi khác (.png, .webp) cũng OK — sửa lại path tương ứng. Nếu file chưa có → tự fallback về placeholder FB icon.
  { id: "s01", facebookUrl: "https://www.facebook.com/reel/1707705413942626", thumb: "/thumbnails/students/s01.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #01" },
  { id: "s02", facebookUrl: "https://www.facebook.com/reel/1603989030686461", thumb: "/thumbnails/students/s02.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #02" },
  { id: "s03", facebookUrl: "https://www.facebook.com/reel/987688373824189",  thumb: "/thumbnails/students/s03.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #03" },
  { id: "s05", facebookUrl: "https://www.facebook.com/reel/924980853223195",  thumb: "/thumbnails/students/s05.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #05" },
  { id: "s06", facebookUrl: "https://www.facebook.com/reel/1596734248227218", thumb: "/thumbnails/students/s06.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #06" },
  { id: "s07", facebookUrl: "https://www.facebook.com/reel/942221121581010",  thumb: "/thumbnails/students/s07.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #07" },
  { id: "s08", facebookUrl: "https://www.facebook.com/reel/25656952207337840", thumb: "/thumbnails/students/s08.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #08" },
  { id: "s09", facebookUrl: "https://www.facebook.com/reel/1490599498706711", thumb: "/thumbnails/students/s09.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #09" },
  { id: "s10", facebookUrl: "https://www.facebook.com/reel/1357340819371468", thumb: "/thumbnails/students/s10.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #10" },
  { id: "s11", facebookUrl: "https://www.facebook.com/reel/1310441397064343", thumb: "/thumbnails/students/s11.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #11" },
  { id: "s13", facebookUrl: "https://www.facebook.com/reel/1325825085901926", thumb: "/thumbnails/students/s13.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #13" },
  { id: "s14", facebookUrl: "https://www.facebook.com/reel/1138802398227612", thumb: "/thumbnails/students/s14.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #14" },
  { id: "s15", facebookUrl: "https://www.facebook.com/reel/2325529391219666", thumb: "/thumbnails/students/s15.png", author: "student", category: "Bài Học Viên", isShort: true, title: "Bài Tốt Nghiệp Học Viên #15" },
];

// 4 video tinh tuyển hiện trên trang chủ — 2 bài AE + 2 bài Premiere của học viên
export const featuredVideos: Video[] = [
  { id: "f-ae-01", title: "Bài Tốt Nghiệp AE — Nguyễn Trường Giang", youtubeId: "QE7q6jUZhdM", author: "student", category: "After Effects" },
  { id: "f-ae-02", title: "Bài Tốt Nghiệp AE — Tạ Đức Thành",         youtubeId: "5QojX43LNrc", author: "student", category: "After Effects" },
  { id: "f-pr-01", title: "Bài Tốt Nghiệp Premiere — Trần Ngọc Tuấn Bảo", youtubeId: "40UrxhMmnTU", author: "student", category: "Premiere" },
  { id: "f-pr-02", title: "Bài Tốt Nghiệp Premiere — Lê Văn Sơn",         youtubeId: "-GbxK-CSGU0", author: "student", category: "Premiere" },
];

// ─── COURSE TYPES ─────────────────────────────────────────────────────────────
export type LessonSession = {
  id: string;          // "01", "02"...
  title: string;       // "Buổi 1: ..."
  youtubeId: string;
  startSeconds?: number;
};

// Một bài/buổi trong curriculum.
// - Chuỗi đơn giản: chỉ tiêu đề bài.
// - Object: có title + tùy chọn goal (Mục tiêu — hiển thị nổi bật trên đầu) + points (Nội dung chi tiết).
export type CourseLesson = string | { title: string; goal?: string; points?: string[] };

export type CourseClass = {
  slug: string;                  // URL segment
  name: string;                  // Tên hiển thị
  software: "Premiere" | "After Effect" | "Camera";
  shortName: string;             // Ngắn gọn cho dropdown
  tagline: string;
  description: string;
  duration?: string;
  level?: string;
  format?: string;
  price?: string;
  priceUnit?: string;
  sessions?: LessonSession[];    // Cho lớp 0đ — danh sách buổi video
  introVideoYoutubeId?: string;  // Video giới thiệu khóa học (placeholder nếu rỗng)
  studentWorks?: StudentWork[];  // Sản phẩm tốt nghiệp của học viên trong lớp
  features?: string[];           // Quyền lợi (chỉ dùng cho lớp nâng cao)
  outcomes?: string[];
  modules?: { title: string; lessons: CourseLesson[] }[];
};

export type StudentWork = {
  id: string;
  title: string;
  studentName?: string;
  youtubeId?: string;
  facebookUrl?: string;
  thumb?: string;          // Đường dẫn ảnh thumb tự custom
};

export type CourseCategory = {
  id: string;                    // "co-ban" | "nang-cao"
  slug: string;                  // URL segment
  variant: "free" | "advanced";
  name: string;
  badge: string;
  subtitle: string;
  description: string;
  classes: CourseClass[];
};

export const courseCategories: CourseCategory[] = [
  // ─── KHÓA HỌC 0Đ ────────────────────────────────────────────────────────────
  {
    id: "co-ban",
    slug: "co-ban",
    variant: "free",
    name: "Khóa Học 0 Đồng",
    badge: "0đ",
    subtitle: "Hành trình nhập môn miễn phí",
    description:
      "Khóa học hoàn toàn miễn phí dành cho người mới — tiếp cận tư duy hậu kỳ chuyên nghiệp và làm quen với phần mềm chuyên dụng qua những bài giảng video thực hành.",
    classes: [
      {
        slug: "premiere",
        name: "Lớp Premiere 0 Đồng",
        software: "Premiere",
        shortName: "Premiere 0 Đồng",
        tagline: "Nhập môn dựng phim cùng Adobe Premiere Pro",
        description:
          "Lớp học miễn phí dành cho người chưa từng dựng phim — giúp bạn làm quen với giao diện Premiere, hiểu nguyên lý cắt dựng và tự tay dựng một video hoàn chỉnh.",
        duration: "5 buổi",
        level: "Người mới",
        format: "Học video — Xem mọi lúc",
        sessions: [
          { id: "01", title: "Buổi 1 — Khởi đầu với Premiere Pro",      youtubeId: "GH-yM5kMF6E", startSeconds: 2631 },
          { id: "02", title: "Buổi 2 — Cắt dựng cơ bản",                youtubeId: "uZQ2lvjcnQA", startSeconds: 3562 },
          { id: "03", title: "Buổi 3 — Effect & Transition",            youtubeId: "N4Nx93UAy3E", startSeconds: 4329 },
          { id: "04", title: "Buổi 4 — Audio & Voice Over",             youtubeId: "u95cbbDKux8", startSeconds: 900  },
          { id: "05", title: "Buổi 5 — Color & Xuất file hoàn chỉnh",   youtubeId: "hqvIDUvuHeU", startSeconds: 3700 },
        ],
        outcomes: [
          "Hiểu giao diện và workflow của Premiere Pro",
          "Cắt dựng theo nhịp, đồng bộ audio",
          "Chỉnh màu cơ bản và xuất file đúng chuẩn",
          "Hoàn thành một video 30s – 60s",
        ],
        modules: [
          { title: "Module 01 — Làm quen Premiere", lessons: ["Cài đặt phần mềm", "Giao diện & workspace", "Import & quản lý footage"] },
          { title: "Module 02 — Cắt dựng cơ bản", lessons: ["Timeline & nhịp dựng", "Transition cơ bản", "Audio sync"] },
          { title: "Module 03 — Hoàn thiện", lessons: ["Color cơ bản", "Export setting", "Bài tập thực hành"] },
        ],
      },
      {
        slug: "after-effect",
        name: "Lớp After Effect 0 Đồng",
        software: "After Effect",
        shortName: "After Effect 0 Đồng",
        tagline: "Nhập môn motion graphics cùng After Effects",
        description:
          "Lớp học miễn phí dành cho người mới làm quen với After Effects — từ thao tác cơ bản đến tạo những hiệu ứng text & motion đơn giản nhưng tinh tế.",
        duration: "5 buổi",
        level: "Người mới",
        format: "Học video — Xem mọi lúc",
        sessions: [
          { id: "01", title: "Buổi 1 — Khởi động After Effects",          youtubeId: "i3E3dUOI3pE", startSeconds: 6266 },
          { id: "02", title: "Buổi 2 — Keyframe & Animation",             youtubeId: "tmwRI2DtuLc" },
          { id: "03", title: "Buổi 3 — Text Animation thực hành",         youtubeId: "gH9K112F8xQ", startSeconds: 1611 },
          { id: "04", title: "Buổi 4 — Geolayers 3 · Bản đồ động (P.1)",  youtubeId: "-_Yy3zzl9FY" },
          { id: "05", title: "Buổi 5 — Geolayers 3 · Bản đồ động (P.2)",  youtubeId: "aX-Plv4jEaw" },
        ],
        outcomes: [
          "Hiểu giao diện & workflow After Effects",
          "Làm chủ keyframe và animation cơ bản",
          "Tạo text animation đẹp mắt",
          "Render video xuất ra đúng định dạng",
        ],
        modules: [
          { title: "Module 01 — Khởi động AE", lessons: ["Cài đặt & giao diện", "Composition & layer", "Phím tắt quan trọng"] },
          { title: "Module 02 — Animation", lessons: ["Keyframe & easing", "Text animation", "Shape layer cơ bản"] },
          { title: "Module 03 — Hoàn thiện", lessons: ["Pre-comp & nesting", "Render queue", "Media encoder"] },
        ],
      },
    ],
  },

  // ─── KHÓA HỌC NÂNG CAO ──────────────────────────────────────────────────────
  {
    id: "nang-cao",
    slug: "nang-cao",
    variant: "advanced",
    name: "Khóa Học Nâng Cao",
    badge: "PRO",
    subtitle: "Tinh hoa hậu kỳ chuyên sâu — thực chiến cùng mentor",
    description:
      "Lộ trình thực chiến chuyên sâu cho học viên đã có nền tảng — gồm 3 lớp chuyên môn: After Effects nâng cao, Premiere nâng cao và Quay phim thực chiến. Học cùng mentor 1-1 trên dự án thật.",
    classes: [
      {
        slug: "premiere",
        name: "Lớp Premiere Nâng Cao",
        software: "Premiere",
        shortName: "Premiere Nâng Cao",
        tagline: "Editing & color grading chuyên sâu — đẳng cấp nhà nghề",
        description:
          "Lớp chuyên sâu Premiere Pro — 18 buổi xuyên suốt từ tư duy cắt ghép, keyframe chuyển động, masking, podcast, multi-cam, hiệu ứng tổng hợp, Lumetri Color, phối hợp Photoshop (AI Generative), dựng video event và bảo vệ đồ án tốt nghiệp thực chiến.",
        duration: "18 buổi",
        level: "Trung cấp — Nâng cao",
        format: "Học online + Mentor kèm cặp",
        price: "10.000.000",
        priceUnit: "VNĐ",
        // Video giới thiệu khóa & Sản phẩm học viên
        introVideoYoutubeId: "44OkJSzyv70",
        studentWorks: [
          { id: "pr-w01", title: "Bài Tốt Nghiệp Premiere Nâng Cao", studentName: "Trần Ngọc Tuấn Bảo", youtubeId: "40UrxhMmnTU" },
          { id: "pr-w02", title: "Bài Tốt Nghiệp Premiere Nâng Cao", studentName: "Lê Văn Sơn",         youtubeId: "-GbxK-CSGU0" },
          { id: "pr-w03", title: "Bài Tốt Nghiệp Premiere Nâng Cao", studentName: "Nguyễn Thanh Hà",    youtubeId: "jDO15M5mGzM" },
          { id: "pr-w04", title: "Bài Tốt Nghiệp Premiere Nâng Cao", studentName: "Tìa Phương Thanh",   youtubeId: "SH9bLio0Fw8" },
        ],
        features: [
          "Mentor kèm cặp trong suốt khóa học",
          "Chấm bài cá nhân 3 lần trong khóa (Buổi 4, 8, 12)",
          "Đồ án tốt nghiệp được giảng viên review trực tiếp",
          "Áp dụng AI thực chiến: Speech-to-Text, Text-Based Editing, Enhance Speech, Auto Reframe, Generative Fill",
          "Bảo hành kiến thức trọn đời",
          "Cấp chứng nhận hoàn thành khóa học",
        ],
        outcomes: [
          "Làm chủ giao diện Premiere Pro & workflow chuyên nghiệp",
          "Tư duy keyframe & nhịp dựng có kiểm soát",
          "Masking, key phông xanh và dựng podcast/multi-cam",
          "Ứng dụng AI vào hậu kỳ (Text-Based, Enhance Speech, Auto Reframe)",
          "Lumetri Color — color correction & color grading cinematic",
          "Phối hợp Photoshop (Generative AI) với Premiere để tạo parallax & 2.5D",
          "Dựng video event/sự kiện có nhịp điệu chuyên nghiệp",
          "Hoàn thiện đồ án tốt nghiệp đủ chuẩn portfolio",
        ],
        modules: [
          {
            title: "PHẦN 01 — GIAO DIỆN, TƯ DUY CẮT GHÉP & KEYFRAME CHUYỂN ĐỘNG",
            lessons: [
              {
                title: "Buổi 1: Làm quen giao diện Premiere Pro & Quản lý dữ liệu",
                points: [
                  "Làm quen các panel chính: Timeline, Source/Program Monitor, Project Panel, Effect Controls, Audio Meters...",
                  "Thiết lập Project, Sequence chuẩn ngay từ đầu để tránh lỗi file, lỗi media và rối workflow. Cách import, quản lý dữ liệu khoa học.",
                  "Thao tác cắt ghép thô cơ bản (Rough Cut): cắt, nối, di chuyển, trim đầu đuôi, chèn nhạc, chèn chữ cơ bản. Xuất video đúng định dạng.",
                ],
              },
              {
                title: "Buổi 2: Keyframe cơ bản và nâng cao (Phần 1 — Thuộc tính & Easing)",
                points: [
                  "Hiểu bản chất của keyframe trong chuyển động.",
                  "Ứng dụng keyframe vào các thuộc tính cơ bản: Position, Scale, Rotation, Opacity.",
                  "Làm quen các chế độ Easing (Temporal/Spatial Interpolation: Ease In, Ease Out, Bezier) để chuyển động mượt, tự nhiên và có cảm xúc.",
                ],
              },
              {
                title: "Buổi 3: Keyframe chuyên sâu (Phần 2 — Ứng dụng chuyển động & Tạo nhịp)",
                points: [
                  "Xử lý các hiệu ứng chuyển động thường dùng: zoom in, zoom out, pan, slide, pop-up text bằng keyframe.",
                  "Phân biệt chuyển động thô và chuyển động có kiểm soát. Tạo nhịp chuyển động phù hợp âm thanh và nhịp video.",
                ],
              },
              {
                title: "Buổi 4: CHẤM BÀI & SỬA LỖI — Kỹ năng cắt ghép & Keyframe (Sửa bài số 1)",
                points: [
                  "Học viên nộp bài tập ứng dụng cắt ghép thô kết hợp chuyển động keyframe.",
                  "Giảng viên mở trực tiếp file dự án của học viên để sửa lỗi giật lag chuyển động, sai nhịp (pacing) hoặc đặt keyframe bị thô.",
                ],
              },
            ],
          },
          {
            title: "PHẦN 02 — KỸ THUẬT MASKING, KEY PHÔNG & THỰC CHIẾN DỰNG PODCAST",
            lessons: [
              {
                title: "Buổi 5: Masking nâng cao và thực hành Key phông xanh",
                points: [
                  "Nguyên lý Masking và các ứng dụng thực tế (tạo mask che, tách, làm nổi bật chủ thể, xử lý bố cục). Kết hợp masking với keyframe để track chuyển động.",
                  "Thực hành kỹ thuật key phông xanh bằng hiệu ứng Ultra Key. Các bước tách nền nhân vật, xử lý viền, sửa lỗi lem nền và tối ưu khung hình sạch sẽ, chuyên nghiệp.",
                ],
              },
              {
                title: "Buổi 6: Edit Podcast Viral — Tư duy dựng & Tối ưu Audio cơ bản",
                points: [
                  "Tư duy chọn đoạn cắt đắt giá (câu nói gây tò mò, chạm cảm xúc). Kỹ thuật cắt nhịp hội thoại mượt mà, giữ năng lượng tự nhiên.",
                  "Xử lý khoảng lặng, lỗi nói, từ đệm, hơi thở thừa bằng Ripple Trim chuyên sâu. Thiết kế nhịp dựng hook 3 giây đầu cho video ngắn.",
                ],
              },
              {
                title: "Buổi 7: Multi-cam nâng cao & Text/Subtitle tự động với Premiere AI",
                points: [
                  "Đồng bộ hóa âm thanh/hình ảnh từ nhiều góc máy khác nhau. Kỹ thuật dựng Multi-camera trong Premiere Pro để làm podcast bớt tĩnh.",
                  "Ứng dụng AI: Speech-to-Text tự động nhận diện giọng nói tạo phụ đề (Subtitle).",
                  "Tạo Text Style, highlight từ khóa, nhấn chữ và xử lý chuyển động cho chữ (Essential Graphics).",
                ],
              },
              {
                title: "Buổi 8: CHẤM BÀI & SỬA LỖI — Video podcast / talkshow Multi-cam (Sửa bài số 2)",
                points: [
                  "Chấm bài thực hành dựng một đoạn podcast hoàn chỉnh (có chèn text, b-roll, xử lý thoại đa góc máy).",
                  "Sửa chi tiết lỗi cắt thoại bị cụt, lỗi đồng bộ âm thanh và căn chỉnh text bị lệch bố cục.",
                ],
              },
            ],
          },
          {
            title: "PHẦN 03 — HIỆU ỨNG TỔNG HỢP, MÀU SẮC & TEXT-BASED EDITING (A.I)",
            lessons: [
              {
                title: "Buổi 9: Áp dụng hiệu ứng tổng hợp để làm video chuyên nghiệp",
                points: [
                  "Kết hợp nhuần nhuyễn: Keyframe, mask, scale, blur, glow, light leak, tốc độ (Speed Duration / Time Remapping) và typography để tạo cảm giác cao cấp cho video review, TVC cơ bản, video portfolio.",
                  'Tư duy tạo chuyển cảnh (Transition) hợp lý theo nội dung, phân tích lý do vì sao video có hiệu ứng vẫn bị "rẻ tiền" và cách giữ sự tinh tế.',
                ],
              },
              {
                title: "Buổi 10: AI Text-Based Editing & Chỉnh sửa âm thanh chuyên sâu",
                points: [
                  "Sử dụng Text-Based Editing để cắt dựng video trực tiếp bằng cách xóa văn bản hội thoại (AI tự động cắt timeline tương ứng).",
                  "AI Audio: Sử dụng Enhance Speech trong Essential Sound để tự động lọc tạp âm, phục hồi giọng thu âm bị lỗi, ồn một cách chuyên nghiệp.",
                  "Thiết kế âm thanh: SFX, nhạc nền (BGM) và kỹ thuật Audio Ducking (tự động nhỏ nhạc khi có tiếng nói).",
                ],
              },
              {
                title: "Buổi 11: Hiểu về Màu sắc & Thực hành Lumetri Color cơ bản",
                points: [
                  "Nhận diện vai trò màu sắc trong ngôn ngữ điện ảnh. Làm quen panel Lumetri Color.",
                  "Phân biệt và thực hành Color Correction (cân bằng trắng, độ tương phản, cứu sáng) và Color Grading (áp màu nghệ thuật, sử dụng LUTs).",
                  "Cách làm footage trong, sạch và có chiều sâu.",
                ],
              },
              {
                title: "Buổi 12: CHẤM BÀI & SỬA LỖI — Hiệu ứng tổng hợp & Màu sắc (Sửa bài số 3)",
                points: [
                  "Kiểm tra chất lượng bài tập: đánh giá khả năng mix hiệu ứng và độ chuẩn xác của màu sắc (da người có bị ám màu, video có bị cháy sáng/quá tối sau khi áp màu không).",
                ],
              },
            ],
          },
          {
            title: "PHẦN 04 — KẾT HỢP PHOTOSHOP (TÍCH HỢP A.I) & PREMIERE PRO",
            lessons: [
              {
                title: "Buổi 13: Thiết kế cơ bản trên Photoshop & Generative AI cho Editor",
                points: [
                  "Các nguyên tắc thiết kế cơ bản phục vụ cho Editor (bố cục, tương phản, phân cấp thị giác).",
                  "AI trong Photoshop: Sử dụng Generative Fill và Generative Expand để xóa vật thể thừa, mở rộng khung hình từ ảnh dọc thành ảnh ngang làm tài nguyên dựng phim, sáng tạo hình ảnh minh họa từ văn bản.",
                  "Thiết kế thumbnail thu hút, title card, visual chèn vào video.",
                ],
              },
              {
                title: "Buổi 14: Quy trình kết hợp nâng cao giữa Photoshop và Premiere Pro",
                points: [
                  "Quy trình kết nối (Dynamic Link hoặc Import PSD) giữa Photoshop và Premiere Pro thực tế.",
                  "Chuẩn bị tài nguyên hình ảnh tách layer từ Photoshop (nhân vật, tiêu đề, texture, hình minh họa) đưa vào Premiere Pro.",
                  "Kết hợp ảnh tĩnh tách lớp với chuyển động keyframe trong Premiere để tạo cảm giác sống động, có chiều sâu (Parallax, 2.5D Animation).",
                ],
              },
            ],
          },
          {
            title: "PHẦN 05 — NGHỆ THUẬT DỰNG VIDEO EVENT & ĐỒ ÁN TỐT NGHIỆP",
            lessons: [
              {
                title: "Buổi 15: Dựng video Event/Sự kiện & Quy trình xử lý dữ liệu lớn",
                points: [
                  "Quy trình làm việc với footage event số lượng lớn: phân loại dữ liệu, đặt tên shot, dựng theo cụm nội dung để tiết kiệm thời gian. Cách chọn shot đắt giá trong hàng trăm shot quay.",
                  "Tư duy dựng nhịp nhanh, gãy gọn, giàu năng lượng nhưng vẫn có câu chuyện (mở màn, diễn biến, cao trào, điểm nhấn, kết thúc).",
                  "Kỹ thuật đồng bộ nhịp hình với nhạc (Music Beating) để tạo cảm giác bùng nổ.",
                ],
              },
              {
                title: "Buổi 16: Hoàn thiện video Event nâng cao & Xuất file đa nền tảng",
                points: [
                  "Chèn title, lower-third, logo, slogan, thông tin chương trình và các lớp đồ họa cần thiết (Essential Graphics / MOGRT). Cân chỉnh màu và âm thanh ở mức đủ sạch để bàn giao chuyên nghiệp.",
                  "AI Auto Reframe: tự động tracking và chuyển đổi video từ bản ngang (16:9) sang bản dọc (9:16) hoặc vuông (1:1) phục vụ đa nền tảng.",
                  "Xuất file theo nhiều nhu cầu: bản ngang, bản dọc, bản social ngắn, bản recap đầy đủ.",
                ],
              },
              {
                title: "Buổi 17: CHẤM ĐỒ ÁN TỐT NGHIỆP — Phần 1",
                points: [
                  "Học viên trình bày sản phẩm dựng hoàn chỉnh (áp dụng toàn bộ kỹ thuật từ Keyframe, Masking, Lọc âm AI, Chỉnh màu Lumetri Color và phối hợp Photoshop).",
                  "Giảng viên trực tiếp nhận xét, bóc tách timeline và đưa ra phương án tối ưu tối đa tính thẩm mỹ.",
                ],
              },
              {
                title: "Buổi 18: NGHIỆM THU ĐỒ ÁN — Tổng kết & Định hướng nghề nghiệp Editor",
                points: [
                  "Học viên nộp bản sửa cuối cùng (Final Video) sau khi tiếp thu ý kiến từ Buổi 17.",
                  "Giảng viên chia sẻ quy trình làm việc thực tế với khách hàng, cách quản lý file dự án lớn để bàn giao, tư duy tự nghiên cứu nâng cao tay nghề.",
                  "Trao chứng nhận hoàn thành khóa học.",
                ],
              },
            ],
          },
        ],
      },
      {
        slug: "after-effect",
        name: "Lớp After Effect Nâng Cao",
        software: "After Effect",
        shortName: "After Effect Nâng Cao",
        tagline: "Motion Graphics chuyên sâu — tích hợp A.I cinematic & VFX",
        description:
          "Lộ trình 18 buổi chuyên sâu — tối ưu kiến thức Motion Graphics, đan xen 4 buổi chấm bài thực chiến và tích hợp các công nghệ A.I tiên tiến nhất (Midjourney, Leonardo, Photoshop Generative Fill, Runway Gen-2/Sora, Content-Aware Fill, Roto Brush 3.0 AI) vào quy trình kỹ xảo & chuyển động chuyên nghiệp.",
        duration: "18 buổi",
        level: "Trung cấp — Nâng cao",
        format: "Học online + Mentor kèm cặp",
        price: "12.000.000",
        priceUnit: "VNĐ",
        // Sản phẩm học viên (lớp này KHÔNG có intro video)
        studentWorks: [
          { id: "ae-w01", title: "Bài Tốt Nghiệp After Effects Nâng Cao", studentName: "Nguyễn Trường Giang", youtubeId: "QE7q6jUZhdM" },
          { id: "ae-w02", title: "Bài Tốt Nghiệp After Effects Nâng Cao", studentName: "Tạ Đức Thành",        youtubeId: "5QojX43LNrc" },
          { id: "ae-w03", title: "Bài Tốt Nghiệp After Effects Nâng Cao", studentName: "Trần Ngọc Tuấn Bảo",  youtubeId: "KZ_mxJchIYg" },
          { id: "ae-w04", title: "Bài Tốt Nghiệp After Effects Nâng Cao", studentName: "Lâm Nhựt Huy",        youtubeId: "htbq64hWf4E" },
        ],
        features: [
          "Mentor kèm cặp trong suốt khóa học",
          "4 lần chấm bài cá nhân (Buổi 4, 7, 11, 16)",
          "Đồ án tốt nghiệp — TVC 3D / Geolayers / VFX Composite",
          "Áp dụng A.I thực chiến: Midjourney, Leonardo, Generative Fill, Runway/Sora, Roto Brush 3.0",
          "Plugin chuyên sâu: Saber, Particular, Geolayers, Element 3D",
          "Bảo hành kiến thức trọn đời + Cấp chứng nhận tốt nghiệp",
        ],
        outcomes: [
          "Làm chủ Graph Editor & 3 nguyên tắc Motion (Anticipation – Action – Follow through)",
          "Tạo bộ Key Visual sản phẩm từ A.I và diễn hoạt motion cao cấp",
          "Dựng không gian 3D, camera Fly-through & TVC commercial ngành F&B",
          "Geolayers nâng cao: bản đồ BĐS, video chiến dịch lịch sử có 3D model & VFX khói lửa",
          "Talking Head content + Minimal Style infographic cao cấp",
          "VFX Tracking 2D/3D, Screen Replacement, Compositing siêu thực",
          "Rotoscoping tự động & xóa vật thể bằng A.I (Content-Aware Fill, Roto Brush 3.0)",
          "Render tối ưu + Quy trình nhận dự án VFX chuyên nghiệp",
        ],
        modules: [
          {
            title: "PHẦN 01 — TƯ DUY CHUYỂN ĐỘNG CHUYÊN SÂU & XỬ LÝ TÀI NGUYÊN BẰNG A.I",
            lessons: [
              {
                title: "Buổi 1: Ôn tập nâng cao Keyframe, Graph Editor & Motion cốt lõi",
                points: [
                  "Ôn tập sâu các loại keyframe: Linear, Easy Ease, Hold, Rove Across Time...",
                  "Làm chủ Graph Editor (Value Graph & Speed Graph) để kiểm soát tốc độ một cách mượt mà nhất.",
                  "Áp dụng triệt để 3 nguyên tắc Motion cốt lõi: Anticipation (lấy đà) — Action (hành động) — Follow through (quán tính).",
                  "Thực hành: tạo chuyển động nâng cao cho Logo/Text kết hợp các hiệu ứng cốt lõi (Blur, Glow, CC Light Sweep, Displacement Map...).",
                ],
              },
              {
                title: "Buổi 2: Tạo tài nguyên Key Visual bằng Generative A.I & Chuẩn hóa Layer",
                points: [
                  "Khái niệm Key Visual (KV) động trong truyền thông hiện đại.",
                  "Ứng dụng A.I: sử dụng Midjourney / Leonardo AI kết hợp Photoshop AI (Generative Fill) để tự lên ý tưởng và tạo một bộ KV sản phẩm cao cấp từ văn bản.",
                  "Kỹ thuật phân tích bố cục KV, cắt tách layer nhân vật, sản phẩm, background từ Photoshop/Illustrator đưa vào AE một cách khoa học để chuẩn bị làm chuyển động.",
                ],
              },
              {
                title: "Buổi 3: Thực hành Motion Key Visual với Plugin chuyên sâu",
                points: [
                  "Ứng dụng tư duy motion ở Buổi 1 vào bộ tài nguyên KV đã chuẩn bị ở Buổi 2.",
                  "Làm quen và ứng dụng các hiệu ứng/plugin phổ biến để tạo điểm nhấn: Saber (tạo luồng sáng), Particular (tạo hạt bụi, hiệu ứng thời tiết) hoặc các bộ script hỗ trợ chuyển động nhanh.",
                ],
              },
              {
                title: "Buổi 4: CHẤM BÀI THỰC HÀNH — Motion Key Visual sản phẩm (Sửa bài số 1)",
                points: [
                  "Giảng viên mở trực tiếp file dự án (.aep) của từng học viên để check lỗi sắp xếp layer, độ mượt của đồ thị Graph Editor và cách mix hiệu ứng ánh sáng.",
                ],
              },
            ],
          },
          {
            title: "PHẦN 02 — KHÔNG GIAN 3D & THỰC CHIẾN SẢN XUẤT TVC COMMERCIAL",
            lessons: [
              {
                title: "Buổi 5: Làm việc chuyên sâu với môi trường 3D trong AE",
                points: [
                  "Phân biệt rõ tư duy không gian 2D — 2.5D — 3D trong After Effects.",
                  "Làm chủ hệ thống Camera nâng cao (Camera settings, Depth of field — xóa phông), hệ thống Đèn (Light types, Shadows) và các thông số Material Options của Layer.",
                  "Thực hành: dựng mô hình không gian 3D cơ bản từ Shape Layer/Extrude và diễn hoạt cú máy Fly-through camera xuyên qua không gian mượt mà.",
                ],
              },
              {
                title: "Buổi 6: Thực hành dựng TVC quảng cáo — Kết hợp Motion 2D & 3D",
                points: [
                  "Quy trình sản xuất một TVC ngắn (10-15s) chuẩn ngành trong AE. Phân tích case-study ngành F&B.",
                  "Kết hợp khéo léo chuyển động của text 2D, đồ họa vector và model 3D (như lon/chai nước sản phẩm). Thiết lập ánh sáng studio giả lập chiếu lên sản phẩm để tạo độ khối chân thực.",
                ],
              },
              {
                title: "Buổi 7: CHẤM BÀI THỰC HÀNH — Hoàn thiện TVC 3D Commercial (Sửa bài số 2)",
                points: [
                  "Chấm điểm bài tập dựng TVC của học viên: đánh giá bố cục không gian, ánh sáng đổ bóng lên sản phẩm và nhịp điệu chuyển động của camera.",
                ],
              },
            ],
          },
          {
            title: "PHẦN 03 — BẢN ĐỒ KỸ XẢO GEOLAYERS & ỨNG DỤNG HÌNH ẢNH A.I CHUYÊN SÂU",
            lessons: [
              {
                title: "Buổi 8: Geolayers cơ bản & Tối ưu dữ liệu bản đồ cho Bất động sản",
                points: [
                  "Giới thiệu chuyên sâu về plugin Geolayers: cách kết nối, tải dữ liệu bản đồ vệ tinh, tạo địa điểm và điều khiển camera trên map.",
                  "Kỹ thuật tạo đường vẽ tự động (Fly-through bản đồ), highlight tuyến đường giao thông quan trọng và ghim vị trí dự án.",
                  "Cách thêm marker, icon 3D và text mô tả dự án BĐS.",
                ],
              },
              {
                title: "Buổi 9: Geolayers nâng cao kết hợp 3D & Hiệu ứng khói lửa (Video chiến tranh/lịch sử)",
                points: [
                  "Diễn hoạt Geolayers mức độ khó: tạo hoạt cảnh đường bay quốc tế, bao phủ vùng chiến sự/vùng địa lý lớn, highlight các khu vực giáp ranh.",
                  "Ứng dụng phối hợp 3D: đưa các model 3D (máy bay, xe tăng, UAV...) vào di chuyển thực tế trên map.",
                  "Tạo các hiệu ứng cháy nổ, khói bụi (Explosion, fire, smoke) bằng hiệu ứng hạt.",
                ],
              },
              {
                title: "Buổi 10: Generative A.I tạo chất liệu địa hình (Terrain) cho Bản đồ",
                points: [
                  "Ứng dụng A.I (Runway Gen-2 / Sora / Midjourney): tạo các texture bề mặt địa hình thực tế (đồi núi, mây phủ góc nhìn từ trên cao, hiệu ứng thời tiết giả lập) để đắp (Map) vào môi trường 3D trong AE, tạo độ chân thực mà bản đồ thường không có.",
                ],
              },
              {
                title: "Buổi 11: CHẤM BÀI THỰC HÀNH — Video mô phỏng chiến dịch / BĐS 3D (Sửa bài số 3)",
                points: [
                  "Kiểm tra chuyển động camera trên bản đồ của học viên có bị giật hay không.",
                  "Sửa lỗi hiển thị của các layer text/icon khi camera thay đổi góc nhìn (Perspective).",
                ],
              },
            ],
          },
          {
            title: "PHẦN 04 — THỰC CHIẾN TALKING HEAD CONTENT & PHONG CÁCH MINIMAL",
            lessons: [
              {
                title: "Buổi 12: Xử lý Talking Head Content giàu thông tin trực quan",
                points: [
                  "Cách thiết lập quy trình làm việc với video dạng Talking Head (vlogger, chuyên gia nói).",
                  "Kỹ thuật thiết kế kịch bản chuyển động chữ (Pop-in text, Slide-in text), chèn hình ảnh minh họa đè lên cảnh quay một cách thông minh mà không gây rối mắt.",
                ],
              },
              {
                title: "Buổi 13: Làm chủ phong cách Minimal Style (xu hướng Infographic cao cấp)",
                points: [
                  "Phân tích ngôn ngữ thiết kế Minimal: nền trơn, font chữ tối giản, chuyển động thanh lịch và có tính toán.",
                  "Ứng dụng nâng cao của Mask và Track Matte để tạo các đường chuyển cảnh (Transitions) mượt mà, tinh tế giữa các phân đoạn kiến thức trong video.",
                  "Tinh chỉnh màu sắc đồng bộ.",
                ],
              },
            ],
          },
          {
            title: "PHẦN 05 — VFX: COMPOSITING, TRACKING CHUYÊN SÂU & ĐỒ ÁN TỐT NGHIỆP",
            lessons: [
              {
                title: "Buổi 14: VFX Tracking 2D, 3D & Screen Replacement",
                points: [
                  "Kỹ thuật Track Motion 2D chuyên sâu và ứng dụng vào việc thay thế màn hình điện thoại/máy tính (Screen replacement).",
                  "Kỹ thuật 3D Camera Tracking: phân tích cảnh quay thật ngoài đời để giải mã chuyển động camera, từ đó gắn các văn bản (Text 3D) hoặc mô hình (Model 3D) cố định vào không gian của cảnh quay thật.",
                ],
              },
              {
                title: "Buổi 15: Composite nâng cao & Xóa vật thể bằng Adobe A.I",
                points: [
                  "Sử dụng Mask kết hợp Track Matte để lồng ghép nhiều lớp video (Compositing) tạo ra một khung cảnh siêu thực hoàn chỉnh.",
                  "Ứng dụng A.I tích hợp (Content-Aware Fill trong AE / Roto Brush 3.0 AI): sử dụng công nghệ A.I để tự động nhận diện, bóc tách nhân vật chuyển động phức tạp (Rotoscoping) cực nhanh hoặc xóa bỏ hoàn toàn các vật thể thừa khỏi cảnh quay video thô chỉ trong vài cú click.",
                ],
              },
              {
                title: "Buổi 16: CHẤM BÀI THỰC HÀNH — Kỹ xảo VFX Composite & Tracking (Sửa bài số 4)",
                points: [
                  "Học viên nộp bài tập tích hợp phần tử đồ họa vào footage quay đời thực.",
                  "Giảng viên chỉnh sửa chi tiết lỗi lệch tracking, lỗi đổ màu (Color Matching) khiến vật thể ghép bị giả so với môi trường gốc.",
                ],
              },
              {
                title: "Buổi 17: CHẤM ĐỒ ÁN TỐT NGHIỆP — Phần 1",
                points: [
                  "Học viên thuyết trình về tác phẩm kỹ xảo cuối khóa (một đoạn phim ngắn, một TVC 3D hoành tráng hoặc một video Infographic bản đồ có ứng dụng quy trình A.I).",
                  "Giảng viên bóc tách timeline, tối ưu hóa các lớp hiệu ứng và đưa ra phương án chỉnh sửa chi tiết.",
                ],
              },
              {
                title: "Buổi 18: TỔNG KẾT ĐỒ ÁN & Quy trình hậu kỳ chuyên nghiệp",
                points: [
                  "Nghiệm thu sản phẩm cuối cùng (Final Video) sau khi đã sửa lỗi ở buổi trước.",
                  "Chia sẻ kỹ thuật Render tối ưu dung lượng và chất lượng phần cứng, quy trình tối ưu cache để AE chạy mượt.",
                  "Chia sẻ kinh nghiệm nhận dự án kỹ xảo VFX chuyên nghiệp và trao chứng nhận tốt nghiệp.",
                ],
              },
            ],
          },
        ],
      },
      {
        slug: "quay-phim",
        name: "Lớp Quay Phim Thực Chiến",
        software: "Camera",
        shortName: "Quay Phim Thực Chiến",
        tagline: "Cầm máy, vận hành Gimbal & tư duy đạo diễn hình ảnh",
        description:
          "Lộ trình 12 buổi thực chiến — từ làm chủ thông số máy quay, vận hành Gimbal mượt mà với Ninja Walk, các cú máy cinematic nâng cao (360° Inception, Whip-pan, Parallax), tư duy storyboard cho tới bài tốt nghiệp Portfolio và định hướng nghề freelance.",
        duration: "12 buổi",
        level: "Trung cấp",
        format: "Học trực tiếp + Thực hành đi quay",
        price: "15.000.000",
        priceUnit: "VNĐ",
        // Video giới thiệu khóa & Sản phẩm học viên
        introVideoYoutubeId: "ymgjtQWDSTw",
        studentWorks: [
          { id: "qp-w01", title: "Bài Tốt Nghiệp Quay Phim Thực Chiến", studentName: "Khánh Duy",       youtubeId: "IFjIM_FjhvQ" },
          { id: "qp-w02", title: "Bài Tốt Nghiệp Quay Phim Thực Chiến", studentName: "Trung Hổ",       youtubeId: "5M0oKDE1FdY" },
          { id: "qp-w03", title: "Bài Tốt Nghiệp Quay Phim Thực Chiến", studentName: "Phương Thanh",   youtubeId: "f7aUDr3IzyA" },
          { id: "qp-w04", title: "Bài Tốt Nghiệp Quay Phim Thực Chiến", studentName: "Hải Long",       youtubeId: "8e2tIE69uMc" },
        ],
        features: [
          "Mentor kèm cặp trong suốt khóa học",
          "Đi quay thực tế tại bối cảnh ngoài cùng giảng viên",
          "Hỗ trợ thiết bị Gimbal & máy quay trong buổi học",
          "Chấm bài cá nhân + review từng buổi quay (Buổi 10, 12)",
          "Quay bài tốt nghiệp làm Portfolio freelance",
          "Tư vấn định hướng nghề & cách báo giá khi ra nghề",
        ],
        outcomes: [
          "Làm chủ tam giác phơi sáng (Khẩu — Shutter quy tắc 180° — ISO) & Frame Rate",
          "Vận hành Gimbal mượt mà với kỹ thuật Ninja Walk",
          "Thành thạo các cú máy cơ bản: Push-in, Pull-out, Pan, Tilt, Tracking",
          "Thực hiện các cú máy nâng cao cinematic: 360° Inception, Whip-pan, Parallax",
          "Biết viết Shotlist & tư duy 'dựng phim trong đầu'",
          "Xử lý tình huống quay thực tế: thiếu sáng, không gian hẹp, raccord",
          "Đóng gói Portfolio + biết cách báo giá khi ra freelance",
        ],
        modules: [
          {
            title: "PHẦN 01 — THIẾT BỊ VÀ THAO TÁC CHUẨN BỊ (TIỀN KỲ)",
            lessons: [
              {
                title: "Buổi 1: Làm quen thiết bị & Làm chủ thông số máy quay",
                goal: "Giúp học viên hiểu và làm chủ các thông số cốt lõi trên máy ảnh/máy quay.",
                points: [
                  "Tìm hiểu về các nút chức năng và giao diện hiển thị trên thân máy (Body).",
                  "Tam giác phơi sáng trong quay phim: Khẩu độ (Iris/Aperture), Tốc độ màn trập (Shutter Speed — tuân thủ Quy tắc 180° để chuyển động tự nhiên), và độ nhạy sáng ISO.",
                  "Tìm hiểu về Tốc độ khung hình (Frame Rate — 24fps, 30fps, 60fps, 120fps) và ứng dụng thực tế khi nào quay Real-time, khi nào quay Slow-motion.",
                  "Cơ bản về Độ phân giải (Full HD, 4K), Tư duy lấy nét (Auto Focus vs Manual Focus), và Cân bằng trắng (White Balance).",
                ],
              },
              {
                title: "Buổi 2: Kỹ năng Setup thiết bị & Thao tác vận hành an toàn",
                goal: "Thành thạo các thao tác phần cứng bắt buộc trước khi bấm máy, đảm bảo an toàn tối đa cho thiết bị.",
                points: [
                  "Quy trình tháo/lắp ống kính (Lens) đúng cách, nhanh chóng, tránh bụi lọt vào cảm biến.",
                  "Cách sử dụng và cố định máy trên Tripod (chân máy tế vi), kỹ thuật Pan/Tilt mượt mà trên fluid head (đầu dầu).",
                  "Hướng dẫn chi tiết quy trình cân bằng (cân tải) Gimbal 3 trục (Tilt, Roll, Pan) từ cơ bản đến khi bật máy không bị lỗi motor hay quá tải.",
                  "Các thao tác kiểm tra cần thiết trước khi bấm máy (Checklist: Thẻ nhớ, Pin, Vệ sinh lens, Thiết lập Profile màu).",
                ],
              },
            ],
          },
          {
            title: "PHẦN 02 — LÀM QUEN GIMBAL & CÁC GÓC QUAY CƠ BẢN",
            lessons: [
              {
                title: "Buổi 3: Làm quen Gimbal & Kỹ thuật di chuyển chống rung (Ninja Walk)",
                goal: "Học viên kiểm soát được trọng lượng thiết bị và bước đi không bị rung lắc.",
                points: [
                  "Tìm hiểu các chế độ điều hướng cơ bản trên Gimbal: PF (Pan Follow), F (Follow), L (Lock), POV (All Follow).",
                  "Tập tư duy cầm Gimbal đúng trọng tâm, phân bổ lực tay để tránh mỏi và kiểm soát góc máy.",
                  'Thực hành bước đi kiểu "Ninja Walk" (đi chùng gối, gót chạm trước, cuốn mượt chân) để triệt tiêu độ rung theo trục dọc (trục Z).',
                ],
              },
              {
                title: "Buổi 4: Thực hành các góc máy & Cú máy cơ bản với Gimbal (Phần 1)",
                goal: "Làm chủ các cỡ cảnh và hướng máy cơ bản.",
                points: [
                  "Thực hành thiết lập các cỡ cảnh cơ bản: Toàn cảnh (Wide shot), Trung cảnh (Medium shot), Cận cảnh (Close-up).",
                  "Tập các cú máy cơ bản bằng Gimbal: Push-in (tiến vào), Pull-out (lùi ra), Pan (quét ngang), Tilt (ngửa lên/úp xuống).",
                  "Cách phối hợp nhịp nhàng giữa tốc độ bước đi và tốc độ ghìm tay điều hướng trên Gimbal.",
                ],
              },
              {
                title: "Buổi 5: Thực hành các góc máy & Cú máy cơ bản với Gimbal (Phần 2)",
                goal: "Tập luyện phối hợp góc máy để đạt độ mượt mà tối đa khi bám sát chủ thể.",
                points: [
                  "Thực hành cú máy Tracking nâng cao (đi song song bên hông hoặc đi giật lùi trước mặt nhân vật).",
                  "Tập giữ khung hình ổn định, đúng bố cục khi bám theo một chủ thể đang di chuyển liên tục.",
                  "Sửa lỗi thực tế tại chỗ: xử lý tình trạng khung hình bị sàn sạt, giật cục khi đổi hướng máy đột ngột hoặc bước đi chưa đều.",
                ],
              },
            ],
          },
          {
            title: "PHẦN 03 — NGÔN NGỮ ĐIỆN ẢNH & BIÊN KỊCH TƯ DUY",
            lessons: [
              {
                title: "Buổi 6: Kỹ thuật Camera Movement nâng cao & Ứng dụng thực tế",
                goal: "Hiểu và thực hiện các cú máy mang tính nghệ thuật, tạo nhịp điệu kể chuyện cho video.",
                points: [
                  "Học về các góc máy nâng cao: Góc thấp (Low-angle), Góc cao (High-angle), Góc nghiêng (Dutch angle).",
                  "Thực hành các cú máy phức tạp: Inception shot (xoay 360° — Vortex mode), Whip-pan (chuyển cảnh bằng tốc độ quét máy nhanh), Parallax shot (quay quỹ đạo tròn xung quanh chủ thể).",
                  "Phân tích cách ứng dụng từng cú máy nâng cao vào các sản phẩm thực tế (TVC quảng cáo, MV ca nhạc, Video Viral).",
                ],
              },
              {
                title: "Buổi 7: Biên kịch, Chọn góc máy & Tư duy hình ảnh (Storyboard)",
                goal: "Giúp học viên có tư duy chuyển kịch bản chữ thành hình ảnh trực quan trong đầu trước khi đi quay.",
                points: [
                  "Cách viết kịch bản phân cảnh (Shotlist) cơ bản: số thứ tự shot, cỡ cảnh, góc máy, Camera Movement, nội dung mô tả cảnh quay.",
                  "Tư duy chọn góc máy và cú máy phù hợp với diễn biến tâm lý nhân vật hoặc thông điệp sản phẩm.",
                  'Phương pháp "Dựng phim trong đầu": giúp học viên tưởng tượng được các source quay khi ghép lại với nhau có mượt, logic và đúng raccord (tính liên tục) hay không.',
                ],
              },
            ],
          },
          {
            title: "PHẦN 04 — THỰC HÀNH KỊCH BẢN & SỬA LỖI LÂM SÀNG",
            lessons: [
              {
                title: "Buổi 8: Thực hành bấm máy theo Kịch bản cá nhân (Quay thô)",
                goal: "Học viên tự triển khai lịch trình quay thực tế dựa trên kịch bản đã viết ở Buổi 7.",
                points: [
                  "Học viên tự setup thiết bị, lựa chọn góc máy và bấm máy các phân cảnh trong bài tập của mình.",
                  "Giảng viên theo sát bối cảnh để hướng dẫn học viên cách xử lý tình huống thực tế (thiếu sáng, không gian hẹp, góc quay bị hạn chế).",
                ],
              },
              {
                title: "Buổi 9: Thực hành dựng layout & Đồng bộ Source quay",
                goal: "Đưa các source quay vào phần mềm hậu kỳ để kiểm tra chất lượng file thô và dựng nháp.",
                points: [
                  "Học viên tiến hành lọc source quay, sắp xếp và cắt ghép thô theo đúng mạch kịch bản phân cảnh đã định trước.",
                  "Đánh giá xem các cú máy quay ở Buổi 8 đã đủ thời lượng, đủ độ mượt và có bị thiếu cảnh để nối hay không.",
                ],
              },
              {
                title: "Buổi 10: CHẤM BÀI & SỬA LỖI KỊCH BẢN THỰC HÀNH",
                goal: "Bóc tách chuyên sâu và chỉ ra các điểm chưa hợp lý trong sản phẩm thực hành của học viên.",
                points: [
                  "Giảng viên xem sản phẩm dựng, chỉ rõ: điểm nào sai về raccord (lỗi raccord hướng, raccord hành động), cú máy nào bị lỗi run hình, góc máy nào chưa đạt hiệu quả nội dung.",
                  "Hướng dẫn học viên cách khắc phục lỗi ngay tại bàn dựng (cắt cúp lại khung hình, dùng source chèn B-roll cứu cảnh, chỉnh lại nhịp cắt).",
                ],
              },
            ],
          },
          {
            title: "PHẦN 05 — TỐT NGHIỆP & ĐỊNH HƯỚNG NGHỀ NGHIỆP",
            lessons: [
              {
                title: "Buổi 11: Sản xuất Clip cá nhân tự do — Quay bài Tốt nghiệp làm Profile",
                goal: "Học viên tự do sáng tạo một video ngắn theo phong cách riêng để làm sản phẩm Portfolio (hồ sơ năng lực) cá nhân.",
                points: [
                  "Học viên tự lên ý tưởng độc lập, tự chọn bối cảnh và tự do thể hiện mọi kỹ năng đã được học (Gimbal, Tripod, Camera Movement nâng cao).",
                  "Giảng viên không can thiệp sâu vào ý tưởng nghệ thuật, chỉ đóng vai trò hỗ trợ về mặt kỹ thuật và an toàn thiết bị để học viên thỏa sức sáng tạo.",
                ],
              },
              {
                title: "Buổi 12: CHẤM BÀI TỐT NGHIỆP & Định hướng Nghề nghiệp Thực chiến",
                goal: "Đánh giá sản phẩm tốt nghiệp và trang bị hành trang làm nghề thực tế cho học viên.",
                points: [
                  "Chấm bài: công chiếu và chấm điểm video tốt nghiệp từ Buổi 11 của từng học viên. Nhận xét chi tiết ưu/nhược điểm kỹ năng của từng bạn.",
                  "Chia sẻ kinh nghiệm: giảng viên chia sẻ góc khuất và kinh nghiệm xương máu khi đi làm nghề (quy trình khảo sát bối cảnh, quản lý rủi ro thiết bị tại hiện trường, cách làm việc với khách hàng/diễn viên).",
                  "Tư vấn hướng đi: định hướng cho học viên khi mới bắt đầu ra làm freelancer hoặc ứng tuyển vào các Agency/Production House (cách báo giá dịch vụ quay, cách đóng gói Portfolio thu hút khách hàng).",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// Helpers
export function findCategory(slug: string): CourseCategory | undefined {
  return courseCategories.find((c) => c.slug === slug);
}

export function findClass(categorySlug: string, classSlug: string): { category: CourseCategory; cls: CourseClass } | undefined {
  const category = findCategory(categorySlug);
  if (!category) return undefined;
  const cls = category.classes.find((c) => c.slug === classSlug);
  if (!cls) return undefined;
  return { category, cls };
}

// Stats
export const stats = [
  { num: "10", suffix: "+", label: "Năm kinh nghiệm" },
  { num: "200", suffix: "+", label: "Dự án đã thực hiện" },
  { num: "3000", suffix: "+", label: "Học viên đã đào tạo" },
  { num: "98", suffix: "%", label: "Học viên hài lòng" },
];
