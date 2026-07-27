import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/EditTryout.css";

const subtests = [
  { key: "bindo", letter: "L", color: "blue", title: "Literasi Bahasa Indonesia", meta: "30 Soal • Bank Soal ASPD 2024", jumlahSoal: 30, bobot: 25, passingGrade: 60 },
  { key: "matematika", letter: "M", color: "purple", title: "Literasi Matematika", meta: "25 Soal • Bank Soal ASPD 2024", jumlahSoal: 25, bobot: 35, passingGrade: 55 },
];

function EditTryout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const totalSoal = subtests.reduce((sum, item) => sum + item.jumlahSoal, 0);
  const totalBobot = subtests.reduce((sum, item) => sum + item.bobot, 0);

  return (
    <div className="teacher-dashboard edit-tryout">
      <TeacherSidebar active="Tryout" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content edit-tryout__content">
          <header className="et-header">
            <div>
              <h1>Edit Simulasi ASPD Tahap 2</h1>
              <p>Sesuaikan detail, komposisi soal, dan pengaturan teknis tryout.</p>
            </div>
            <div className="et-header__actions">
              <button type="button" className="et-btn et-btn--outline" onClick={() => navigate(-1)}>
                Batal
              </button>
              <button
                type="button"
                className="et-btn et-btn--primary"
                onClick={() => navigate("/manajemen-tryout", { state: { tryoutUpdated: true } })}
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 2.33333V9.33333C10.5 9.65417 10.3858 9.92882 10.1573 10.1573C9.92882 10.3858 9.65417 10.5 9.33333 10.5H1.16667C0.845833 10.5 0.571181 10.3858 0.342708 10.1573C0.114236 9.92882 0 9.65417 0 9.33333V1.16667C0 0.845833 0.114236 0.571181 0.342708 0.342708C0.571181 0.114236 0.845833 0 1.16667 0H8.16667L10.5 2.33333Z" fill="white" />
                </svg>
                Simpan Perubahan
              </button>
            </div>
          </header>

          <div className="et-layout">
            <div className="et-column">
              <section className="et-card">
                <h2>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7Z" fill="#004AC6" />
                  </svg>
                  Informasi Dasar
                </h2>
                <div className="et-field">
                  <label>Judul Tryout</label>
                  <input type="text" defaultValue="Simulasi ASPD Tahap 2" />
                </div>
                <div className="et-field">
                  <label>Kategori</label>
                  <select defaultValue="ASPD DIY">
                    <option>ASPD DIY</option>
                    <option>ASPD Nasional</option>
                  </select>
                </div>
                <div className="et-row">
                  <div className="et-field">
                    <label>Tanggal Mulai</label>
                    <input type="date" defaultValue="2024-03-15" />
                  </div>
                  <div className="et-field">
                    <label>Waktu</label>
                    <input type="time" defaultValue="08:00" />
                  </div>
                </div>
              </section>

              <section className="et-card">
                <h2>
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.3 20L6.9 16.8C6.68333 16.7167 6.47917 16.6167 6.2875 16.5C6.09583 16.3833 5.90833 16.2583 5.725 16.125L2.75 17.375L0 12.625L2.575 10.675C2.55833 10.5583 2.55 10.4458 2.55 10.3375C2.55 10.2292 2.55 10.1167 2.55 10C2.55 9.88333 2.55 9.77083 2.55 9.6625C2.55 9.55417 2.55833 9.44167 2.575 9.325L0 7.375L2.75 2.625L5.725 3.875C5.90833 3.74167 6.1 3.61667 6.3 3.5C6.5 3.38333 6.7 3.28333 6.9 3.2L7.3 0H12.8L13.2 3.2C13.4167 3.28333 13.6208 3.38333 13.8125 3.5C14.0042 3.61667 14.1917 3.74167 14.375 3.875L17.35 2.625L20.1 7.375L17.525 9.325C17.5417 9.44167 17.55 9.55417 17.55 9.6625C17.55 9.77083 17.55 9.88333 17.55 10C17.55 10.1167 17.55 10.2292 17.55 10.3375C17.55 10.4458 17.5333 10.5583 17.5 10.675L20.075 12.625L17.325 17.375L14.375 16.125C14.1917 16.2583 14 16.3833 13.8 16.5C13.6 16.6167 13.4 16.7167 13.2 16.8L12.8 20H7.3Z" fill="#F59E0B" />
                  </svg>
                  Pengaturan Teknis
                </h2>
                <div className="et-field">
                  <label>Durasi Pengerjaan (Menit)</label>
                  <input type="number" defaultValue={120} />
                </div>
                <div className="et-field">
                  <label>Passing Grade Total (%)</label>
                  <input type="number" defaultValue={65} />
                </div>
                <div className="et-toggle-row">
                  <div>
                    <p className="et-toggle-row__title">Acak Soal</p>
                    <p className="et-toggle-row__desc">Urutan soal berbeda tiap siswa</p>
                  </div>
                  <label className="et-switch">
                    <input type="checkbox" defaultChecked />
                    <span />
                  </label>
                </div>
              </section>
            </div>

            <section className="et-card et-composition">
              <div className="et-composition__head">
                <h2>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2Z" fill="#FED01B" />
                  </svg>
                  Komposisi Subtes
                </h2>
                <button type="button" className="et-add-subtes">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 4.66667H0V3.5H3.5V0H4.66667V3.5H8.16667V4.66667H4.66667V8.16667H3.5V4.66667Z" fill="#004AC6" />
                  </svg>
                  Tambah Subtes
                </button>
              </div>

              <div className="et-subtest-list">
                {subtests.map((item) => (
                  <div className="et-subtest" key={item.key}>
                    <div className="et-subtest__head">
                      <div className="et-subtest__title">
                        <span className={`et-subtest__badge et-subtest__badge--${item.color}`}>{item.letter}</span>
                        <div>
                          <p className="et-subtest__name">{item.title}</p>
                          <p className="et-subtest__meta">{item.meta}</p>
                        </div>
                      </div>
                    </div>
                    <div className="et-subtest__fields">
                      <div className="et-subtest__field">
                        <label>Jml Soal</label>
                        <input type="number" defaultValue={item.jumlahSoal} />
                      </div>
                      <div className="et-subtest__field">
                        <label>Bobot (%)</label>
                        <input type="number" defaultValue={item.bobot} />
                      </div>
                      <div className="et-subtest__field">
                        <label>Passing Grade</label>
                        <input type="number" defaultValue={item.passingGrade} />
                      </div>
                      <button type="button" className="et-subtest__pilih">
                        Pilih Soal Khusus
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="et-composition__footer">
                <span>
                  Total Soal: <strong>{totalSoal}</strong>
                </span>
                <span>
                  Total Bobot: <strong className="et-composition__footer-green">{totalBobot}%</strong> (Sisa {100 - totalBobot}%)
                </span>
              </div>
            </section>
          </div>
        </div>

        <TeacherFooter />
      </div>
    </div>
  );
}

export default EditTryout;
