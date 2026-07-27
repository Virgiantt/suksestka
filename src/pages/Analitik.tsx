import { useState } from "react";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/Analitik.css";

const summaryCards = [
  { key: "skor", label: "Rata-rata Skor Nasional", value: "74%", badge: "+5%", tone: "blue" as const },
  { key: "ketuntasan", label: "Tingkat Ketuntasan", value: "82%", badge: "High perf.", tone: "green" as const },
  { key: "jam", label: "Total Jam Belajar", value: "12,450", unit: "Jam", badge: "Active", tone: "orange" as const },
  { key: "partisipasi", label: "Partisipasi Tryout", value: "91%", badge: "Peak", tone: "purple" as const },
];

const distribution = [
  { key: "exceeding", label: "Exceeding (85-100)", pct: 32, tone: "green" as const },
  { key: "meeting", label: "Meeting (70-84)", pct: 54, tone: "blue" as const },
  { key: "approaching", label: "Approaching (<70)", pct: 14, tone: "amber" as const },
];

const subjects = [
  { key: "matematika", name: "Matematika", score: "88.5%", level: "Sangat Baik", levelTone: "green" as const, trend: "+4.2%", trendTone: "green" as const },
  { key: "ipa", name: "Ilmu Pengetahuan Alam", score: "82.1%", level: "Baik", levelTone: "blue" as const, trend: "+2.8%", trendTone: "green" as const },
  { key: "bindo", name: "Bahasa Indonesia", score: "79.4%", level: "Baik", levelTone: "blue" as const, trend: "+0.5%", trendTone: "flat" as const },
];

function Analitik() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="teacher-dashboard analitik">
      <TeacherSidebar active="Analitik" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content analitik__content">
          <header className="an-hero">
            <div>
              <h1>Analitik Eksekutif</h1>
              <p>Tinjauan performa komprehensif untuk bulan ini.</p>
            </div>
            <div className="an-hero__actions">
              <button type="button" className="an-btn an-btn--outline">
                Bulan Ini
              </button>
              <button type="button" className="an-btn an-btn--primary">
                Ekspor Laporan
              </button>
            </div>
          </header>

          <section className="an-summary">
            {summaryCards.map((card) => (
              <article className={`an-card an-card--${card.tone}`} key={card.key}>
                <div className="an-card__top">
                  <span className={`an-card__icon an-card__icon--${card.tone}`} />
                  <span className={`an-card__badge an-card__badge--${card.tone}`}>{card.badge}</span>
                </div>
                <p className="an-card__label">{card.label}</p>
                <p className="an-card__value">
                  {card.value}
                  {card.unit ? <span className="an-card__unit"> {card.unit}</span> : null}
                </p>
              </article>
            ))}
          </section>

          <section className="an-bento">
            <div className="an-chart">
              <div className="an-chart__head">
                <div>
                  <h2>Tren Performa Siswa</h2>
                  <p>Komparasi rata-rata nilai tryout 6 bulan terakhir</p>
                </div>
                <div className="an-chart__legend">
                  <span>
                    <i className="an-dot an-dot--blue" /> SD
                  </span>
                  <span>
                    <i className="an-dot an-dot--purple" /> SMP
                  </span>
                </div>
              </div>
              <div className="an-chart__body">
                <svg viewBox="0 0 600 240" preserveAspectRatio="none" className="an-chart__svg">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line key={i} x1="0" y1={i * 48} x2="600" y2={i * 48} stroke="#E6E8EA" strokeDasharray="4 4" />
                  ))}
                  <path
                    d="M0 190 C 80 160, 130 100, 220 110 C 300 118, 340 60, 420 60 C 480 60, 520 30, 600 20"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 210 C 80 190, 140 120, 220 130 C 280 138, 320 170, 380 175 C 440 180, 520 90, 600 90"
                    fill="none"
                    stroke="#6A1EDB"
                    strokeWidth="4"
                    strokeDasharray="10 8"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="an-chart__axis">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>Mei</span>
                  <span>Jun</span>
                </div>
              </div>
            </div>

            <aside className="an-side">
              <div className="an-distribution">
                <h3>Distribusi Nilai</h3>
                {distribution.map((bar) => (
                  <div className="an-bar" key={bar.key}>
                    <div className="an-bar__top">
                      <span>{bar.label}</span>
                      <span className={`an-bar__pct an-bar__pct--${bar.tone}`}>{bar.pct}%</span>
                    </div>
                    <div className="an-bar__track">
                      <div className={`an-bar__fill an-bar__fill--${bar.tone}`} style={{ width: `${bar.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="an-insight">
                <div className="an-insight__box">
                  <p>
                    Materi 'Logika Dasar' menunjukkan peningkatan performa{" "}
                    <strong className="an-insight__highlight">15%</strong> setelah implementasi sesi AI Tutor minggu
                    lalu.
                  </p>
                </div>
                <h4>REKOMENDASI STRATEGI</h4>
                <ul>
                  <li>Fokuskan tryout bulan depan pada 'Pemahaman Bacaan'.</li>
                  <li>Tingkatkan intensitas latihan harian untuk kelompok 'Approaching'.</li>
                </ul>
              </div>
            </aside>
          </section>

          <section className="an-table-card">
            <div className="an-table-card__head">
              <h2>Top Performing Subjects</h2>
              <button type="button">Lihat Semua</button>
            </div>
            <div className="an-table-wrap">
              <table className="an-table">
                <thead>
                  <tr>
                    <th>Mata Pelajaran</th>
                    <th>Rata-rata Skor</th>
                    <th>Level Penguasaan</th>
                    <th>Tren (30 Hari)</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject) => (
                    <tr key={subject.key}>
                      <td>
                        <div className="an-subject">
                          <span className="an-subject__icon" />
                          {subject.name}
                        </div>
                      </td>
                      <td className="an-subject__score">{subject.score}</td>
                      <td>
                        <span className={`an-level an-level--${subject.levelTone}`}>{subject.level}</span>
                      </td>
                      <td>
                        <span className={`an-trend an-trend--${subject.trendTone}`}>{subject.trend}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <TeacherFooter />
      </div>
    </div>
  );
}

export default Analitik;
