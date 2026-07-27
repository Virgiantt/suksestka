import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/MateriGuru.css";

const mascotImageSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/cfa25148629286b5f5231bf1ae7308a2cadff201?width=256";

type MaterialStatus = "published" | "draft" | "archived";

type Material = {
  key: string;
  title: string;
  subject: string;
  status: MaterialStatus;
  statusLabel: string;
  accent: "blue" | "green" | "orange" | "gray";
  icon: React.ReactNode;
  completion: string;
  students: string;
  avgScore: string;
  avatars?: string[];
  extraAvatars?: string;
  footer:
    | { type: "avatars" }
    | { type: "continue"; updatedAt: string }
    | { type: "archived"; date: string };
};

const materials: Material[] = [
  {
    key: "matematika-kpk-fpb",
    title: "Matematika Dasar (KPK & FPB)",
    subject: "Matematika • Kelas 5 SD",
    status: "published",
    statusLabel: "Published",
    accent: "blue",
    icon: (
      <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 16V14L6.5 8L0 2V0H12V3H4.775L10.15 8L4.775 13H12V16H0Z" fill="#004AC6" />
      </svg>
    ),
    completion: "92%",
    students: "245",
    avgScore: "88/100",
    avatars: [
      "https://api.builder.io/api/v1/image/assets/TEMP/a3686ed658af2acb6682965e755d7f03b2b5680c?width=56",
      "https://api.builder.io/api/v1/image/assets/TEMP/9688578b1e078723067a856cc3ff62cd666c227f?width=56",
      "https://api.builder.io/api/v1/image/assets/TEMP/96fefabfe8b2e02249d6972b170fa5673f3bc25d?width=56",
    ],
    extraAvatars: "+42",
    footer: { type: "avatars" },
  },
  {
    key: "ipa-ekosistem",
    title: "IPA Terpadu: Ekosistem",
    subject: "Biologi • Kelas 7 SMP",
    status: "draft",
    statusLabel: "Draft",
    accent: "green",
    icon: (
      <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 19V17H5V15C3.61667 15 2.4375 14.5125 1.4625 13.5375C0.4875 12.5625 0 11.3833 0 10C0 9.05 0.241667 8.175 0.725 7.375C1.20833 6.575 1.875 5.96667 2.725 5.55C2.65833 5.91667 2.67083 6.275 2.7625 6.625C2.85417 6.975 3 7.30833 3.2 7.625C2.81667 7.89167 2.52083 8.23333 2.3125 8.65C2.10417 9.06667 2 9.51667 2 10C2 10.8333 2.29167 11.5417 2.875 12.125C3.45833 12.7083 4.16667 13 5 13H13V15H8V17H14V19H0ZM9 10.1L8.7 9.15L7.75 9.5L7.25 8.175C7.58333 7.90833 7.84167 7.5875 8.025 7.2125C8.20833 6.8375 8.3 6.43333 8.3 6C8.3 5.21667 8.025 4.55417 7.475 4.0125C6.925 3.47083 6.25 3.2 5.45 3.2L5 1.95L5.95 1.6L5.6 0.7L7.5 0L7.8 0.95L8.75 0.6L11.5 8.1L10.55 8.45L10.9 9.4L9 10.1ZM5.5 7.8C5 7.8 4.575 7.625 4.225 7.275C3.875 6.925 3.7 6.5 3.7 6C3.7 5.5 3.875 5.075 4.225 4.725C4.575 4.375 5 4.2 5.5 4.2C6 4.2 6.425 4.375 6.775 4.725C7.125 5.075 7.3 5.5 7.3 6C7.3 6.5 7.125 6.925 6.775 7.275C6.425 7.625 6 7.8 5.5 7.8Z"
          fill="#10B981"
        />
      </svg>
    ),
    completion: "--",
    students: "0",
    avgScore: "--",
    footer: { type: "continue", updatedAt: "Diperbarui 2j lalu" },
  },
  {
    key: "fisika-wujud-zat",
    title: "Fisika Dasar: Wujud Zat",
    subject: "Fisika • Kelas 8 SMP",
    status: "published",
    statusLabel: "Published",
    accent: "orange",
    icon: (
      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.0285 18C1.1785 18 0.574338 17.6208 0.216005 16.8625C-0.142329 16.1042 -0.0548287 15.4 0.478505 14.75L6.0285 8V2H5.0285C4.74517 2 4.50767 1.90417 4.316 1.7125C4.12434 1.52083 4.0285 1.28333 4.0285 1C4.0285 0.716667 4.12434 0.479167 4.316 0.2875C4.50767 0.0958333 4.74517 0 5.0285 0H13.0285C13.3118 0 13.5493 0.0958333 13.741 0.2875C13.9327 0.479167 14.0285 0.716667 14.0285 1C14.0285 1.28333 13.9327 1.52083 13.741 1.7125C13.5493 1.90417 13.3118 2 13.0285 2H12.0285V8L17.5785 14.75C18.1118 15.4 18.1993 16.1042 17.841 16.8625C17.4827 17.6208 16.8785 18 16.0285 18H2.0285Z"
          fill="#FB923C"
        />
      </svg>
    ),
    completion: "78%",
    students: "189",
    avgScore: "76/100",
    avatars: [
      "https://api.builder.io/api/v1/image/assets/TEMP/1595e6aec38f1a882a87f2f49f9b54d3375b5016?width=56",
      "https://api.builder.io/api/v1/image/assets/TEMP/7ade7108834fddf40058aa1475df1b830144688e?width=56",
    ],
    extraAvatars: "+28",
    footer: { type: "avatars" },
  },
  {
    key: "ips-sejarah-kemerdekaan",
    title: "IPS: Sejarah Kemerdekaan",
    subject: "Sejarah • Kelas 6 SD",
    status: "archived",
    statusLabel: "Archived",
    accent: "gray",
    icon: (
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.5 16C5.95 16 5.47917 15.8042 5.0875 15.4125C4.69583 15.0208 4.5 14.55 4.5 14V11H7.5V8.75C6.91667 8.71667 6.3625 8.5875 5.8375 8.3625C5.3125 8.1375 4.83333 7.8 4.4 7.35V6.25H3.25L0 3C0.6 2.23333 1.34167 1.69167 2.225 1.375C3.10833 1.05833 4 0.9 4.9 0.9C5.35 0.9 5.7875 0.933333 6.2125 1C6.6375 1.06667 7.06667 1.19167 7.5 1.375V0H19.5V13C19.5 13.8333 19.2083 14.5417 18.625 15.125C18.0417 15.7083 17.3333 16 16.5 16H6.5ZM9.5 11H15.5V13C15.5 13.2833 15.5958 13.5208 15.7875 13.7125C15.9792 13.9042 16.2167 14 16.5 14C16.7833 14 17.0208 13.9042 17.2125 13.7125C17.4042 13.5208 17.5 13.2833 17.5 13V2H9.5V2.6L15.5 8.6V10H14.1L11.25 7.15L11.05 7.35C10.8167 7.58333 10.5708 7.79167 10.3125 7.975C10.0542 8.15833 9.78333 8.3 9.5 8.4V11ZM4.1 4.25H6.4V6.4C6.6 6.53333 6.80833 6.625 7.025 6.675C7.24167 6.725 7.46667 6.75 7.7 6.75C8.08333 6.75 8.42917 6.69167 8.7375 6.575C9.04583 6.45833 9.35 6.25 9.65 5.95L9.85 5.75L8.45 4.35C7.96667 3.86667 7.425 3.50417 6.825 3.2625C6.225 3.02083 5.58333 2.9 4.9 2.9C4.56667 2.9 4.25 2.925 3.95 2.975C3.65 3.025 3.35 3.1 3.05 3.2L4.1 4.25Z"
          fill="#737686"
        />
      </svg>
    ),
    completion: "98%",
    students: "450",
    avgScore: "91/100",
    footer: { type: "archived", date: "Archived on 12 Oct 2023" },
  },
];

const activities = [
  {
    key: "ipa-update",
    accent: "blue",
    icon: (
      <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.66667 13.3333V11.2833L10.35 7.61667C10.45 7.51667 10.5611 7.44444 10.6833 7.4C10.8056 7.35556 10.9278 7.33333 11.05 7.33333C11.1833 7.33333 11.3111 7.35833 11.4333 7.40833C11.5556 7.45833 11.6667 7.53333 11.7667 7.63333L12.3833 8.25C12.4722 8.35 12.5417 8.46111 12.5917 8.58333C12.6417 8.70555 12.6667 8.82778 12.6667 8.95C12.6667 9.07222 12.6444 9.19722 12.6 9.325C12.5556 9.45278 12.4833 9.56667 12.3833 9.66667L8.71667 13.3333H6.66667ZM1.33333 13.3333C0.966667 13.3333 0.652778 13.2028 0.391667 12.9417C0.130556 12.6806 0 12.3667 0 12V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H6.66667L10.6667 4V6H9.33333V4.66667H6V1.33333H1.33333V12H5.33333V13.3333H1.33333Z"
          fill="#004AC6"
        />
      </svg>
    ),
    text: (
      <>
        Modul <strong>IPA Terpadu: Ekosistem</strong> diperbarui.
      </>
    ),
    time: "2 jam yang lalu",
  },
  {
    key: "fisika-publish",
    accent: "green",
    icon: (
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.66667 10.6667V5.23333L2.93333 6.96667L2 6L5.33333 2.66667L8.66667 6L7.73333 6.96667L6 5.23333V10.6667H4.66667ZM0 3.33333V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H9.33333C9.7 0 10.0139 0.130556 10.275 0.391667C10.5361 0.652778 10.6667 0.966667 10.6667 1.33333V3.33333H9.33333V1.33333H1.33333V3.33333H0Z"
          fill="#10B981"
        />
      </svg>
    ),
    text: (
      <>
        Kuis <strong>Fisika Dasar: Wujud Zat</strong> dipublikasikan.
      </>
    ),
    time: "Kemarin, 14:30",
  },
  {
    key: "matematika-comments",
    accent: "amber",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.3333 13.3333L10.6667 10.6667H4C3.63333 10.6667 3.31944 10.5361 3.05833 10.275C2.79722 10.0139 2.66667 9.7 2.66667 9.33333V8.66667H10C10.3667 8.66667 10.6806 8.53611 10.9417 8.275C11.2028 8.01389 11.3333 7.7 11.3333 7.33333V2.66667H12C12.3667 2.66667 12.6806 2.79722 12.9417 3.05833C13.2028 3.31944 13.3333 3.63333 13.3333 4V13.3333ZM1.33333 6.78333L2.11667 6H8.66667V1.33333H1.33333V6.78333ZM0 10V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H8.66667C9.03333 0 9.34722 0.130556 9.60833 0.391667C9.86944 0.652778 10 0.966667 10 1.33333V6C10 6.36667 9.86944 6.68056 9.60833 6.94167C9.34722 7.20278 9.03333 7.33333 8.66667 7.33333H2.66667L0 10Z"
          fill="#F59E0B"
        />
      </svg>
    ),
    text: (
      <>
        5 komentar baru di <strong>Matematika Dasar (KPK & FPB)</strong>.
      </>
    ),
    time: "Kemarin, 09:15",
  },
];

function MateriGuru() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [publishNotificationVisible, setPublishNotificationVisible] = useState(false);

  useEffect(() => {
    if (location.state?.publishSuccess) {
      setPublishNotificationVisible(true);
    }
  }, [location.state]);

  return (
    <div className="teacher-dashboard materi-guru">
      <TeacherSidebar active="Materi" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content materi-guru__content">
          {publishNotificationVisible ? (
            <div className="materi-guru__notification" role="status">
              <div>
                <strong>Materi berhasil dipublish</strong>
                <span>Materi sekarang dapat diakses oleh siswa.</span>
              </div>
              <button
                type="button"
                aria-label="Tutup notifikasi"
                onClick={() => setPublishNotificationVisible(false)}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          ) : null}

          <header className="materi-guru__header">
            <div className="materi-guru__heading">
              <h1>Manajemen Materi</h1>
              <p>Kelola kurikulum, modul pembelajaran, dan aset evaluasi secara menyeluruh.</p>
            </div>
            <div className="materi-guru__header-actions">
              <div className="materi-guru__filter">
                <select aria-label="Filter mata pelajaran" defaultValue="all">
                  <option value="all">Semua Mata Pelajaran</option>
                  <option value="matematika">Matematika</option>
                  <option value="biologi">Biologi</option>
                  <option value="fisika">Fisika</option>
                  <option value="sejarah">Sejarah</option>
                </select>
                <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83333 10V8.33333H9.16667V10H5.83333ZM2.5 5.83333V4.16667H12.5V5.83333H2.5ZM0 1.66667V0H15V1.66667H0Z" fill="#C3C6D7" />
                </svg>
              </div>
              <Link to="/materi-guru/tambah" className="materi-guru__add-btn">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="white" />
                </svg>
                Tambah Materi
              </Link>
            </div>
          </header>

          <section className="materi-guru__stats">
            <article className="materi-stat materi-stat--blue">
              <div className="materi-stat__head">
                <span className="materi-stat__icon">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 22H16C16.55 22 17.0208 21.8042 17.4125 21.4125C17.8042 21.0208 18 20.55 18 20V8L12 2H4C3.45 2 2.97917 2.19583 2.5875 2.5875C2.19583 2.97917 2 3.45 2 4V20C2 20.55 2.19583 21.0208 2.5875 21.4125C2.97917 21.8042 3.45 22 4 22ZM16 20H4V4H11V9H16V20Z"
                      fill="#004AC6"
                    />
                  </svg>
                </span>
                <span className="materi-stat__badge materi-stat__badge--green">
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.816667 7L0 6.18333L4.31667 1.8375L6.65 4.17083L9.68333 1.16667H8.16667V0H11.6667V3.5H10.5V1.98333L6.65 5.83333L4.31667 3.5L0.816667 7Z" fill="#10B981" />
                  </svg>
                  +12% mg ini
                </span>
              </div>
              <p className="materi-stat__label">Total Materi Aktif</p>
              <div className="materi-stat__value-row">
                <p className="materi-stat__value">124</p>
                <svg className="materi-stat__sparkline" width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 32L12.8 24L25.6 28L38.4 12L51.2 16L64 4" stroke="#004AC6" strokeWidth="1.44" />
                </svg>
              </div>
            </article>

            <article className="materi-stat materi-stat--purple">
              <div className="materi-stat__head">
                <span className="materi-stat__icon">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                      fill="#8B5CF6"
                    />
                  </svg>
                </span>
                <span className="materi-stat__badge materi-stat__badge--gray">Avg. Score: 85</span>
              </div>
              <p className="materi-stat__label">Rata-rata Penyelesaian</p>
              <p className="materi-stat__value">88%</p>
              <div className="materi-stat__progress-track">
                <div className="materi-stat__progress-fill" style={{ width: "88%" }} />
              </div>
            </article>

            <article className="materi-stat materi-stat--orange">
              <div className="materi-stat__head">
                <span className="materi-stat__icon">
                  <svg width="14" height="18" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 21C12 21.8667 12.175 22.6875 12.525 23.4625C12.875 24.2375 13.375 24.9167 14.025 25.5C14.0083 25.4167 14 25.3417 14 25.275C14 25.2083 14 25.1333 14 25.05C14 24.5167 14.1 24.0167 14.3 23.55C14.5 23.0833 14.7917 22.6583 15.175 22.275L18 19.5L20.825 22.275C21.2083 22.6583 21.5 23.0833 21.7 23.55C21.9 24.0167 22 24.5167 22 25.05C22 25.1333 22 25.2083 22 25.275C22 25.3417 21.9917 25.4167 21.975 25.5C22.625 24.9167 23.125 24.2375 23.475 23.4625C23.825 22.6875 24 21.8667 24 21C24 20.1667 23.8458 19.3792 23.5375 18.6375C23.2292 17.8958 22.7833 17.2333 22.2 16.65C21.8667 16.8667 21.5167 17.0292 21.15 17.1375C20.7833 17.2458 20.4083 17.3 20.025 17.3C18.9917 17.3 18.0958 16.9583 17.3375 16.275C16.5792 15.5917 16.1417 14.75 16.025 13.75C15.375 14.3 14.8 14.8708 14.3 15.4625C13.8 16.0542 13.3792 16.6542 13.0375 17.2625C12.6958 17.8708 12.4375 18.4917 12.2625 19.125C12.0875 19.7583 12 20.3833 12 21ZM18 22.3L16.575 23.7C16.3917 23.8833 16.25 24.0917 16.15 24.325C16.05 24.5583 16 24.8 16 25.05C16 25.5833 16.1958 26.0417 16.5875 26.425C16.9792 26.8083 17.45 27 18 27C18.55 27 19.0208 26.8083 19.4125 26.425C19.8042 26.0417 20 25.5833 20 25.05C20 24.7833 19.95 24.5375 19.85 24.3125C19.75 24.0875 19.6083 23.8833 19.425 23.7L18 22.3ZM18 10V13.3C18 13.8667 18.1958 14.3417 18.5875 14.725C18.9792 15.1083 19.4583 15.3 20.025 15.3C20.325 15.3 20.6042 15.2375 20.8625 15.1125C21.1208 14.9875 21.35 14.8 21.55 14.55L22 14C23.2333 14.7 24.2083 15.675 24.925 16.925C25.6417 18.175 26 19.5333 26 21C26 23.2333 25.225 25.125 23.675 26.675C22.125 28.225 20.2333 29 18 29C15.7667 29 13.875 28.225 12.325 26.675C10.775 25.125 10 23.2333 10 21C10 18.85 10.7208 16.8083 12.1625 14.875C13.6042 12.9417 15.55 11.3167 18 10Z"
                      fill="#FB923C"
                    />
                  </svg>
                </span>
                <span className="materi-stat__badge materi-stat__badge--orange">320 Siswa Aktif</span>
              </div>
              <p className="materi-stat__label">Engagement Tertinggi</p>
              <p className="materi-stat__value materi-stat__value--md">Matematika SD</p>
              <p className="materi-stat__subtext">+45 pendaftar baru</p>
            </article>

            <article className="materi-stat materi-stat--green">
              <div className="materi-stat__head">
                <span className="materi-stat__icon">
                  <svg width="14" height="18" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.95 23.55L22.6 17.9L21.175 16.475L16.95 20.7L14.85 18.6L13.425 20.025L16.95 23.55ZM18 30C15.6833 29.4167 13.7708 28.0875 12.2625 26.0125C10.7542 23.9375 10 21.6333 10 19.1V13L18 10L26 13V19.1C26 21.6333 25.2458 23.9375 23.7375 26.0125C22.2292 28.0875 20.3167 29.4167 18 30Z"
                      fill="#10B981"
                    />
                  </svg>
                </span>
                <span className="materi-stat__badge materi-stat__badge--green">Optimal</span>
              </div>
              <div className="materi-stat__health">
                <div>
                  <p className="materi-stat__label">Kesehatan Konten</p>
                  <p className="materi-stat__value">94%</p>
                </div>
                <svg className="materi-stat__ring" width="56" height="52" viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="M5.01978 25.99C5.01978 13.3069 15.3169 3.00981 28 3.00981C40.6831 3.00981 50.9802 13.3069 50.9802 25.99C50.9802 38.6731 40.6831 48.9702 28 48.9702C15.3169 48.9702 5.01978 38.6731 5.01978 25.99"
                      stroke="#E6E8EA"
                      strokeWidth="4.33167"
                      strokeDasharray="144.39 144.39"
                    />
                    <path
                      d="M5.01978 25.99C5.01978 13.3069 15.3169 3.00981 28 3.00981C40.6831 3.00981 50.9802 13.3069 50.9802 25.99C50.9802 38.6731 40.6831 48.9702 28 48.9702C15.3169 48.9702 5.01978 38.6731 5.01978 25.99"
                      stroke="#10B981"
                      strokeWidth="4.33167"
                      strokeLinecap="round"
                      strokeDasharray="135.73 144.39"
                    />
                  </g>
                </svg>
              </div>
            </article>
          </section>

          <div className="materi-guru__body">
            <div className="materi-guru__main">
              <div className="materi-guru__section-head">
                <h2>Pustaka Materi</h2>
                <div className="materi-guru__view-toggle">
                  <button
                    type="button"
                    className={viewMode === "grid" ? "is-active" : ""}
                    aria-label="Tampilan grid"
                    onClick={() => setViewMode("grid")}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6.66667V0H6.66667V6.66667H0ZM0 15V8.33333H6.66667V15H0ZM8.33333 6.66667V0H15V6.66667H8.33333ZM8.33333 15V8.33333H15V15H8.33333Z" fill="currentColor" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={viewMode === "list" ? "is-active" : ""}
                    aria-label="Tampilan list"
                    onClick={() => setViewMode("list")}
                  >
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83333 11.6667H15V9.4375H5.83333V11.6667ZM1.66667 3.89583H4.16667V1.66667H1.66667V3.89583ZM1.66667 7.79167H4.16667V5.5625H1.66667V7.79167ZM1.66667 11.6667H4.16667V9.4375H1.66667V11.6667ZM5.83333 7.79167H15V5.5625H5.83333V7.79167ZM5.83333 3.89583H15V1.66667H5.83333V3.89583Z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className={`materi-guru__grid materi-guru__grid--${viewMode}`}>
                {materials.map((material) => (
                  <article
                    className="materi-card"
                    key={material.key}
                    role="link"
                    tabIndex={0}
                    onClick={() => navigate("/materi-guru/detail")}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        navigate("/materi-guru/detail");
                      }
                    }}
                  >
                    <div className="materi-card__top">
                      <div className="materi-card__identity">
                        <span className={`materi-card__icon materi-card__icon--${material.accent}`}>{material.icon}</span>
                        <div>
                          <h3>
                            <Link to="/materi-guru/detail">{material.title}</Link>
                          </h3>
                          <p>{material.subject}</p>
                        </div>
                      </div>
                      <span className={`materi-card__status materi-card__status--${material.status}`}>
                        {material.statusLabel}
                      </span>
                    </div>

                    <div className={`materi-card__metrics${material.status === "archived" ? " materi-card__metrics--muted" : ""}`}>
                      <div>
                        <span>Completion</span>
                        <strong>{material.completion}</strong>
                      </div>
                      <div>
                        <span>Students</span>
                        <strong>{material.students}</strong>
                      </div>
                      <div>
                        <span>Avg. Score</span>
                        <strong>{material.avgScore}</strong>
                      </div>
                    </div>

                    <div className="materi-card__footer">
                      {material.footer.type === "avatars" ? (
                        <>
                          <div className="materi-card__avatars">
                            {material.avatars?.map((src, index) => (
                              <img src={src} alt="" key={index} />
                            ))}
                            {material.extraAvatars ? (
                              <span className="materi-card__avatar-more">{material.extraAvatars}</span>
                            ) : null}
                          </div>
                          <div className="materi-card__actions">
                            <button type="button" aria-label="Lihat statistik">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 10.5H4.5V6.75H3V10.5ZM9 10.5H10.5V3H9V10.5ZM6 10.5H7.5V8.25H6V10.5ZM6 6.75H7.5V5.25H6V6.75ZM1.5 13.5C1.0875 13.5 0.734375 13.3531 0.440625 13.0594C0.146875 12.7656 0 12.4125 0 12V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H12C12.4125 0 12.7656 0.146875 13.0594 0.440625C13.3531 0.734375 13.5 1.0875 13.5 1.5V12C13.5 12.4125 13.3531 12.7656 13.0594 13.0594C12.7656 13.3531 12.4125 13.5 12 13.5H1.5Z" fill="#434655" />
                              </svg>
                            </button>
                            <button type="button" aria-label="Edit materi">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 12H2.56875L9.9 4.66875L8.83125 3.6L1.5 10.9312V12ZM0 13.5V10.3125L9.9 0.43125C10.05 0.29375 10.2156 0.1875 10.3969 0.1125C10.5781 0.0375 10.7688 0 10.9688 0C11.1687 0 11.3625 0.0375 11.55 0.1125C11.7375 0.1875 11.9 0.3 12.0375 0.45L13.0688 1.5C13.2188 1.6375 13.3281 1.8 13.3969 1.9875C13.4656 2.175 13.5 2.3625 13.5 2.55C13.5 2.75 13.4656 2.94062 13.3969 3.12188C13.3281 3.30313 13.2188 3.46875 13.0688 3.61875L3.1875 13.5H0Z" fill="#434655" />
                              </svg>
                            </button>
                          </div>
                        </>
                      ) : material.footer.type === "continue" ? (
                        <>
                          <span className="materi-card__updated">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.75833 8.575L8.575 7.75833L6.41667 5.6V2.91667H5.25V6.06667L7.75833 8.575ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667Z" fill="#737686" />
                            </svg>
                            {material.footer.updatedAt}
                          </span>
                          <button type="button" className="materi-card__continue-btn">
                            Lanjutkan
                          </button>
                        </>
                      ) : (
                        <>
                          <span className="materi-card__archived-date">{material.footer.date}</span>
                          <button type="button" aria-label="Pulihkan materi">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.75 5.25L3.75 8.25L4.8 9.3L6 8.1V11.25H7.5V8.1L8.7 9.3L9.75 8.25L6.75 5.25ZM1.5 3.75V12H12V3.75H1.5ZM1.5 13.5C1.0875 13.5 0.734375 13.3531 0.440625 13.0594C0.146875 12.7656 0 12.4125 0 12V2.64375C0 2.46875 0.028125 2.3 0.084375 2.1375C0.140625 1.975 0.225 1.825 0.3375 1.6875L1.275 0.54375C1.4125 0.36875 1.58438 0.234375 1.79062 0.140625C1.99687 0.046875 2.2125 0 2.4375 0H11.0625C11.2875 0 11.5031 0.046875 11.7094 0.140625C11.9156 0.234375 12.0875 0.36875 12.225 0.54375L13.1625 1.6875C13.275 1.825 13.3594 1.975 13.4156 2.1375C13.4719 2.3 13.5 2.46875 13.5 2.64375V12C13.5 12.4125 13.3531 12.7656 13.0594 13.0594C12.7656 13.3531 12.4125 13.5 12 13.5H1.5Z" fill="#434655" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <button type="button" className="materi-guru__load-more">
                Muat Lebih Banyak
              </button>
            </div>

            <aside className="materi-guru__aside">
              <div className="materi-guru__tip-card">
                <img src={mascotImageSrc} alt="" className="materi-guru__tip-mascot" />
                <h3>Tips Kurikulum</h3>
                <p>
                  Tambahkan kuis interaktif ke modul Matematika untuk meningkatkan engagement siswa hingga 30%!
                </p>
                <Link to="/materi-guru/insight" className="materi-guru__tip-btn">
                  Lihat Insight
                </Link>
              </div>

              <div className="materi-guru__activity-card">
                <h3>Aktivitas Terbaru</h3>
                <div className="materi-activity-list">
                  {activities.map((activity) => (
                    <div className="materi-activity-item" key={activity.key}>
                      <span className={`materi-activity-item__icon materi-activity-item__icon--${activity.accent}`}>
                        {activity.icon}
                      </span>
                      <div>
                        <p className="materi-activity-item__text">{activity.text}</p>
                        <p className="materi-activity-item__time">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button type="button" className="materi-guru__activity-link">
                  Lihat Semua Aktivitas
                </button>
              </div>
            </aside>
          </div>
        </div>

        <TeacherFooter />
      </div>
    </div>
  );
}

export default MateriGuru;
