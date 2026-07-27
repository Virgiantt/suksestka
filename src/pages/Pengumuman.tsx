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
                <div className="pg2-featured__media" aria-hidden="true" />
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
                    <span className={`pg2-item__icon pg2-item__icon--${item.tone}`} />
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
                  {tips.map((tip) => (
                    <div className="pg2-tip" key={tip}>
                      <span className="pg2-tip__icon" />
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
