import { useState } from "react";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/TambahMateri.css";

function TambahMateri() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [publishNow, setPublishNow] = useState(true);

  return (
    <div className="teacher-dashboard tambah-materi">
      <TeacherSidebar active="Materi" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content tambah-materi__content">
          <header className="tambah-materi__header">
            <h1>Tambah Materi Baru</h1>
            <p>Buat dan publikasikan modul pembelajaran interaktif untuk siswa.</p>
          </header>

          <div className="tambah-materi__grid">
            <section className="tambah-materi__form">
              <div className="tambah-materi__field">
                <label htmlFor="judul-materi">Judul Materi</label>
                <input id="judul-materi" type="text" placeholder="e.g., Bab 5: Ekosistem Terpadu" />
              </div>

              <div className="tambah-materi__row">
                <div className="tambah-materi__field">
                  <label htmlFor="mata-pelajaran">Mata Pelajaran</label>
                  <div className="tambah-materi__select">
                    <select id="mata-pelajaran" defaultValue="">
                      <option value="" disabled>
                        Pilih Mata Pelajaran...
                      </option>
                      <option value="matematika">Matematika</option>
                      <option value="ipa">IPA</option>
                      <option value="biologi">Biologi</option>
                      <option value="fisika">Fisika</option>
                      <option value="sejarah">Sejarah</option>
                    </select>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill="#434655" />
                    </svg>
                  </div>
                </div>

                <div className="tambah-materi__field">
                  <label htmlFor="tingkat-kelas">Tingkat Kelas</label>
                  <div className="tambah-materi__select">
                    <select id="tingkat-kelas" defaultValue="">
                      <option value="" disabled>
                        Pilih Tingkat...
                      </option>
                      <option value="sd">SD</option>
                      <option value="smp">SMP</option>
                      <option value="sma">SMA</option>
                    </select>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill="#434655" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="tambah-materi__field">
                <label htmlFor="deskripsi-materi">Deskripsi Materi</label>
                <div className="tambah-materi__editor">
                  <div className="tambah-materi__editor-toolbar">
                    <button type="button" aria-label="Bold">
                      <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10.5V0H4.14375C4.95625 0 5.70625 0.25 6.39375 0.75C7.08125 1.25 7.425 1.94375 7.425 2.83125C7.425 3.46875 7.28125 3.95937 6.99375 4.30312C6.70625 4.64687 6.4375 4.89375 6.1875 5.04375C6.5 5.18125 6.84688 5.4375 7.22813 5.8125C7.60938 6.1875 7.8 6.75 7.8 7.5C7.8 8.6125 7.39375 9.39062 6.58125 9.83438C5.76875 10.2781 5.00625 10.5 4.29375 10.5H0ZM2.26875 8.4H4.21875C4.81875 8.4 5.18438 8.24687 5.31563 7.94063C5.44688 7.63438 5.5125 7.4125 5.5125 7.275C5.5125 7.1375 5.44688 6.91563 5.31563 6.60938C5.18438 6.30312 4.8 6.15 4.1625 6.15H2.26875V8.4ZM2.26875 4.125H4.0125C4.425 4.125 4.725 4.01875 4.9125 3.80625C5.1 3.59375 5.19375 3.35625 5.19375 3.09375C5.19375 2.79375 5.0875 2.55 4.875 2.3625C4.6625 2.175 4.3875 2.08125 4.05 2.08125H2.26875V4.125Z" fill="#434655" />
                      </svg>
                    </button>
                    <button type="button" aria-label="Italic">
                      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10.5V8.625H3L5.25 1.875H2.25V0H9.75V1.875H7.125L4.875 8.625H7.5V10.5H0Z" fill="#434655" />
                      </svg>
                    </button>
                    <button type="button" aria-label="Underline">
                      <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.5V12H10.5V13.5H0ZM5.25 10.5C3.9875 10.5 3.00625 10.1063 2.30625 9.31875C1.60625 8.53125 1.25625 7.4875 1.25625 6.1875V0H3.1875V6.3C3.1875 7 3.3625 7.56875 3.7125 8.00625C4.0625 8.44375 4.575 8.6625 5.25 8.6625C5.925 8.6625 6.4375 8.44375 6.7875 8.00625C7.1375 7.56875 7.3125 7 7.3125 6.3V0H9.24375V6.1875C9.24375 7.4875 8.89375 8.53125 8.19375 9.31875C7.49375 10.1063 6.5125 10.5 5.25 10.5Z" fill="#434655" />
                      </svg>
                    </button>
                    <span className="tambah-materi__editor-divider" />
                    <button type="button" aria-label="Bullet list">
                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 11.25V9.75H13.5V11.25H4.5ZM4.5 6.75V5.25H13.5V6.75H4.5ZM4.5 2.25V0.75H13.5V2.25H4.5ZM1.5 12C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5C0 10.0875 0.146875 9.73438 0.440625 9.44063C0.734375 9.14688 1.0875 9 1.5 9C1.9125 9 2.26562 9.14688 2.55938 9.44063C2.85313 9.73438 3 10.0875 3 10.5C3 10.9125 2.85313 11.2656 2.55938 11.5594C2.26562 11.8531 1.9125 12 1.5 12ZM1.5 7.5C1.0875 7.5 0.734375 7.35312 0.440625 7.05937C0.146875 6.76562 0 6.4125 0 6C0 5.5875 0.146875 5.23438 0.440625 4.94063C0.734375 4.64688 1.0875 4.5 1.5 4.5C1.9125 4.5 2.26562 4.64688 2.55938 4.94063C2.85313 5.23438 3 5.5875 3 6C3 6.4125 2.85313 6.76562 2.55938 7.05937C2.26562 7.35312 1.9125 7.5 1.5 7.5ZM1.5 3C1.0875 3 0.734375 2.85313 0.440625 2.55938C0.146875 2.26562 0 1.9125 0 1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0C1.9125 0 2.26562 0.146875 2.55938 0.440625C2.85313 0.734375 3 1.0875 3 1.5C3 1.9125 2.85313 2.26562 2.55938 2.55938C2.26562 2.85313 1.9125 3 1.5 3Z" fill="#434655" />
                      </svg>
                    </button>
                    <button type="button" aria-label="Numbered list">
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 15V13.875H1.875V13.3125H0.75V12.1875H1.875V11.625H0V10.5H2.25C2.4625 10.5 2.64062 10.5719 2.78437 10.7156C2.92812 10.8594 3 11.0375 3 11.25V12C3 12.2125 2.92812 12.3906 2.78437 12.5344C2.64062 12.6781 2.4625 12.75 2.25 12.75C2.4625 12.75 2.64062 12.8219 2.78437 12.9656C2.92812 13.1094 3 13.2875 3 13.5V14.25C3 14.4625 2.92812 14.6406 2.78437 14.7844C2.64062 14.9281 2.4625 15 2.25 15H0ZM0 9.75V7.6875C0 7.475 0.071875 7.29688 0.215625 7.15312C0.359375 7.00937 0.5375 6.9375 0.75 6.9375H1.875V6.375H0V5.25H2.25C2.4625 5.25 2.64062 5.32187 2.78437 5.46562C2.92812 5.60938 3 5.7875 3 6V7.3125C3 7.525 2.92812 7.70312 2.78437 7.84688C2.64062 7.99063 2.4625 8.0625 2.25 8.0625H1.125V8.625H3V9.75H0ZM1.125 4.5V1.125H0V0H2.25V4.5H1.125ZM4.5 12.75V11.25H13.5V12.75H4.5ZM4.5 8.25V6.75H13.5V8.25H4.5ZM4.5 3.75V2.25H13.5V3.75H4.5Z" fill="#434655" />
                      </svg>
                    </button>
                    <span className="tambah-materi__editor-divider" />
                    <button type="button" aria-label="Insert link">
                      <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 7.5H3.75C2.7125 7.5 1.82812 7.13437 1.09687 6.40312C0.365625 5.67188 0 4.7875 0 3.75C0 2.7125 0.365625 1.82812 1.09687 1.09687C1.82812 0.365625 2.7125 0 3.75 0H6.75V1.5H3.75C3.125 1.5 2.59375 1.71875 2.15625 2.15625C1.71875 2.59375 1.5 3.125 1.5 3.75C1.5 4.375 1.71875 4.90625 2.15625 5.34375C2.59375 5.78125 3.125 6 3.75 6H6.75V7.5ZM4.5 4.5V3H10.5V4.5H4.5ZM8.25 7.5V6H11.25C11.875 6 12.4062 5.78125 12.8438 5.34375C13.2812 4.90625 13.5 4.375 13.5 3.75C13.5 3.125 13.2812 2.59375 12.8438 2.15625C12.4062 1.71875 11.875 1.5 11.25 1.5H8.25V0H11.25C12.2875 0 13.1719 0.365625 13.9031 1.09687C14.6344 1.82812 15 2.7125 15 3.75C15 4.7875 14.6344 5.67188 13.9031 6.40312C13.1719 7.13437 12.2875 7.5 11.25 7.5H8.25Z" fill="#434655" />
                      </svg>
                    </button>
                  </div>
                  <textarea
                    id="deskripsi-materi"
                    rows={6}
                    placeholder="Tuliskan deskripsi lengkap materi di sini..."
                  />
                </div>
              </div>

              <div className="tambah-materi__field">
                <label>Unggah File (Modul/Video)</label>
                <div className="tambah-materi__dropzone">
                  <span className="tambah-materi__dropzone-icon">
                    <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.33333 21.3333C5.31111 21.3333 3.58333 20.6333 2.15 19.2333C0.716667 17.8333 0 16.1222 0 14.1C0 12.3667 0.522222 10.8222 1.56667 9.46667C2.61111 8.11111 3.97778 7.24444 5.66667 6.86667C6.22222 4.82222 7.33333 3.16667 9 1.9C10.6667 0.633333 12.5556 0 14.6667 0C17.2667 0 19.4722 0.905556 21.2833 2.71667C23.0944 4.52778 24 6.73333 24 9.33333C25.5333 9.51111 26.8056 10.1722 27.8167 11.3167C28.8278 12.4611 29.3333 13.8 29.3333 15.3333C29.3333 17 28.75 18.4167 27.5833 19.5833C26.4167 20.75 25 21.3333 23.3333 21.3333H16C15.2667 21.3333 14.6389 21.0722 14.1167 20.55C13.5944 20.0278 13.3333 19.4 13.3333 18.6667V11.8L11.2 13.8667L9.33333 12L14.6667 6.66667L20 12L18.1333 13.8667L16 11.8V18.6667H23.3333C24.2667 18.6667 25.0556 18.3444 25.7 17.7C26.3444 17.0556 26.6667 16.2667 26.6667 15.3333C26.6667 14.4 26.3444 13.6111 25.7 12.9667C25.0556 12.3222 24.2667 12 23.3333 12H21.3333V9.33333C21.3333 7.48889 20.6833 5.91667 19.3833 4.61667C18.0833 3.31667 16.5111 2.66667 14.6667 2.66667C12.8222 2.66667 11.25 3.31667 9.95 4.61667C8.65 5.91667 8 7.48889 8 9.33333H7.33333C6.04444 9.33333 4.94444 9.78889 4.03333 10.7C3.12222 11.6111 2.66667 12.7111 2.66667 14C2.66667 15.2889 3.12222 16.3889 4.03333 17.3C4.94444 18.2111 6.04444 18.6667 7.33333 18.6667H10.6667V21.3333H7.33333Z"
                        fill="#004AC6"
                      />
                    </svg>
                  </span>
                  <h3>Tarik & Letakkan File di Sini</h3>
                  <p>atau klik untuk menelusuri dari perangkat</p>
                  <div className="tambah-materi__dropzone-tags">
                    <span>PDF (Max 50MB)</span>
                    <span>MP4 (Max 500MB)</span>
                  </div>
                </div>
              </div>
            </section>

            <aside className="tambah-materi__aside">
              <div className="tambah-materi__card">
                <div className="tambah-materi__card-head">
                  <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.16667 10C10.2083 10 11.0938 9.63542 11.8229 8.90625C12.5521 8.17708 12.9167 7.29167 12.9167 6.25C12.9167 5.20833 12.5521 4.32292 11.8229 3.59375C11.0938 2.86458 10.2083 2.5 9.16667 2.5C8.125 2.5 7.23958 2.86458 6.51042 3.59375C5.78125 4.32292 5.41667 5.20833 5.41667 6.25C5.41667 7.29167 5.78125 8.17708 6.51042 8.90625C7.23958 9.63542 8.125 10 9.16667 10ZM9.16667 8.5C8.54167 8.5 8.01042 8.28125 7.57292 7.84375C7.13542 7.40625 6.91667 6.875 6.91667 6.25C6.91667 5.625 7.13542 5.09375 7.57292 4.65625C8.01042 4.21875 8.54167 4 9.16667 4C9.79167 4 10.3229 4.21875 10.7604 4.65625C11.1979 5.09375 11.4167 5.625 11.4167 6.25C11.4167 6.875 11.1979 7.40625 10.7604 7.84375C10.3229 8.28125 9.79167 8.5 9.16667 8.5ZM9.16667 12.5C7.13889 12.5 5.29167 11.934 3.625 10.8021C1.95833 9.67014 0.75 8.15278 0 6.25C0.75 4.34722 1.95833 2.82986 3.625 1.69792C5.29167 0.565972 7.13889 0 9.16667 0C11.1944 0 13.0417 0.565972 14.7083 1.69792C16.375 2.82986 17.5833 4.34722 18.3333 6.25C17.5833 8.15278 16.375 9.67014 14.7083 10.8021C13.0417 11.934 11.1944 12.5 9.16667 12.5ZM9.16667 10.8333C10.7361 10.8333 12.1771 10.4201 13.4896 9.59375C14.8021 8.76736 15.8056 7.65278 16.5 6.25C15.8056 4.84722 14.8021 3.73264 13.4896 2.90625C12.1771 2.07986 10.7361 1.66667 9.16667 1.66667C7.59722 1.66667 6.15625 2.07986 4.84375 2.90625C3.53125 3.73264 2.52778 4.84722 1.83333 6.25C2.52778 7.65278 3.53125 8.76736 4.84375 9.59375C6.15625 10.4201 7.59722 10.8333 9.16667 10.8333Z"
                      fill="#004AC6"
                    />
                  </svg>
                  <h2>Preview Siswa</h2>
                </div>

                <div className="tambah-materi__preview-card">
                  <div className="tambah-materi__preview-banner">
                    <span className="tambah-materi__preview-badge">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1.2 7.29615C0.825 6.92115 0.53125 6.48782 0.31875 5.99615C0.10625 5.50449 0 4.99615 0 4.47115C0 3.94615 0.1 3.4274 0.3 2.9149C0.5 2.4024 0.825 1.92115 1.275 1.47115C1.56667 1.17949 1.92708 0.929487 2.35625 0.721154C2.78542 0.512821 3.29375 0.348237 3.88125 0.227404C4.46875 0.106571 5.13958 0.0336538 5.89375 0.00865385C6.64792 -0.0163462 7.49167 0.0128205 8.425 0.0961538C8.49167 0.979487 8.5125 1.79199 8.4875 2.53365C8.4625 3.27532 8.39375 3.94407 8.28125 4.5399C8.16875 5.13574 8.01042 5.65657 7.80625 6.1024C7.60208 6.54824 7.35 6.92115 7.05 7.22115C6.60833 7.66282 6.13958 7.98574 5.64375 8.1899C5.14792 8.39407 4.64167 8.49615 4.125 8.49615C3.58333 8.49615 3.05417 8.3899 2.5375 8.1774C2.02083 7.9649 1.575 7.67115 1.2 7.29615ZM2.6 7.09615C2.84167 7.23782 3.08958 7.3399 3.34375 7.4024C3.59792 7.4649 3.85833 7.49615 4.125 7.49615C4.50833 7.49615 4.8875 7.41907 5.2625 7.2649C5.6375 7.11074 5.99583 6.86282 6.3375 6.52115C6.4875 6.37115 6.63958 6.16074 6.79375 5.8899C6.94792 5.61907 7.08125 5.2649 7.19375 4.8274C7.30625 4.3899 7.39167 3.86074 7.45 3.2399C7.50833 2.61907 7.51667 1.87949 7.475 1.02115C7.06667 1.00449 6.60625 0.998237 6.09375 1.0024C5.58125 1.00657 5.07083 1.04615 4.5625 1.12115C4.05417 1.19615 3.57083 1.31699 3.1125 1.48365C2.65417 1.65032 2.27917 1.87949 1.9875 2.17115C1.6125 2.54615 1.35417 2.91699 1.2125 3.28365C1.07083 3.65032 1 4.00449 1 4.34615C1 4.83782 1.09375 5.26907 1.28125 5.6399C1.46875 6.01074 1.63333 6.27115 1.775 6.42115C2.125 5.75449 2.5875 5.1149 3.1625 4.5024C3.7375 3.8899 4.40833 3.38782 5.175 2.99615C4.575 3.52115 4.05208 4.1149 3.60625 4.7774C3.16042 5.4399 2.825 6.21282 2.6 7.09615Z"
                          fill="#10B981"
                        />
                      </svg>
                      IPA
                    </span>
                  </div>
                  <div className="tambah-materi__preview-body">
                    <h3>Bab 5: Ekosistem Terpadu</h3>
                    <p>Deskripsi singkat materi akan muncul di sini untuk memberikan gambaran…</p>
                    <div className="tambah-materi__preview-progress-track">
                      <div className="tambah-materi__preview-progress-fill" style={{ width: "0%" }} />
                    </div>
                    <span className="tambah-materi__preview-progress-label">0% Selesai</span>
                  </div>
                </div>
              </div>

              <div className="tambah-materi__card">
                <div className="tambah-materi__card-head">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.66667 15H12.5V11.1667L13.4375 10.7083C13.6597 10.5972 13.8368 10.4444 13.9688 10.25C14.1007 10.0556 14.1667 9.83333 14.1667 9.58333C14.1667 9.34722 14.1007 9.12847 13.9688 8.92708C13.8368 8.72569 13.6597 8.56944 13.4375 8.45833L12.5 8.02083V4.16667H8.5L8.29167 2.75C8.25 2.44444 8.11458 2.1875 7.88542 1.97917C7.65625 1.77083 7.38889 1.66667 7.08333 1.66667C6.76389 1.66667 6.48958 1.77083 6.26042 1.97917C6.03125 2.1875 5.89583 2.44444 5.85417 2.75L5.64583 4.16667H1.66667V5.95833C2.44444 6.25 3.05556 6.72222 3.5 7.375C3.94444 8.02778 4.16667 8.76389 4.16667 9.58333C4.16667 10.4167 3.94444 11.1597 3.5 11.8125C3.05556 12.4653 2.44444 12.9375 1.66667 13.2292V15ZM1.66667 16.6667C1.19444 16.6667 0.798611 16.5069 0.479167 16.1875C0.159722 15.8681 0 15.4722 0 15V11.8333C0.666667 11.8333 1.25 11.6215 1.75 11.1979C2.25 10.7743 2.5 10.2361 2.5 9.58333C2.5 8.94444 2.25 8.41667 1.75 8C1.25 7.58333 0.666667 7.36111 0 7.33333V4.16667C0 3.70833 0.163194 3.31597 0.489583 2.98958C0.815972 2.66319 1.20833 2.5 1.66667 2.5H4.20833C4.30556 1.79167 4.625 1.19792 5.16667 0.71875C5.70833 0.239583 6.34722 0 7.08333 0C7.80556 0 8.4375 0.239583 8.97917 0.71875C9.52083 1.19792 9.84722 1.79167 9.95833 2.5H12.5C12.9583 2.5 13.3507 2.66319 13.6771 2.98958C14.0035 3.31597 14.1667 3.70833 14.1667 4.16667V6.95833C14.6667 7.20833 15.0694 7.56944 15.375 8.04167C15.6806 8.51389 15.8333 9.02778 15.8333 9.58333C15.8333 10.1528 15.6806 10.6736 15.375 11.1458C15.0694 11.6181 14.6667 11.9722 14.1667 12.2083V15C14.1667 15.4722 14.0035 15.8681 13.6771 16.1875C13.3507 16.5069 12.9583 16.6667 12.5 16.6667H1.66667Z"
                      fill="#8B5CF6"
                    />
                  </svg>
                  <h2>Hubungkan Kuis</h2>
                </div>
                <p className="tambah-materi__card-text">Tambahkan evaluasi setelah materi selesai dipelajari.</p>
                <button type="button" className="tambah-materi__outline-btn">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 6H0V4.5H4.5V0H6V4.5H10.5V6H6V10.5H4.5V6Z" fill="#191C1E" />
                  </svg>
                  Pilih dari Bank Soal
                </button>
              </div>

              <div className="tambah-materi__card tambah-materi__publish-card">
                <div className="tambah-materi__publish-toggle-row">
                  <div>
                    <h2>Publikasikan Sekarang</h2>
                    <p>Materi langsung dapat diakses siswa</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={publishNow}
                    aria-label="Publikasikan sekarang"
                    className={`tambah-materi__switch${publishNow ? " is-on" : ""}`}
                    onClick={() => setPublishNow((value) => !value)}
                  >
                    <span />
                  </button>
                </div>

                <div className="tambah-materi__publish-actions">
                  <button type="button" className="tambah-materi__draft-btn">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.5 3V12C13.5 12.4125 13.3531 12.7656 13.0594 13.0594C12.7656 13.3531 12.4125 13.5 12 13.5H1.5C1.0875 13.5 0.734375 13.3531 0.440625 13.0594C0.146875 12.7656 0 12.4125 0 12V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H10.5L13.5 3ZM12 3.6375L9.8625 1.5H1.5V12H12V3.6375ZM6.75 11.25C7.375 11.25 7.90625 11.0312 8.34375 10.5938C8.78125 10.1562 9 9.625 9 9C9 8.375 8.78125 7.84375 8.34375 7.40625C7.90625 6.96875 7.375 6.75 6.75 6.75C6.125 6.75 5.59375 6.96875 5.15625 7.40625C4.71875 7.84375 4.5 8.375 4.5 9C4.5 9.625 4.71875 10.1562 5.15625 10.5938C5.59375 11.0312 6.125 11.25 6.75 11.25ZM2.25 5.25H9V2.25H2.25V5.25ZM1.5 3.6375V12V1.5V3.6375Z"
                        fill="#191C1E"
                      />
                    </svg>
                    Simpan sebagai Draft
                  </button>
                  <button type="button" className="tambah-materi__publish-btn">
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12V0L14.25 6L0 12ZM1.5 9.75L10.3875 6L1.5 2.25V4.875L6 6L1.5 7.125V9.75Z" fill="white" />
                    </svg>
                    Publikasikan Materi
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <TeacherFooter />
      </div>
    </div>
  );
}

export default TambahMateri;
