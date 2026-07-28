import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import AdminFooter from "../../components/admin/AdminFooter";
import "../../styles/admin/AnalitikPlatformAdmin.css";

const modules = [
  { key: "ai-tutor", name: "AI Tutor Bot", hits: "145,230", completion: 94, trend: "+12%", trendUp: true },
  { key: "tryout", name: "Tryout Akbar UTBK", hits: "89,400", completion: 82, trend: "+8%", trendUp: true },
  { key: "latihan", name: "Latihan Soal Harian", hits: "65,120", completion: 45, trend: "-3%", trendUp: false },
];

const events = [
  { key: "1", text: "Budi S. mendaftar paket Premium.", time: "Baru saja", tone: "blue" as const },
  { key: "2", text: "Tryout #4 dipublikasikan ke Nasional.", time: "2 mnt yang lalu", tone: "purple" as const },
  { key: "3", text: "Lonjakan latensi server di Region 2.", time: "15 mnt yang lalu", tone: "red" as const },
  { key: "4", text: "Pembayaran massal BCA berhasil direkonsiliasi.", time: "1 jam yang lalu", tone: "green" as const },
];

function EventIcon({ tone }: { tone: "blue" | "purple" | "red" | "green" }) {
  if (tone === "purple") {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 0L7.2 4.5H12L8.2 7.2L9.5 12L6 9.1L2.5 12L3.8 7.2L0 4.5H4.8L6 0Z" fill="white" />
      </svg>
    );
  }
  if (tone === "red") {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 0L12 11H0L6 0ZM6 4V7.5M6 9V9.2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (tone === "green") {
    return (
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 0C3.24 0 1 2.24 1 5C1 8.5 6 12 6 12C6 12 11 8.5 11 5C11 2.24 8.76 0 6 0ZM6 6.5C5.17 6.5 4.5 5.83 4.5 5C4.5 4.17 5.17 3.5 6 3.5C6.83 3.5 7.5 4.17 7.5 5C7.5 5.83 6.83 6.5 6 6.5Z" fill="white" />
    </svg>
  );
}

function AnalitikPlatformAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-dashboard">
      <AdminSidebar active="Analitik Platform" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-dashboard__main">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="admin-dashboard__content al-content">
          <header className="al-header">
            <div>
              <h1>Analitik Platform</h1>
              <p>Tinjauan komprehensif performa platform SuksesTKA.</p>
            </div>
            <div className="al-header__actions">
              <button type="button" className="al-btn al-btn--ghost">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 6H14M5 2V4M11 2V4M3 3H13C13.55 3 14 3.45 14 4V13C14 13.55 13.55 14 13 14H3C2.45 14 2 13.55 2 13V4C2 3.45 2.45 3 3 3Z" stroke="#737686" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                30 Hari Terakhir
              </button>
              <button type="button" className="al-btn al-btn--primary">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1V9M7 9L4 6M7 9L10 6M2 11V12C2 12.55 2.45 13 3 13H11C11.55 13 12 12.55 12 12V11" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Export Report
              </button>
            </div>
          </header>

          <section className="al-kpis">
            <article className="al-kpi al-kpi--blue">
              <svg className="al-kpi__bg" width="80" height="70" viewBox="0 0 80 70" fill="none">
                <circle cx="40" cy="35" r="34" fill="currentColor" />
              </svg>
              <p className="al-kpi__label">Total Pengguna Aktif</p>
              <div className="al-kpi__row">
                <p className="al-kpi__value">12.4K</p>
                <span className="al-kpi__pill al-kpi__pill--up">▲ +14.2% WoW</span>
              </div>
              <div className="al-kpi__bars">
                <span style={{ height: "40%" }} />
                <span style={{ height: "60%" }} />
                <span style={{ height: "50%" }} />
                <span style={{ height: "80%" }} />
                <span style={{ height: "70%" }} />
                <span style={{ height: "100%" }} />
              </div>
            </article>

            <article className="al-kpi al-kpi--green">
              <svg className="al-kpi__bg" width="80" height="70" viewBox="0 0 80 70" fill="none">
                <circle cx="40" cy="35" r="34" fill="currentColor" />
              </svg>
              <p className="al-kpi__label">Uptime Platform</p>
              <div className="al-kpi__row">
                <p className="al-kpi__value">99.9%</p>
                <span className="al-kpi__pill al-kpi__pill--gray">Stabil</span>
              </div>
              <div className="al-kpi__track">
                <div className="al-kpi__fill" style={{ width: "80%" }} />
              </div>
            </article>

            <article className="al-kpi al-kpi--purple">
              <svg className="al-kpi__bg" width="80" height="70" viewBox="0 0 80 70" fill="none">
                <circle cx="40" cy="35" r="34" fill="currentColor" />
              </svg>
              <p className="al-kpi__label">Rata-rata Durasi Sesi</p>
              <div className="al-kpi__row">
                <p className="al-kpi__value">24m</p>
                <span className="al-kpi__pill al-kpi__pill--down">▼ -2.1% WoW</span>
              </div>
              <div className="al-kpi__bars al-kpi__bars--purple">
                <span style={{ height: "90%" }} />
                <span style={{ height: "80%" }} />
                <span style={{ height: "85%" }} />
                <span style={{ height: "70%" }} />
                <span style={{ height: "55%" }} />
                <span style={{ height: "45%" }} />
              </div>
            </article>

            <article className="al-kpi al-kpi--resource">
              <p className="al-kpi__label">Penggunaan Resource</p>
              <p className="al-kpi__value al-kpi__value--sm">CPU: 42%</p>
              <div className="al-kpi__resource-row">
                <div className="al-kpi__resource-top">
                  <span>Storage</span>
                  <span>68% (1.2TB)</span>
                </div>
                <div className="al-kpi__track al-kpi__track--sm">
                  <div className="al-kpi__fill al-kpi__fill--blue" style={{ width: "68%" }} />
                </div>
              </div>
              <div className="al-kpi__resource-row">
                <div className="al-kpi__resource-top">
                  <span>Memory</span>
                  <span>55% (32GB)</span>
                </div>
                <div className="al-kpi__track al-kpi__track--sm">
                  <div className="al-kpi__fill al-kpi__fill--purple" style={{ width: "55%" }} />
                </div>
              </div>
            </article>
          </section>

          <section className="al-bento">
            <div className="al-card al-card--chart">
              <div className="al-card__head">
                <h2>Pertumbuhan &amp; Retensi Pengguna</h2>
                <div className="al-legend">
                  <span><i className="al-dot al-dot--blue" />Pendaftaran Baru</span>
                  <span><i className="al-dot al-dot--purple" />Retensi Aktif</span>
                </div>
              </div>
              <div className="al-chart">
                <div className="al-chart__axis">
                  <span>20k</span>
                  <span>15k</span>
                  <span>10k</span>
                  <span>5k</span>
                  <span>0</span>
                </div>
                <svg className="al-chart__svg" viewBox="0 0 600 220" preserveAspectRatio="none">
                  <polyline points="0,180 100,140 200,60 300,110 400,40 500,70 600,10" fill="none" stroke="#004AC6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="0,210 100,190 200,170 300,150 400,120 500,90 600,60" fill="none" stroke="#6B38D4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="al-chart__months">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>Mei</span>
                <span>Jun</span>
              </div>
            </div>

            <div className="al-card al-card--donut">
              <h2>Distribusi Perangkat</h2>
              <div className="al-donut">
                <div className="al-donut__ring">
                  <div className="al-donut__center">
                    <p>60%</p>
                    <span>MOBILE</span>
                  </div>
                </div>
              </div>
              <div className="al-donut__legend">
                <div><i className="al-dot al-dot--blue" />Mobile<b>7,440</b></div>
                <div><i className="al-dot al-dot--purple" />Desktop<b>3,720</b></div>
                <div><i className="al-dot al-dot--green" />Tablet<b>1,240</b></div>
              </div>
            </div>
          </section>

          <section className="al-bento al-bento--secondary">
            <div className="al-card al-card--table">
              <div className="al-card__head">
                <h2>Modul Berforma Tinggi</h2>
              </div>
              <div className="al-table-wrap">
                <table className="al-table">
                  <thead>
                    <tr>
                      <th>Nama Modul</th>
                      <th>Total Hits</th>
                      <th>Completion Rate</th>
                      <th>Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modules.map((m) => (
                      <tr key={m.key}>
                        <td>{m.name}</td>
                        <td className="al-mono">{m.hits}</td>
                        <td>
                          <div className="al-completion">
                            <span className="al-mono">{m.completion}%</span>
                            <div className="al-track">
                              <div
                                className={`al-track__fill${m.completion < 60 ? " al-track__fill--red" : ""}`}
                                style={{ width: `${m.completion}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`al-trend${m.trendUp ? "" : " al-trend--down"}`}>{m.trend}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="al-card al-card--events">
              <div className="al-card__head">
                <h2><i className="al-live-dot" />Live Events</h2>
              </div>
              <div className="al-events">
                {events.map((e) => (
                  <div className="al-event" key={e.key}>
                    <span className={`al-event__icon al-event__icon--${e.tone}`}>
                      <EventIcon tone={e.tone} />
                    </span>
                    <div>
                      <p>{e.text}</p>
                      <span className={e.tone === "red" ? "al-event__time al-event__time--red" : "al-event__time"}>{e.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <AdminFooter />
      </div>
    </div>
  );
}

export default AnalitikPlatformAdmin;
