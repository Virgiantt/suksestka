import { useState } from "react";
import { Link } from "react-router-dom";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import AppFooter from "../components/AppFooter";
import "./Materi.css";

const videoThumbnailSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/a82207628c01b1cc347c13821898637a72aabd6a?width=1362";
const circulatorySystemDiagramSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/a8c10cc20f384df83725f574631a9bab0ee2bcab?width=1229";

type ModuleItem = {
  key: string;
  number: number;
  title: string;
  status: "done" | "active" | "locked";
};

const moduleItems: ModuleItem[] = [
  { key: "bab1", number: 1, title: "Jaringan pada Hewan", status: "done" },
  { key: "bab2", number: 2, title: "Sistem Peredaran Darah Hewan", status: "active" },
  { key: "bab3", number: 3, title: "Sistem Pencernaan Hewan", status: "locked" },
];

const quizOptions = ["A. Ikan Mas", "B. Belalang", "C. Cacing Tanah"];

const notes = [
  "Hemolimfa adalah cairan pada sistem terbuka.",
  "Vertebrata selalu memiliki sistem tertutup.",
  "Tekanan darah sistem tertutup jauh lebih tinggi.",
];

function ChevronIcon() {
  return (
    <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.68333 3.5L0 0.816667L0.816667 0L4.31667 3.5L0.816667 7L0 6.18333L2.68333 3.5Z" fill="#434655" />
    </svg>
  );
}

function Materi() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-page">
      <AppSidebar active="Belajar" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main materi-main">
        <AppTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="materi-content">
          <div className="materi-blobs" aria-hidden="true">
            <span className="materi-blob materi-blob--blue" />
            <span className="materi-blob materi-blob--purple" />
            <span className="materi-blob materi-blob--rose" />
            <span className="materi-blob materi-blob--green" />
          </div>

          <div className="materi-layout">
            <section className="materi-main-column">
              <div className="materi-header">
                <nav className="materi-breadcrumb" aria-label="Breadcrumb">
                  <Link to="/belajar">Belajar</Link>
                  <ChevronIcon />
                  <span>IPA</span>
                  <ChevronIcon />
                  <span className="materi-breadcrumb__current-parent">Sistem Biologi Hewan</span>
                  <ChevronIcon />
                  <span className="materi-breadcrumb__current">Bab 4</span>
                </nav>

                <div className="materi-header__row">
                  <h1 className="materi-title">4.2 Sistem Peredaran Darah Hewan</h1>
                  <button type="button" className="materi-btn-primary">
                    Selesai & Lanjut
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.10208 5.25H0V4.08333H7.10208L3.83542 0.816667L4.66667 0L9.33333 4.66667L4.66667 9.33333L3.83542 8.51667L7.10208 5.25Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="materi-video">
                <img src={videoThumbnailSrc} alt="Materi: Sistem Peredaran Darah Hewan" className="materi-video__thumb" />
                <div className="materi-video__controls">
                  <div className="materi-video__bar">
                    <button type="button" className="materi-video__control-btn" aria-label="Mundur 10 detik" />
                    <div className="materi-video__track">
                      <div className="materi-video__track-fill" style={{ width: "30%" }}>
                        <span className="materi-video__track-handle" />
                      </div>
                    </div>
                    <span className="materi-video__time">03:45 / 12:20</span>
                    <button type="button" className="materi-video__control-btn" aria-label="Pause" />
                    <button type="button" className="materi-video__control-btn" aria-label="Layar penuh" />
                  </div>
                </div>
              </div>

              <article className="materi-article">
                <h2 className="materi-article__title">Konsep Dasar Peredaran Darah</h2>
                <p className="materi-article__text">
                  Sistem peredaran darah pada hewan bertugas mendistribusikan nutrisi, oksigen, dan hormon ke
                  seluruh tubuh, serta mengangkut sisa metabolisme. Secara umum, sistem ini dibedakan menjadi dua
                  jenis utama: sistem peredaran darah terbuka dan tertutup.
                </p>

                <div className="materi-compare-grid">
                  <div className="materi-compare-card materi-compare-card--purple">
                    <h3 className="materi-compare-card__title">
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.275 17C8.475 16.9833 8.64583 16.9042 8.7875 16.7625C8.92917 16.6208 9 16.45 9 16.25C9 16.0167 8.925 15.8292 8.775 15.6875C8.625 15.5458 8.43333 15.4833 8.2 15.5C7.51667 15.55 6.79167 15.3625 6.025 14.9375C5.25833 14.5125 4.775 13.7417 4.575 12.625C4.54167 12.4417 4.45417 12.2917 4.3125 12.175C4.17083 12.0583 4.00833 12 3.825 12C3.59167 12 3.4 12.0875 3.25 12.2625C3.1 12.4375 3.05 12.6417 3.1 12.875C3.38333 14.3917 4.05 15.475 5.1 16.125C6.15 16.775 7.20833 17.0667 8.275 17ZM8 20C5.71667 20 3.8125 19.2167 2.2875 17.65C0.7625 16.0833 0 14.1333 0 11.8C0 10.1333 0.6625 8.32083 1.9875 6.3625C3.3125 4.40417 5.31667 2.28333 8 0C10.6833 2.28333 12.6875 4.40417 14.0125 6.3625C15.3375 8.32083 16 10.1333 16 11.8C16 14.1333 15.2375 16.0833 13.7125 17.65C12.1875 19.2167 10.2833 20 8 20ZM8 18C9.73333 18 11.1667 17.4125 12.3 16.2375C13.4333 15.0625 14 13.5833 14 11.8C14 10.5833 13.4958 9.20833 12.4875 7.675C11.4792 6.14167 9.98333 4.46667 8 2.65C6.01667 4.46667 4.52083 6.14167 3.5125 7.675C2.50417 9.20833 2 10.5833 2 11.8C2 13.5833 2.56667 15.0625 3.7 16.2375C4.83333 17.4125 6.26667 18 8 18Z"
                          fill="#8343F4"
                        />
                      </svg>
                      Sistem Terbuka
                    </h3>
                    <ul className="materi-compare-card__list">
                      <li>Darah (hemolimfa) tidak selalu berada dalam pembuluh darah.</li>
                      <li>Mengalir perlahan dengan tekanan rendah.</li>
                      <li>Contoh: Serangga (Arthropoda), sebagian besar Moluska.</li>
                    </ul>
                  </div>

                  <div className="materi-compare-card materi-compare-card--blue">
                    <h3 className="materi-compare-card__title">
                      <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5.5 11C3.96667 11 2.66667 10.4667 1.6 9.4C0.533333 8.33333 0 7.03333 0 5.5C0 3.96667 0.533333 2.66667 1.6 1.6C2.66667 0.533333 3.96667 0 5.5 0C6.11667 0 6.70833 0.108333 7.275 0.325C7.84167 0.541667 8.35 0.85 8.8 1.25L10.5 2.8L9 4.15L7.45 2.75C7.18333 2.51667 6.88333 2.33333 6.55 2.2C6.21667 2.06667 5.86667 2 5.5 2C4.53333 2 3.70833 2.34167 3.025 3.025C2.34167 3.70833 2 4.53333 2 5.5C2 6.46667 2.34167 7.29167 3.025 7.975C3.70833 8.65833 4.53333 9 5.5 9C5.86667 9 6.21667 8.93333 6.55 8.8C6.88333 8.66667 7.18333 8.48333 7.45 8.25L15.2 1.25C15.65 0.85 16.1583 0.541667 16.725 0.325C17.2917 0.108333 17.8833 0 18.5 0C20.0333 0 21.3333 0.533333 22.4 1.6C23.4667 2.66667 24 3.96667 24 5.5C24 7.03333 23.4667 8.33333 22.4 9.4C21.3333 10.4667 20.0333 11 18.5 11C17.8833 11 17.2917 10.8917 16.725 10.675C16.1583 10.4583 15.65 10.15 15.2 9.75L13.5 8.2L15 6.85L16.55 8.25C16.8167 8.48333 17.1167 8.66667 17.45 8.8C17.7833 8.93333 18.1333 9 18.5 9C19.4667 9 20.2917 8.65833 20.975 7.975C21.6583 7.29167 22 6.46667 22 5.5C22 4.53333 21.6583 3.70833 20.975 3.025C20.2917 2.34167 19.4667 2 18.5 2C18.1333 2 17.7833 2.06667 17.45 2.2C17.1167 2.33333 16.8167 2.51667 16.55 2.75L8.8 9.75C8.35 10.15 7.84167 10.4583 7.275 10.675C6.70833 10.8917 6.11667 11 5.5 11Z"
                          fill="#2563EB"
                        />
                      </svg>
                      Sistem Tertutup
                    </h3>
                    <ul className="materi-compare-card__list">
                      <li>Darah selalu mengalir di dalam jaringan pembuluh darah.</li>
                      <li>Darah dipompa oleh jantung dengan tekanan tinggi.</li>
                      <li>Contoh: Annelida (cacing tanah), semua Vertebrata.</li>
                    </ul>
                  </div>
                </div>

                <div className="materi-diagram">
                  <img src={circulatorySystemDiagramSrc} alt="Perbandingan sistem peredaran darah terbuka dan tertutup" />
                </div>
              </article>
            </section>

            <aside className="materi-side">
              <div className="materi-module-card">
                <div className="materi-module-card__header">
                  <h3>Daftar Isi Modul</h3>
                  <span className="materi-pill">Bab 4</span>
                </div>

                <ol className="materi-module-timeline">
                  {moduleItems.map((item) => (
                    <li
                      key={item.key}
                      className={`materi-module-item materi-module-item--${item.status}`}
                    >
                      <span className="materi-module-item__marker">
                        {item.status === "done" ? (
                          <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.79167 7.9625L0 4.17083L1.3125 2.85833L3.79167 5.3375L9.12917 0L10.4417 1.3125L3.79167 7.9625Z" fill="white" />
                          </svg>
                        ) : item.status === "active" ? (
                          <span className="materi-module-item__dot" />
                        ) : (
                          <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.16667 12.25C0.845833 12.25 0.571181 12.1358 0.342708 11.9073C0.114236 11.6788 0 11.4042 0 11.0833V5.25C0 4.92917 0.114236 4.65451 0.342708 4.42604C0.571181 4.19757 0.845833 4.08333 1.16667 4.08333H1.75V2.91667C1.75 2.10972 2.03438 1.42188 2.60313 0.853125C3.17188 0.284375 3.85972 0 4.66667 0C5.47361 0 6.16146 0.284375 6.73021 0.853125C7.29896 1.42188 7.58333 2.10972 7.58333 2.91667V4.08333H8.16667C8.4875 4.08333 8.76215 4.19757 8.99063 4.42604C9.2191 4.65451 9.33333 4.92917 9.33333 5.25V11.0833C9.33333 11.4042 9.2191 11.6788 8.99063 11.9073C8.76215 12.1358 8.4875 12.25 8.16667 12.25H1.16667ZM1.16667 11.0833H8.16667V5.25H1.16667V11.0833ZM4.66667 9.33333C4.9875 9.33333 5.26215 9.2191 5.49062 8.99063C5.7191 8.76215 5.83333 8.4875 5.83333 8.16667C5.83333 7.84583 5.7191 7.57118 5.49062 7.34271C5.26215 7.11424 4.9875 7 4.66667 7C4.34583 7 4.07118 7.11424 3.84271 7.34271C3.61424 7.57118 3.5 7.84583 3.5 8.16667C3.5 8.4875 3.61424 8.76215 3.84271 8.99063C4.07118 9.2191 4.34583 9.33333 4.66667 9.33333ZM2.91667 4.08333H6.41667V2.91667C6.41667 2.43056 6.24653 2.01736 5.90625 1.67708C5.56597 1.33681 5.15278 1.16667 4.66667 1.16667C4.18056 1.16667 3.76736 1.33681 3.42708 1.67708C3.08681 2.01736 2.91667 2.43056 2.91667 2.91667V4.08333Z"
                              fill="#737686"
                            />
                          </svg>
                        )}
                      </span>

                      {item.status === "active" ? (
                        <div className="materi-module-item__card">
                          <p className="materi-module-item__eyebrow">SEDANG DIPELAJARI</p>
                          <p className="materi-module-item__title">{item.title}</p>
                        </div>
                      ) : (
                        <p className="materi-module-item__title">{item.title}</p>
                      )}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="materi-ai-widget">
                <div className="materi-ai-widget__header">
                  <span className="materi-ai-widget__avatar">
                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H8C8 2.16667 8.29167 1.45833 8.875 0.875C9.45833 0.291667 10.1667 0 11 0C11.8333 0 12.5417 0.291667 13.125 0.875C13.7083 1.45833 14 2.16667 14 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V7C19.8333 7 20.5417 7.29167 21.125 7.875C21.7083 8.45833 22 9.16667 22 10C22 10.8333 21.7083 11.5417 21.125 12.125C20.5417 12.7083 19.8333 13 19 13V17C19 17.55 18.8042 18.0208 18.4125 18.4125C18.0208 18.8042 17.55 19 17 19H5C4.45 19 3.97917 18.8042 3.5875 18.4125C3.19583 18.0208 3 17.55 3 17V13ZM8 11C8.41667 11 8.77083 10.8542 9.0625 10.5625C9.35417 10.2708 9.5 9.91667 9.5 9.5C9.5 9.08333 9.35417 8.72917 9.0625 8.4375C8.77083 8.14583 8.41667 8 8 8C7.58333 8 7.22917 8.14583 6.9375 8.4375C6.64583 8.72917 6.5 9.08333 6.5 9.5C6.5 9.91667 6.64583 10.2708 6.9375 10.5625C7.22917 10.8542 7.58333 11 8 11ZM14 11C14.4167 11 14.7708 10.8542 15.0625 10.5625C15.3542 10.2708 15.5 9.91667 15.5 9.5C15.5 9.08333 15.3542 8.72917 15.0625 8.4375C14.7708 8.14583 14.4167 8 14 8C13.5833 8 13.2292 8.14583 12.9375 8.4375C12.6458 8.72917 12.5 9.08333 12.5 9.5C12.5 9.91667 12.6458 10.2708 12.9375 10.5625C13.2292 10.8542 13.5833 11 14 11ZM7 15H15V13H7V15ZM5 17H17V5H5V17Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3>Tanya AI Tutor</h3>
                    <p>Siap membantu bab ini</p>
                  </div>
                </div>
                <p className="materi-ai-widget__prompt">
                  Bingung membedakan peredaran darah belalang dan ikan? Tanya sekarang!
                </p>
                <div className="materi-ai-widget__input">
                  <input type="text" placeholder="Ketik pertanyaanmu..." />
                  <button type="button" aria-label="Kirim pertanyaan">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 9.33333V0L11.0833 4.66667L0 9.33333ZM1.16667 7.58333L8.07917 4.66667L1.16667 1.75V3.79167L4.66667 4.66667L1.16667 5.54167V7.58333Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="materi-quiz-card">
                <div className="materi-quiz-card__header">
                  <h3>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 13C12.2833 13 12.5292 12.8958 12.7375 12.6875C12.9458 12.4792 13.05 12.2333 13.05 11.95C13.05 11.6667 12.9458 11.4208 12.7375 11.2125C12.5292 11.0042 12.2833 10.9 12 10.9C11.7167 10.9 11.4708 11.0042 11.2625 11.2125C11.0542 11.4208 10.95 11.6667 10.95 11.95C10.95 12.2333 11.0542 12.4792 11.2625 12.6875C11.4708 12.8958 11.7167 13 12 13ZM11.25 9.8H12.75C12.75 9.31667 12.8 8.9625 12.9 8.7375C13 8.5125 13.2333 8.21667 13.6 7.85C14.1 7.35 14.4333 6.94583 14.6 6.6375C14.7667 6.32917 14.85 5.96667 14.85 5.55C14.85 4.8 14.5875 4.1875 14.0625 3.7125C13.5375 3.2375 12.85 3 12 3C11.3167 3 10.7208 3.19167 10.2125 3.575C9.70417 3.95833 9.35 4.46667 9.15 5.1L10.5 5.65C10.65 5.23333 10.8542 4.92083 11.1125 4.7125C11.3708 4.50417 11.6667 4.4 12 4.4C12.4 4.4 12.725 4.5125 12.975 4.7375C13.225 4.9625 13.35 5.26667 13.35 5.65C13.35 5.88333 13.2833 6.10417 13.15 6.3125C13.0167 6.52083 12.7833 6.78333 12.45 7.1C11.9 7.58333 11.5625 7.9625 11.4375 8.2375C11.3125 8.5125 11.25 9.03333 11.25 9.8ZM6 16C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H6ZM6 14H18V2H6V14ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4H2V18H16V20H2ZM6 2V14V2Z"
                        fill="#FB923C"
                      />
                    </svg>
                    Kuis Cepat
                  </h3>
                  <span className="materi-quiz-card__xp">+50 XP</span>
                </div>
                <p className="materi-quiz-card__question">
                  Manakah hewan berikut yang memiliki sistem peredaran darah terbuka?
                </p>
                <div className="materi-quiz-card__options">
                  {quizOptions.map((option) => (
                    <button type="button" key={option} className="materi-quiz-card__option">
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="materi-notes-card">
                <div className="materi-notes-card__header">
                  <h3>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 16H11V11H16V2H2V16ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V12L12 18H2ZM4 11V9H9V11H4ZM4 7V5H14V7H4ZM2 16V11V2V16Z"
                        fill="#735C00"
                      />
                    </svg>
                    Catatan Penting
                  </h3>
                  <button type="button" className="materi-notes-card__close" aria-label="Tutup">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.5 9.33333C3.17917 9.33333 2.90451 9.2191 2.67604 8.99063C2.44757 8.76215 2.33333 8.4875 2.33333 8.16667V1.16667C2.33333 0.845833 2.44757 0.571181 2.67604 0.342708C2.90451 0.114236 3.17917 0 3.5 0H8.75C9.07083 0 9.34549 0.114236 9.57396 0.342708C9.80243 0.571181 9.91667 0.845833 9.91667 1.16667V8.16667C9.91667 8.4875 9.80243 8.76215 9.57396 8.99063C9.34549 9.2191 9.07083 9.33333 8.75 9.33333H3.5ZM3.5 8.16667H8.75V1.16667H3.5V8.16667ZM1.16667 11.6667C0.845833 11.6667 0.571181 11.5524 0.342708 11.324C0.114236 11.0955 0 10.8208 0 10.5V2.33333H1.16667V10.5H7.58333V11.6667H1.16667ZM3.5 8.16667V1.16667V8.16667Z"
                        fill="#6F5900"
                        fillOpacity="0.6"
                      />
                    </svg>
                  </button>
                </div>

                <div className="materi-notes-card__list">
                  {notes.map((note) => (
                    <div className="materi-note" key={note}>
                      {note}
                    </div>
                  ))}
                </div>

                <button type="button" className="materi-notes-card__save">
                  <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 10.5V1.16667C0 0.845833 0.114236 0.571181 0.342708 0.342708C0.571181 0.114236 0.845833 0 1.16667 0H7C7.32083 0 7.59549 0.114236 7.82396 0.342708C8.05243 0.571181 8.16667 0.845833 8.16667 1.16667V10.5L4.08333 8.75L0 10.5ZM1.16667 8.72083L4.08333 7.46667L7 8.72083V1.16667H1.16667V8.72083Z"
                      fill="#231B00"
                    />
                  </svg>
                  Simpan Catatan
                </button>
              </div>
            </aside>
          </div>
        </div>

        <div className="materi-footer-wrap">
          <AppFooter />
        </div>
      </div>
    </div>
  );
}

export default Materi;
