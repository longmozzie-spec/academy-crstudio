// Dữ liệu khóa học CapCut Pro Creator + Auth mock cho video portal
// LƯU Ý BẢO MẬT: Auth client-side này chỉ là MVP — credentials hardcode + sessionStorage.
// Khi cần production grade, swap sang Supabase Auth / NextAuth / Clerk + backend DB.

export const capcutCourse = {
  name: "CapCut Pro Creator & A.I Workflow",
  shortName: "CapCut Pro",
  slug: "capcut",
  tagline: "Sản xuất Video ngắn chuyên nghiệp + Tự động hóa bằng A.I",
  duration: "18 buổi thực chiến",
  outputCommitment: "Bộ Portfolio 5–7 video ngắn đa thể loại",
  description:
    "Khóa học không dạy 'học vẹt công cụ' — tập trung vào TƯ DUY dựng video có nhịp, có cảm xúc, có mục tiêu thương mại, và tối ưu hóa 300% hiệu suất bằng Trí tuệ nhân tạo (A.I).",
  videoTypes: [
    "Talking Head",
    "Video Bán hàng",
    "Review sản phẩm",
    "Trend Remake",
    "Cinematic Short",
    "Video AI Workflow",
  ],
  modules: [
    {
      title: "PHẦN 01 — TƯ DUY NỘI DUNG, WORKFLOW CHUẨN & NỀN TẢNG NÂNG CAO",
      lessons: [
        {
          title: "Buổi 1: Tư duy cấu trúc kịch bản Video ngắn & Định hướng Thuật toán",
          points: [
            "Phân tích cấu trúc giữ chân người xem cao cấp: Hook (3 giây đầu) — Context — Value — Payoff — CTA.",
            "Giải mã thuật toán phân phối của TikTok, Reels, Shorts và các lỗi phân phối thường gặp khiến kênh bị bóp tương tác.",
            "Thực hành: phân tích các case-study video triệu view, bóc tách lý do video giữ chân được khán giả thực tế.",
          ],
        },
        {
          title: "Buổi 2: Làm chủ Workflow CapCut Desktop & Tối ưu hóa quản lý Tài nguyên lớn",
          points: [
            "Giao diện quản lý chuyên nghiệp trên CapCut Desktop. Cấu hình proxy, tối ưu hóa cache để dựng file nặng mượt, không giật lag.",
            "Quy trình chuẩn hóa tài nguyên: đồng bộ file raw thoại, bộ SFX (whoosh, hit, riser, ambience), bộ template overlay (light leak, dust, flare, grain).",
            "Kỹ thuật cắt dựng thô nâng cao (Rough Cut): cắt theo hơi thở, ánh mắt, loại bỏ từ thừa, tạo nhịp nghỉ punchline đắt giá.",
          ],
        },
        {
          title: "Buổi 3: Generative A.I — xây dựng Tiền kỳ siêu tốc (Ý tưởng & Kịch bản)",
          points: [
            "Kỹ thuật viết Prompt nâng cao cho ChatGPT/Claude để nghiên cứu insight khách hàng, brainstorm 20 ý tưởng video ngắn trong 5 phút.",
            "Sử dụng AI chuyển đổi ý tưởng thô thành kịch bản phân cảnh chi tiết (Shotlist) có tính toán cỡ cảnh và hiệu ứng âm thanh đi kèm.",
            "Tài nguyên chuẩn bị: học viên chuẩn bị bộ file raw talking head (2–3 phút) và kịch bản phân cảnh cho dự án đầu tiên.",
          ],
        },
        {
          title: "Buổi 4: CHẤM BÀI THỰC HÀNH #1 — Workflow cắt dựng thô & Tư duy Hook",
          points: [
            "Giảng viên trực tiếp bóc tách file project (.capcut) của từng học viên trên lớp.",
            "Tiêu chí: cấu trúc Hook 3 giây đầu đã đủ hấp dẫn; mạch cắt dựng có bị cụt hoặc rườm rà không; timeline có sạch sẽ không.",
          ],
        },
      ],
    },
    {
      title: "PHẦN 02 — ĐỒ HỌA CHỮ, CHUYỂN ĐỘNG KEYFRAME & CHIỀU SÂU HÌNH ẢNH",
      lessons: [
        {
          title: "Buổi 5: Chuyên sâu Typography Mobile, Kinetic Subtitle & Auto-Caption A.I",
          points: [
            "Nguyên tắc chọn Font, phối màu Text tương phản tốt trên nền video chuyển động đa sắc.",
            "AI Auto-caption: tự động nhận diện giọng nói tạo phụ đề. Mẹo sửa lỗi chính tả hàng loạt và đồng bộ Text Style.",
            "Kỹ thuật dựng chữ động (Kinetic Subtitle) cuốn theo nhịp điệu câu nói, nhấn mạnh keyword (Keyword Highlight).",
          ],
        },
        {
          title: "Buổi 6: Keyframe nâng cao & Giả lập chuyển động Máy quay (Fake Camera)",
          points: [
            "Bản chất Keyframe trong CapCut: điều phối Position, Scale, Opacity.",
            "Keyframe tạo chuyển động máy giả lập: Fake camera movement (Zoom in từ từ, Pan nhẹ sang bên, Shake máy nhẹ tăng tính chân thực).",
            "Kỹ thuật Parallax chuyển động đa tầng cơ bản cho ảnh tĩnh và đồ họa chèn vào video.",
          ],
        },
        {
          title: "Buổi 7: Masking, Overlay & Blend Mode tạo chiều sâu Cinematic",
          points: [
            "Làm chủ các loại Mask: đường thẳng, hình tròn, Split screen. Kỹ thuật giấu chữ/text ra sau lưng nhân vật.",
            "Ứng dụng các chế độ hòa trộn (Blend Mode) kết hợp Overlay (light leak, bụi mịn, flare sáng) để nâng cấp hình ảnh điện ảnh.",
          ],
        },
        {
          title: "Buổi 8: CHẤM BÀI THỰC HÀNH #2 — Typography & Keyframe chuyển động",
          points: [
            "Chấm điểm bài tập kết hợp đồ họa chữ và giả lập chuyển động camera của học viên.",
            "Sửa chi tiết lỗi text bị tràn safe zone của nền tảng MXH, đồ thị keyframe bị giật hoặc chuyển động thiếu tự nhiên.",
          ],
        },
      ],
    },
    {
      title: "PHẦN 03 — ĐIỀU TỐC ĐỘ, THIẾT KẾ ÂM THANH & ĐỒNG BỘ LOOK MÀU",
      lessons: [
        {
          title: "Buổi 9: Nghệ thuật Speed Ramp (Velocity) & Xử lý Video du lịch, Sự kiện",
          points: [
            "Làm chủ đồ thị Speed Curve nâng cao (Custom Speed Ramp) thay vì cắt đổi tốc độ thông thường.",
            "Đồng bộ nhịp hình ảnh rơi đúng vào điểm rơi của nhạc (Cut theo beat). Cách làm mượt chuyển động khi kéo slow-motion sâu (Optical Flow / Smooth Slow-mo AI).",
          ],
        },
        {
          title: "Buổi 10: Thiết kế Âm thanh nâng cao & Công nghệ lọc âm A.I",
          points: [
            "Cấu trúc 4 lớp âm thanh chuẩn: Voice thoại — Nhạc nền (BGM) — SFX hành động (Whoosh, Hit) — Ambience.",
            "AI: khử tạp âm chuyên sâu, cân bằng tần số giọng nói, đồng bộ tự động nhỏ nhạc nền khi có thoại (Audio Ducking).",
          ],
        },
        {
          title: "Buổi 11: Tư duy Màu sắc & Quy trình đồng bộ Look màu (Color Grading)",
          points: [
            "Đọc biểu đồ màu cơ bản: nhận diện Highlights — Shadows — Midtones.",
            "Quy trình xử lý màu 2 bước: Cân sáng/Cân bằng trắng (Color Correction) → Áp màu cảm xúc (Color Grading bằng LUTs/Filters phim).",
            "Kỹ thuật làm sạch và sáng da nhân vật tự nhiên.",
          ],
        },
        {
          title: "Buổi 12: CHẤM BÀI THỰC HÀNH #3 — Speed Ramp & Sound Design",
          points: [
            "Kiểm tra toàn diện bài tập dựng video ngắn ứng dụng tăng giảm tốc độ kết hợp mix âm thanh và chỉnh màu.",
            "Điểm lỗi thường gặp: âm thanh lấn át tiếng thoại; hiệu ứng chuyển màu bị gắt hoặc da người bị ám màu của bộ lọc.",
          ],
        },
      ],
    },
    {
      title: "PHẦN 04 — THỰC CHIẾN VIDEO THƯƠNG MẠI & SẢN XUẤT SIÊU TỐC BẰNG A.I",
      lessons: [
        {
          title: "Buổi 13: Phông xanh (Chroma Key), Tách nền thông minh & Kỹ xảo A.I",
          points: [
            "Thực hành Ultra Key/Chroma Key tách phông xanh mặc định, xử lý lỗi lem màu ở viền và đổ bóng nhân vật vào nền mới.",
            "AI Smart Cutout / Auto Removal: bóc tách nhân vật khỏi bối cảnh đời thực cực nhanh.",
            "Ghép nhân vật vào các bối cảnh ảo được tạo lập bởi Generative AI.",
          ],
        },
        {
          title: "Buổi 14: Thực chiến dựng Video Bán hàng / Quảng cáo chuyển đổi cao",
          points: [
            "Cấu trúc video thương mại: Problem → Solution → Proof → Offer → CTA.",
            "Kỹ thuật chèn Text giá bán, hiệu ứng voucher popup, chèn Logo thương hiệu đúng quy chuẩn thị giác doanh nghiệp.",
          ],
        },
        {
          title: "Buổi 15: Thực chiến dựng Video Talking Head dạng Chuyên gia",
          points: [
            "Kỹ thuật cắt khoảng chết (Jump cut mượt), kết hợp Zoom cận/Zoom trung bằng keyframe thay đổi góc nhìn liên tục 3–5 giây.",
            "Quy trình chèn B-roll thông minh đè lên tiếng thoại để giải thích trực quan nội dung kiến thức.",
          ],
        },
      ],
    },
    {
      title: "PHẦN 05 — TỰ ĐỘNG HÓA WORKFLOW A.I & BẢO VỆ ĐỒ ÁN TỐT NGHIỆP",
      lessons: [
        {
          title: "Buổi 16: Workflow A.I Automation — Sản xuất video ngắn siêu tốc",
          points: [
            "Quy trình tự động hóa: Ý tưởng kịch bản (AI Văn bản) → Giọng đọc nhân tạo (AI Voice) → Hình ảnh/Video minh họa (AI Text-to-Video) → Layout tự động trên CapCut Desktop.",
            'Phân biệt giữa "lạm dụng AI làm video rác" và "kiểm soát AI để gia tăng năng suất của Editor chuyên nghiệp".',
          ],
        },
        {
          title: "Buổi 17: BẢO VỆ ĐỒ ÁN TỐT NGHIỆP (Hội đồng Feedback & Sửa bài nhóm)",
          goal: "Học viên công chiếu tác phẩm đồ án theo Brief thực tế: Video bán hàng 45s, Talking head 60s, Review sản phẩm 45s, hoặc Video thương hiệu cá nhân 60–90s.",
          points: [
            "Hook: 3 giây đầu có đủ giữ chân giữ mắt không?",
            "Nhịp dựng: pacing có mượt và giữ chân người xem xuyên suốt không?",
            "Text/Typography: có dễ đọc, đúng kích thước an toàn không?",
            "Âm thanh: Sound Design có giàu cảm xúc, tiếng thoại rõ ràng không?",
            "Màu sắc: hình ảnh có trong, sạch da người, chuẩn màu không?",
            "Kỹ thuật: keyframe, mask, overlay có hợp lý, tinh tế không?",
            "Mục tiêu: có cấu trúc mục tiêu thương mại/truyền thông rõ ràng không?",
            "Xuất file: định dạng, tỷ lệ khung hình có đúng chuẩn tối ưu nền tảng không?",
          ],
        },
        {
          title: "Buổi 18: Nghiệm thu Đồ án — Đóng gói Portfolio & Hành trang hướng nghiệp",
          points: [
            "Học viên nộp bản sửa lỗi cuối cùng sau Buổi 17 để nghiệm thu đưa vào hồ sơ năng lực.",
            "Hướng dẫn đóng gói folder project sạch để bàn giao khách hàng doanh nghiệp hoặc gửi nhà tuyển dụng.",
            "Tư vấn hướng nghiệp: viết CV/Portfolio ấn tượng, phương pháp báo giá dịch vụ quay dựng video ngắn, quy trình nhận feedback sửa bài để tránh rủi ro đền bù hợp đồng. Trao chứng nhận tốt nghiệp.",
          ],
        },
      ],
    },
  ],
  // 4 đặc quyền All-in-One Hero
  privileges: [
    {
      title: "Học trọn vẹn 18 buổi thực chiến",
      description:
        "Không giới hạn kiến thức từ tư duy kịch bản, kỹ thuật hậu kỳ, hiệu ứng âm thanh, màu sắc đến quy trình tự động hóa A.I thế hệ mới.",
    },
    {
      title: "4 buổi sửa bài lâm sàng độc quyền",
      description:
        "Giảng viên trực tiếp mở file dự án (.capcut) sửa từng khung hình, căn chỉnh nhịp cắt thô và tối ưu vùng an toàn hiển thị.",
    },
    {
      title: "Kèm cặp hoàn thiện Portfolio đầu ra",
      description:
        "Mentor theo sát hỗ trợ chỉnh sửa bài tập lớn — đảm bảo sau khóa học bạn có ngay 5–7 video ngắn đạt chuẩn thương mại để nhận job hoặc xây kênh.",
    },
    {
      title: "Hành trang hướng nghiệp thực tế",
      description:
        "Tặng kèm bộ tài liệu quy trình khảo sát bối cảnh, checklist bàn giao file sạch cho doanh nghiệp và kịch bản đàm phán báo giá Freelance Editor.",
    },
  ],
};

// ─── VIDEO LIBRARY (cho học viên đã đăng nhập) ──────────────────────────────
// Mỗi buổi học sẽ có 1 video tương ứng. youtubeId rỗng → chưa upload.
// User sẽ điền youtubeId thật (nên dùng "unlisted" để chỉ ai có link mới xem được, hoặc Vimeo private).
export type VideoLesson = {
  id: string;        // "01", "02"...
  title: string;
  description: string;
  youtubeId?: string; // YouTube unlisted ID — KHÔNG để public
  duration?: string;  // "45:23"
};

export const capcutVideoLibrary: VideoLesson[] = [
  { id: "01", title: "Buổi 1: Tư duy cấu trúc kịch bản Video ngắn", description: "Hook — Context — Value — Payoff — CTA. Giải mã thuật toán TikTok/Reels/Shorts.", youtubeId: "" },
  { id: "02", title: "Buổi 2: Workflow CapCut Desktop & Quản lý tài nguyên lớn", description: "Proxy, cache tối ưu, chuẩn hóa file raw + SFX + overlay. Rough cut nâng cao.", youtubeId: "" },
  { id: "03", title: "Buổi 3: Generative A.I cho Tiền kỳ siêu tốc", description: "Prompt nâng cao cho ChatGPT/Claude → 20 ý tưởng / 5 phút. AI chuyển kịch bản thô thành Shotlist.", youtubeId: "" },
  { id: "04", title: "Buổi 4: CHẤM BÀI #1 — Workflow & Tư duy Hook", description: "Bóc tách file .capcut của học viên, đánh giá Hook và timeline.", youtubeId: "" },
  { id: "05", title: "Buổi 5: Typography Mobile, Kinetic Subtitle & Auto-Caption A.I", description: "Font, phối màu. AI auto-caption. Kinetic Text + Keyword Highlight.", youtubeId: "" },
  { id: "06", title: "Buổi 6: Keyframe nâng cao & Fake Camera Movement", description: "Position, Scale, Opacity. Zoom — Pan — Shake. Parallax đa tầng.", youtubeId: "" },
  { id: "07", title: "Buổi 7: Masking, Overlay & Blend Mode cinematic", description: "Mask: line, circle, split. Blend mode với light leak/bụi/flare.", youtubeId: "" },
  { id: "08", title: "Buổi 8: CHẤM BÀI #2 — Typography & Keyframe", description: "Sửa text tràn safe zone, keyframe giật, chuyển động thiếu tự nhiên.", youtubeId: "" },
  { id: "09", title: "Buổi 9: Speed Ramp (Velocity) & Video du lịch / sự kiện", description: "Custom Speed Curve, cut theo beat, Optical Flow / Smooth Slow-mo AI.", youtubeId: "" },
  { id: "10", title: "Buổi 10: Sound Design nâng cao & A.I lọc âm", description: "4 lớp âm thanh chuẩn. AI khử tạp âm. Audio Ducking tự động.", youtubeId: "" },
  { id: "11", title: "Buổi 11: Tư duy Màu sắc & Color Grading đồng bộ", description: "Color Correction → Color Grading. LUTs/Filters. Làm sạch da.", youtubeId: "" },
  { id: "12", title: "Buổi 12: CHẤM BÀI #3 — Speed Ramp & Sound Design", description: "Sửa âm lấn thoại, chuyển màu gắt, ám màu da.", youtubeId: "" },
  { id: "13", title: "Buổi 13: Chroma Key, Smart Cutout A.I & Kỹ xảo", description: "Ultra Key + Auto Removal AI. Ghép nhân vật vào bối cảnh AI.", youtubeId: "" },
  { id: "14", title: "Buổi 14: Video Bán hàng — Quảng cáo chuyển đổi cao", description: "Problem → Solution → Proof → Offer → CTA. Voucher popup, brand logo.", youtubeId: "" },
  { id: "15", title: "Buổi 15: Talking Head chuyên gia", description: "Jump cut mượt, Zoom keyframe, B-roll thông minh đè thoại.", youtubeId: "" },
  { id: "16", title: "Buổi 16: A.I Automation — Sản xuất siêu tốc", description: "AI Văn bản → AI Voice → AI Text-to-Video → Layout tự động trên CapCut.", youtubeId: "" },
  { id: "17", title: "Buổi 17: BẢO VỆ ĐỒ ÁN TỐT NGHIỆP", description: "Công chiếu đồ án. 8 tiêu chí hội đồng đánh giá nghiêm ngặt.", youtubeId: "" },
  { id: "18", title: "Buổi 18: Đóng gói Portfolio & Hành trang hướng nghiệp", description: "Đóng gói project sạch, CV/Portfolio, báo giá freelance. Trao chứng nhận.", youtubeId: "" },
];

// ─── DANH SÁCH HỌC VIÊN ĐÃ ĐĂNG KÝ (Mock Auth) ──────────────────────────────
// Khi học viên thanh toán + đăng ký lớp, bạn thêm email + password tạm thời vào đây.
// LƯU Ý: Đây là mock client-side — KHÔNG bảo mật cho production.
// Cách nâng cấp production:
//   - Supabase Auth + RLS (Row Level Security)
//   - NextAuth.js + database adapter (Prisma + Postgres)
//   - Clerk hoặc Auth0 (managed service)
// User-facing trải nghiệm vẫn giống nhau, chỉ thay phần backend.
export type EnrolledStudent = {
  email: string;
  password: string;  // tạm thời — production phải hash bcrypt server-side
  name: string;
  enrolledAt: string;  // YYYY-MM-DD
};

export const enrolledStudents: EnrolledStudent[] = [
  // Tài khoản demo cho bạn test
  { email: "demo@duongminhtho.vn", password: "demo123", name: "Học Viên Demo", enrolledAt: "2025-01-01" },
  // Thêm học viên thật ở đây sau khi họ thanh toán:
  // { email: "studentA@gmail.com", password: "tempPass!", name: "Nguyễn Văn A", enrolledAt: "2025-06-01" },
];

// Helper functions
export function authenticate(email: string, password: string): EnrolledStudent | null {
  const found = enrolledStudents.find(
    (s) => s.email.toLowerCase().trim() === email.toLowerCase().trim() && s.password === password
  );
  return found ?? null;
}

const SESSION_KEY = "capcut_session_v1";

export function saveSession(student: EnrolledStudent): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ email: student.email, name: student.name, ts: Date.now() }));
  } catch {
    // ignore
  }
}

export function loadSession(): { email: string; name: string; ts: number } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearSession(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}
