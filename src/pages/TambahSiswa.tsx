import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/TambahSiswa.css";

function TambahSiswa() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="teacher-dashboard tambah-siswa">
      <TeacherSidebar active="Siswa" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="teacher-dashboard__content tambah-siswa__content">
          <div className="ts-layout">
            <div className="ts-main">
              <section className="ts-card">
                <h2>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0Z"
                      fill="#004AC6"
                    />
                  </svg>
                  Informasi Dasar
                </h2>
                <div className="ts-row">
                  <div className="ts-field">
                    <label htmlFor="ts-name">Nama Lengkap</label>
                    <input id="ts-name" type="text" placeholder="Masukkan nama lengkap siswa" />
                  </div>
                  <div className="ts-field">
                    <label htmlFor="ts-tingkat">Tingkat Sekolah</label>
                    <select id="ts-tingkat" defaultValue="">
                      <option value="" disabled>Pilih Tingkat</option>
                      <option>SD</option>
                      <option>SMP</option>
                      <option>SMA</option>
                    </select>
                  </div>
                </div>
                <div className="ts-row">
                  <div className="ts-field">
                    <label htmlFor="ts-nisn">NISN / ID Siswa</label>
                    <input id="ts-nisn" type="text" placeholder="Contoh: 0012345678" />
                  </div>
                  <div className="ts-field">
                    <label htmlFor="ts-kelas">Kelas Tujuan</label>
                    <select id="ts-kelas" defaultValue="">
                      <option value="" disabled>Pilih Kelas</option>
                      <option>Kelas 6</option>
                      <option>Kelas 9</option>
                      <option>Kelas 12</option>
                    </select>
                  </div>
                </div>
              </section>

              <section className="ts-card">
                <h2>
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 8H21V3H14V8ZM17.5 6.75L15 5V4L17.5 5.75L20 4V5L17.5 6.75ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H22C22.55 0 23.0208 0.195833 23.4125 0.5875C23.8042 0.979167 24 1.45 24 2V16C24 16.55 23.8042 17.0208 23.4125 17.4125C23.0208 17.8042 22.55 18 22 18H2ZM9 11C9.83333 11 10.5417 10.7083 11.125 10.125C11.7083 9.54167 12 8.83333 12 8C12 7.16667 11.7083 6.45833 11.125 5.875C10.5417 5.29167 9.83333 5 9 5C8.16667 5 7.45833 5.29167 6.875 5.875C6.29167 6.45833 6 7.16667 6 8C6 8.83333 6.29167 9.54167 6.875 10.125C7.45833 10.7083 8.16667 11 9 11ZM2.1 16H15.9C15.2 14.75 14.2333 13.7708 13 13.0625C11.7667 12.3542 10.4333 12 9 12C7.56667 12 6.23333 12.3542 5 13.0625C3.76667 13.7708 2.8 14.75 2.1 16Z"
                      fill="#004AC6"
                    />
                  </svg>
                  Kontak &amp; Akses
                </h2>
                <div className="ts-row">
                  <div className="ts-field">
                    <label htmlFor="ts-email">Email Siswa</label>
                    <input id="ts-email" type="email" placeholder="siswa@email.com" />
                  </div>
                  <div className="ts-field">
                    <label htmlFor="ts-phone">No. HP Orang Tua</label>
                    <input id="ts-phone" type="tel" placeholder="0812-XXXX-XXXX" />
                  </div>
                </div>
                <div className="ts-credentials">
                  <h3>Kredensial Login Otomatis</h3>
                  <div className="ts-row">
                    <div className="ts-field">
                      <label>Username (Dihasilkan)</label>
                      <input type="text" value="nisn_siswa" readOnly />
                    </div>
                    <div className="ts-field">
                      <label>Password Sementara</label>
                      <input type="text" value="TKA2024!pwd" readOnly />
                    </div>
                  </div>
                  <p className="ts-credentials__note">* Password wajib diganti saat siswa login pertama kali.</p>
                </div>
              </section>

              <div className="ts-actions">
                <button type="button" className="ts-btn ts-btn--outline" onClick={() => navigate(-1)}>
                  Batalkan
                </button>
                <button type="button" className="ts-btn ts-btn--secondary">
                  Simpan &amp; Tambah Lagi
                </button>
                <button type="button" className="ts-btn ts-btn--primary" onClick={() => navigate("/manajemen-siswa")}>
                  Simpan &amp; Selesai
                </button>
              </div>
            </div>

            <aside className="ts-sidebar">
              <section className="ts-bulk-card">
                <span className="ts-bulk-card__icon" aria-hidden="true">
                  <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17H9V12.825L10.6 14.425L12 13L8 9L4 13L5.425 14.4L7 12.825V17ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 7H14L9 2V7Z"
                      fill="#004AC6"
                    />
                  </svg>
                </span>
                <h3>Bulk Import</h3>
                <p>Tambahkan banyak siswa sekaligus menggunakan template Excel atau CSV.</p>
                <button type="button" className="ts-link-btn">Unggah File</button>
              </section>

              <section className="ts-ai-card">
                <div className="ts-ai-card__inner">
                  <div className="ts-ai-card__head">
                    <span className="ts-ai-card__icon">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 9.75H7.5L7.6125 8.8125C7.7125 8.775 7.80312 8.73125 7.88438 8.68125C7.96563 8.63125 8.0375 8.575 8.1 8.5125L8.9625 8.8875L9.7125 7.6125L8.9625 7.05C8.9875 6.95 9 6.85 9 6.75C9 6.65 8.9875 6.55 8.9625 6.45L9.7125 5.8875L8.9625 4.6125L8.1 4.9875C8.0375 4.925 7.96563 4.86875 7.88438 4.81875C7.80312 4.76875 7.7125 4.725 7.6125 4.6875L7.5 3.75H6L5.8875 4.6875C5.7875 4.725 5.69688 4.76875 5.61562 4.81875C5.53437 4.86875 5.4625 4.925 5.4 4.9875L4.5375 4.6125L3.7875 5.8875L4.5375 6.45C4.5125 6.55 4.5 6.65 4.5 6.75C4.5 6.85 4.5125 6.95 4.5375 7.05L3.7875 7.6125L4.5375 8.8875L5.4 8.5125C5.4625 8.575 5.53437 8.63125 5.61562 8.68125C5.69688 8.73125 5.7875 8.775 5.8875 8.8125L6 9.75ZM6.75 7.875C6.4375 7.875 6.17188 7.76562 5.95312 7.54688C5.73438 7.32812 5.625 7.0625 5.625 6.75C5.625 6.4375 5.73438 6.17188 5.95312 5.95312C6.17188 5.73438 6.4375 5.625 6.75 5.625C7.0625 5.625 7.32812 5.73438 7.54688 5.95312C7.76562 6.17188 7.875 6.4375 7.875 6.75C7.875 7.0625 7.76562 7.32812 7.54688 7.54688C7.32812 7.76562 7.0625 7.875 6.75 7.875ZM2.25 15V11.775C1.5375 11.125 0.984375 10.3656 0.590625 9.49687C0.196875 8.62813 0 7.7125 0 6.75C0 4.875 0.65625 3.28125 1.96875 1.96875C3.28125 0.65625 4.875 0 6.75 0C8.3125 0 9.69687 0.459375 10.9031 1.37812C12.1094 2.29688 12.8938 3.49375 13.2563 4.96875L14.2312 8.8125C14.2937 9.05 14.25 9.26562 14.1 9.45938C13.95 9.65313 13.75 9.75 13.5 9.75H12V12C12 12.4125 11.8531 12.7656 11.5594 13.0594C11.2656 13.3531 10.9125 13.5 10.5 13.5H9V15H2.25Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span>AI SMART PLACEMENT</span>
                  </div>
                  <p>
                    Sistem AI kami akan merekomendasikan kelompok belajar terbaik berdasarkan nilai diagnostik awal
                    siswa.
                  </p>
                  <button type="button" className="ts-ai-card__btn">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.5 4.66667L9.77083 3.0625L8.16667 2.33333L9.77083 1.60417L10.5 0L11.2292 1.60417L12.8333 2.33333L11.2292 3.0625L10.5 4.66667ZM10.5 12.8333L9.77083 11.2292L8.16667 10.5L9.77083 9.77083L10.5 8.16667L11.2292 9.77083L12.8333 10.5L11.2292 11.2292L10.5 12.8333ZM4.66667 11.0833L3.20833 7.875L0 6.41667L3.20833 4.95833L4.66667 1.75L6.125 4.95833L9.33333 6.41667L6.125 7.875L4.66667 11.0833ZM4.66667 8.25417L5.25 7L6.50417 6.41667L5.25 5.83333L4.66667 4.57917L4.08333 5.83333L2.82917 6.41667L4.08333 7L4.66667 8.25417Z"
                        fill="#6A1EDB"
                      />
                    </svg>
                    Jalankan Analisis AI
                  </button>
                </div>
              </section>

              <section className="ts-tips-card">
                <h2>
                  <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.5 20C6.95 20 6.47917 19.8042 6.0875 19.4125C5.69583 19.0208 5.5 18.55 5.5 18H9.5C9.5 18.55 9.30417 19.0208 8.9125 19.4125C8.52083 19.8042 8.05 20 7.5 20ZM3.5 17V15H11.5V17H3.5ZM3.75 14C2.6 13.3167 1.6875 12.4 1.0125 11.25C0.3375 10.1 0 8.85 0 7.5C0 5.41667 0.729167 3.64583 2.1875 2.1875C3.64583 0.729167 5.41667 0 7.5 0C9.58333 0 11.3542 0.729167 12.8125 2.1875C14.2708 3.64583 15 5.41667 15 7.5C15 8.85 14.6625 10.1 13.9875 11.25C13.3125 12.4 12.4 13.3167 11.25 14H3.75ZM4.35 12H10.65C11.4 11.4667 11.9792 10.8083 12.3875 10.025C12.7958 9.24167 13 8.4 13 7.5C13 5.96667 12.4667 4.66667 11.4 3.6C10.3333 2.53333 9.03333 2 7.5 2C5.96667 2 4.66667 2.53333 3.6 3.6C2.53333 4.66667 2 5.96667 2 7.5C2 8.4 2.20417 9.24167 2.6125 10.025C3.02083 10.8083 3.6 11.4667 4.35 12Z"
                      fill="#004AC6"
                    />
                  </svg>
                  Panduan &amp; Tips
                </h2>
                <ul className="ts-tips">
                  <li>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.45 10.95L11.7375 5.6625L10.6875 4.6125L6.45 8.85L4.3125 6.7125L3.2625 7.7625L6.45 10.95ZM7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15ZM7.5 13.5C9.175 13.5 10.5938 12.9188 11.7563 11.7563C12.9188 10.5938 13.5 9.175 13.5 7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5Z"
                        fill="#10B981"
                      />
                    </svg>
                    Gunakan NISN yang valid untuk sinkronisasi data otomatis.
                  </li>
                  <li>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.45 10.95L11.7375 5.6625L10.6875 4.6125L6.45 8.85L4.3125 6.7125L3.2625 7.7625L6.45 10.95ZM7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15ZM7.5 13.5C9.175 13.5 10.5938 12.9188 11.7563 11.7563C12.9188 10.5938 13.5 9.175 13.5 7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5Z"
                        fill="#10B981"
                      />
                    </svg>
                    Pastikan email aktif untuk pengiriman kredensial login.
                  </li>
                  <li>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.75 11.25H8.25V6.75H6.75V11.25ZM7.5 5.25C7.7125 5.25 7.89062 5.17813 8.03438 5.03438C8.17813 4.89062 8.25 4.7125 8.25 4.5C8.25 4.2875 8.17813 4.10938 8.03438 3.96563C7.89062 3.82188 7.7125 3.75 7.5 3.75C7.2875 3.75 7.10938 3.82188 6.96562 3.96563C6.82187 4.10938 6.75 4.2875 6.75 4.5C6.75 4.7125 6.82187 4.89062 6.96562 5.03438C7.10938 5.17813 7.2875 5.25 7.5 5.25ZM7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15ZM7.5 13.5C9.175 13.5 10.5938 12.9188 11.7563 11.7563C12.9188 10.5938 13.5 9.175 13.5 7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5Z"
                        fill="#004AC6"
                      />
                    </svg>
                    Gunakan Bulk Import jika mendaftarkan lebih dari 10 siswa sekaligus.
                  </li>
                </ul>
                <a href="#docs" className="ts-doc-link">
                  Lihat Dokumentasi Lengkap
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.16667 10.5C0.845833 10.5 0.571181 10.3858 0.342708 10.1573C0.114236 9.92882 0 9.65417 0 9.33333V1.16667C0 0.845833 0.114236 0.571181 0.342708 0.342708C0.571181 0.114236 0.845833 0 1.16667 0H5.25V1.16667H1.16667V9.33333H9.33333V5.25H10.5V9.33333C10.5 9.65417 10.3858 9.92882 10.1573 10.1573C9.92882 10.3858 9.65417 10.5 9.33333 10.5H1.16667ZM3.90833 7.40833L3.09167 6.59167L8.51667 1.16667H6.41667V0H10.5V4.08333H9.33333V1.98333L3.90833 7.40833Z"
                      fill="#004AC6"
                    />
                  </svg>
                </a>
              </section>
            </aside>
          </div>
        </main>

        <TeacherFooter />
      </div>
    </div>
  );
}

export default TambahSiswa;
