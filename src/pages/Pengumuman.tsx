import { useState } from "react";
import { Link } from "react-router-dom";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/Pengumuman.css";

const categories = ["Semua", "Kurikulum", "Sistem", "Event", "Personal"];

const previousAnnouncements = [
  {
    key: "maintenance",
    tone: "amber" as const,
    category: "SISTEM",
    date: "Kemarin, 14:30",
    title: "Jadwal Maintenance Server Mingguan",
    desc: "Akses panel pengajar akan ditutup sementara pada hari Minggu pukul…",
    by: "Tim IT Support",
  },
  {
    key: "webinar",
    tone: "green" as const,
    category: "EVENT",
    date: "12 Okt 2024",
    title: "Webinar Pedagogi Digital: Strategi Interaksi AI",
    desc: "Wajib diikuti oleh seluruh pengajar premium. Pendaftaran ditutup lusa.…",
    by: "HRD Training",
  },
  {
    key: "honor",
    tone: "muted" as const,
    category: "PERSONAL",
    date: "10 Okt 2024",
    title: "Pencairan Honor Mengajar Periode September Selesai",
    desc: "Transfer ke rekening terdaftar telah berhasil diproses. Silakan cek…",
    by: "Finance",
  },
];

const tips = [
  "Gunakan AI untuk membuat kuis otomatis dalam hitungan detik.",
  "Pantau analitik siswa secara mingguan untuk deteksi dini kesulitan belajar.",
  "Gunakan fitur Pengumuman untuk mengingatkan tenggat waktu tugas.",
];

function AnnouncementIcon({ type }: { type: "amber" | "green" | "muted" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {type === "amber" ? (
        <path d="M11 2.5L19 17H3L11 2.5ZM11 7V11.5M11 14.5V14.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      ) : type === "green" ? (
        <path d="M6 11.5L9.25 14.5L16 7.5M11 2.5C15.7 2.5 19.5 6.3 19.5 11C19.5 15.7 15.7 19.5 11 19.5C6.3 19.5 2.5 15.7 2.5 11C2.5 6.3 6.3 2.5 11 2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M11 19.5C15.7 19.5 19.5 15.7 19.5 11C19.5 6.3 15.7 2.5 11 2.5C6.3 2.5 2.5 6.3 2.5 11C2.5 15.7 6.3 19.5 11 19.5ZM8 8.5C8.5 7.6 9.4 7 10.5 7C11.9 7 13 7.9 13 9C13 10.5 11 10.5 11 12M11 15V15.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function AnnouncementFeatureIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <path d="M8 14.5L28.5 7V27.5L8 20V14.5ZM28.5 13L34 11V23L28.5 21M13 21L15.5 30H11.5L8 20" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TipIcon({ index }: { index: number }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      {index === 0 ? (
        <path d="M9 2.5L10.3 6.7L14.5 8L10.3 9.3L9 13.5L7.7 9.3L3.5 8L7.7 6.7L9 2.5ZM14 12L14.5 13.5L16 14L14.5 14.5L14 16L13.5 14.5L12 14L13.5 13.5L14 12Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      ) : index === 1 ? (
        <path d="M9 2.5C6.24 2.5 4 4.74 4 7.5C4 9.18 4.83 10.65 6.1 11.53C6.65 11.91 7 12.55 7 13.2H11C11 12.55 11.35 11.91 11.9 11.53C13.17 10.65 14 9.18 14 7.5C14 4.74 11.76 2.5 9 2.5ZM7 15H11M8 17H10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 2.5V15.5M4 7.5L9 2.5L14 7.5M4 12.5L9 17.5L14 12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function Pengumuman() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeTab, setActiveTab] = useState<"terbaru" | "belum-dibaca">("terbaru");

  return (
    <div className="teacher-dashboard pengumuman">
      <TeacherSidebar active="Pengumuman" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content pengumuman__content">
          <header className="pg2-hero">
            <div>
              <h1>Pusat Pengumuman</h1>
              <p>
                Informasi resmi dan pembaruan sistem untuk pengajar. Pastikan Anda selalu up-to-date dengan
                instruksi terbaru.
              </p>
            </div>
            <div className="pg2-toggle">
              <button
                type="button"
                className={activeTab === "terbaru" ? "pg2-toggle__active" : undefined}
                onClick={() => setActiveTab("terbaru")}
              >
                Terbaru
              </button>
              <button
                type="button"
                className={activeTab === "belum-dibaca" ? "pg2-toggle__active" : undefined}
                onClick={() => setActiveTab("belum-dibaca")}
              >
                Belum Dibaca
              </button>
            </div>
          </header>

          <div className="pg2-layout">
            <div className="pg2-main">
              <div className="pg2-chips">
                {categories.map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    className={`pg2-chip${activeCategory === cat ? " pg2-chip--active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
                <button type="button" className="pg2-chip pg2-chip--warning">
                  ⚠ Penting
                </button>
              </div>

              <article className="pg2-featured">
                <div className="pg2-featured__media" aria-hidden="true">
                  <AnnouncementFeatureIcon />
                </div>
                <div className="pg2-featured__body">
                  <div className="pg2-featured__meta">
                    <span className="pg2-pill pg2-pill--blue">Kurikulum</span>
                    <span>Hari ini, 09:00 WIB</span>
                  </div>
                  <h2>Update Kurikulum TKA Semester Genap 2024</h2>
                  <p>Terdapat penyesuaian materi esensial untuk mata pelajaran Fisika…</p>
                  <div className="pg2-featured__footer">
                    <span className="pg2-avatar">AK</span>
                    <span className="pg2-featured__author">Admin Kurikulum</span>
                    <a href="#detail" className="pg2-featured__link">
                      Baca Selengkapnya →
                    </a>
                  </div>
                </div>
              </article>

              <div className="pg2-list-head">PENGUMUMAN SEBELUMNYA</div>

              <div className="pg2-list">
                {previousAnnouncements.map((item) => (
                  <article className={`pg2-item pg2-item--${item.tone}`} key={item.key}>
                    <span className={`pg2-item__icon pg2-item__icon--${item.tone}`}>
                      <AnnouncementIcon type={item.tone} />
                    </span>
                    <div className="pg2-item__body">
                      <div className="pg2-item__top">
                        <span className="pg2-item__category">{item.category}</span>
                        <span className="pg2-item__date">{item.date}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <p className="pg2-item__by">Oleh: {item.by}</p>
                    </div>
                  </article>
                ))}
              </div>

              <button type="button" className="pg2-more">
                Muat Lebih Banyak ⌄
              </button>
            </div>

            <aside className="pg2-aside">
              <section className="pg2-status">
                <h3>Status Informasi</h3>
                <div className="pg2-status__row">
                  <span>
                    <i className="pg2-dot pg2-dot--amber" /> Belum Dibaca
                  </span>
                  <strong>3</strong>
                </div>
                <div className="pg2-status__row pg2-status__row--danger">
                  <span>
                    <i className="pg2-dot pg2-dot--red" /> Penting
                  </span>
                  <strong>1</strong>
                </div>
              </section>

              <section className="pg2-cta">
                <h3>Punya Hak Akses?</h3>
                <p>Buat pengumuman baru untuk disebarkan ke jaringan pengajar atau siswa Anda.</p>
                <Link to="/pengumuman/buat" className="pg2-cta__btn">
                  + Kirim Pengumuman Baru
                </Link>
              </section>

              <section className="pg2-tips">
                <h3>Tips &amp; Trik Pengajar</h3>
                <div className="pg2-tips__list">
                  {tips.map((tip, index) => (
                  <div className="pg2-tip" key={tip}>
                    <span className="pg2-tip__icon">
                      <TipIcon index={index} />
                    </span>
                      <p>{tip}</p>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>

        <TeacherFooter />
      </div>
    </div>
  );
}

export default Pengumuman;
