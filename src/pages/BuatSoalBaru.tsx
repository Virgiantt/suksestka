import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/BuatSoalBaru.css";

type Difficulty = "Mudah" | "Sedang" | "Sulit";
type Mode = "manual" | "ai";

const difficultyOptions: Difficulty[] = ["Mudah", "Sedang", "Sulit"];

const answerOptions = ["A", "B", "C", "D"] as const;

function BuatSoalBaru() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("manual");
  const [difficulty, setDifficulty] = useState<Difficulty>("Sedang");
  const [correctAnswer, setCorrectAnswer] = useState<(typeof answerOptions)[number]>("A");

  const handleSave = () => {
    navigate("/bank-soal", { state: { soalSuccess: true } });
  };

  return (
    <div className="teacher-dashboard buat-soal">
      <TeacherSidebar active="Bank Soal" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content buat-soal__content">
          <header className="buat-soal__header">
            <div className="buat-soal__heading">
              <h1>Buat Soal Baru</h1>
              <p>Tambahkan soal baru ke bank soal Anda.</p>
            </div>
            <div className="buat-soal__mode-toggle">
              <button
                type="button"
                className={mode === "manual" ? "is-active" : ""}
                onClick={() => setMode("manual")}
              >
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 7.5V6H5.25V7.5H0ZM0 4.5V3H8.25V4.5H0ZM0 1.5V0H8.25V1.5H0ZM6.75 12V9.69375L10.8938 5.56875C11.0063 5.45625 11.1313 5.375 11.2688 5.325C11.4062 5.275 11.5437 5.25 11.6812 5.25C11.8312 5.25 11.975 5.27812 12.1125 5.33437C12.25 5.39062 12.375 5.475 12.4875 5.5875L13.1812 6.28125C13.2812 6.39375 13.3594 6.51875 13.4156 6.65625C13.4719 6.79375 13.5 6.93125 13.5 7.06875C13.5 7.20625 13.475 7.34687 13.425 7.49062C13.375 7.63438 13.2937 7.7625 13.1812 7.875L9.05625 12H6.75Z"
                    fill={mode === "manual" ? "#004AC6" : "#434655"}
                  />
                </svg>
                Manual
              </button>
              <button
                type="button"
                className={mode === "ai" ? "is-active" : ""}
                onClick={() => setMode("ai")}
              >
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.5 6L12.5625 3.9375L10.5 3L12.5625 2.0625L13.5 0L14.4375 2.0625L16.5 3L14.4375 3.9375L13.5 6ZM13.5 16.5L12.5625 14.4375L10.5 13.5L12.5625 12.5625L13.5 10.5L14.4375 12.5625L16.5 13.5L14.4375 14.4375L13.5 16.5ZM6 14.25L4.125 10.125L0 8.25L4.125 6.375L6 2.25L7.875 6.375L12 8.25L7.875 10.125L6 14.25ZM6 10.6125L6.75 9L8.3625 8.25L6.75 7.5L6 5.8875L5.25 7.5L3.6375 8.25L5.25 9L6 10.6125Z"
                    fill={mode === "ai" ? "#004AC6" : "#434655"}
                  />
                </svg>
                Dibantu AI
              </button>
            </div>
          </header>

          <div className="buat-soal__layout">
            <div className="buat-soal__main">
              <section className="buat-soal-card">
                <div className="buat-soal-card__head">
                  <span className="buat-soal-card__icon">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.75 11.25H8.25V6.75H6.75V11.25ZM7.5 5.25C7.7125 5.25 7.89062 5.17813 8.03438 5.03438C8.17813 4.89062 8.25 4.7125 8.25 4.5C8.25 4.2875 8.17813 4.10938 8.03438 3.96563C7.89062 3.82188 7.7125 3.75 7.5 3.75C7.2875 3.75 7.10938 3.82188 6.96562 3.96563C6.82187 4.10938 6.75 4.2875 6.75 4.5C6.75 4.7125 6.82187 4.89062 6.96562 5.03438C7.10938 5.17813 7.2875 5.25 7.5 5.25ZM7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15Z"
                        fill="#004AC6"
                      />
                    </svg>
                  </span>
                  <h2>Detail Soal</h2>
                </div>

                <div className="buat-soal-detail-grid">
                  <div className="buat-soal-field">
                    <label>MATA PELAJARAN</label>
                    <div className="buat-soal-select">
                      <span>Pilih Mata Pelajaran...</span>
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill="#737686" />
                      </svg>
                    </div>
                  </div>

                  <div className="buat-soal-field">
                    <label>TINGKAT SEKOLAH</label>
                    <div className="buat-soal-select">
                      <span>Pilih Tingkat...</span>
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill="#737686" />
                      </svg>
                    </div>
                  </div>

                  <div className="buat-soal-field buat-soal-field--full">
                    <label>TOPIK / BAB</label>
                    <input type="text" placeholder="Misal: Aljabar Linear, Gaya dan Gerak..." />
                  </div>

                  <div className="buat-soal-field buat-soal-field--full">
                    <label>TINGKAT KESULITAN</label>
                    <div className="buat-soal-difficulty">
                      {difficultyOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={`buat-soal-difficulty__option${
                            difficulty === option ? ` is-active is-active--${option.toLowerCase()}` : ""
                          }`}
                          onClick={() => setDifficulty(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="buat-soal-card buat-soal-editor-card">
                <div className="buat-soal-card__head">
                  <span className="buat-soal-card__icon">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.5 15.0188C1.0875 15.0188 0.734375 14.8719 0.440625 14.5781C0.146875 14.2844 0 13.9313 0 13.5188V3.01875C0 2.60625 0.146875 2.25312 0.440625 1.95938C0.734375 1.66563 1.0875 1.51875 1.5 1.51875H8.19375L6.69375 3.01875H1.5V13.5188H12V8.30625L13.5 6.80625V13.5188C13.5 13.9313 13.3531 14.2844 13.0594 14.5781C12.7656 14.8719 12.4125 15.0188 12 15.0188H1.5Z"
                        fill="#004AC6"
                      />
                    </svg>
                  </span>
                  <h2>Editor Soal</h2>
                </div>

                <div className="buat-soal-toolbar">
                  <div className="buat-soal-toolbar__group">
                    <button type="button" aria-label="Bold">
                      <strong>B</strong>
                    </button>
                    <button type="button" aria-label="Italic">
                      <em>I</em>
                    </button>
                    <button type="button" aria-label="Underline">
                      <span className="buat-soal-toolbar__underline">U</span>
                    </button>
                  </div>
                  <div className="buat-soal-toolbar__group">
                    <button type="button" aria-label="Bullet list">
                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.5 11.25V9.75H13.5V11.25H4.5ZM4.5 6.75V5.25H13.5V6.75H4.5ZM4.5 2.25V0.75H13.5V2.25H4.5ZM1.5 12C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5C0 10.0875 0.146875 9.73438 0.440625 9.44063C0.734375 9.14688 1.0875 9 1.5 9C1.9125 9 2.26562 9.14688 2.55938 9.44063C2.85313 9.73438 3 10.0875 3 10.5C3 10.9125 2.85313 11.2656 2.55938 11.5594C2.26562 11.8531 1.9125 12 1.5 12ZM1.5 7.5C1.0875 7.5 0.734375 7.35312 0.440625 7.05937C0.146875 6.76562 0 6.4125 0 6C0 5.5875 0.146875 5.23438 0.440625 4.94063C0.734375 4.64688 1.0875 4.5 1.5 4.5C1.9125 4.5 2.26562 4.64688 2.55938 4.94063C2.85313 5.23438 3 5.5875 3 6C3 6.4125 2.85313 6.76562 2.55938 7.05937C2.26562 7.35312 1.9125 7.5 1.5 7.5ZM1.5 3C1.0875 3 0.734375 2.85313 0.440625 2.55938C0.146875 2.26562 0 1.9125 0 1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0C1.9125 0 2.26562 0.146875 2.55938 0.440625C2.85313 0.734375 3 1.0875 3 1.5C3 1.9125 2.85313 2.26562 2.55938 2.55938C2.26562 2.85313 1.9125 3 1.5 3Z"
                          fill="#434655"
                        />
                      </svg>
                    </button>
                    <button type="button" aria-label="Numbered list">
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.5 12.75V11.25H13.5V12.75H4.5ZM4.5 8.25V6.75H13.5V8.25H4.5ZM4.5 3.75V2.25H13.5V3.75H4.5Z"
                          fill="#434655"
                        />
                      </svg>
                    </button>
                  </div>
                  <button type="button" className="buat-soal-toolbar__image-btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.33333 12C0.966667 12 0.652778 11.8694 0.391667 11.6083C0.130556 11.3472 0 11.0333 0 10.6667V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H6.66667C6.66667 0.188889 6.66667 0.394444 6.66667 0.616667C6.66667 0.838889 6.66667 1.07778 6.66667 1.33333H1.33333V10.6667H10.6667V5.33333C10.9222 5.33333 11.1611 5.33333 11.3833 5.33333C11.6056 5.33333 11.8111 5.33333 12 5.33333V10.6667C12 11.0333 11.8694 11.3472 11.6083 11.6083C11.3472 11.8694 11.0333 12 10.6667 12H1.33333Z"
                        fill="#004AC6"
                      />
                    </svg>
                    Sisipkan Gambar
                  </button>
                </div>

                <textarea
                  className="buat-soal-editor__textarea"
                  placeholder="Ketik pertanyaan atau pernyataan di sini..."
                  rows={4}
                />

                <div className="buat-soal-answers-head">
                  <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.95833 12.5625L0 9.60417L1.16667 8.4375L2.9375 10.2083L6.47917 6.66667L7.64583 7.85417L2.95833 12.5625ZM2.95833 5.89583L0 2.9375L1.16667 1.77083L2.9375 3.54167L6.47917 0L7.64583 1.1875L2.95833 5.89583ZM9.16667 10.8958V9.22917H16.6667V10.8958H9.16667ZM9.16667 4.22917V2.5625H16.6667V4.22917H9.16667Z"
                      fill="#004AC6"
                    />
                  </svg>
                  <h3>Pilihan Jawaban</h3>
                  <span>Pilih satu jawaban benar</span>
                </div>

                <div className="buat-soal-answers">
                  {answerOptions.map((option) => (
                    <div className="buat-soal-answer" key={option}>
                      <button
                        type="button"
                        className={`buat-soal-answer__label${correctAnswer === option ? " is-correct" : ""}`}
                        onClick={() => setCorrectAnswer(option)}
                        aria-label={`Tandai pilihan ${option} sebagai jawaban benar`}
                      >
                        {option}
                        {correctAnswer === option ? (
                          <svg
                            className="buat-soal-answer__check"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.5 14.5l-4-4 1.4-1.4 2.6 2.6 6.6-6.6 1.4 1.4-8 8z"
                              fill="#10B981"
                            />
                          </svg>
                        ) : null}
                      </button>
                      <input type="text" placeholder={`Masukkan pilihan ${option}`} />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="buat-soal__aside">
              <section className="ai-tutor-widget">
                <div className="ai-tutor-widget__head">
                  <span className="ai-tutor-widget__icon">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.75 18.3333V14.3917C1.87917 13.5972 1.20312 12.6691 0.721875 11.6073C0.240625 10.5455 0 9.42639 0 8.25C0 5.95833 0.802083 4.01042 2.40625 2.40625C4.01042 0.802083 5.95833 0 8.25 0C10.1597 0 11.8517 0.561458 13.326 1.68438C14.8003 2.80729 15.759 4.27014 16.2021 6.07292L17.3937 10.7708C17.4701 11.0611 17.4167 11.3247 17.2333 11.5615C17.05 11.7983 16.8056 11.9167 16.5 11.9167H14.6667V14.6667C14.6667 15.1708 14.4872 15.6024 14.1281 15.9615C13.7691 16.3205 13.3375 16.5 12.8333 16.5H11V18.3333H2.75Z"
                        fill="#8B5CF6"
                      />
                    </svg>
                  </span>
                  <h2>Asisten Tutor AI</h2>
                </div>

                <div className="ai-tutor-widget__actions">
                  <button type="button" className="ai-tutor-action">
                    <span className="ai-tutor-action__icon ai-tutor-action__icon--purple">
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1.6125 13.3875C1.1 12.7875 0.703125 12.1156 0.421875 11.3719C0.140625 10.6281 0 9.8375 0 9C0 7.125 0.65625 5.53125 1.96875 4.21875C3.28125 2.90625 4.875 2.25 6.75 2.25C6.775 2.25 6.8 2.25 6.825 2.25C6.85 2.25 6.875 2.25 6.9 2.25L5.7 1.05L6.75 0L9.75 3L6.75 6L5.68125 4.93125L6.8625 3.75C6.8375 3.75 6.81875 3.75 6.80625 3.75C6.79375 3.75 6.775 3.75 6.75 3.75C5.3 3.75 4.0625 4.2625 3.0375 5.2875C2.0125 6.3125 1.5 7.55 1.5 9C1.5 9.6375 1.60313 10.2375 1.80938 10.8C2.01562 11.3625 2.30625 11.8688 2.68125 12.3188L1.6125 13.3875Z"
                          fill="#8B5CF6"
                        />
                      </svg>
                    </span>
                    <span className="ai-tutor-action__text">
                      <strong>Optimalkan Soal</strong>
                      <span>Perbaiki tata bahasa & kejelasan.</span>
                    </span>
                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.45 4.5L0 1.05L1.05 0L5.55 4.5L1.05 9L0 7.95L3.45 4.5Z" fill="#737686" fillOpacity="0.4" />
                    </svg>
                  </button>

                  <button type="button" className="ai-tutor-action">
                    <span className="ai-tutor-action__icon ai-tutor-action__icon--amber">
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 15V11.25C6 10.55 5.89375 10.0312 5.68125 9.69375C5.46875 9.35625 5.1875 9.025 4.8375 8.7L5.90625 7.63125C6.05625 7.76875 6.2 7.91562 6.3375 8.07187C6.475 8.22812 6.6125 8.39375 6.75 8.56875C6.925 8.33125 7.10313 8.12187 7.28438 7.94063C7.46563 7.75938 7.65 7.58125 7.8375 7.40625C8.3125 6.96875 8.74375 6.4625 9.13125 5.8875C9.51875 5.3125 9.725 4.30625 9.75 2.86875L8.56875 4.05L7.5 3L10.5 0L13.5 3L12.45 4.05L11.25 2.86875C11.225 4.65625 10.95 5.92812 10.425 6.68437C9.9 7.44062 9.375 8.05625 8.85 8.53125C8.45 8.89375 8.125 9.24687 7.875 9.59062C7.625 9.93437 7.5 10.4875 7.5 11.25V15H6Z"
                          fill="#735C00"
                        />
                      </svg>
                    </span>
                    <span className="ai-tutor-action__text">
                      <strong>Buat Pengecoh</strong>
                      <span>Buat pilihan salah yang logis.</span>
                    </span>
                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.45 4.5L0 1.05L1.05 0L5.55 4.5L1.05 9L0 7.95L3.45 4.5Z" fill="#737686" fillOpacity="0.4" />
                    </svg>
                  </button>
                </div>

                <div className="taxonomy-widget">
                  <div className="taxonomy-widget__head">
                    <span>Taksonomi Bloom</span>
                    <span className="taxonomy-widget__beta">BETA</span>
                  </div>
                  <div className="taxonomy-widget__scale">
                    <span>C1</span>
                    <span>C2</span>
                    <span className="is-active">C3</span>
                    <span>C4</span>
                    <span>C5</span>
                    <span>C6</span>
                  </div>
                  <div className="taxonomy-widget__track">
                    <div className="taxonomy-widget__fill" style={{ width: "42%" }} />
                  </div>
                  <p className="taxonomy-widget__caption">Analisis: Level Penerapan (C3).</p>
                </div>

                <div className="ai-history">
                  <div className="ai-history__head">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.75 13.5C5.025 13.5 3.52187 12.9281 2.24062 11.7844C0.959375 10.6406 0.225 9.2125 0.0375 7.5H1.575C1.75 8.8 2.32812 9.875 3.30938 10.725C4.29063 11.575 5.4375 12 6.75 12C8.2125 12 9.45312 11.4906 10.4719 10.4719C11.4906 9.45312 12 8.2125 12 6.75C12 5.2875 11.4906 4.04688 10.4719 3.02813C9.45312 2.00938 8.2125 1.5 6.75 1.5C5.8875 1.5 5.08125 1.7 4.33125 2.1C3.58125 2.5 2.95 3.05 2.4375 3.75H4.5V5.25H0V0.75H1.5V2.5125C2.1375 1.7125 2.91562 1.09375 3.83437 0.65625C4.75312 0.21875 5.725 0 6.75 0C7.6875 0 8.56562 0.178125 9.38437 0.534375C10.2031 0.890625 10.9156 1.37188 11.5219 1.97812C12.1281 2.58437 12.6094 3.29688 12.9656 4.11562C13.3219 4.93437 13.5 5.8125 13.5 6.75C13.5 7.6875 13.3219 8.56562 12.9656 9.38437C12.6094 10.2031 12.1281 10.9156 11.5219 11.5219C10.9156 12.1281 10.2031 12.6094 9.38437 12.9656C8.56562 13.3219 7.6875 13.5 6.75 13.5Z"
                        fill="#8B5CF6"
                      />
                    </svg>
                    <h3>Riwayat Analisis AI</h3>
                  </div>

                  <ul className="ai-history__list">
                    <li>
                      <span className="ai-history__check">
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.25 6.825L0 3.575L1.125 2.45L3.25 4.575L7.825 0L8.95 1.125L3.25 6.825Z" fill="#10B981" />
                        </svg>
                      </span>
                      <div>
                        <p>Tata bahasa diperbaiki</p>
                        <span>Baru saja</span>
                      </div>
                    </li>
                    <li>
                      <span className="ai-history__check">
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.25 6.825L0 3.575L1.125 2.45L3.25 4.575L7.825 0L8.95 1.125L3.25 6.825Z" fill="#10B981" />
                        </svg>
                      </span>
                      <div>
                        <p>Pengecoh ditambahkan</p>
                        <span>2 menit yang lalu</span>
                      </div>
                    </li>
                    <li>
                      <span className="ai-history__check">
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.25 6.825L0 3.575L1.125 2.45L3.25 4.575L7.825 0L8.95 1.125L3.25 6.825Z" fill="#10B981" />
                        </svg>
                      </span>
                      <div>
                        <p>Analisis Bloom selesai</p>
                        <span>5 menit yang lalu</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="quality-tip">
                  <div className="quality-tip__head">
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.625 15C5.2125 15 4.85938 14.8531 4.56563 14.5594C4.27188 14.2656 4.125 13.9125 4.125 13.5H7.125C7.125 13.9125 6.97812 14.2656 6.68437 14.5594C6.39062 14.8531 6.0375 15 5.625 15Z"
                        fill="#004AC6"
                      />
                    </svg>
                    <h4>TIPS KUALITAS</h4>
                  </div>
                  <p>Gunakan kalimat yang lugas dan hindari bias budaya agar soal lebih inklusif.</p>
                </div>
              </section>

              <section className="stats-card">
                <div className="stats-card__head">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.33333 11.6667H5V7.5H3.33333V11.6667ZM10 11.6667H11.6667V3.33333H10V11.6667ZM6.66667 11.6667H8.33333V9.16667H6.66667V11.6667ZM6.66667 7.5H8.33333V5.83333H6.66667V7.5ZM1.66667 15C1.20833 15 0.815972 14.8368 0.489583 14.5104C0.163194 14.184 0 13.7917 0 13.3333V1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0H13.3333C13.7917 0 14.184 0.163194 14.5104 0.489583C14.8368 0.815972 15 1.20833 15 1.66667V13.3333C15 13.7917 14.8368 14.184 14.5104 14.5104C14.184 14.8368 13.7917 15 13.3333 15H1.66667Z"
                      fill="#004AC6"
                    />
                  </svg>
                  <h3>STATISTIK BANK SOAL</h3>
                </div>

                <div className="stats-card__row">
                  <span>Total Soal Anda</span>
                  <strong>124</strong>
                </div>
                <div className="stats-card__row">
                  <span>Paling Banyak</span>
                  <strong>Matematika</strong>
                </div>
                <div className="stats-card__row">
                  <span>Rata-rata Kesulitan</span>
                  <span className="stats-card__pill">Sedang</span>
                </div>
              </section>
            </aside>
          </div>

          <div className="buat-soal-action-bar">
            <button type="button" className="buat-soal-action-bar__cancel" onClick={() => navigate("/bank-soal")}>
              Batal
            </button>
            <button type="button" className="buat-soal-action-bar__preview">
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.25 9C9.1875 9 9.98438 8.67188 10.6406 8.01562C11.2969 7.35938 11.625 6.5625 11.625 5.625C11.625 4.6875 11.2969 3.89062 10.6406 3.23438C9.98438 2.57812 9.1875 2.25 8.25 2.25C7.3125 2.25 6.51562 2.57812 5.85938 3.23438C5.20312 3.89062 4.875 4.6875 4.875 5.625C4.875 6.5625 5.20312 7.35938 5.85938 8.01562C6.51562 8.67188 7.3125 9 8.25 9Z"
                  fill="#004AC6"
                />
              </svg>
              Pratinjau Soal
            </button>
            <button type="button" className="buat-soal-action-bar__save" onClick={handleSave}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.5 3V12C13.5 12.4125 13.3531 12.7656 13.0594 13.0594C12.7656 13.3531 12.4125 13.5 12 13.5H1.5C1.0875 13.5 0.734375 13.3531 0.440625 13.0594C0.146875 12.7656 0 12.4125 0 12V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H10.5L13.5 3ZM12 3.6375L9.8625 1.5H1.5V12H12V3.6375ZM6.75 11.25C7.375 11.25 7.90625 11.0312 8.34375 10.5938C8.78125 10.1562 9 9.625 9 9C9 8.375 8.78125 7.84375 8.34375 7.40625C7.90625 6.96875 7.375 6.75 6.75 6.75C6.125 6.75 5.59375 6.96875 5.15625 7.40625C4.71875 7.84375 4.5 8.375 4.5 9C4.5 9.625 4.71875 10.1562 5.15625 10.5938C5.59375 11.0312 6.125 11.25 6.75 11.25ZM2.25 5.25H9V2.25H2.25V5.25Z"
                  fill="white"
                />
              </svg>
              Simpan ke Bank Soal
            </button>
          </div>
        </div>

        <TeacherFooter />
      </div>
    </div>
  );
}

export default BuatSoalBaru;
