import { useState } from "react";
import { Link } from "react-router-dom";
import "./LatihanSesi.css";

const logoImageSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/1f12ec19af04de3ffaf741c8c718b55f04c4a210?width=132";

type QuestionStatus = "done" | "belum" | "ragu" | "active";

const totalQuestions = 30;
const activeQuestion = 12;
const raguQuestions = [3, 9];
const doneQuestions = [1, 2, 4, 5, 6, 7, 8, 10, 11];

const questionStatuses: QuestionStatus[] = Array.from({ length: totalQuestions }, (_, index) => {
  const number = index + 1;
  if (number === activeQuestion) return "active";
  if (raguQuestions.includes(number)) return "ragu";
  if (doneQuestions.includes(number)) return "done";
  return "belum";
});

const answeredCount = doneQuestions.length + raguQuestions.length;

const options = [
  { key: "A", text: "1155 m³" },
  { key: "B", text: "1540 m³" },
  { key: "C", text: "115.5 m³" },
  { key: "D", text: "3080 m³" },
  { key: "E", text: "770 m³" },
];

function LatihanSesi() {
  const [selected, setSelected] = useState("B");
  const [raguRagu, setRaguRagu] = useState(false);

  return (
    <div className="latsesi-page">
      <div className="latsesi-blobs" aria-hidden="true">
        <span className="latsesi-blob latsesi-blob--blue" />
        <span className="latsesi-blob latsesi-blob--purple" />
        <span className="latsesi-blob latsesi-blob--rose" />
        <span className="latsesi-blob latsesi-blob--green" />
      </div>

      <header className="latsesi-header">
        <img src={logoImageSrc} alt="" className="latsesi-header__logo" />
        <span className="latsesi-header__brand">
          <span className="latsesi-header__brand-blue">Sukses</span>
          <span className="latsesi-header__brand-green">TKA</span>
        </span>
        <span className="latsesi-header__divider" />
        <h1 className="latsesi-header__title">Pengerjaan Latihan - Matematika</h1>

        <div className="latsesi-header__actions">
          <span className="latsesi-timer">
            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 2V0H12V2H6ZM8 13H10V7H8V13ZM9 21C7.76667 21 6.60417 20.7625 5.5125 20.2875C4.42083 19.8125 3.46667 19.1667 2.65 18.35C1.83333 17.5333 1.1875 16.5792 0.7125 15.4875C0.2375 14.3958 0 13.2333 0 12C0 10.7667 0.2375 9.60417 0.7125 8.5125C1.1875 7.42083 1.83333 6.46667 2.65 5.65C3.46667 4.83333 4.42083 4.1875 5.5125 3.7125C6.60417 3.2375 7.76667 3 9 3C10.0333 3 11.025 3.16667 11.975 3.5C12.925 3.83333 13.8167 4.31667 14.65 4.95L16.05 3.55L17.45 4.95L16.05 6.35C16.6833 7.18333 17.1667 8.075 17.5 9.025C17.8333 9.975 18 10.9667 18 12C18 13.2333 17.7625 14.3958 17.2875 15.4875C16.8125 16.5792 16.1667 17.5333 15.35 18.35C14.5333 19.1667 13.5792 19.8125 12.4875 20.2875C11.3958 20.7625 10.2333 21 9 21ZM9 19C10.9333 19 12.5833 18.3167 13.95 16.95C15.3167 15.5833 16 13.9333 16 12C16 10.0667 15.3167 8.41667 13.95 7.05C12.5833 5.68333 10.9333 5 9 5C7.06667 5 5.41667 5.68333 4.05 7.05C2.68333 8.41667 2 10.0667 2 12C2 13.9333 2.68333 15.5833 4.05 16.95C5.41667 18.3167 7.06667 19 9 19Z"
                fill="#F59E0B"
              />
            </svg>
            45:12
          </span>
          <Link to="/latihan-soal" className="latsesi-end-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V12H2V16H16V2H2V6H0V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM7.5 14L6.1 12.55L8.65 10H0V8H8.65L6.1 5.45L7.5 4L12.5 9L7.5 14Z"
                fill="#434655"
              />
            </svg>
            Akhiri Latihan
          </Link>
        </div>
      </header>

      <main className="latsesi-main">
        <section className="latsesi-question-card">
          <div className="latsesi-question-card__header">
            <div className="latsesi-question-card__number">
              <span className="latsesi-question-card__number-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 13C12.2833 13 12.5292 12.8958 12.7375 12.6875C12.9458 12.4792 13.05 12.2333 13.05 11.95C13.05 11.6667 12.9458 11.4208 12.7375 11.2125C12.5292 11.0042 12.2833 10.9 12 10.9C11.7167 10.9 11.4708 11.0042 11.2625 11.2125C11.0542 11.4208 10.95 11.6667 10.95 11.95C10.95 12.2333 11.0542 12.4792 11.2625 12.6875C11.4708 12.8958 11.7167 13 12 13ZM11.25 9.8H12.75C12.75 9.31667 12.8 8.9625 12.9 8.7375C13 8.5125 13.2333 8.21667 13.6 7.85C14.1 7.35 14.4333 6.94583 14.6 6.6375C14.7667 6.32917 14.85 5.96667 14.85 5.55C14.85 4.8 14.5875 4.1875 14.0625 3.7125C13.5375 3.2375 12.85 3 12 3C11.3167 3 10.7208 3.19167 10.2125 3.575C9.70417 3.95833 9.35 4.46667 9.15 5.1L10.5 5.65C10.65 5.23333 10.8542 4.92083 11.1125 4.7125C11.3708 4.50417 11.6667 4.4 12 4.4C12.4 4.4 12.725 4.5125 12.975 4.7375C13.225 4.9625 13.35 5.26667 13.35 5.65C13.35 5.88333 13.2833 6.10417 13.15 6.3125C13.0167 6.52083 12.7833 6.78333 12.45 7.1C11.9 7.58333 11.5625 7.9625 11.4375 8.2375C11.3125 8.5125 11.25 9.03333 11.25 9.8ZM6 16C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H6ZM6 14H18V2H6V14ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4H2V18H16V20H2ZM6 2V14V2Z"
                    fill="#004AC6"
                  />
                </svg>
              </span>
              <div>
                <p className="latsesi-question-card__eyebrow">SOAL KE</p>
                <p className="latsesi-question-card__value">
                  {activeQuestion} <span>/ {totalQuestions}</span>
                </p>
              </div>
            </div>
            <span className="latsesi-category-pill">
              <span className="latsesi-category-pill__dot" />
              Geometri
            </span>
          </div>

          <div className="latsesi-question-card__body">
            <p className="latsesi-question-card__text">
              Jika sebuah tangki air berbentuk silinder memiliki jari-jari 7m dan tinggi 10m, berapakah
              volume air jika tangki tersebut terisi 3/4 bagian?
            </p>
            <p className="latsesi-question-card__note">(Gunakan pi = 22/7)</p>
          </div>

          <span className="latsesi-question-card__accent" />

          <div className="latsesi-options">
            {options.map((option) => (
              <button
                type="button"
                key={option.key}
                className={`latsesi-option${selected === option.key ? " latsesi-option--selected" : ""}`}
                onClick={() => setSelected(option.key)}
              >
                <span className="latsesi-option__badge">{option.key}</span>
                <span className="latsesi-option__text">{option.text}</span>
              </button>
            ))}
          </div>

          <div className="latsesi-question-card__footer">
            <button type="button" className="latsesi-nav-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#434655" />
              </svg>
              Sebelumnya
            </button>

            <label className="latsesi-ragu">
              <input
                type="checkbox"
                checked={raguRagu}
                onChange={(event) => setRaguRagu(event.target.checked)}
              />
              Ragu-ragu
              <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 9.91667V0H5.25L5.48333 1.16667H8.75V7H4.66667L4.43333 5.83333H1.16667V9.91667H0ZM5.62917 5.83333H7.58333V2.33333H4.52083L4.2875 1.16667H1.16667V4.66667H5.39583L5.62917 5.83333Z"
                  fill="#F59E0B"
                />
              </svg>
            </label>

            <button type="button" className="latsesi-btn-primary">
              Selanjutnya
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white" />
              </svg>
            </button>
          </div>
        </section>

        <aside className="latsesi-side">
          <div className="latsesi-progress-card">
            <h3 className="latsesi-progress-card__title">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 14H6V9H4V14ZM12 14H14V4H12V14ZM8 14H10V11H8V14ZM8 9H10V7H8V9ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16ZM2 2V16V2Z"
                  fill="#004AC6"
                />
              </svg>
              Progres Latihan
            </h3>
            <div className="latsesi-progress-card__row">
              <p className="latsesi-progress-card__value">
                {answeredCount}
                <span>/{totalQuestions}</span>
              </p>
              <p className="latsesi-progress-card__label">Terjawab</p>
            </div>
            <div className="latsesi-progress-card__track">
              <div
                className="latsesi-progress-card__fill"
                style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          <div className="latsesi-nav-card">
            <div className="latsesi-nav-card__header">
              <h3>Navigasi Soal</h3>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.25 8.75H6.41667V5.25H5.25V8.75ZM5.83333 4.08333C5.99861 4.08333 6.13715 4.02743 6.24896 3.91563C6.36076 3.80382 6.41667 3.66528 6.41667 3.5C6.41667 3.33472 6.36076 3.19618 6.24896 3.08437C6.13715 2.97257 5.99861 2.91667 5.83333 2.91667C5.66806 2.91667 5.52951 2.97257 5.41771 3.08437C5.3059 3.19618 5.25 3.33472 5.25 3.5C5.25 3.66528 5.3059 3.80382 5.41771 3.91563C5.52951 4.02743 5.66806 4.08333 5.83333 4.08333ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667ZM5.83333 10.5C7.13611 10.5 8.23958 10.0479 9.14375 9.14375C10.0479 8.23958 10.5 7.13611 10.5 5.83333C10.5 4.53056 10.0479 3.42708 9.14375 2.52292C8.23958 1.61875 7.13611 1.16667 5.83333 1.16667C4.53056 1.16667 3.42708 1.61875 2.52292 2.52292C1.61875 3.42708 1.16667 4.53056 1.16667 5.83333C1.16667 7.13611 1.61875 8.23958 2.52292 9.14375C3.42708 10.0479 4.53056 10.5 5.83333 10.5Z"
                  fill="#434655"
                />
              </svg>
            </div>

            <div className="latsesi-legend">
              <span className="latsesi-legend__item">
                <i className="latsesi-legend__swatch latsesi-legend__swatch--done" />
                Sudah
              </span>
              <span className="latsesi-legend__item">
                <i className="latsesi-legend__swatch latsesi-legend__swatch--belum" />
                Belum
              </span>
              <span className="latsesi-legend__item">
                <i className="latsesi-legend__swatch latsesi-legend__swatch--ragu" />
                Ragu
              </span>
              <span className="latsesi-legend__item">
                <i className="latsesi-legend__swatch latsesi-legend__swatch--active" />
                Aktif
              </span>
            </div>

            <div className="latsesi-nav-grid">
              {questionStatuses.map((status, index) => (
                <button
                  type="button"
                  key={index}
                  className={`latsesi-nav-grid__btn latsesi-nav-grid__btn--${status}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="latsesi-stats-card">
            <h3 className="latsesi-stats-card__title">Statistik Sesi</h3>
            <div className="latsesi-stats-card__grid">
              <div className="latsesi-stats-card__item">
                <span className="latsesi-stats-card__icon latsesi-stats-card__icon--green">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                      fill="#10B981"
                    />
                  </svg>
                </span>
                <p className="latsesi-stats-card__value">85%</p>
                <p className="latsesi-stats-card__label">Akurasi Saat Ini</p>
              </div>
              <div className="latsesi-stats-card__item">
                <span className="latsesi-stats-card__icon latsesi-stats-card__icon--blue">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.45 11.5C8.85 11.9 9.36667 12.0958 10 12.0875C10.6333 12.0792 11.1 11.85 11.4 11.4L17 3L8.6 8.6C8.15 8.9 7.9125 9.35833 7.8875 9.975C7.8625 10.5917 8.05 11.1 8.45 11.5ZM10 0C10.9833 0 11.9292 0.1375 12.8375 0.4125C13.7458 0.6875 14.6 1.1 15.4 1.65L13.5 2.85C12.95 2.56667 12.3792 2.35417 11.7875 2.2125C11.1958 2.07083 10.6 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.7 2.09583 11.3917 2.2875 12.075C2.47917 12.7583 2.75 13.4 3.1 14H16.9C17.2833 13.3667 17.5625 12.7083 17.7375 12.025C17.9125 11.3417 18 10.6333 18 9.9C18 9.3 17.9292 8.71667 17.7875 8.15C17.6458 7.58333 17.4333 7.03333 17.15 6.5L18.35 4.6C18.85 5.38333 19.2458 6.21667 19.5375 7.1C19.8292 7.98333 19.9833 8.9 20 9.85C20.0167 10.8 19.9083 11.7083 19.675 12.575C19.4417 13.4417 19.1 14.2667 18.65 15.05C18.4667 15.35 18.2167 15.5833 17.9 15.75C17.5833 15.9167 17.25 16 16.9 16H3.1C2.75 16 2.41667 15.9167 2.1 15.75C1.78333 15.5833 1.53333 15.35 1.35 15.05C0.916667 14.3 0.583333 13.5042 0.35 12.6625C0.116667 11.8208 0 10.9333 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0Z"
                      fill="#004AC6"
                    />
                  </svg>
                </span>
                <p className="latsesi-stats-card__value">1.5m</p>
                <p className="latsesi-stats-card__label">Rata-rata Waktu</p>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default LatihanSesi;
