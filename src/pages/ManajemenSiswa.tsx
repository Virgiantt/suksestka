import { useState } from "react";
import { Link } from "react-router-dom";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/ManajemenSiswa.css";

type StudentStatus = "aktif" | "tidak-aktif";

type Student = {
  key: string;
  name: string;
  id: string;
  level: string;
  average: number;
  averageTone: "green" | "amber" | "red";
  completion: number;
  status: StudentStatus;
  warning?: string;
  attention?: boolean;
};

const students: Student[] = [
  { key: "budi", name: "Budi Santoso", id: "109283", level: "SMP Kls 9", average: 85, averageTone: "green", completion: 85, status: "aktif" },
  { key: "siti", name: "Siti Aminah", id: "109284", level: "SMP Kls 9", average: 90, averageTone: "green", completion: 90, status: "aktif" },
  {
    key: "ahmad",
    name: "Ahmad Wijaya",
    id: "109285",
    level: "SMA Kls 12",
    average: 54,
    averageTone: "red",
    completion: 40,
    status: "tidak-aktif",
    warning: "Perlu Evaluasi",
    attention: true,
  },
  { key: "dimas", name: "Dimas Pratama", id: "109286", level: "SMA Kls 11", average: 65, averageTone: "amber", completion: 65, status: "aktif" },
  { key: "rina", name: "Rina Putri", id: "109287", level: "SD Kls 6", average: 100, averageTone: "green", completion: 100, status: "aktif" },
];

const metrics = [
  { key: "total", label: "TOTAL SISWA", value: "1,240", badge: "+12%", tone: "blue" as const, badgeTone: "green" as const },
  { key: "aktif", label: "SISWA AKTIF HARI INI", value: "850", badge: "+5%", tone: "green" as const, badgeTone: "green" as const },
  { key: "skor", label: "RATA-RATA SKOR PROGRES", value: "78%", badge: "0%", tone: "purple" as const, badgeTone: "gray" as const },
  { key: "perhatian", label: "BUTUH PERHATIAN", value: "12", badge: "3", tone: "red" as const, badgeTone: "red" as const },
];

const groups = [
  { key: "utbk", name: "Intensif UTBK Saintek", pct: 88, students: 240, color: "blue" as const },
  { key: "soshum", name: "Reguler Soshum Kls 12", pct: 74, students: 185, color: "purple" as const },
  { key: "weekend", name: "Tryout Akhir Pekan", pct: 62, students: 450, color: "amber" as const },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function ManajemenSiswa() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="teacher-dashboard manajemen-siswa">
      <TeacherSidebar active="Siswa" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content manajemen-siswa__content">
          <header className="ms-hero">
            <div className="ms-hero__text">
              <h1>Manajemen Siswa</h1>
              <p>Pantau progres, nilai, dan aktivitas belajar siswa Anda secara komprehensif.</p>
            </div>
            <div className="ms-hero__actions">
              <button type="button" className="ms-btn ms-btn--outline">
                Ekspor Laporan
              </button>
              <Link to="/manajemen-siswa/tambah" className="ms-btn ms-btn--primary">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 6H0V4.5H4.5V0H6V4.5H10.5V6H6V10.5H4.5V6Z" fill="white" />
                </svg>
                Tambah Siswa
              </Link>
            </div>
          </header>

          <section className="ms-metrics">
            {metrics.map((metric) => (
              <article className={`ms-metric ms-metric--${metric.tone}`} key={metric.key}>
                <div className="ms-metric__top">
                  <span className={`ms-metric__icon ms-metric__icon--${metric.tone}`} />
                  <span className={`ms-metric__badge ms-metric__badge--${metric.badgeTone}`}>{metric.badge}</span>
                </div>
                <p className="ms-metric__label">{metric.label}</p>
                <p className={`ms-metric__value${metric.tone === "red" ? " ms-metric__value--red" : ""}`}>
                  {metric.value}
                </p>
              </article>
            ))}
          </section>

          <div className="ms-layout">
            <div className="ms-directory">
              <div className="ms-directory__head">
                <h2>Direktori Siswa</h2>
                <div className="ms-directory__tools">
                  <input type="search" placeholder="Cari nama..." aria-label="Cari nama" />
                  <button type="button" className="ms-icon-btn" aria-label="Filter">
                    <svg width="14" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83333 10V8.33333H9.16667V10H5.83333ZM2.5 5.83333V4.16667H12.5V5.83333H2.5ZM0 1.66667V0H15V1.66667H0Z" fill="#434655" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="ms-table-wrap">
                <table className="ms-table">
                  <thead>
                    <tr>
                      <th>Siswa</th>
                      <th>Tingkat</th>
                      <th>Rata-rata</th>
                      <th>Penyelesaian</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s) => (
                      <tr key={s.key} className={s.attention ? "ms-table__row--attention" : undefined}>
                        <td>
                          <div className="ms-student">
                            <span className={`ms-student__avatar${s.attention ? " ms-student__avatar--muted" : ""}`}>
                              {initials(s.name)}
                            </span>
                            <div>
                              <p className="ms-student__name">{s.name}</p>
                              {s.warning ? (
                                <p className="ms-student__warning">{s.warning}</p>
                              ) : (
                                <p className="ms-student__id">ID: {s.id}</p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="ms-pill">{s.level}</span>
                        </td>
                        <td>
                          <span className={`ms-average ms-average--${s.averageTone}`}>{s.average}%</span>
                        </td>
                        <td>
                          <div className="ms-progress">
                            <span className="ms-progress__label">{s.completion}%</span>
                            <div className="ms-progress__track">
                              <div
                                className={`ms-progress__fill ms-progress__fill--${s.averageTone}`}
                                style={{ width: `${s.completion}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`ms-status ms-status--${s.status}`}>
                            {s.status === "aktif" ? "Aktif" : "Tidak Aktif"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="ms-pagination">
                <p>Menampilkan 1-5 dari 1,240</p>
                <div className="ms-pagination__buttons">
                  <button type="button" disabled>
                    ‹
                  </button>
                  <button type="button" className="ms-pagination__active">
                    1
                  </button>
                  <button type="button">2</button>
                  <button type="button">3</button>
                  <button type="button">›</button>
                </div>
              </div>
            </div>

            <aside className="ms-aside">
              <section className="ms-boost">
                <h3>Tingkatkan Performa</h3>
                <p>Analisis prediktif AI merekomendasikan fokus pada Grup Tryout A.</p>
              </section>

              <section className="ms-groups">
                <div className="ms-groups__head">
                  <h3>Grup Belajar Teratas</h3>
                  <button type="button">Lihat Semua</button>
                </div>
                <div className="ms-groups__list">
                  {groups.map((group) => (
                    <div className="ms-group" key={group.key}>
                      <div className="ms-group__top">
                        <span className="ms-group__label">
                          <i className={`ms-group__dot ms-group__dot--${group.color}`} />
                          {group.name}
                        </span>
                        <span className="ms-group__pct">{group.pct}% Rata-rata</span>
                      </div>
                      <div className="ms-group__track">
                        <div
                          className={`ms-group__fill ms-group__fill--${group.color}`}
                          style={{ width: `${group.pct}%` }}
                        />
                      </div>
                      <p className="ms-group__students">{group.students} Siswa aktif</p>
                    </div>
                  ))}
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

export default ManajemenSiswa;
