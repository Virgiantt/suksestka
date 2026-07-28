import { useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import AdminFooter from "../../components/admin/AdminFooter";
import "../../styles/admin/BuatPengumumanAdmin.css";

const targetOptions = [
  { key: "semua", label: "Semua Pengguna" },
  { key: "siswa", label: "Siswa" },
  { key: "pengajar", label: "Pengajar" },
  { key: "wali", label: "Orang Tua / Wali" },
];

const channelOptions = [
  { key: "inapp", title: "In-App Popup / Banner", desc: "Muncul saat user membuka aplikasi." },
  { key: "push", title: "Push Notification", desc: "Notifikasi langsung ke perangkat mobile." },
  { key: "email", title: "Email Blast", desc: "Kirim ke alamat email terdaftar." },
];

function CheckIcon() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
      <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BuatPengumumanAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [judul, setJudul] = useState("");
  const [ringkasan, setRingkasan] = useState("");
  const [isi, setIsi] = useState("");
  const [targets, setTargets] = useState<string[]>(["semua"]);
  const [channels, setChannels] = useState<string[]>(["inapp", "push"]);
  const [schedule, setSchedule] = useState<"now" | "later">("now");

  const toggleTarget = (key: string) => {
    setTargets((prev) => (prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]));
  };

  const toggleChannel = (key: string) => {
    setChannels((prev) => (prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]));
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar active="Pengumuman" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-dashboard__main">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="admin-dashboard__content bp-content">
          <header className="bp-header">
            <h1>Buat Pengumuman Baru</h1>
            <p>Distribusikan informasi penting ke seluruh platform. Atur target penerima, saluran pengiriman, dan jadwal publikasi dengan presisi.</p>
          </header>

          <form
            className="bp-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <section className="bp-card">
              <div className="bp-card__head">
                <span className="bp-card__icon bp-card__icon--blue">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 16V2H10L14 6V9H12V7H9V4H4V16H8V18H2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    <path d="M10 18V16.9L14.6 12.3C14.9 12 15.3 12 15.6 12.3L16.6 13.3C16.9 13.6 16.9 14 16.6 14.3L12 18.9H10Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h2>Detail Konten</h2>
                  <p>Informasi utama yang akan ditampilkan kepada pengguna.</p>
                </div>
              </div>

              <label className="bp-field">
                <span>
                  Judul Pengumuman <em>*</em>
                </span>
                <input
                  type="text"
                  placeholder="Masukkan judul yang jelas dan ringkas..."
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                />
              </label>

              <label className="bp-field">
                <span>Ringkasan Singkat (Opsional)</span>
                <textarea
                  className="bp-textarea bp-textarea--soft"
                  rows={2}
                  placeholder="Teks singkat yang muncul pada notifikasi push atau email preview..."
                  value={ringkasan}
                  onChange={(e) => setRingkasan(e.target.value)}
                />
              </label>

              <label className="bp-field">
                <span>
                  Isi Lengkap Pengumuman <em>*</em>
                </span>
                <div className="bp-editor">
                  <div className="bp-editor__toolbar">
                    <button type="button">B</button>
                    <button type="button">
                      <em>I</em>
                    </button>
                    <button type="button">
                      <u>U</u>
                    </button>
                    <span className="bp-editor__divider" />
                    <button type="button">≣</button>
                    <button type="button">≡</button>
                    <span className="bp-editor__divider" />
                    <button type="button">🔗</button>
                    <button type="button">🖼</button>
                  </div>
                  <textarea
                    className="bp-textarea"
                    rows={7}
                    placeholder="Tuliskan isi pengumuman secara detail di sini..."
                    value={isi}
                    onChange={(e) => setIsi(e.target.value)}
                  />
                </div>
              </label>
            </section>

            <section className="bp-card">
              <div className="bp-card__head">
                <span className="bp-card__icon bp-card__icon--purple">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2.6 12.8C1.7 11.8 1 10.7 0.7 9.5C0.2 8.7 0 7.4 0 6.4C0 5.2 0.2 3.9 0.7 2.7C1.2 1.6 1.8 0.6 2.6 0L3.7 1.1C3 1.9 2.4 2.7 2.1 3.7C1.7 4.6 1.5 5.5 1.5 6.4C1.5 7.4 1.7 8.3 2.1 9.2C2.4 10.1 3 11 3.7 11.7L2.6 12.8Z" fill="currentColor" />
                    <circle cx="9" cy="6.4" r="2.7" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M4.5 17.2 7.5 8.9M11.2 8.9 14 17.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <path d="M15.4 12.8C16.3 11.8 17 10.7 17.4 9.5C17.8 8.3 18 7.1 18 6C18 4.8 17.8 3.6 17.4 2.4C17 1.2 16.3 0.6 15.4 0L14.3 1.1C15 1.9 15.5 2.7 15.9 3.7C16.3 4.6 16.5 5.5 16.5 6.4C16.5 7.4 16.3 8.3 15.9 9.2C15.5 10.1 15 11 14.3 11.7L15.4 12.8Z" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <h2>Target & Saluran</h2>
                  <p>Tentukan siapa yang menerima dan melalui platform apa.</p>
                </div>
              </div>

              <div className="bp-columns">
                <div className="bp-column">
                  <span className="bp-field__label">
                    Target Pengguna <em>*</em>
                  </span>
                  <div className="bp-options">
                    {targetOptions.map((option) => (
                      <label className="bp-option" key={option.key}>
                        <span
                          className={`bp-checkbox${targets.includes(option.key) ? " bp-checkbox--checked" : ""}`}
                          onClick={() => toggleTarget(option.key)}
                        >
                          {targets.includes(option.key) ? <CheckIcon /> : null}
                        </span>
                        <span className={targets.includes(option.key) ? "bp-option__text--active" : undefined}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bp-column">
                  <span className="bp-field__label">
                    Saluran Pengiriman <em>*</em>
                  </span>
                  <div className="bp-options">
                    {channelOptions.map((option) => (
                      <label className="bp-option bp-option--channel" key={option.key}>
                        <span
                          className={`bp-checkbox${channels.includes(option.key) ? " bp-checkbox--checked" : ""}`}
                          onClick={() => toggleChannel(option.key)}
                        >
                          {channels.includes(option.key) ? <CheckIcon /> : null}
                        </span>
                        <span>
                          <span className="bp-option__title">{option.title}</span>
                          <span className="bp-option__desc">{option.desc}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="bp-card">
              <div className="bp-card__head">
                <span className="bp-card__icon bp-card__icon--green">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M9 4.5V9L12 11.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <h2>Penjadwalan</h2>
                  <p>Atur kapan pengumuman ini akan disiarkan.</p>
                </div>
              </div>

              <div className="bp-radios">
                <label className="bp-radio-option">
                  <span
                    className={`bp-radio${schedule === "now" ? " bp-radio--checked" : ""}`}
                    onClick={() => setSchedule("now")}
                  />
                  Kirim Sekarang
                </label>
                <label className="bp-radio-option">
                  <span
                    className={`bp-radio${schedule === "later" ? " bp-radio--checked" : ""}`}
                    onClick={() => setSchedule("later")}
                  />
                  Jadwalkan Nanti
                </label>
              </div>

              <div className={`bp-schedule${schedule === "later" ? "" : " bp-schedule--disabled"}`}>
                <label className="bp-field">
                  <span>Tanggal Publikasi</span>
                  <input type="date" disabled={schedule === "now"} />
                </label>
                <label className="bp-field">
                  <span>Waktu (WIB)</span>
                  <input type="time" disabled={schedule === "now"} />
                </label>
              </div>
            </section>

            <div className="bp-actions">
              <Link to="/admin/pengumuman" className="bp-btn bp-btn--ghost">
                Batal
              </Link>
              <div className="bp-actions__right">
                <button type="button" className="bp-btn bp-btn--outline">
                  Simpan sebagai Draft
                </button>
                <button type="submit" className="bp-btn bp-btn--primary">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                    <path d="M0 12V0L14 6L0 12M1.5 9.5L9.7 6L1.5 2.5V4.7L5.5 6L1.5 7.3V9.5Z" fill="white" />
                  </svg>
                  Publikasikan Sekarang
                </button>
              </div>
            </div>
          </form>
        </div>

        <AdminFooter />
      </div>
    </div>
  );
}

export default BuatPengumumanAdmin;
