import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/BuatPengumuman.css";

const aiSuggestions = [
  { key: "clarity", label: "Rewrite for Clarity", tone: "blue" as const },
  { key: "encourage", label: "Make it More Encouraging", tone: "amber" as const },
  { key: "grammar", label: "Check Grammar & Tone", tone: "green" as const },
];

function BuatPengumuman() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="teacher-dashboard buat-pengumuman">
      <TeacherSidebar active="Pengumuman" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content buat-pengumuman__content">
          <header className="bp-header">
            <h1>Kirim Pengumuman Baru</h1>
            <p>Buat dan jadwalkan pengumuman untuk siswa.</p>
          </header>

          <div className="bp-layout">
            <section className="bp-form">
              <div className="bp-field">
                <label htmlFor="bp-title">Judul Pengumuman</label>
                <input id="bp-title" type="text" placeholder="Misal: Perubahan Jadwal Tryout Nasional" />
              </div>

              <div className="bp-row">
                <div className="bp-field">
                  <label htmlFor="bp-kategori">Kategori</label>
                  <select id="bp-kategori" defaultValue="Semua">
                    <option>Semua</option>
                    <option>Kurikulum</option>
                    <option>Sistem</option>
                    <option>Event</option>
                    <option>Personal</option>
                  </select>
                </div>
                <div className="bp-field">
                  <label htmlFor="bp-target">Target Penerima</label>
                  <select id="bp-target" defaultValue="Semua Siswa">
                    <option>Semua Siswa</option>
                    <option>SD</option>
                    <option>SMP</option>
                    <option>SMA</option>
                  </select>
                </div>
              </div>

              <div className="bp-field">
                <label>Pesan Pengumuman</label>
                <div className="bp-editor">
                  <div className="bp-editor__toolbar">
                    <button type="button" aria-label="Bold">
                      B
                    </button>
                    <button type="button" aria-label="Italic">
                      I
                    </button>
                    <button type="button" aria-label="Underline">
                      U
                    </button>
                    <span className="bp-editor__divider" />
                    <button type="button" aria-label="Bullet list">
                      ≡
                    </button>
                    <button type="button" aria-label="Numbered list">
                      #
                    </button>
                    <span className="bp-editor__divider" />
                    <button type="button" aria-label="Link">
                      🔗
                    </button>
                    <button type="button" aria-label="Image">
                      🖼
                    </button>
                  </div>
                  <textarea placeholder="Tuliskan detail pengumuman di sini..." rows={6} />
                </div>
              </div>

              <div className="bp-field">
                <label>Lampiran (Opsional)</label>
                <div className="bp-dropzone">
                  <span className="bp-dropzone__icon" />
                  <p className="bp-dropzone__title">Klik untuk upload atau drag &amp; drop file</p>
                  <p className="bp-dropzone__hint">PDF, JPG, PNG, atau DOCX (Max 10MB)</p>
                </div>
              </div>

              <div className="bp-actions">
                <button type="button" className="bp-btn bp-btn--outline">
                  Simpan sebagai Draf
                </button>
                <button
                  type="button"
                  className="bp-btn bp-btn--primary"
                  onClick={() => navigate("/pengumuman", { state: { announcementSent: true } })}
                >
                  <svg width="15" height="12" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 13.3333V0L15.8333 6.66667L0 13.3333ZM1.66667 10.8333L11.5417 6.66667L1.66667 2.5V5.41667L6.66667 6.66667L1.66667 7.91667V10.8333Z"
                      fill="white"
                    />
                  </svg>
                  Kirim Pengumuman
                </button>
              </div>
            </section>

            <aside className="bp-aside">
              <section className="bp-ai">
                <div className="bp-ai__head">
                  <span className="bp-ai__avatar" />
                  <div>
                    <p className="bp-ai__name">EduAI Assistant</p>
                    <p className="bp-ai__sub">Siap membantu menulis</p>
                  </div>
                </div>
                <p className="bp-ai__desc">
                  Butuh bantuan menyempurnakan pengumuman Anda? Pilih salah satu opsi di bawah ini:
                </p>
                <div className="bp-ai__list">
                  {aiSuggestions.map((s) => (
                    <button type="button" className="bp-ai__btn" key={s.key}>
                      <span className={`bp-ai__btn-icon bp-ai__btn-icon--${s.tone}`} />
                      {s.label}
                    </button>
                  ))}
                </div>
              </section>

              <section className="bp-preview">
                <div className="bp-preview__head">
                  <h3>Preview Siswa</h3>
                  <span>👁</span>
                </div>
                <div className="bp-preview__mock">
                  <div className="bp-preview__top">
                    <span className="bp2-pill">KURIKULUM</span>
                    <span>Baru saja</span>
                  </div>
                  <h4>Perubahan Jadwal Tryout Nasional</h4>
                  <p>Halo Semuanya! Mengingat adanya libur nasional minggu depan, jadwal Tryout Berseri 4…</p>
                  <div className="bp-preview__footer">
                    <span className="bp-preview__avatar" />
                    <span>Bu Rina</span>
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

export default BuatPengumuman;
