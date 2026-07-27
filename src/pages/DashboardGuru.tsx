import { useState } from "react";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import "../styles/pengajar/DashboardGuru.css";

const mascotImageSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/65b69b71bbbb7448faaf9cf57df57b4b4ec6381f?width=800";

const stats = [
  {
    key: "siswa",
    label: "Total Siswa",
    value: "1,240",
    accent: "blue",
    icon: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM18 16V13C18 12.2667 17.7958 11.5625 17.3875 10.8875C16.9792 10.2125 16.4 9.63333 15.65 9.15C16.5 9.25 17.3 9.42083 18.05 9.6625C18.8 9.90417 19.5 10.2 20.15 10.55C20.75 10.8833 21.2083 11.2542 21.525 11.6625C21.8417 12.0708 22 12.5167 22 13V16H18ZM8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8Z"
          fill="#004AC6"
        />
      </svg>
    ),
    footer: (
      <span className="stat-card__delta stat-card__delta--up">
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.933333 8L0 7.06667L4.93333 2.1L7.6 4.76667L11.0667 1.33333H9.33333V0H13.3333V4H12V2.26667L7.6 6.66667L4.93333 4L0.933333 8Z" fill="#10B981" />
        </svg>
        12%
      </span>
    ),
  },
  {
    key: "skor",
    label: "Rata-rata Skor",
    value: "85%",
    accent: "green",
    icon: (
      <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.675 11.7L6.55 8.85L4.25 7H7.1L8 4.2L8.9 7H11.75L9.425 8.85L10.3 11.7L8 9.925L5.675 11.7ZM2 21V13.275C1.36667 12.575 0.875 11.775 0.525 10.875C0.175 9.975 0 9.01667 0 8C0 5.76667 0.775 3.875 2.325 2.325C3.875 0.775 5.76667 0 8 0C10.2333 0 12.125 0.775 13.675 2.325C15.225 3.875 16 5.76667 16 8C16 9.01667 15.825 9.975 15.475 10.875C15.125 11.775 14.6333 12.575 14 13.275V21L8 19L2 21Z"
          fill="#10B981"
        />
      </svg>
    ),
    footer: (
      <div className="stat-card__progress">
        <div className="stat-card__progress-labels">
          <span>Target: 90%</span>
          <span>+3% bln ini</span>
        </div>
        <div className="stat-card__progress-track">
          <div className="stat-card__progress-fill" style={{ width: "94%" }} />
        </div>
      </div>
    ),
  },
  {
    key: "materi",
    label: "Materi Terbit",
    value: "48",
    accent: "purple",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 12H12V10H8V12ZM8 9H16V7H8V9ZM8 6H16V4H8V6ZM6 16C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H6ZM6 14H18V2H6V14ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4H2V18H16V20H2Z"
          fill="#8B5CF6"
        />
      </svg>
    ),
    footer: (
      <div className="stat-card__tags">
        <span className="stat-card__tag">Matematika (20)</span>
        <span className="stat-card__tag">Fisika (15)</span>
        <span className="stat-card__tag">+2 lainnya</span>
      </div>
    ),
  },
  {
    key: "tryout",
    label: "Tryout Aktif",
    value: "12",
    accent: "orange",
    icon: (
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.95 16.35L4.4 12.8L5.85 11.35L7.95 13.45L12.15 9.25L13.6 10.7L7.95 16.35ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6Z"
          fill="#FB923C"
        />
      </svg>
    ),
    footer: (
      <div className="stat-card__tryout">
        <div>
          <p className="stat-card__tryout-label">Hari Ini</p>
          <p className="stat-card__tryout-live">3 Live</p>
        </div>
        <div className="stat-card__avatars">
          <span className="stat-card__avatar stat-card__avatar--blue" />
          <span className="stat-card__avatar stat-card__avatar--purple" />
          <span className="stat-card__avatar stat-card__avatar--green" />
        </div>
      </div>
    ),
  },
];

const weeklyActivity = [
  { day: "Sen", percent: 45 },
  { day: "Sel", percent: 58 },
  { day: "Rab", percent: 100, active: true },
  { day: "Kam", percent: 42 },
  { day: "Jum", percent: 72 },
  { day: "Sab", percent: 25 },
  { day: "Min", percent: 18 },
];

const materiTerakhir = [
  {
    key: "integral",
    title: "Integral Kalkulus Lanjut",
    subject: "Matematika",
    status: "Published",
    accent: "blue",
    views: "842",
    selesai: "92%",
    rata: "78",
    icon: (
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.83333 17.5H7.58333V15.1667H9.91667V13.4167H7.58333V11.0833H5.83333V13.4167H3.5V15.1667H5.83333V17.5ZM11.6667 16.625H17.5V14.875H11.6667V16.625ZM11.6667 13.7083H17.5V11.9583H11.6667V13.7083ZM12.95 9.275L14.5833 7.64167L16.2167 9.275L17.4417 8.05L15.8083 6.35833L17.4417 4.725L16.2167 3.5L14.5833 5.13333L12.95 3.5L11.725 4.725L13.3583 6.35833L11.725 8.05L12.95 9.275ZM3.79167 7.23333H9.625V5.48333H3.79167V7.23333ZM2.33333 21C1.69167 21 1.14236 20.7715 0.685417 20.3146C0.228472 19.8576 0 19.3083 0 18.6667V2.33333C0 1.69167 0.228472 1.14236 0.685417 0.685417C1.14236 0.228472 1.69167 0 2.33333 0H18.6667C19.3083 0 19.8576 0.228472 20.3146 0.685417C20.7715 1.14236 21 1.69167 21 2.33333V18.6667C21 19.3083 20.7715 19.8576 20.3146 20.3146C19.8576 20.7715 19.3083 21 18.6667 21H2.33333Z"
          fill="#004AC6"
        />
      </svg>
    ),
  },
  {
    key: "genetika",
    title: "Genetika & Evolusi",
    subject: "Biologi",
    status: "Draft",
    accent: "green",
    views: "-",
    selesai: "-",
    rata: "-",
    icon: (
      <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 22.1667V19.8333H5.83333V17.5C4.21944 17.5 2.84375 16.9312 1.70625 15.7937C0.56875 14.6562 0 13.2806 0 11.6667C0 10.4806 0.325694 9.40139 0.977083 8.42917C1.62847 7.45694 2.50833 6.74722 3.61667 6.3C3.77222 5.63889 4.11736 5.10417 4.65208 4.69583C5.18681 4.2875 5.79444 4.08333 6.475 4.08333L5.83333 2.275L6.94167 1.86667L6.53333 0.816667L8.75 0L9.1 1.10833L10.2083 0.7L13.4167 9.45L12.3083 9.85833L12.7167 10.9667L10.5 11.7833L10.15 10.675L9.04167 11.0833L8.34167 9.15833C8.05 9.43056 7.71458 9.63472 7.33542 9.77083C6.95625 9.90694 6.57222 9.95556 6.18333 9.91667C5.75556 9.87778 5.35694 9.74653 4.9875 9.52292C4.61806 9.29931 4.29722 9.02222 4.025 8.69167C3.5 9.00278 3.08681 9.42083 2.78542 9.94583C2.48403 10.4708 2.33333 11.0444 2.33333 11.6667C2.33333 12.6389 2.67361 13.4653 3.35417 14.1458C4.03472 14.8264 4.86111 15.1667 5.83333 15.1667H15.1667V17.5H9.33333V19.8333H16.3333V22.1667H0Z"
          fill="#10B981"
        />
      </svg>
    ),
  },
];

const tasks = [
  { key: "koreksi", title: "Koreksi Tryout Mandiri Kimia", meta: "Deadline: Besok, 09:00", tag: "URGENT", tagColor: "red" },
  { key: "modul", title: "Update Modul Turunan Fungsi", meta: "Deadline: 24 Okt 2023", tag: "PENDING", tagColor: "amber" },
  { key: "integral-materi", title: "Siapkan Materi Integral", meta: "Selesai Hari Ini", done: true },
];

const schedule = [
  { key: "tryout", time: "08:00", title: "Tryout UTBK - Saintek", meta: "Kelas XII IPA 1 • 32 Siswa", variant: "live" as const },
  { key: "evaluasi", time: "10:30", title: "Evaluasi Materi Biologi", meta: "Sesi Tanya Jawab Online", variant: "default" as const },
  { key: "rapat", time: "13:00", title: "Rapat Guru", meta: "Ruang Guru Utama", variant: "muted" as const },
];

function DashboardGuru() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(tasks.map((task) => [task.key, Boolean(task.done)])),
  );
  const toggleTask = (taskKey: string) => {
    setCompletedTasks((current) => ({ ...current, [taskKey]: !current[taskKey] }));
  };

  return (
    <div className="teacher-dashboard">
      <TeacherSidebar active="Dashboard" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content">
          <div className="ai-insight">
            <div className="ai-insight__body">
              <span className="ai-insight__icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 8L16.75 5.25L14 4L16.75 2.75L18 0L19.25 2.75L22 4L19.25 5.25L18 8ZM18 22L16.75 19.25L14 18L16.75 16.75L18 14L19.25 16.75L22 18L19.25 19.25L18 22ZM8 19L5.5 13.5L0 11L5.5 8.5L8 3L10.5 8.5L16 11L10.5 13.5L8 19Z"
                    fill="#6A1EDB"
                  />
                </svg>
              </span>
              <div>
                <h3 className="ai-insight__title">AI Insight: Intervention Recommended</h3>
                <p className="ai-insight__desc">
                  3 students scored below 60% on the recent "Kalkulus Lanjut" Tryout. Generate a targeted remedial
                  quiz?
                </p>
              </div>
            </div>
            <div className="ai-insight__actions">
              <button type="button" className="ai-insight__dismiss">
                Dismiss
              </button>
              <button type="button" className="ai-insight__generate">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 8.38125L6.75 6.75L8.38125 6L6.75 5.25L6 3.61875L5.25 5.25L3.61875 6L5.25 6.75L6 8.38125ZM6 12L4.125 7.875L0 6L4.125 4.125L6 0L7.875 4.125L12 6L7.875 7.875L6 12ZM12 13.5L11.0625 11.4375L9 10.5L11.0625 9.5625L12 7.5L12.9375 9.5625L15 10.5L12.9375 11.4375L12 13.5Z"
                    fill="white"
                  />
                </svg>
                Generate Quiz
              </button>
            </div>
          </div>

          <section className="teacher-hero">
            <div className="teacher-hero__glow teacher-hero__glow--blue" aria-hidden="true" />
            <div className="teacher-hero__glow teacher-hero__glow--purple" aria-hidden="true" />
            <div className="teacher-hero__text">
              <h1 className="teacher-hero__title">
                Selamat Datang, <span>Bu Rina</span> 👋
              </h1>
              <p className="teacher-hero__desc">
                Command center Anda siap. Pantau 1,240 siswa, kelola materi, dan hasilkan soal dengan kecerdasan
                buatan.
              </p>
              <div className="teacher-hero__actions">
                <button type="button" className="teacher-btn teacher-btn--yellow">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 20.025C1.45 20.025 0.979167 19.8292 0.5875 19.4375C0.195833 19.0458 0 18.575 0 18.025V4.025C0 3.475 0.195833 3.00417 0.5875 2.6125C0.979167 2.22083 1.45 2.025 2 2.025H10.925L8.925 4.025H2V18.025H16V11.075L18 9.075V18.025C18 18.575 17.8042 19.0458 17.4125 19.4375C17.0208 19.8292 16.55 20.025 16 20.025H2ZM6 14.025V9.775L15.175 0.6C15.575 0.2 16.05 0 16.6 0C17.15 0 17.625 0.2 18.025 0.6L19.425 2.025C19.825 2.425 20.025 2.9 20.025 3.45C20.025 4 19.825 4.475 19.425 4.875L10.25 14.025H6Z"
                      fill="#6F5900"
                    />
                  </svg>
                  Buat Soal
                </button>
              </div>
            </div>
            <div className="teacher-hero__media">
              <img src={mascotImageSrc} alt="Ilustrasi AI mendampingi kegiatan belajar mengajar" />
            </div>
          </section>

          <section className="teacher-stats">
            {stats.map((stat) => (
              <article key={stat.key} className={`stat-card stat-card--${stat.accent}`}>
                <div className="stat-card__head">
                  <div>
                    <p className="stat-card__label">{stat.label}</p>
                    <p className="stat-card__value">{stat.value}</p>
                  </div>
                  <span className="stat-card__icon">{stat.icon}</span>
                </div>
                {stat.footer}
              </article>
            ))}
          </section>

          <div className="teacher-grid">
            <div className="teacher-grid__main">
              <section className="teacher-card">
                <div className="teacher-card__header">
                  <h2>Aktivitas Siswa Mingguan</h2>
                  <div className="chart-legend">
                    <span className="chart-legend__item">
                      <i className="chart-legend__dot chart-legend__dot--low" />
                      Rendah
                    </span>
                    <span className="chart-legend__item">
                      <i className="chart-legend__dot chart-legend__dot--high" />
                      Tinggi
                    </span>
                  </div>
                </div>
                <div className="weekly-bars">
                  {weeklyActivity.map((item) => (
                    <div className="weekly-bars__col" key={item.day}>
                      <div className="weekly-bars__track">
                        <div
                          className={`weekly-bars__fill${item.active ? " weekly-bars__fill--active" : ""}`}
                          style={{ height: `${item.percent}%` }}
                        />
                      </div>
                      <span>{item.day}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="teacher-quick-actions">
                <h2>Aksi Cepat</h2>
                <div className="teacher-quick-actions__grid">
                  <button type="button" className="quick-action-card quick-action-card--purple">
                    <span className="quick-action-card__icon quick-action-card__icon--purple">
                      <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 6.66667V0H6.66667V2.66667H2.66667V6.66667H0ZM24 6.66667V2.66667H20V0H26.6667V6.66667H24ZM0 29.3333V22.6667H2.66667V26.6667H6.66667V29.3333H0ZM20 29.3333V26.6667H24V22.6667H26.6667V29.3333H20ZM6.66667 22.6667H20V6.66667H6.66667V22.6667Z"
                          fill="#6A1EDB"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3>Generate with AI</h3>
                      <p>Buat soal otomatis dari silabus atau topik</p>
                    </div>
                    <span className="quick-action-card__arrow">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.175 9H0V7H8.175L4.575 3.4L6 2L12 8L6 14L4.575 12.6L8.175 9Z" fill="#6A1EDB" />
                      </svg>
                    </span>
                  </button>
                  <button type="button" className="quick-action-card quick-action-card--blue">
                    <span className="quick-action-card__icon quick-action-card__icon--blue">
                      <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 6.66667V0H6.66667V2.66667H2.66667V6.66667H0ZM24 6.66667V2.66667H20V0H26.6667V6.66667H24ZM0 29.3333V22.6667H2.66667V26.6667H6.66667V29.3333H0ZM20 29.3333V26.6667H24V22.6667H26.6667V29.3333H20ZM6.66667 22.6667H20V6.66667H6.66667V22.6667Z"
                          fill="#004AC6"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3>OCR Scanner</h3>
                      <p>Digitalisasi soal fisik ke sistem bank soal</p>
                    </div>
                    <span className="quick-action-card__arrow">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.175 9H0V7H8.175L4.575 3.4L6 2L12 8L6 14L4.575 12.6L8.175 9Z" fill="#004AC6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </section>

              <section className="teacher-card">
                <div className="teacher-card__header">
                  <h2>Materi Terakhir</h2>
                  <button type="button" className="teacher-link-btn">
                    Lihat Semua
                  </button>
                </div>
                <div className="materi-list">
                  {materiTerakhir.map((item) => (
                    <div className="materi-item" key={item.key}>
                      <div className="materi-item__main">
                        <span className={`materi-item__icon materi-item__icon--${item.accent}`}>{item.icon}</span>
                        <div>
                          <h3>{item.title}</h3>
                          <div className="materi-item__tags">
                            <span className="materi-item__subject">{item.subject}</span>
                            <span className={`materi-item__status materi-item__status--${item.status.toLowerCase()}`}>
                              {item.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="materi-item__metrics">
                        <div>
                          <span>Views</span>
                          <strong>{item.views}</strong>
                        </div>
                        <div>
                          <span>Selesai</span>
                          <strong className="materi-item__metric-green">{item.selesai}</strong>
                        </div>
                        <div>
                          <span>Rata-rata</span>
                          <strong>{item.rata}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="teacher-card">
                <div className="teacher-card__header">
                  <h2>Daftar Tugas</h2>
                  <button type="button" className="teacher-link-btn">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.75 11.25H8.25V8.25H11.25V6.75H8.25V3.75H6.75V6.75H3.75V8.25H6.75V11.25ZM7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15Z"
                        fill="#004AC6"
                      />
                    </svg>
                    Tambah Tugas
                  </button>
                </div>
                <div className="task-list">
                  {tasks.map((task) => (
                    <div className={`task-item${completedTasks[task.key] ? " task-item--done" : ""}`} key={task.key}>
                      <input
                        type="checkbox"
                        className="task-item__check"
                        checked={Boolean(completedTasks[task.key])}
                        onChange={() => toggleTask(task.key)}
                        aria-label={`Tandai tugas ${task.title} sebagai selesai`}
                      />
                      <div className="task-item__body">
                        <p className="task-item__title">{task.title}</p>
                        <p className="task-item__meta">{task.meta}</p>
                      </div>
                      {task.tag ? (
                        <span className={`task-item__tag task-item__tag--${task.tagColor}`}>{task.tag}</span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="teacher-grid__side">
              <section className="teacher-card">
                <div className="teacher-card__header">
                  <h2>Jadwal Hari Ini</h2>
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6Z"
                      fill="#735C00"
                    />
                  </svg>
                </div>
                <div className="schedule-list">
                  {schedule.map((event) => (
                    <div className="schedule-item" key={event.key}>
                      <div className="schedule-item__time">
                        <span>{event.time}</span>
                        <span className="schedule-item__divider" />
                      </div>
                      <div className={`schedule-item__card schedule-item__card--${event.variant}`}>
                        <h3>{event.title}</h3>
                        <p>{event.meta}</p>
                        {event.variant === "live" ? (
                          <span className="schedule-item__live">
                            <i />
                            LIVE NOW
                          </span>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="teacher-card teacher-radar">
                <h2>Performa Mata Pelajaran</h2>
                <div className="radar-chart">
                  <div className="radar-chart__rings">
                    <span className="radar-chart__ring radar-chart__ring--1" />
                    <span className="radar-chart__ring radar-chart__ring--2" />
                    <span className="radar-chart__ring radar-chart__ring--3" />
                    <span className="radar-chart__crosshair radar-chart__crosshair--v" />
                    <span className="radar-chart__crosshair radar-chart__crosshair--h" />
                  </div>
                  <svg className="radar-chart__shape" viewBox="0 0 100 100">
                    <polygon points="50,14 84,50 50,90 18,50" fill="rgba(0,74,198,0.2)" stroke="#004AC6" strokeWidth="2" />
                    <circle cx="50" cy="14" r="4" fill="#004AC6" />
                    <circle cx="84" cy="50" r="4" fill="#004AC6" />
                    <circle cx="50" cy="90" r="4" fill="#004AC6" />
                    <circle cx="18" cy="50" r="4" fill="#004AC6" />
                  </svg>
                  <span className="radar-chart__label radar-chart__label--top">Matematika</span>
                  <span className="radar-chart__label radar-chart__label--right">Fisika</span>
                  <span className="radar-chart__label radar-chart__label--bottom">Kimia</span>
                  <span className="radar-chart__label radar-chart__label--left">Biologi</span>
                </div>
                <div className="radar-metrics">
                  <div className="radar-metrics__row">
                    <div className="radar-metrics__head">
                      <span>Ketuntasan Tryout</span>
                      <strong>78%</strong>
                    </div>
                    <div className="radar-metrics__track">
                      <div className="radar-metrics__fill radar-metrics__fill--blue" style={{ width: "78%" }} />
                    </div>
                  </div>
                  <div className="radar-metrics__row">
                    <div className="radar-metrics__head">
                      <span>Materi Dibaca</span>
                      <strong>92%</strong>
                    </div>
                    <div className="radar-metrics__track">
                      <div className="radar-metrics__fill radar-metrics__fill--purple" style={{ width: "92%" }} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardGuru;
