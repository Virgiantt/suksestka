import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import AdminFooter from "../../components/admin/AdminFooter";
import "../../styles/admin/RegistrasiSiswaAdmin.css";

function IconPerson() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="4" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.5 13c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 5.5H12.5M4.5 1V3M9.5 1V3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconGender() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 3L7 9L12 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSchool() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1L13 4.5L7 8L1 4.5L7 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M3.5 6V10C3.5 10 5 11.5 7 11.5C9 11.5 10.5 10 10.5 10V6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function IconCity() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1.5" y="4.5" width="4" height="8" stroke="currentColor" strokeWidth="1.2" />
      <rect x="7.5" y="1.5" width="5" height="11" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 3.5L7 8L12.5 3.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2.5" y="6" width="9" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 6V4.2C4.5 2.7 5.6 1.5 7 1.5C8.4 1.5 9.5 2.7 9.5 4.2V6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
      <path d="M1 6C1 6 3.5 1 8 1C12.5 1 15 6 15 6C15 6 12.5 11 8 11C3.5 11 1 6 1 6Z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function RegistrasiSiswaAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [plan, setPlan] = useState<"basic" | "ultra">("ultra");
  const [form, setForm] = useState({
    nama: "",
    tanggalLahir: "",
    jenisKelamin: "",
    tingkat: "",
    asalSekolah: "",
    kota: "",
    email: "",
    password: "siswa123",
  });

  const updateField = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar active="Siswa" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-dashboard__main">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="admin-dashboard__content rs-content">
          <header className="rs-header">
            <div>
              <h1>
                Registrasi Siswa Baru
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 15L3.5 12.5L11.5 4.5L13.5 6.5L5.5 14.5L3 15Z" stroke="#004AC6" strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
              </h1>
              <p>Lengkapi formulir pendaftaran di bawah ini untuk menambahkan siswa baru ke dalam sistem terpadu SuksesTKA.</p>
            </div>
            <button type="button" className="rs-btn rs-btn--ghost">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <path d="M1 1H7L11 5V13H1V1Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
              </svg>
              Impor CSV
            </button>
          </header>

          <div className="rs-layout">
            <div className="rs-main">
              <form
                className="rs-form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <section className="rs-card rs-card--blue">
                  <div className="rs-card__head">
                    <div className="rs-card__heading">
                      <span className="rs-card__icon rs-card__icon--blue">
                        <IconPerson />
                      </span>
                      <div>
                        <h2>Informasi Pribadi</h2>
                        <p>Data dasar identitas siswa</p>
                      </div>
                    </div>
                    <span className="rs-step rs-step--blue">Langkah 1</span>
                  </div>
                  <div className="rs-grid">
                    <label className="rs-field rs-field--full">
                      <span>Nama Lengkap *</span>
                      <div className="rs-input">
                        <IconPerson />
                        <input
                          type="text"
                          placeholder="Contoh: Ahmad Hidayat"
                          value={form.nama}
                          onChange={updateField("nama")}
                        />
                      </div>
                    </label>
                    <label className="rs-field">
                      <span>Tanggal Lahir *</span>
                      <div className="rs-input">
                        <IconCalendar />
                        <input type="date" value={form.tanggalLahir} onChange={updateField("tanggalLahir")} />
                      </div>
                    </label>
                    <label className="rs-field">
                      <span>Jenis Kelamin *</span>
                      <div className="rs-input">
                        <IconGender />
                        <select value={form.jenisKelamin} onChange={updateField("jenisKelamin")}>
                          <option value="">Pilih jenis kelamin</option>
                          <option value="L">Laki-laki</option>
                          <option value="P">Perempuan</option>
                        </select>
                      </div>
                    </label>
                  </div>
                </section>

                <section className="rs-card rs-card--purple">
                  <div className="rs-card__head">
                    <div className="rs-card__heading">
                      <span className="rs-card__icon rs-card__icon--purple">
                        <IconSchool />
                      </span>
                      <div>
                        <h2>Data Akademik</h2>
                        <p>Informasi sekolah dan pendidikan</p>
                      </div>
                    </div>
                    <span className="rs-step rs-step--purple">Langkah 2</span>
                  </div>
                  <div className="rs-grid">
                    <label className="rs-field">
                      <span>Tingkat Pendidikan *</span>
                      <div className="rs-input">
                        <IconSchool />
                        <select value={form.tingkat} onChange={updateField("tingkat")}>
                          <option value="">Pilih tingkat</option>
                          <option value="sd">SD</option>
                          <option value="smp">SMP</option>
                        </select>
                      </div>
                    </label>
                    <label className="rs-field">
                      <span>Asal Sekolah *</span>
                      <div className="rs-input">
                        <IconSchool />
                        <input
                          type="text"
                          placeholder="Contoh: SMPN 1 Jakarta"
                          value={form.asalSekolah}
                          onChange={updateField("asalSekolah")}
                        />
                      </div>
                    </label>
                    <label className="rs-field rs-field--full">
                      <span>Kota/Kabupaten *</span>
                      <div className="rs-input">
                        <IconCity />
                        <input
                          type="text"
                          placeholder="Contoh: Jakarta Selatan"
                          value={form.kota}
                          onChange={updateField("kota")}
                        />
                      </div>
                    </label>
                  </div>
                </section>

                <section className="rs-card rs-card--red">
                  <div className="rs-card__head">
                    <div className="rs-card__heading">
                      <span className="rs-card__icon rs-card__icon--red">
                        <IconLock />
                      </span>
                      <div>
                        <h2>Kredensial Akun</h2>
                        <p>Detail login siswa</p>
                      </div>
                    </div>
                    <span className="rs-step rs-step--red">Langkah 3</span>
                  </div>
                  <div className="rs-grid">
                    <label className="rs-field">
                      <span>Alamat Email *</span>
                      <div className="rs-input">
                        <IconEmail />
                        <input
                          type="email"
                          placeholder="siswa@contoh.com"
                          value={form.email}
                          onChange={updateField("email")}
                        />
                      </div>
                    </label>
                    <label className="rs-field">
                      <span>Kata Sandi Default *</span>
                      <div className="rs-input">
                        <IconLock />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={form.password}
                          onChange={updateField("password")}
                        />
                        <button
                          type="button"
                          className="rs-input__eye"
                          onClick={() => setShowPassword((prev) => !prev)}
                          aria-label="Tampilkan sandi"
                        >
                          <IconEye />
                        </button>
                      </div>
                    </label>
                    <p className="rs-hint rs-field--full">
                      <IconLock />
                      Siswa diwajibkan mengganti sandi saat login pertama.
                    </p>
                  </div>
                </section>
              </form>
            </div>

            <aside className="rs-side">
              <div className="rs-card rs-progress">
                <h2>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 14V5C5 3.9 5.9 3 7 3C8.1 3 9 3.9 9 5V11C9 12.1 9.9 13 11 13C12.1 13 13 12.1 13 11V4" stroke="#004AC6" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  Status Registrasi
                </h2>
                <div className="rs-steps">
                  <div className="rs-steps__item">
                    <div className="rs-steps__marker">
                      <span className="rs-steps__dot rs-steps__dot--active">
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                          <path d="M1 3.5L3 5.5L7 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="rs-steps__line" />
                    </div>
                    <div>
                      <p className="rs-steps__title rs-steps__title--active">Informasi Pribadi</p>
                      <p className="rs-steps__desc">Sedang diisi...</p>
                    </div>
                  </div>
                  <div className="rs-steps__item">
                    <div className="rs-steps__marker">
                      <span className="rs-steps__dot">2</span>
                      <span className="rs-steps__line" />
                    </div>
                    <div>
                      <p className="rs-steps__title">Data Akademik</p>
                      <p className="rs-steps__desc">Menunggu input</p>
                    </div>
                  </div>
                  <div className="rs-steps__item">
                    <div className="rs-steps__marker">
                      <span className="rs-steps__dot">3</span>
                    </div>
                    <div>
                      <p className="rs-steps__title">Kredensial Akun</p>
                      <p className="rs-steps__desc">Menunggu input</p>
                    </div>
                  </div>
                </div>

                <div className="rs-preview">
                  <div className="rs-preview__avatar">
                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                      <path d="M2 22V8C2 6.9 2.9 6 4 6H8L10 3H18L20 6H24C25.1 6 26 6.9 26 8V22H2Z" stroke="#737686" strokeWidth="1.4" strokeLinejoin="round" />
                      <circle cx="14" cy="14" r="5" stroke="#737686" strokeWidth="1.4" />
                    </svg>
                    <span>UNGGAH FOTO</span>
                    <span className="rs-preview__badge">
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <path d="M5 0L6.1 3.8H10L6.9 6L8 9.8L5 7.5L2 9.8L3.1 6L0 3.8H3.9L5 0Z" fill="white" />
                      </svg>
                    </span>
                  </div>
                  <p className="rs-preview__name">Nama Siswa</p>
                  <p className="rs-preview__meta">
                    <IconSchool />
                    Tingkat - Asal Sekolah
                  </p>
                  <div className="rs-preview__id">
                    <span>ID SISWA</span>
                    <p>STKA-2023-XXXX</p>
                  </div>
                </div>
              </div>

              <div className="rs-card rs-plan">
                <h2>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="14" height="12" rx="1.5" stroke="#006229" strokeWidth="1.3" />
                    <path d="M1 9H15" stroke="#006229" strokeWidth="1.3" />
                  </svg>
                  Paket Langganan
                </h2>

                <button
                  type="button"
                  className={`rs-plan-option${plan === "basic" ? " rs-plan-option--active" : ""}`}
                  onClick={() => setPlan("basic")}
                >
                  <div className="rs-plan-option__top">
                    <p>Standar Basic</p>
                    <span className={`rs-radio${plan === "basic" ? " rs-radio--checked" : ""}`} />
                  </div>
                  <p className="rs-plan-option__desc">Akses materi standar &amp; latihan soal harian.</p>
                </button>

                <button
                  type="button"
                  className={`rs-plan-option rs-plan-option--premium${plan === "ultra" ? " rs-plan-option--active" : ""}`}
                  onClick={() => setPlan("ultra")}
                >
                  <div className="rs-plan-option__top">
                    <div className="rs-plan-option__title">
                      <p>Ultra Premium</p>
                      <span className="rs-pro-badge">PRO</span>
                    </div>
                    <span className={`rs-radio rs-radio--green${plan === "ultra" ? " rs-radio--checked" : ""}`} />
                  </div>
                  <p className="rs-plan-option__desc">Tryout nasional, video eksklusif &amp; mentor pribadi 1-on-1.</p>
                </button>
              </div>
            </aside>
          </div>

          <div className="rs-actions">
            <button type="button" className="rs-btn rs-btn--outline">Batal</button>
            <button type="button" className="rs-btn rs-btn--primary">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path d="M1 11V9.5C1 8.7 1.6 8 2.4 8H7.6C8.4 8 9 8.7 9 9.5V11" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                <circle cx="5" cy="4" r="2.5" stroke="white" strokeWidth="1.3" />
                <path d="M11 3V8M13 5.5H9" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              Daftarkan Siswa Sekarang
            </button>
          </div>
        </div>

        <AdminFooter />
      </div>
    </div>
  );
}

export default RegistrasiSiswaAdmin;
