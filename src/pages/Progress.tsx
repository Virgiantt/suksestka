import { useState } from "react";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import AppFooter from "../components/AppFooter";
import "./Progress.css";

const drSarahAvatar =
  "https://api.builder.io/api/v1/image/assets/TEMP/1a8dc260861821c0f2a41545423b77d57459a434?width=104";

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.5167 17.15L17.15 15.5167L12.8333 11.2V5.83333H10.5V12.1333L15.5167 17.15ZM11.6667 23.3333C10.0528 23.3333 8.53611 23.0271 7.11667 22.4146C5.69722 21.8021 4.4625 20.9708 3.4125 19.9208C2.3625 18.8708 1.53125 17.6361 0.91875 16.2167C0.30625 14.7972 0 13.2806 0 11.6667C0 10.0528 0.30625 8.53611 0.91875 7.11667C1.53125 5.69722 2.3625 4.4625 3.4125 3.4125C4.4625 2.3625 5.69722 1.53125 7.11667 0.91875C8.53611 0.30625 10.0528 0 11.6667 0C13.2806 0 14.7972 0.30625 16.2167 0.91875C17.6361 1.53125 18.8708 2.3625 19.9208 3.4125C20.9708 4.4625 21.8021 5.69722 22.4146 7.11667C23.0271 8.53611 23.3333 10.0528 23.3333 11.6667C23.3333 13.2806 23.0271 14.7972 22.4146 16.2167C21.8021 17.6361 20.9708 18.8708 19.9208 19.9208C18.8708 20.9708 17.6361 21.8021 16.2167 22.4146C14.7972 23.0271 13.2806 23.3333 11.6667 23.3333ZM11.6667 21C14.2528 21 16.4549 20.091 18.2729 18.2729C20.091 16.4549 21 14.2528 21 11.6667C21 9.08056 20.091 6.87847 18.2729 5.06042C16.4549 3.24236 14.2528 2.33333 11.6667 2.33333C9.08056 2.33333 6.87847 3.24236 5.06042 5.06042C3.24236 6.87847 2.33333 9.08056 2.33333 11.6667C2.33333 14.2528 3.24236 16.4549 5.06042 18.2729C6.87847 20.091 9.08056 21 11.6667 21Z"
        fill="#004AC6"
      />
    </svg>
  );
}

function AccuracyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.6667 23.3333C10.0528 23.3333 8.53611 23.0271 7.11667 22.4146C5.69722 21.8021 4.4625 20.9708 3.4125 19.9208C2.3625 18.8708 1.53125 17.6361 0.91875 16.2167C0.30625 14.7972 0 13.2806 0 11.6667C0 10.0528 0.30625 8.53611 0.91875 7.11667C1.53125 5.69722 2.3625 4.4625 3.4125 3.4125C4.4625 2.3625 5.69722 1.53125 7.11667 0.91875C8.53611 0.30625 10.0528 0 11.6667 0H12.8333V9.65417C13.1833 9.86806 13.4653 10.1451 13.6792 10.4854C13.8931 10.8257 14 11.2194 14 11.6667C14 12.3083 13.7715 12.8576 13.3146 13.3146C12.8576 13.7715 12.3083 14 11.6667 14C11.025 14 10.4757 13.7715 10.0188 13.3146C9.56181 12.8576 9.33333 12.3083 9.33333 11.6667C9.33333 11.2194 9.44028 10.8208 9.65417 10.4708C9.86806 10.1208 10.15 9.84861 10.5 9.65417V7.14583C9.48889 7.41806 8.65278 7.96736 7.99167 8.79375C7.33056 9.62014 7 10.5778 7 11.6667C7 12.95 7.45694 14.0486 8.37083 14.9625C9.28472 15.8764 10.3833 16.3333 11.6667 16.3333C12.95 16.3333 14.0486 15.8764 14.9625 14.9625C15.8764 14.0486 16.3333 12.95 16.3333 11.6667C16.3333 10.9667 16.1924 10.3201 15.9104 9.72708C15.6285 9.13403 15.2444 8.61389 14.7583 8.16667L16.4208 6.50417C17.1014 7.14583 17.6458 7.90903 18.0542 8.79375C18.4625 9.67847 18.6667 10.6361 18.6667 11.6667C18.6667 13.6111 17.9861 15.2639 16.625 16.625C15.2639 17.9861 13.6111 18.6667 11.6667 18.6667C9.72222 18.6667 8.06944 17.9861 6.70833 16.625C5.34722 15.2639 4.66667 13.6111 4.66667 11.6667C4.66667 9.91667 5.22083 8.39514 6.32917 7.10208C7.4375 5.80903 8.82778 5.02639 10.5 4.75417V2.39167C8.18611 2.68333 6.24653 3.70417 4.68125 5.45417C3.11597 7.20417 2.33333 9.275 2.33333 11.6667C2.33333 14.2722 3.2375 16.4792 5.04583 18.2875C6.85417 20.0958 9.06111 21 11.6667 21C14.2722 21 16.4792 20.0958 18.2875 18.2875C20.0958 16.4792 21 14.2722 21 11.6667C21 10.325 20.7375 9.07083 20.2125 7.90417C19.6875 6.7375 18.9681 5.72639 18.0542 4.87083L19.7167 3.20833C20.825 4.27778 21.7049 5.53681 22.3563 6.98542C23.0076 8.43403 23.3333 9.99444 23.3333 11.6667C23.3333 13.2806 23.0271 14.7972 22.4146 16.2167C21.8021 17.6361 20.9708 18.8708 19.9208 19.9208C18.8708 20.9708 17.6361 21.8021 16.2167 22.4146C14.7972 23.0271 13.2806 23.3333 11.6667 23.3333Z"
        fill="#6A1EDB"
      />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.6667 23.3333C10.0528 23.3333 8.53611 23.0271 7.11667 22.4146C5.69722 21.8021 4.4625 20.9708 3.4125 19.9208C2.3625 18.8708 1.53125 17.6361 0.91875 16.2167C0.30625 14.7972 0 13.2806 0 11.6667C0 10.0528 0.30625 8.53611 0.91875 7.11667C1.53125 5.69722 2.3625 4.4625 3.4125 3.4125C4.4625 2.3625 5.69722 1.53125 7.11667 0.91875C8.53611 0.30625 10.0528 0 11.6667 0C12.9306 0 14.1264 0.184722 15.2542 0.554167C16.3819 0.923611 17.4222 1.43889 18.375 2.1L16.6833 3.82083C15.9444 3.35417 15.1569 2.98958 14.3208 2.72708C13.4847 2.46458 12.6 2.33333 11.6667 2.33333C9.08056 2.33333 6.87847 3.24236 5.06042 5.06042C3.24236 6.87847 2.33333 9.08056 2.33333 11.6667C2.33333 14.2528 3.24236 16.4549 5.06042 18.2729C6.87847 20.091 9.08056 21 11.6667 21C14.2528 21 16.4549 20.091 18.2729 18.2729C20.091 16.4549 21 14.2528 21 11.6667C21 11.3167 20.9806 10.9667 20.9417 10.6167C20.9028 10.2667 20.8444 9.92639 20.7667 9.59583L22.6625 7.7C22.8764 8.32222 23.0417 8.96389 23.1583 9.625C23.275 10.2861 23.3333 10.9667 23.3333 11.6667C23.3333 13.2806 23.0271 14.7972 22.4146 16.2167C21.8021 17.6361 20.9708 18.8708 19.9208 19.9208C18.8708 20.9708 17.6361 21.8021 16.2167 22.4146C14.7972 23.0271 13.2806 23.3333 11.6667 23.3333ZM10.0333 17.0333L5.075 12.075L6.70833 10.4417L10.0333 13.7667L21.7 2.07083L23.3333 3.70417L10.0333 17.0333Z"
        fill="#FB923C"
      />
    </svg>
  );
}

function TrendUpIcon() {
  return (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.933333 8L0 7.06667L4.93333 2.1L7.6 4.76667L11.0667 1.33333H9.33333V0H13.3333V4H12V2.26667L7.6 6.66667L4.93333 4L0.933333 8Z"
        fill="#10B981"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 5.33333H0V4H4V0H5.33333V4H9.33333V5.33333H5.33333V9.33333H4V5.33333Z" fill="#10B981" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5 6L12.5625 3.9375L10.5 3L12.5625 2.0625L13.5 0L14.4375 2.0625L16.5 3L14.4375 3.9375L13.5 6ZM13.5 16.5L12.5625 14.4375L10.5 13.5L12.5625 12.5625L13.5 10.5L14.4375 12.5625L16.5 13.5L14.4375 14.4375L13.5 16.5ZM6 14.25L4.125 10.125L0 8.25L4.125 6.375L6 2.25L7.875 6.375L12 8.25L7.875 10.125L6 14.25ZM6 10.6125L6.75 9L8.3625 8.25L6.75 7.5L6 5.8875L5.25 7.5L3.6375 8.25L5.25 9L6 10.6125Z"
        fill="#6A1EDB"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.11667 6H0V4.66667H8.11667L4.38333 0.933333L5.33333 0L10.6667 5.33333L5.33333 10.6667L4.38333 9.73333L8.11667 6Z" fill="#004AC6" />
    </svg>
  );
}

function ExpertsIcon() {
  return (
    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.86667 24.5L6.65 20.7667L2.45 19.8333L2.85833 15.5167L0 12.25L2.85833 8.98333L2.45 4.66667L6.65 3.73333L8.86667 0L12.8333 1.69167L16.8 0L19.0167 3.73333L23.2167 4.66667L22.8083 8.98333L25.6667 12.25L22.8083 15.5167L23.2167 19.8333L19.0167 20.7667L16.8 24.5L12.8333 22.8083L8.86667 24.5ZM9.85833 21.525L12.8333 20.2417L15.8667 21.525L17.5 18.725L20.7083 17.9667L20.4167 14.7L22.575 12.25L20.4167 9.74167L20.7083 6.475L17.5 5.775L15.8083 2.975L12.8333 4.25833L9.8 2.975L8.16667 5.775L4.95833 6.475L5.25 9.74167L3.09167 12.25L5.25 14.7L4.95833 18.025L8.16667 18.725L9.85833 21.525ZM11.6083 16.3917L18.2 9.8L16.5667 8.10833L11.6083 13.0667L9.1 10.6167L7.46667 12.25L11.6083 16.3917Z"
        fill="#004AC6"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.55 12.6667L3.63333 7.98333L0 4.83333L4.8 4.41667L6.66667 0L8.53333 4.41667L13.3333 4.83333L9.7 7.98333L10.7833 12.6667L6.66667 10.1833L2.55 12.6667Z" fill="#F59E0B" />
    </svg>
  );
}

function BudiIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.33333 9.33333C8.05 9.33333 6.95139 8.87639 6.0375 7.9625C5.12361 7.04861 4.66667 5.95 4.66667 4.66667C4.66667 3.38333 5.12361 2.28472 6.0375 1.37083C6.95139 0.456944 8.05 0 9.33333 0C10.6167 0 11.7153 0.456944 12.6292 1.37083C13.5431 2.28472 14 3.38333 14 4.66667C14 5.95 13.5431 7.04861 12.6292 7.9625C11.7153 8.87639 10.6167 9.33333 9.33333 9.33333ZM0 18.6667V15.4C0 14.7389 0.170139 14.1313 0.510417 13.5771C0.850694 13.0229 1.30278 12.6 1.86667 12.3083C3.07222 11.7056 4.29722 11.2535 5.54167 10.9521C6.78611 10.6507 8.05 10.5 9.33333 10.5C10.6167 10.5 11.8806 10.6507 13.125 10.9521C14.3694 11.2535 15.5944 11.7056 16.8 12.3083C17.3639 12.6 17.816 13.0229 18.1562 13.5771C18.4965 14.1313 18.6667 14.7389 18.6667 15.4V18.6667H0Z"
        fill="#004AC6"
      />
    </svg>
  );
}

function BookingIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6Z"
        fill="white"
      />
    </svg>
  );
}

const stats = [
  {
    key: "belajar",
    icon: <ClockIcon />,
    iconBg: "linear-gradient(135deg, rgba(0, 74, 198, 0.20) 0%, rgba(0, 74, 198, 0.05) 100%)",
    iconBorder: "rgba(0, 74, 198, 0.1)",
    trend: "+5%",
    label: "Total Belajar",
    value: "128",
    unit: "Jam",
    unitColor: "#004AC6",
    footnote: "dari minggu lalu",
  },
  {
    key: "akurasi",
    icon: <AccuracyIcon />,
    iconBg: "linear-gradient(135deg, rgba(106, 30, 219, 0.20) 0%, rgba(106, 30, 219, 0.05) 100%)",
    iconBorder: "rgba(106, 30, 219, 0.1)",
    trend: "+2%",
    label: "Akurasi Rata-rata",
    value: "82%",
    unit: null,
    unitColor: "#6A1EDB",
    footnote: "dari minggu lalu",
  },
  {
    key: "soal",
    icon: <CheckCircleIcon />,
    iconBg: "linear-gradient(135deg, rgba(251, 146, 60, 0.20) 0%, rgba(251, 146, 60, 0.05) 100%)",
    iconBorder: "rgba(251, 146, 60, 0.1)",
    trend: "120",
    trendIcon: <PlusIcon />,
    label: "Soal Terjawab",
    value: "1,240",
    unit: "Soal",
    unitColor: "#FB923C",
    footnote: "hari ini",
  },
];

const weekdays = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

type Subject = {
  key: string;
  name: string;
  percent: number;
  color: string;
  ringColor: string;
  alert?: boolean;
};

const subjects: Subject[] = [
  { key: "matematika", name: "Matematika", percent: 85, color: "#004AC6", ringColor: "rgba(0, 74, 198, 0.8)" },
  { key: "fisika", name: "Fisika", percent: 65, color: "#8B5CF6", ringColor: "rgba(139, 92, 246, 0.8)" },
  { key: "biologi", name: "Biologi", percent: 90, color: "#10B981", ringColor: "rgba(16, 185, 129, 0.8)" },
  { key: "kimia", name: "Kimia", percent: 40, color: "#F59E0B", ringColor: "rgba(245, 158, 11, 0.8)", alert: true },
];

function SubjectRing({ percent, color }: { percent: number; color: string }) {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <svg width="56" height="56" viewBox="0 0 56 56" className="progress-ring">
      <circle cx="28" cy="28" r={radius} stroke="#A0A2AA" strokeOpacity="0.35" strokeWidth="7" fill="none" />
      <circle
        cx="28"
        cy="28"
        r={radius}
        stroke={color}
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 28 28)"
      />
    </svg>
  );
}

function Progress() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-page">
      <AppSidebar active="Progress" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main">
        <AppTopbar onMenuClick={() => setSidebarOpen(true)} searchPlaceholder="Cari materi..." />

        <main className="prog-content">
          <div className="prog-container">
            <div className="prog-header">
              <h1 className="prog-header__title">Analisis Progres</h1>
              <p className="prog-header__subtitle">Pantau pertumbuhan belajarmu menuju sukses TKA.</p>
            </div>

            <div className="prog-stats">
              {stats.map((stat) => (
                <div className="prog-stat-card" key={stat.key}>
                  <div className="prog-stat-card__top">
                    <span
                      className="prog-stat-card__icon"
                      style={{ background: stat.iconBg, borderColor: stat.iconBorder }}
                    >
                      {stat.icon}
                    </span>
                    <span className="prog-stat-card__trend">
                      {stat.trendIcon ?? <TrendUpIcon />}
                      {stat.trend}
                    </span>
                  </div>
                  <div className="prog-stat-card__body">
                    <p className="prog-stat-card__label">{stat.label}</p>
                    <p className="prog-stat-card__value">
                      {stat.value}
                      {stat.unit ? (
                        <span className="prog-stat-card__unit" style={{ color: stat.unitColor }}>
                          {" "}
                          {stat.unit}
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <p className="prog-stat-card__footnote">{stat.footnote}</p>
                </div>
              ))}
            </div>

            <div className="prog-grid">
              <div className="prog-chart-card">
                <div className="prog-chart-card__head">
                  <h2 className="prog-chart-card__title">Aktivitas Mingguan</h2>
                  <button type="button" className="prog-chart-card__select">
                    Learning Hours
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 8L0 2L1.4 0.6L6 5.2L10.6 0.6L12 2L6 8Z" fill="#6B7280" />
                    </svg>
                  </button>
                </div>

                <div className="prog-chart-card__canvas">
                  <div className="prog-chart-card__grid" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <svg
                    className="prog-chart-card__svg"
                    viewBox="0 0 650 523"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <g clipPath="url(#clip0_progress_chart)">
                      <path
                        d="M3.51669 480.01C107.108 357.952 110.786 311.841 203.343 401.893C297.74 456.66 268.318 159.97 362.714 214.737C459.563 340.592 453.734 -32.3291 564.38 41.8727C627.816 129.872 622.912 369.649 622.912 369.649V475.975L-2 480.01H3.51669Z"
                        fill="url(#paint0_linear_progress_chart)"
                      />
                      <path
                        d="M0 477.01C93.3845 388.834 93.3845 300.658 186.769 388.834C280.153 477.01 280.153 134.461 373.538 222.636C466.922 310.812 466.922 -41.8907 560.307 46.285C653.691 134.461 616.823 477.01 616.823 477.01"
                        stroke="#2563EB"
                        strokeWidth="7.20747"
                        strokeLinecap="round"
                      />
                      <path
                        d="M34 433.209C34 441.046 35.7112 447.409 37.819 447.409C39.9268 447.409 41.638 441.046 41.638 433.209C41.638 425.372 39.9268 419.01 37.819 419.01C35.7112 419.01 34 425.372 34 433.209Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M129 353.209C129 361.046 130.711 367.409 132.819 367.409C134.927 367.409 136.638 361.046 136.638 353.209C136.638 345.372 134.927 339.01 132.819 339.01C130.711 339.01 129 345.372 129 353.209Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M219.796 397.509C219.796 405.346 221.507 411.709 223.615 411.709C225.723 411.709 227.434 405.346 227.434 397.509C227.434 389.672 225.723 383.31 223.615 383.31C221.507 383.31 219.796 389.672 219.796 397.509Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M320 214.209C320 222.046 321.711 228.409 323.819 228.409C325.927 228.409 327.638 222.046 327.638 214.209C327.638 206.372 325.927 200.01 323.819 200.01C321.711 200.01 320 206.372 320 214.209Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M398 235.209C398 243.046 399.711 249.409 401.819 249.409C403.927 249.409 405.638 243.046 405.638 235.209C405.638 227.372 403.927 221.01 401.819 221.01C399.711 221.01 398 227.372 398 235.209Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M610.028 462.658C609.901 470.494 611.508 476.88 613.616 476.909C615.723 476.939 617.538 470.601 617.665 462.765C617.793 454.929 616.185 448.543 614.077 448.514C611.97 448.484 610.155 454.822 610.028 462.658Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M528.369 32.1538C528.241 39.9898 529.849 46.3757 531.957 46.4053C534.064 46.4349 535.879 40.0971 536.006 32.2611C536.133 24.4251 534.526 18.0393 532.418 18.0097C530.311 17.9801 528.496 24.3179 528.369 32.1538Z"
                        fill="#2563EB"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_progress_chart"
                        x1="-4.74047"
                        y1="29.5135"
                        x2="-4.74047"
                        y2="272.423"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2563EB" stopOpacity="0.3" />
                        <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
                      </linearGradient>
                      <clipPath id="clip0_progress_chart">
                        <rect width="649.66" height="522.98" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="prog-chart-card__labels">
                    {weekdays.map((day) => (
                      <span key={day} className={day === "Sab" ? "prog-chart-card__label--active" : ""}>
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="prog-side">
                <div className="prog-insight">
                  <div className="prog-insight__glow" aria-hidden="true" />
                  <div className="prog-insight__top">
                    <span className="prog-insight__avatar">
                      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3 20V15.7C2.05 14.8333 1.3125 13.8208 0.7875 12.6625C0.2625 11.5042 0 10.2833 0 9C0 6.5 0.875 4.375 2.625 2.625C4.375 0.875 6.5 0 9 0C11.0833 0 12.9292 0.6125 14.5375 1.8375C16.1458 3.0625 17.1917 4.65833 17.675 6.625L18.975 11.75C19.0583 12.0667 19 12.3542 18.8 12.6125C18.6 12.8708 18.3333 13 18 13H16V16C16 16.55 15.8042 17.0208 15.4125 17.4125C15.0208 17.8042 14.55 18 14 18H12V20H10V16H14V11H16.7L15.75 7.125C15.3667 5.60833 14.55 4.375 13.3 3.425C12.05 2.475 10.6167 2 9 2C7.06667 2 5.41667 2.675 4.05 4.025C2.68333 5.375 2 7.01667 2 8.95C2 9.95 2.20417 10.9 2.6125 11.8C3.02083 12.7 3.6 13.5 4.35 14.2L5 14.8V20H3Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <div className="prog-insight__content">
                      <h3 className="prog-insight__title">
                        <SparkleIcon />
                        Insight AI Tutor
                      </h3>
                      <p className="prog-insight__text">
                        Fokus pada <span className="prog-insight__highlight">Kimia Organik</span> untuk
                        meningkatkan skor keseluruhanmu.
                      </p>
                      <button type="button" className="prog-insight__cta">
                        Mulai Latihan
                        <ArrowRightIcon />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="prog-subjects">
                  <h2 className="prog-subjects__title">Progres Materi</h2>
                  <div className="prog-subjects__list">
                    {subjects.map((subject) => (
                      <div className="prog-subject" key={subject.key}>
                        <div className="prog-subject__ring-wrap">
                          <SubjectRing percent={subject.percent} color={subject.color} />
                        </div>
                        <div className="prog-subject__body">
                          <div className="prog-subject__head">
                            <span className="prog-subject__name">
                              {subject.name}
                              {subject.alert ? (
                                <svg
                                  width="15"
                                  height="12"
                                  viewBox="0 0 15 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="prog-subject__alert"
                                >
                                  <path
                                    d="M7.33333 12L2.66667 9.46667V5.46667L0 4L7.33333 0L14.6667 4V9.33333H13.3333V4.73333L12 5.46667V9.46667L7.33333 12ZM7.33333 6.46667L11.9 4L7.33333 1.53333L2.76667 4L7.33333 6.46667ZM7.33333 10.4833L10.6667 8.68333V6.16667L7.33333 8L4 6.16667V8.68333L7.33333 10.4833Z"
                                    fill="#F43F5E"
                                  />
                                </svg>
                              ) : null}
                            </span>
                            <span className="prog-subject__percent" style={{ color: subject.color }}>
                              {subject.percent}%
                            </span>
                          </div>
                          <div className="prog-subject__track">
                            <div
                              className="prog-subject__fill"
                              style={{ width: `${subject.percent}%`, background: subject.ringColor }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button type="button" className="prog-subjects__more">
                    Lihat Detail Mata Pelajaran
                  </button>
                </div>
              </div>
            </div>

            <div className="prog-tutors">
              <h2 className="prog-tutors__title">
                <ExpertsIcon />
                Rekomendasi Tutor Ahli
              </h2>

              <div className="prog-tutors__row">
                <div className="prog-tutors__cards">
                  <div className="prog-tutor-card">
                    <div className="prog-tutor-card__head">
                      <span className="prog-tutor-card__avatar">
                        <img src={drSarahAvatar} alt="Dr. Sarah" />
                      </span>
                      <div className="prog-tutor-card__info">
                        <div className="prog-tutor-card__name-row">
                          <h3 className="prog-tutor-card__name">Dr. Sarah</h3>
                          <span className="prog-tutor-card__rating">
                            <StarIcon />
                            5.0
                          </span>
                        </div>
                        <p className="prog-tutor-card__role">Biology Specialist</p>
                      </div>
                    </div>
                    <button type="button" className="prog-tutor-card__btn">
                      Pilih Tutor
                    </button>
                  </div>

                  <div className="prog-tutor-card">
                    <div className="prog-tutor-card__head">
                      <span className="prog-tutor-card__avatar prog-tutor-card__avatar--icon">
                        <BudiIcon />
                      </span>
                      <div className="prog-tutor-card__info">
                        <div className="prog-tutor-card__name-row">
                          <h3 className="prog-tutor-card__name">Prof. Budi</h3>
                          <span className="prog-tutor-card__rating">
                            <StarIcon />
                            5.0
                          </span>
                        </div>
                        <p className="prog-tutor-card__role">Physics Expert</p>
                      </div>
                    </div>
                    <button type="button" className="prog-tutor-card__btn">
                      Pilih Tutor
                    </button>
                  </div>
                </div>

                <div className="prog-tutors__cta">
                  <p className="prog-tutors__desc">
                    Dapatkan bimbingan personal dari pengajar terbaik kami untuk membantu kamu menguasai materi
                    yang sulit.
                  </p>
                  <button type="button" className="prog-tutors__booking">
                    <BookingIcon />
                    Booking Sesi Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="prog-footer-wrap">
          <AppFooter />
        </div>
      </div>
    </div>
  );
}

export default Progress;
