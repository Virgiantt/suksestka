import { useState } from "react";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import "../styles/siswa/Dashboard.css";

const robotImageSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/6e94f1d3529463dcf9bc3bbeb1a713761c5e5f0a?width=534";
const chatUserAvatarSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/7a4c1bb35b1f19688b04851d04f2215f5cd175cb?width=64";
const podiumAvatarSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/d717821455e8ce36c8534d272c0d4356a82c1c0d?width=56";

const subjects = [
  {
    key: "ipa",
    subject: "IPA",
    title: "Bab 4: Sistem Biologi Hewan",
    meta: "Sisa 2 Sub-bab • Est. 15 menit",
    percent: 76,
  },
  {
    key: "matematika",
    subject: "MATEMATIKA",
    title: "Bab 4: Operasi Pecahan & Desimal",
    meta: "Sisa 2 Sub-bab • Est. 15 menit",
    percent: 60,
  },
];

const missions = [
  {
    key: "baca",
    title: "Baca 1 Materi Baru",
    xp: "+50 XP",
    progressLabel: "1/2 selesai",
    percent: 50,
    theme: "orange",
    icon: (
      <svg width="20" height="15" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 5.9V4.2C13.55 3.96667 14.1125 3.79167 14.6875 3.675C15.2625 3.55833 15.8667 3.5 16.5 3.5C16.9333 3.5 17.3583 3.53333 17.775 3.6C18.1917 3.66667 18.6 3.75 19 3.85V5.45C18.6 5.3 18.1958 5.1875 17.7875 5.1125C17.3792 5.0375 16.95 5 16.5 5C15.8667 5 15.2583 5.07917 14.675 5.2375C14.0917 5.39583 13.5333 5.61667 13 5.9ZM11 16C10.2 15.3667 9.33333 14.875 8.4 14.525C7.46667 14.175 6.5 14 5.5 14C4.8 14 4.1125 14.0917 3.4375 14.275C2.7625 14.4583 2.11667 14.7167 1.5 15.05C1.15 15.2333 0.8125 15.225 0.4875 15.025C0.1625 14.825 0 14.5333 0 14.15V2.1C0 1.91667 0.0458333 1.74167 0.1375 1.575C0.229167 1.40833 0.366667 1.28333 0.55 1.2C1.33333 0.816667 2.1375 0.520833 2.9625 0.3125C3.7875 0.104167 4.63333 0 5.5 0C6.46667 0 7.4125 0.125 8.3375 0.375C9.2625 0.625 10.15 1 11 1.5C11.85 1 12.7375 0.625 13.6625 0.375C14.5875 0.125 15.5333 0 16.5 0C17.3667 0 18.2125 0.104167 19.0375 0.3125C19.8625 0.520833 20.6667 0.816667 21.45 1.2C21.6333 1.28333 21.7708 1.40833 21.8625 1.575C21.9542 1.74167 22 1.91667 22 2.1V14.15C22 14.5333 21.8375 14.825 21.5125 15.025C21.1875 15.225 20.85 15.2333 20.5 15.05C19.8833 14.7167 19.2375 14.4583 18.5625 14.275C17.8875 14.0917 17.2 14 16.5 14C15.5 14 14.5333 14.175 13.6 14.525C12.6667 14.875 11.8 15.3667 11 16Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    key: "kerjakan",
    title: "Kerjakan 5 Soal",
    xp: "+100 XP",
    progressLabel: "4/5 selesai",
    percent: 80,
    theme: "green",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.0833 0 12.1083 0.158333 13.075 0.475C14.0417 0.791667 14.9333 1.23333 15.75 1.8L14.3 3.275C13.6667 2.875 12.9917 2.5625 12.275 2.3375C11.5583 2.1125 10.8 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 12.2167 2.77917 14.1042 4.3375 15.6625C5.89583 17.2208 7.78333 18 10 18C12.2167 18 14.1042 17.2208 15.6625 15.6625C17.2208 14.1042 18 12.2167 18 10C18 9.7 17.9833 9.4 17.95 9.1C17.9167 8.8 17.8667 8.50833 17.8 8.225L19.425 6.6C19.6083 7.13333 19.75 7.68333 19.85 8.25C19.95 8.81667 20 9.4 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM8.6 14.6L4.35 10.35L5.75 8.95L8.6 11.8L18.6 1.775L20 3.175L8.6 14.6Z"
          fill="white"
        />
      </svg>
    ),
  },
];

const leaderboardRows = [
  { rank: 12, name: "Virgi (Anda)", xp: "2,450 XP", isMe: true },
  { rank: 11, name: "Aria Putri", xp: "2,510 XP", isMe: false },
];

const weeklyActivity = [
  { day: "Sen", percent: 45 },
  { day: "Sel", percent: 65 },
  { day: "Rab", percent: 100, active: true },
  { day: "Kam", percent: 25 },
  { day: "Jum", percent: 55 },
];

const tryouts = [
  {
    key: "tka4",
    month: "JULI",
    day: "24",
    title: "Tryout Nasional #4",
    meta: "08:00 - 12:00 WIB",
    upcoming: true,
  },
  {
    key: "skolastik",
    month: "SEP",
    day: "02",
    title: "Latihan Skolastik",
    meta: "H- Tersisa",
    upcoming: false,
  },
];

function CircularProgress({ percent, size = 64 }: { percent: number; size?: number }) {
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="circular-progress" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#767676"
          strokeOpacity="0.25"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#004AC6"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="circular-progress__label">{percent}%</span>
    </div>
  );
}

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-page">
      <AppSidebar active="Dashboard" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main">
        <AppTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="dashboard-content">
          <div className="dashboard-content__primary">
            <section className="hero-card">
              <div className="hero-card__text">
                <h1 className="hero-card__title">Halo, Virgi! 👋</h1>
                <p className="hero-card__subtitle">
                  Siap melanjutkan petualangan belajarmu hari ini?
                </p>
                <div className="hero-card__actions">
                  <button type="button" className="btn-primary">
                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 14V0L11 7L0 14ZM2 10.35L7.25 7L2 3.65V10.35Z" fill="#FFFBFF" />
                    </svg>
                    Lanjutkan Belajar
                  </button>
                  <button type="button" className="btn-outline">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 20V15.7C2.05 14.8333 1.3125 13.8208 0.7875 12.6625C0.2625 11.5042 0 10.2833 0 9C0 6.5 0.875 4.375 2.625 2.625C4.375 0.875 6.5 0 9 0C11.0833 0 12.9292 0.6125 14.5375 1.8375C16.1458 3.0625 17.1917 4.65833 17.675 6.625L18.975 11.75C19.0583 12.0667 19 12.3542 18.8 12.6125C18.6 12.8708 18.3333 13 18 13H16V16C16 16.55 15.8042 17.0208 15.4125 17.4125C15.0208 17.8042 14.55 18 14 18H12V20H10V16H14V11H16.7L15.75 7.125C15.3667 5.60833 14.55 4.375 13.3 3.425C12.05 2.475 10.6167 2 9 2C7.06667 2 5.41667 2.675 4.05 4.025C2.68333 5.375 2 7.01667 2 8.95C2 9.95 2.20417 10.9 2.6125 11.8C3.02083 12.7 3.6 13.5 4.35 14.2L5 14.8V20H3Z"
                        fill="#4648D4"
                      />
                    </svg>
                    Tanya AI
                  </button>
                </div>
              </div>
              <div className="hero-card__media">
                <img src={robotImageSrc} alt="Maskot robot SuksesTKA" />
              </div>
            </section>

            <section className="bento-grid">
              <article className="panel-card panel-card--blue">
                <div className="panel-card__header">
                  <div>
                    <h2 className="panel-card__title panel-card__title--blue">Sedang Dipelajari</h2>
                    <p className="panel-card__eyebrow">Lanjutkan progresmu</p>
                  </div>
                  <button type="button" className="panel-card__menu" aria-label="Opsi lainnya">
                    <svg width="15" height="4" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.83333 3.66667C1.32917 3.66667 0.897569 3.48715 0.538542 3.12812C0.179514 2.7691 0 2.3375 0 1.83333C0 1.32917 0.179514 0.897569 0.538542 0.538542C0.897569 0.179514 1.32917 0 1.83333 0C2.3375 0 2.7691 0.179514 3.12812 0.538542C3.48715 0.897569 3.66667 1.32917 3.66667 1.83333C3.66667 2.3375 3.48715 2.7691 3.12812 3.12812C2.7691 3.48715 2.3375 3.66667 1.83333 3.66667ZM7.33333 3.66667C6.82917 3.66667 6.39757 3.48715 6.03854 3.12812C5.67951 2.7691 5.5 2.3375 5.5 1.83333C5.5 1.32917 5.67951 0.897569 6.03854 0.538542C6.39757 0.179514 6.82917 0 7.33333 0C7.8375 0 8.2691 0.179514 8.62813 0.538542C8.98715 0.897569 9.16667 1.32917 9.16667 1.83333C9.16667 2.3375 8.98715 2.7691 8.62813 3.12812C8.2691 3.48715 7.8375 3.66667 7.33333 3.66667ZM12.8333 3.66667C12.3292 3.66667 11.8976 3.48715 11.5385 3.12812C11.1795 2.7691 11 2.3375 11 1.83333C11 1.32917 11.1795 0.897569 11.5385 0.538542C11.8976 0.179514 12.3292 0 12.8333 0C13.3375 0 13.7691 0.179514 14.1281 0.538542C14.4872 0.897569 14.6667 1.32917 14.6667 1.83333C14.6667 2.3375 14.4872 2.7691 14.1281 3.12812C13.7691 3.48715 13.3375 3.66667 12.8333 3.66667Z"
                        fill="#004AC6"
                      />
                    </svg>
                  </button>
                </div>

                <div className="subject-list">
                  {subjects.map((item) => (
                    <div className="subject-item" key={item.key}>
                      <CircularProgress percent={item.percent} />
                      <div className="subject-item__body">
                        <span className="subject-item__tag">
                          <i />
                          {item.subject}
                        </span>
                        <p className="subject-item__title">{item.title}</p>
                        <p className="subject-item__meta">{item.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="panel-card panel-card--orange">
                <div className="panel-card__header">
                  <h2 className="panel-card__title panel-card__title--orange">
                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.5 17.3333L10.8333 14.0292L15.1667 17.3333L13.5417 11.9708L17.875 8.88333H12.5667L10.8333 3.25L9.1 8.88333H3.79167L8.125 11.9708L6.5 17.3333ZM10.8333 21.6667C9.33472 21.6667 7.92639 21.3823 6.60833 20.8135C5.29028 20.2448 4.14375 19.4729 3.16875 18.4979C2.19375 17.5229 1.42188 16.3764 0.853125 15.0583C0.284375 13.7403 0 12.3319 0 10.8333C0 9.33472 0.284375 7.92639 0.853125 6.60833C1.42188 5.29028 2.19375 4.14375 3.16875 3.16875C4.14375 2.19375 5.29028 1.42188 6.60833 0.853125C7.92639 0.284375 9.33472 0 10.8333 0C12.3319 0 13.7403 0.284375 15.0583 0.853125C16.3764 1.42188 17.5229 2.19375 18.4979 3.16875C19.4729 4.14375 20.2448 5.29028 20.8135 6.60833C21.3823 7.92639 21.6667 9.33472 21.6667 10.8333C21.6667 12.3319 21.3823 13.7403 20.8135 15.0583C20.2448 16.3764 19.4729 17.5229 18.4979 18.4979C17.5229 19.4729 16.3764 20.2448 15.0583 20.8135C13.7403 21.3823 12.3319 21.6667 10.8333 21.6667Z"
                        fill="#F97316"
                      />
                    </svg>
                    Misi Harian
                  </h2>
                  <span className="pill-badge">Lihat Semua</span>
                </div>

                <div className="mission-list">
                  {missions.map((mission) => (
                    <div className="mission-item" key={mission.key}>
                      <span className={`mission-item__icon mission-item__icon--${mission.theme}`}>
                        {mission.icon}
                      </span>
                      <div className="mission-item__body">
                        <p className="mission-item__title">{mission.title}</p>
                        <div className={`mission-item__track mission-item__track--${mission.theme}`}>
                          <div
                            className="mission-item__fill"
                            style={{ width: `${mission.percent}%` }}
                          />
                        </div>
                      </div>
                      <div className={`mission-item__reward mission-item__reward--${mission.theme}`}>
                        <span className="mission-item__xp">{mission.xp}</span>
                        <span className="mission-item__progress">{mission.progressLabel}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </section>

            <section className="ai-tutor-panel">
              <div className="ai-tutor-panel__header">
                <div className="ai-tutor-panel__title">
                  <span className="ai-tutor-panel__icon">
                    <svg width="20" height="17" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H8C8 2.16667 8.29167 1.45833 8.875 0.875C9.45833 0.291667 10.1667 0 11 0C11.8333 0 12.5417 0.291667 13.125 0.875C13.7083 1.45833 14 2.16667 14 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V7C19.8333 7 20.5417 7.29167 21.125 7.875C21.7083 8.45833 22 9.16667 22 10C22 10.8333 21.7083 11.5417 21.125 12.125C20.5417 12.7083 19.8333 13 19 13V17C19 17.55 18.8042 18.0208 18.4125 18.4125C18.0208 18.8042 17.55 19 17 19H5C4.45 19 3.97917 18.8042 3.5875 18.4125C3.19583 18.0208 3 17.55 3 17V13ZM8 11C8.41667 11 8.77083 10.8542 9.0625 10.5625C9.35417 10.2708 9.5 9.91667 9.5 9.5C9.5 9.08333 9.35417 8.72917 9.0625 8.4375C8.77083 8.14583 8.41667 8 8 8C7.58333 8 7.22917 8.14583 6.9375 8.4375C6.64583 8.72917 6.5 9.08333 6.5 9.5C6.5 9.91667 6.64583 10.2708 6.9375 10.5625C7.22917 10.8542 7.58333 11 8 11ZM14 11C14.4167 11 14.7708 10.8542 15.0625 10.5625C15.3542 10.2708 15.5 9.91667 15.5 9.5C15.5 9.08333 15.3542 8.72917 15.0625 8.4375C14.7708 8.14583 14.4167 8 14 8C13.5833 8 13.2292 8.14583 12.9375 8.4375C12.6458 8.72917 12.5 9.08333 12.5 9.5C12.5 9.91667 12.6458 10.2708 12.9375 10.5625C13.2292 10.8542 13.5833 11 14 11ZM7 15H15V13H7V15ZM5 17H17V5H5V17Z"
                        fill="#5341CD"
                      />
                    </svg>
                  </span>
                  <h2>AI Tutor Interactive</h2>
                </div>
                <span className="ai-tutor-panel__status">
                  <i />
                  Online
                </span>
              </div>

              <div className="chat-window">
                <div className="chat-window__scroll">
                  <div className="chat-bubble-row chat-bubble-row--user">
                    <div className="chat-bubble chat-bubble--user">
                      Kenapa 3/4 lebih besar dari 2/5?
                    </div>
                    <span className="chat-avatar chat-avatar--user">
                      <img src={chatUserAvatarSrc} alt="" />
                    </span>
                  </div>

                  <div className="chat-bubble-row">
                    <span className="chat-avatar chat-avatar--bot">
                      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1.75 7.58333C1.26389 7.58333 0.850694 7.41319 0.510417 7.07292C0.170139 6.73264 0 6.31944 0 5.83333C0 5.34722 0.170139 4.93403 0.510417 4.59375C0.850694 4.25347 1.26389 4.08333 1.75 4.08333V2.91667C1.75 2.59583 1.86424 2.32118 2.09271 2.09271C2.32118 1.86424 2.59583 1.75 2.91667 1.75H4.66667C4.66667 1.26389 4.83681 0.850694 5.17708 0.510417C5.51736 0.170139 5.93056 0 6.41667 0C6.90278 0 7.31597 0.170139 7.65625 0.510417C7.99653 0.850694 8.16667 1.26389 8.16667 1.75H9.91667C10.2375 1.75 10.5122 1.86424 10.7406 2.09271C10.9691 2.32118 11.0833 2.59583 11.0833 2.91667V4.08333C11.5694 4.08333 11.9826 4.25347 12.3229 4.59375C12.6632 4.93403 12.8333 5.34722 12.8333 5.83333C12.8333 6.31944 12.6632 6.73264 12.3229 7.07292C11.9826 7.41319 11.5694 7.58333 11.0833 7.58333V9.91667C11.0833 10.2375 10.9691 10.5122 10.7406 10.7406C10.5122 10.9691 10.2375 11.0833 9.91667 11.0833H2.91667C2.59583 11.0833 2.32118 10.9691 2.09271 10.7406C1.86424 10.5122 1.75 10.2375 1.75 9.91667V7.58333Z"
                          fill="#006A67"
                        />
                      </svg>
                    </span>
                    <div className="chat-bubble chat-bubble--bot">
                      <p>Bagus sekali pertanyaannya, Virgi! Bayangkan sebuah pizza:</p>
                      <div className="fraction-compare">
                        <div className="fraction-visual">
                          <span className="fraction-visual__pie fraction-visual__pie--indigo" />
                          <p className="fraction-visual__label">3/4</p>
                          <p className="fraction-visual__decimal">0.75</p>
                        </div>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#787586" />
                        </svg>
                        <div className="fraction-visual">
                          <span className="fraction-visual__pie fraction-visual__pie--teal" />
                          <p className="fraction-visual__label">2/5</p>
                          <p className="fraction-visual__decimal">0.40</p>
                        </div>
                      </div>
                      <p>
                        Jika disamakan penyebutnya, 3/4 = 15/20 sedangkan 2/5 = 8/20. Terlihat kan
                        bedanya? 😊
                      </p>
                    </div>
                  </div>
                </div>

                <form
                  className="chat-window__form"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <input type="text" placeholder="Tanya apa saja..." aria-label="Tanya apa saja" />
                  <button type="submit" aria-label="Kirim pertanyaan">
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13Z" fill="white" />
                    </svg>
                  </button>
                </form>
              </div>
            </section>
          </div>

          <div className="dashboard-content__secondary">
            <section className="mystery-chest">
              <div className="mystery-chest__header">
                <span className="mystery-chest__icon">
                  <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.33333 17.5V19.8333H21V17.5H2.33333ZM2.33333 4.66667H4.9C4.80278 4.49167 4.73958 4.30694 4.71042 4.1125C4.68125 3.91806 4.66667 3.71389 4.66667 3.5C4.66667 2.52778 5.00694 1.70139 5.6875 1.02083C6.36806 0.340278 7.19444 0 8.16667 0C8.75 0 9.28958 0.150694 9.78542 0.452083C10.2812 0.753472 10.7139 1.12778 11.0833 1.575L11.6667 2.33333L12.25 1.575C12.6 1.10833 13.0278 0.729167 13.5333 0.4375C14.0389 0.145833 14.5833 0 15.1667 0C16.1389 0 16.9653 0.340278 17.6458 1.02083C18.3264 1.70139 18.6667 2.52778 18.6667 3.5C18.6667 3.71389 18.6521 3.91806 18.6229 4.1125C18.5938 4.30694 18.5306 4.49167 18.4333 4.66667H21C21.6417 4.66667 22.191 4.89514 22.6479 5.35208C23.1049 5.80903 23.3333 6.35833 23.3333 7V19.8333C23.3333 20.475 23.1049 21.0243 22.6479 21.4813C22.191 21.9382 21.6417 22.1667 21 22.1667H2.33333C1.69167 22.1667 1.14236 21.9382 0.685417 21.4813C0.228472 21.0243 0 20.475 0 19.8333V7C0 6.35833 0.228472 5.80903 0.685417 5.35208C1.14236 4.89514 1.69167 4.66667 2.33333 4.66667Z"
                      fill="#6F5900"
                    />
                  </svg>
                </span>
                <div>
                  <p className="mystery-chest__title">Mystery Chest</p>
                  <p className="mystery-chest__subtitle">Buka dalam 150 XP lagi!</p>
                </div>
              </div>
              <div className="mystery-chest__track">
                <div className="mystery-chest__fill" style={{ width: "75%" }} />
              </div>
              <div className="mystery-chest__labels">
                <span>450 XP</span>
                <span>600 XP</span>
              </div>
            </section>

            <section className="leaderboard-card">
              <h2 className="leaderboard-card__title">Leaderboard</h2>

              <div className="podium">
                <div className="podium__item podium__item--second">
                  <span className="podium__avatar">
                    <img src={podiumAvatarSrc} alt="" />
                  </span>
                  <span className="podium__rank">2nd</span>
                  <div className="podium__bar" />
                </div>
                <div className="podium__item podium__item--first">
                  <span className="podium__avatar podium__avatar--gold">
                    <img src={podiumAvatarSrc} alt="" />
                  </span>
                  <span className="podium__rank">1st</span>
                  <div className="podium__bar" />
                </div>
                <div className="podium__item podium__item--third">
                  <span className="podium__avatar">
                    <img src={podiumAvatarSrc} alt="" />
                  </span>
                  <span className="podium__rank">3rd</span>
                  <div className="podium__bar" />
                </div>
              </div>

              <div className="leaderboard-list">
                {leaderboardRows.map((row) => (
                  <div
                    key={row.rank}
                    className={`leaderboard-row${row.isMe ? " leaderboard-row--me" : ""}`}
                  >
                    <span className="leaderboard-row__rank">{row.rank}</span>
                    <span className="leaderboard-row__name">{row.name}</span>
                    <span className="leaderboard-row__xp">{row.xp}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="weekly-chart">
              <h2 className="weekly-chart__title">Aktivitas Mingguan (Jam)</h2>
              <div className="weekly-chart__bars">
                {weeklyActivity.map((item) => (
                  <div className="weekly-chart__col" key={item.day}>
                    <div className="weekly-chart__track">
                      <div
                        className={`weekly-chart__fill${item.active ? " weekly-chart__fill--active" : ""}`}
                        style={{ height: `${item.percent}%` }}
                      />
                    </div>
                    <span className={item.active ? "weekly-chart__day--active" : ""}>{item.day}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="tryout-card">
              <div className="tryout-card__header">
                <h2>Tryout Terdekat</h2>
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6Z"
                    fill="#5341CD"
                  />
                </svg>
              </div>

              <div className="tryout-list">
                {tryouts.map((tryout) => (
                  <div
                    key={tryout.key}
                    className={`tryout-item${tryout.upcoming ? "" : " tryout-item--muted"}`}
                  >
                    <div className="tryout-item__date">
                      <span>{tryout.month}</span>
                      <strong>{tryout.day}</strong>
                    </div>
                    <div>
                      <p className="tryout-item__title">{tryout.title}</p>
                      <p className="tryout-item__meta">{tryout.meta}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button type="button" className="tryout-card__cta">
                Lihat Kalender Lengkap
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
