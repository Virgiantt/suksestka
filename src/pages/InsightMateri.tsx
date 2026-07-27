import { useState } from "react";
import TeacherSidebar from "../components/pengajar/TeacherSidebar";
import TeacherTopbar from "../components/pengajar/TeacherTopbar";
import TeacherFooter from "../components/pengajar/TeacherFooter";
import "../styles/pengajar/InsightMateri.css";

type HeatmapItem = {
  key: string;
  topic: string;
  subject: string;
  value: string;
  status: string;
  accent: "green" | "orange" | "red";
};

type SentimentItem = {
  key: string;
  emoji: string;
  label: string;
  value: number;
  accent: "green" | "orange" | "red";
};

type SuggestionItem = {
  key: string;
  accent: "blue" | "purple" | "yellow";
  active?: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const heatmapItems: HeatmapItem[] = [
  { key: "aturan-rantai", topic: "Aturan Rantai", subject: "Calculus XI", value: "94%", status: "Penguasaan", accent: "green" },
  { key: "limit-trigonometri", topic: "Limit Trigonometri", subject: "Calculus XI", value: "76%", status: "Penguasaan", accent: "orange" },
  { key: "integral-parsial", topic: "Integral Parsial", subject: "Calculus XII", value: "58%", status: "Butuh Perhatian", accent: "red" },
  { key: "turunan-fungsi-aljabar", topic: "Turunan Fungsi Aljabar", subject: "Calculus XI", value: "89%", status: "Penguasaan", accent: "green" },
];

const sentiments: SentimentItem[] = [
  { key: "terinspirasi", emoji: "🤩", label: "Terinspirasi", value: 45, accent: "green" },
  { key: "tertantang", emoji: "😐", label: "Tertantang", value: 35, accent: "orange" },
  { key: "bingung", emoji: "😵", label: "Bingung", value: 20, accent: "red" },
];

const suggestions: SuggestionItem[] = [
  {
    key: "kuis-integral",
    accent: "blue",
    active: true,
    icon: (
      <svg width="17" height="18" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="27.6667" height="31.6667" rx="8" fill="#004AC6" fillOpacity="0.1" />
        <path
          d="M15 16.5833C15.1653 16.5833 15.3087 16.5226 15.4302 16.401C15.5517 16.2795 15.6125 16.1361 15.6125 15.9708C15.6125 15.8056 15.5517 15.6622 15.4302 15.5406C15.3087 15.4191 15.1653 15.3583 15 15.3583C14.8347 15.3583 14.6913 15.4191 14.5698 15.5406C14.4483 15.6622 14.3875 15.8056 14.3875 15.9708C14.3875 16.1361 14.4483 16.2795 14.5698 16.401C14.6913 16.5226 14.8347 16.5833 15 16.5833ZM14.5625 14.7167H15.4375C15.4375 14.4347 15.4667 14.2281 15.525 14.0969C15.5833 13.9656 15.7194 13.7931 15.9333 13.5792C16.225 13.2875 16.4194 13.0517 16.5167 12.8719C16.6139 12.692 16.6625 12.4806 16.6625 12.2375C16.6625 11.8 16.5094 11.4427 16.2031 11.1656C15.8969 10.8885 15.4958 10.75 15 10.75C14.6014 10.75 14.2538 10.8618 13.9573 11.0854C13.6608 11.309 13.4542 11.6056 13.3375 11.975L14.125 12.2958C14.2125 12.0528 14.3316 11.8705 14.4823 11.749C14.633 11.6274 14.8056 11.5667 15 11.5667C15.2333 11.5667 15.4229 11.6323 15.5687 11.7635C15.7146 11.8948 15.7875 12.0722 15.7875 12.2958C15.7875 12.4319 15.7486 12.5608 15.6708 12.6823C15.5931 12.8038 15.4569 12.9569 15.2625 13.1417C14.9417 13.4236 14.7448 13.6448 14.6719 13.8052C14.599 13.9656 14.5625 14.2694 14.5625 14.7167ZM11.5 18.3333C11.1792 18.3333 10.9045 18.2191 10.676 17.9906C10.4476 17.7622 10.3333 17.4875 10.3333 17.1667V10.1667C10.3333 9.84583 10.4476 9.57118 10.676 9.34271C10.9045 9.11424 11.1792 9 11.5 9H18.5C18.8208 9 19.0955 9.11424 19.324 9.34271C19.5524 9.57118 19.6667 9.84583 19.6667 10.1667V17.1667C19.6667 17.4875 19.5524 17.7622 19.324 17.9906C19.0955 18.2191 18.8208 18.3333 18.5 18.3333H11.5ZM11.5 17.1667H18.5V10.1667H11.5V17.1667ZM9.16667 20.6667C8.84583 20.6667 8.57118 20.5524 8.34271 20.324C8.11424 20.0955 8 19.8208 8 19.5V11.3333H9.16667V19.5H17.3333V20.6667H9.16667ZM11.5 10.1667V17.1667V10.1667Z"
          fill="#004AC6"
        />
      </svg>
    ),
    title: "Tambah Kuis ke Integral Parsial",
    description: "Penguasaan 58% terdeteksi. Kuis cepat dapat memperkuat konsep.",
  },
  {
    key: "perbarui-slide",
    accent: "purple",
    icon: (
      <svg width="16" height="18" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="25.3333" height="29.3333" rx="8" fill="#8B5CF6" fillOpacity="0.1" />
        <path
          d="M12.6667 18.3333C11.3639 18.3333 10.2604 17.8812 9.35625 16.9771C8.45208 16.0729 8 14.9694 8 13.6667C8 12.3639 8.45208 11.2604 9.35625 10.3563C10.2604 9.45208 11.3639 9 12.6667 9C13.3375 9 13.9792 9.13854 14.5917 9.41563C15.2042 9.69271 15.7292 10.0889 16.1667 10.6042V9H17.3333V13.0833H13.25V11.9167H15.7C15.3889 11.3722 14.9635 10.9444 14.424 10.6333C13.8844 10.3222 13.2986 10.1667 12.6667 10.1667C11.6944 10.1667 10.8681 10.5069 10.1875 11.1875C9.50694 11.8681 9.16667 12.6944 9.16667 13.6667C9.16667 14.6389 9.50694 15.4653 10.1875 16.1458C10.8681 16.8264 11.6944 17.1667 12.6667 17.1667C13.4153 17.1667 14.091 16.9528 14.6937 16.525C15.2965 16.0972 15.7194 15.5333 15.9625 14.8333H17.1875C16.9153 15.8639 16.3611 16.7049 15.525 17.3562C14.6889 18.0076 13.7361 18.3333 12.6667 18.3333Z"
          fill="#8B5CF6"
        />
      </svg>
    ),
    title: "Perbarui Slide Biologi",
    description: "Keterlibatan turun 12% pada sesi terakhir. Perbarui visual.",
  },
  {
    key: "diskusi-limit",
    accent: "yellow",
    icon: (
      <svg width="17" height="18" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="27.6667" height="31.6667" rx="8" fill="#FED01B" fillOpacity="0.3" />
        <path
          d="M19.6667 20.6667L17.3333 18.3333H11.5C11.1792 18.3333 10.9045 18.2191 10.676 17.9906C10.4476 17.7622 10.3333 17.4875 10.3333 17.1667V16.5833H16.75C17.0708 16.5833 17.3455 16.4691 17.574 16.2406C17.8024 16.0122 17.9167 15.7375 17.9167 15.4167V11.3333H18.5C18.8208 11.3333 19.0955 11.4476 19.324 11.676C19.5524 11.9045 19.6667 12.1792 19.6667 12.5V20.6667ZM9.16667 14.9354L9.85208 14.25H15.5833V10.1667H9.16667V14.9354ZM8 17.75V10.1667C8 9.84583 8.11424 9.57118 8.34271 9.34271C8.57118 9.11424 8.84583 9 9.16667 9H15.5833C15.9042 9 16.1788 9.11424 16.4073 9.34271C16.6358 9.57118 16.75 9.84583 16.75 10.1667V14.25C16.75 14.5708 16.6358 14.8455 16.4073 15.074C16.1788 15.3024 15.9042 15.4167 15.5833 15.4167H10.3333L8 17.75ZM9.16667 14.25V10.1667V14.25Z"
          fill="#735C00"
        />
      </svg>
    ),
    title: "Mulai Diskusi tentang Limit",
    description: "Sentimen 'Tertantang' tinggi. Buka utas tanya jawab.",
  },
  {
    key: "tinjau-turunan",
    accent: "blue",
    icon: (
      <svg width="16" height="18" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="27.375" height="29.3333" rx="8" fill="#004AC6" fillOpacity="0.1" />
        <path
          d="M11.7917 18.3333C11.4708 18.3333 11.1962 18.2191 10.9677 17.9906C10.7392 17.7622 10.625 17.4875 10.625 17.1667V15.4167H12.375V14.1042C12.0347 14.0847 11.7115 14.0094 11.4052 13.8781C11.099 13.7469 10.8194 13.55 10.5667 13.2875V12.6458H9.89583L8 10.75C8.35 10.3028 8.78264 9.98681 9.29792 9.80208C9.81319 9.61736 10.3333 9.525 10.8583 9.525C11.1208 9.525 11.376 9.54444 11.624 9.58333C11.8719 9.62222 12.1222 9.69514 12.375 9.80208V9H19.375V16.5833C19.375 17.0694 19.2049 17.4826 18.8646 17.8229C18.5243 18.1632 18.1111 18.3333 17.625 18.3333H11.7917Z"
          fill="#004AC6"
        />
      </svg>
    ),
    title: "Tinjau Ulang Materi Turunan",
    description: "Siswa banyak mengalami kesulitan pada sub-bab ini. Pertimbangkan sesi review tambahan.",
  },
  {
    key: "latihan-penguatan",
    accent: "purple",
    icon: (
      <svg width="16" height="18" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="26.5" height="29.3333" rx="8" fill="#8B5CF6" fillOpacity="0.1" />
        <path
          d="M8 14.8333V13.6667H12.0833V14.8333H8ZM8 12.5V11.3333H14.4167V12.5H8ZM8 10.1667V9H14.4167V10.1667H8ZM13.25 18.3333V16.5396L16.4729 13.3313C16.5604 13.2438 16.6576 13.1806 16.7646 13.1417C16.8715 13.1028 16.9785 13.0833 17.0854 13.0833C17.2021 13.0833 17.3139 13.1052 17.4208 13.149C17.5278 13.1927 17.625 13.2583 17.7125 13.3458L18.2521 13.8854C18.3299 13.9729 18.3906 14.0701 18.4344 14.1771C18.4781 14.284 18.5 14.391 18.5 14.4979C18.5 14.6049 18.4806 14.7142 18.4417 14.826C18.4028 14.9378 18.3396 15.0375 18.2521 15.125L15.0437 18.3333H13.25ZM14.125 17.4583H14.6792L16.4438 15.6792L15.9042 15.1396L14.125 16.9042V17.4583Z"
          fill="#8B5CF6"
        />
      </svg>
    ),
    title: "Berikan Latihan Soal Penguatan",
    description: "Untuk meningkatkan skor penguasaan konsep rata-rata di kelas Calculus XI.",
  },
];

function InsightMateri() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="teacher-dashboard insight-materi">
      <TeacherSidebar active="Materi" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="teacher-dashboard__main">
        <TeacherTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="teacher-dashboard__content insight-materi__content">
          <section className="insight-hero">
            <div className="insight-hero__body">
              <div className="insight-hero__copy">
                <span className="insight-hero__badge">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.75 11.6667V9.15833C1.19583 8.65278 0.765625 8.06215 0.459375 7.38646C0.153125 6.71076 0 5.99861 0 5.25C0 3.79167 0.510417 2.55208 1.53125 1.53125C2.55208 0.510417 3.79167 0 5.25 0C6.46528 0 7.54201 0.357292 8.48021 1.07187C9.4184 1.78646 10.0285 2.71736 10.3104 3.86458L11.0688 6.85417C11.1174 7.03889 11.0833 7.2066 10.9667 7.35729C10.85 7.50799 10.6944 7.58333 10.5 7.58333H9.33333V9.33333C9.33333 9.65417 9.2191 9.92882 8.99063 10.1573C8.76215 10.3858 8.4875 10.5 8.16667 10.5H7V11.6667H5.83333V9.33333H8.16667V6.41667H9.74167L9.1875 4.15625C8.96389 3.27153 8.4875 2.55208 7.75833 1.99792C7.02917 1.44375 6.19306 1.16667 5.25 1.16667C4.12222 1.16667 3.15972 1.56042 2.3625 2.34792C1.56528 3.13542 1.16667 4.09306 1.16667 5.22083C1.16667 5.80417 1.28576 6.35833 1.52396 6.88333C1.76215 7.40833 2.1 7.875 2.5375 8.28333L2.91667 8.63333V11.6667H1.75Z"
                      fill="#6A1EDB"
                    />
                  </svg>
                  AI Analysis Complete
                </span>
                <h1>
                  Kesehatan
                  <br />
                  Kurikulum Anda
                  <br />
                  <span className="insight-hero__accent">Optimal</span>
                </h1>
                <p>
                  Analisis AI menunjukkan peningkatan pemahaman siswa secara keseluruhan. Beberapa area memerlukan
                  perhatian khusus untuk memaksimalkan potensi.
                </p>
              </div>

              <div className="insight-hero__metrics">
                <div className="insight-metric insight-metric--blue">
                  <span className="insight-metric__icon">
                    <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.375 25C8.6875 25 8.09896 24.7552 7.60938 24.2656C7.11979 23.776 6.875 23.1875 6.875 22.5H11.875C11.875 23.1875 11.6302 23.776 11.1406 24.2656C10.651 24.7552 10.0625 25 9.375 25ZM4.375 21.25V18.75H14.375V21.25H4.375ZM4.6875 17.5C3.25 16.6458 2.10938 15.5 1.26562 14.0625C0.421875 12.625 0 11.0625 0 9.375C0 6.77083 0.911458 4.55729 2.73438 2.73438C4.55729 0.911458 6.77083 0 9.375 0C11.9792 0 14.1927 0.911458 16.0156 2.73438C17.8385 4.55729 18.75 6.77083 18.75 9.375C18.75 11.0625 18.3281 12.625 17.4844 14.0625C16.6406 15.5 15.5 16.6458 14.0625 17.5H4.6875ZM5.4375 15H13.3125C14.25 14.3333 14.974 13.5104 15.4844 12.5312C15.9948 11.5521 16.25 10.5 16.25 9.375C16.25 7.45833 15.5833 5.83333 14.25 4.5C12.9167 3.16667 11.2917 2.5 9.375 2.5C7.45833 2.5 5.83333 3.16667 4.5 4.5C3.16667 5.83333 2.5 7.45833 2.5 9.375C2.5 10.5 2.75521 11.5521 3.26562 12.5312C3.77604 13.5104 4.5 14.3333 5.4375 15Z"
                        fill="#004AC6"
                      />
                    </svg>
                  </span>
                  <p className="insight-metric__value">88%</p>
                  <p className="insight-metric__label">Penguasaan Konsep</p>
                </div>

                <div className="insight-metric insight-metric--purple">
                  <span className="insight-metric__icon">
                    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.625 9.9375C16.2292 9.27083 16.6927 8.51042 17.0156 7.65625C17.3385 6.80208 17.5 5.91667 17.5 5C17.5 4.08333 17.3385 3.19792 17.0156 2.34375C16.6927 1.48958 16.2292 0.729167 15.625 0.0625C16.875 0.229167 17.9167 0.78125 18.75 1.71875C19.5833 2.65625 20 3.75 20 5C20 6.25 19.5833 7.34375 18.75 8.28125C17.9167 9.21875 16.875 9.77083 15.625 9.9375ZM22.5 20V16.25C22.5 15.5 22.3333 14.7865 22 14.1094C21.6667 13.4323 21.2292 12.8333 20.6875 12.3125C21.75 12.6875 22.7344 13.1719 23.6406 13.7656C24.5469 14.3594 25 15.1875 25 16.25V20H22.5ZM25 11.25V8.75H22.5V6.25H25V3.75H27.5V6.25H30V8.75H27.5V11.25H25ZM10 10C8.625 10 7.44792 9.51042 6.46875 8.53125C5.48958 7.55208 5 6.375 5 5C5 3.625 5.48958 2.44792 6.46875 1.46875C7.44792 0.489583 8.625 0 10 0C11.375 0 12.5521 0.489583 13.5312 1.46875C14.5104 2.44792 15 3.625 15 5C15 6.375 14.5104 7.55208 13.5312 8.53125C12.5521 9.51042 11.375 10 10 10ZM0 20V16.5C0 15.7917 0.182292 15.1406 0.546875 14.5469C0.911458 13.9531 1.39583 13.5 2 13.1875C3.29167 12.5417 4.60417 12.0573 5.9375 11.7344C7.27083 11.4115 8.625 11.25 10 11.25C11.375 11.25 12.7292 11.4115 14.0625 11.7344C15.3958 12.0573 16.7083 12.5417 18 13.1875C18.6042 13.5 19.0885 13.9531 19.4531 14.5469C19.8177 15.1406 20 15.7917 20 16.5V20H0ZM10 7.5C10.6875 7.5 11.276 7.25521 11.7656 6.76562C12.2552 6.27604 12.5 5.6875 12.5 5C12.5 4.3125 12.2552 3.72396 11.7656 3.23438C11.276 2.74479 10.6875 2.5 10 2.5C9.3125 2.5 8.72396 2.74479 8.23438 3.23438C7.74479 3.72396 7.5 4.3125 7.5 5C7.5 5.6875 7.74479 6.27604 8.23438 6.76562C8.72396 7.25521 9.3125 7.5 10 7.5ZM2.5 17.5H17.5V16.5C17.5 16.2708 17.4427 16.0625 17.3281 15.875C17.2135 15.6875 17.0625 15.5417 16.875 15.4375C15.75 14.875 14.6146 14.4531 13.4688 14.1719C12.3229 13.8906 11.1667 13.75 10 13.75C8.83333 13.75 7.67708 13.8906 6.53125 14.1719C5.38542 14.4531 4.25 14.875 3.125 15.4375C2.9375 15.5417 2.78646 15.6875 2.67188 15.875C2.55729 16.0625 2.5 16.2708 2.5 16.5V17.5Z"
                        fill="#8B5CF6"
                      />
                    </svg>
                  </span>
                  <p className="insight-metric__value">92%</p>
                  <p className="insight-metric__label">Keterlibatan Siswa</p>
                </div>
              </div>
            </div>
          </section>

          <div className="insight-layout">
            <div className="insight-main">
              <section className="insight-panel">
                <div className="insight-panel__head">
                  <div>
                    <h2>Heatmap Kesulitan Topik</h2>
                    <p>Rincian penguasaan berdasarkan topik kurikulum</p>
                  </div>
                  <button type="button" className="insight-panel__icon-btn" aria-label="Filter tampilan">
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 12V10H11V12H7ZM3 7V5H15V7H3ZM0 2V0H18V2H0Z" fill="#004AC6" />
                    </svg>
                  </button>
                </div>

                <div className="insight-heatmap">
                  {heatmapItems.map((item) => (
                    <div className="insight-heatmap__item" key={item.key}>
                      <div className="insight-heatmap__identity">
                        <span className={`insight-heatmap__dot insight-heatmap__dot--${item.accent}`} />
                        <div>
                          <p className="insight-heatmap__topic">{item.topic}</p>
                          <p className="insight-heatmap__subject">{item.subject}</p>
                        </div>
                      </div>
                      <div className="insight-heatmap__metric">
                        <p className={`insight-heatmap__value insight-heatmap__value--${item.accent}`}>{item.value}</p>
                        <p className="insight-heatmap__status">{item.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="insight-panel">
                <div className="insight-panel__head">
                  <div>
                    <h2>Tren Keterlibatan Siswa</h2>
                    <p>Tingkat aktivitas selama 7 hari terakhir</p>
                  </div>
                  <span className="insight-panel__pill">Minggu Ini</span>
                </div>

                <div className="insight-chart">
                  <svg
                    className="insight-chart__svg"
                    viewBox="0 0 612 563"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 140.75H531.33" stroke="#E0E3E5" strokeWidth="2.73583" strokeDasharray="10.94 10.94" />
                    <path d="M0 281.5H531.33" stroke="#E0E3E5" strokeWidth="2.73583" strokeDasharray="10.94 10.94" />
                    <path d="M0 422.25H531.33" stroke="#E0E3E5" strokeWidth="2.73583" strokeDasharray="10.94 10.94" />
                    <path
                      d="M0 450.399C53.133 422.249 131.367 227.309 184.5 283.609C237.633 339.909 315.367 113.809 368.5 170.109C421.633 226.409 501.234 55.459 607.5 83.609"
                      stroke="#8B5CF6"
                      strokeWidth="16.415"
                      strokeLinecap="round"
                    />
                    <path
                      opacity="0.2"
                      d="M0 451.65C61.2 423.66 122.4 227.731 183.6 283.711C244.8 339.691 306 115.772 367.2 171.752C428.4 227.731 489.6 59.7923 612 87.7821V563.609H0V451.65Z"
                      fill="url(#insightChartGradient)"
                    />
                    <circle cx="181.987" cy="281.5" r="10.6" fill="white" stroke="#8B5CF6" strokeWidth="8.20748" />
                    <circle cx="365.587" cy="168.901" r="10.6" fill="white" stroke="#8B5CF6" strokeWidth="8.20748" />
                    <circle cx="610.387" cy="84.4495" r="10.6" fill="white" stroke="#8B5CF6" strokeWidth="8.20748" />
                    <defs>
                      <linearGradient id="insightChartGradient" x1="0" y1="84.6094" x2="0" y2="562.873" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8B5CF6" />
                        <stop offset="1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="insight-chart__labels">
                    <span>Sen</span>
                    <span>Sel</span>
                    <span>Rab</span>
                    <span>Kam</span>
                    <span>Jum</span>
                    <span>Sab</span>
                    <span>Min</span>
                  </div>
                </div>
              </section>
            </div>

            <aside className="insight-aside">
              <section className="insight-panel insight-sentiment">
                <div className="insight-panel__head insight-panel__head--simple">
                  <div>
                    <h2>Sentimen Siswa</h2>
                    <p>Ringkasan umpan balik kualitatif</p>
                  </div>
                </div>

                <div className="insight-sentiment__list">
                  {sentiments.map((item) => (
                    <div className="insight-sentiment__row" key={item.key}>
                      <div className="insight-sentiment__top">
                        <span className="insight-sentiment__label">
                          <span aria-hidden="true">{item.emoji}</span>
                          {item.label}
                        </span>
                        <span className="insight-sentiment__value">{item.value}%</span>
                      </div>
                      <div className="insight-sentiment__track">
                        <div
                          className={`insight-sentiment__fill insight-sentiment__fill--${item.accent}`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="insight-panel insight-suggestions">
                <div className="insight-panel__head insight-panel__head--simple">
                  <div>
                    <h2 className="insight-suggestions__title">
                      <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 11L4.5 9L9 7L11 2.5L13 7L17.5 9L13 11L11 15.5L9 11Z"
                          fill="#004AC6"
                        />
                      </svg>
                      Saran AI
                    </h2>
                    <p>Tindakan yang direkomendasikan</p>
                  </div>
                </div>

                <div className="insight-suggestions__list">
                  {suggestions.map((item) => (
                    <button
                      type="button"
                      className={`insight-suggestion${item.active ? " is-active" : ""}`}
                      key={item.key}
                    >
                      <span className={`insight-suggestion__icon insight-suggestion__icon--${item.accent}`}>
                        {item.icon}
                      </span>
                      <span className="insight-suggestion__body">
                        <span className="insight-suggestion__title">{item.title}</span>
                        <span className="insight-suggestion__description">{item.description}</span>
                      </span>
                    </button>
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

export default InsightMateri;
