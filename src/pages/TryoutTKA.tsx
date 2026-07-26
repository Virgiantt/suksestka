import { useState } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import AppFooter from "../components/AppFooter";
import "./TryoutTKA.css";

const heroIllustrationSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/284d9314d836432fc8f453ad88738a75f49c5c3b?width=725";

type PackageCard = {
  key: string;
  tag: string;
  tagColor: string;
  accentColor: string;
  title: string;
  questions: string;
  duration: string;
  ctaColor: string;
  icon: ReactNode;
};

const packages: PackageCard[] = [
  {
    key: "penalaran-umum",
    tag: "TPS",
    tagColor: "#004AC6",
    accentColor: "#004AC6",
    title: "Penalaran Umum",
    questions: "30 Soal",
    duration: "45 Menit",
    ctaColor: "#2C69D0",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 15H6.5V13H8.5V11.5H6.5V9.5H5V11.5H3V13H5V15ZM10 14.25H15V12.75H10V14.25ZM10 11.75H15V10.25H10V11.75ZM11.1 7.95L12.5 6.55L13.9 7.95L14.95 6.9L13.55 5.45L14.95 4.05L13.9 3L12.5 4.4L11.1 3L10.05 4.05L11.45 5.45L10.05 6.9L11.1 7.95ZM3.25 6.2H8.25V4.7H3.25V6.2ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16ZM2 2V16V2Z"
          fill="#004AC6"
        />
      </svg>
    ),
  },
  {
    key: "bahasa-indonesia",
    tag: "Literasi",
    tagColor: "#8B5CF6",
    accentColor: "#8B5CF6",
    title: "Bahasa Indonesia",
    questions: "40 Soal",
    duration: "60 Menit",
    ctaColor: "#A27DF8",
    icon: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 5.9V4.2C13.55 3.96667 14.1125 3.79167 14.6875 3.675C15.2625 3.55833 15.8667 3.5 16.5 3.5C16.9333 3.5 17.3583 3.53333 17.775 3.6C18.1917 3.66667 18.6 3.75 19 3.85V5.45C18.6 5.3 18.1958 5.1875 17.7875 5.1125C17.3792 5.0375 16.95 5 16.5 5C15.8667 5 15.2583 5.07917 14.675 5.2375C14.0917 5.39583 13.5333 5.61667 13 5.9ZM13 11.4V9.7C13.55 9.46667 14.1125 9.29167 14.6875 9.175C15.2625 9.05833 15.8667 9 16.5 9C16.9333 9 17.3583 9.03333 17.775 9.1C18.1917 9.16667 18.6 9.25 19 9.35V10.95C18.6 10.8 18.1958 10.6875 17.7875 10.6125C17.3792 10.5375 16.95 10.5 16.5 10.5C15.8667 10.5 15.2583 10.575 14.675 10.725C14.0917 10.875 13.5333 11.1 13 11.4ZM13 8.65V6.95C13.55 6.71667 14.1125 6.54167 14.6875 6.425C15.2625 6.30833 15.8667 6.25 16.5 6.25C16.9333 6.25 17.3583 6.28333 17.775 6.35C18.1917 6.41667 18.6 6.5 19 6.6V8.2C18.6 8.05 18.1958 7.9375 17.7875 7.8625C17.3792 7.7875 16.95 7.75 16.5 7.75C15.8667 7.75 15.2583 7.82917 14.675 7.9875C14.0917 8.14583 13.5333 8.36667 13 8.65ZM5.5 12C6.28333 12 7.04583 12.0875 7.7875 12.2625C8.52917 12.4375 9.26667 12.7 10 13.05V3.2C9.31667 2.8 8.59167 2.5 7.825 2.3C7.05833 2.1 6.28333 2 5.5 2C4.9 2 4.30417 2.05833 3.7125 2.175C3.12083 2.29167 2.55 2.46667 2 2.7V12.6C2.58333 12.4 3.1625 12.25 3.7375 12.15C4.3125 12.05 4.9 12 5.5 12ZM11 16C10.2 15.3667 9.33333 14.875 8.4 14.525C7.46667 14.175 6.5 14 5.5 14C4.8 14 4.1125 14.0917 3.4375 14.275C2.7625 14.4583 2.11667 14.7167 1.5 15.05C1.15 15.2333 0.8125 15.225 0.4875 15.025C0.1625 14.825 0 14.5333 0 14.15V2.1C0 1.91667 0.0458333 1.74167 0.1375 1.575C0.229167 1.40833 0.366667 1.28333 0.55 1.2C1.31667 0.8 2.11667 0.5 2.95 0.3C3.78333 0.1 4.63333 0 5.5 0C6.46667 0 7.4125 0.125 8.3375 0.375C9.2625 0.625 10.15 1 11 1.5C11.85 1 12.7375 0.625 13.6625 0.375C14.5875 0.125 15.5333 0 16.5 0C17.3667 0 18.2167 0.1 19.05 0.3C19.8833 0.5 20.6833 0.8 21.45 1.2C21.6333 1.28333 21.7708 1.40833 21.8625 1.575C21.9542 1.74167 22 1.91667 22 2.1V14.15C22 14.5333 21.8375 14.825 21.5125 15.025C21.1875 15.225 20.85 15.2333 20.5 15.05C19.8833 14.7167 19.2375 14.4583 18.5625 14.275C17.8875 14.0917 17.2 14 16.5 14C15.5 14 14.5333 14.175 13.6 14.525C12.6667 14.875 11.8 15.3667 11 16Z"
          fill="#8B5CF6"
        />
      </svg>
    ),
  },
  {
    key: "kuantitatif",
    tag: "Matematika",
    tagColor: "#F59E0B",
    accentColor: "#F59E0B",
    title: "Pengetahuan Kuantitatif",
    questions: "25 Soal",
    duration: "40 Menit",
    ctaColor: "#F7B13C",
    icon: (
      <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 16V14L6.5 8L0 2V0H12V3H4.775L10.15 8L4.775 13H12V16H0Z" fill="#F59E0B" />
      </svg>
    ),
  },
];

type HistoryRow = {
  key: string;
  name: string;
  date: string;
  score: number;
  scoreColor: string;
};

const historyRows: HistoryRow[] = [
  { key: "mingguan-12", name: "Tryout Mingguan #12", date: "15 Okt 2023", score: 710, scoreColor: "#004AC6" },
  { key: "literasi-inggris", name: "Simulasi Literasi B.Inggris", date: "10 Okt 2023", score: 645, scoreColor: "#8B5CF6" },
  { key: "nasional-3", name: "Tryout Nasional #3", date: "01 Okt 2023", score: 680, scoreColor: "#004AC6" },
];

const scoreMax = 1000;
const scoreValue = 685;
const scoreCircumference = 2 * Math.PI * 84.48;
const scoreOffset = scoreCircumference * (1 - scoreValue / scoreMax);

function TryoutTKA() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <AppSidebar active="Tryout TKA" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main tryout-main tryout-tka-page">
        <AppTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="tryout-content">
          <section className="tryout-hero">
            <div className="tryout-hero__text">
              <h1 className="tryout-hero__title">Pusat Tryout</h1>
              <p className="tryout-hero__subtitle">
                Ukur kemampuanmu dengan simulasi ujian terstandar. Bersiaplah untuk menaklukkan TKA
                dengan percaya diri.
              </p>
              <div className="tryout-countdown">
                <span className="tryout-countdown__icon">
                  <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.5 2.5V0H15V2.5H7.5ZM10 16.25H12.5V8.75H10V16.25ZM11.25 26.25C9.70833 26.25 8.25521 25.9531 6.89062 25.3594C5.52604 24.7656 4.33333 23.9583 3.3125 22.9375C2.29167 21.9167 1.48438 20.724 0.890625 19.3594C0.296875 17.9948 0 16.5417 0 15C0 13.4583 0.296875 12.0052 0.890625 10.6406C1.48438 9.27604 2.29167 8.08333 3.3125 7.0625C4.33333 6.04167 5.52604 5.23438 6.89062 4.64062C8.25521 4.04688 9.70833 3.75 11.25 3.75C12.5417 3.75 13.7812 3.95833 14.9688 4.375C16.1562 4.79167 17.2708 5.39583 18.3125 6.1875L20.0625 4.4375L21.8125 6.1875L20.0625 7.9375C20.8542 8.97917 21.4583 10.0938 21.875 11.2812C22.2917 12.4688 22.5 13.7083 22.5 15C22.5 16.5417 22.2031 17.9948 21.6094 19.3594C21.0156 20.724 20.2083 21.9167 19.1875 22.9375C18.1667 23.9583 16.974 24.7656 15.6094 25.3594C14.2448 25.9531 12.7917 26.25 11.25 26.25ZM11.25 23.75C13.6667 23.75 15.7292 22.8958 17.4375 21.1875C19.1458 19.4792 20 17.4167 20 15C20 12.5833 19.1458 10.5208 17.4375 8.8125C15.7292 7.10417 13.6667 6.25 11.25 6.25C8.83333 6.25 6.77083 7.10417 5.0625 8.8125C3.35417 10.5208 2.5 12.5833 2.5 15C2.5 17.4167 3.35417 19.4792 5.0625 21.1875C6.77083 22.8958 8.83333 23.75 11.25 23.75Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <div>
                  <p className="tryout-countdown__label">TRYOUT NASIONAL #4</p>
                  <p className="tryout-countdown__value">12 Hari Lagi</p>
                </div>
              </div>
            </div>

            <div className="tryout-hero__media">
              <img src={heroIllustrationSrc} alt="Ilustrasi tryout" className="tryout-hero__illustration" />
              <span className="tryout-hero__badge tryout-hero__badge--a-plus">A+</span>
              <span className="tryout-hero__badge tryout-hero__badge--sparkle">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.5 10L20.9375 6.5625L17.5 5L20.9375 3.4375L22.5 0L24.0625 3.4375L27.5 5L24.0625 6.5625L22.5 10ZM22.5 27.5L20.9375 24.0625L17.5 22.5L20.9375 20.9375L22.5 17.5L24.0625 20.9375L27.5 22.5L24.0625 24.0625L22.5 27.5ZM10 23.75L6.875 16.875L0 13.75L6.875 10.625L10 3.75L13.125 10.625L20 13.75L13.125 16.875L10 23.75ZM10 17.6875L11.25 15L13.9375 13.75L11.25 12.5L10 9.8125L8.75 12.5L6.0625 13.75L8.75 15L10 17.6875Z"
                    fill="#8B5CF6"
                  />
                </svg>
              </span>
            </div>
          </section>

          <div className="tryout-grid">
            <section className="tryout-packages">
              <div className="tryout-packages__header">
                <h2 className="tryout-section-title">Pilih Paket Tryout</h2>
                <button type="button" className="tryout-see-all">
                  Lihat Semua
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z" fill="#004AC6" />
                  </svg>
                </button>
              </div>

              <div className="tryout-package-grid">
                {packages.map((pkg) => (
                  <article className="tryout-package-card" key={pkg.key}>
                    <span className="tryout-package-card__accent" style={{ background: pkg.accentColor }} />
                    <div className="tryout-package-card__header">
                      <span className="tryout-package-card__icon">{pkg.icon}</span>
                      <span className="tryout-package-card__tag" style={{ color: pkg.tagColor }}>
                        {pkg.tag}
                      </span>
                    </div>
                    <h3 className="tryout-package-card__title">{pkg.title}</h3>
                    <div className="tryout-package-card__meta">
                      <span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4.5 12C4.0875 12 3.73438 11.8531 3.44062 11.5594C3.14687 11.2656 3 10.9125 3 10.5V1.5C3 1.0875 3.14687 0.734375 3.44062 0.440625C3.73438 0.146875 4.0875 0 4.5 0H13.5C13.9125 0 14.2656 0.146875 14.5594 0.440625C14.8531 0.734375 15 1.0875 15 1.5V10.5C15 10.9125 14.8531 11.2656 14.5594 11.5594C14.2656 11.8531 13.9125 12 13.5 12H4.5ZM4.5 10.5H13.5V1.5H4.5V10.5ZM1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V3H1.5V13.5H12V15H1.5Z"
                            fill={pkg.accentColor}
                          />
                        </svg>
                        {pkg.questions}
                      </span>
                      <i />
                      <span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.975 11.025L11.025 9.975L8.25 7.2V3.75H6.75V7.8L9.975 11.025ZM7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15Z"
                            fill={pkg.accentColor}
                          />
                        </svg>
                        {pkg.duration}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="tryout-package-card__cta"
                      style={{ background: pkg.ctaColor }}
                      onClick={() => navigate("/tryout-tka/sesi")}
                    >
                      Mulai Tryout
                    </button>
                  </article>
                ))}

                <article className="tryout-package-card tryout-package-card--locked">
                  <div className="tryout-package-card__header">
                    <span className="tryout-package-card__icon tryout-package-card__icon--locked">
                      <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2 21C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V9C0 8.45 0.195833 7.97917 0.5875 7.5875C0.979167 7.19583 1.45 7 2 7H3V5C3 3.61667 3.4875 2.4375 4.4625 1.4625C5.4375 0.4875 6.61667 0 8 0C9.38333 0 10.5625 0.4875 11.5375 1.4625C12.5125 2.4375 13 3.61667 13 5V7H14C14.55 7 15.0208 7.19583 15.4125 7.5875C15.8042 7.97917 16 8.45 16 9V19C16 19.55 15.8042 20.0208 15.4125 20.4125C15.0208 20.8042 14.55 21 14 21H2ZM2 19H14V9H2V19ZM8 16C8.55 16 9.02083 15.8042 9.4125 15.4125C9.80417 15.0208 10 14.55 10 14C10 13.45 9.80417 12.9792 9.4125 12.5875C9.02083 12.1958 8.55 12 8 12C7.45 12 6.97917 12.1958 6.5875 12.5875C6.19583 12.9792 6 13.45 6 14C6 14.55 6.19583 15.0208 6.5875 15.4125C6.97917 15.8042 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7Z"
                          fill="#737686"
                        />
                      </svg>
                    </span>
                    <span className="tryout-package-card__tag tryout-package-card__tag--locked">Premium</span>
                  </div>
                  <h3 className="tryout-package-card__title tryout-package-card__title--locked">
                    Tryout Nasional #4
                  </h3>
                  <div className="tryout-package-card__locked-note">Buka kuncian untuk akses</div>
                  <button type="button" className="tryout-package-card__cta tryout-package-card__cta--upgrade">
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.25625 8.775L4.9125 6.6375L3.1875 5.25H5.325L6 3.15L6.675 5.25H8.8125L7.06875 6.6375L7.725 8.775L6 7.44375L4.25625 8.775ZM1.5 15.75V9.95625C1.025 9.43125 0.65625 8.83125 0.39375 8.15625C0.13125 7.48125 0 6.7625 0 6C0 4.325 0.58125 2.90625 1.74375 1.74375C2.90625 0.58125 4.325 0 6 0C7.675 0 9.09375 0.58125 10.2563 1.74375C11.4188 2.90625 12 4.325 12 6C12 6.7625 11.8687 7.48125 11.6062 8.15625C11.3438 8.83125 10.975 9.43125 10.5 9.95625V15.75L6 14.25L1.5 15.75ZM6 10.5C7.25 10.5 8.3125 10.0625 9.1875 9.1875C10.0625 8.3125 10.5 7.25 10.5 6C10.5 4.75 10.0625 3.6875 9.1875 2.8125C8.3125 1.9375 7.25 1.5 6 1.5C4.75 1.5 3.6875 1.9375 2.8125 2.8125C1.9375 3.6875 1.5 4.75 1.5 6C1.5 7.25 1.9375 8.3125 2.8125 9.1875C3.6875 10.0625 4.75 10.5 6 10.5ZM3 13.5188L6 12.75L9 13.5188V11.1938C8.5625 11.4438 8.09062 11.6406 7.58437 11.7844C7.07812 11.9281 6.55 12 6 12C5.45 12 4.92188 11.9281 4.41563 11.7844C3.90938 11.6406 3.4375 11.4438 3 11.1938V13.5188Z"
                        fill="#231B00"
                      />
                    </svg>
                    Upgrade Pro
                  </button>
                </article>
              </div>
            </section>

            <section className="tryout-stats">
              <h2 className="tryout-section-title">Statistik</h2>
              <div className="tryout-stats-card">
                <p className="tryout-stats-card__label">Skor Rata-rata Terakhir</p>

                <div className="tryout-score-ring">
                  <svg viewBox="0 0 192 192" className="tryout-score-ring__svg">
                    <circle cx="96" cy="96" r="84.48" stroke="#F2F4F6" strokeWidth="19.2" fill="none" />
                    <circle
                      cx="96"
                      cy="96"
                      r="84.48"
                      stroke="url(#tryoutScoreGradient)"
                      strokeWidth="19.2"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={scoreCircumference}
                      strokeDashoffset={scoreOffset}
                      transform="rotate(-90 96 96)"
                    />
                    <defs>
                      <linearGradient id="tryoutScoreGradient" x1="180.48" y1="180.48" x2="11.52" y2="11.52" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#004AC6" />
                        <stop offset="0.5" stopColor="#6A1EDB" />
                        <stop offset="1" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="tryout-score-ring__value">
                    <strong>{scoreValue}</strong>
                    <span>/ {scoreMax}</span>
                  </div>
                </div>

                <div className="tryout-stats-card__rows">
                  <div className="tryout-stats-card__row">
                    <span className="tryout-stats-card__row-label">
                      <i className="tryout-stats-card__dot" style={{ background: "#004AC6" }} />
                      Penalaran
                    </span>
                    <strong>720</strong>
                  </div>
                  <div className="tryout-stats-card__row">
                    <span className="tryout-stats-card__row-label">
                      <i className="tryout-stats-card__dot" style={{ background: "#8B5CF6" }} />
                      Literasi
                    </span>
                    <strong>650</strong>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="tryout-history">
            <h2 className="tryout-section-title">Riwayat Tryout</h2>
            <div className="tryout-history-table">
              <div className="tryout-history-table__head">
                <span>Nama Tryout</span>
                <span>Tanggal</span>
                <span>Skor</span>
                <span>Status</span>
                <span>Aksi</span>
              </div>
              {historyRows.map((row) => (
                <div className="tryout-history-table__row" key={row.key}>
                  <span className="tryout-history-table__name">{row.name}</span>
                  <span className="tryout-history-table__date">{row.date}</span>
                  <span className="tryout-history-table__score" style={{ color: row.scoreColor }}>
                    {row.score}
                  </span>
                  <span className="tryout-status-pill">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.01667 8.51667L9.12917 4.40417L8.3125 3.5875L5.01667 6.88333L3.35417 5.22083L2.5375 6.0375L5.01667 8.51667ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667Z"
                        fill="#10B981"
                      />
                    </svg>
                    Selesai
                  </span>
                  <button type="button" className="tryout-history-table__cta">
                    Pembahasan
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="tryout-footer-wrap">
          <AppFooter />
        </div>
      </div>
    </div>
  );
}

export default TryoutTKA;
