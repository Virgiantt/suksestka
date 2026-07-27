import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/BankSoal.css";

type Difficulty = "Mudah" | "Sedang" | "Sulit";

type QuestionRow = {
  key: string;
  snippet: string;
  tag?: { label: string; variant: "ai" | "revision" };
  id: string;
  subject: string;
  grade: string;
  difficulty: Difficulty;
  performance: string;
};

const questions: QuestionRow[] = [
  {
    key: "mat-smp-092",
    snippet: "Hitunglah luas permukaan tabung jika diketahui jari-jari 7cm dan tinggi 10cm.",
    tag: { label: "AI Optimized", variant: "ai" },
    id: "MAT-SMP-092",
    subject: "Matematika",
    grade: "SMP Kelas 8",
    difficulty: "Sedang",
    performance: "65%",
  },
  {
    key: "bnd-sma-114",
    snippet: "Berdasarkan paragraf ke pada teks bacaan di atas, apa ide pokoknya...",
    tag: { label: "Needs Revision", variant: "revision" },
    id: "BND-SMA-114",
    subject: "B. Indonesia",
    grade: "SMA Kelas 11",
    difficulty: "Sulit",
    performance: "24%",
  },
  {
    key: "ipa-sd-045",
    snippet: "Proses perubahan wujud zat yang diikuti oleh perpindahan zat",
    id: "IPA-SD-045",
    subject: "IPA",
    grade: "SD Kelas 6",
    difficulty: "Mudah",
    performance: "88%",
  },
  {
    key: "ipa-smp-022",
    snippet: "Jelaskan perbedaan struktur sel hewan dan sel tumbuhan dalam hal",
    id: "IPA-SMP-022",
    subject: "IPA",
    grade: "SMP Kelas 7",
    difficulty: "Sedang",
    performance: "68%",
  },
  {
    key: "fis-smp-008",
    snippet: "Sebuah mobil menempuh jarak 120 km dalam waktu 2 jam. Berapakah kecepatan",
    id: "FIS-SMP-008",
    subject: "Fisika",
    grade: "SMP Kelas 8",
    difficulty: "Mudah",
    performance: "92%",
  },
];

const difficultyClass: Record<Difficulty, string> = {
  Mudah: "bank-soal-badge--green",
  Sedang: "bank-soal-badge--orange",
  Sulit: "bank-soal-badge--red",
};

const performanceClass: Record<Difficulty, string> = {
  Mudah: "bank-soal-performance--green",
  Sedang: "bank-soal-performance--orange",
  Sulit: "bank-soal-performance--red",
};

function BankSoal() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [soalNotificationVisible, setSoalNotificationVisible] = useState(false);

  useEffect(() => {
    if ((location.state as { soalSuccess?: boolean } | null)?.soalSuccess) {
      setSoalNotificationVisible(true);
    }
  }, [location.state]);

  return (
    <div className="teacher-dashboard bank-soal">
      <TeacherSidebar active="Bank Soal" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content bank-soal__content">
          {soalNotificationVisible ? (
            <div className="bank-soal__notification" role="status">
              <div>
                <strong>Soal berhasil dipublish</strong>
                <span>Soal baru sudah tersimpan di bank soal Anda.</span>
              </div>
              <button
                type="button"
                aria-label="Tutup notifikasi"
                onClick={() => setSoalNotificationVisible(false)}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          ) : null}

          <header className="bank-soal__header">
            <div className="bank-soal__heading">
              <h1>Manajemen Bank Soal</h1>
              <p>Kelola, buat, dan optimasi butir soal untuk persiapan TKA.</p>
            </div>
            <div className="bank-soal__header-actions">
              <button type="button" className="bank-soal__ai-btn">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.5 6L12.5625 3.9375L10.5 3L12.5625 2.0625L13.5 0L14.4375 2.0625L16.5 3L14.4375 3.9375L13.5 6ZM13.5 16.5L12.5625 14.4375L10.5 13.5L12.5625 12.5625L13.5 10.5L14.4375 12.5625L16.5 13.5L14.4375 14.4375L13.5 16.5ZM6 14.25L4.125 10.125L0 8.25L4.125 6.375L6 2.25L7.875 6.375L12 8.25L7.875 10.125L6 14.25ZM6 10.6125L6.75 9L8.3625 8.25L6.75 7.5L6 5.8875L5.25 7.5L3.6375 8.25L5.25 9L6 10.6125Z"
                    fill="#6A1EDB"
                  />
                </svg>
                Generate with AI
              </button>
              <Link to="/bank-soal/tambah" className="bank-soal__add-btn">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 6H0V4.5H4.5V0H6V4.5H10.5V6H6V10.5H4.5V6Z" fill="white" />
                </svg>
                Buat Soal Baru
              </Link>
            </div>
          </header>

          <section className="bank-soal__stats">
            <article className="bank-stat">
              <div className="bank-stat__top">
                <div>
                  <p className="bank-stat__label">Total Butir Soal</p>
                  <p className="bank-stat__value">2,450</p>
                </div>
                <span className="bank-stat__icon bank-stat__icon--blue">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 14H8V10H4V14ZM10 14H14V10H10V14ZM4 8H8V4H4V8ZM10 8H14V4H10V8ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2Z"
                      fill="#004AC6"
                    />
                  </svg>
                </span>
              </div>
              <div className="bank-stat__trend">
                <span className="bank-stat__trend-pill">
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.816667 7L0 6.18333L4.31667 1.8375L6.65 4.17083L9.68333 1.16667H8.16667V0H11.6667V3.5H10.5V1.98333L6.65 5.83333L4.31667 3.5L0.816667 7Z" fill="#10B981" />
                  </svg>
                  12%
                </span>
                <span className="bank-stat__trend-text">Bulan ini</span>
              </div>
            </article>

            <article className="bank-stat">
              <div className="bank-stat__top">
                <div>
                  <p className="bank-stat__label">Soal Diverifikasi</p>
                  <p className="bank-stat__value">
                    98<span className="bank-stat__value-suffix">%</span>
                  </p>
                </div>
                <span className="bank-stat__icon bank-stat__icon--green">
                  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.6 21L5.7 17.8L2.1 17L2.45 13.3L0 10.5L2.45 7.7L2.1 4L5.7 3.2L7.6 0L11 1.45L14.4 0L16.3 3.2L19.9 4L19.55 7.7L22 10.5L19.55 13.3L19.9 17L16.3 17.8L14.4 21L11 19.55L7.6 21ZM9.95 14.05L15.6 8.4L14.2 6.95L9.95 11.2L7.8 9.1L6.4 10.5L9.95 14.05Z"
                      fill="#10B981"
                    />
                  </svg>
                </span>
              </div>
              <div className="bank-stat__progress-track">
                <div className="bank-stat__progress-fill" style={{ width: "98%" }} />
              </div>
              <p className="bank-stat__subtext">2,401 soal siap pakai</p>
            </article>

            <article className="bank-stat">
              <div className="bank-stat__top">
                <div>
                  <p className="bank-stat__label">Rata-rata Kesulitan</p>
                  <p className="bank-stat__value bank-stat__value--amber">Medium</p>
                </div>
                <span className="bank-stat__icon bank-stat__icon--amber">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.45 11.5C8.86667 11.9167 9.39167 12.1125 10.025 12.0875C10.6583 12.0625 11.1167 11.8333 11.4 11.4L17 3L8.6 8.6C8.16667 8.9 7.92917 9.35417 7.8875 9.9625C7.84583 10.5708 8.03333 11.0833 8.45 11.5ZM3.1 16C2.73333 16 2.39583 15.9208 2.0875 15.7625C1.77917 15.6042 1.53333 15.3667 1.35 15.05C0.916667 14.2667 0.583333 13.4542 0.35 12.6125C0.116667 11.7708 0 10.9 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3667 0 12.65 0.258333 13.85 0.775C15.05 1.29167 16.1 1.99583 17 2.8875C17.9 3.77917 18.6167 4.82083 19.15 6.0125C19.6833 7.20417 19.9583 8.48333 19.975 9.85C19.9917 10.7667 19.8875 11.6625 19.6625 12.5375C19.4375 13.4125 19.0917 14.25 18.625 15.05C18.4417 15.3667 18.1958 15.6042 17.8875 15.7625C17.5792 15.9208 17.2417 16 16.875 16H3.1Z"
                      fill="#F59E0B"
                    />
                  </svg>
                </span>
              </div>
              <div className="bank-stat__difficulty-track">
                <span className="bank-stat__difficulty-segment bank-stat__difficulty-segment--green" style={{ flex: 1.5 }} />
                <span className="bank-stat__difficulty-segment bank-stat__difficulty-segment--amber" style={{ flex: 2.5 }} />
                <span className="bank-stat__difficulty-segment bank-stat__difficulty-segment--red" style={{ flex: 1 }} />
              </div>
              <div className="bank-stat__difficulty-labels">
                <span>Mudah</span>
                <span>Sedang</span>
                <span>Sulit</span>
              </div>
            </article>

            <article className="bank-stat">
              <div className="bank-stat__top">
                <div>
                  <p className="bank-stat__label">Mata Pelajaran Terpopuler</p>
                  <p className="bank-stat__value bank-stat__value--purple">Matematika</p>
                </div>
                <span className="bank-stat__icon bank-stat__icon--purple">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 15H6.5V13H8.5V11.5H6.5V9.5H5V11.5H3V13H5V15ZM10 14.25H15V12.75H10V14.25ZM10 11.75H15V10.25H10V11.75ZM3.25 6.2H8.25V4.7H3.25V6.2ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM11.1 7.95L12.5 6.55L13.9 7.95L14.95 6.9L13.55 5.45L14.95 4.05L13.9 3L12.5 4.4L11.1 3L10.05 4.05L11.45 5.45L10.05 6.9L11.1 7.95Z"
                      fill="#6A1EDB"
                    />
                  </svg>
                </span>
              </div>
              <p className="bank-stat__subtext bank-stat__subtext--strong">
                <strong>845</strong> butir soal
              </p>
            </article>
          </section>

          <div className="bank-soal__layout">
            <div className="bank-soal__main">
              <div className="bank-soal__filters">
                <div className="bank-soal__search">
                  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                      fill="#737686"
                    />
                  </svg>
                  <input type="search" placeholder="Cari berdasarkan teks soal, ID, atau topik..." aria-label="Cari soal" />
                </div>

                <div className="bank-soal__chips">
                  <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12V10H11V12H7ZM3 7V5H15V7H3ZM0 2V0H18V2H0Z" fill="#C3C6D7" />
                  </svg>
                  <div className="bank-soal__chip">
                    <span>Tingkat: Semua</span>
                    <svg width="15" height="9" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.30005 8.40039L10.5 12.6004L14.7 8.40039" stroke="#6B7280" strokeWidth="1.575" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="bank-soal__chip">
                    <span>Mata Pelajaran: Semua</span>
                    <svg width="15" height="9" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.30005 8.40039L10.5 12.6004L14.7 8.40039" stroke="#6B7280" strokeWidth="1.575" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="bank-soal__chip">
                    <span>Kesulitan: Semua</span>
                    <svg width="15" height="9" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.30005 8.40039L10.5 12.6004L14.7 8.40039" stroke="#6B7280" strokeWidth="1.575" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <button type="button" className="bank-soal__reset-btn">
                    Reset Filters
                  </button>
                </div>
              </div>

              <div className="bank-soal__table">
                <div className="bank-soal__table-head">
                  <span className="bank-soal__col-snippet">Snippet Soal</span>
                  <span className="bank-soal__col-meta">Meta</span>
                  <span className="bank-soal__col-difficulty">Kesulitan</span>
                  <span className="bank-soal__col-performance">Performa</span>
                  <span className="bank-soal__col-action">Aksi</span>
                </div>

                {questions.map((question) => (
                  <div className="bank-soal__row" key={question.key}>
                    <div className="bank-soal__col-snippet">
                      <input type="checkbox" aria-label={`Pilih soal ${question.id}`} />
                      <div className="bank-soal__snippet-body">
                        <p className="bank-soal__snippet-text">{question.snippet}</p>
                        <div className="bank-soal__snippet-meta">
                          {question.tag ? (
                            <span className={`bank-soal__tag bank-soal__tag--${question.tag.variant}`}>
                              {question.tag.variant === "ai" ? (
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M9 4L8.375 2.625L7 2L8.375 1.375L9 0L9.625 1.375L11 2L9.625 2.625L9 4ZM9 11L8.375 9.625L7 9L8.375 8.375L9 7L9.625 8.375L11 9L9.625 9.625L9 11ZM4 9.5L2.75 6.75L0 5.5L2.75 4.25L4 1.5L5.25 4.25L8 5.5L5.25 6.75L4 9.5ZM4 7.075L4.5 6L5.575 5.5L4.5 5L4 3.925L3.5 5L2.425 5.5L3.5 6L4 7.075Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              ) : (
                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M0 9.5L5.5 0L11 9.5H0ZM1.725 8.5H9.275L5.5 2L1.725 8.5ZM5.5 8C5.64167 8 5.76042 7.95208 5.85625 7.85625C5.95208 7.76042 6 7.64167 6 7.5C6 7.35833 5.95208 7.23958 5.85625 7.14375C5.76042 7.04792 5.64167 7 5.5 7C5.35833 7 5.23958 7.04792 5.14375 7.14375C5.04792 7.23958 5 7.35833 5 7.5C5 7.64167 5.04792 7.76042 5.14375 7.85625C5.23958 7.95208 5.35833 8 5.5 8ZM5 6.5H6V4H5V6.5Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              )}
                              {question.tag.label}
                            </span>
                          ) : null}
                          <span className="bank-soal__id">ID: {question.id}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bank-soal__col-meta">
                      <p className="bank-soal__subject">{question.subject}</p>
                      <p className="bank-soal__grade">{question.grade}</p>
                    </div>

                    <div className="bank-soal__col-difficulty">
                      <span className={`bank-soal-badge ${difficultyClass[question.difficulty]}`}>
                        {question.difficulty}
                      </span>
                    </div>

                    <div className="bank-soal__col-performance">
                      <p className={`bank-soal-performance ${performanceClass[question.difficulty]}`}>
                        {question.performance}
                      </p>
                      <p className="bank-soal-performance__label">Tingkat Benar</p>
                    </div>

                    <div className="bank-soal__col-action">
                      <button type="button" aria-label="Lihat soal" className="bank-soal__row-btn">
                        <svg width="14" height="14" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.16667 10C10.2083 10 11.0938 9.63542 11.8229 8.90625C12.5521 8.17708 12.9167 7.29167 12.9167 6.25C12.9167 5.20833 12.5521 4.32292 11.8229 3.59375C11.0938 2.86458 10.2083 2.5 9.16667 2.5C8.125 2.5 7.23958 2.86458 6.51042 3.59375C5.78125 4.32292 5.41667 5.20833 5.41667 6.25C5.41667 7.29167 5.78125 8.17708 6.51042 8.90625C7.23958 9.63542 8.125 10 9.16667 10Z"
                            fill="#434655"
                          />
                        </svg>
                      </button>
                      <button type="button" aria-label="Edit soal" className="bank-soal__row-btn">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 12H2.56875L9.9 4.66875L8.83125 3.6L1.5 10.9312V12ZM0 13.5V10.3125L9.9 0.43125C10.05 0.29375 10.2156 0.1875 10.3969 0.1125C10.5781 0.0375 10.7688 0 10.9688 0C11.1687 0 11.3625 0.0375 11.55 0.1125C11.7375 0.1875 11.9 0.3 12.0375 0.45L13.0688 1.5C13.2188 1.6375 13.3281 1.8 13.3969 1.9875C13.4656 2.175 13.5 2.3625 13.5 2.55C13.5 2.75 13.4656 2.94062 13.3969 3.12188C13.3281 3.30313 13.2188 3.46875 13.0688 3.61875L3.1875 13.5H0Z"
                            fill="#434655"
                          />
                        </svg>
                      </button>
                      <button type="button" aria-label="Hapus soal" className="bank-soal__row-btn">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.5 14C3.0875 14 2.73438 13.8531 2.44063 13.5594C2.14688 13.2656 2 12.9125 2 12.5V3H1V1.5H5V0.5H9V1.5H13V3H12V12.5C12 12.9125 11.8531 13.2656 11.5594 13.5594C11.2656 13.8531 10.9125 14 10.5 14H3.5Z"
                            fill="#434655"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}

                <div className="bank-soal__pagination">
                  <p>Menampilkan 1-5 dari 2,450 soal</p>
                  <div className="bank-soal__pagination-controls">
                    <button type="button" className="bank-soal__page-btn" aria-label="Halaman sebelumnya">
                      <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.68333 3.5L0 0.816667L0.816667 0L4.31667 3.5L0.816667 7L0 6.18333L2.68333 3.5Z" fill="#191C1E" transform="rotate(180 2.5 3.5)" />
                      </svg>
                    </button>
                    <button type="button" className="bank-soal__page-btn is-active">1</button>
                    <button type="button" className="bank-soal__page-btn">2</button>
                    <button type="button" className="bank-soal__page-btn">3</button>
                    <span className="bank-soal__page-ellipsis">...</span>
                    <button type="button" className="bank-soal__page-btn bank-soal__page-btn--outline" aria-label="Halaman selanjutnya">
                      <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.68333 3.5L0 0.816667L0.816667 0L4.31667 3.5L0.816667 7L0 6.18333L2.68333 3.5Z" fill="#191C1E" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <aside className="bank-soal__aside">
              <section className="bank-ai-widget">
                <div className="bank-ai-widget__head">
                  <span className="bank-ai-widget__icon">
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 8.66667C1.44444 8.66667 0.972222 8.47222 0.583333 8.08333C0.194444 7.69444 0 7.22222 0 6.66667C0 6.11111 0.194444 5.63889 0.583333 5.25C0.972222 4.86111 1.44444 4.66667 2 4.66667V3.33333C2 2.96667 2.13056 2.65278 2.39167 2.39167C2.65278 2.13056 2.96667 2 3.33333 2H5.33333C5.33333 1.44444 5.52778 0.972222 5.91667 0.583333C6.30556 0.194444 6.77778 0 7.33333 0C7.88889 0 8.36111 0.194444 8.75 0.583333C9.13889 0.972222 9.33333 1.44444 9.33333 2H11.3333C11.7 2 12.0139 2.13056 12.275 2.39167C12.5361 2.65278 12.6667 2.96667 12.6667 3.33333V4.66667C13.2222 4.66667 13.6944 4.86111 14.0833 5.25C14.4722 5.63889 14.6667 6.11111 14.6667 6.66667C14.6667 7.22222 14.4722 7.69444 14.0833 8.08333C13.6944 8.47222 13.2222 8.66667 12.6667 8.66667V11.3333C12.6667 11.7 12.5361 12.0139 12.275 12.275C12.0139 12.5361 11.7 12.6667 11.3333 12.6667H3.33333C2.96667 12.6667 2.65278 12.5361 2.39167 12.275C2.13056 12.0139 2 11.7 2 11.3333V8.66667Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <h2>AI Question Assistant</h2>
                </div>

                <div className="bank-ai-widget__body">
                  <p>Unggah dokumen kurikulum atau paste teks materi untuk mengenerate set soal secara otomatis dengan AI.</p>

                  <label className="bank-ai-widget__dropzone">
                    <input type="file" accept=".pdf,.docx" hidden />
                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.75 21.25H11.25V16.0312L13.25 18.0312L15 16.25L10 11.25L5 16.25L6.78125 18L8.75 16.0312V21.25ZM2.5 25C1.8125 25 1.22396 24.7552 0.734375 24.2656C0.244792 23.776 0 23.1875 0 22.5V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H12.5L20 7.5V22.5C20 23.1875 19.7552 23.776 19.2656 24.2656C18.776 24.7552 18.1875 25 17.5 25H2.5Z"
                        fill="#C3C6D7"
                      />
                    </svg>
                    <span className="bank-ai-widget__dropzone-title">Upload PDF/DOCX</span>
                    <span className="bank-ai-widget__dropzone-hint">Maks. 5MB</span>
                  </label>

                  <textarea className="bank-ai-widget__textarea" placeholder="Atau paste teks materi di sini..." rows={3} />

                  <button type="button" className="bank-ai-widget__generate-btn">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 8.38125L6.75 6.75L8.38125 6L6.75 5.25L6 3.61875L5.25 5.25L3.61875 6L5.25 6.75L6 8.38125ZM6 12L4.125 7.875L0 6L4.125 4.125L6 0L7.875 4.125L12 6L7.875 7.875L6 12ZM12 13.5L11.0625 11.4375L9 10.5L11.0625 9.5625L12 7.5L12.9375 9.5625L15 10.5L12.9375 11.4375L12 13.5Z"
                        fill="white"
                      />
                    </svg>
                    Generate Draft Soal
                  </button>
                </div>
              </section>

              <section className="bank-balance-widget">
                <div className="bank-balance-widget__head">
                  <h2>Analisis Keseimbangan</h2>
                  <button type="button" className="bank-balance-widget__more" aria-label="Opsi lainnya">
                    <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.66667 13.3333C1.20833 13.3333 0.815972 13.1701 0.489583 12.8438C0.163194 12.5174 0 12.125 0 11.6667C0 11.2083 0.163194 10.816 0.489583 10.4896C0.815972 10.1632 1.20833 10 1.66667 10C2.125 10 2.51736 10.1632 2.84375 10.4896C3.17014 10.816 3.33333 11.2083 3.33333 11.6667C3.33333 12.125 3.17014 12.5174 2.84375 12.8438C2.51736 13.1701 2.125 13.3333 1.66667 13.3333ZM1.66667 8.33333C1.20833 8.33333 0.815972 8.17014 0.489583 7.84375C0.163194 7.51736 0 7.125 0 6.66667C0 6.20833 0.163194 5.81597 0.489583 5.48958C0.815972 5.16319 1.20833 5 1.66667 5C2.125 5 2.51736 5.16319 2.84375 5.48958C3.17014 5.81597 3.33333 6.20833 3.33333 6.66667C3.33333 7.125 3.17014 7.51736 2.84375 7.84375C2.51736 8.17014 2.125 8.33333 1.66667 8.33333ZM1.66667 3.33333C1.20833 3.33333 0.815972 3.17014 0.489583 2.84375C0.163194 2.51736 0 2.125 0 1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0C2.125 0 2.51736 0.163194 2.84375 0.489583C3.17014 0.815972 3.33333 1.20833 3.33333 1.66667C3.33333 2.125 3.17014 2.51736 2.84375 2.84375C2.51736 3.17014 2.125 3.33333 1.66667 3.33333Z"
                        fill="#737686"
                      />
                    </svg>
                  </button>
                </div>

                <p className="bank-balance-widget__subtitle">Berdasarkan Taksonomi Bloom</p>

                <div className="bank-balance-widget__bars">
                  <div className="bank-balance-bar">
                    <div className="bank-balance-bar__top">
                      <span>Mengingat (C1) - Memahami (C2)</span>
                      <span>45%</span>
                    </div>
                    <div className="bank-balance-bar__track">
                      <div className="bank-balance-bar__fill bank-balance-bar__fill--60" style={{ width: "45%" }} />
                    </div>
                  </div>

                  <div className="bank-balance-bar">
                    <div className="bank-balance-bar__top">
                      <span>Mengaplikasikan (C3)</span>
                      <span>30%</span>
                    </div>
                    <div className="bank-balance-bar__track">
                      <div className="bank-balance-bar__fill bank-balance-bar__fill--80" style={{ width: "30%" }} />
                    </div>
                  </div>

                  <div className="bank-balance-bar">
                    <div className="bank-balance-bar__top">
                      <span>Menganalisis (C4) - Mencipta (C6) (HOTS)</span>
                      <span className="bank-balance-bar__top-warning">25% (Kurang)</span>
                    </div>
                    <div className="bank-balance-bar__track">
                      <div className="bank-balance-bar__fill bank-balance-bar__fill--warning" style={{ width: "25%" }} />
                    </div>
                  </div>
                </div>

                <div className="bank-balance-widget__tip">
                  <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.25 16.6667C5.79167 16.6667 5.39931 16.5035 5.07292 16.1771C4.74653 15.8507 4.58333 15.4583 4.58333 15H7.91667C7.91667 15.4583 7.75347 15.8507 7.42708 16.1771C7.10069 16.5035 6.70833 16.6667 6.25 16.6667ZM2.91667 14.1667V12.5H9.58333V14.1667H2.91667ZM3.125 11.6667C2.16667 11.0972 1.40625 10.3333 0.84375 9.375C0.28125 8.41667 0 7.375 0 6.25C0 4.51389 0.607639 3.03819 1.82292 1.82292C3.03819 0.607639 4.51389 0 6.25 0C7.98611 0 9.46181 0.607639 10.6771 1.82292C11.8924 3.03819 12.5 4.51389 12.5 6.25C12.5 7.375 12.2188 8.41667 11.6562 9.375C11.0938 10.3333 10.3333 11.0972 9.375 11.6667H3.125Z"
                      fill="#F59E0B"
                    />
                  </svg>
                  <p>
                    Sistem merekomendasikan untuk menambah <strong>150 butir soal HOTS</strong> <strong>(C4-C6)</strong>{" "}
                    untuk mata pelajaran Matematika dan IPA agar komposisi bank soal ideal untuk TKA.
                  </p>
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

export default BankSoal;
