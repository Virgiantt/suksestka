import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/ManajemenTryout.css";

type TryoutStatus = "live" | "upcoming" | "selesai";

type TryoutItem = {
  key: string;
  status: TryoutStatus;
  statusLabel: string;
  category: string;
  title: string;
  meta: string;
  metaIcon: "calendar" | "check";
  countLabel: string;
  action: { label: string; icon: "detail" | "edit" | "laporan"; to?: string };
};

const tryoutItems: TryoutItem[] = [
  {
    key: "tka4",
    status: "live",
    statusLabel: "LIVE NOW",
    category: "SMA - Saintek",
    title: "Tryout Nasional TKA #4",
    meta: "Hari ini, 08:00 - 11:30",
    metaIcon: "calendar",
    countLabel: "4,520 Peserta Aktif",
    action: { label: "Detail", icon: "detail", to: "/manajemen-tryout/detail" },
  },
  {
    key: "aspd2",
    status: "upcoming",
    statusLabel: "UPCOMING",
    category: "SMP - Campuran",
    title: "Simulasi ASPD Tahap 2",
    meta: "24 Okt 2023, 07:30",
    metaIcon: "calendar",
    countLabel: "8,100 Terdaftar",
    action: { label: "Edit", icon: "edit", to: "/manajemen-tryout/edit" },
  },
  {
    key: "olimpiade",
    status: "selesai",
    statusLabel: "SELESAI",
    category: "SD - Matematika",
    title: "Olimpiade Mat SD Penyisihan",
    meta: "18 Okt 2023",
    metaIcon: "check",
    countLabel: "1,250 Selesai",
    action: { label: "Laporan", icon: "laporan", to: "/manajemen-tryout/laporan" },
  },
  {
    key: "literasi-inggris",
    status: "upcoming",
    statusLabel: "UPCOMING",
    category: "SMP - Saintek",
    title: "Simulasi Literasi B. Inggris",
    meta: "28 Okt 2023, 13:00 - 15:00",
    metaIcon: "calendar",
    countLabel: "3,200 Terdaftar",
    action: { label: "Edit", icon: "edit", to: "/manajemen-tryout/edit" },
  },
];

const liveMonitorItems = [
  {
    key: "ahmad",
    name: "Ahmad F.",
    text: "baru saja menyelesaikan Tryout UTBK TPS.",
    footnote: "Skor: 850 (Lulus)",
    footnoteColor: "green" as const,
    time: "2 menit yang lalu",
  },
  {
    key: "budi",
    name: "",
    text: "Terdeteksi anomali waktu pada sesi Budi S.",
    footnote: null,
    footnoteColor: "amber" as const,
    time: "15 menit yang lalu",
  },
  {
    key: "siti",
    name: "Siti N.",
    text: "mulai mengerjakan Tryout UTBK Saintek.",
    footnote: null,
    footnoteColor: "green" as const,
    time: "28 menit yang lalu",
  },
];

const actionIcons: Record<TryoutItem["action"]["icon"], ReactNode> = {
  detail: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 13.5V10.3125L9.9 0.43125C10.05 0.29375 10.2156 0.1875 10.3969 0.1125C10.5781 0.0375 10.7688 0 10.9688 0C11.1687 0 11.3625 0.0375 11.55 0.1125C11.7375 0.1875 11.9 0.3 12.0375 0.45L13.0688 1.5C13.2188 1.6375 13.3281 1.8 13.3969 1.9875C13.4656 2.175 13.5 2.3625 13.5 2.55C13.5 2.75 13.4656 2.94062 13.3969 3.12188C13.3281 3.30313 13.2188 3.46875 13.0688 3.61875L3.1875 13.5H0Z" fill="#191C1E" />
    </svg>
  ),
  edit: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 12H2.56875L9.9 4.66875L8.83125 3.6L1.5 10.9312V12ZM0 13.5V10.3125L9.9 0.43125C10.05 0.29375 10.2156 0.1875 10.3969 0.1125C10.5781 0.0375 10.7688 0 10.9688 0C11.1687 0 11.3625 0.0375 11.55 0.1125C11.7375 0.1875 11.9 0.3 12.0375 0.45L13.0688 1.5C13.2188 1.6375 13.3281 1.8 13.3969 1.9875C13.4656 2.175 13.5 2.3625 13.5 2.55C13.5 2.75 13.4656 2.94062 13.3969 3.12188C13.3281 3.30313 13.2188 3.46875 13.0688 3.61875L3.1875 13.5H0Z" fill="#191C1E" />
    </svg>
  ),
  laporan: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10.5H4.5V6.75H3V10.5ZM9 10.5H10.5V3H9V10.5ZM6 10.5H7.5V8.25H6V10.5ZM6 6.75H7.5V5.25H6V6.75ZM1.5 13.5C1.0875 13.5 0.734375 13.3531 0.440625 13.0594C0.146875 12.7656 0 12.4125 0 12V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H12C12.4125 0 12.7656 0.146875 13.0594 0.440625C13.3531 0.734375 13.5 1.0875 13.5 1.5V12C13.5 12.4125 13.3531 12.7656 13.0594 13.0594C12.7656 13.3531 12.4125 13.5 12 13.5H1.5ZM1.5 12H12V1.5H1.5V12Z" fill="#191C1E" />
    </svg>
  ),
};

function ManajemenTryout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="teacher-dashboard manajemen-tryout">
      <TeacherSidebar active="Tryout" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content manajemen-tryout__content">
          <header className="mt-hero">
            <div className="mt-hero__text">
              <h1>Manajemen Tryout</h1>
              <p>
                Kelola jadwal, pantau performa real-time, dan buat sesi ujian baru untuk memastikan kesiapan siswa.
              </p>
            </div>
            <Link to="/manajemen-tryout/buat" className="mt-hero__cta">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 6.66667H0V5H5V0H6.66667V5H11.6667V6.66667H6.66667V11.6667H5V6.66667Z" fill="white" />
              </svg>
              Buat Tryout Baru
            </Link>
          </header>

          <section className="mt-stats">
            <article className="mt-stat">
              <div className="mt-stat__icon mt-stat__icon--blue">
                <svg width="20" height="22" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3333 24.5C14.7194 24.5 13.3438 23.9313 12.2063 22.7938C11.0688 21.6562 10.5 20.2806 10.5 18.6667C10.5 17.0528 11.0688 15.6771 12.2063 14.5396C13.3438 13.4021 14.7194 12.8333 16.3333 12.8333C17.9472 12.8333 19.3229 13.4021 20.4604 14.5396C21.5979 15.6771 22.1667 17.0528 22.1667 18.6667C22.1667 20.2806 21.5979 21.6562 20.4604 22.7938C19.3229 23.9313 17.9472 24.5 16.3333 24.5ZM2.33333 23.3333C1.69167 23.3333 1.14236 23.1049 0.685417 22.6479C0.228472 22.191 0 21.6417 0 21V4.66667C0 4.025 0.228472 3.47569 0.685417 3.01875C1.14236 2.56181 1.69167 2.33333 2.33333 2.33333H7.20417C7.41806 1.65278 7.83611 1.09375 8.45833 0.65625C9.08055 0.21875 9.76111 0 10.5 0C11.2778 0 11.9729 0.21875 12.5854 0.65625C13.1979 1.09375 13.6111 1.65278 13.825 2.33333H18.6667C19.3083 2.33333 19.8576 2.56181 20.3146 3.01875C20.7715 3.47569 21 4.025 21 4.66667V11.9583C20.65 11.7056 20.2806 11.4917 19.8917 11.3167C19.5028 11.1417 19.0944 10.9861 18.6667 10.85V4.66667H16.3333V8.16667H4.66667V4.66667H2.33333V21H8.51667C8.65278 21.4278 8.80833 21.8361 8.98333 22.225C9.15833 22.6139 9.37222 22.9833 9.625 23.3333H2.33333Z" fill="#004AC6" />
                </svg>
              </div>
              <p className="mt-stat__label">Tryout Aktif</p>
              <div className="mt-stat__value-row">
                <span className="mt-stat__value">3</span>
                <span className="mt-stat__unit">Sesi Live</span>
              </div>
            </article>

            <article className="mt-stat">
              <div className="mt-stat__icon mt-stat__icon--yellow">
                <svg width="22" height="12" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 14V12.1625C0 11.3264 0.427778 10.6458 1.28333 10.1208C2.13889 9.59583 3.26667 9.33333 4.66667 9.33333C4.91944 9.33333 5.1625 9.33819 5.39583 9.34792C5.62917 9.35764 5.85278 9.38194 6.06667 9.42083C5.79444 9.82917 5.59028 10.2569 5.45417 10.7042C5.31806 11.1514 5.25 11.6181 5.25 12.1042V14H0ZM7 14V12.1042C7 11.4819 7.17014 10.9132 7.51042 10.3979C7.85069 9.88264 8.33194 9.43056 8.95417 9.04167C9.57639 8.65278 10.3201 8.36111 11.1854 8.16667C12.0507 7.97222 12.9889 7.875 14 7.875C15.0306 7.875 15.9785 7.97222 16.8438 8.16667C17.709 8.36111 18.4528 8.65278 19.075 9.04167C19.6972 9.43056 20.1736 9.88264 20.5042 10.3979C20.8347 10.9132 21 11.4819 21 12.1042V14H7ZM14 7C13.0278 7 12.2014 6.65972 11.5208 5.97917C10.8403 5.29861 10.5 4.47222 10.5 3.5C10.5 2.50833 10.8403 1.67708 11.5208 1.00625C12.2014 0.335417 13.0278 0 14 0C14.9917 0 15.8229 0.335417 16.4937 1.00625C17.1646 1.67708 17.5 2.50833 17.5 3.5C17.5 4.47222 17.1646 5.29861 16.4937 5.97917C15.8229 6.65972 14.9917 7 14 7Z" fill="#6F5900" />
                </svg>
              </div>
              <p className="mt-stat__label">Total Peserta</p>
              <div className="mt-stat__value-row">
                <span className="mt-stat__value">12,450</span>
                <span className="mt-stat__unit">Siswa</span>
              </div>
              <div className="mt-stat__trend">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.933333 8L0 7.06667L4.93333 2.1L7.6 4.76667L11.0667 1.33333H9.33333V0H13.3333V4H12V2.26667L7.6 6.66667L4.93333 4L0.933333 8Z" fill="#10B981" />
                </svg>
                +12% minggu ini
              </div>
            </article>

            <article className="mt-stat">
              <div className="mt-stat__icon mt-stat__icon--purple">
                <svg width="20" height="21" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.89583 15.1958L0 13.825L5.83333 4.49167L9.33333 8.575L14 0.991667L17.5 6.24167L21.4375 0L23.3333 1.37083L17.5583 10.5292L14.0875 5.30833L9.65417 12.5125L6.125 8.4L1.89583 15.1958ZM15.75 19.8333C16.5667 19.8333 17.2569 19.5514 17.8208 18.9875C18.3847 18.4236 18.6667 17.7333 18.6667 16.9167C18.6667 16.1 18.3847 15.4097 17.8208 14.8458C17.2569 14.2819 16.5667 14 15.75 14C14.9333 14 14.2431 14.2819 13.6792 14.8458C13.1153 15.4097 12.8333 16.1 12.8333 16.9167C12.8333 17.7333 13.1153 18.4236 13.6792 18.9875C14.2431 19.5514 14.9333 19.8333 15.75 19.8333ZM21.7 24.5L18.55 21.35C18.1417 21.6222 17.6993 21.8264 17.2229 21.9625C16.7465 22.0986 16.2556 22.1667 15.75 22.1667C14.2917 22.1667 13.0521 21.6562 12.0312 20.6354C11.0104 19.6146 10.5 18.375 10.5 16.9167C10.5 15.4583 11.0104 14.2188 12.0312 13.1979C13.0521 12.1771 14.2917 11.6667 15.75 11.6667C17.2083 11.6667 18.4479 12.1771 19.4688 13.1979C20.4896 14.2188 21 15.4583 21 16.9167C21 17.4222 20.9319 17.9132 20.7958 18.3896C20.6597 18.866 20.4556 19.3083 20.1833 19.7167L23.3333 22.8667L21.7 24.5Z" fill="#6A1EDB" />
                </svg>
              </div>
              <p className="mt-stat__label">Rata-rata Skor</p>
              <div className="mt-stat__value-row">
                <span className="mt-stat__value">72</span>
                <span className="mt-stat__unit">/100</span>
              </div>
              <div className="mt-stat__track">
                <div className="mt-stat__track-fill" style={{ width: "72%" }} />
              </div>
            </article>

            <article className="mt-stat">
              <div className="mt-stat__icon mt-stat__icon--green">
                <svg width="22" height="21" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.86667 24.5L6.65 20.7667L2.45 19.8333L2.85833 15.5167L0 12.25L2.85833 8.98333L2.45 4.66667L6.65 3.73333L8.86667 0L12.8333 1.69167L16.8 0L19.0167 3.73333L23.2167 4.66667L22.8083 8.98333L25.6667 12.25L22.8083 15.5167L23.2167 19.8333L19.0167 20.7667L16.8 24.5L12.8333 22.8083L8.86667 24.5ZM9.85833 21.525L12.8333 20.2417L15.8667 21.525L17.5 18.725L20.7083 17.9667L20.4167 14.7L22.575 12.25L20.4167 9.74167L20.7083 6.475L17.5 5.775L15.8083 2.975L12.8333 4.25833L9.8 2.975L8.16667 5.775L4.95833 6.475L5.25 9.74167L3.09167 12.25L5.25 14.7L4.95833 18.025L8.16667 18.725L9.85833 21.525ZM11.6083 16.3917L18.2 9.8L16.5667 8.10833L11.6083 13.0667L9.1 10.6167L7.46667 12.25L11.6083 16.3917Z" fill="#10B981" />
                </svg>
              </div>
              <p className="mt-stat__label">Status Kelulusan</p>
              <div className="mt-stat__value-row">
                <span className="mt-stat__value">88%</span>
              </div>
              <p className="mt-stat__sub">di atas passing grade</p>
            </article>
          </section>

          <div className="mt-layout">
            <div className="mt-main">
              <div className="mt-section-header">
                <h2>Jadwal & Sesi Aktif</h2>
              </div>

              <div className="mt-list">
                {tryoutItems.map((item) => (
                  <article className={`mt-item mt-item--${item.status}`} key={item.key}>
                    <div className="mt-item__top">
                      <div className="mt-item__body">
                        <div className="mt-item__tags">
                          <span className={`mt-item__status mt-item__status--${item.status}`}>
                            {item.status === "live" ? <i className="mt-item__dot" /> : null}
                            {item.statusLabel}
                          </span>
                          <span className="mt-item__category">{item.category}</span>
                        </div>
                        <h3>{item.title}</h3>
                        <div className="mt-item__meta">
                          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V3C0 2.5875 0.146875 2.23438 0.440625 1.94062C0.734375 1.64687 1.0875 1.5 1.5 1.5H2.25V0H3.75V1.5H9.75V0H11.25V1.5H12C12.4125 1.5 12.7656 1.64687 13.0594 1.94062C13.3531 2.23438 13.5 2.5875 13.5 3V13.5C13.5 13.9125 13.3531 14.2656 13.0594 14.5594C12.7656 14.8531 12.4125 15 12 15H1.5ZM1.5 13.5H12V6H1.5V13.5ZM1.5 4.5H12V3H1.5V4.5Z" fill="#434655" />
                          </svg>
                          <span>{item.meta}</span>
                          <span className="mt-item__meta-sep" />
                          <span>{item.countLabel}</span>
                        </div>
                      </div>
                      <Link
                        to={item.action.to ?? "#"}
                        className={`mt-item__btn mt-item__btn--${item.action.icon}`}
                      >
                        {actionIcons[item.action.icon]}
                        {item.action.label}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <button type="button" className="mt-see-all">
                Lihat Semua Jadwal
              </button>
            </div>

            <aside className="mt-aside">
              <section className="mt-ai-widget">
                <img
                  className="mt-ai-widget__mascot"
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e43579ecef3bcd4e397086203ea1756a228a7a46?width=256"
                  alt=""
                />
                <div className="mt-ai-widget__head">
                  <span className="mt-ai-widget__icon">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 6.66667L13.9583 4.375L11.6667 3.33333L13.9583 2.29167L15 0L16.0417 2.29167L18.3333 3.33333L16.0417 4.375L15 6.66667ZM15 18.3333L13.9583 16.0417L11.6667 15L13.9583 13.9583L15 11.6667L16.0417 13.9583L18.3333 15L16.0417 16.0417L15 18.3333ZM6.66667 15.8333L4.58333 11.25L0 9.16667L4.58333 7.08333L6.66667 2.5L8.75 7.08333L13.3333 9.16667L8.75 11.25L6.66667 15.8333ZM6.66667 11.7917L7.5 10L9.29167 9.16667L7.5 8.33333L6.66667 6.54167L5.83333 8.33333L4.04167 9.16667L5.83333 10L6.66667 11.7917Z" fill="white" />
                    </svg>
                  </span>
                  <h3>AI Tryout Generator</h3>
                </div>
                <p className="mt-ai-widget__desc">
                  Buat draf tryout dalam hitungan detik. AI akan memilih soal berimbang dari Bank Soal.
                </p>
                <div className="mt-ai-widget__field">
                  <label>Mata Pelajaran</label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Pilih Mapel...
                    </option>
                    <option>Matematika</option>
                    <option>Bahasa Indonesia</option>
                    <option>IPA</option>
                  </select>
                </div>
                <div className="mt-ai-widget__row">
                  <div className="mt-ai-widget__field">
                    <label>Jumlah Soal</label>
                    <input type="number" placeholder="Contoh: 40" />
                  </div>
                  <div className="mt-ai-widget__field">
                    <label>Tingkat Sulit</label>
                    <select defaultValue="Medium">
                      <option>Mudah</option>
                      <option>Medium</option>
                      <option>Sulit</option>
                    </select>
                  </div>
                </div>
                <button type="button" className="mt-ai-widget__generate">
                  <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.9125 12.15L8.79375 7.5H5.79375L6.3375 3.24375L2.86875 8.25H5.475L4.9125 12.15ZM3 15L3.75 9.75H0L6.75 0H8.25L7.5 6H12L4.5 15H3Z" fill="white" />
                  </svg>
                  Generate Draf
                </button>
              </section>

              <section className="mt-live-monitor">
                <div className="mt-live-monitor__head">
                  <h3>
                    <i className="mt-live-monitor__dot" />
                    Live Monitor
                  </h3>
                  <button type="button">Log Penuh</button>
                </div>
                <div className="mt-live-monitor__list">
                  {liveMonitorItems.map((item) => (
                    <div className="mt-live-monitor__item" key={item.key}>
                      <span className={`mt-live-monitor__avatar mt-live-monitor__avatar--${item.footnoteColor}`}>
                        {item.footnoteColor === "amber" ? (
                          <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12.6667L7.33333 0L14.6667 12.6667H0ZM2.3 11.3333H12.3667L7.33333 2.66667L2.3 11.3333ZM7.33333 10.6667C7.52222 10.6667 7.68056 10.6028 7.80833 10.475C7.93611 10.3472 8 10.1889 8 10C8 9.81111 7.93611 9.65278 7.80833 9.525C7.68056 9.39722 7.52222 9.33333 7.33333 9.33333C7.14444 9.33333 6.98611 9.39722 6.85833 9.525C6.73056 9.65278 6.66667 9.81111 6.66667 10C6.66667 10.1889 6.73056 10.3472 6.85833 10.475C6.98611 10.6028 7.14444 10.6667 7.33333 10.6667ZM6.66667 8.66667H8V5.33333H6.66667V8.66667Z" fill="#F59E0B" />
                          </svg>
                        ) : (
                          item.name.charAt(0)
                        )}
                      </span>
                      <div className="mt-live-monitor__body">
                        <p>
                          {item.name ? <strong>{item.name} </strong> : null}
                          {item.text}
                        </p>
                        {item.footnote ? (
                          <p className={`mt-live-monitor__footnote mt-live-monitor__footnote--${item.footnoteColor}`}>
                            {item.footnote}
                          </p>
                        ) : null}
                        <p className="mt-live-monitor__time">{item.time}</p>
                      </div>
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

export default ManajemenTryout;
