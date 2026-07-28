import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import AdminFooter from "../../components/admin/AdminFooter";
import "../../styles/admin/LaporanPlatformAdmin.css";

type Format = "PDF" | "XLS" | "CSV";

const generators = [
  {
    key: "akademik",
    title: "Laporan Akademik",
    tone: "green" as const,
    jenis: ["Progres Siswa", "Nilai Tryout", "Kehadiran Kelas"],
    defaultFormat: "XLS" as Format,
    icon: (
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
        <path d="M10 17.5C9.2 16.9 8.3 16.4 7.4 16C6.4 15.7 5.5 15.5 4.5 15.5C3.8 15.5 3.1 15.6 2.4 15.8C1.8 15.9 1.1 16.2 0.5 16.5C0.2 16.7 0 16.5 0 16.1V4.1C0 3.9 0 3.7 0.1 3.6C0.2 3.4 0.4 3.3 0.5 3.2C1.3 2.8 2.1 2.5 3 2.3C3.8 2.1 4.6 2 5.5 2C6.5 2 7.4 2.1 8.3 2.4C9.3 2.6 10.2 3 11 3.5V15.6C11.9 15.1 12.7 14.7 13.7 14.4C14.6 14.1 15.5 14 16.5 14C17.1 14 17.7 14.1 18.3 14.1C18.8 14.2 19.4 14.4 20 14.6V2.6C20.2 2.7 20.5 2.8 20.7 2.9C21 3 21.2 3.1 21.5 3.2C21.6 3.3 21.8 3.4 21.9 3.6C22 3.7 22 3.9 22 4.1V16.1C22 16.5 21.8 16.8 21.5 17C21.2 17.2 20.9 17.2 20.5 17C19.9 16.7 19.2 16.4 18.6 16.3C17.9 16.1 17.2 16 16.5 16C15.5 16 14.5 16.2 13.6 16.5C12.7 16.9 11.8 17.4 11 18C10.9 17.9 10.9 17.9 10.9 17.9L10 17.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "finansial",
    title: "Laporan Finansial",
    tone: "purple" as const,
    jenis: ["Pendapatan Langganan", "Refund & Pembatalan", "Rekap Invoice"],
    defaultFormat: "PDF" as Format,
    icon: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
        <path d="M13 9C12.2 9 11.5 8.7 10.9 8.1C10.3 7.5 10 6.8 10 6C10 5.2 10.3 4.5 10.9 3.9C11.5 3.3 12.2 3 13 3C13.8 3 14.5 3.3 15.1 3.9C15.7 4.5 16 5.2 16 6C16 6.8 15.7 7.5 15.1 8.1C14.5 8.7 13.8 9 13 9M6 12C5.5 12 5 11.8 4.6 11.4C4.2 11 4 10.6 4 10V2C4 1.5 4.2 1 4.6 0.6C5 0.2 5.5 0 6 0H20C20.6 0 21 0.2 21.4 0.6C21.8 1 22 1.5 22 2V10C22 10.6 21.8 11 21.4 11.4C21 11.8 20.6 12 20 12H6M19 16H2C1.5 16 1 15.8 0.6 15.4C0.2 15 0 14.6 0 14V3H2V14H19V16Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "aktivitas",
    title: "Laporan Aktivitas",
    tone: "blue" as const,
    jenis: ["Traffic Pengguna", "Sesi Login", "Interaksi Fitur"],
    defaultFormat: "CSV" as Format,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M0 18V16L2 14V18H0M4 18V12L6 10V18H4M8 18V10L10 12V18H8M12 18V12L14 10V18H12M16 18V8L18 6V18H16M0 12.8V10L7 3L11 7L18 0V2.8L11 9.8L7 5.8L0 12.8Z" fill="currentColor" />
      </svg>
    ),
  },
];

const history = [
  {
    key: "tryout",
    title: "Hasil Tryout Nasional Gelombang 1",
    meta: "Akademik • Okt 2023",
    date: "24 Okt 2023, 14:30",
    format: "XLS",
    status: "Selesai" as const,
  },
  {
    key: "pendapatan",
    title: "Pendapatan Langganan Q3",
    meta: "Finansial • Jul-Sep 2023",
    date: "22 Okt 2023, 09:15",
    format: "PDF",
    status: "Selesai" as const,
  },
  {
    key: "traffic",
    title: "Traffic Pengguna Mingguan",
    meta: "Aktivitas • Minggu 42",
    date: "21 Okt 2023, 16:45",
    format: "CSV",
    status: "Gagal" as const,
  },
];

function LaporanPlatformAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formats, setFormats] = useState<Record<string, Format>>(() =>
    Object.fromEntries(generators.map((g) => [g.key, g.defaultFormat])),
  );

  return (
    <div className="admin-dashboard">
      <AdminSidebar active="Laporan" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-dashboard__main">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="admin-dashboard__content lr-content">
          <header className="lr-header">
            <h1>Pusat Laporan Platform</h1>
            <p>Kelola dan unduh laporan komprehensif seluruh aktivitas platform. Gunakan generator di bawah untuk menarik data spesifik.</p>
          </header>

          <section className="lr-generators">
            {generators.map((generator) => (
              <article className={`lr-generator lr-generator--${generator.tone}`} key={generator.key}>
                <div className="lr-generator__head">
                  <span className={`lr-generator__icon lr-generator__icon--${generator.tone}`}>{generator.icon}</span>
                  <h2>{generator.title}</h2>
                </div>

                <label className="lr-field">
                  <span>Jenis Laporan</span>
                  <select defaultValue={generator.jenis[0]}>
                    {generator.jenis.map((jenis) => (
                      <option key={jenis}>{jenis}</option>
                    ))}
                  </select>
                </label>

                <label className="lr-field">
                  <span>Rentang Waktu</span>
                  <input type="date" />
                </label>

                <div className="lr-field">
                  <span>Format Unduhan</span>
                  <div className="lr-formats">
                    {(["PDF", "XLS", "CSV"] as Format[]).map((format) => (
                      <button
                        type="button"
                        key={format}
                        className={`lr-format lr-format--${generator.tone}${formats[generator.key] === format ? " lr-format--active" : ""}`}
                        onClick={() => setFormats((prev) => ({ ...prev, [generator.key]: format }))}
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="button" className="lr-generate">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.3" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M5.6 4.4 9.8 7 5.6 9.6V4.4Z" fill="currentColor" />
                  </svg>
                  Generate Laporan
                </button>
              </article>
            ))}
          </section>

          <section className="lr-history">
            <div className="lr-history__head">
              <h2>Riwayat Unduhan</h2>
              <button type="button" className="lr-icon-btn" aria-label="Muat ulang">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 16C5.8 16 3.9 15.2 2.3 13.7C0.8 12.1 0 10.2 0 8C0 5.8 0.8 3.9 2.3 2.3C3.9 0.8 5.8 0 8 0C9.2 0 10.3 0.2 11.3 0.7C12.4 1.2 13.3 1.9 14 2.8V0H16V7H9V5H13.2C12.7 4.1 11.9 3.3 11 2.8C10.1 2.3 9.1 2 8 2C6.3 2 4.9 2.6 3.8 3.8C2.6 4.9 2 6.3 2 8C2 9.7 2.6 11.1 3.8 12.3C4.9 13.4 6.3 14 8 14C9.3 14 10.4 13.6 11.5 12.9C12.5 12.2 13.2 11.2 13.7 10H15.8C15.3 11.8 14.3 13.2 12.9 14.3C11.5 15.4 9.8 16 8 16Z" fill="currentColor" />
                </svg>
              </button>
            </div>

            <div className="lr-table-wrap">
              <table className="lr-table">
                <thead>
                  <tr>
                    <th>Nama Laporan</th>
                    <th>Waktu Dibuat</th>
                    <th>Format</th>
                    <th>Status</th>
                    <th className="lr-table__actions-head">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((row) => (
                    <tr key={row.key}>
                      <td>
                        <p className="lr-row-title">{row.title}</p>
                        <p className="lr-row-meta">{row.meta}</p>
                      </td>
                      <td>
                        <span className="lr-mono">{row.date}</span>
                      </td>
                      <td>
                        <span className="lr-format-badge">{row.format}</span>
                      </td>
                      <td>
                        <span className={`lr-status lr-status--${row.status === "Selesai" ? "done" : "failed"}`}>
                          <span className="lr-status__dot" />
                          {row.status}
                        </span>
                      </td>
                      <td>
                        <button type="button" className="lr-icon-btn" aria-label={row.status === "Selesai" ? "Unduh" : "Coba lagi"}>
                          {row.status === "Selesai" ? (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M8 12 3 7 4.4 5.55 7 8.15V0H9V8.15L11.6 5.55 13 7 8 12Z" fill="currentColor" />
                              <path d="M2 16C1.45 16 0.98 15.8 0.59 15.41C0.2 15.02 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8 15.02 15.41 15.41C15.02 15.8 14.55 16 14 16H2Z" fill="currentColor" />
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M8 16C5.8 16 3.9 15.2 2.3 13.7C0.8 12.1 0 10.2 0 8C0 5.8 0.8 3.9 2.3 2.3C3.9 0.8 5.8 0 8 0C9.2 0 10.3 0.2 11.3 0.7C12.4 1.2 13.3 1.9 14 2.8V0H16V7H9V5H13.2C12.7 4.1 11.9 3.3 11 2.8C10.1 2.3 9.1 2 8 2C6.3 2 4.9 2.6 3.8 3.8C2.6 4.9 2 6.3 2 8C2 9.7 2.6 11.1 3.8 12.3C4.9 13.4 6.3 14 8 14C9.3 14 10.4 13.6 11.5 12.9C12.5 12.2 13.2 11.2 13.7 10H15.8C15.3 11.8 14.3 13.2 12.9 14.3C11.5 15.4 9.8 16 8 16Z" fill="currentColor" />
                            </svg>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lr-history__footer">
              <button type="button" className="lr-link-btn">
                Lihat Semua Riwayat
                <svg width="6" height="9" viewBox="0 0 6 9" fill="none">
                  <path d="M3.45 4.5 0 1.05 1.05 0 5.55 4.5 1.05 9 0 7.95 3.45 4.5Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </section>
        </div>

        <AdminFooter />
      </div>
    </div>
  );
}

export default LaporanPlatformAdmin;
