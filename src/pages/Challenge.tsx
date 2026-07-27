import { useState } from "react";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import AppFooter from "../components/AppFooter";
import "../styles/siswa/Challenge.css";


function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.86667 9.8L9.8 8.86667L7.33333 6.4V3.33333H6V6.93333L8.86667 9.8ZM6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45555 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333ZM6.66667 12C8.14444 12 9.40278 11.4806 10.4417 10.4417C11.4806 9.40278 12 8.14444 12 6.66667C12 5.18889 11.4806 3.93056 10.4417 2.89167C9.40278 1.85278 8.14444 1.33333 6.66667 1.33333C5.18889 1.33333 3.93056 1.85278 2.89167 2.89167C1.85278 3.93056 1.33333 5.18889 1.33333 6.66667C1.33333 8.14444 1.85278 9.40278 2.89167 10.4417C3.93056 11.4806 5.18889 12 6.66667 12Z"
        fill="#004AC6"
      />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.3333 105V93.3333H46.6667V75.25C41.9028 74.1806 37.6493 72.1632 33.9062 69.1979C30.1632 66.2326 27.4167 62.5139 25.6667 58.0417C18.375 57.1667 12.2743 53.9826 7.36458 48.4896C2.45486 42.9965 0 36.5556 0 29.1667V23.3333C0 20.125 1.14236 17.3785 3.42708 15.0938C5.71181 12.809 8.45833 11.6667 11.6667 11.6667H23.3333V0H81.6667V11.6667H93.3333C96.5417 11.6667 99.2882 12.809 101.573 15.0938C103.858 17.3785 105 20.125 105 23.3333V29.1667C105 36.5556 102.545 42.9965 97.6354 48.4896C92.7257 53.9826 86.625 57.1667 79.3333 58.0417C77.5833 62.5139 74.8368 66.2326 71.0938 69.1979C67.3507 72.1632 63.0972 74.1806 58.3333 75.25V93.3333H81.6667V105H23.3333ZM23.3333 45.5V23.3333H11.6667V29.1667C11.6667 32.8611 12.7361 36.191 14.875 39.1562C17.0139 42.1215 19.8333 44.2361 23.3333 45.5ZM81.6667 45.5C85.1667 44.2361 87.9861 42.1215 90.125 39.1562C92.2639 36.191 93.3333 32.8611 93.3333 29.1667V23.3333H81.6667V45.5Z"
        fill="#EEC200"
      />
    </svg>
  );
}

function XpCoinIcon() {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.50625 17.4167L4.99583 10.9771L0 6.64583L6.6 6.07292L9.16667 0L11.7333 6.07292L18.3333 6.64583L13.3375 10.9771L14.8271 17.4167L9.16667 14.0021L3.50625 17.4167Z"
        fill="#735C00"
      />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.20208 10.725L6.00417 8.1125L3.89583 6.41667H6.50833L7.33333 3.85L8.15833 6.41667H10.7708L8.63958 8.1125L9.44167 10.725L7.33333 9.09792L5.20208 10.725ZM1.83333 19.25V12.1687C1.25278 11.5271 0.802083 10.7937 0.48125 9.96875C0.160417 9.14375 0 8.26528 0 7.33333C0 5.28611 0.710417 3.55208 2.13125 2.13125C3.55208 0.710417 5.28611 0 7.33333 0C9.38056 0 11.1146 0.710417 12.5354 2.13125C13.9563 3.55208 14.6667 5.28611 14.6667 7.33333C14.6667 8.26528 14.5062 9.14375 14.1854 9.96875C13.8646 10.7937 13.4139 11.5271 12.8333 12.1687V19.25L7.33333 17.4167L1.83333 19.25ZM7.33333 12.8333C8.86111 12.8333 10.1597 12.2986 11.2292 11.2292C12.2986 10.1597 12.8333 8.86111 12.8333 7.33333C12.8333 5.80556 12.2986 4.50694 11.2292 3.4375C10.1597 2.36806 8.86111 1.83333 7.33333 1.83333C5.80556 1.83333 4.50694 2.36806 3.4375 3.4375C2.36806 4.50694 1.83333 5.80556 1.83333 7.33333C1.83333 8.86111 2.36806 10.1597 3.4375 11.2292C4.50694 12.2986 5.80556 12.8333 7.33333 12.8333ZM3.66667 16.5229L7.33333 15.5833L11 16.5229V13.6812C10.4653 13.9868 9.88854 14.2274 9.26979 14.4031C8.65104 14.5788 8.00556 14.6667 7.33333 14.6667C6.66111 14.6667 6.01562 14.5788 5.39687 14.4031C4.77812 14.2274 4.20139 13.9868 3.66667 13.6812V16.5229Z"
        fill="#735C00"
      />
    </svg>
  );
}

function LeafGrowthIcon() {
  return (
    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.36659 21C1.37492 21 0.670061 20.5576 0.252005 19.6729C-0.16605 18.7882 -0.0639668 17.9667 0.558255 17.2083L7.03326 9.33333V2.33333H5.86659C5.53603 2.33333 5.25895 2.22153 5.03534 1.99792C4.81173 1.77431 4.69992 1.49722 4.69992 1.16667C4.69992 0.836111 4.81173 0.559028 5.03534 0.335417C5.25895 0.111806 5.53603 0 5.86659 0H15.1999C15.5305 0 15.8076 0.111806 16.0312 0.335417C16.2548 0.559028 16.3666 0.836111 16.3666 1.16667C16.3666 1.49722 16.2548 1.77431 16.0312 1.99792C15.8076 2.22153 15.5305 2.33333 15.1999 2.33333H14.0333V9.33333L20.5083 17.2083C21.1305 17.9667 21.2326 18.7882 20.8145 19.6729C20.3964 20.5576 19.6916 21 18.6999 21H2.36659ZM2.36659 18.6667H18.6999L11.6999 10.15V2.33333H9.36659V10.15L2.36659 18.6667Z"
        fill="#10B981"
      />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 12.8333C0 10.7917 0.486111 8.97361 1.45833 7.37917C2.43056 5.78472 3.5 4.44306 4.66667 3.35417C5.83333 2.26528 6.90278 1.43403 7.875 0.860417C8.84722 0.286806 9.33333 0 9.33333 0V3.85C9.33333 4.56944 9.57639 5.13819 10.0625 5.55625C10.5486 5.97431 11.0931 6.18333 11.6958 6.18333C12.0264 6.18333 12.3424 6.11528 12.6438 5.97917C12.9451 5.84306 13.2222 5.61944 13.475 5.30833L14 4.66667C15.4 5.48333 16.5278 6.61597 17.3833 8.06458C18.2389 9.5132 18.6667 11.1028 18.6667 12.8333C18.6667 14.5444 18.2486 16.1049 17.4125 17.5146C16.5764 18.9243 15.4778 20.0375 14.1167 20.8542C14.4472 20.3875 14.7049 19.8771 14.8896 19.3229C15.0743 18.7687 15.1667 18.1806 15.1667 17.5583C15.1667 16.7806 15.0208 16.0465 14.7292 15.3562C14.4375 14.666 14.0194 14.0486 13.475 13.5042L9.33333 9.45L5.22083 13.5042C4.65694 14.0681 4.22917 14.6903 3.9375 15.3708C3.64583 16.0514 3.5 16.7806 3.5 17.5583C3.5 18.1806 3.59236 18.7687 3.77708 19.3229C3.96181 19.8771 4.21944 20.3875 4.55 20.8542C3.18889 20.0375 2.09028 18.9243 1.25417 17.5146C0.418056 16.1049 0 14.5444 0 12.8333Z"
        fill="#FB923C"
      />
    </svg>
  );
}

function ChatBubbleIcon() {
  return (
    <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 15.1667C2.52778 15.1667 1.70139 14.8264 1.02083 14.1458C0.340278 13.4653 0 12.6389 0 11.6667C0 10.6944 0.340278 9.86806 1.02083 9.1875C1.70139 8.50694 2.52778 8.16667 3.5 8.16667V5.83333C3.5 5.19167 3.72847 4.64236 4.18542 4.18542C4.64236 3.72847 5.19167 3.5 5.83333 3.5H9.33333C9.33333 2.52778 9.67361 1.70139 10.3542 1.02083C11.0347 0.340278 11.8611 0 12.8333 0C13.8056 0 14.6319 0.340278 15.3125 1.02083C15.9931 1.70139 16.3333 2.52778 16.3333 3.5H19.8333C20.475 3.5 21.0243 3.72847 21.4813 4.18542C21.9382 4.64236 22.1667 5.19167 22.1667 5.83333V8.16667C23.1389 8.16667 23.9653 8.50694 24.6458 9.1875C25.3264 9.86806 25.6667 10.6944 25.6667 11.6667C25.6667 12.6389 25.3264 13.4653 24.6458 14.1458C23.9653 14.8264 23.1389 15.1667 22.1667 15.1667V19.8333C22.1667 20.475 21.9382 21.0243 21.4813 21.4813C21.0243 21.9382 20.475 22.1667 19.8333 22.1667H5.83333C5.19167 22.1667 4.64236 21.9382 4.18542 21.4813C3.72847 21.0243 3.5 20.475 3.5 19.8333V15.1667ZM9.33333 12.8333C9.81944 12.8333 10.2326 12.6632 10.5729 12.3229C10.9132 11.9826 11.0833 11.5694 11.0833 11.0833C11.0833 10.5972 10.9132 10.184 10.5729 9.84375C10.2326 9.50347 9.81944 9.33333 9.33333 9.33333C8.84722 9.33333 8.43403 9.50347 8.09375 9.84375C7.75347 10.184 7.58333 10.5972 7.58333 11.0833C7.58333 11.5694 7.75347 11.9826 8.09375 12.3229C8.43403 12.6632 8.84722 12.8333 9.33333 12.8333ZM16.3333 12.8333C16.8194 12.8333 17.2326 12.6632 17.5729 12.3229C17.9132 11.9826 18.0833 11.5694 18.0833 11.0833C18.0833 10.5972 17.9132 10.184 17.5729 9.84375C17.2326 9.50347 16.8194 9.33333 16.3333 9.33333C15.8472 9.33333 15.434 9.50347 15.0938 9.84375C14.7535 10.184 14.5833 10.5972 14.5833 11.0833C14.5833 11.5694 14.7535 11.9826 15.0938 12.3229C15.434 12.6632 15.8472 12.8333 16.3333 12.8333ZM8.16667 17.5H17.5V15.1667H8.16667V17.5ZM5.83333 19.8333H19.8333V5.83333H5.83333V19.8333Z"
        fill="#8B5CF6"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z" fill="white" />
    </svg>
  );
}

function ForumIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.3333 23.3333L18.6667 18.6667H7C6.35833 18.6667 5.80903 18.4382 5.35208 17.9813C4.89514 17.5243 4.66667 16.975 4.66667 16.3333V15.1667H17.5C18.1417 15.1667 18.691 14.9382 19.1479 14.4812C19.6049 14.0243 19.8333 13.475 19.8333 12.8333V4.66667H21C21.6417 4.66667 22.191 4.89514 22.6479 5.35208C23.1049 5.80903 23.3333 6.35833 23.3333 7V23.3333ZM2.33333 11.8708L3.70417 10.5H15.1667V2.33333H2.33333V11.8708ZM0 17.5V2.33333C0 1.69167 0.228472 1.14236 0.685417 0.685417C1.14236 0.228472 1.69167 0 2.33333 0H15.1667C15.8083 0 16.3576 0.228472 16.8146 0.685417C17.2715 1.14236 17.5 1.69167 17.5 2.33333V10.5C17.5 11.1417 17.2715 11.691 16.8146 12.1479C16.3576 12.6049 15.8083 12.8333 15.1667 12.8333H4.66667L0 17.5ZM2.33333 10.5V2.33333V10.5Z"
        fill="#004AC6"
      />
    </svg>
  );
}

function ChestKeyIcon() {
  return (
    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.66667 28C1.93333 28 1.30556 27.7389 0.783333 27.2167C0.261111 26.6944 0 26.0667 0 25.3333V12C0 11.2667 0.261111 10.6389 0.783333 10.1167C1.30556 9.59444 1.93333 9.33333 2.66667 9.33333H4V6.66667C4 4.82222 4.65 3.25 5.95 1.95C7.25 0.65 8.82222 0 10.6667 0C12.5111 0 14.0833 0.65 15.3833 1.95C16.6833 3.25 17.3333 4.82222 17.3333 6.66667V9.33333H18.6667C19.4 9.33333 20.0278 9.59444 20.55 10.1167C21.0722 10.6389 21.3333 11.2667 21.3333 12V25.3333C21.3333 26.0667 21.0722 26.6944 20.55 27.2167C20.0278 27.7389 19.4 28 18.6667 28H2.66667ZM10.6667 21.3333C11.4 21.3333 12.0278 21.0722 12.55 20.55C13.0722 20.0278 13.3333 19.4 13.3333 18.6667C13.3333 17.9333 13.0722 17.3056 12.55 16.7833C12.0278 16.2611 11.4 16 10.6667 16C9.93333 16 9.30556 16.2611 8.78333 16.7833C8.26111 17.3056 8 17.9333 8 18.6667C8 19.4 8.26111 20.0278 8.78333 20.55C9.30556 21.0722 9.93333 21.3333 10.6667 21.3333ZM6.66667 9.33333H14.6667V6.66667C14.6667 5.55556 14.2778 4.61111 13.5 3.83333C12.7222 3.05556 11.7778 2.66667 10.6667 2.66667C9.55556 2.66667 8.61111 3.05556 7.83333 3.83333C7.05556 4.61111 6.66667 5.55556 6.66667 6.66667V9.33333Z"
        fill="#735C00"
      />
    </svg>
  );
}

const dailyQuests = [
  {
    key: "biologi",
    variant: "green",
    icon: <LeafGrowthIcon />,
    title: "Kilat Biologi",
    desc: "Selesaikan 10 soal dalam 5 menit.",
    progressPercent: 40,
    progressLabel: "4/10 Soal",
    xp: "+200 XP",
  },
  {
    key: "matematika",
    variant: "orange",
    icon: <FlameIcon />,
    title: "Streak Matematika",
    desc: "5 hari nilai sempurna berturut-turut.",
    progressPercent: 80,
    progressLabel: "4/5 Hari",
    xp: "+500 XP",
  },
];

const discussions = [
  {
    key: "am",
    initials: "AM",
    bg: "#FED01B",
    color: "#6F5900",
    title: "Strategi UTBK Penalaran Umum",
    meta: "15 balasan • Aktif 5m lalu",
  },
  {
    key: "bp",
    initials: "BP",
    bg: "#8343F4",
    color: "#F7EDFF",
    title: "Bahas Soal: Integral Substitusi",
    meta: "32 balasan • Aktif 12m lalu",
  },
];

function Challenge() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-page">
      <AppSidebar active="Challenge" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main">
        <AppTopbar onMenuClick={() => setSidebarOpen(true)} searchPlaceholder="Cari materi..." />

        <main className="chal-content">
          <div className="chal-blobs" aria-hidden="true">
            <span className="chal-blob chal-blob--blue" />
            <span className="chal-blob chal-blob--purple" />
            <span className="chal-blob chal-blob--pink" />
            <span className="chal-blob chal-blob--green" />
          </div>

          <div className="chal-container">
            <header className="chal-header">
              <h1 className="chal-header__title">Arena Tantangan</h1>
              <p className="chal-header__subtitle">Buktikan kemampuanmu dan kumpulkan poin prestise.</p>
            </header>

            <div className="chal-grid">
              <div className="chal-main-col">
                <section className="chal-hero">
                  <div className="chal-hero__glow chal-hero__glow--a" aria-hidden="true" />
                  <div className="chal-hero__glow chal-hero__glow--b" aria-hidden="true" />

                  <div className="chal-hero__body">
                    <span className="chal-hero__badge">
                      <ClockIcon />
                      BERAKHIR DALAM 2D 14H
                    </span>

                    <h2 className="chal-hero__title">
                      Tantangan Mingguan:
                      <br />
                      <span className="chal-hero__title-accent">Master Logika</span>
                    </h2>

                    <p className="chal-hero__desc">
                      Selesaikan 50 soal logika kuantitatif dengan akurasi 90%.
                    </p>

                    <div className="chal-hero__rewards">
                      <span className="chal-hero__reward">
                        <XpCoinIcon />
                        1000 XP
                      </span>
                      <span className="chal-hero__reward">
                        <BadgeIcon />
                        'Logic Titan' Badge
                      </span>
                    </div>

                    <button type="button" className="chal-hero__cta">
                      Mulai Tantangan
                    </button>
                  </div>

                  <div className="chal-hero__trophy">
                    <TrophyIcon />
                  </div>
                </section>

                <section className="chal-quests">
                  <div className="chal-quests__head">
                    <h3 className="chal-quests__title">Quest Harian</h3>
                    <button type="button" className="chal-quests__see-all">
                      Lihat Semua
                    </button>
                  </div>

                  <div className="chal-quests__grid">
                    {dailyQuests.map((quest) => (
                      <div key={quest.key} className={`chal-quest chal-quest--${quest.variant}`}>
                        <span className={`chal-quest__icon chal-quest__icon--${quest.variant}`}>{quest.icon}</span>
                        <div className="chal-quest__body">
                          <div className="chal-quest__text">
                            <h4 className="chal-quest__title">{quest.title}</h4>
                            <p className="chal-quest__desc">{quest.desc}</p>
                          </div>
                          <div className={`chal-quest__track chal-quest__track--${quest.variant}`}>
                            <div
                              className={`chal-quest__fill chal-quest__fill--${quest.variant}`}
                              style={{ width: `${quest.progressPercent}%` }}
                            />
                          </div>
                          <div className="chal-quest__foot">
                            <span className="chal-quest__progress">{quest.progressLabel}</span>
                            <span className={`chal-quest__xp chal-quest__xp--${quest.variant}`}>{quest.xp}</span>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="chal-quest chal-quest--purple">
                      <span className="chal-quest__icon chal-quest__icon--purple">
                        <ChatBubbleIcon />
                      </span>
                      <div className="chal-quest__body chal-quest__body--split">
                        <div className="chal-quest__text">
                          <h4 className="chal-quest__title">Debat AI</h4>
                          <p className="chal-quest__desc">Tantang AI Tutor dalam adu logika.</p>
                        </div>
                        <div className="chal-quest__foot">
                          <button type="button" className="chal-quest__challenge-btn">
                            Tantang
                          </button>
                          <span className="chal-quest__xp chal-quest__xp--purple">+150 XP</span>
                        </div>
                      </div>
                    </div>

                    <div className="chal-quest-done">
                      <div className="chal-quest-done__top">
                        <span className="chal-quest-done__icon">
                          <CheckIcon />
                        </span>
                        <span className="chal-quest-done__claim">Klaim Reward</span>
                      </div>
                      <h4 className="chal-quest-done__title">Membaca Aktif</h4>
                      <p className="chal-quest-done__desc">Baca 2 materi Literasi Bahasa Indonesia.</p>
                      <div className="chal-quest-done__footer">
                        <div className="chal-quest-done__row">
                          <span>2 / 2</span>
                          <span>100%</span>
                        </div>
                        <div className="chal-quest-done__track">
                          <div className="chal-quest-done__fill" style={{ width: "100%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <aside className="chal-side">
                <section className="chal-discussion">
                  <div className="chal-discussion__glow" aria-hidden="true" />
                  <div className="chal-discussion__head">
                    <span className="chal-discussion__icon">
                      <ForumIcon />
                    </span>
                    <h3 className="chal-discussion__title">
                      Pojok
                      <br />
                      Diskusi
                    </h3>
                  </div>

                  <p className="chal-discussion__desc">
                    Gabung dalam diskusi aktif, temukan solusi bersama, dan perluas wawasan belajarmu.
                  </p>

                  <div className="chal-discussion__list">
                    {discussions.map((item) => (
                      <div key={item.key} className="chal-discussion__item">
                        <span
                          className="chal-discussion__avatar"
                          style={{ background: item.bg, color: item.color }}
                        >
                          {item.initials}
                        </span>
                        <div className="chal-discussion__item-body">
                          <p className="chal-discussion__item-title">{item.title}</p>
                          <p className="chal-discussion__item-meta">{item.meta}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button type="button" className="chal-discussion__more">
                    Lihat Semua Diskusi
                  </button>
                </section>

                <section className="chal-chest">
                  <p className="chal-chest__title">Elite Chest Mingguan</p>
                  <p className="chal-chest__desc">Kumpulkan 5000 XP minggu ini untuk membuka.</p>

                  <div className="chal-chest__ring-wrap">
                    <svg className="chal-chest__ring" width="192" height="192" viewBox="0 0 192 192" fill="none">
                      <circle cx="96" cy="96" r="80.64" stroke="#E0E3E5" strokeWidth="23.04" />
                      <circle
                        cx="96"
                        cy="96"
                        r="80.64"
                        stroke="url(#chalChestGradient)"
                        strokeWidth="19.2"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 80.64}`}
                        strokeDashoffset={`${2 * Math.PI * 80.64 * (1 - 0.75)}`}
                        transform="rotate(-90 96 96)"
                      />
                      <defs>
                        <linearGradient id="chalChestGradient" x1="15.36" y1="176.64" x2="176.64" y2="15.36">
                          <stop stopColor="#FEF08A" />
                          <stop offset="0.575" stopColor="#EAB308" />
                          <stop offset="0.576" stopColor="#fff" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="chal-chest__ring-content">
                      <span className="chal-chest__lock">
                        <ChestKeyIcon />
                      </span>
                      <span className="chal-chest__percent">75%</span>
                    </div>
                  </div>

                  <span className="chal-chest__xp">
                    <strong>3750</strong> / 5000 XP
                  </span>
                </section>
              </aside>
            </div>
          </div>
        </main>

        <div className="chal-footer-wrap">
          <AppFooter />
        </div>
      </div>
    </div>
  );
}

export default Challenge;
