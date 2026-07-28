import { useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import AdminFooter from "../../components/admin/AdminFooter";
import "../../styles/admin/ManajemenPengumumanAdmin.css";

const announcements = [
  {
    key: "update",
    title: "Update Sistem Ujian v2.1",
    meta: "12 Okt 2023, 08:00 WIB",
    target: "Semua",
    targetTone: "gray" as const,
    status: "Terkirim" as const,
    readRate: 85,
  },
  {
    key: "tryout",
    title: "Jadwal Tryout Akbar Nasional",
    meta: "15 Okt 2023, 10:00 WIB",
    target: "Siswa",
    targetTone: "blue" as const,
    status: "Terjadwal" as const,
    readRate: null,
  },
  {
    key: "materi",
    title: "Materi Pelatihan Guru Baru",
    meta: "Draft",
    target: "Pengajar",
    targetTone: "gray" as const,
    status: "Draft" as const,
    readRate: null,
  },
];

const channels = [
  { key: "inapp", label: "In-App Popup", value: 92, tone: "blue" as const },
  { key: "push", label: "Push Notif", value: 78, tone: "purple" as const },
  { key: "email", label: "Email", value: 45, tone: "green" as const },
];

const schedule = [
  { key: "spp", time: "Besok, 08:00 WIB", title: "Pengingat Pembayaran SPP", target: "Target: Orang Tua" },
  { key: "maintenance", time: "20 Okt, 15:00 WIB", title: "Maintenance Server Rutin", target: "Target: Semua" },
];

function ManajemenPengumumanAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-dashboard">
      <AdminSidebar active="Pengumuman" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-dashboard__main">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="admin-dashboard__content pm-content">
          <header className="pm-header">
            <div>
              <h1>Manajemen Pengumuman</h1>
              <p>Kelola, jadwalkan, dan pantau komunikasi platform ke seluruh pengguna.</p>
            </div>
            <Link to="/admin/pengumuman/buat" className="pm-btn pm-btn--primary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Buat Pengumuman Baru
            </Link>
          </header>

          <section className="pm-stats">
            <article className="pm-stat">
              <div className="pm-stat__top">
                <span className="pm-stat__icon pm-stat__icon--blue">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                    <path d="M0 14V9L7 7L0 5V0L16 7L0 14Z" fill="#004AC6" />
                  </svg>
                </span>
                <span className="pm-badge pm-badge--green">+12%</span>
              </div>
              <p className="pm-stat__label">TOTAL TERKIRIM</p>
              <p className="pm-stat__value">1,248</p>
              <div className="pm-divider" />
            </article>

            <article className="pm-stat">
              <div className="pm-stat__top">
                <span className="pm-stat__icon pm-stat__icon--purple">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#6B38D4" strokeWidth="1.5" />
                    <path d="M8 4V8L11 10" stroke="#6B38D4" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="pm-badge pm-badge--gray">Minggu ini</span>
              </div>
              <p className="pm-stat__label">TERJADWAL</p>
              <p className="pm-stat__value">24</p>
              <div className="pm-divider" />
            </article>

            <article className="pm-stat">
              <div className="pm-stat__top">
                <span className="pm-stat__icon pm-stat__icon--green">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                    <path d="M1 6C1 6 4 1 9 1C14 1 17 6 17 6C17 6 14 11 9 11C4 11 1 6 1 6Z" stroke="#006229" strokeWidth="1.4" />
                    <circle cx="9" cy="6" r="2.2" stroke="#006229" strokeWidth="1.4" />
                  </svg>
                </span>
                <span className="pm-badge pm-badge--green">+5.2%</span>
              </div>
              <p className="pm-stat__label">TINGKAT KETERBACAAN</p>
              <p className="pm-stat__value">68<span>%</span></p>
              <div className="pm-divider" />
            </article>

            <article className="pm-stat">
              <div className="pm-stat__top">
                <span className="pm-stat__icon pm-stat__icon--red">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M2 13V11H3V7C3 5.34 3.75 3.92 5 3V2.5C5 1.67 5.67 1 6.5 1C7.33 1 8 1.67 8 2.5V3C9.25 3.92 10 5.34 10 7V11H11V13H2Z" stroke="#BA1A1A" strokeWidth="1.2" />
                    <path d="M6 13C6 13.55 6.45 14 7 14C7.55 14 8 13.55 8 13" stroke="#BA1A1A" strokeWidth="1.2" />
                  </svg>
                </span>
              </div>
              <p className="pm-stat__label">PUSH AKTIF</p>
              <p className="pm-stat__value">45k</p>
              <div className="pm-divider" />
            </article>
          </section>

          <div className="pm-grid">
            <div className="pm-card pm-card--table">
              <div className="pm-card__head">
                <h2>Daftar Pengumuman</h2>
                <button type="button" className="pm-filter-btn">
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 1H11M3.5 4.5H8.5M5 8H7" stroke="#434655" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  Filter
                </button>
              </div>
              <div className="pm-table-wrap">
                <table className="pm-table">
                  <thead>
                    <tr>
                      <th>JUDUL</th>
                      <th>TARGET</th>
                      <th>STATUS</th>
                      <th>READ RATE</th>
                      <th className="pm-table__actions-head">AKSI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {announcements.map((a) => (
                      <tr key={a.key}>
                        <td>
                          <p className="pm-title">{a.title}</p>
                          <p className="pm-meta">{a.meta}</p>
                        </td>
                        <td>
                          <span className={`pm-target pm-target--${a.targetTone}`}>{a.target}</span>
                        </td>
                        <td>
                          <span className={`pm-status pm-status--${a.status.toLowerCase()}`}>
                            <i />
                            {a.status}
                          </span>
                        </td>
                        <td>
                          {a.readRate !== null ? (
                            <div className="pm-readrate">
                              <div className="pm-track">
                                <div className="pm-track__fill" style={{ width: `${a.readRate}%` }} />
                              </div>
                              <span className="pm-mono">{a.readRate}%</span>
                            </div>
                          ) : (
                            <span className="pm-mono pm-mono--muted">-</span>
                          )}
                        </td>
                        <td>
                          <div className="pm-row-actions">
                            <button type="button" className="pm-icon-btn" aria-label="Edit">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 10L2.5 8L8 2.5L9.5 4L4 9.5L2 10Z" stroke="#434655" strokeWidth="1.1" strokeLinejoin="round" />
                              </svg>
                            </button>
                            <button type="button" className="pm-icon-btn pm-icon-btn--danger" aria-label="Hapus">
                              <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M1 3H9M4 3V1H6V3M2 3L2.5 11H7.5L8 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="pm-pagination">
                <p>Menampilkan 1-3 dari 45</p>
                <div className="pm-pagination__buttons">
                  <button type="button" aria-label="Sebelumnya">‹</button>
                  <button type="button" aria-label="Selanjutnya">›</button>
                </div>
              </div>
            </div>

            <div className="pm-side">
              <div className="pm-card">
                <h2>Performa Channel</h2>
                <div className="pm-channels">
                  {channels.map((c) => (
                    <div className="pm-channel" key={c.key}>
                      <div className="pm-channel__top">
                        <span>{c.label}</span>
                        <span className="pm-mono">{c.value}%</span>
                      </div>
                      <div className="pm-track">
                        <div className={`pm-track__fill pm-track__fill--${c.tone}`} style={{ width: `${c.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pm-card">
                <div className="pm-card__head">
                  <h2>Jadwal Mendatang</h2>
                  <button type="button" className="pm-icon-btn" aria-label="Kalender">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="#004AC6" strokeWidth="1.2" />
                      <path d="M1.5 5.5H12.5M4.5 1V3M9.5 1V3" stroke="#004AC6" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <div className="pm-timeline">
                  {schedule.map((s) => (
                    <div className="pm-timeline__item" key={s.key}>
                      <i className="pm-timeline__dot" />
                      <p className="pm-timeline__time">{s.time}</p>
                      <p className="pm-timeline__title">{s.title}</p>
                      <p className="pm-timeline__target">{s.target}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <AdminFooter />
      </div>
    </div>
  );
}

export default ManajemenPengumumanAdmin;
