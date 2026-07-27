import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/DetailMateri.css";

type ModuleStatus = "published" | "draft";

type CurriculumModule = {
  key: string;
  index: number;
  title: string;
  duration: string;
  quizCount: string;
  status: ModuleStatus;
  statusLabel: string;
};

type Testimonial = {
  key: string;
  initials: string;
  name: string;
  rating: number;
  text: string;
  avatarBg: string;
  avatarColor: string;
};

type TopStudent = {
  key: string;
  initials: string;
  name: string;
  score: string;
  avatarBg: string;
  avatarColor: string;
};

const modules: CurriculumModule[] = [
  {
    key: "limit-fungsi",
    index: 1,
    title: "Limit Fungsi Aljabar",
    duration: "45 mnt",
    quizCount: "2 Kuis",
    status: "published",
    statusLabel: "Diterbitkan",
  },
  {
    key: "turunan-dasar",
    index: 2,
    title: "Turunan Dasar",
    duration: "60 mnt",
    quizCount: "3 Kuis",
    status: "published",
    statusLabel: "Diterbitkan",
  },
  {
    key: "integral-tentu",
    index: 3,
    title: "Integral Tentu (Intro)",
    duration: "30 mnt",
    quizCount: "0 Kuis",
    status: "draft",
    statusLabel: "Draf",
  },
];

const testimonials: Testimonial[] = [
  {
    key: "dina",
    initials: "DN",
    name: "Dina N.",
    rating: 5,
    text: "Penjelasan materi Aturan Rantai sangat jelas dan mudah dipahami berkat latihan AI-nya!",
    avatarBg: "#B4C5FF",
    avatarColor: "#00174B",
  },
  {
    key: "rizki",
    initials: "RP",
    name: "Rizki P.",
    rating: 4,
    text: "Modulnya bagus, tapi mungkin perlu tambahan kuis di bagian integral.",
    avatarBg: "#EEC200",
    avatarColor: "#231B00",
  },
];

const topStudents: TopStudent[] = [
  { key: "andi", initials: "AS", name: "Andi S.", score: "98/100", avatarBg: "#B4C5FF", avatarColor: "#00174B" },
  { key: "budi", initials: "BW", name: "Budi W.", score: "95/100", avatarBg: "#EEC200", avatarColor: "#231B00" },
  { key: "citra", initials: "CK", name: "Citra K.", score: "92/100", avatarBg: "#D2BBFF", avatarColor: "#25005A" },
];

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.75833 8.575L8.575 7.75833L6.41667 5.6V2.91667H5.25V6.06667L7.75833 8.575ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667Z"
        fill="#C3C6D7"
      />
    </svg>
  );
}

function QuizIcon() {
  return (
    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.16667 11.6667C0.845833 11.6667 0.571181 11.5524 0.342708 11.324C0.114236 11.0955 0 10.8208 0 10.5V2.33333C0 2.0125 0.114236 1.73785 0.342708 1.50937C0.571181 1.2809 0.845833 1.16667 1.16667 1.16667H3.61667C3.74306 0.816667 3.95451 0.534722 4.25104 0.320833C4.54757 0.106944 4.88056 0 5.25 0C5.61944 0 5.95243 0.106944 6.24896 0.320833C6.54549 0.534722 6.75694 0.816667 6.88333 1.16667H9.33333C9.65417 1.16667 9.92882 1.2809 10.1573 1.50937C10.3858 1.73785 10.5 2.0125 10.5 2.33333V10.5C10.5 10.8208 10.3858 11.0955 10.1573 11.324C9.92882 11.5524 9.65417 11.6667 9.33333 11.6667H1.16667ZM1.16667 10.5H9.33333V2.33333H1.16667V10.5ZM2.33333 9.33333H6.41667V8.16667H2.33333V9.33333ZM2.33333 7H8.16667V5.83333H2.33333V7ZM2.33333 4.66667H8.16667V3.5H2.33333V4.66667Z"
        fill="#C3C6D7"
      />
    </svg>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="15" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
        fill={filled ? "#F59E0B" : "#E0E3E5"}
      />
    </svg>
  );
}

function DetailMateri() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="teacher-dashboard detail-materi">
      <TeacherSidebar active="Materi" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content detail-materi__content">
          <header className="detail-materi__header">
            <div className="detail-materi__heading">
              <h1>Detail Materi: Kalkulus</h1>
              <p>Kelola modul, lihat performa siswa, dan sesuaikan pengaturan tutor AI untuk Kalkulus tingkat SMP.</p>
            </div>
            <div className="detail-materi__header-actions">
              <button type="button" className="detail-materi__edit-btn">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.16667 9.33333H1.99792L7.7 3.63125L6.86875 2.8L1.16667 8.50208V9.33333ZM0 10.5V8.02083L7.7 0.335417C7.81667 0.228472 7.94549 0.145833 8.08646 0.0875C8.22743 0.0291667 8.37569 0 8.53125 0C8.68681 0 8.8375 0.0291667 8.98333 0.0875C9.12917 0.145833 9.25556 0.233333 9.3625 0.35L10.1646 1.16667C10.2812 1.27361 10.3663 1.4 10.4198 1.54583C10.4733 1.69167 10.5 1.8375 10.5 1.98333C10.5 2.13889 10.4733 2.28715 10.4198 2.42812C10.3663 2.5691 10.2812 2.69792 10.1646 2.81458L2.47917 10.5H0Z"
                    fill="#004AC6"
                  />
                </svg>
                Edit Materi
              </button>
              <button
                type="button"
                className="detail-materi__publish-btn"
                onClick={() => navigate("/materi-guru", { state: { publishSuccess: true } })}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.08329 9.33268L4.08329 4.57852L2.56663 6.09518L1.74996 5.24935L4.66663 2.33268L7.58329 5.24935L6.76663 6.09518L5.24996 4.57852L5.24996 9.33268H4.08329ZM-4.1008e-05 2.91602L-4.1008e-05 1.16602C-4.1008e-05 0.845182 0.114195 0.570529 0.342667 0.342057C0.57114 0.113585 0.845792 -0.00065136 1.16663 -0.00065136L8.16663 -0.00065136C8.48746 -0.00065136 8.76211 0.113585 8.99058 0.342057C9.21906 0.570529 9.33329 0.845182 9.33329 1.16602V2.91602L8.16663 2.91602V1.16602L1.16663 1.16602L1.16663 2.91602H-4.1008e-05Z"
                    fill="white"
                  />
                </svg>
                Publish
              </button>
            </div>
          </header>

          <section className="detail-materi__stats">
            <article className="detail-stat detail-stat--blue">
              <span className="detail-stat__icon">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="38" height="38" rx="8" fill="#DBE1FF" fillOpacity="0.3" />
                  <path
                    d="M8 24V21.2C8 20.6333 8.14583 20.1125 8.4375 19.6375C8.72917 19.1625 9.11667 18.8 9.6 18.55C10.6333 18.0333 11.6833 17.6458 12.75 17.3875C13.8167 17.1292 14.9 17 16 17C17.1 17 18.1833 17.1292 19.25 17.3875C20.3167 17.6458 21.3667 18.0333 22.4 18.55C22.8833 18.8 23.2708 19.1625 23.5625 19.6375C23.8542 20.1125 24 20.6333 24 21.2V24H8ZM26 24V21C26 20.2667 25.7958 19.5625 25.3875 18.8875C24.9792 18.2125 24.4 17.6333 23.65 17.15C24.5 17.25 25.3 17.4208 26.05 17.6625C26.8 17.9042 27.5 18.2 28.15 18.55C28.75 18.8833 29.2083 19.2542 29.525 19.6625C29.8417 20.0708 30 20.5167 30 21V24H26ZM16 16C14.9 16 13.9583 15.6083 13.175 14.825C12.3917 14.0417 12 13.1 12 12C12 10.9 12.3917 9.95833 13.175 9.175C13.9583 8.39167 14.9 8 16 8C17.1 8 18.0417 8.39167 18.825 9.175C19.6083 9.95833 20 10.9 20 12C20 13.1 19.6083 14.0417 18.825 14.825C18.0417 15.6083 17.1 16 16 16ZM26 12C26 13.1 25.6083 14.0417 24.825 14.825C24.0417 15.6083 23.1 16 22 16C21.8167 16 21.5833 15.9792 21.3 15.9375C21.0167 15.8958 20.7833 15.85 20.6 15.8C21.05 15.2667 21.3958 14.675 21.6375 14.025C21.8792 13.375 22 12.7 22 12C22 11.3 21.8792 10.625 21.6375 9.975C21.3958 9.325 21.05 8.73333 20.6 8.2C20.8333 8.11667 21.0667 8.0625 21.3 8.0375C21.5333 8.0125 21.7667 8 22 8C23.1 8 24.0417 8.39167 24.825 9.175C25.6083 9.95833 26 10.9 26 12ZM10 22H22V21.2C22 21.0167 21.9542 20.85 21.8625 20.7C21.7708 20.55 21.65 20.4333 21.5 20.35C20.6 19.9 19.6917 19.5625 18.775 19.3375C17.8583 19.1125 16.9333 19 16 19C15.0667 19 14.1417 19.1125 13.225 19.3375C12.3083 19.5625 11.4 19.9 10.5 20.35C10.35 20.4333 10.2292 20.55 10.1375 20.7C10.0458 20.85 10 21.0167 10 21.2V22ZM16 14C16.55 14 17.0208 13.8042 17.4125 13.4125C17.8042 13.0208 18 12.55 18 12C18 11.45 17.8042 10.9792 17.4125 10.5875C17.0208 10.1958 16.55 10 16 10C15.45 10 14.9792 10.1958 14.5875 10.5875C14.1958 10.9792 14 11.45 14 12C14 12.55 14.1958 13.0208 14.5875 13.4125C14.9792 13.8042 15.45 14 16 14Z"
                    fill="#004AC6"
                  />
                </svg>
              </span>
              <p className="detail-stat__label">Total Siswa</p>
              <p className="detail-stat__value">1,240</p>
              <div className="detail-stat__bar detail-stat__bar--blue" />
            </article>

            <article className="detail-stat detail-stat--green">
              <span className="detail-stat__icon">
                <svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="42" rx="8" fill="#D1FAE5" fillOpacity="0.5" />
                  <path
                    d="M16.6 22.6L23.65 15.55L22.25 14.15L16.6 19.8L13.75 16.95L12.35 18.35L16.6 22.6ZM18 28C16.6167 28 15.3167 27.7375 14.1 27.2125C12.8833 26.6875 11.825 25.975 10.925 25.075C10.025 24.175 9.3125 23.1167 8.7875 21.9C8.2625 20.6833 8 19.3833 8 18C8 16.6167 8.2625 15.3167 8.7875 14.1C9.3125 12.8833 10.025 11.825 10.925 10.925C11.825 10.025 12.8833 9.3125 14.1 8.7875C15.3167 8.2625 16.6167 8 18 8C19.3833 8 20.6833 8.2625 21.9 8.7875C23.1167 9.3125 24.175 10.025 25.075 10.925C25.975 11.825 26.6875 12.8833 27.2125 14.1C27.7375 15.3167 28 16.6167 28 18C28 19.3833 27.7375 20.6833 27.2125 21.9C26.6875 23.1167 25.975 24.175 25.075 25.075C24.175 25.975 23.1167 26.6875 21.9 27.2125C20.6833 27.7375 19.3833 28 18 28ZM18 26C20.2333 26 22.125 25.225 23.675 23.675C25.225 22.125 26 20.2333 26 18C26 15.7667 25.225 13.875 23.675 12.325C22.125 10.775 20.2333 10 18 10C15.7667 10 13.875 10.775 12.325 12.325C10.775 13.875 10 15.7667 10 18C10 20.2333 10.775 22.125 12.325 23.675C13.875 25.225 15.7667 26 18 26Z"
                    fill="#10B981"
                  />
                </svg>
              </span>
              <p className="detail-stat__label">Tingkat Penyelesaian</p>
              <div className="detail-stat__value-row">
                <p className="detail-stat__value">68%</p>
                <span className="detail-stat__trend">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.933333 8L0 7.06667L4.93333 2.1L7.6 4.76667L11.0667 1.33333H9.33333V0H13.3333V4H12V2.26667L7.6 6.66667L4.93333 4L0.933333 8Z"
                      fill="#10B981"
                    />
                  </svg>
                  +5%
                </span>
              </div>
              <div className="detail-stat__bar detail-stat__bar--green" />
            </article>

            <article className="detail-stat detail-stat--purple">
              <span className="detail-stat__icon">
                <svg width="32" height="43" viewBox="0 0 32 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="43" rx="8" fill="#EADDFF" fillOpacity="0.5" />
                  <path
                    d="M13.675 19.7L14.55 16.85L12.25 15H15.1L16 12.2L16.9 15H19.75L17.425 16.85L18.3 19.7L16 17.925L13.675 19.7ZM10 29V21.275C9.36667 20.575 8.875 19.775 8.525 18.875C8.175 17.975 8 17.0167 8 16C8 13.7667 8.775 11.875 10.325 10.325C11.875 8.775 13.7667 8 16 8C18.2333 8 20.125 8.775 21.675 10.325C23.225 11.875 24 13.7667 24 16C24 17.0167 23.825 17.975 23.475 18.875C23.125 19.775 22.6333 20.575 22 21.275V29L16 27L10 29ZM16 22C17.6667 22 19.0833 21.4167 20.25 20.25C21.4167 19.0833 22 17.6667 22 16C22 14.3333 21.4167 12.9167 20.25 11.75C19.0833 10.5833 17.6667 10 16 10C14.3333 10 12.9167 10.5833 11.75 11.75C10.5833 12.9167 10 14.3333 10 16C10 17.6667 10.5833 19.0833 11.75 20.25C12.9167 21.4167 14.3333 22 16 22ZM12 26.025L16 25L20 26.025V22.925C19.4167 23.2583 18.7875 23.5208 18.1125 23.7125C17.4375 23.9042 16.7333 24 16 24C15.2667 24 14.5625 23.9042 13.8875 23.7125C13.2125 23.5208 12.5833 23.2583 12 22.925V26.025Z"
                    fill="#6A1EDB"
                  />
                </svg>
              </span>
              <p className="detail-stat__label">Rata-rata Skor Kuis</p>
              <p className="detail-stat__value">
                82<span className="detail-stat__value-suffix">/100</span>
              </p>
              <div className="detail-stat__bar detail-stat__bar--purple" />
            </article>

            <article className="detail-stat detail-stat--yellow">
              <span className="detail-stat__icon">
                <svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="41" rx="8" fill="#FFE083" fillOpacity="0.4" />
                  <path
                    d="M14.85 22.825L18 20.925L21.15 22.85L20.325 19.25L23.1 16.85L19.45 16.525L18 13.125L16.55 16.5L12.9 16.825L15.675 19.25L14.85 22.825ZM11.825 27L13.45 19.975L8 15.25L15.2 14.625L18 8L20.8 14.625L28 15.25L22.55 19.975L24.175 27L18 23.275L11.825 27Z"
                    fill="#FED01B"
                  />
                </svg>
              </span>
              <p className="detail-stat__label">Kepuasan</p>
              <p className="detail-stat__value">
                4.8<span className="detail-stat__value-suffix">/5</span>
              </p>
              <div className="detail-stat__bar detail-stat__bar--yellow" />
            </article>
          </section>

          <div className="detail-materi__body">
            <div className="detail-materi__main">
              <section className="detail-panel">
                <div className="detail-panel__head">
                  <h2>Modul Kurikulum</h2>
                  <button type="button" className="detail-panel__add-btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.25 8.75H6.41667V6.41667H8.75V5.25H6.41667V2.91667H5.25V5.25H2.91667V6.41667H5.25V8.75ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667Z"
                        fill="#004AC6"
                      />
                    </svg>
                    Tambah Modul
                  </button>
                </div>

                <div className="detail-module-list">
                  {modules.map((module) => (
                    <div className="detail-module" key={module.key}>
                      <span
                        className={`detail-module__index${
                          module.status === "draft" ? " detail-module__index--draft" : ""
                        }`}
                      >
                        {module.index}
                      </span>
                      <div className="detail-module__info">
                        <h3>{module.title}</h3>
                        <div className="detail-module__meta">
                          <span>
                            <ClockIcon /> {module.duration}
                          </span>
                          <span>
                            <QuizIcon /> {module.quizCount}
                          </span>
                        </div>
                      </div>
                      <div className="detail-module__actions">
                        <span className={`detail-module__status detail-module__status--${module.status}`}>
                          {module.statusLabel}
                        </span>
                        <button type="button" className="detail-module__more" aria-label="Opsi modul">
                          <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.66667 3.33333C1.20833 3.33333 0.815972 3.17014 0.489583 2.84375C0.163194 2.51736 0 2.125 0 1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0C2.125 0 2.51736 0.163194 2.84375 0.489583C3.17014 0.815972 3.33333 1.20833 3.33333 1.66667C3.33333 2.125 3.17014 2.51736 2.84375 2.84375C2.51736 3.17014 2.125 3.33333 1.66667 3.33333ZM6.66667 3.33333C6.20833 3.33333 5.81597 3.17014 5.48958 2.84375C5.16319 2.51736 5 2.125 5 1.66667C5 1.20833 5.16319 0.815972 5.48958 0.489583C5.81597 0.163194 6.20833 0 6.66667 0C7.125 0 7.51736 0.163194 7.84375 0.489583C8.17014 0.815972 8.33333 1.20833 8.33333 1.66667C8.33333 2.125 8.17014 2.51736 7.84375 2.84375C7.51736 3.17014 7.125 3.33333 6.66667 3.33333ZM11.6667 3.33333C11.2083 3.33333 10.816 3.17014 10.4896 2.84375C10.1632 2.51736 10 2.125 10 1.66667C10 1.20833 10.1632 0.815972 10.4896 0.489583C10.816 0.163194 11.2083 0 11.6667 0C12.125 0 12.5174 0.163194 12.8438 0.489583C13.1701 0.815972 13.3333 1.20833 13.3333 1.66667C13.3333 2.125 13.1701 2.51736 12.8438 2.84375C12.5174 3.17014 12.125 3.33333 11.6667 3.33333Z"
                              fill="#C3C6D7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="detail-panel">
                <div className="detail-panel__head">
                  <h2>Ulasan & Feedback Siswa</h2>
                </div>
                <div className="detail-testimonials">
                  {testimonials.map((item) => (
                    <div className="detail-testimonial" key={item.key}>
                      <div className="detail-testimonial__head">
                        <div className="detail-testimonial__author">
                          <span
                            className="detail-testimonial__avatar"
                            style={{ background: item.avatarBg, color: item.avatarColor }}
                          >
                            {item.initials}
                          </span>
                          <p>{item.name}</p>
                        </div>
                        <div className="detail-testimonial__stars">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <StarIcon key={index} filled={index < item.rating} />
                          ))}
                        </div>
                      </div>
                      <p className="detail-testimonial__text">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="detail-materi__aside">
              <section className="detail-ai-card">
                <div className="detail-ai-card__head">
                  <span className="detail-ai-card__icon">
                    <svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="35.0118" height="42" rx="8" fill="#EADDFF" />
                      <path
                        d="M11 28V23.7C10.05 22.8333 9.3125 21.8208 8.7875 20.6625C8.2625 19.5042 8 18.2833 8 17C8 14.5 8.875 12.375 10.625 10.625C12.375 8.875 14.5 8 17 8C19.0833 8 20.9292 8.6125 22.5375 9.8375C24.1458 11.0625 25.1917 12.6583 25.675 14.625L26.975 19.75C27.0583 20.0667 27 20.3542 26.8 20.6125C26.6 20.8708 26.3333 21 26 21H24V24C24 24.55 23.8042 25.0208 23.4125 25.4125C23.0208 25.8042 22.55 26 22 26H20V28H18V24H22V19H24.7L23.75 15.125C23.3667 13.6083 22.55 12.375 21.3 11.425C20.05 10.475 18.6167 10 17 10C15.0667 10 13.4167 10.675 12.05 12.025C10.6833 13.375 10 15.0167 10 16.95C10 17.95 10.2042 18.9 10.6125 19.8C11.0208 20.7 11.6 21.5 12.35 22.2L13 22.8V28H11ZM16 21H18L18.15 19.75C18.2833 19.7 18.4042 19.6417 18.5125 19.575C18.6208 19.5083 18.7167 19.4333 18.8 19.35L19.95 19.85L20.95 18.15L19.95 17.4C19.9833 17.2667 20 17.1333 20 17C20 16.8667 19.9833 16.7333 19.95 16.6L20.95 15.85L19.95 14.15L18.8 14.65C18.7167 14.5667 18.6208 14.4917 18.5125 14.425C18.4042 14.3583 18.2833 14.3 18.15 14.25L18 13H16L15.85 14.25C15.7167 14.3 15.5958 14.3583 15.4875 14.425C15.3792 14.4917 15.2833 14.5667 15.2 14.65L14.05 14.15L13.05 15.85L14.05 16.6C14.0167 16.7333 14 16.8667 14 17C14 17.1333 14.0167 17.2667 14.05 17.4L13.05 18.15L14.05 19.85L15.2 19.35C15.2833 19.4333 15.3792 19.5083 15.4875 19.575C15.5958 19.6417 15.7167 19.7 15.85 19.75L16 21ZM17 18.5C16.5833 18.5 16.2292 18.3542 15.9375 18.0625C15.6458 17.7708 15.5 17.4167 15.5 17C15.5 16.5833 15.6458 16.2292 15.9375 15.9375C16.2292 15.6458 16.5833 15.5 17 15.5C17.4167 15.5 17.7708 15.6458 18.0625 15.9375C18.3542 16.2292 18.5 16.5833 18.5 17C18.5 17.4167 18.3542 17.7708 18.0625 18.0625C17.7708 18.3542 17.4167 18.5 17 18.5Z"
                        fill="#6A1EDB"
                      />
                    </svg>
                  </span>
                  <h2>Wawasan Tutor AI</h2>
                </div>
                <p className="detail-ai-card__text">
                  Analisis menunjukkan 42% siswa kesulitan khususnya dengan{" "}
                  <strong>Aturan Rantai (Chain Rule)</strong> pada Modul 2.
                </p>
                <div className="detail-ai-card__suggestion">
                  <p className="detail-ai-card__suggestion-title">Tindakan yang Disarankan:</p>
                  <p className="detail-ai-card__suggestion-text">
                    Buat 3 soal latihan tambahan yang berfokus pada fungsi komposisi.
                  </p>
                </div>
                <button type="button" className="detail-ai-card__cta">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.5 6L12.5625 3.9375L10.5 3L12.5625 2.0625L13.5 0L14.4375 2.0625L16.5 3L14.4375 3.9375L13.5 6ZM13.5 16.5L12.5625 14.4375L10.5 13.5L12.5625 12.5625L13.5 10.5L14.4375 12.5625L16.5 13.5L14.4375 14.4375L13.5 16.5ZM6 14.25L4.125 10.125L0 8.25L4.125 6.375L6 2.25L7.875 6.375L12 8.25L7.875 10.125L6 14.25ZM6 10.6125L6.75 9L8.3625 8.25L6.75 7.5L6 5.8875L5.25 7.5L3.6375 8.25L5.25 9L6 10.6125Z"
                      fill="#6A1EDB"
                    />
                  </svg>
                  Buat Konten
                </button>
              </section>

              <section className="detail-panel detail-students">
                <div className="detail-panel__head">
                  <h2>Siswa Berprestasi</h2>
                  <button type="button" className="detail-panel__more" aria-label="Opsi lainnya">
                    <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.66667 3.33333C1.20833 3.33333 0.815972 3.17014 0.489583 2.84375C0.163194 2.51736 0 2.125 0 1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0C2.125 0 2.51736 0.163194 2.84375 0.489583C3.17014 0.815972 3.33333 1.20833 3.33333 1.66667C3.33333 2.125 3.17014 2.51736 2.84375 2.84375C2.51736 3.17014 2.125 3.33333 1.66667 3.33333ZM6.66667 3.33333C6.20833 3.33333 5.81597 3.17014 5.48958 2.84375C5.16319 2.51736 5 2.125 5 1.66667C5 1.20833 5.16319 0.815972 5.48958 0.489583C5.81597 0.163194 6.20833 0 6.66667 0C7.125 0 7.51736 0.163194 7.84375 0.489583C8.17014 0.815972 8.33333 1.20833 8.33333 1.66667C8.33333 2.125 8.17014 2.51736 7.84375 2.84375C7.51736 3.17014 7.125 3.33333 6.66667 3.33333ZM11.6667 3.33333C11.2083 3.33333 10.816 3.17014 10.4896 2.84375C10.1632 2.51736 10 2.125 10 1.66667C10 1.20833 10.1632 0.815972 10.4896 0.489583C10.816 0.163194 11.2083 0 11.6667 0C12.125 0 12.5174 0.163194 12.8438 0.489583C13.1701 0.815972 13.3333 1.20833 13.3333 1.66667C13.3333 2.125 13.1701 2.51736 12.8438 2.84375C12.5174 3.17014 12.125 3.33333 11.6667 3.33333Z"
                        fill="#C3C6D7"
                      />
                    </svg>
                  </button>
                </div>
                <div className="detail-students__list">
                  {topStudents.map((student) => (
                    <div className="detail-students__row" key={student.key}>
                      <div className="detail-students__identity">
                        <span
                          className="detail-students__avatar"
                          style={{ background: student.avatarBg, color: student.avatarColor }}
                        >
                          {student.initials}
                        </span>
                        <p>{student.name}</p>
                      </div>
                      <span className="detail-students__score">{student.score}</span>
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

export default DetailMateri;
