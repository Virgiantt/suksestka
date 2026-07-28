import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import AdminFooter from "../../components/admin/AdminFooter";
import "../../styles/admin/PengaturanSistemAdmin.css";

const integrations = [
  { key: "ai", name: "OpenAI / Gemini API", value: "sk-proj-****************", status: "connected" as const },
  { key: "wa", name: "WhatsApp Gateway", value: "+62811********", status: "connected" as const },
  { key: "smtp", name: "SMTP Server", value: "mail.suksestka.com", status: "issue" as const },
];

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      className={`st-toggle${checked ? " st-toggle--on" : ""}`}
      onClick={onChange}
      aria-pressed={checked}
    >
      <span className="st-toggle__thumb" />
    </button>
  );
}

function PengaturanSistemAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);
  const [require2fa, setRequire2fa] = useState(true);
  const [autoLock, setAutoLock] = useState(true);
  const [activityLog, setActivityLog] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState("30");

  return (
    <div className="admin-dashboard">
      <AdminSidebar active="Pengaturan" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-dashboard__main">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="admin-dashboard__content st-content">
          <header className="st-header">
            <h1>Pengaturan Sistem</h1>
            <p>Kelola konfigurasi platform, keamanan, dan integrasi sistem SuksesTKA. Perubahan ini berdampak pada seluruh pengguna platform.</p>
          </header>

          <div className="st-layout">
            <div className="st-main">
              <section className="st-card">
                <div className="st-card__head">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M0 18V4H4V0H14V8H18V18H10V14H8V18H0Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                  <h2>Profil Platform</h2>
                </div>

                <div className="st-grid">
                  <label className="st-field">
                    <span>Nama Platform</span>
                    <input type="text" defaultValue="SuksesTKA" />
                  </label>
                  <label className="st-field">
                    <span>Nama Perusahaan</span>
                    <input type="text" defaultValue="PT Edukasi Sukses Nusantara" />
                  </label>
                  <label className="st-field st-field--full">
                    <span>Email Dukungan (Support)</span>
                    <input type="email" defaultValue="support@suksestka.com" />
                  </label>
                  <div className="st-field st-field--full">
                    <span>Logo Platform</span>
                    <div className="st-logo-upload">
                      <div className="st-logo-upload__preview">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <path d="M4 26V10L14 4L24 10V26H4Z" stroke="#004AC6" strokeWidth="1.4" strokeLinejoin="round" />
                          <path d="M4 26 12 18 17 22 24 14 28 26" stroke="#25EBEB" strokeWidth="1.4" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p>Format yang disarankan: PNG, SVG transparan. Ukuran maksimal 2MB.</p>
                        <button type="button" className="st-btn st-btn--outline">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 8V1M3 4 6 1 9 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.5 10H10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                          </svg>
                          Unggah Logo Baru
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="st-card">
                <div className="st-card__head">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M1 10H19M10 1C12.2 3.3 13.5 6.5 13.5 10C13.5 13.5 12.2 16.7 10 19C7.8 16.7 6.5 13.5 6.5 10C6.5 6.5 7.8 3.3 10 1Z" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  <h2>Wilayah & Bahasa</h2>
                </div>

                <div className="st-columns">
                  <label className="st-field">
                    <span>Bahasa Utama (Default)</span>
                    <select defaultValue="id">
                      <option value="id">Bahasa Indonesia</option>
                      <option value="en">English</option>
                    </select>
                  </label>
                  <label className="st-field">
                    <span>Zona Waktu Sistem</span>
                    <select defaultValue="wib">
                      <option value="wib">(GMT+07:00) Waktu Indonesia Barat</option>
                      <option value="wita">(GMT+08:00) Waktu Indonesia Tengah</option>
                      <option value="wit">(GMT+09:00) Waktu Indonesia Timur</option>
                    </select>
                  </label>
                </div>
              </section>

              <section className="st-card">
                <div className="st-card__head">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <ellipse cx="9" cy="3.5" rx="8" ry="2.5" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M1 3.5V14.5C1 15.9 4.6 17 9 17C13.4 17 17 15.9 17 14.5V3.5" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M1 9C1 10.4 4.6 11.5 9 11.5C13.4 11.5 17 10.4 17 9" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  <h2>Data & Cadangan</h2>
                </div>

                <div className="st-toggle-row">
                  <div>
                    <p className="st-toggle-row__label">Pencadangan Otomatis</p>
                    <p className="st-toggle-row__desc">Simpan data secara berkala ke cloud</p>
                  </div>
                  <Toggle checked={autoBackup} onChange={() => setAutoBackup((prev) => !prev)} />
                </div>

                <div className="st-columns">
                  <label className="st-field">
                    <span>Frekuensi Cadangan</span>
                    <select defaultValue="weekly">
                      <option value="daily">Setiap Hari</option>
                      <option value="weekly">Setiap Minggu</option>
                      <option value="monthly">Setiap Bulan</option>
                    </select>
                  </label>
                  <label className="st-field">
                    <span>Penyimpanan Cloud</span>
                    <div className="st-status-box">
                      <span className="st-status-dot st-status-dot--green" />
                      Google Drive Connected
                    </div>
                  </label>
                </div>

                <button type="button" className="st-btn st-btn--primary">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1V9M3 6 6 9 9 6" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.5 10H10.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  Cadangkan Sekarang
                </button>
              </section>
            </div>

            <aside className="st-side">
              <section className="st-card">
                <div className="st-card__head">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M8 19C5.7 18.4 3.8 17.1 2.3 15C0.8 12.9 0 10.6 0 8.1V3L8 0L16 3V8.1C16 10.6 15.2 12.9 13.7 15C12.2 17.1 10.3 18.4 8 19Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                  <h2>Keamanan & Akses</h2>
                </div>

                <div className="st-toggle-row">
                  <div>
                    <p className="st-toggle-row__label">Wajibkan 2FA</p>
                    <p className="st-toggle-row__desc">Untuk semua akun Admin</p>
                  </div>
                  <Toggle checked={require2fa} onChange={() => setRequire2fa((prev) => !prev)} />
                </div>

                <div className="st-toggle-row">
                  <div>
                    <p className="st-toggle-row__label">Auto-lock Sesi</p>
                    <p className="st-toggle-row__desc">Kunci layar saat tidak aktif</p>
                  </div>
                  <Toggle checked={autoLock} onChange={() => setAutoLock((prev) => !prev)} />
                </div>

                <label className="st-field">
                  <span>Batas Waktu Sesi (Menit)</span>
                  <input
                    type="number"
                    className="st-field__narrow"
                    value={sessionTimeout}
                    onChange={(e) => setSessionTimeout(e.target.value)}
                  />
                </label>

                <div className="st-toggle-row">
                  <div>
                    <p className="st-toggle-row__label">Log Aktivitas Admin</p>
                    <p className="st-toggle-row__desc">Rekam semua aksi dashboard</p>
                  </div>
                  <Toggle checked={activityLog} onChange={() => setActivityLog((prev) => !prev)} />
                </div>
              </section>

              <section className="st-card">
                <div className="st-card__head">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="2.5" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="10" cy="2.5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="15" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="17.5" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  <h2>Integrasi Layanan</h2>
                </div>

                <div className="st-integrations">
                  {integrations.map((item) => (
                    <div className="st-integration" key={item.key}>
                      <div className="st-integration__top">
                        <div className="st-integration__name">
                          <span className={`st-status-dot${item.status === "issue" ? " st-status-dot--red" : " st-status-dot--green"}`} />
                          {item.name}
                        </div>
                        <span className={`st-badge${item.status === "issue" ? " st-badge--red" : " st-badge--green"}`}>
                          {item.status === "issue" ? "Issue" : "Connected"}
                        </span>
                      </div>
                      <div className="st-integration__bottom">
                        <span className="st-integration__value">{item.value}</span>
                        <button type="button" className="st-link-btn">
                          Test Connection
                        </button>
                      </div>
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

export default PengaturanSistemAdmin;
