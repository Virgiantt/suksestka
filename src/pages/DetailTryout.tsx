import { useState } from "react";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/DetailTryout.css";

type Difficulty = "SULIT" | "SEDANG" | "MUDAH";

type Question = {
  id: string;
  difficulty: Difficulty;
  text: string;
  correctPercent: number;
};

const questions: Question[] = [
  { id: "#PU-001", difficulty: "SULIT", text: "Penarikan kesimpulan logis dari premis-premis terkait…", correctPercent: 24 },
  { id: "#PU-002", difficulty: "SEDANG", text: "Analisis pola deret angka kompleks dalam konteks probabilitas", correctPercent: 56 },
  { id: "#PU-003", difficulty: "SEDANG", text: "Interpretasi data grafik pertumbuhan PDB terhadap daya beli…", correctPercent: 45 },
  { id: "#PU-004", difficulty: "MUDAH", text: "Logika silogisme sederhana mengenai kebijakan transportasi…", correctPercent: 82 },
  { id: "#PU-005", difficulty: "SULIT", text: "Analisis kausalitas kompleks dalam teks narasi sejarah politik.", correctPercent: 15 },
  { id: "#PU-006", difficulty: "SEDANG", text: "Pemecahan masalah pola spasial dalam rotasi objek tiga…", correctPercent: 60 },
  { id: "#PU-007", difficulty: "MUDAH", text: "Identifikasi premis yang tidak relevan dalam argumen deduktif.", correctPercent: 78 },
];

const difficultyClass: Record<Difficulty, string> = {
  SULIT: "dt-badge--red",
  SEDANG: "dt-badge--amber",
  MUDAH: "dt-badge--green",
};

const percentClass = (value: number) => (value < 40 ? "dt-percent--red" : value < 70 ? "dt-percent--amber" : "dt-percent--green");

function DetailTryout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="teacher-dashboard detail-tryout">
      <TeacherSidebar active="Tryout" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content detail-tryout__content">
          <header className="dt-header">
            <div className="dt-header__title">
              <span className="dt-header__icon">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.6 15.05L14.65 8L13.25 6.6L7.6 12.25L4.75 9.4L3.35 10.8L7.6 15.05ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H6.2C6.41667 1.4 6.77917 0.916667 7.2875 0.55C7.79583 0.183333 8.36667 0 9 0C9.63333 0 10.2042 0.183333 10.7125 0.55C11.2208 0.916667 11.5833 1.4 11.8 2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2Z" fill="#EEEFFF" />
                </svg>
              </span>
              <div>
                <h1>Tryout Nasional TKA #4</h1>
                <p>Sesi Pelaksanaan: 12 Nov 2023 - 15 Nov 2023</p>
                <div className="dt-header__tags">
                  <span className="dt-header__tag dt-header__tag--green">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.01667 8.51667L9.12917 4.40417L8.3125 3.5875L5.01667 6.88333L3.35417 5.22083L2.5375 6.0375L5.01667 8.51667ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667Z" fill="#10B981" />
                    </svg>
                    Selesai
                  </span>
                  <span className="dt-header__tag dt-header__tag--amber">Premium</span>
                </div>
              </div>
            </div>
            <div className="dt-header__actions">
              <button type="button" className="dt-btn dt-btn--outline">
                Edit Detail
              </button>
              <button type="button" className="dt-btn dt-btn--primary">
                Export Laporan
              </button>
            </div>
          </header>

          <section className="dt-stats">
            <article className="dt-stat">
              <p className="dt-stat__label">Siswa Terdaftar</p>
              <p className="dt-stat__value">15,420</p>
              <p className="dt-stat__trend">↗ +12% dari Tryout #3</p>
            </article>
            <article className="dt-stat">
              <p className="dt-stat__label">Rata-rata Skor</p>
              <p className="dt-stat__value">
                624<span className="dt-stat__value-suffix">/1000</span>
              </p>
              <p className="dt-stat__trend dt-stat__trend--amber">→ Stabil (Target: 650)</p>
            </article>
            <article className="dt-stat">
              <p className="dt-stat__label">Tingkat Penyelesaian</p>
              <p className="dt-stat__value">94.2%</p>
              <div className="dt-stat__track">
                <div className="dt-stat__track-fill" style={{ width: "94.2%" }} />
              </div>
            </article>
          </section>

          <div className="dt-layout">
            <div className="dt-main">
              <div className="dt-main__header">
                <h2>Daftar Soal & Analisis</h2>
                <div className="dt-main__filters">
                  <input type="search" placeholder="Cari ID/Topik Soal..." aria-label="Cari soal" />
                  <button type="button" aria-label="Filter">
                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83333 10V8.33333H9.16667V10H5.83333ZM2.5 5.83333V4.16667H12.5V5.83333H2.5ZM0 1.66667V0H15V1.66667H0Z" fill="#434655" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="dt-questions">
                <div className="dt-questions__head">
                  <div className="dt-questions__head-left">
                    <span className="dt-questions__head-bar" />
                    <h3>Penalaran Umum (PU)</h3>
                  </div>
                  <span className="dt-questions__count">30 Soal</span>
                </div>

                {questions.map((question) => (
                  <div className="dt-question" key={question.id}>
                    <div className="dt-question__body">
                      <div className="dt-question__tags">
                        <span className="dt-question__id">{question.id}</span>
                        <span className={`dt-badge ${difficultyClass[question.difficulty]}`}>{question.difficulty}</span>
                      </div>
                      <p>{question.text}</p>
                    </div>
                    <div className="dt-question__stat">
                      <span className="dt-question__stat-label">Benar</span>
                      <span className={`dt-percent ${percentClass(question.correctPercent)}`}>{question.correctPercent}%</span>
                    </div>
                    <button type="button" className="dt-question__eye" aria-label="Lihat detail soal">
                      <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 9C10.3211 9 11.9944 7.3269 11.9944 5.25562C11.9944 3.18434 10.3211 1.51125 8.25 1.51125C6.17886 1.51125 4.50562 3.18434 4.50562 5.25562C4.50562 7.3269 6.17886 9 8.25 9Z" fill="#434655" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <aside className="dt-aside">
              <section className="dt-ai">
                <div className="dt-ai__head">
                  <span className="dt-ai__icon">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 8L16.75 5.25L14 4L16.75 2.75L18 0L19.25 2.75L22 4L19.25 5.25L18 8ZM18 22L16.75 19.25L14 18L16.75 16.75L18 14L19.25 16.75L22 18L19.25 19.25L18 22ZM8 19L5.5 13.5L0 11L5.5 8.5L8 3L10.5 8.5L16 11L10.5 13.5L8 19Z" fill="white" />
                    </svg>
                  </span>
                  <h3>AI Insights</h3>
                </div>

                <div className="dt-ai__card">
                  <p className="dt-ai__card-title dt-ai__card-title--purple">Keseimbangan Modul</p>
                  <p className="dt-ai__card-text">
                    Distribusi tingkat kesulitan sedikit condong ke arah Sulit (45%). Direkomendasikan untuk
                    menambah soal tingkat Sedang pada sub-tes Pengetahuan Kuantitatif untuk menyeimbangkan kurva
                    nilai.
                  </p>
                </div>

                <div className="dt-ai__card">
                  <p className="dt-ai__card-title dt-ai__card-title--blue">Prediksi Performa</p>
                  <p className="dt-ai__card-text">
                    Berdasarkan pola historis, diprediksi <strong>18% siswa</strong> akan mengalami kesulitan
                    signifikan manajemen waktu pada bagian Literasi Bahasa Inggris.
                  </p>
                </div>

                <button type="button" className="dt-ai__cta">
                  Tanya AI Tutor tentang Tryout ini
                </button>
              </section>

              <section className="dt-composition">
                <h3>Komposisi Kesulitan</h3>
                <div className="dt-composition__row">
                  <div className="dt-composition__head">
                    <span>Sulit</span>
                    <span className="dt-composition__percent dt-composition__percent--red">45%</span>
                  </div>
                  <div className="dt-composition__track">
                    <div className="dt-composition__fill dt-composition__fill--red" style={{ width: "45%" }} />
                  </div>
                </div>
                <div className="dt-composition__row">
                  <div className="dt-composition__head">
                    <span>Sedang</span>
                    <span className="dt-composition__percent dt-composition__percent--amber">35%</span>
                  </div>
                  <div className="dt-composition__track">
                    <div className="dt-composition__fill dt-composition__fill--amber" style={{ width: "35%" }} />
                  </div>
                </div>
                <div className="dt-composition__row">
                  <div className="dt-composition__head">
                    <span>Mudah</span>
                    <span className="dt-composition__percent dt-composition__percent--green">20%</span>
                  </div>
                  <div className="dt-composition__track">
                    <div className="dt-composition__fill dt-composition__fill--green" style={{ width: "20%" }} />
                  </div>
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

export default DetailTryout;
