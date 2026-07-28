import { useState } from "react";
import { Link } from "react-router-dom";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/ManajemenSiswa.css";

type StudentStatus = "aktif" | "tidak-aktif";

type Student = {
  key: string;
  name: string;
  id: string;
  level: string;
  average: number;
  averageTone: "green" | "amber" | "red";
  completion: number;
  status: StudentStatus;
  warning?: string;
  attention?: boolean;
};

const students: Student[] = [
  { key: "budi", name: "Budi Santoso", id: "109283", level: "SMP Kls 9", average: 85, averageTone: "green", completion: 85, status: "aktif" },
  { key: "siti", name: "Siti Aminah", id: "109284", level: "SMP Kls 9", average: 90, averageTone: "green", completion: 90, status: "aktif" },
  {
    key: "ahmad",
    name: "Ahmad Wijaya",
    id: "109285",
    level: "SMA Kls 12",
    average: 54,
    averageTone: "red",
    completion: 40,
    status: "tidak-aktif",
    warning: "Perlu Evaluasi",
    attention: true,
  },
  { key: "dimas", name: "Dimas Pratama", id: "109286", level: "SMA Kls 11", average: 65, averageTone: "amber", completion: 65, status: "aktif" },
  { key: "rina", name: "Rina Putri", id: "109287", level: "SD Kls 6", average: 100, averageTone: "green", completion: 100, status: "aktif" },
];

const metrics = [
  {
    key: "total",
    label: "TOTAL SISWA",
    value: "1,240",
    badge: "+12%",
    tone: "blue" as const,
    badgeTone: "green" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M0 20V16.5C0 15.7917 0.182292 15.1406 0.546875 14.5469C0.911458 13.9531 1.39583 13.5 2 13.1875C3.29167 12.5417 4.60417 12.0573 5.9375 11.7344C7.27083 11.4115 8.625 11.25 10 11.25C11.375 11.25 12.7292 11.4115 14.0625 11.7344C15.3958 12.0573 16.7083 12.5417 18 13.1875C18.6042 13.5 19.0885 13.9531 19.4531 14.5469C19.8177 15.1406 20 15.7917 20 16.5V20H0ZM10 10C8.625 10 7.44792 9.51042 6.46875 8.53125C5.48958 7.55208 5 6.375 5 5C5 3.625 5.48958 2.44792 6.46875 1.46875C7.44792 0.489583 8.625 0 10 0C11.375 0 12.5521 0.489583 13.5312 1.46875C14.5104 2.44792 15 3.625 15 5C15 6.375 14.5104 7.55208 13.5312 8.53125C12.5521 9.51042 11.375 10 10 10Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "aktif",
    label: "SISWA AKTIF HARI INI",
    value: "850",
    badge: "+5%",
    tone: "green" as const,
    badgeTone: "green" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM8.57143 14.2857L4.28571 10L5.79857 8.48714L8.57143 11.2486L14.2014 5.61857L15.7143 7.14286L8.57143 14.2857Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "skor",
    label: "RATA-RATA SKOR PROGRES",
    value: "78%",
    badge: "0%",
    tone: "purple" as const,
    badgeTone: "gray" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2 18V10H5V18H2ZM8.5 18V2H11.5V18H8.5ZM15 18V6H18V18H15Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "perhatian",
    label: "BUTUH PERHATIAN",
    value: "12",
    badge: "3",
    tone: "red" as const,
    badgeTone: "red" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 0L20 18H0L10 0ZM10 5.5C9.45 5.5 9 5.95 9 6.5V11.5C9 12.05 9.45 12.5 10 12.5C10.55 12.5 11 12.05 11 11.5V6.5C11 5.95 10.55 5.5 10 5.5ZM10 15.5C10.6904 15.5 11.25 14.9404 11.25 14.25C11.25 13.5596 10.6904 13 10 13C9.30964 13 8.75 13.5596 8.75 14.25C8.75 14.9404 9.30964 15.5 10 15.5Z" fill="currentColor" />
      </svg>
    ),
  },
];

const groups = [
  { key: "utbk", name: "Intensif UTBK Saintek", pct: 88, students: 240, color: "blue" as const },
  { key: "soshum", name: "Reguler Soshum Kls 12", pct: 74, students: 185, color: "purple" as const },
  { key: "weekend", name: "Tryout Akhir Pekan", pct: 62, students: 450, color: "amber" as const },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function ManajemenSiswa() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [zoomModalOpen, setZoomModalOpen] = useState(false);
  const [sessionTarget, setSessionTarget] = useState("kelas");
  const [linkSource, setLinkSource] = useState("auto");
  const [notifyTarget, setNotifyTarget] = useState(true);
  const [linkCopied, setLinkCopied] = useState(false);
  const generatedLink = "https://zoom.us/j/9876543210?pwd=xyz";

  function handleCopyLink() {
    navigator.clipboard.writeText(generatedLink);
    setLinkCopied(true);
    window.setTimeout(() => setLinkCopied(false), 2000);
  }

  return (
    <div className="teacher-dashboard manajemen-siswa">
      <TeacherSidebar active="Siswa" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content manajemen-siswa__content">
          <header className="ms-hero">
            <div className="ms-hero__text">
              <h1>Manajemen Siswa</h1>
              <p>Pantau progres, nilai, dan aktivitas belajar siswa Anda secara komprehensif.</p>
            </div>
            <div className="ms-hero__actions">
              <button type="button" className="ms-btn ms-btn--outline">
                Ekspor Laporan
              </button>
              <Link to="/manajemen-siswa/tambah" className="ms-btn ms-btn--primary">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 6H0V4.5H4.5V0H6V4.5H10.5V6H6V10.5H4.5V6Z" fill="white" />
                </svg>
                Tambah Siswa
              </Link>
              <button type="button" className="ms-btn ms-btn--zoom" onClick={() => setZoomModalOpen(true)}>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 12C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H10.5C10.9125 0 11.2656 0.146875 11.5594 0.440625C11.8531 0.734375 12 1.0875 12 1.5V4.875L15 1.875V10.125L12 7.125V10.5C12 10.9125 11.8531 11.2656 11.5594 11.5594C11.2656 11.8531 10.9125 12 10.5 12H1.5V12M1.5 10.5H10.5V10.5V10.5V1.5V1.5V1.5H1.5V1.5V1.5V10.5V10.5V10.5V10.5M1.5 10.5V10.5V10.5V1.5V1.5V1.5V1.5V1.5V1.5V10.5V10.5V10.5V10.5V10.5" fill="white" />
                </svg>
                Mulai Zoom Kelas
              </button>
            </div>
          </header>

          <section className="ms-metrics">
            {metrics.map((metric) => (
              <article className={`ms-metric ms-metric--${metric.tone}`} key={metric.key}>
                <div className="ms-metric__top">
                  <span className={`ms-metric__icon ms-metric__icon--${metric.tone}`}>{metric.icon}</span>
                  <span className={`ms-metric__badge ms-metric__badge--${metric.badgeTone}`}>{metric.badge}</span>
                </div>
                <p className="ms-metric__label">{metric.label}</p>
                <p className={`ms-metric__value${metric.tone === "red" ? " ms-metric__value--red" : ""}`}>
                  {metric.value}
                </p>
              </article>
            ))}
          </section>

          <div className="ms-layout">
            <div className="ms-directory">
              <div className="ms-directory__head">
                <h2>Direktori Siswa</h2>
                <div className="ms-directory__tools">
                  <input type="search" placeholder="Cari nama..." aria-label="Cari nama" />
                  <button type="button" className="ms-icon-btn" aria-label="Filter">
                    <svg width="14" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83333 10V8.33333H9.16667V10H5.83333ZM2.5 5.83333V4.16667H12.5V5.83333H2.5ZM0 1.66667V0H15V1.66667H0Z" fill="#434655" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="ms-table-wrap">
                <table className="ms-table">
                  <thead>
                    <tr>
                      <th>Siswa</th>
                      <th>Tingkat</th>
                      <th>Rata-rata</th>
                      <th>Penyelesaian</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s) => (
                      <tr key={s.key} className={s.attention ? "ms-table__row--attention" : undefined}>
                        <td>
                          <div className="ms-student">
                            <span className={`ms-student__avatar${s.attention ? " ms-student__avatar--muted" : ""}`}>
                              {initials(s.name)}
                            </span>
                            <div>
                              <p className="ms-student__name">{s.name}</p>
                              {s.warning ? (
                                <p className="ms-student__warning">{s.warning}</p>
                              ) : (
                                <p className="ms-student__id">ID: {s.id}</p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="ms-pill">{s.level}</span>
                        </td>
                        <td>
                          <span className={`ms-average ms-average--${s.averageTone}`}>{s.average}%</span>
                        </td>
                        <td>
                          <div className="ms-progress">
                            <span className="ms-progress__label">{s.completion}%</span>
                            <div className="ms-progress__track">
                              <div
                                className={`ms-progress__fill ms-progress__fill--${s.averageTone}`}
                                style={{ width: `${s.completion}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`ms-status ms-status--${s.status}`}>
                            {s.status === "aktif" ? "Aktif" : "Tidak Aktif"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="ms-pagination">
                <p>Menampilkan 1-5 dari 1,240</p>
                <div className="ms-pagination__buttons">
                  <button type="button" disabled>
                    ‹
                  </button>
                  <button type="button" className="ms-pagination__active">
                    1
                  </button>
                  <button type="button">2</button>
                  <button type="button">3</button>
                  <button type="button">›</button>
                </div>
              </div>
            </div>

            <aside className="ms-aside">
              <section className="ms-boost">
                <h3>Tingkatkan Performa</h3>
                <p>Analisis prediktif AI merekomendasikan fokus pada Grup Tryout A.</p>
              </section>

              <section className="ms-groups">
                <div className="ms-groups__head">
                  <h3>Grup Belajar Teratas</h3>
                  <button type="button">Lihat Semua</button>
                </div>
                <div className="ms-groups__list">
                  {groups.map((group) => (
                    <div className="ms-group" key={group.key}>
                      <div className="ms-group__top">
                        <span className="ms-group__label">
                          <i className={`ms-group__dot ms-group__dot--${group.color}`} />
                          {group.name}
                        </span>
                        <span className="ms-group__pct">{group.pct}% Rata-rata</span>
                      </div>
                      <div className="ms-group__track">
                        <div
                          className={`ms-group__fill ms-group__fill--${group.color}`}
                          style={{ width: `${group.pct}%` }}
                        />
                      </div>
                      <p className="ms-group__students">{group.students} Siswa aktif</p>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>

        <TeacherFooter />
      </div>

      {zoomModalOpen ? (
        <div className="zoom-modal-overlay" role="presentation" onClick={() => setZoomModalOpen(false)}>
          <div
            className="zoom-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="zoom-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="zoom-modal__header">
              <div>
                <h2 id="zoom-modal-title">Mulai Sesi Zoom Baru</h2>
                <p>Siapkan ruang pertemuan virtual untuk siswa Anda.</p>
              </div>
              <button
                type="button"
                className="zoom-modal__close"
                aria-label="Tutup"
                onClick={() => setZoomModalOpen(false)}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14V14" fill="#434655" />
                </svg>
              </button>
            </div>

            <div className="zoom-modal__body">
              <div className="zoom-modal__section">
                <span className="zoom-modal__label">Target Sesi</span>
                <div className="zoom-modal__segmented">
                  <button
                    type="button"
                    className={`zoom-modal__segment${sessionTarget === "kelas" ? " zoom-modal__segment--active" : ""}`}
                    onClick={() => setSessionTarget("kelas")}
                  >
                    Kelas
                  </button>
                  <button
                    type="button"
                    className={`zoom-modal__segment${sessionTarget === "individu" ? " zoom-modal__segment--active" : ""}`}
                    onClick={() => setSessionTarget("individu")}
                  >
                    Individu/Siswa
                  </button>
                </div>

                <div className="zoom-modal__select">
                  <span>{sessionTarget === "kelas" ? "Pilih Kelas..." : "Pilih Siswa..."}</span>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4V7.4" fill="#434655" />
                  </svg>
                </div>
              </div>

              <div className="zoom-modal__section">
                <span className="zoom-modal__label">Sumber Link Meeting</span>
                <div className="zoom-modal__source-options">
                  <button
                    type="button"
                    className={`zoom-modal__source${linkSource === "auto" ? " zoom-modal__source--active" : ""}`}
                    onClick={() => setLinkSource("auto")}
                  >
                    <span className="zoom-modal__source-info">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8L16.75 5.25L14 4L16.75 2.75L18 0L19.25 2.75L22 4L19.25 5.25L18 8V8M18 22L16.75 19.25L14 18L16.75 16.75L18 14L19.25 16.75L22 18L19.25 19.25L18 22V22M8 19L5.5 13.5L0 11L5.5 8.5L8 3L10.5 8.5L16 11L10.5 13.5L8 19V19" fill="#004AC6" />
                      </svg>
                      Generate Otomatis
                    </span>
                    <span className="zoom-modal__radio">
                      <span className="zoom-modal__radio-dot" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className={`zoom-modal__source${linkSource === "manual" ? " zoom-modal__source--active" : ""}`}
                    onClick={() => setLinkSource("manual")}
                  >
                    <span className="zoom-modal__source-info">
                      <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 10H5C3.61667 10 2.4375 9.5125 1.4625 8.5375C0.4875 7.5625 0 6.38333 0 5C0 3.61667 0.4875 2.4375 1.4625 1.4625C2.4375 0.4875 3.61667 0 5 0H9V2H5C4.16667 2 3.45833 2.29167 2.875 2.875C2.29167 3.45833 2 4.16667 2 5C2 5.83333 2.29167 6.54167 2.875 7.125C3.45833 7.70833 4.16667 8 5 8H9V10V10M6 6V4H14V6H6V6M11 10V8H15C15.8333 8 16.5417 7.70833 17.125 7.125C17.7083 6.54167 18 5.83333 18 5C18 4.16667 17.7083 3.45833 17.125 2.875C16.5417 2.29167 15.8333 2 15 2H11V0H15C16.3833 0 17.5625 0.4875 18.5375 1.4625C19.5125 2.4375 20 3.61667 20 5C20 6.38333 19.5125 7.5625 18.5375 8.5375C17.5625 9.5125 16.3833 10 15 10H11V10" fill="#434655" />
                      </svg>
                      Input Manual
                    </span>
                    <span className="zoom-modal__radio">
                      <span className="zoom-modal__radio-dot" />
                    </span>
                  </button>
                </div>

                <div className="zoom-modal__preview">
                  <span className="zoom-modal__preview-icon">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V6.5L20 2.5V13.5L16 9.5V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2V16M2 14H14V14V14V2V2V2H2V2V2V14V14V14V14M2 14V14V14V2V2V2V2V2V2V14V14V14V14V14" fill="#2563EB" />
                    </svg>
                  </span>
                  <span className="zoom-modal__preview-text">
                    <span className="zoom-modal__preview-label">Link Tergenerate</span>
                    <span className="zoom-modal__preview-link">{generatedLink}</span>
                  </span>
                  <button type="button" className="zoom-modal__copy" onClick={handleCopyLink}>
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 9.33333C3.17917 9.33333 2.90451 9.2191 2.67604 8.99063C2.44757 8.76215 2.33333 8.4875 2.33333 8.16667V1.16667C2.33333 0.845833 2.44757 0.571181 2.67604 0.342708C2.90451 0.114236 3.17917 0 3.5 0H8.75C9.07083 0 9.34549 0.114236 9.57396 0.342708C9.80243 0.571181 9.91667 0.845833 9.91667 1.16667V8.16667C9.91667 8.4875 9.80243 8.76215 9.57396 8.99063C9.34549 9.2191 9.07083 9.33333 8.75 9.33333H3.5V9.33333M3.5 8.16667H8.75V8.16667V8.16667V1.16667V1.16667V1.16667H3.5V1.16667V1.16667V8.16667V8.16667V8.16667V8.16667M1.16667 11.6667C0.845833 11.6667 0.571181 11.5524 0.342708 11.324C0.114236 11.0955 0 10.8208 0 10.5V2.33333H1.16667V10.5V10.5V10.5H7.58333V11.6667H1.16667V11.6667M3.5 8.16667V8.16667V8.16667V1.16667V1.16667V1.16667V1.16667V1.16667V1.16667V8.16667V8.16667V8.16667V8.16667V8.16667" fill="#191C1E" />
                    </svg>
                    {linkCopied ? "Tersalin" : "Salin"}
                  </button>
                </div>
              </div>

              <label className="zoom-modal__notify">
                <span className={`zoom-modal__checkbox${notifyTarget ? " zoom-modal__checkbox--checked" : ""}`}>
                  <input
                    type="checkbox"
                    checked={notifyTarget}
                    onChange={(event) => setNotifyTarget(event.target.checked)}
                  />
                  <svg width="10" height="8" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.8 8.01667L0 4.21667L0.95 3.26667L3.8 6.11667L9.91667 0L10.8667 0.95L3.8 8.01667V8.01667" fill="white" />
                  </svg>
                </span>
                <span className="zoom-modal__notify-text">
                  <strong>Kirim Notifikasi ke Target</strong>
                  <span>Siswa akan menerima push notification dan pesan WhatsApp.</span>
                </span>
              </label>
            </div>

            <div className="zoom-modal__footer">
              <button
                type="button"
                className="zoom-modal__btn zoom-modal__btn--ghost"
                onClick={() => setZoomModalOpen(false)}
              >
                Batal
              </button>
              <button type="button" className="zoom-modal__btn zoom-modal__btn--primary">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.275 8.19442L4.475 3.99442C4.70833 3.76109 4.98333 3.59442 5.3 3.49442C5.61667 3.39442 5.94167 3.37775 6.275 3.44442L7.575 3.71942C6.675 4.78609 5.96667 5.75275 5.45 6.61942C4.93333 7.48609 4.43333 8.53609 3.95 9.76942L0.275 8.19442V8.19442M5.4 10.4694C5.78333 9.26942 6.30417 8.13609 6.9625 7.06942C7.62083 6.00275 8.41667 5.00275 9.35 4.06942C10.8167 2.60275 12.4917 1.50692 14.375 0.781922C16.2583 0.0569215 18.0167 -0.163912 19.65 0.119421C19.9333 1.75275 19.7167 3.51109 19 5.39442C18.2833 7.27775 17.1917 8.95275 15.725 10.4194C14.8083 11.3361 13.8083 12.1319 12.725 12.8069C11.6417 13.4819 10.5 14.0111 9.3 14.3944L5.4 10.4694V10.4694M12.3 7.46942C12.6833 7.85275 13.1542 8.04442 13.7125 8.04442C14.2708 8.04442 14.7417 7.85275 15.125 7.46942C15.5083 7.08609 15.7 6.61525 15.7 6.05692C15.7 5.49859 15.5083 5.02775 15.125 4.64442C14.7417 4.26109 14.2708 4.06942 13.7125 4.06942C13.1542 4.06942 12.6833 4.26109 12.3 4.64442C11.9167 5.02775 11.725 5.49859 11.725 6.05692C11.725 6.61525 11.9167 7.08609 12.3 7.46942V7.46942M11.6 19.4944L10 15.8194C11.2333 15.3361 12.2875 14.8361 13.1625 14.3194C14.0375 13.8028 15.0083 13.0944 16.075 12.1944L16.325 13.4944C16.3917 13.8278 16.375 14.1569 16.275 14.4819C16.175 14.8069 16.0083 15.0861 15.775 15.3194L11.6 19.4944V19.4944M1.875 13.6694C2.45833 13.0861 3.16667 12.7903 4 12.7819C4.83333 12.7736 5.54167 13.0611 6.125 13.6444C6.70833 14.2278 7 14.9361 7 15.7694C7 16.6028 6.70833 17.3111 6.125 17.8944C5.70833 18.3111 5.0125 18.6694 4.0375 18.9694C3.0625 19.2694 1.71667 19.5361 0 19.7694C0.233333 18.0528 0.5 16.7111 0.8 15.7444C1.1 14.7778 1.45833 14.0861 1.875 13.6694V13.6694" fill="white" />
                </svg>
                Buka &amp; Mulai Sesi Sekarang
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ManajemenSiswa;
