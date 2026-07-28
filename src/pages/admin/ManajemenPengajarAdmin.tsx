import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import AdminFooter from "../../components/admin/AdminFooter";
import "../../styles/admin/ManajemenPengajarAdmin.css";

const kpis = [
  { key: "total", label: "Total Pengajar", value: "1,204", delta: "+5.4%", tone: "blue" as const, chart: "M0 20.9 10 18 20 23.9 30 16 40 20 50 14 60 17 70 11 80 15 90 8 100 12" },
  { key: "aktif", label: "Pengajar Aktif", value: "95%", delta: "+2.1%", tone: "green" as const, chart: "M0 24 20 23 40 21 60 22 80 20 100 18" },
  { key: "baru", label: "Baru Bergabung", value: "+42", delta: "Bulan ini", tone: "purple" as const, chart: "M0 26 15 24 30 25 45 16 60 18 75 11 90 14 100 8" },
  { key: "rating", label: "Rata-rata Rating", value: "4.8", suffix: "/5.0", delta: "+0.2", tone: "amber" as const, chart: "M0 16 25 18 50 14 75 15 100 11" },
];

const weeklyActivity = [
  { day: "Sen", value: 150 },
  { day: "Sel", value: 230 },
  { day: "Rab", value: 210 },
  { day: "Kam", value: 280 },
  { day: "Jum", value: 260 },
  { day: "Sab", value: 310 },
  { day: "Min", value: 355 },
];

const teachers = [
  {
    key: "rina",
    name: "Bu Rina M.Pd",
    verified: true,
    subject: "Biologi SD",
    code: "TCH-8821",
    joined: "Bergabung 2021",
    students: "342",
    rating: "4.9",
    active: "2j lalu",
  },
];

const pendingTeacher = {
  key: "anita",
  name: "Anita Maharani",
  subject: "B. Inggris SD",
  code: "TCH-8890",
  joined: "Mendaftar Hari Ini",
};

const verificationQueue = [
  { key: "deni", initials: "DS", name: "Deni Saputra", time: "2j lalu", desc: "Dokumen ijazah menunggu validasi", tone: "blue" as const },
  { key: "lina", initials: "LK", name: "Lina Kusuma", time: "5j lalu", desc: "Sertifikat mengajar baru diunggah", tone: "purple" as const },
];

const topPerformers = [
  { key: "rina", rank: 1, name: "Bu Rina M.Pd", subject: "Biologi SD", rating: "4.9", reviews: "12" },
  { key: "budi", rank: 2, name: "Pak Budi S.Si", subject: "Matematika SMP", rating: "4.8", reviews: "8" },
];

const subjectDistribution = [
  { key: "matematika", label: "Matematika", percent: "32%", tone: "blue" as const },
  { key: "inggris", label: "B. Inggris", percent: "24%", tone: "purple" as const },
  { key: "sains", label: "Sains", percent: "18%", tone: "green" as const },
  { key: "sosial", label: "Sosial", percent: "15%", tone: "amber" as const },
  { key: "lainnya", label: "Lainnya", percent: "11%", tone: "gray" as const },
];

function KpiIcon({ name }: { name: string }) {
  if (name === "total") {
    return <><circle cx="8" cy="7" r="2.5" /><path d="M3.5 16c.3-2.3 1.8-3.5 4.5-3.5s4.2 1.2 4.5 3.5" /><path d="M13 5.5a2 2 0 0 1 0 3.8M14 12.8c1.6.4 2.5 1.4 2.7 3.2" /></>;
  }
  if (name === "aktif") {
    return <><path d="M3 13.5 6.5 10l3 2.5L14 7" /><path d="M12 7h2v2" /><path d="M3 16.5h13" /></>;
  }
  if (name === "baru") {
    return <><circle cx="8" cy="7" r="2.5" /><path d="M3.5 16c.3-2.3 1.8-3.5 4.5-3.5s4.2 1.2 4.5 3.5" /><path d="M14 6v5M11.5 8.5h5" /></>;
  }
  return <><path d="m8 2 1.8 3.7 4.2.6-3 2.9.7 4.2L8 11.4l-3.7 2 0.7-4.2-3-2.9 4.2-.6L8 2Z" /><path d="m13.5 13.5 1 2M15.5 12.5l2-.5" /></>;
}

function ManajemenPengajarAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [period, setPeriod] = useState<"minggu" | "bulan">("minggu");
  const maxActivity = Math.max(...weeklyActivity.map((item) => item.value));

  return (
    <div className="admin-dashboard">
      <AdminSidebar active="Pengajar" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-dashboard__main">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="admin-dashboard__content ap-content">
          <header className="ap-header">
            <h1>Manajemen Pengajar</h1>
            <p>Kelola profil pengajar, status verifikasi, dan pantau performa mengajar secara komprehensif.</p>
          </header>

          <div className="ap-layout">
            <div className="ap-main">
              <section className="ap-kpis">
                {kpis.map((kpi) => (
                  <article className={`ap-kpi ap-kpi--${kpi.tone}`} key={kpi.key}>
                    <div className="ap-kpi__top">
                      <span className="ap-kpi__icon" aria-hidden="true">
                        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <KpiIcon name={kpi.key} />
                        </svg>
                      </span>
                      <span className="ap-kpi__badge">{kpi.delta}</span>
                    </div>
                    <p className="ap-kpi__label">{kpi.label}</p>
                    <p className="ap-kpi__value">
                      {kpi.value}
                      {kpi.suffix ? <span className="ap-kpi__suffix">{kpi.suffix}</span> : null}
                    </p>
                    <svg className="ap-kpi__chart" viewBox="0 0 100 32" preserveAspectRatio="none">
                      <polyline points={kpi.chart} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </article>
                ))}
              </section>

              <section className="ap-card">
                <div className="ap-card__head">
                  <h2>Aktivitas Mengajar</h2>
                  <div className="ap-toggle">
                    <button
                      type="button"
                      className={period === "minggu" ? "ap-toggle__btn ap-toggle__btn--active" : "ap-toggle__btn"}
                      onClick={() => setPeriod("minggu")}
                    >
                      Minggu Ini
                    </button>
                    <button
                      type="button"
                      className={period === "bulan" ? "ap-toggle__btn ap-toggle__btn--active" : "ap-toggle__btn"}
                      onClick={() => setPeriod("bulan")}
                    >
                      Bulan Ini
                    </button>
                  </div>
                </div>
                <div className="ap-activity-chart">
                  {weeklyActivity.map((item) => (
                    <div className="ap-activity-bar" key={item.day}>
                      <div className="ap-activity-bar__track">
                        <div
                          className="ap-activity-bar__fill"
                          style={{ height: `${(item.value / maxActivity) * 100}%` }}
                        />
                      </div>
                      <span>{item.day}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="ap-toolbar">
                <button type="button" className="ap-btn">Filter</button>
                <div className="ap-divider" />
                <select className="ap-select" defaultValue="Semua">
                  <option>Tingkat (Semua)</option>
                </select>
                <select className="ap-select" defaultValue="Semua">
                  <option>Status (Semua)</option>
                </select>
                <div className="ap-sort">
                  <span>URUTKAN:</span>
                  <button type="button">Rating ↓</button>
                </div>
              </section>

              <section className="ap-list">
                {teachers.map((teacher) => (
                  <article className="ap-teacher-card" key={teacher.key}>
                    <div className="ap-teacher-card__avatar" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="3.5" />
                        <path d="M5.5 20c.5-3.4 2.7-5.2 6.5-5.2s6 1.8 6.5 5.2" />
                      </svg>
                      <span className="ap-teacher-card__status" />
                    </div>
                    <div className="ap-teacher-card__body">
                      <div className="ap-teacher-card__top">
                        <h3>{teacher.name}</h3>
                        {teacher.verified ? <span className="ap-badge ap-badge--verified">Terverifikasi</span> : null}
                      </div>
                      <div className="ap-teacher-card__meta">
                        <span className="ap-pill ap-pill--blue">{teacher.subject}</span>
                        <span className="ap-mono">{teacher.code}</span>
                        <span>{teacher.joined}</span>
                      </div>
                    </div>
                    <div className="ap-teacher-card__stats">
                      <div>
                        <p className="ap-teacher-card__stat-value">{teacher.students}</p>
                        <p className="ap-teacher-card__stat-label">SISWA</p>
                      </div>
                      <div className="ap-vdivider" />
                      <div>
                        <p className="ap-teacher-card__stat-value">{teacher.rating} ★</p>
                        <p className="ap-teacher-card__stat-label">RATING</p>
                      </div>
                      <div className="ap-vdivider" />
                      <div>
                        <p className="ap-teacher-card__stat-value">{teacher.active}</p>
                        <p className="ap-teacher-card__stat-label">AKTIF</p>
                      </div>
                    </div>
                    <div className="ap-teacher-card__actions">
                      <button type="button" className="ap-icon-btn" aria-label="Edit">✎</button>
                      <button type="button" className="ap-icon-btn ap-icon-btn--danger" aria-label="Nonaktifkan">⊘</button>
                    </div>
                  </article>
                ))}

                <article className="ap-teacher-card ap-teacher-card--pending">
                  <div className="ap-teacher-card__avatar ap-teacher-card__avatar--initials">
                    AM
                    <span className="ap-teacher-card__status ap-teacher-card__status--amber" />
                  </div>
                  <div className="ap-teacher-card__body">
                    <div className="ap-teacher-card__top">
                      <h3>{pendingTeacher.name}</h3>
                      <span className="ap-badge ap-badge--pending">Menunggu Verifikasi</span>
                    </div>
                    <div className="ap-teacher-card__meta">
                      <span className="ap-pill">{pendingTeacher.subject}</span>
                      <span className="ap-mono">{pendingTeacher.code}</span>
                      <span>{pendingTeacher.joined}</span>
                    </div>
                  </div>
                  <button type="button" className="ap-btn ap-btn--primary">Review Profil</button>
                </article>
              </section>

              <button type="button" className="ap-load-more">Muat Lebih Banyak ⌄</button>
            </div>

            <aside className="ap-side">
              <section className="ap-card ap-card--amber">
                <div className="ap-card__head">
                  <h2>Antrean Verifikasi</h2>
                  <span className="ap-badge ap-badge--pending">12 Pending</span>
                </div>
                <div className="ap-queue">
                  {verificationQueue.map((item) => (
                    <div className="ap-queue-item" key={item.key}>
                      <span className={`ap-queue-item__avatar ap-queue-item__avatar--${item.tone}`}>{item.initials}</span>
                      <div className="ap-queue-item__body">
                        <div className="ap-queue-item__top">
                          <p>{item.name}</p>
                          <span>{item.time}</span>
                        </div>
                        <p className="ap-queue-item__desc">{item.desc}</p>
                        <button type="button" className="ap-btn ap-btn--sm">Tinjau</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button type="button" className="ap-link-btn">Lihat Semua Antrean</button>
              </section>

              <section className="ap-card ap-card--blue">
                <div className="ap-card__head">
                  <h2>Top Pengajar</h2>
                </div>
                <div className="ap-top-list">
                  {topPerformers.map((person) => (
                    <div className={`ap-top-item${person.rank === 1 ? " ap-top-item--first" : ""}`} key={person.key}>
                      <span className="ap-top-item__rank">#{person.rank}</span>
                      <div className="ap-top-item__avatar" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8" r="3.5" />
                          <path d="M5.5 20c.5-3.4 2.7-5.2 6.5-5.2s6 1.8 6.5 5.2" />
                        </svg>
                      </div>
                      <div className="ap-top-item__body">
                        <p className="ap-top-item__name">{person.name}</p>
                        <span className="ap-pill ap-pill--blue">{person.subject}</span>
                      </div>
                      <div className="ap-top-item__rating">
                        <p>{person.rating} ★</p>
                        <span>{person.reviews} Ulasan</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="ap-card">
                <div className="ap-card__head">
                  <h2>Distribusi Mata Pelajaran</h2>
                </div>
                <div className="ap-distribution">
                  {subjectDistribution.map((item) => (
                    <div className={`ap-distribution__item ap-distribution__item--${item.tone}`} key={item.key}>
                      <span>{item.label}</span>
                      <strong>{item.percent}</strong>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>

        <AdminFooter />
      </div>
    </div>
  );
}

export default ManajemenPengajarAdmin;
