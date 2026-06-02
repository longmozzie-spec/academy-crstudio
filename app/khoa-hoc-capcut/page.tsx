"use client";

import { useEffect, useState, useRef } from "react";
import {
  Lock, LogIn, LogOut, Mail, KeyRound, Eye, EyeOff, ShieldCheck,
  Sparkles, Award, Users, Video, PlayCircle, BookOpen, Target,
  ChevronDown, AlertCircle, CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CurriculumAccordion } from "@/components/curriculum-accordion";
import { SecuredVideoPlayer } from "@/components/capcut/secured-video-player";
import {
  capcutCourse,
  capcutVideoLibrary,
  authenticate,
  saveSession,
  loadSession,
  clearSession,
  type VideoLesson,
} from "@/lib/capcut-data";

export default function CapcutCoursePage() {
  // Auth state
  const [session, setSession] = useState<{ email: string; name: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  // Restore session
  useEffect(() => {
    setMounted(true);
    const s = loadSession();
    if (s) setSession({ email: s.email, name: s.name });
  }, []);

  const handleLogin = (s: { email: string; name: string }) => {
    setSession(s);
  };

  const handleLogout = () => {
    clearSession();
    setSession(null);
  };

  return (
    <>
      {/* Public marketing section — luôn hiện */}
      <CapcutHero session={session} />
      <div className="section-divider mx-6" />
      <CapcutPrivileges />
      <div className="section-divider mx-6" />
      <CapcutCurriculum />
      <div className="section-divider mx-6" />

      {/* Auth gate or video portal */}
      {mounted && (session ? (
        <VideoPortalSection session={session} onLogout={handleLogout} />
      ) : (
        <LoginSection onLogin={handleLogin} />
      ))}
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════════════
function CapcutHero({ session }: { session: { email: string; name: string } | null }) {
  const scrollToPortal = () => {
    document.getElementById("video-portal")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="aurora-blob w-[700px] h-[700px] bg-[#D4A853]/15 -top-40 -right-32" />
      <div className="aurora-blob w-[500px] h-[500px] bg-[#4FAE7E]/8 bottom-0 -left-32" style={{ animationDelay: "-7s" }} />

      <div className="max-w-5xl mx-auto text-center relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40">
            <Sparkles size={12} className="text-[#D4A853]" />
            <span className="font-sub text-[10px] uppercase tracking-[0.3em] text-[#D4A853]">
              Premium · Video Portal · A.I Workflow
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1
            className="font-heading text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05 }}
          >
            CapCut <span className="text-gold-gradient italic">Pro Creator</span>
            <br />
            <span className="text-white/90 text-[60%]">&amp; Ứng Dụng A.I</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="font-sub text-[#D4A853] text-sm uppercase tracking-[0.25em] mb-6">
            {capcutCourse.tagline}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {capcutCourse.description}
          </p>
        </Reveal>

        <Reveal delay={350}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {capcutCourse.videoTypes.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            <StatCard icon={Video} label="Thời lượng" value={capcutCourse.duration} />
            <StatCard icon={Award} label="Đầu ra" value="Portfolio 5–7 video" />
            <StatCard icon={Sparkles} label="Workflow" value="Tích hợp A.I 300%" />
          </div>
        </Reveal>

        <Reveal delay={500}>
          <button
            onClick={scrollToPortal}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F0C870] to-[#D4A853] hover:from-[#FAD58A] hover:to-[#E5B860] text-black font-bold px-7 py-4 rounded-full transition-all duration-200 cursor-pointer cta-pulse"
          >
            {session ? (
              <>
                <PlayCircle size={18} />
                Vào Phòng Học
              </>
            ) : (
              <>
                <LogIn size={16} />
                Đăng nhập để xem video
              </>
            )}
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: typeof Video; label: string; value: string }) {
  return (
    <div className="glass-card rounded-2xl p-4">
      <Icon size={16} className="text-[#D4A853] mb-2 mx-auto" />
      <p className="font-sub text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">{label}</p>
      <p className="text-white text-sm font-medium leading-tight">{value}</p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PRIVILEGES — 4 đặc quyền All-in-One Hero
// ═══════════════════════════════════════════════════════════════════════════
function CapcutPrivileges() {
  const icons = [BookOpen, Target, Award, Users];
  return (
    <section className="py-14 md:py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <Reveal>
            <div className="flex items-center gap-3 justify-center mb-5">
              <div className="w-10 h-px bg-[#D4A853]" />
              <span className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
                All-In-One Hero · Đặc Quyền Trọn Gói
              </span>
              <div className="w-10 h-px bg-[#D4A853]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-heading text-white" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.15 }}>
              Khóa Học <span className="text-gold-gradient italic">Đồng Nhất</span>, Không Phân Cấp
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Khi đăng ký thành công, học viên sở hữu trọn vẹn toàn bộ hệ sinh thái đặc quyền cao cấp nhất.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {capcutCourse.privileges.map((p, i) => {
            const Icon = icons[i] ?? Sparkles;
            return (
              <Reveal key={i} delay={i * 100}>
                <div className="glass-card rounded-2xl p-6 md:p-7 h-full flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A853]/15 border border-[#D4A853]/30 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[#D4A853]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-white text-lg mb-2 leading-tight">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// CURRICULUM — 18 buổi
// ═══════════════════════════════════════════════════════════════════════════
function CapcutCurriculum() {
  return (
    <section className="py-14 md:py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Reveal>
            <div className="flex items-center gap-3 justify-center mb-5">
              <div className="w-10 h-px bg-[#D4A853]" />
              <span className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
                Giáo Trình 18 Buổi
              </span>
              <div className="w-10 h-px bg-[#D4A853]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-heading text-white" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.15 }}>
              Lộ Trình <span className="text-gold-gradient italic">Thực Chiến</span>
            </h2>
          </Reveal>
        </div>

        <Reveal>
          <CurriculumAccordion modules={capcutCourse.modules} accent="#D4A853" />
        </Reveal>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// LOGIN SECTION — chưa đăng nhập
// ═══════════════════════════════════════════════════════════════════════════
function LoginSection({ onLogin }: { onLogin: (s: { email: string; name: string }) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Mô phỏng delay request để cảm giác như API thật
    await new Promise((r) => setTimeout(r, 600));

    const found = authenticate(email, password);
    setLoading(false);

    if (!found) {
      setError("Email hoặc mật khẩu không đúng, hoặc tài khoản chưa được kích hoạt.");
      return;
    }

    saveSession(found);
    onLogin({ email: found.email, name: found.name });
  };

  return (
    <section id="video-portal" className="py-14 md:py-20 lg:py-28 px-6">
      <div className="max-w-md mx-auto">
        <Reveal>
          <div className="text-center mb-8">
            <div className="inline-flex w-16 h-16 rounded-2xl bg-[#D4A853]/15 border border-[#D4A853]/40 items-center justify-center mb-5">
              <Lock size={26} className="text-[#D4A853]" />
            </div>
            <h2
              className="font-heading text-white mb-3"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", lineHeight: 1.2 }}
            >
              Phòng Học <span className="text-gold-gradient italic">Riêng Tư</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Phòng học video bài giảng được bảo vệ. Chỉ học viên đã đăng ký và kích hoạt tài khoản mới được vào xem.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={onSubmit}
            className="glass-card rounded-3xl p-7 md:p-8 gold-glow"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="cc-email" className="block font-sub text-[10px] uppercase tracking-[0.22em] text-[#D4A853] mb-2">
                  Email đăng ký
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="cc-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-[#D4A853]/60 focus:bg-white/[0.05] rounded-xl pl-11 pr-5 py-3.5 text-white placeholder:text-gray-600 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cc-pw" className="block font-sub text-[10px] uppercase tracking-[0.22em] text-[#D4A853] mb-2">
                  Mật khẩu
                </label>
                <div className="relative">
                  <KeyRound size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="cc-pw"
                    type={showPw ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-[#D4A853]/60 focus:bg-white/[0.05] rounded-xl pl-11 pr-12 py-3.5 text-white placeholder:text-gray-600 outline-none transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D4A853] transition-colors p-1.5"
                    aria-label={showPw ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                  >
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="flex items-start gap-2.5 text-red-400 text-xs bg-red-500/10 border border-red-500/25 rounded-lg px-4 py-3">
                  <AlertCircle size={14} className="shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F0C870] to-[#D4A853] hover:from-[#FAD58A] hover:to-[#E5B860] text-black font-bold py-3.5 rounded-full transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-black/50 animate-pulse" />
                    Đang đăng nhập...
                  </span>
                ) : (
                  <>
                    <LogIn size={16} />
                    Đăng Nhập Vào Phòng Học
                  </>
                )}
              </button>

              <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                <ShieldCheck size={13} className="text-[#D4A853]/70 shrink-0 mt-0.5" />
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  Nội dung video được bảo vệ bản quyền. Tài khoản gắn liền với email đăng ký — không chia sẻ với người khác.
                </p>
              </div>
            </div>
          </form>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-8 text-center">
            <p className="font-sub text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-2">
              Chưa có tài khoản?
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-sm text-[#D4A853] hover:text-[#F0C870] link-underline"
            >
              Liên hệ đăng ký lớp CapCut Pro Creator →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// VIDEO PORTAL — sau khi đăng nhập
// ═══════════════════════════════════════════════════════════════════════════
function VideoPortalSection({
  session,
  onLogout,
}: {
  session: { email: string; name: string };
  onLogout: () => void;
}) {
  const [activeLesson, setActiveLesson] = useState<VideoLesson>(capcutVideoLibrary[0]);

  return (
    <section id="video-portal" className="py-12 md:py-18 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header — welcome + logout */}
        <Reveal>
          <div className="glass-card rounded-2xl p-5 md:p-6 mb-8 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4A853]/30 to-[#D4A853]/10 border border-[#D4A853]/40 flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} className="text-[#D4A853]" />
              </div>
              <div className="min-w-0">
                <p className="font-sub text-[10px] uppercase tracking-[0.22em] text-[#D4A853] mb-0.5">
                  Đang đăng nhập
                </p>
                <p className="text-white font-heading text-base truncate">
                  {session.name}{" "}
                  <span className="text-gray-400 text-xs">· {session.email}</span>
                </p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#D4A853] border border-white/10 hover:border-[#D4A853]/50 px-4 py-2 rounded-full transition-all duration-200"
            >
              <LogOut size={14} />
              Đăng xuất
            </button>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
          {/* Video player + info */}
          <div>
            <Reveal>
              <SecuredVideoPlayer
                youtubeId={activeLesson.youtubeId}
                title={activeLesson.title}
                watermarkText={session.email}
              />
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-5 glass-card rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="font-heading text-3xl font-bold tabular-nums"
                    style={{ color: "rgba(212,168,83,0.5)" }}
                  >
                    {activeLesson.id}
                  </span>
                  <h3 className="font-heading text-white text-xl leading-tight">
                    {activeLesson.title.replace(/^Buổi \d+:\s*/, "")}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {activeLesson.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-4 glass-card rounded-xl px-5 py-4 flex items-start gap-3">
                <ShieldCheck size={16} className="text-[#D4A853] shrink-0 mt-0.5" />
                <div>
                  <p className="font-sub text-[10px] uppercase tracking-[0.22em] text-[#D4A853] mb-1">
                    Cam kết bản quyền
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Video bài giảng có gắn watermark email cá nhân (hiển thị động trong khung hình).
                    Mọi hành vi tải xuống, sao chép, phát tán ra bên ngoài đều vi phạm điều khoản học viên
                    và có thể bị truy vết. Vui lòng tôn trọng công sức của giảng viên — cảm ơn bạn.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Lesson list */}
          <div>
            <Reveal delay={100}>
              <div className="glass-card rounded-2xl overflow-hidden lg:sticky lg:top-24 max-h-[80vh] flex flex-col">
                <div className="px-5 py-4 border-b border-[#D4A853]/20 flex items-center gap-2">
                  <Video size={14} className="text-[#D4A853]" />
                  <span className="font-sub text-[10px] uppercase tracking-[0.25em] text-[#D4A853]">
                    Danh sách 18 buổi
                  </span>
                </div>
                <ul className="overflow-y-auto divide-y divide-white/5 flex-1">
                  {capcutVideoLibrary.map((l) => {
                    const isActive = l.id === activeLesson.id;
                    return (
                      <li key={l.id}>
                        <button
                          onClick={() => setActiveLesson(l)}
                          className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors duration-200 ${
                            isActive ? "bg-[#D4A853]/12" : "hover:bg-white/5"
                          }`}
                        >
                          <span
                            className={`font-heading font-bold text-sm shrink-0 w-7 text-center ${
                              isActive ? "text-[#F0C870]" : "text-[#D4A853]/60"
                            }`}
                          >
                            {l.id}
                          </span>
                          <span
                            className={`flex-1 text-xs leading-snug ${
                              isActive ? "text-white font-medium" : "text-gray-400"
                            }`}
                          >
                            {l.title.replace(/^Buổi \d+:\s*/, "")}
                          </span>
                          {isActive ? (
                            <PlayCircle size={14} className="text-[#D4A853] shrink-0" />
                          ) : (
                            <span className="w-3.5 h-3.5 shrink-0" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
