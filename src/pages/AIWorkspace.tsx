import { useState } from "react";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/AIWorkspace.css";

const tools = [
  { key: "soal", title: "Soal Latihan", desc: "Pilihan ganda, essay, atau HOTS.", tone: "purple" as const },
  { key: "rangkuman", title: "Rangkuman Materi", desc: "Ekstrak poin penting dokumen.", tone: "green" as const },
  { key: "rpp", title: "Rencana Pembelajaran", desc: "Modul ajar & RPP interaktif.", tone: "amber" as const },
];

function AIWorkspace() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="teacher-dashboard ai-workspace">
      <TeacherSidebar active="AI Workspace" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content ai-workspace__content">
          <div className="aw-layout">
            <div className="aw-main">
              <section className="aw-hero">
                <span className="aw-hero__badge">✨ EduPremium AI Core</span>
                <h1>Pusat Kreativitas Cerdas</h1>
                <p>
                  Tingkatkan efisiensi mengajar Anda. Biarkan AI menganalisis kurikulum, membuat soal berstandar
                  tinggi, dan merancang RPP yang interaktif dalam hitungan detik.
                </p>
                <button type="button" className="aw-hero__cta">
                  🚀 Mulai Project Baru
                </button>
              </section>

              <section className="aw-tools">
                <h2>Generator Konten</h2>
                <div className="aw-tools__grid">
                  {tools.map((tool) => (
                    <article className="aw-tool" key={tool.key}>
                      <span className={`aw-tool__icon aw-tool__icon--${tool.tone}`} aria-hidden="true">
                        {tool.key === "soal" ? (
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M6 3h9l3 3v15H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm8 1.5V7h2.5M8 11h8M8 15h8M8 19h5" />
                          </svg>
                        ) : tool.key === "rangkuman" ? (
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM4 5.5v16M8 7h8M8 11h8M8 15h5" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M5 3h10l4 4v14H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm9 1v4h4M7 12h10M7 16h7M8 8h1" />
                          </svg>
                        )}
                      </span>
                      <h3>{tool.title}</h3>
                      <p>{tool.desc}</p>
                      <span className="aw-tool__arrow">›</span>
                    </article>
                  ))}
                </div>
              </section>

              <section className="aw-upload">
                <span className="aw-upload__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 16V4M7 9l5-5 5 5M5 20h14" />
                  </svg>
                </span>
                <div className="aw-upload__body">
                  <h3>Upload Referensi Konteks</h3>
                  <p>Tambahkan PDF, Word, atau PPT kurikulum agar AI memberikan hasil yang presisi dan relevan.</p>
                </div>
                <button type="button" className="aw-upload__btn">
                  Pilih File
                </button>
              </section>
            </div>

            <aside className="aw-side">
              <section className="aw-chat">
                <div className="aw-chat__head">
                  <div>
                    <p className="aw-chat__title">EduBot Assistant</p>
                    <p className="aw-chat__status">
                      <i className="aw-chat__status-dot" /> ONLINE
                    </p>
                  </div>
                  <span>⋯</span>
                </div>
                <div className="aw-chat__body">
                  <div className="aw-bubble aw-bubble--ai">
                    Halo Ibu Rina! Saya siap membantu merancang aktivitas pembelajaran atau mendiskusikan metode
                    pedagogi yang tepat untuk materi hari ini.
                  </div>
                  <div className="aw-bubble aw-bubble--user">
                    Saya butuh ide pemantik (hook) yang menarik untuk materi Struktur Sel Biologi kelas XI.
                  </div>
                  <div className="aw-bubble aw-bubble--typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="aw-chat__input">
                  <button type="button" aria-label="Tambah lampiran">
                    +
                  </button>
                  <input type="text" placeholder="Ketik pesan..." />
                  <button type="button" className="aw-chat__send" aria-label="Kirim">
                    ➤
                  </button>
                </div>
                <p className="aw-chat__disclaimer">AI dapat membuat kesalahan. Periksa informasi penting.</p>
              </section>

              <section className="aw-tasks">
                <h3>Tasks Berjalan</h3>
                <div className="aw-task">
                  <span className="aw-task__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
                    </svg>
                  </span>
                  <div className="aw-task__body">
                    <div className="aw-task__top">
                      <span>Generating 50 Math Questions</span>
                      <span className="aw-task__pct">65%</span>
                    </div>
                    <div className="aw-task__track">
                      <div className="aw-task__fill" style={{ width: "65%" }} />
                    </div>
                  </div>
                </div>
              </section>

              <section className="aw-stats">
                <h3>Statistik Penggunaan AI</h3>
                <div className="aw-stats__grid">
                  <div className="aw-stats__tile aw-stats__tile--blue">
                    <p className="aw-stats__label">SOAL DIHASILKAN</p>
                    <p className="aw-stats__value">120</p>
                    <p className="aw-stats__trend">+12% bulan ini</p>
                  </div>
                  <div className="aw-stats__tile aw-stats__tile--purple">
                    <p className="aw-stats__label">RPP SELESAI</p>
                    <p className="aw-stats__value">15</p>
                    <p className="aw-stats__trend">+5% bulan ini</p>
                  </div>
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

export default AIWorkspace;
