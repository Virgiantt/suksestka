import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/BuatTryoutBaru.css";

function BuatTryoutBaru() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [method, setMethod] = useState<"ai" | "bank">("ai");
  const navigate = useNavigate();

  const handlePublish = () => {
    navigate("/manajemen-tryout", { state: { tryoutSuccess: true } });
  };

  return (
    <div className="teacher-dashboard buat-tryout">
      <TeacherSidebar active="Tryout" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content buat-tryout__content">
          <div className="bt-layout">
            <div className="bt-main">
              <section className="bt-card">
                <div className="bt-card__head">
                  <span className="bt-card__step bt-card__step--active">1</span>
                  <h2>Informasi Dasar</h2>
                </div>
                <div className="bt-field">
                  <label>Judul Tryout</label>
                  <input type="text" placeholder="Masukkan judul tryout (Misal: UTBK 2024 - SAINTEK Gelombang 1)" />
                </div>
                <div className="bt-row">
                  <div className="bt-field">
                    <label>Kategori</label>
                    <select defaultValue="">
                      <option value="" disabled>
                        Pilih Kategori
                      </option>
                      <option>UTBK</option>
                      <option>ASPD</option>
                      <option>Olimpiade</option>
                    </select>
                  </div>
                  <div className="bt-field">
                    <label>Tingkat Kelas</label>
                    <select defaultValue="">
                      <option value="" disabled>
                        Pilih Kelas
                      </option>
                      <option>SD</option>
                      <option>SMP</option>
                      <option>SMA</option>
                    </select>
                  </div>
                </div>
              </section>

              <section className="bt-card">
                <div className="bt-card__head">
                  <span className="bt-card__step">2</span>
                  <h2>Penyusunan Soal</h2>
                </div>
                <p className="bt-card__desc">Pilih metode penyusunan soal untuk tryout ini.</p>

                <div className="bt-options">
                  <button
                    type="button"
                    className={`bt-option${method === "ai" ? " bt-option--active" : ""}`}
                    onClick={() => setMethod("ai")}
                  >
                    <div className="bt-option__head">
                      <span className="bt-option__title">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 8L16.75 5.25L14 4L16.75 2.75L18 0L19.25 2.75L22 4L19.25 5.25L18 8ZM18 22L16.75 19.25L14 18L16.75 16.75L18 14L19.25 16.75L22 18L19.25 19.25L18 22ZM8 19L5.5 13.5L0 11L5.5 8.5L8 3L10.5 8.5L16 11L10.5 13.5L8 19Z" fill="#004AC6" />
                        </svg>
                        AI Auto-Generate
                      </span>
                      <span className={`bt-option__radio${method === "ai" ? " bt-option__radio--checked" : ""}`} />
                    </div>
                    <p>Sistem AI akan menyusun soal secara otomatis berdasarkan topik dan tingkat kesulitan yang seimbang.</p>
                  </button>

                  <button
                    type="button"
                    className={`bt-option${method === "bank" ? " bt-option--active" : ""}`}
                    onClick={() => setMethod("bank")}
                  >
                    <div className="bt-option__head">
                      <span className="bt-option__title">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.55 15.075L0 11.525L1.4 10.125L3.525 12.25L7.775 8L9.175 9.425L3.55 15.075ZM3.55 7.075L0 3.525L1.4 2.125L3.525 4.25L7.775 0L9.175 1.425L3.55 7.075ZM11 13.075V11.075H20V13.075H11ZM11 5.075V3.075H20V5.075H11Z" fill="#191C1E" />
                        </svg>
                        Pilih dari Bank Soal
                      </span>
                      <span className={`bt-option__radio${method === "bank" ? " bt-option__radio--checked" : ""}`} />
                    </div>
                    <p>Pilih soal secara manual dari koleksi Bank Soal atau upload soal baru.</p>
                  </button>
                </div>

                {method === "ai" ? (
                  <div className="bt-composition">
                    <h3>Pengaturan Komposisi AI</h3>
                    <div className="bt-composition__row">
                      <div className="bt-composition__head">
                        <span>Penalaran Umum (30 Soal)</span>
                        <span className="bt-composition__priority">High Priority</span>
                      </div>
                      <div className="bt-composition__track">
                        <div className="bt-composition__fill bt-composition__fill--full" />
                      </div>
                    </div>
                    <div className="bt-composition__row">
                      <div className="bt-composition__head">
                        <span>Pengetahuan Kuantitatif (20 Soal)</span>
                      </div>
                      <div className="bt-composition__track">
                        <div className="bt-composition__fill" style={{ width: "60%" }} />
                      </div>
                    </div>
                    <button type="button" className="bt-add-subtes">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 11.25H8.25V8.25H11.25V6.75H8.25V3.75H6.75V6.75H3.75V8.25H6.75V11.25Z" fill="#004AC6" />
                      </svg>
                      Tambah Sub-tes
                    </button>
                  </div>
                ) : null}
              </section>

              <section className="bt-card">
                <div className="bt-card__head">
                  <span className="bt-card__step">3</span>
                  <h2>Jadwal & Pelaksanaan</h2>
                </div>
                <div className="bt-row">
                  <div className="bt-field">
                    <label>Tanggal Pelaksanaan</label>
                    <input type="date" />
                  </div>
                  <div className="bt-field">
                    <label>Waktu Mulai</label>
                    <input type="time" />
                  </div>
                  <div className="bt-field">
                    <label>Waktu Selesai</label>
                    <input type="time" />
                  </div>
                </div>
                <div className="bt-row">
                  <div className="bt-field">
                    <label>Durasi Pengerjaan (Menit)</label>
                    <input type="number" defaultValue={120} />
                  </div>
                  <div className="bt-field">
                    <label>Target Passing Grade (%)</label>
                    <input type="number" defaultValue={65} />
                  </div>
                </div>
              </section>
            </div>

            <aside className="bt-aside">
              <button type="button" className="bt-publish" onClick={handlePublish}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 16V7.85L4.4 10.45L3 9L8 4L13 9L11.6 10.45L9 7.85V16H7ZM0 5V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V5H14V2H2V5H0Z" fill="white" />
                </svg>
                Publikasikan Tryout
              </button>
              <div className="bt-aside__buttons">
                <button type="button" className="bt-secondary-btn">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 4V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14L18 4Z" fill="#004AC6" />
                  </svg>
                  Simpan Draft
                </button>
                <button type="button" className="bt-secondary-btn">
                  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15Z" fill="#191C1E" />
                  </svg>
                  Pratinjau
                </button>
              </div>

              <section className="bt-ai-assistant">
                <div className="bt-ai-assistant__head">
                  <span className="bt-ai-assistant__icon">
                    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 21V15.1667C0 14.525 0.228472 13.9757 0.685417 13.5188C1.14236 13.0618 1.69167 12.8333 2.33333 12.8333H16.3333C16.975 12.8333 17.5243 13.0618 17.9813 13.5188C18.4382 13.9757 18.6667 14.525 18.6667 15.1667V21H0Z" fill="white" />
                    </svg>
                  </span>
                  <div>
                    <h3>Asisten Pembuat Tryout</h3>
                    <p>AI Insights</p>
                  </div>
                </div>

                <div className="bt-insight">
                  <p className="bt-insight__title bt-insight__title--amber">Estimasi Tingkat Kesulitan</p>
                  <p className="bt-insight__big">Sedang-Sulit</p>
                  <p className="bt-insight__desc">
                    Komposisi soal saat ini condong menantang, cocok untuk simulasi UTBK riil. Tingkat HOTS
                    mencapai 45%.
                  </p>
                </div>

                <div className="bt-insight">
                  <p className="bt-insight__title bt-insight__title--green">Distribusi Topik</p>
                  <p className="bt-insight__desc">Topik sangat seimbang (Excellent).</p>
                  <div className="bt-insight__pills">
                    <span className="bt-insight__pill bt-insight__pill--green">Aljabar 30%</span>
                    <span className="bt-insight__pill bt-insight__pill--blue">Geometri 25%</span>
                    <span className="bt-insight__pill bt-insight__pill--purple">Statistika 45%</span>
                  </div>
                </div>

                <div className="bt-insight">
                  <p className="bt-insight__title bt-insight__title--blue">Estimasi Waktu Pengerjaan</p>
                  <div className="bt-insight__time-row">
                    <span className="bt-insight__big">115</span>
                    <span>Menit</span>
                  </div>
                  <p className="bt-insight__desc">
                    Sangat ideal. Mendekati durasi yang ditetapkan (120 menit). Siswa memiliki waktu buffer 5
                    menit.
                  </p>
                </div>

                <button type="button" className="bt-regenerate">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12C4.325 12 2.90625 11.4188 1.74375 10.2563C0.58125 9.09375 0 7.675 0 6C0 4.325 0.58125 2.90625 1.74375 1.74375C2.90625 0.58125 4.325 0 6 0C6.8625 0 7.6875 0.178125 8.475 0.534375C9.2625 0.890625 9.9375 1.4 10.5 2.0625V0H12V5.25H6.75V3.75H9.9C9.5 3.05 8.95312 2.5 8.25937 2.1C7.56562 1.7 6.8125 1.5 6 1.5C4.75 1.5 3.6875 1.9375 2.8125 2.8125C1.9375 3.6875 1.5 4.75 1.5 6C1.5 7.25 1.9375 8.3125 2.8125 9.1875C3.6875 10.0625 4.75 10.5 6 10.5C6.9625 10.5 7.83125 10.225 8.60625 9.675C9.38125 9.125 9.925 8.4 10.2375 7.5H11.8125C11.4625 8.825 10.75 9.90625 9.675 10.7437C8.6 11.5812 7.375 12 6 12Z" fill="#6A1EDB" />
                  </svg>
                  Regenerate Insights
                </button>

                <div className="bt-tips">
                  <h4>Tips Optimasi Tryout</h4>
                  <ul>
                    <li>Gunakan AI untuk variasi soal HOTS</li>
                    <li>Pastikan passing grade realistis (60-75%)</li>
                    <li>Berikan waktu istirahat antar sub-tes</li>
                  </ul>
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

export default BuatTryoutBaru;
