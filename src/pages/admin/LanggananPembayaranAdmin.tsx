import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import AdminFooter from "../../components/admin/AdminFooter";
import "../../styles/admin/LanggananPembayaranAdmin.css";

const transactions = [
  { key: "andi", initials: "AR", tone: "blue" as const, name: "Andi Rahman", email: "andi.r@gmail.com", plan: "Ultra Premium", planTone: "purple" as const, date: "24 Okt 2023", amount: "Rp 750.000", status: "Berhasil" as const },
  { key: "budi", initials: "BP", tone: "purple" as const, name: "Budi Prakoso", email: "budi99@yahoo.com", plan: "Premium", planTone: "blue" as const, date: "24 Okt 2023", amount: "Rp 350.000", status: "Gagal" as const },
  { key: "citra", initials: "CS", tone: "green" as const, name: "Citra Sari", email: "citra.sari@edu.id", plan: "Basic", planTone: "gray" as const, date: "23 Okt 2023", amount: "Rp 150.000", status: "Pending" as const },
  { key: "deni", initials: "DW", tone: "blue" as const, name: "Deni Wijaya", email: "deniw@gmail.com", plan: "Premium", planTone: "blue" as const, date: "22 Okt 2023", amount: "Rp 350.000", status: "Berhasil" as const },
];

const plans = [
  { key: "basic", name: "Basic", price: "Rp 150K / Bln", tone: "default" as const },
  { key: "premium", name: "Premium", price: "Rp 350K / Bln", tone: "blue" as const },
  { key: "ultra", name: "Ultra Premium", price: "Rp 750K / Bln", tone: "purple" as const },
];

const referrals = [
  { key: "rina", rank: 1, name: "Tutor Rina", conversions: "42 Konversi", amount: "Rp 4.2M" },
  { key: "joko", rank: 2, name: "Pak Joko", conversions: "28 Konversi", amount: "Rp 2.8M" },
  { key: "sman", rank: 3, name: "SMA N 1", conversions: "15 Konversi", amount: "Rp 1.5M" },
];

function LanggananPembayaranAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toggles, setToggles] = useState({ basic: true, premium: true, ultra: true });

  return (
    <div className="admin-dashboard">
      <AdminSidebar active="Langganan & Pembayaran" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-dashboard__main">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="admin-dashboard__content lp-content">
          <header className="lp-header">
            <div>
              <h1>Manajemen Langganan &amp; Pembayaran</h1>
              <p>Ikhtisar finansial dan kontrol akses pengguna bulan ini.</p>
            </div>
            <div className="lp-header__actions">
              <div className="lp-pill">
                <span className="lp-pill__icon">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                    <path d="M1 5L4.5 8.5L12 1" stroke="#006229" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p>Active Subs</p>
                  <strong>14,209</strong>
                </div>
              </div>
              <button type="button" className="lp-btn">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1V8M6 8L3 5M6 8L9 5M1.5 10H10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Ekspor Data
              </button>
            </div>
          </header>

          <section className="lp-kpis">
            <article className="lp-kpi">
              <div className="lp-kpi__glow" />
              <div className="lp-kpi__top">
                <div>
                  <p className="lp-kpi__label">TOTAL PENDAPATAN</p>
                  <p className="lp-kpi__value">Rp 145.2M</p>
                </div>
                <span className="lp-kpi__icon lp-kpi__icon--green">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 12L5 8L8 11L15 4M15 4H10M15 4V9" stroke="#007E37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="lp-kpi__foot">
                <span className="lp-kpi__badge lp-kpi__badge--up">+12.5%</span>
                <span>vs bulan lalu</span>
              </div>
              <div className="lp-kpi__bars">
                <span style={{ height: "30%" }} />
                <span style={{ height: "50%" }} />
                <span style={{ height: "40%" }} />
                <span style={{ height: "70%" }} />
                <span style={{ height: "90%" }} />
              </div>
            </article>

            <article className="lp-kpi">
              <div className="lp-kpi__glow lp-kpi__glow--purple" />
              <div className="lp-kpi__top">
                <div>
                  <p className="lp-kpi__label">TRANSAKSI BERHASIL</p>
                  <p className="lp-kpi__value">8,421</p>
                </div>
                <span className="lp-kpi__icon lp-kpi__icon--purple">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6.5" stroke="#6B38D4" strokeWidth="1.5" />
                    <path d="M5.5 8L7 9.5L10.5 6" stroke="#6B38D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="lp-kpi__foot">
                <span className="lp-kpi__badge lp-kpi__badge--up">+5.2%</span>
                <span>vs bulan lalu</span>
              </div>
              <div className="lp-kpi__bars lp-kpi__bars--purple">
                <span style={{ height: "50%" }} />
                <span style={{ height: "40%" }} />
                <span style={{ height: "65%" }} />
                <span style={{ height: "55%" }} />
                <span style={{ height: "70%" }} />
              </div>
            </article>

            <article className="lp-kpi">
              <div className="lp-kpi__glow lp-kpi__glow--red" />
              <div className="lp-kpi__top">
                <div>
                  <p className="lp-kpi__label">PENDING / GAGAL</p>
                  <p className="lp-kpi__value">142</p>
                </div>
                <span className="lp-kpi__icon lp-kpi__icon--red">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L15 14H1L8 1Z" stroke="#BA1A1A" strokeWidth="1.4" strokeLinejoin="round" />
                    <path d="M8 6.5V9.5M8 11.5V11.7" stroke="#BA1A1A" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <div className="lp-kpi__foot">
                <span className="lp-kpi__badge lp-kpi__badge--down">-2.1%</span>
                <span>vs bulan lalu</span>
              </div>
              <div className="lp-kpi__bars lp-kpi__bars--red">
                <span style={{ height: "60%" }} />
                <span style={{ height: "45%" }} />
                <span style={{ height: "30%" }} />
                <span style={{ height: "40%" }} />
                <span style={{ height: "20%" }} />
              </div>
            </article>
          </section>

          <div className="lp-layout">
            <div className="lp-main">
              <div className="lp-card lp-card--table">
                <div className="lp-card__head">
                  <h2>Riwayat Transaksi</h2>
                  <div className="lp-toolbar">
                    <div className="lp-search">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="6" cy="6" r="4.5" stroke="#434655" strokeWidth="1.3" />
                        <path d="M9.5 9.5L13 13" stroke="#434655" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                      <input type="search" placeholder="Cari ID, Nama..." />
                    </div>
                    <button type="button" className="lp-icon-btn" aria-label="Filter">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M1 1H13M4 5H10M6 9H8" stroke="#434655" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="lp-table-wrap">
                  <table className="lp-table">
                    <thead>
                      <tr>
                        <th>SISWA</th>
                        <th>PAKET</th>
                        <th>TANGGAL</th>
                        <th>NOMINAL</th>
                        <th>STATUS</th>
                        <th className="lp-table__actions-head">AKSI</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((t) => (
                        <tr key={t.key}>
                          <td>
                            <div className="lp-student">
                              <span className={`lp-avatar lp-avatar--${t.tone}`}>{t.initials}</span>
                              <div>
                                <p className="lp-student__name">{t.name}</p>
                                <p className="lp-student__email">{t.email}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className={`lp-plan lp-plan--${t.planTone}`}>{t.plan}</span>
                          </td>
                          <td>{t.date}</td>
                          <td className="lp-mono">{t.amount}</td>
                          <td>
                            <span className={`lp-status lp-status--${t.status.toLowerCase()}`}>
                              <i />
                              {t.status}
                            </span>
                          </td>
                          <td>
                            <div className="lp-row-actions">
                              <button type="button" className="lp-icon-btn" aria-label="Lihat">
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                                  <path d="M1 5C1 5 3.5 1 7 1C10.5 1 13 5 13 5C13 5 10.5 9 7 9C3.5 9 1 5 1 5Z" stroke="#434655" strokeWidth="1.1" />
                                </svg>
                              </button>
                              <button type="button" className="lp-icon-btn lp-icon-btn--danger" aria-label="Hapus">
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
                <div className="lp-pagination">
                  <p>Menampilkan 1-4 dari 8,421 transaksi</p>
                  <div className="lp-pagination__buttons">
                    <button type="button" aria-label="Sebelumnya">‹</button>
                    <button type="button" className="lp-pagination__active">1</button>
                    <button type="button">2</button>
                    <button type="button">3</button>
                    <button type="button" aria-label="Selanjutnya">›</button>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lp-side">
              <div className="lp-card">
                <div className="lp-card__head">
                  <h2>Paket Langganan</h2>
                  <button type="button" className="lp-link">+ Baru</button>
                </div>
                <div className="lp-plans">
                  {plans.map((p) => (
                    <div className={`lp-plan-row lp-plan-row--${p.tone}`} key={p.key}>
                      <div>
                        <div className="lp-plan-row__title">
                          <span>{p.name}</span>
                          <i className="lp-plan-row__dot" />
                        </div>
                        <p className="lp-mono">{p.price}</p>
                      </div>
                      <button
                        type="button"
                        className={`lp-toggle${toggles[p.key as keyof typeof toggles] ? " lp-toggle--on" : ""}`}
                        onClick={() => setToggles((prev) => ({ ...prev, [p.key]: !prev[p.key as keyof typeof toggles] }))}
                        aria-label={`Toggle ${p.name}`}
                      >
                        <span />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lp-card">
                <h2>Top Referral</h2>
                <p className="lp-card__sub">Mitra dengan performa tertinggi bulan ini.</p>
                <div className="lp-referrals">
                  {referrals.map((r) => (
                    <div className="lp-referral" key={r.key}>
                      <div className="lp-referral__left">
                        <span className={`lp-referral__avatar lp-referral__avatar--${r.rank}`}>
                          {r.name.charAt(0)}
                          <i>#{r.rank}</i>
                        </span>
                        <div>
                          <p>{r.name}</p>
                          <span>{r.conversions}</span>
                        </div>
                      </div>
                      <strong>{r.amount}</strong>
                    </div>
                  ))}
                </div>
                <button type="button" className="lp-link-btn">Lihat Semua Referensi</button>
              </div>
            </aside>
          </div>
        </div>

        <AdminFooter />
      </div>
    </div>
  );
}

export default LanggananPembayaranAdmin;
