import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import AdminFooter from "../../components/admin/AdminFooter";
import "../../styles/admin/DashboardAdmin.css";

const quickActions = [
  {
    key: "tambah-pengguna",
    label: "Tambah Pengguna",
    icon: (
      <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.91667 5.83333V4.08333H8.16667V2.91667H9.91667V1.16667H11.0833V2.91667H12.8333V4.08333H11.0833V5.83333H9.91667V5.83333M4.66667 4.66667C4.025 4.66667 3.47569 4.43819 3.01875 3.98125C2.56181 3.52431 2.33333 2.975 2.33333 2.33333C2.33333 1.69167 2.56181 1.14236 3.01875 0.685417C3.47569 0.228472 4.025 0 4.66667 0C5.30833 0 5.85764 0.228472 6.31458 0.685417C6.77153 1.14236 7 1.69167 7 2.33333C7 2.975 6.77153 3.52431 6.31458 3.98125C5.85764 4.43819 5.30833 4.66667 4.66667 4.66667V4.66667M0 9.33333V7.7C0 7.36944 0.0850694 7.06563 0.255208 6.78854C0.425347 6.51146 0.651389 6.3 0.933333 6.15417C1.53611 5.85278 2.14861 5.62674 2.77083 5.47604C3.39306 5.32535 4.025 5.25 4.66667 5.25C5.30833 5.25 5.94028 5.32535 6.5625 5.47604C7.18472 5.62674 7.79722 5.85278 8.4 6.15417C8.68194 6.3 8.90799 6.51146 9.07812 6.78854C9.24826 7.06563 9.33333 7.36944 9.33333 7.7V9.33333H0V9.33333"
          fill="#004AC6"
        />
      </svg>
    ),
  },
  {
    key: "tambah-pengajar",
    label: "Tambah Pengajar",
    icon: (
      <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.41667 10.5L2.33333 8.28333V4.78333L0 3.5L6.41667 0L12.8333 3.5V8.16667H11.6667V4.14167L10.5 4.78333V8.28333L6.41667 10.5V10.5M6.41667 5.65833L10.4125 3.5L6.41667 1.34167L2.42083 3.5L6.41667 5.65833V5.65833M6.41667 9.17292L9.33333 7.59792V5.39583L6.41667 7L3.5 5.39583V7.59792L6.41667 9.17292V9.17292"
          fill="#006229"
        />
      </svg>
    ),
  },
  {
    key: "buat-pengumuman",
    label: "Buat Pengumuman",
    icon: (
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.33333 5.25V4.08333H11.6667V5.25H9.33333V5.25M10.0333 9.33333L8.16667 7.93333L8.86667 7L10.7333 8.4L10.0333 9.33333V9.33333M8.86667 2.33333L8.16667 1.4L10.0333 0L10.7333 0.933333L8.86667 2.33333V2.33333M1.75 8.75V6.41667H1.16667C0.845833 6.41667 0.571181 6.30243 0.342708 6.07396C0.114236 5.84549 0 5.57083 0 5.25V4.08333C0 3.7625 0.114236 3.48785 0.342708 3.25938C0.571181 3.0309 0.845833 2.91667 1.16667 2.91667H3.5L6.41667 1.16667V8.16667L3.5 6.41667H2.91667V8.75H1.75V8.75"
          fill="#6B38D4"
        />
      </svg>
    ),
  },
  {
    key: "kelola-paket",
    label: "Kelola Paket",
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.25833 11.6667L4.025 9.8C3.89861 9.75139 3.77951 9.69306 3.66771 9.625C3.5559 9.55694 3.44653 9.48403 3.33958 9.40625L1.60417 10.1354L0 7.36458L1.50208 6.22708C1.4875 6.09514 1.4875 5.96181 1.4875 5.83333C1.4875 5.70486 1.4875 5.57153 1.50208 5.43958L0 4.30208L1.60417 1.53125L3.33958 2.26042C3.55833 2.10972 3.79167 1.97361 4.025 1.86667L4.25833 0H7.46667L7.7 1.86667C7.94549 1.97361 8.1691 2.10972 8.38542 2.26042L10.1208 1.53125L11.725 4.30208L10.2229 5.43958C10.2375 5.57153 10.2375 5.70486 10.2375 5.83333C10.2375 5.96181 10.2375 6.09514 10.2229 6.22708L11.7104 7.36458L10.1062 10.1354L8.38542 9.40625C8.16667 9.55694 7.93333 9.69306 7.7 9.8L7.46667 11.6667H4.25833V11.6667M5.89167 7.875C6.45556 7.875 6.93681 7.67569 7.33542 7.27708C7.73403 6.87847 7.93333 6.39722 7.93333 5.83333C7.93333 5.26944 7.73403 4.78819 7.33542 4.38958C6.93681 3.99097 6.45556 3.79167 5.89167 3.79167C5.31806 3.79167 4.83438 3.99097 4.44063 4.38958C4.04688 4.78819 3.85 5.26944 3.85 5.83333C3.85 6.39722 4.04688 6.87847 4.44063 7.27708C4.83438 7.67569 5.31806 7.875 5.89167 7.875V7.875"
          fill="#434655"
        />
      </svg>
    ),
  },
];

const stats = [
  {
    key: "siswa",
    label: "Total Siswa",
    value: "24,592",
    delta: "12%",
    tone: "blue" as const,
    icon: (
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 12V10.425C0 9.70833 0.366667 9.125 1.1 8.675C1.83333 8.225 2.8 8 4 8C4.21667 8 4.425 8.00417 4.625 8.0125C4.825 8.02083 5.01667 8.04167 5.2 8.075C4.96667 8.425 4.79167 8.79167 4.675 9.175C4.55833 9.55833 4.5 9.95833 4.5 10.375V12H0V12M6 12V10.375C6 9.84167 6.14583 9.35417 6.4375 8.9125C6.72917 8.47083 7.14167 8.08333 7.675 7.75C8.20833 7.41667 8.84583 7.16667 9.5875 7C10.3292 6.83333 11.1333 6.75 12 6.75C12.8833 6.75 13.6958 6.83333 14.4375 7C15.1792 7.16667 15.8167 7.41667 16.35 7.75C16.8833 8.08333 17.2917 8.47083 17.575 8.9125C17.8583 9.35417 18 9.84167 18 10.375V12H6V12M19.5 12V10.375C19.5 9.94167 19.4458 9.53333 19.3375 9.15C19.2292 8.76667 19.0667 8.40833 18.85 8.075C19.0333 8.04167 19.2208 8.02083 19.4125 8.0125C19.6042 8.00417 19.8 8 20 8C21.2 8 22.1667 8.22083 22.9 8.6625C23.6333 9.10417 24 9.69167 24 10.425V12H19.5V12M12 6C11.1667 6 10.4583 5.70833 9.875 5.125C9.29167 4.54167 9 3.83333 9 3C9 2.15 9.29167 1.4375 9.875 0.8625C10.4583 0.2875 11.1667 0 12 0C12.85 0 13.5625 0.2875 14.1375 0.8625C14.7125 1.4375 15 2.15 15 3C15 3.83333 14.7125 4.54167 14.1375 5.125C13.5625 5.70833 12.85 6 12 6V6"
          fill="#004AC6"
        />
      </svg>
    ),
    chart: "M0 20.9313L9.866 17.9715L19.732 23.8911L29.598 15.9983L39.464 19.9447L49.33 14.0251L59.196 16.9849L69.062 11.0653L78.928 15.0117L88.794 8.10547L98.66 12.0519",
  },
  {
    key: "pengajar",
    label: "Pengajar",
    value: "1,204",
    delta: "4%",
    tone: "green" as const,
    icon: (
      <svg width="16" height="18" viewBox="8 8 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 26L12 22.2V16.2L8 14L19 8L30 14V22H28V15.1L26 16.2V22.2L19 26V26M19 17.7L25.85 14L19 10.3L12.15 14L19 17.7V17.7M19 23.725L24 21.025V17.25L19 20L14 17.25V21.025L19 23.725V23.725"
          fill="#006229"
        />
      </svg>
    ),
    chart: "M0 23.8929L19.734 22.9062L39.468 20.9328L59.202 21.9195L78.936 19.9461L98.67 17.9727",
  },
  {
    key: "dau",
    label: "Pengguna Aktif (DAU)",
    value: "18,300",
    delta: "-2%",
    negative: true,
    tone: "purple" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 18V16L2 14V18H0V18M4 18V12L6 10V10V18H4V18M8 18V10L10 12.025V18H8V18M12 18V12.025L14 10.025V18H12V18M16 18V8L18 6V18H16V18M0 12.825V10L7 3L11 7L18 0V2.825L11 9.825L7 5.825L0 12.825V12.825"
          fill="#6B38D4"
        />
      </svg>
    ),
    chart: "M0 7.99916C11.8667 4.79915 23.7333 6.39916 35.6 12.7992C47.4667 19.1992 49.3242 26.3281 61.1908 16.728C73.0575 7.12801 91.1333 -7.46514 103 12.8016C114.867 33.0683 139.338 38.4025 151.205 12.8024C163.071 -12.7977 168.729 11.3955 180.595 45.5289",
  },
  {
    key: "ai",
    label: "Request AI",
    value: "452K",
    delta: "28%",
    tone: "indigo" as const,
    icon: (
      <svg width="19" height="20" viewBox="8 8 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 28V23.7C10.05 22.8333 9.3125 21.8208 8.7875 20.6625C8.2625 19.5042 8 18.2833 8 17C8 14.5 8.875 12.375 10.625 10.625C12.375 8.875 14.5 8 17 8C19.0833 8 20.9292 8.6125 22.5375 9.8375C24.1458 11.0625 25.1917 12.6583 25.675 14.625L26.975 19.75C27.0583 20.0667 27 20.3542 26.8 20.6125C26.6 20.8708 26.3333 21 26 21H24V24C24 24.55 23.8042 25.0208 23.4125 25.4125C23.0208 25.8042 22.55 26 22 26H20V28H18V24H22V24H24V19H26.7L25.75 15.125C25.35 13.6 24.55 12.375 23.3 11.425C22.05 10.475 20.6167 10 19 10C17.0667 10 15.4167 10.675 14.05 12.025C12.6833 13.375 12 15.0167 12 16.95C12 17.95 12.2042 18.9 12.6125 19.8C13.0208 20.7 13.6 21.5 14.35 22.2L15 22.8V28H11V28"
          fill="#0053DB"
        />
      </svg>
    ),
    chart: "M0 28.802C11.8667 25.602 23.7333 25.602 35.6 28.802C47.4667 32.002 59.3333 27.7353 71.2 16.002C83.0667 4.26865 94.9333 5.33531 106.8 19.202C118.667 33.0686 130.533 37.5337 142.4 13.0004C154.267 -11.5329 184.133 6.40301 196 28.803",
  },
];

const subjects = [
  { key: "penalaran", label: "Penalaran Umum", percent: 92 },
  { key: "matematika", label: "Matematika", percent: 85 },
  { key: "fisika", label: "Fisika", percent: 72 },
  { key: "biologi", label: "Biologi", percent: 64 },
  { key: "kimia", label: "Kimia", percent: 58 },
];

const aiInsights = [
  {
    key: "anomali",
    title: "Anomali Terdeteksi",
    desc: "Tingkat drop-off yang tidak biasa tinggi pada modul tryout 'Matematika Dasar'. Pertimbangkan untuk meninjau tingkat kesulitan soal.",
  },
  {
    key: "optimasi",
    title: "Optimalisasi Sumber Daya",
    desc: "Menurunkan skala server gambar dapat menghemat sekitar $120/bulan berdasarkan pola lalu lintas baru-baru ini.",
  },
];

const platformHealth = [
  { key: "db", label: "Database Utama", status: "Operasional", ok: true },
  { key: "ai-engine", label: "Mesin Inferensi AI", status: "Operasional", ok: true },
  { key: "api", label: "API Pihak Ketiga", status: "Operasional", ok: true },
  { key: "email", label: "Pengiriman Email", status: "Terkendala", ok: false },
];

const activityLog = [
  { key: "reg", title: "Pendaftaran Pengajar Baru", desc: "Budi Santoso menyelesaikan proses onboarding.", time: "2 mnt lalu", tone: "blue" as const },
  { key: "update", title: "Pembaruan Sistem", desc: "Modul penilaian AI v2.1 di-deploy ke produksi.", time: "1 jam lalu", tone: "purple" as const },
  { key: "warning", title: "Peringatan Beban Server Tinggi", desc: "Penggunaan CPU database melebihi 85% selama 5 menit.", time: "3 jam lalu", tone: "red" as const },
];

const securityLog = [
  { key: "login", title: "Login Berhasil - Admin Jakarta", time: "1 menit lalu", tone: "green" as const },
  { key: "failed", title: "Upaya Login Gagal - IP 182.xx.xx.xx", time: "5 menit lalu", tone: "red" as const },
  { key: "backup", title: "Backup Otomatis Selesai", time: "1 jam lalu", tone: "blue" as const },
];

function DashboardAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-dashboard">
      <AdminSidebar active="Dashboard" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-dashboard__main">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="admin-dashboard__content">
          <section className="ad-hero">
            <div className="ad-hero__glow ad-hero__glow--blue" aria-hidden="true" />
            <div className="ad-hero__glow ad-hero__glow--purple" aria-hidden="true" />
            <div className="ad-hero__body">
              <h1 className="ad-hero__title">Selamat Datang, Super Admin 👋</h1>
              <p className="ad-hero__desc">
                Pantau seluruh aktivitas platform dan kelola ribuan pengguna dengan bantuan AI.
              </p>
              <div className="ad-hero__actions">
                {quickActions.map((action) => (
                  <button type="button" className="ad-quick-btn" key={action.key}>
                    {action.icon}
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="ad-stats">
            {stats.map((stat) => (
              <article className={`ad-stat ad-stat--${stat.tone}`} key={stat.key}>
                <div className="ad-stat__top">
                  <span className="ad-stat__icon">{stat.icon}</span>
                  <span className={`ad-stat__delta${stat.negative ? " ad-stat__delta--down" : ""}`}>
                    {stat.negative ? "▼" : "▲"} {stat.delta}
                  </span>
                </div>
                <p className="ad-stat__label">{stat.label}</p>
                <p className="ad-stat__value">{stat.value}</p>
                <svg className="ad-stat__chart" viewBox="0 0 217 32" fill="none" preserveAspectRatio="none">
                  <path d={stat.chart} stroke={stat.negative ? "#BA1A1A" : "currentColor"} strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </article>
            ))}
          </section>

          <section className="ad-bento">
            <div className="ad-main-col">
              <div className="ad-card">
                <div className="ad-card__head">
                  <h2>Mata Pelajaran Terpopuler</h2>
                </div>
                <div className="ad-subjects">
                  {subjects.map((subject) => (
                    <div className="ad-subject" key={subject.key}>
                      <div className="ad-subject__top">
                        <span>{subject.label}</span>
                        <span className="ad-subject__pct">{subject.percent}%</span>
                      </div>
                      <div className="ad-subject__track">
                        <div className="ad-subject__fill" style={{ width: `${subject.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ad-split">
                <div className="ad-card">
                  <div className="ad-card__head">
                    <h2>Bank Soal</h2>
                    <span className="ad-tag ad-tag--green">Sehat</span>
                  </div>
                  <div className="ad-progress-row">
                    <span>Cakupan</span>
                    <span className="ad-mono">92%</span>
                  </div>
                  <div className="ad-subject__track">
                    <div className="ad-subject__fill" style={{ width: "92%", background: "#6B38D4" }} />
                  </div>
                  <div className="ad-split-stats">
                    <div>
                      <p className="ad-split-stats__label">Total Item</p>
                      <p className="ad-split-stats__value">15,240</p>
                    </div>
                    <div>
                      <p className="ad-split-stats__label">Menunggu Ulasan</p>
                      <p className="ad-split-stats__value ad-split-stats__value--red">142</p>
                    </div>
                  </div>
                </div>

                <div className="ad-card">
                  <div className="ad-card__head">
                    <h2>Penggunaan AI (MTD)</h2>
                  </div>
                  <div className="ad-ai-usage">
                    <span className="ad-ai-usage__value">$1,245</span>
                    <span className="ad-ai-usage__budget">/ Anggaran $2,000</span>
                  </div>
                  <div className="ad-progress-row">
                    <span>Konsumsi</span>
                    <span className="ad-mono">62%</span>
                  </div>
                  <div className="ad-subject__track">
                    <div className="ad-subject__fill" style={{ width: "62%" }} />
                  </div>
                  <button type="button" className="ad-link-btn">Lihat Laporan Detail</button>
                </div>
              </div>

              <div className="ad-card">
                <div className="ad-card__head">
                  <h2>Log Aktivitas</h2>
                </div>
                <div className="ad-timeline">
                  {activityLog.map((item) => (
                    <div className="ad-timeline__item" key={item.key}>
                      <span className={`ad-timeline__dot ad-timeline__dot--${item.tone}`} />
                      <div>
                        <p className="ad-timeline__title">{item.title}</p>
                        <p className="ad-timeline__desc">{item.desc}</p>
                        <p className="ad-timeline__time">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="ad-side-col">
              <div className="ad-card ad-card--insight">
                <div className="ad-card__head">
                  <h2>Wawasan AI</h2>
                </div>
                <div className="ad-insights">
                  {aiInsights.map((insight) => (
                    <div className="ad-insight-item" key={insight.key}>
                      <p className="ad-insight-item__title">{insight.title}</p>
                      <p className="ad-insight-item__desc">{insight.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ad-card">
                <div className="ad-card__head">
                  <h2>Kesehatan Platform</h2>
                </div>
                <div className="ad-health">
                  {platformHealth.map((item) =>
                    item.ok ? (
                      <div className="ad-health__row" key={item.key}>
                        <span>{item.label}</span>
                        <span className="ad-health__status">
                          <i className="ad-dot ad-dot--green" />
                          Operasional
                        </span>
                      </div>
                    ) : (
                      <div className="ad-health__row ad-health__row--alert" key={item.key}>
                        <span>{item.label}</span>
                        <span className="ad-health__status ad-health__status--red">
                          <i className="ad-dot ad-dot--red" />
                          {item.status}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="ad-card">
                <div className="ad-card__head">
                  <h2>Log Keamanan & Akses</h2>
                </div>
                <div className="ad-timeline ad-timeline--compact">
                  {securityLog.map((item) => (
                    <div className="ad-timeline__item ad-timeline__item--row" key={item.key}>
                      <div>
                        <p className="ad-timeline__title">{item.title}</p>
                        <p className="ad-timeline__time">{item.time}</p>
                      </div>
                      <span className={`ad-dot ad-dot--${item.tone}`} />
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </section>
        </div>

        <AdminFooter />
      </div>
    </div>
  );
}

export default DashboardAdmin;
