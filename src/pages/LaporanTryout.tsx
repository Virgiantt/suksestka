import { useState } from "react";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/LaporanTryout.css";

const heatmapRows = [
  { key: "hitung", label: "Operasi Hitung Campuran", percent: 85, color: "green" as const },
  { key: "pecahan", label: "Pecahan & Desimal", percent: 72, color: "blue" as const },
  { key: "geometri", label: "Geometri Ruang (Volume)", percent: 58, color: "amber" as const },
  { key: "cerita", label: "Soal Cerita / Logika", percent: 34, color: "red" as const },
];

const topPerformers = [
  { key: "budi", rank: 1, name: "Budi Santoso", school: "SDN 01 Menteng", score: 98, delta: "+4 Level" },
  { key: "aisyah", rank: 2, name: "Aisyah Zahra", school: "SD Al Azhar", score: 95, delta: "+2 Level" },
  { key: "rizky", rank: 3, name: "Rizky Ramadhan", school: "SD Cita Kasih", score: 94, delta: "Tetap" },
];

const distribution = [
  { label: "0-20", value: 4 },
  { label: "21-40", value: 45 },
  { label: "41-60", value: 145 },
  { label: "61-80", value: 640 },
  { label: "81-100", value: 414 },
];

function LaporanTryout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const maxDistribution = Math.max(...distribution.map((d) => d.value));

  return (
    <div className="teacher-dashboard laporan-tryout">
      <TeacherSidebar active="Tryout" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content laporan-tryout__content">
          <header className="lt-header">
            <div className="lt-header__text">
              <div className="lt-header__meta">
                <span className="lt-header__badge">Report Selesai</span>
                <span className="lt-header__date">
                  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.16667 11.6667C0.845833 11.6667 0.571181 11.5524 0.342708 11.324C0.114236 11.0955 0 10.8208 0 10.5V2.33333C0 2.0125 0.114236 1.73785 0.342708 1.50937C0.571181 1.2809 0.845833 1.16667 1.16667 1.16667H1.75V0H2.91667V1.16667H7.58333V0H8.75V1.16667H9.33333C9.65417 1.16667 9.92882 1.2809 10.1573 1.50937C10.3858 1.73785 10.5 2.0125 10.5 2.33333V10.5C10.5 10.8208 10.3858 11.0955 10.1573 11.324C9.92882 11.5524 9.65417 11.6667 9.33333 11.6667H1.16667Z" fill="#434655" />
                  </svg>
                  24 Okt 2023
                </span>
              </div>
              <h1>Olimpiade Mat SD Penyisihan</h1>
              <p>
                Laporan analisis performa komprehensif untuk tryout Matematika tingkat SD. Tinjau metrik kunci,
                distribusi nilai, dan rekomendasi AI.
              </p>
            </div>
            <button type="button" className="lt-export">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z" fill="#191C1E" />
              </svg>
              Export PDF
            </button>
          </header>

          <section className="lt-metrics">
            <article className="lt-metric">
              <p className="lt-metric__label">Total Peserta</p>
              <div className="lt-metric__row">
                <span className="lt-metric__value">1,248</span>
                <span className="lt-metric__pill">+12%</span>
              </div>
            </article>
            <article className="lt-metric">
              <p className="lt-metric__label">Rata-rata Nilai</p>
              <div className="lt-metric__row">
                <span className="lt-metric__value lt-metric__value--blue">76.4</span>
                <span className="lt-metric__suffix">/ 100</span>
              </div>
            </article>
            <article className="lt-metric">
              <p className="lt-metric__label">Rata-rata Waktu</p>
              <div className="lt-metric__row">
                <span className="lt-metric__value">42</span>
                <span className="lt-metric__suffix">mnt</span>
              </div>
            </article>
            <article className="lt-metric">
              <p className="lt-metric__label">Tingkat Kesulitan Soal</p>
              <div className="lt-metric__row">
                <span className="lt-metric__value lt-metric__value--red">Tinggi</span>
              </div>
            </article>
          </section>

          <div className="lt-visual">
            <section className="lt-histogram">
              <div className="lt-histogram__head">
                <h2>Distribusi Nilai</h2>
                <span className="lt-histogram__select">Seluruh Peserta</span>
              </div>
              <div className="lt-histogram__chart">
                {distribution.map((bar) => (
                  <div className="lt-histogram__col" key={bar.label}>
                    <div className="lt-histogram__track">
                      <div
                        className="lt-histogram__bar"
                        style={{ height: `${(bar.value / maxDistribution) * 100}%` }}
                      />
                    </div>
                    <span>{bar.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="lt-ai">
              <div className="lt-ai__head">
                <span className="lt-ai__icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 13H10L10.15 11.75C10.2833 11.7 10.4042 11.6417 10.5125 11.575C10.6208 11.5083 10.7167 11.4333 10.8 11.35L11.95 11.85L12.95 10.15L11.95 9.4C11.9833 9.26667 12 9.13333 12 9C12 8.86667 11.9833 8.73333 11.95 8.6L12.95 7.85L11.95 6.15L10.8 6.65C10.7167 6.56667 10.6208 6.49167 10.5125 6.425C10.4042 6.35833 10.2833 6.3 10.15 6.25L10 5H8L7.85 6.25C7.71667 6.3 7.59583 6.35833 7.4875 6.425C7.37917 6.49167 7.28333 6.56667 7.2 6.65L6.05 6.15L5.05 7.85L6.05 8.6C6.01667 8.73333 6 8.86667 6 9C6 9.13333 6.01667 9.26667 6.05 9.4L5.05 10.15L6.05 11.85L7.2 11.35C7.28333 11.4333 7.37917 11.5083 7.4875 11.575C7.59583 11.6417 7.71667 11.7 7.85 11.75L8 13Z" fill="white" />
                  </svg>
                </span>
                <div>
                  <h2>AI Insights</h2>
                  <p>Rekomendasi Intervensi</p>
                </div>
              </div>

              <div className="lt-ai__card">
                <p className="lt-ai__card-title">
                  <i className="lt-ai__card-dot" />
                  Fokus: Geometri Dasar
                </p>
                <p className="lt-ai__card-text">
                  45% siswa salah pada soal Luas Bangun Datar Gabungan. Disarankan review materi visual sebelum
                  ujian berikutnya.
                </p>
              </div>

              <div className="lt-ai__card">
                <p className="lt-ai__card-title">
                  <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.625 15C5.2125 15 4.85938 14.8531 4.56563 14.5594C4.27188 14.2656 4.125 13.9125 4.125 13.5H7.125C7.125 13.9125 6.97812 14.2656 6.68437 14.5594C6.39062 14.8531 6.0375 15 5.625 15Z" fill="#F59E0B" />
                  </svg>
                  Potensi Pengayaan
                </p>
                <p className="lt-ai__card-text">
                  Top 10% menyelesaikan soal Aritmatika 2x lebih cepat. Pertimbangkan memberikan modul tantangan
                  tingkat SMP untuk grup ini.
                </p>
              </div>

              <button type="button" className="lt-ai__cta">
                Generate Modul Remedial
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 6L12.5625 3.9375L10.5 3L12.5625 2.0625L13.5 0L14.4375 2.0625L16.5 3L14.4375 3.9375L13.5 6ZM13.5 16.5L12.5625 14.4375L10.5 13.5L12.5625 12.5625L13.5 10.5L14.4375 12.5625L16.5 13.5L14.4375 14.4375L13.5 16.5ZM6 14.25L4.125 10.125L0 8.25L4.125 6.375L6 2.25L7.875 6.375L12 8.25L7.875 10.125L6 14.25Z" fill="#8B5CF6" />
                </svg>
              </button>
            </section>
          </div>

          <div className="lt-bottom">
            <section className="lt-heatmap">
              <div className="lt-heatmap__head">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8V0H8V8H0ZM0 18V10H8V18H0ZM10 8V0H18V8H10ZM10 18V10H18V18H10Z" fill="#FB923C" />
                </svg>
                <h2>Heatmap Penguasaan Topik</h2>
              </div>
              <div className="lt-heatmap__list">
                {heatmapRows.map((row) => (
                  <div className="lt-heatmap__row" key={row.key}>
                    <div className="lt-heatmap__row-head">
                      <span>{row.label}</span>
                      <span className={`lt-heatmap__percent lt-heatmap__percent--${row.color}`}>{row.percent}% Benar</span>
                    </div>
                    <div className="lt-heatmap__track">
                      <div className={`lt-heatmap__fill lt-heatmap__fill--${row.color}`} style={{ width: `${row.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="lt-top">
              <div className="lt-top__head">
                <div className="lt-top__title">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H10V7.85C10 8.23333 9.91667 8.575 9.75 8.875C9.58333 9.175 9.35 9.41667 9.05 9.6L5.5 11.7L6.2 14H10L6.9 16.2L8.1 20L5 17.65L1.9 20L3.1 16.2L0 14H3.8L4.5 11.7L0.95 9.6C0.65 9.41667 0.416667 9.175 0.25 8.875C0.0833333 8.575 0 8.23333 0 7.85V0ZM4 2V9.05L5 9.65L6 9.05V2H4Z" fill="#FED01B" />
                  </svg>
                  <h2>Top Performer (SD)</h2>
                </div>
                <button type="button">Lihat Semua</button>
              </div>
              <div className="lt-top__list">
                {topPerformers.map((student) => (
                  <div className="lt-top__item" key={student.key}>
                    <div className="lt-top__item-left">
                      <span className={`lt-top__rank${student.rank === 1 ? " lt-top__rank--gold" : ""}`}>{student.rank}</span>
                      <div>
                        <p className="lt-top__name">{student.name}</p>
                        <p className="lt-top__school">{student.school}</p>
                      </div>
                    </div>
                    <div className="lt-top__item-right">
                      <p className="lt-top__score">{student.score}</p>
                      <p className="lt-top__delta">{student.delta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <TeacherFooter />
      </div>
    </div>
  );
}

export default LaporanTryout;
