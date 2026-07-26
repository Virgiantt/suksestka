import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TryoutSesi.css";

const logoImageSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/1f12ec19af04de3ffaf741c8c718b55f04c4a210?width=132";
const diagramImageSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/6741ff3303a54dfffd085798e62b3ff0dfe611b8?width=1712";

type QuestionStatus = "done" | "belum" | "ragu" | "active";

const totalQuestions = 30;
const activeQuestion = 12;
const raguQuestions = [3, 7];
const doneQuestions = [1, 2, 4, 5, 6, 8, 9, 10, 11];

const questionStatuses: QuestionStatus[] = Array.from({ length: totalQuestions }, (_, index) => {
  const number = index + 1;
  if (number === activeQuestion) return "active";
  if (raguQuestions.includes(number)) return "ragu";
  if (doneQuestions.includes(number)) return "done";
  return "belum";
});

const answeredCount = doneQuestions.length + raguQuestions.length;

const options = [
  {
    key: "A",
    text: "Penurunan PDB nasional tidak dapat dihindari meskipun sektor jasa digital mendominasi kontribusi.",
  },
  {
    key: "B",
    text: "Stagnasi manufaktur akan diimbangi sepenuhnya oleh lonjakan jasa digital, mempertahankan tren positif agregat.",
  },
  {
    key: "C",
    text: "Inflasi inti akan meroket sejalan dengan ketidakseimbangan penawaran barang dan tingginya permintaan jasa.",
  },
  {
    key: "D",
    text: "Kurva permintaan agregat akan bergeser ke kiri bawah tanpa mempedulikan stimulus fiskal.",
  },
  {
    key: "E",
    text: "Terjadi pergeseran struktural penyerapan tenaga kerja yang signifikan dari sektor sekunder ke tersier dalam jangka pendek.",
  },
];

const subtests = [
  { key: "penalaran-umum", label: "Penalaran Umum", time: "25:00", active: true },
  { key: "kuantitatif", label: "Pengetahuan Kuantitatif", time: "30:00", active: false },
  { key: "literasi", label: "Literasi B. Indonesia", time: "45:00", active: false },
];

const distribution = [
  { key: "easy", label: "Easy", value: 10, color: "#10B981" },
  { key: "med", label: "Med", value: 15, color: "#F59E0B" },
  { key: "hard", label: "Hard", value: 5, color: "#BA1A1A" },
];

function TryoutSesi() {
  const [selected, setSelected] = useState("B");
  const [raguRagu, setRaguRagu] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(45 * 60 + 12);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemainingSeconds((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="tosesi-page">
      <header className="tosesi-header">
        <img src={logoImageSrc} alt="" className="tosesi-header__logo" />
        <span className="tosesi-header__brand">
          <span className="tosesi-header__brand-blue">Sukses</span>
          <span className="tosesi-header__brand-green">TKA</span>
        </span>
        <span className="tosesi-header__divider" />
        <div className="tosesi-header__meta">
          <p className="tosesi-header__meta-title">Penalaran Umum</p>
          <p className="tosesi-header__meta-subtitle">Tryout Nasional #4</p>
        </div>

        <div className="tosesi-header__actions">
          <span className="tosesi-timer">
            <span className="tosesi-timer__ring" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#tosesiTimerClip)">
                  <path
                    d="M1.38965 12C1.38965 6.14402 6.14398 1.38968 12 1.38968C17.856 1.38968 22.6103 6.14402 22.6103 12C22.6103 17.856 17.856 22.6104 12 22.6104C6.14398 22.6104 1.38965 17.856 1.38965 12"
                    stroke="#E0E3E5"
                    strokeWidth="2"
                    strokeDasharray="66.67 66.67"
                  />
                  <path
                    d="M1.38965 12C1.38965 6.14402 6.14398 1.38968 12 1.38968C17.856 1.38968 22.6103 6.14402 22.6103 12C22.6103 17.856 17.856 22.6104 12 22.6104C6.14398 22.6104 1.38965 17.856 1.38965 12"
                    stroke="#004AC6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="43.33 66.67"
                  />
                </g>
                <defs>
                  <clipPath id="tosesiTimerClip">
                    <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)" />
                  </clipPath>
                </defs>
              </svg>
              <svg className="tosesi-timer__icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.75833 8.575L8.575 7.75833L6.41667 5.6V2.91667H5.25V6.06667L7.75833 8.575ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667Z"
                  fill="#004AC6"
                />
              </svg>
            </span>
            <span className="tosesi-timer__value" aria-label={`Sisa waktu ${formattedTime}`}>
              {formattedTime}
            </span>
          </span>
          <Link to="/tryout-tka" className="tosesi-end-btn">
            Akhiri Ujian
          </Link>
        </div>
      </header>

      <main className="tosesi-main">
        <section className="tosesi-question-card">
          <span className="tosesi-question-card__accent" />

          <div className="tosesi-question-card__header">
            <div className="tosesi-question-card__number">
              <span className="tosesi-question-card__number-icon">
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="#2563EB" />
                  <path
                    d="M12.4129 28.4942V13.3922H8.96289V10.6142H15.6829V28.4942H12.4129ZM19.0429 28.4942V26.0342L23.8909 20.9522C24.8429 19.9522 25.5789 19.1512 26.0989 18.5492C26.6189 17.9472 26.9859 17.4302 27.1999 16.9982C27.4139 16.5662 27.5209 16.1282 27.5209 15.6842C27.5209 14.9242 27.2839 14.3312 26.8099 13.9052C26.3359 13.4792 25.7289 13.2662 24.9889 13.2662C24.2289 13.2662 23.5659 13.4832 22.9999 13.9172C22.4339 14.3512 22.0289 14.9922 21.7849 15.8402L18.9169 14.9522C19.1129 14.0122 19.5069 13.1962 20.0989 12.5042C20.6909 11.8122 21.4129 11.2762 22.2649 10.8962C23.1169 10.5162 24.0229 10.3262 24.9829 10.3262C26.1389 10.3262 27.1529 10.5362 28.0249 10.9562C28.8969 11.3762 29.5759 11.9622 30.0619 12.7142C30.5479 13.4662 30.7909 14.3422 30.7909 15.3422C30.7909 15.9902 30.6719 16.6232 30.4339 17.2412C30.1959 17.8592 29.8359 18.4952 29.3539 19.1492C28.8719 19.8032 28.2509 20.5262 27.4909 21.3182L23.2789 25.7342H31.0369V28.4942H19.0429Z"
                    fill="#EEEFFF"
                  />
                </svg>
              </span>
              <div>
                <p className="tosesi-question-card__eyebrow">Soal Pilihan Ganda</p>
                <p className="tosesi-question-card__value">
                  Soal ke {activeQuestion} <span>/ {totalQuestions}</span>
                </p>
              </div>
            </div>
            <div className="tosesi-question-card__badges">
              <span className="tosesi-weight-pill">Bobot: Sedang</span>
              <button type="button" className="tosesi-bookmark-btn" aria-label="Tandai soal">
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 14.1667V0H7.5L7.83333 1.66667H12.5V10H6.66667L6.33333 8.33333H1.66667V14.1667H0ZM8.04167 8.33333H10.8333V3.33333H6.45833L6.125 1.66667H1.66667V6.66667H7.70833L8.04167 8.33333Z"
                    fill="#737686"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="tosesi-question-card__body">
            <p className="tosesi-question-card__text">
              Berdasarkan grafik pertumbuhan ekonomi kuartal ketiga di atas, manakah pernyataan di bawah
              ini yang paling tepat menggambarkan tren sektoral jika diasumsikan sektor manufaktur
              mengalami stagnasi akibat gangguan rantai pasok global, sementara sektor jasa digital
              tumbuh eksponensial?
            </p>
            <figure className="tosesi-diagram">
              <img src={diagramImageSrc} alt="Diagram analisis sektor ekonomi" />
            </figure>
          </div>

          <div className="tosesi-options">
            {options.map((option) => (
              <button
                type="button"
                key={option.key}
                className={`tosesi-option${selected === option.key ? " tosesi-option--selected" : ""}`}
                onClick={() => setSelected(option.key)}
              >
                <span className="tosesi-option__input" aria-hidden="true">
                  {selected === option.key ? (
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.25 10C6.25 12.0697 7.93032 13.75 10 13.75C12.0697 13.75 13.75 12.0697 13.75 10C13.75 7.93032 12.0697 6.25 10 6.25C7.93032 6.25 6.25 7.93032 6.25 10Z"
                        fill="white"
                      />
                    </svg>
                  ) : null}
                </span>
                <span className="tosesi-option__text">
                  <strong>{option.key}.</strong> {option.text}
                </span>
              </button>
            ))}
          </div>

          <div className="tosesi-question-card__footer">
            <button type="button" className="tosesi-nav-btn">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.86875 6.75L7.06875 10.95L6 12L0 6L6 0L7.06875 1.05L2.86875 5.25H12V6.75H2.86875Z" fill="#434655" />
              </svg>
              Sebelumnya
            </button>

            <label className="tosesi-ragu">
              <input
                type="checkbox"
                checked={raguRagu}
                onChange={(event) => setRaguRagu(event.target.checked)}
              />
              Ragu-ragu
            </label>

            <button type="button" className="tosesi-btn-primary">
              Selanjutnya
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z" fill="white" />
              </svg>
            </button>
          </div>
        </section>

        <aside className="tosesi-side">
          <div className="tosesi-nav-card">
            <div className="tosesi-nav-card__header">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM8 16C7.45 16 6.97917 15.8042 6.5875 15.4125C6.19583 15.0208 6 14.55 6 14C6 13.45 6.19583 12.9792 6.5875 12.5875C6.97917 12.1958 7.45 12 8 12C8.55 12 9.02083 12.1958 9.4125 12.5875C9.80417 12.9792 10 13.45 10 14C10 14.55 9.80417 15.0208 9.4125 15.4125C9.02083 15.8042 8.55 16 8 16ZM14 16C13.45 16 12.9792 15.8042 12.5875 15.4125C12.1958 15.0208 12 14.55 12 14C12 13.45 12.1958 12.9792 12.5875 12.5875C12.9792 12.1958 13.45 12 14 12C14.55 12 15.0208 12.1958 15.4125 12.5875C15.8042 12.9792 16 13.45 16 14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM8 10C7.45 10 6.97917 9.80417 6.5875 9.4125C6.19583 9.02083 6 8.55 6 8C6 7.45 6.19583 6.97917 6.5875 6.5875C6.97917 6.19583 7.45 6 8 6C8.55 6 9.02083 6.19583 9.4125 6.5875C9.80417 6.97917 10 7.45 10 8C10 8.55 9.80417 9.02083 9.4125 9.4125C9.02083 9.80417 8.55 10 8 10ZM14 10C13.45 10 12.9792 9.80417 12.5875 9.4125C12.1958 9.02083 12 8.55 12 8C12 7.45 12.1958 6.97917 12.5875 6.5875C12.9792 6.19583 13.45 6 14 6C14.55 6 15.0208 6.19583 15.4125 6.5875C15.8042 6.97917 16 7.45 16 8C16 8.55 15.8042 9.02083 15.4125 9.4125C15.0208 9.80417 14.55 10 14 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z"
                  fill="#004AC6"
                />
              </svg>
              <h3>Navigasi Soal</h3>
            </div>

            <div className="tosesi-legend">
              <span className="tosesi-legend__item">
                <i className="tosesi-legend__swatch tosesi-legend__swatch--done" />
                Terjawab
              </span>
              <span className="tosesi-legend__item">
                <i className="tosesi-legend__swatch tosesi-legend__swatch--belum" />
                Belum
              </span>
              <span className="tosesi-legend__item">
                <i className="tosesi-legend__swatch tosesi-legend__swatch--ragu" />
                Ragu
              </span>
              <span className="tosesi-legend__item">
                <i className="tosesi-legend__swatch tosesi-legend__swatch--active" />
                Saat ini
              </span>
            </div>

            <div className="tosesi-nav-grid">
              {questionStatuses.map((status, index) => (
                <button
                  type="button"
                  key={index}
                  className={`tosesi-nav-grid__btn tosesi-nav-grid__btn--${status}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="tosesi-progress">
              <p className="tosesi-progress__label">
                Progress: {answeredCount}/{totalQuestions} Terjawab
              </p>
              <div className="tosesi-progress__track">
                <div
                  className="tosesi-progress__fill"
                  style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="tosesi-info-card">
            <h3 className="tosesi-info-card__title">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.75 11.25H8.25V6.75H6.75V11.25ZM7.5 5.25C7.7125 5.25 7.89062 5.17813 8.03438 5.03438C8.17813 4.89062 8.25 4.7125 8.25 4.5C8.25 4.2875 8.17813 4.10938 8.03438 3.96563C7.89062 3.82188 7.7125 3.75 7.5 3.75C7.2875 3.75 7.10938 3.82188 6.96562 3.96563C6.82187 4.10938 6.75 4.2875 6.75 4.5C6.75 4.7125 6.82187 4.89062 6.96562 5.03438C7.10938 5.17813 7.2875 5.25 7.5 5.25ZM7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15ZM7.5 13.5C9.175 13.5 10.5938 12.9188 11.7563 11.7563C12.9188 10.5938 13.5 9.175 13.5 7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5Z"
                  fill="#004AC6"
                />
              </svg>
              Informasi Ujian
            </h3>

            <div className="tosesi-info-card__block">
              <p className="tosesi-info-card__label">Sisa Waktu Per Sub-tes</p>
              <div className="tosesi-subtest-list">
                {subtests.map((subtest) => (
                  <div
                    key={subtest.key}
                    className={`tosesi-subtest${subtest.active ? " tosesi-subtest--active" : ""}`}
                  >
                    <span className="tosesi-subtest__name">
                      {!subtest.active ? (
                        <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.16667 12.25C0.845833 12.25 0.571181 12.1358 0.342708 11.9073C0.114236 11.6788 0 11.4042 0 11.0833V5.25C0 4.92917 0.114236 4.65451 0.342708 4.42604C0.571181 4.19757 0.845833 4.08333 1.16667 4.08333H1.75V2.91667C1.75 2.10972 2.03438 1.42188 2.60313 0.853125C3.17188 0.284375 3.85972 0 4.66667 0C5.47361 0 6.16146 0.284375 6.73021 0.853125C7.29896 1.42188 7.58333 2.10972 7.58333 2.91667V4.08333H8.16667C8.4875 4.08333 8.76215 4.19757 8.99063 4.42604C9.2191 4.65451 9.33333 4.92917 9.33333 5.25V11.0833C9.33333 11.4042 9.2191 11.6788 8.99063 11.9073C8.76215 12.1358 8.4875 12.25 8.16667 12.25H1.16667ZM1.16667 11.0833H8.16667V5.25H1.16667V11.0833ZM4.66667 9.33333C4.9875 9.33333 5.26215 9.2191 5.49062 8.99063C5.7191 8.76215 5.83333 8.4875 5.83333 8.16667C5.83333 7.84583 5.7191 7.57118 5.49062 7.34271C5.26215 7.11424 4.9875 7 4.66667 7C4.34583 7 4.07118 7.11424 3.84271 7.34271C3.61424 7.57118 3.5 7.84583 3.5 8.16667C3.5 8.4875 3.61424 8.76215 3.84271 8.99063C4.07118 9.2191 4.34583 9.33333 4.66667 9.33333ZM2.91667 4.08333H6.41667V2.91667C6.41667 2.43056 6.24653 2.01736 5.90625 1.67708C5.56597 1.33681 5.15278 1.16667 4.66667 1.16667C4.18056 1.16667 3.76736 1.33681 3.42708 1.67708C3.08681 2.01736 2.91667 2.43056 2.91667 2.91667V4.08333Z"
                            fill="#191C1E"
                          />
                        </svg>
                      ) : null}
                      {subtest.label}
                    </span>
                    <span className="tosesi-subtest__time">{subtest.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tosesi-info-card__block">
              <p className="tosesi-info-card__label">Distribusi Soal</p>
              <div className="tosesi-distribution">
                {distribution.map((item) => (
                  <div
                    key={item.key}
                    className="tosesi-distribution__item"
                    style={{
                      color: item.color,
                      borderColor: `${item.color}33`,
                      background: `${item.color}1A`,
                    }}
                  >
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default TryoutSesi;
