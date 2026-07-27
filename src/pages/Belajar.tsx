import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import AppFooter from "../components/AppFooter";
import "../styles/siswa/Belajar.css";

type Subject = {
  key: string;
  name: string;
  percent: number;
  active?: boolean;
  gradient: string;
  fillGradient: string;
  icon: ReactNode;
};

const subjects: Subject[] = [
  {
    key: "ipa",
    name: "IPA",
    percent: 75,
    active: true,
    gradient: "linear-gradient(135deg, #2563EB 0%, #004AC6 50%, #8B5CF6 100%)",
    fillGradient: "linear-gradient(90deg, #FFF 0%, #DBE1FF 100%)",
    icon: (
      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 19.95V17.85H5.25V15.75C3.7975 15.75 2.55937 15.2381 1.53562 14.2144C0.511875 13.1906 0 11.9525 0 10.5C0 9.5025 0.25375 8.58375 0.76125 7.74375C1.26875 6.90375 1.96875 6.265 2.86125 5.8275C2.79125 6.2125 2.80437 6.58875 2.90062 6.95625C2.99687 7.32375 3.15 7.67375 3.36 8.00625C2.9575 8.28625 2.64687 8.645 2.42812 9.0825C2.20937 9.52 2.1 9.9925 2.1 10.5C2.1 11.375 2.40625 12.1187 3.01875 12.7312C3.63125 13.3437 4.375 13.65 5.25 13.65H13.65V15.75H8.4V17.85H14.7V19.95H0ZM9.45 10.605L9.135 9.6075L8.1375 9.975L7.6125 8.58375C7.9625 8.30375 8.23375 7.96687 8.42625 7.57312C8.61875 7.17937 8.715 6.755 8.715 6.3C8.715 5.4775 8.42625 4.78187 7.84875 4.21312C7.27125 3.64437 6.5625 3.36 5.7225 3.36L5.25 2.0475L6.2475 1.68L5.88 0.735L7.875 0L8.19 0.9975L9.1875 0.63L12.075 8.505L11.0775 8.8725L11.445 9.87L9.45 10.605ZM5.775 8.19C5.25 8.19 4.80375 8.00625 4.43625 7.63875C4.06875 7.27125 3.885 6.825 3.885 6.3C3.885 5.775 4.06875 5.32875 4.43625 4.96125C4.80375 4.59375 5.25 4.41 5.775 4.41C6.3 4.41 6.74625 4.59375 7.11375 4.96125C7.48125 5.32875 7.665 5.775 7.665 6.3C7.665 6.825 7.48125 7.27125 7.11375 7.63875C6.74625 8.00625 6.3 8.19 5.775 8.19Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    key: "matematika",
    name: "Matematika",
    percent: 50,
    gradient: "linear-gradient(135deg, #8343F4 0%, #6A1EDB 50%, #8B5CF6 100%)",
    fillGradient: "linear-gradient(90deg, #FFE083 0%, #FFF 100%)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 15H6.5V13H8.5V11.5H6.5V9.5H5V11.5H3V13H5V15ZM10 14.25H15V12.75H10V14.25ZM10 11.75H15V10.25H10V11.75ZM11.1 7.95L12.5 6.55L13.9 7.95L14.95 6.9L13.55 5.45L14.95 4.05L13.9 3L12.5 4.4L11.1 3L10.05 4.05L11.45 5.45L10.05 6.9L11.1 7.95ZM3.25 6.2H8.25V4.7H3.25V6.2ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16ZM2 2V16V2Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    key: "bahasa",
    name: "Bahasa Indonesia",
    percent: 90,
    gradient: "linear-gradient(135deg, #FB923C 0%, #FED01B 50%, #FFE083 100%)",
    fillGradient: "linear-gradient(90deg, #FFF 0%, #FED01B 100%)",
    icon: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 5.9V4.2C13.55 3.96667 14.1125 3.79167 14.6875 3.675C15.2625 3.55833 15.8667 3.5 16.5 3.5C16.9333 3.5 17.3583 3.53333 17.775 3.6C18.1917 3.66667 18.6 3.75 19 3.85V5.45C18.6 5.3 18.1958 5.1875 17.7875 5.1125C17.3792 5.0375 16.95 5 16.5 5C15.8667 5 15.2583 5.07917 14.675 5.2375C14.0917 5.39583 13.5333 5.61667 13 5.9ZM13 11.4V9.7C13.55 9.46667 14.1125 9.29167 14.6875 9.175C15.2625 9.05833 15.8667 9 16.5 9C16.9333 9 17.3583 9.03333 17.775 9.1C18.1917 9.16667 18.6 9.25 19 9.35V10.95C18.6 10.8 18.1958 10.6875 17.7875 10.6125C17.3792 10.5375 16.95 10.5 16.5 10.5C15.8667 10.5 15.2583 10.575 14.675 10.725C14.0917 10.875 13.5333 11.1 13 11.4ZM13 8.65V6.95C13.55 6.71667 14.1125 6.54167 14.6875 6.425C15.2625 6.30833 15.8667 6.25 16.5 6.25C16.9333 6.25 17.3583 6.28333 17.775 6.35C18.1917 6.41667 18.6 6.5 19 6.6V8.2C18.6 8.05 18.1958 7.9375 17.7875 7.8625C17.3792 7.7875 16.95 7.75 16.5 7.75C15.8667 7.75 15.2583 7.82917 14.675 7.9875C14.0917 8.14583 13.5333 8.36667 13 8.65ZM5.5 12C6.28333 12 7.04583 12.0875 7.7875 12.2625C8.52917 12.4375 9.26667 12.7 10 13.05V3.2C9.31667 2.8 8.59167 2.5 7.825 2.3C7.05833 2.1 6.28333 2 5.5 2C4.9 2 4.30417 2.05833 3.7125 2.175C3.12083 2.29167 2.55 2.46667 2 2.7V12.6C2.58333 12.4 3.1625 12.25 3.7375 12.15C4.3125 12.05 4.9 12 5.5 12ZM11 16C10.2 15.3667 9.33333 14.875 8.4 14.525C7.46667 14.175 6.5 14 5.5 14C4.8 14 4.1125 14.0917 3.4375 14.275C2.7625 14.4583 2.11667 14.7167 1.5 15.05C1.15 15.2333 0.8125 15.225 0.4875 15.025C0.1625 14.825 0 14.5333 0 14.15V2.1C0 1.91667 0.0458333 1.74167 0.1375 1.575C0.229167 1.40833 0.366667 1.28333 0.55 1.2C1.31667 0.8 2.11667 0.5 2.95 0.3C3.78333 0.1 4.63333 0 5.5 0C6.46667 0 7.4125 0.125 8.3375 0.375C9.2625 0.625 10.15 1 11 1.5C11.85 1 12.7375 0.625 13.6625 0.375C14.5875 0.125 15.5333 0 16.5 0C17.3667 0 18.2167 0.1 19.05 0.3C19.8833 0.5 20.6833 0.8 21.45 1.2C21.6333 1.28333 21.7708 1.40833 21.8625 1.575C21.9542 1.74167 22 1.91667 22 2.1V14.15C22 14.5333 21.8375 14.825 21.5125 15.025C21.1875 15.225 20.85 15.2333 20.5 15.05C19.8833 14.7167 19.2375 14.4583 18.5625 14.275C17.8875 14.0917 17.2 14 16.5 14C15.5 14 14.5333 14.175 13.6 14.525C12.6667 14.875 11.8 15.3667 11 16Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    key: "fisika",
    name: "Fisika",
    percent: 25,
    gradient: "linear-gradient(135deg, rgba(37, 99, 235, 0.8) 0%, #004AC6 50%, #8343F4 100%)",
    fillGradient: "linear-gradient(90deg, #B4C5FF 0%, #FFF 100%)",
    icon: (
      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.0285 18C1.1785 18 0.574338 17.6208 0.216005 16.8625C-0.142329 16.1042 -0.0548287 15.4 0.478505 14.75L6.0285 8V2H5.0285C4.74517 2 4.50767 1.90417 4.316 1.7125C4.12434 1.52083 4.0285 1.28333 4.0285 1C4.0285 0.716667 4.12434 0.479167 4.316 0.2875C4.50767 0.0958333 4.74517 0 5.0285 0H13.0285C13.3118 0 13.5493 0.0958333 13.741 0.2875C13.9327 0.479167 14.0285 0.716667 14.0285 1C14.0285 1.28333 13.9327 1.52083 13.741 1.7125C13.5493 1.90417 13.3118 2 13.0285 2H12.0285V8L17.5785 14.75C18.1118 15.4 18.1993 16.1042 17.841 16.8625C17.4827 17.6208 16.8785 18 16.0285 18H2.0285ZM2.0285 16H16.0285L10.0285 8.7V2H8.0285V8.7L2.0285 16Z"
          fill="white"
        />
      </svg>
    ),
  },
];

type Chapter = {
  key: string;
  number: number;
  title: string;
  status: "done" | "active";
  progress?: number;
};

const chapters: Chapter[] = [
  { key: "bab1", number: 1, title: "Sel & Jaringan", status: "done" },
  { key: "bab2", number: 2, title: "Klasifikasi Makhluk Hidup", status: "done" },
  { key: "bab3", number: 3, title: "Ekosistem", status: "done" },
  { key: "bab4", number: 4, title: "Sistem Biologi Hewan", status: "active", progress: 76 },
];

const materials = [
  {
    key: "quiz",
    title: "Mini Quiz: Anatomi Mamalia",
    meta: "Estimasi 5 menit",
    tone: "yellow",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 13C12.2833 13 12.5292 12.8958 12.7375 12.6875C12.9458 12.4792 13.05 12.2333 13.05 11.95C13.05 11.6667 12.9458 11.4208 12.7375 11.2125C12.5292 11.0042 12.2833 10.9 12 10.9C11.7167 10.9 11.4708 11.0042 11.2625 11.2125C11.0542 11.4208 10.95 11.6667 10.95 11.95C10.95 12.2333 11.0542 12.4792 11.2625 12.6875C11.4708 12.8958 11.7167 13 12 13ZM11.25 9.8H12.75C12.75 9.31667 12.8 8.9625 12.9 8.7375C13 8.5125 13.2333 8.21667 13.6 7.85C14.1 7.35 14.4333 6.94583 14.6 6.6375C14.7667 6.32917 14.85 5.96667 14.85 5.55C14.85 4.8 14.5875 4.1875 14.0625 3.7125C13.5375 3.2375 12.85 3 12 3C11.3167 3 10.7208 3.19167 10.2125 3.575C9.70417 3.95833 9.35 4.46667 9.15 5.1L10.5 5.65C10.65 5.23333 10.8542 4.92083 11.1125 4.7125C11.3708 4.50417 11.6667 4.4 12 4.4C12.4 4.4 12.725 4.5125 12.975 4.7375C13.225 4.9625 13.35 5.26667 13.35 5.65C13.35 5.88333 13.2833 6.10417 13.15 6.3125C13.0167 6.52083 12.7833 6.78333 12.45 7.1C11.9 7.58333 11.5625 7.9625 11.4375 8.2375C11.3125 8.5125 11.25 9.03333 11.25 9.8ZM6 16C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H6ZM6 14H18V2H6V14ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4H2V18H16V20H2ZM6 2V14V2Z"
          fill="#735C00"
        />
      </svg>
    ),
  },
  {
    key: "ringkasan",
    title: "Ringkasan: Jaringan Hewan",
    meta: "PDF Document",
    tone: "purple",
    icon: (
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 16H12V14H4V16ZM4 12H12V10H4V12ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 7V2H2V18H14V7H9ZM2 2V7V2V7V18V2Z"
          fill="#8B5CF6"
        />
      </svg>
    ),
  },
];

function Belajar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const goToMateri = () => navigate("/belajar/materi");

  return (
    <div className="dashboard-page">
      <AppSidebar active="Belajar" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main belajar-main">
        <AppTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="belajar-content">
          <div className="belajar-blobs" aria-hidden="true">
            <span className="belajar-blob belajar-blob--blue" />
            <span className="belajar-blob belajar-blob--purple" />
            <span className="belajar-blob belajar-blob--yellow" />
          </div>

          <section className="belajar-hero">
            <div>
              <h1 className="belajar-hero__title">
                Siap belajar, <span>Student</span>?
              </h1>
              <p className="belajar-hero__subtitle">
                Kurikulum belajarmu menanti. Lanjutkan quest hari ini untuk meraih skor TKA maksimal.
              </p>
            </div>
            <button type="button" className="belajar-btn-primary" onClick={goToMateri}>
              <span className="belajar-btn-primary__icon">
                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 14V0L11 7L0 14ZM2 10.35L7.25 7L2 3.65V10.35Z" fill="white" />
                </svg>
              </span>
              Lanjutkan Materi Terakhir
            </button>
          </section>

          <section className="belajar-subjects">
            <h2 className="belajar-section-title">
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.5 9L9 0L14.5 9H3.5ZM14.5 20C13.25 20 12.1875 19.5625 11.3125 18.6875C10.4375 17.8125 10 16.75 10 15.5C10 14.25 10.4375 13.1875 11.3125 12.3125C12.1875 11.4375 13.25 11 14.5 11C15.75 11 16.8125 11.4375 17.6875 12.3125C18.5625 13.1875 19 14.25 19 15.5C19 16.75 18.5625 17.8125 17.6875 18.6875C16.8125 19.5625 15.75 20 14.5 20ZM0 19.5V11.5H8V19.5H0ZM14.5 18C15.2 18 15.7917 17.7583 16.275 17.275C16.7583 16.7917 17 16.2 17 15.5C17 14.8 16.7583 14.2083 16.275 13.725C15.7917 13.2417 15.2 13 14.5 13C13.8 13 13.2083 13.2417 12.725 13.725C12.2417 14.2083 12 14.8 12 15.5C12 16.2 12.2417 16.7917 12.725 17.275C13.2083 17.7583 13.8 18 14.5 18ZM2 17.5H6V13.5H2V17.5ZM7.05 7H10.95L9 3.85L7.05 7Z"
                  fill="#2563EB"
                />
              </svg>
              Mata Pelajaran
            </h2>

            <div className="belajar-subject-grid">
              {subjects.map((subject) => (
                <article
                  key={subject.key}
                  className={`belajar-subject-card${subject.active ? " belajar-subject-card--active" : ""}`}
                  style={{ background: subject.gradient }}
                >
                  <span className="belajar-subject-card__icon">{subject.icon}</span>
                  <p className="belajar-subject-card__name">{subject.name}</p>
                  <div className="belajar-subject-card__progress">
                    <div className="belajar-subject-card__progress-row">
                      <span>PROGRESS</span>
                      <strong>{subject.percent}%</strong>
                    </div>
                    <div className="belajar-subject-card__track">
                      <div
                        className="belajar-subject-card__fill"
                        style={{ width: `${subject.percent}%`, background: subject.fillGradient }}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="belajar-layout">
            <section className="belajar-chapters">
              <div className="belajar-chapters__header">
                <h2 className="belajar-section-title">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 15V13H18V15H6ZM6 9V7H18V9H6ZM6 3V1H18V3H6ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z"
                      fill="#2563EB"
                    />
                  </svg>
                  Daftar Bab: IPA
                </h2>
                <span className="belajar-pill">12 Bab Total</span>
              </div>

              <div className="belajar-chapter-list">
                {chapters.map((chapter) =>
                  chapter.status === "done" ? (
                    <div
                      className="belajar-chapter belajar-chapter--done"
                      key={chapter.key}
                      role="button"
                      tabIndex={0}
                      onClick={goToMateri}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") goToMateri();
                      }}
                    >
                      <div className="belajar-chapter__left">
                        <span className="belajar-chapter__check">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.0833 0 12.1083 0.158333 13.075 0.475C14.0417 0.791667 14.9333 1.23333 15.75 1.8L14.3 3.275C13.6667 2.875 12.9917 2.5625 12.275 2.3375C11.5583 2.1125 10.8 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 12.2167 2.77917 14.1042 4.3375 15.6625C5.89583 17.2208 7.78333 18 10 18C12.2167 18 14.1042 17.2208 15.6625 15.6625C17.2208 14.1042 18 12.2167 18 10C18 9.7 17.9833 9.4 17.95 9.1C17.9167 8.8 17.8667 8.50833 17.8 8.225L19.425 6.6C19.6083 7.13333 19.75 7.68333 19.85 8.25C19.95 8.81667 20 9.4 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM8.6 14.6L4.35 10.35L5.75 8.95L8.6 11.8L18.6 1.775L20 3.175L8.6 14.6Z"
                              fill="#10B981"
                            />
                          </svg>
                        </span>
                        <div>
                          <p className="belajar-chapter__eyebrow">BAB {chapter.number}</p>
                          <p className="belajar-chapter__title">{chapter.title}</p>
                        </div>
                      </div>
                      <div className="belajar-chapter__right">
                        <span className="belajar-status-pill belajar-status-pill--done">Selesai</span>
                        <button type="button" className="belajar-chapter__replay" aria-label="Ulangi bab">
                          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M5.83333 15.375C4.15278 15.1667 2.76042 14.434 1.65625 13.1771C0.552083 11.9201 0 10.4444 0 8.75C0 7.83333 0.180556 6.95486 0.541667 6.11458C0.902778 5.27431 1.41667 4.54167 2.08333 3.91667L3.27083 5.10417C2.74306 5.57639 2.34375 6.125 2.07292 6.75C1.80208 7.375 1.66667 8.04167 1.66667 8.75C1.66667 9.97222 2.05556 11.0521 2.83333 11.9896C3.61111 12.9271 4.61111 13.5 5.83333 13.7083V15.375ZM7.5 15.375V13.7083C8.70833 13.4861 9.70486 12.9097 10.4896 11.9792C11.2743 11.0486 11.6667 9.97222 11.6667 8.75C11.6667 7.36111 11.1806 6.18056 10.2083 5.20833C9.23611 4.23611 8.05556 3.75 6.66667 3.75H6.60417L7.52083 4.66667L6.35417 5.83333L3.4375 2.91667L6.35417 0L7.52083 1.16667L6.60417 2.08333H6.66667C8.52778 2.08333 10.1042 2.72917 11.3958 4.02083C12.6875 5.3125 13.3333 6.88889 13.3333 8.75C13.3333 10.4306 12.7812 11.8993 11.6771 13.1562C10.5729 14.4132 9.18056 15.1528 7.5 15.375Z"
                              fill="#434655"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="belajar-chapter belajar-chapter--active"
                      key={chapter.key}
                      role="button"
                      tabIndex={0}
                      onClick={goToMateri}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") goToMateri();
                      }}
                    >
                      <div className="belajar-chapter__left">
                        <span className="belajar-chapter__play">
                          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 17.5V0L13.75 8.75L0 17.5Z" fill="white" />
                          </svg>
                        </span>
                        <div>
                          <p className="belajar-chapter__eyebrow belajar-chapter__eyebrow--active">
                            BAB {chapter.number}
                          </p>
                          <p className="belajar-chapter__title belajar-chapter__title--lg">{chapter.title}</p>
                          <p className="belajar-chapter__status">
                            <span className="belajar-chapter__status-dot" />
                            Sedang Berjalan
                          </p>
                        </div>
                      </div>
                      <div className="belajar-chapter__right belajar-chapter__right--active">
                        <div className="belajar-chapter__progress">
                          <div className="belajar-chapter__progress-row">
                            <span>Progress</span>
                            <strong>{chapter.progress}%</strong>
                          </div>
                          <div className="belajar-chapter__track">
                            <div
                              className="belajar-chapter__track-fill"
                              style={{ width: `${chapter.progress}%` }}
                            />
                          </div>
                        </div>
                        <button type="button" className="belajar-btn-solid">
                          Lanjutkan
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>

            <aside className="belajar-side">
              <div className="belajar-progress-card">
                <div className="belajar-progress-ring">
                  <svg viewBox="0 0 160 160" className="belajar-progress-ring__svg">
                    <circle cx="80" cy="80" r="70" stroke="#E0E3E5" strokeWidth="18" fill="none" />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="url(#belajarProgressGradient)"
                      strokeWidth="18"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 70}
                      strokeDashoffset={2 * Math.PI * 70 * (1 - 0.75)}
                      transform="rotate(-90 80 80)"
                    />
                    <defs>
                      <linearGradient id="belajarProgressGradient" x1="80" y1="0" x2="80" y2="160">
                        <stop stopColor="#2563EB" />
                        <stop offset="1" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="belajar-progress-ring__value">75%</span>
                </div>
                <h3 className="belajar-progress-card__title">Progress IPA</h3>
                <p className="belajar-progress-card__desc">
                  Kamu telah menyelesaikan <strong>3 dari 12 Bab</strong>. Teruskan perjuanganmu untuk
                  menguasai IPA!
                </p>
                <div className="belajar-progress-card__stats">
                  <div className="belajar-stat">
                    <p className="belajar-stat__label">XP DIPEROLEH</p>
                    <p className="belajar-stat__value belajar-stat__value--purple">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.5 12L7.5 9.7125L10.5 12L9.375 8.2875L12.375 6.15H8.7L7.5 2.25L6.3 6.15H2.625L5.625 8.2875L4.5 12ZM7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15ZM7.5 13.5C9.175 13.5 10.5938 12.9188 11.7563 11.7563C12.9188 10.5938 13.5 9.175 13.5 7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5Z"
                          fill="#8B5CF6"
                        />
                      </svg>
                      1,250
                    </p>
                  </div>
                  <div className="belajar-stat">
                    <p className="belajar-stat__label">WAKTU BELAJAR</p>
                    <p className="belajar-stat__value belajar-stat__value--blue">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.5 1.5V0H9V1.5H4.5ZM6 9.75H7.5V5.25H6V9.75ZM6.75 15.75C5.825 15.75 4.95312 15.5719 4.13438 15.2156C3.31563 14.8594 2.6 14.375 1.9875 13.7625C1.375 13.15 0.890625 12.4344 0.534375 11.6156C0.178125 10.7969 0 9.925 0 9C0 8.075 0.178125 7.20312 0.534375 6.38438C0.890625 5.56563 1.375 4.85 1.9875 4.2375C2.6 3.625 3.31563 3.14062 4.13438 2.78437C4.95312 2.42812 5.825 2.25 6.75 2.25C7.525 2.25 8.26875 2.375 8.98125 2.625C9.69375 2.875 10.3625 3.2375 10.9875 3.7125L12.0375 2.6625L13.0875 3.7125L12.0375 4.7625C12.5125 5.3875 12.875 6.05625 13.125 6.76875C13.375 7.48125 13.5 8.225 13.5 9C13.5 9.925 13.3219 10.7969 12.9656 11.6156C12.6094 12.4344 12.125 13.15 11.5125 13.7625C10.9 14.375 10.1844 14.8594 9.36563 15.2156C8.54688 15.5719 7.675 15.75 6.75 15.75ZM6.75 14.25C8.2 14.25 9.4375 13.7375 10.4625 12.7125C11.4875 11.6875 12 10.45 12 9C12 7.55 11.4875 6.3125 10.4625 5.2875C9.4375 4.2625 8.2 3.75 6.75 3.75C5.3 3.75 4.0625 4.2625 3.0375 5.2875C2.0125 6.3125 1.5 7.55 1.5 9C1.5 10.45 2.0125 11.6875 3.0375 12.7125C4.0625 13.7375 5.3 14.25 6.75 14.25Z"
                          fill="#2563EB"
                        />
                      </svg>
                      14j 30m
                    </p>
                  </div>
                </div>
              </div>

              <div className="belajar-mission-card">
                <div className="belajar-mission-card__header">
                  <span className="belajar-mission-card__icon">
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.5 10L19.875 8.625L18.5 8L19.875 7.375L20.5 6L21.125 7.375L22.5 8L21.125 8.625L20.5 10ZM17.5 6L16.55 3.95L14.5 3L16.55 2.05L17.5 0L18.45 2.05L20.5 3L18.45 3.95L17.5 6ZM7.5 22C6.95 22 6.47917 21.8042 6.0875 21.4125C5.69583 21.0208 5.5 20.55 5.5 20H9.5C9.5 20.55 9.30417 21.0208 8.9125 21.4125C8.52083 21.8042 8.05 22 7.5 22ZM3.5 19V17H11.5V19H3.5ZM3.75 16C2.6 15.3167 1.6875 14.4 1.0125 13.25C0.3375 12.1 0 10.85 0 9.5C0 7.41667 0.729167 5.64583 2.1875 4.1875C3.64583 2.72917 5.41667 2 7.5 2C9.58333 2 11.3542 2.72917 12.8125 4.1875C14.2708 5.64583 15 7.41667 15 9.5C15 10.85 14.6625 12.1 13.9875 13.25C13.3125 14.4 12.4 15.3167 11.25 16H3.75Z"
                        fill="#735C00"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="belajar-mission-card__title">Misi Harian</h3>
                    <p className="belajar-mission-card__desc">
                      Selesaikan Bab 4 hari ini untuk bonus XP tambahan!
                    </p>
                  </div>
                </div>
                <button type="button" className="belajar-mission-card__reward">
                  <span>+500 XP Reward</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10208 5.25H0V4.08333H7.10208L3.83542 0.816667L4.66667 0L9.33333 4.66667L4.66667 9.33333L3.83542 8.51667L7.10208 5.25Z" fill="#735C00" />
                  </svg>
                </button>
              </div>
            </aside>
          </div>

          <section className="belajar-materials">
            <h2 className="belajar-section-title">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 19.5C10.2 18.8667 9.33333 18.375 8.4 18.025C7.46667 17.675 6.5 17.5 5.5 17.5C4.8 17.5 4.1125 17.5917 3.4375 17.775C2.7625 17.9583 2.11667 18.2167 1.5 18.55C1.15 18.7333 0.8125 18.725 0.4875 18.525C0.1625 18.325 0 18.0333 0 17.65V5.6C0 5.41667 0.0458333 5.24167 0.1375 5.075C0.229167 4.90833 0.366667 4.78333 0.55 4.7C1.31667 4.3 2.11667 4 2.95 3.8C3.78333 3.6 4.63333 3.5 5.5 3.5C6.46667 3.5 7.4125 3.625 8.3375 3.875C9.2625 4.125 10.15 4.5 11 5V17.1C11.85 16.5667 12.7417 16.1667 13.675 15.9C14.6083 15.6333 15.55 15.5 16.5 15.5C17.1 15.5 17.6875 15.55 18.2625 15.65C18.8375 15.75 19.4167 15.9 20 16.1V4.1C20.25 4.18333 20.4958 4.27083 20.7375 4.3625C20.9792 4.45417 21.2167 4.56667 21.45 4.7C21.6333 4.78333 21.7708 4.90833 21.8625 5.075C21.9542 5.24167 22 5.41667 22 5.6V17.65C22 18.0333 21.8375 18.325 21.5125 18.525C21.1875 18.725 20.85 18.7333 20.5 18.55C19.8833 18.2167 19.2375 17.9583 18.5625 17.775C17.8875 17.5917 17.2 17.5 16.5 17.5C15.5 17.5 14.5333 17.675 13.6 18.025C12.6667 18.375 11.8 18.8667 11 19.5ZM13 14.5V5L18 0V10L13 14.5ZM9 16.125V6.225C8.45 5.99167 7.87917 5.8125 7.2875 5.6875C6.69583 5.5625 6.1 5.5 5.5 5.5C4.88333 5.5 4.28333 5.55833 3.7 5.675C3.11667 5.79167 2.55 5.96667 2 6.2V16.125C2.58333 15.9083 3.1625 15.75 3.7375 15.65C4.3125 15.55 4.9 15.5 5.5 15.5C6.1 15.5 6.6875 15.55 7.2625 15.65C7.8375 15.75 8.41667 15.9083 9 16.125Z"
                  fill="#2563EB"
                />
              </svg>
              Materi Terkait & Persiapan
            </h2>

            <div className="belajar-material-grid">
              {materials.map((material) => (
                <div className="belajar-material-card" key={material.key}>
                  <span className={`belajar-material-card__icon belajar-material-card__icon--${material.tone}`}>
                    {material.icon}
                  </span>
                  <div>
                    <p className="belajar-material-card__title">{material.title}</p>
                    <p className="belajar-material-card__meta">{material.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <AppFooter />
      </div>
    </div>
  );
}

export default Belajar;
