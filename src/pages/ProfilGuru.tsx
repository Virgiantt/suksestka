import { useState } from "react";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/ProfilGuru.css";

const avatarSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/251a2c84445188bae55bc69cd5c71bd0450741f0?width=320";

const stats = [
  { key: "siswa", value: "1,240", label: "Siswa Diajar" },
  { key: "materi", value: "85", label: "Materi Dibuat" },
  { key: "rating", value: "4.9/5", label: "Rating Pengajar" },
  { key: "jam", value: "420", label: "Jam Mengajar" },
];

const achievements = [
  { key: "top", title: "Top Contributor 2024", desc: "Kontributor Bank Soal Teraktif", tone: "amber" as const },
  { key: "ai", title: "AI Curriculum Expert", desc: "Sertifikasi Integrasi AI Gen-1", tone: "purple" as const },
  { key: "kemdikbud", title: "Kemdikbud Certified", desc: "Pengajar Tersertifikasi Nasional", tone: "green" as const },
  {
    key: "inovator",
    title: "Inovator Pembelajaran 2024",
    desc: "Diberikan atas pengembangan modul interaktif berbasis AI terbanyak.",
    tone: "blue" as const,
  },
];

const activities = [
  {
    key: "kuis",
    time: "Hari ini, 10:30 WIB",
    title: "Memperbarui Kuis Biologi",
    desc: "Menambahkan 15 soal HOTS baru untuk materi Genetika.",
    tone: "blue" as const,
  },
  {
    key: "video",
    time: "Kemarin, 14:15 WIB",
    title: "Menambahkan Video Pembelajaran",
    desc: 'Mengunggah modul "Ikatan Kimia Dasar" (Part 2).',
    tone: "purple" as const,
  },
  {
    key: "mentoring",
    time: "3 Hari lalu",
    title: "Sesi Live Mentoring Selesai",
    desc: "Dihadiri oleh 45 siswa kelas XII MIPA.",
    tone: "green" as const,
  },
];

function ProfilGuru() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="teacher-dashboard profil-guru">
      <TeacherSidebar active="Profil" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content profil-guru__content">
          <section className="pg-cover">
            <div className="pg-cover__avatar-wrap">
              <img src={avatarSrc} alt="Bu Rina" className="pg-cover__avatar" />
              <span className="pg-cover__status" />
            </div>
            <div className="pg-cover__body">
              <div className="pg-cover__name-row">
                <h1>Bu Rina, M.Pd.</h1>
                <span className="pg-cover__badge">Spesialis Biologi &amp; Kimia</span>
              </div>
              <p className="pg-cover__sub">SD/SMP Prestasi Bangsa | Senior Educator</p>
            </div>
            <div className="pg-cover__actions">
              <button type="button" className="pg-btn pg-btn--primary">
                Share Profile
              </button>
              <button type="button" className="pg-icon-btn" aria-label="Menu lainnya">
                ⋯
              </button>
            </div>
          </section>

          <div className="pg-layout">
            <div className="pg-left">
              <section className="pg-card">
                <h2>Statistik Mengajar</h2>
                <div className="pg-stats">
                  {stats.map((stat) => (
                    <div className="pg-stat" key={stat.key}>
                      <p className="pg-stat__value">{stat.value}</p>
                      <p className="pg-stat__label">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="pg-card">
                <div className="pg-card__head">
                  <h2>Prestasi</h2>
                  <button type="button">Lihat Semua</button>
                </div>
                <div className="pg-achievements">
                  {achievements.map((item) => (
                    <div className={`pg-achievement pg-achievement--${item.tone}`} key={item.key}>
                      <span className={`pg-achievement__icon pg-achievement__icon--${item.tone}`} />
                      <div>
                        <p className="pg-achievement__title">{item.title}</p>
                        <p className="pg-achievement__desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="pg-right">
              <section className="pg-card">
                <div className="pg-card__head">
                  <h2>Informasi Pribadi</h2>
                  <button type="button" className="pg-icon-btn pg-icon-btn--sm" aria-label="Edit">
                    ✎
                  </button>
                </div>
                <div className="pg-info-grid">
                  <div className="pg-info-field">
                    <label>Nama Lengkap</label>
                    <p>Rina Herawati, S.Pd., M.Pd.</p>
                  </div>
                  <div className="pg-info-field">
                    <label>Ganti Email</label>
                    <div className="pg-info-field__row">
                      <input type="email" placeholder="Email Baru" />
                      <button type="button" className="pg-btn pg-btn--primary pg-btn--sm">
                        Simpan
                      </button>
                    </div>
                  </div>
                  <div className="pg-info-field">
                    <label>Nomor Telepon</label>
                    <p>+62 812 3456 7890</p>
                  </div>
                  <div className="pg-info-field">
                    <label>Lokasi / Zona Waktu</label>
                    <p>Jakarta, Indonesia (WIB)</p>
                  </div>
                  <div className="pg-info-field pg-info-field--full">
                    <label>Bio Pendek</label>
                    <div className="pg-bio">
                      Berdedikasi untuk membuat konsep Biologi dan Kimia yang kompleks menjadi mudah dipahami.
                      Percaya bahwa setiap siswa memiliki potensi untuk unggul di bidang STEM. Telah membantu lebih
                      dari 500 siswa lulus ke PTN favorit melalui platform ini.
                    </div>
                  </div>
                </div>
              </section>

              <div className="pg-row">
                <section className="pg-card">
                  <h2>Aktivitas Terkini</h2>
                  <div className="pg-timeline">
                    {activities.map((activity) => (
                      <div className="pg-timeline__item" key={activity.key}>
                        <span className={`pg-timeline__dot pg-timeline__dot--${activity.tone}`} />
                        <div>
                          <p className="pg-timeline__time">{activity.time}</p>
                          <p className="pg-timeline__title">{activity.title}</p>
                          <p className="pg-timeline__desc">{activity.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button type="button" className="pg-btn pg-btn--outline pg-btn--block">
                    Muat Lebih Banyak
                  </button>
                </section>

                <section className="pg-card">
                  <h2>Pengaturan Akun</h2>
                  <div className="pg-password">
                    <h3>Ganti Password</h3>
                    <div className="pg-info-field">
                      <label>Password Saat Ini</label>
                      <input type="password" placeholder="••••••••" />
                    </div>
                    <div className="pg-info-field">
                      <label>Password Baru</label>
                      <input type="password" placeholder="••••••••" />
                    </div>
                    <div className="pg-info-field">
                      <label>Konfirmasi Password Baru</label>
                      <input type="password" placeholder="••••••••" />
                    </div>
                    <button type="button" className="pg-btn pg-btn--primary pg-btn--block">
                      Simpan Password
                    </button>
                  </div>
                  <div className="pg-logout">
                    <div>
                      <p className="pg-logout__title">Keluar dari Akun</p>
                      <p className="pg-logout__desc">Sesi Anda akan diakhiri dengan aman</p>
                    </div>
                    <span>›</span>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <TeacherFooter />
      </div>
    </div>
  );
}

export default ProfilGuru;
