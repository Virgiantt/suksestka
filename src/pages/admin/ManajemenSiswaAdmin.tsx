import { useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import AdminFooter from "../../components/admin/AdminFooter";
import "../../styles/admin/ManajemenSiswaAdmin.css";

const kpis = [
  { key: "total", label: "Total Siswa", value: "24,592", badge: "+12%", sub: "Bulan ini", tone: "blue" as const },
  { key: "aktif", label: "Siswa Aktif", value: "18,300", badge: "Stabil", badgeTone: "gray" as const, sub: "Dalam 30 hari terakhir", tone: "green" as const },
  { key: "tryout", label: "Rata-rata Tryout", value: "685", suffix: "/1000", badge: "+15 pts", sub: "Nasional", tone: "purple" as const },
  { key: "baru", label: "Akun Baru", value: "+1,240", sub: "Bulan ini", tone: "blue2" as const },
];

const filters = ["Semua", "Aktif", "Tidak Aktif", "SD", "SMP"];

type Student = {
  key: string;
  name: string;
  initials: string;
  klass: string;
  code: string;
  hasAvatar: boolean;
  plan: string;
  planTone: "purple" | "blue";
  lastActivity: string;
  lastActivityDesc: string;
  progress: number;
  progressLabel: string;
  progressTone: "green" | "red" | "blue";
};

const students: Student[] = [
  { key: "budi", name: "Budi Santoso", initials: "B", klass: "Kelas 6 SD • SBY-001", code: "SBY-001", hasAvatar: true, plan: "Ultra Premium", planTone: "purple", lastActivity: "2 jam yang lalu", lastActivityDesc: "Tryout Matematika", progress: 85, progressLabel: "Sangat Baik", progressTone: "green" },
  { key: "siti", name: "Siti Rahmawati", initials: "S", klass: "Kelas 9 SMP • JKT-402", code: "JKT-402", hasAvatar: false, plan: "Basic", planTone: "blue", lastActivity: "Kemarin, 14:30", lastActivityDesc: "Latihan Soal IPA", progress: 45, progressLabel: "Perlu Perhatian", progressTone: "red" },
  { key: "kevin", name: "Kevin Wijaya", initials: "K", klass: "Kelas 8 SMP • BDG-115", code: "BDG-115", hasAvatar: true, plan: "Ultra Premium", planTone: "purple", lastActivity: "Baru Saja", lastActivityDesc: "Login Sistem", progress: 68, progressLabel: "Sedang", progressTone: "blue" },
  { key: "aria", name: "Aria Putri", initials: "A", klass: "Kelas 7 SMP • JKT-501", code: "JKT-501", hasAvatar: false, plan: "Ultra Premium", planTone: "purple", lastActivity: "15 menit lalu", lastActivityDesc: "Latihan Soal", progress: 92, progressLabel: "Sangat Baik", progressTone: "green" },
  { key: "rizky", name: "Rizky Pratama", initials: "R", klass: "Kelas 5 SD • SRG-002", code: "SRG-002", hasAvatar: false, plan: "Basic", planTone: "blue", lastActivity: "Kemarin, 09:00", lastActivityDesc: "Tryout", progress: 55, progressLabel: "Cukup", progressTone: "blue" },
];

const topStudents = [
  { key: "nadia", rank: 1, name: "Nadia Paramita", xp: "9,450 XP" },
  { key: "ahmad", rank: 2, name: "Ahmad Faisal", xp: "8,920 XP" },
  { key: "diana", rank: 3, name: "Diana Kusuma", xp: "8,750 XP" },
];

const attentionStudents = [
  { key: "reza", name: "Reza Pratama", initials: "R", tag: "-30% Aktivitas" },
  { key: "citra", name: "Citra Dewi", initials: "C", tag: "Absen 7 Hari" },
];

function StudentKpiIcon({ name }: { name: string }) {
  if (name === "total" || name === "aktif") {
    return <><circle cx="8" cy="7" r="2.5" /><path d="M3.5 16c.3-2.3 1.8-3.5 4.5-3.5s4.2 1.2 4.5 3.5" /><path d="M13 5.5a2 2 0 0 1 0 3.8M14 12.8c1.6.4 2.5 1.4 2.7 3.2" /></>;
  }
  if (name === "tryout") {
    return <><path d="M4 3.5h8l3 3V16.5H4z" /><path d="M12 3.5v3h3M7 10h5M7 13h3" /></>;
  }
  return <><path d="M8 2v14M4 4h8M4.5 8h7" /><path d="M3.5 12.5c1.3 1 2.8 1.5 4.5 1.5s3.2-.5 4.5-1.5M4 16.5h8" /></>;
}

function ManajemenSiswaAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Semua");

  return (
    <div className="admin-dashboard">
      <AdminSidebar active="Siswa" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-dashboard__main">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="admin-dashboard__content as-content">
          <header className="as-header">
            <div>
              <h1>Manajemen Siswa</h1>
              <p>Pantau perkembangan, kelola data, dan analisis performa belajar seluruh siswa terdaftar secara real-time.</p>
            </div>
            <div className="as-header__actions">
              <button type="button" className="as-btn as-btn--outline">Ekspor Data</button>
              <Link to="/admin/siswa/tambah" className="as-btn as-btn--primary">+ Tambah Siswa</Link>
            </div>
          </header>

          <section className="as-kpis">
            {kpis.map((kpi) => (
              <article className="as-kpi" key={kpi.key}>
                <div className="as-kpi__top">
                  <span className={`as-kpi__icon as-kpi__icon--${kpi.tone}`} aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <StudentKpiIcon name={kpi.key} />
                    </svg>
                  </span>
                  {kpi.badge ? (
                    <span className={`as-kpi__badge${kpi.badgeTone === "gray" ? " as-kpi__badge--gray" : ""}`}>{kpi.badge}</span>
                  ) : null}
                </div>
                <p className="as-kpi__label">{kpi.label}</p>
                <p className="as-kpi__value">
                  {kpi.value}
                  {kpi.suffix ? <span className="as-kpi__suffix">{kpi.suffix}</span> : null}
                </p>
                <p className="as-kpi__sub">{kpi.sub}</p>
              </article>
            ))}
          </section>

          <div className="as-layout">
            <div className="as-main">
              <div className="as-filters">
                <div className="as-filters__chips">
                  {filters.map((filter) => (
                    <button
                      type="button"
                      key={filter}
                      className={`as-chip${activeFilter === filter ? " as-chip--active" : ""}`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                <button type="button" className="as-btn as-btn--ghost">⋮ Filter Lainnya</button>
              </div>

              <div className="as-table-card">
                <div className="as-table-wrap">
                  <table className="as-table">
                    <thead>
                      <tr>
                        <th>Profil Siswa</th>
                        <th>Paket Aktif</th>
                        <th>Aktivitas Terakhir</th>
                        <th>Progress Tryout</th>
                        <th className="as-table__actions-head">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.key}>
                          <td>
                            <div className="as-student">
                              <span className={`as-student__avatar${student.hasAvatar ? " as-student__avatar--photo" : ""}`}>
                                {student.initials}
                              </span>
                              <div>
                                <p className="as-student__name">{student.name}</p>
                                <p className="as-student__meta">{student.klass}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className={`as-plan as-plan--${student.planTone}`}>{student.plan}</span>
                          </td>
                          <td>
                            <p className="as-activity">{student.lastActivity}</p>
                            <p className="as-activity__desc">{student.lastActivityDesc}</p>
                          </td>
                          <td>
                            <div className="as-progress">
                              <div className="as-progress__top">
                                <span>{student.progress}%</span>
                                <span className={`as-progress__label as-progress__label--${student.progressTone}`}>
                                  {student.progressLabel}
                                </span>
                              </div>
                              <div className="as-progress__track">
                                <div
                                  className={`as-progress__fill as-progress__fill--${student.progressTone}`}
                                  style={{ width: `${student.progress}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="as-row-actions">
                              <button type="button" className="as-icon-btn" aria-label="Lihat">👁</button>
                              <button type="button" className="as-icon-btn" aria-label="Edit">✎</button>
                              <button type="button" className="as-icon-btn as-icon-btn--danger" aria-label="Hapus">🗑</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="as-pagination">
                  <p>Menampilkan 1-10 dari 24,592</p>
                  <div className="as-pagination__buttons">
                    <button type="button" disabled>‹</button>
                    <button type="button" className="as-pagination__active">1</button>
                    <button type="button">2</button>
                    <button type="button">3</button>
                    <span>...</span>
                    <button type="button">›</button>
                  </div>
                </div>
              </div>
            </div>

            <aside className="as-side">
              <section className="as-widget">
                <div className="as-widget__head">
                  <h3>Siswa Berprestasi</h3>
                  <button type="button">Lihat Semua</button>
                </div>
                <p className="as-widget__sub">Minggu ini berdasarkan XP Tryout</p>
                <div className="as-top-list">
                  {topStudents.map((student) => (
                    <div className={`as-top-item${student.rank === 1 ? " as-top-item--first" : ""}`} key={student.key}>
                      <span className="as-top-item__rank">{student.rank}</span>
                      <div>
                        <p className="as-top-item__name">{student.name}</p>
                        <p className="as-top-item__xp">{student.xp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="as-widget">
                <h3>Distribusi Jenjang</h3>
                <div className="as-jenjang">
                  <div className="as-jenjang__ring" />
                  <div className="as-jenjang__legend">
                    <div>
                      <span className="as-dot as-dot--blue" />
                      SD (Sekolah Dasar)
                      <strong>14,755 (60%)</strong>
                    </div>
                    <div>
                      <span className="as-dot as-dot--purple" />
                      SMP (Sekolah Menengah)
                      <strong>9,837 (40%)</strong>
                    </div>
                  </div>
                </div>
              </section>

              <section className="as-widget as-widget--attention">
                <h3>⚠ Butuh Perhatian</h3>
                <p className="as-widget__sub">Siswa dengan penurunan aktivitas drastis</p>
                <div className="as-attention-list">
                  {attentionStudents.map((student) => (
                    <div className="as-attention-item" key={student.key}>
                      <span className="as-attention-item__avatar">{student.initials}</span>
                      <p>{student.name}</p>
                      <span className="as-attention-item__tag">{student.tag}</span>
                    </div>
                  ))}
                </div>
                <button type="button" className="as-link-btn">Lihat Laporan Lengkap</button>
              </section>
            </aside>
          </div>
        </div>

        <AdminFooter />
      </div>
    </div>
  );
}

export default ManajemenSiswaAdmin;
