import { useState } from "react";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import AppFooter from "../components/AppFooter";
import "./Achievement.css";

const categories = ["Semua", "Akademik", "Sosial", "Spesial"];

function TrophyGlowIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 24L15 19.425L21 24L18.75 16.575L24.75 12.3H17.4L15 4.5L12.6 12.3H5.25L11.25 16.575L9 24ZM15 30C12.925 30 10.975 29.6063 9.15 28.8188C7.325 28.0312 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.96875 22.675 1.18125 20.85C0.39375 19.025 0 17.075 0 15C0 12.925 0.39375 10.975 1.18125 9.15C1.96875 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.96875 9.15 1.18125C10.975 0.39375 12.925 0 15 0C17.075 0 19.025 0.39375 20.85 1.18125C22.675 1.96875 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.0312 7.325 28.8188 9.15C29.6063 10.975 30 12.925 30 15C30 17.075 29.6063 19.025 28.8188 20.85C28.0312 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.0312 20.85 28.8188C19.025 29.6063 17.075 30 15 30Z"
        fill="#8B5CF6"
      />
    </svg>
  );
}

function CoinGlowIcon() {
  return (
    <svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0H15V11.775C15 12.35 14.875 12.8625 14.625 13.3125C14.375 13.7625 14.025 14.125 13.575 14.4L8.25 17.55L9.3 21H15L10.35 24.3L12.15 30L7.5 26.475L2.85 30L4.65 24.3L0 21H5.7L6.75 17.55L1.425 14.4C0.975 14.125 0.625 13.7625 0.375 13.3125C0.125 12.8625 0 12.35 0 11.775V0ZM6 3V13.575L7.5 14.475L9 13.575V3H6Z"
        fill="#004AC6"
      />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 16.5C3 17.8 3.2625 19.0312 3.7875 20.1938C4.3125 21.3563 5.0625 22.375 6.0375 23.25C6.0125 23.125 6 23.0125 6 22.9125C6 22.8125 6 22.7 6 22.575C6 21.775 6.15 21.025 6.45 20.325C6.75 19.625 7.1875 18.9875 7.7625 18.4125L12 14.25L16.2375 18.4125C16.8125 18.9875 17.25 19.625 17.55 20.325C17.85 21.025 18 21.775 18 22.575C18 22.7 18 22.8125 18 22.9125C18 23.0125 17.9875 23.125 17.9625 23.25C18.9375 22.375 19.6875 21.3563 20.2125 20.1938C20.7375 19.0312 21 17.8 21 16.5C21 15.25 20.7687 14.0688 20.3062 12.9563C19.8438 11.8438 19.175 10.85 18.3 9.975C17.8 10.3 17.275 10.5437 16.725 10.7063C16.175 10.8688 15.6125 10.95 15.0375 10.95C13.4875 10.95 12.1438 10.4375 11.0063 9.4125C9.86875 8.3875 9.2125 7.125 9.0375 5.625C8.0625 6.45 7.2 7.30625 6.45 8.19375C5.7 9.08125 5.06875 9.98125 4.55625 10.8938C4.04375 11.8063 3.65625 12.7375 3.39375 13.6875C3.13125 14.6375 3 15.575 3 16.5ZM12 18.45L9.8625 20.55C9.5875 20.825 9.375 21.1375 9.225 21.4875C9.075 21.8375 9 22.2 9 22.575C9 23.375 9.29375 24.0625 9.88125 24.6375C10.4688 25.2125 11.175 25.5 12 25.5C12.825 25.5 13.5312 25.2125 14.1187 24.6375C14.7062 24.0625 15 23.375 15 22.575C15 22.175 14.925 21.8062 14.775 21.4688C14.625 21.1313 14.4125 20.825 14.1375 20.55L12 18.45ZM12 0V4.95C12 5.8 12.2938 6.5125 12.8813 7.0875C13.4688 7.6625 14.1875 7.95 15.0375 7.95C15.4875 7.95 15.9063 7.85625 16.2938 7.66875C16.6813 7.48125 17.025 7.2 17.325 6.825L18 6C19.85 7.05 21.3125 8.5125 22.3875 10.3875C23.4625 12.2625 24 14.3 24 16.5C24 19.85 22.8375 22.6875 20.5125 25.0125C18.1875 27.3375 15.35 28.5 12 28.5C8.65 28.5 5.8125 27.3375 3.4875 25.0125C1.1625 22.6875 0 19.85 0 16.5C0 13.275 1.08125 10.2125 3.24375 7.3125C5.40625 4.4125 8.325 1.975 12 0Z"
        fill="#FB923C"
      />
    </svg>
  );
}

function MedalGlowIcon() {
  return (
    <svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0H15V11.775C15 12.35 14.875 12.8625 14.625 13.3125C14.375 13.7625 14.025 14.125 13.575 14.4L8.25 17.55L9.3 21H15L10.35 24.3L12.15 30L7.5 26.475L2.85 30L4.65 24.3L0 21H5.7L6.75 17.55L1.425 14.4C0.975 14.125 0.625 13.7625 0.375 13.3125C0.125 12.8625 0 12.35 0 11.775V0ZM3 3V11.775L6 13.575V3H3ZM12 3H9V13.575L12 11.775V3Z"
        fill="#004AC6"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.45 4.5L0 1.05L1.05 0L5.55 4.5L1.05 9L0 7.95L3.45 4.5Z" fill="#004AC6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.16667 13.25C0.845833 13.25 0.571181 13.1358 0.342708 12.9073C0.114236 12.6788 0 12.4042 0 12.0833V6.25C0 5.92917 0.114236 5.65451 0.342708 5.42604C0.571181 5.19757 0.845833 5.08333 1.16667 5.08333H1.75V3.91667C1.75 3.10972 2.03438 2.42188 2.60313 1.85312C3.17188 1.28437 3.85972 1 4.66667 1C5.47361 1 6.16146 1.28437 6.73021 1.85312C7.29896 2.42188 7.58333 3.10972 7.58333 3.91667V5.08333H8.16667C8.4875 5.08333 8.76215 5.19757 8.99063 5.42604C9.2191 5.65451 9.33333 5.92917 9.33333 6.25V12.0833C9.33333 12.4042 9.2191 12.6788 8.99063 12.9073C8.76215 13.1358 8.4875 13.25 8.16667 13.25H1.16667ZM1.16667 12.0833H8.16667V6.25H1.16667V12.0833ZM4.66667 10.3333C4.9875 10.3333 5.26215 10.2191 5.49062 9.99063C5.7191 9.76215 5.83333 9.4875 5.83333 9.16667C5.83333 8.84583 5.7191 8.57118 5.49062 8.34271C5.26215 8.11424 4.9875 8 4.66667 8C4.34583 8 4.07118 8.11424 3.84271 8.34271C3.61424 8.57118 3.5 8.84583 3.5 9.16667C3.5 9.4875 3.61424 9.76215 3.84271 9.99063C4.07118 10.2191 4.34583 10.3333 4.66667 10.3333ZM2.91667 5.08333H6.41667V3.91667C6.41667 3.43056 6.24653 3.01736 5.90625 2.67708C5.56597 2.33681 5.15278 2.16667 4.66667 2.16667C4.18056 2.16667 3.76736 2.33681 3.42708 2.67708C3.08681 3.01736 2.91667 3.43056 2.91667 3.91667V5.08333ZM1.16667 12.0833V6.25V12.0833Z"
        fill="#C3C6D7"
      />
    </svg>
  );
}

type Milestone = {
  key: string;
  title: string;
  description: string;
  accent: "blue" | "purple" | "orange";
  icon: React.ReactNode;
  status:
    | { kind: "selesai"; xp: string; claimedOn: string }
    | { kind: "progress"; label: string; value: string; percent: number }
    | { kind: "streak"; label: string; value: string; filled: number; total: number };
};

const milestones: Milestone[] = [
  {
    key: "tryout",
    title: "Penakluk Tryout Nasional",
    description: "Masuk Top 10% di Tryout Akbar Nasional bulan lalu.",
    accent: "blue",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 27V24H12V19.35C10.775 19.075 9.68125 18.5563 8.71875 17.7938C7.75625 17.0312 7.05 16.075 6.6 14.925C4.725 14.7 3.15625 13.8813 1.89375 12.4688C0.63125 11.0562 0 9.4 0 7.5V6C0 5.175 0.29375 4.46875 0.88125 3.88125C1.46875 3.29375 2.175 3 3 3H6V0H21V3H24C24.825 3 25.5312 3.29375 26.1187 3.88125C26.7062 4.46875 27 5.175 27 6V7.5C27 9.4 26.3688 11.0562 25.1063 12.4688C23.8438 13.8813 22.275 14.7 20.4 14.925C19.95 16.075 19.2437 17.0312 18.2812 17.7938C17.3188 18.5563 16.225 19.075 15 19.35V24H21V27H6ZM6 11.7V6H3V7.5C3 8.45 3.275 9.30625 3.825 10.0688C4.375 10.8313 5.1 11.375 6 11.7ZM21 11.7C21.9 11.375 22.625 10.8313 23.175 10.0688C23.725 9.30625 24 8.45 24 7.5V6H21V11.7Z"
          fill="white"
        />
      </svg>
    ),
    status: { kind: "selesai", xp: "+500 XP", claimedOn: "Diklaim 12 Mei" },
  },
  {
    key: "biologi",
    title: "Master Biologi",
    description: "Selesaikan seluruh modul Biologi dengan nilai rata-rata >85.",
    accent: "purple",
    icon: (
      <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.04276 27C1.76776 27 0.861507 26.4313 0.324007 25.2938C-0.213493 24.1562 -0.082243 23.1 0.717757 22.125L9.04276 12V3H7.54276C7.11776 3 6.76151 2.85625 6.47401 2.56875C6.18651 2.28125 6.04276 1.925 6.04276 1.5C6.04276 1.075 6.18651 0.71875 6.47401 0.43125C6.76151 0.14375 7.11776 0 7.54276 0H19.5428C19.9678 0 20.324 0.14375 20.6115 0.43125C20.899 0.71875 21.0428 1.075 21.0428 1.5C21.0428 1.925 20.899 2.28125 20.6115 2.56875C20.324 2.85625 19.9678 3 19.5428 3H18.0428V12L26.3678 22.125C27.1678 23.1 27.299 24.1562 26.7615 25.2938C26.224 26.4313 25.3178 27 24.0428 27H3.04276ZM3.04276 24H24.0428L15.0428 13.05V3H12.0428V13.05L3.04276 24Z"
          fill="#6A1EDB"
        />
      </svg>
    ),
    status: { kind: "progress", label: "Progress", value: "80%", percent: 80 },
  },
  {
    key: "streak",
    title: "7 Hari Tanpa Putus",
    description: "Pertahankan streak belajarmu selama 7 hari berturut-turut.",
    accent: "orange",
    icon: <FlameIcon />,
    status: { kind: "streak", label: "Hari ke-5", value: "5/7", filled: 5, total: 7 },
  },
];

type Badge = {
  key: string;
  title: string;
  description: string;
  xp?: string;
  locked?: boolean;
  progressPercent?: number;
  color?: string;
  icon: React.ReactNode;
};

const badges: Badge[] = [
  {
    key: "langkah-pertama",
    title: "Langkah Pertama",
    description: "Menyelesaikan modul pertama.",
    xp: "+50 XP",
    color: "#10B981",
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.75 18.25L19.5625 9.4375L17.8125 7.6875L10.75 14.75L7.1875 11.1875L5.4375 12.9375L10.75 18.25ZM12.5 25C10.7708 25 9.14583 24.6719 7.625 24.0156C6.10417 23.3594 4.78125 22.4688 3.65625 21.3438C2.53125 20.2188 1.64062 18.8958 0.984375 17.375C0.328125 15.8542 0 14.2292 0 12.5C0 10.7708 0.328125 9.14583 0.984375 7.625C1.64062 6.10417 2.53125 4.78125 3.65625 3.65625C4.78125 2.53125 6.10417 1.64062 7.625 0.984375C9.14583 0.328125 10.7708 0 12.5 0C14.2292 0 15.8542 0.328125 17.375 0.984375C18.8958 1.64062 20.2188 2.53125 21.3438 3.65625C22.4688 4.78125 23.3594 6.10417 24.0156 7.625C24.6719 9.14583 25 10.7708 25 12.5C25 14.2292 24.6719 15.8542 24.0156 17.375C23.3594 18.8958 22.4688 20.2188 21.3438 21.3438C20.2188 22.4688 18.8958 23.3594 17.375 24.0156C15.8542 24.6719 14.2292 25 12.5 25Z"
          fill="#10B981"
        />
      </svg>
    ),
  },
  {
    key: "cepat-tanggap",
    title: "Cepat Tanggap",
    description: "Jawab 10 soal benar berturut-turut.",
    xp: "+100 XP",
    color: "#004AC6",
    icon: (
      <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.5625 14.375C11.0833 14.8958 11.7396 15.1406 12.5312 15.1094C13.3229 15.0781 13.8958 14.7917 14.25 14.25L21.25 3.75L10.75 10.75C10.2083 11.125 9.91146 11.6927 9.85938 12.4531C9.80729 13.2135 10.0417 13.8542 10.5625 14.375ZM3.875 20C3.41667 20 2.99479 19.901 2.60938 19.7031C2.22396 19.5052 1.91667 19.2083 1.6875 18.8125C1.14583 17.8333 0.729167 16.8177 0.4375 15.7656C0.145833 14.7135 0 13.625 0 12.5C0 10.7708 0.328125 9.14583 0.984375 7.625C1.64062 6.10417 2.53125 4.78125 3.65625 3.65625C4.78125 2.53125 6.10417 1.64062 7.625 0.984375C9.14583 0.328125 10.7708 0 12.5 0C14.2083 0 15.8125 0.322917 17.3125 0.96875C18.8125 1.61458 20.125 2.49479 21.25 3.60938C22.375 4.72396 23.2708 6.02604 23.9375 7.51562C24.6042 9.00521 24.9479 10.6042 24.9688 12.3125C24.9896 13.4583 24.8594 14.5781 24.5781 15.6719C24.2969 16.7656 23.8646 17.8125 23.2812 18.8125C23.0521 19.2083 22.7448 19.5052 22.3594 19.7031C21.974 19.901 21.5521 20 21.0938 20H3.875Z"
          fill="#004AC6"
        />
      </svg>
    ),
  },
  {
    key: "ahli-matematika",
    title: "Ahli Matematika",
    description: "Nilai sempurna di tryout Matematika.",
    xp: "+200 XP",
    color: "#6A1EDB",
    icon: (
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.25 18.75H8.125V16.25H10.625V14.375H8.125V11.875H6.25V14.375H3.75V16.25H6.25V18.75ZM12.5 17.8125H18.75V15.9375H12.5V17.8125ZM12.5 14.6875H18.75V12.8125H12.5V14.6875ZM4.0625 7.75H10.3125V5.875H4.0625V7.75ZM2.5 22.5C1.8125 22.5 1.22396 22.2552 0.734375 21.7656C0.244792 21.276 0 20.6875 0 20V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H20C20.6875 0 21.276 0.244792 21.7656 0.734375C22.2552 1.22396 22.5 1.8125 22.5 2.5V20C22.5 20.6875 22.2552 21.276 21.7656 21.7656C21.276 22.2552 20.6875 22.5 20 22.5H2.5ZM13.875 9.9375L15.625 8.1875L17.375 9.9375L18.6875 8.625L16.9375 6.8125L18.6875 5.0625L17.375 3.75L15.625 5.5L13.875 3.75L12.5625 5.0625L14.3125 6.8125L12.5625 8.625L13.875 9.9375Z"
          fill="#6A1EDB"
        />
      </svg>
    ),
  },
  {
    key: "suka-berdiskusi",
    title: "Suka Berdiskusi",
    description: "Membantu 5 teman di forum.",
    xp: "+150 XP",
    color: "#F59E0B",
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.25 20C5.89583 20 5.59896 19.8802 5.35938 19.6406C5.11979 19.401 5 19.1042 5 18.75V16.25H21.25V5H23.75C24.1042 5 24.401 5.11979 24.6406 5.35938C24.8802 5.59896 25 5.89583 25 6.25V25L20 20H6.25ZM0 18.75V1.25C0 0.895833 0.119792 0.598958 0.359375 0.359375C0.598958 0.119792 0.895833 0 1.25 0H17.5C17.8542 0 18.151 0.119792 18.3906 0.359375C18.6302 0.598958 18.75 0.895833 18.75 1.25V12.5C18.75 12.8542 18.6302 13.151 18.3906 13.3906C18.151 13.6302 17.8542 13.75 17.5 13.75H5L0 18.75Z"
          fill="#F59E0B"
        />
      </svg>
    ),
  },
  {
    key: "jenius-fisika",
    title: "Jenius Fisika",
    description: "Nilai sempurna di tryout Fisika.",
    locked: true,
    progressPercent: 45,
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.75 25V19.625C2.5625 18.5417 1.64062 17.276 0.984375 15.8281C0.328125 14.3802 0 12.8542 0 11.25C0 8.125 1.09375 5.46875 3.28125 3.28125C5.46875 1.09375 8.125 0 11.25 0C13.8542 0 16.1615 0.765625 18.1719 2.29688C20.1823 3.82812 21.4896 5.82292 22.0938 8.28125L23.7188 14.6875C23.8229 15.0833 23.75 15.4427 23.5 15.7656C23.25 16.0885 22.9167 16.25 22.5 16.25H20V20C20 20.6875 19.7552 21.276 19.2656 21.7656C18.776 22.2552 18.1875 22.5 17.5 22.5H15V25H12.5V20H17.5V13.75H20.875L19.6875 8.90625C19.2083 7.01042 18.1875 5.46875 16.625 4.28125C15.0625 3.09375 13.2708 2.5 11.25 2.5C8.83333 2.5 6.77083 3.34375 5.0625 5.03125C3.35417 6.71875 2.5 8.77083 2.5 11.1875C2.5 12.4375 2.75521 13.625 3.26562 14.75C3.77604 15.875 4.5 16.875 5.4375 17.75L6.25 18.5V25H3.75ZM10 16.25H12.5L12.6875 14.6875C12.8542 14.625 13.0052 14.5521 13.1406 14.4688C13.276 14.3854 13.3958 14.2917 13.5 14.1875L14.9375 14.8125L16.1875 12.6875L14.9375 11.75C14.9792 11.5833 15 11.4167 15 11.25C15 11.0833 14.9792 10.9167 14.9375 10.75L16.1875 9.8125L14.9375 7.6875L13.5 8.3125C13.3958 8.20833 13.276 8.11458 13.1406 8.03125C13.0052 7.94792 12.8542 7.875 12.6875 7.8125L12.5 6.25H10L9.8125 7.8125C9.64583 7.875 9.49479 7.94792 9.35938 8.03125C9.22396 8.11458 9.10417 8.20833 9 8.3125L7.5625 7.6875L6.3125 9.8125L7.5625 10.75C7.52083 10.9167 7.5 11.0833 7.5 11.25C7.5 11.4167 7.52083 11.5833 7.5625 11.75L6.3125 12.6875L7.5625 14.8125L9 14.1875C9.10417 14.2917 9.22396 14.3854 9.35938 14.4688C9.49479 14.5521 9.64583 14.625 9.8125 14.6875L10 16.25ZM11.25 13.125C10.7292 13.125 10.2865 12.9427 9.92188 12.5781C9.55729 12.2135 9.375 11.7708 9.375 11.25C9.375 10.7292 9.55729 10.2865 9.92188 9.92188C10.2865 9.55729 10.7292 9.375 11.25 9.375C11.7708 9.375 12.2135 9.55729 12.5781 9.92188C12.9427 10.2865 13.125 10.7292 13.125 11.25C13.125 11.7708 12.9427 12.2135 12.5781 12.5781C12.2135 12.9427 11.7708 13.125 11.25 13.125Z"
          fill="#737686"
        />
      </svg>
    ),
  },
  {
    key: "polyglot",
    title: "Polyglot",
    description: "Selesaikan semua modul Bahasa.",
    locked: true,
    progressPercent: 15,
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.5156 25C10.7969 25 9.17708 24.6719 7.65625 24.0156C6.13542 23.3594 4.80729 22.4635 3.67188 21.3281C2.53646 20.1927 1.64062 18.8646 0.984375 17.3438C0.328125 15.8229 0 14.2031 0 12.4844C0 10.7656 0.328125 9.15104 0.984375 7.64062C1.64062 6.13021 2.53646 4.80729 3.67188 3.67188C4.80729 2.53646 6.13542 1.64062 7.65625 0.984375C9.17708 0.328125 10.7969 0 12.5156 0C14.2344 0 15.849 0.328125 17.3594 0.984375C18.8698 1.64062 20.1927 2.53646 21.3281 3.67188C22.4635 4.80729 23.3594 6.13021 24.0156 7.64062C24.6719 9.15104 25 10.7656 25 12.4844C25 14.2031 24.6719 15.8229 24.0156 17.3438C23.3594 18.8646 22.4635 20.1927 21.3281 21.3281C20.1927 22.4635 18.8698 23.3594 17.3594 24.0156C15.849 24.6719 14.2344 25 12.5156 25Z"
          fill="#737686"
        />
      </svg>
    ),
  },
  {
    key: "30-hari-streak",
    title: "30 Hari Streak",
    description: "Belajar 30 hari berturut-turut.",
    locked: true,
    progressPercent: 24,
    icon: (
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 13.75C2.5 14.8333 2.71875 15.8594 3.15625 16.8281C3.59375 17.7969 4.21875 18.6458 5.03125 19.375C5.01042 19.2708 5 19.1771 5 19.0938C5 19.0104 5 18.9167 5 18.8125C5 18.1458 5.125 17.5208 5.375 16.9375C5.625 16.3542 5.98958 15.8229 6.46875 15.3438L10 11.875L13.5312 15.3438C14.0104 15.8229 14.375 16.3542 14.625 16.9375C14.875 17.5208 15 18.1458 15 18.8125C15 18.9167 15 19.0104 15 19.0938C15 19.1771 14.9896 19.2708 14.9688 19.375C15.7812 18.6458 16.4062 17.7969 16.8438 16.8281C17.2812 15.8594 17.5 14.8333 17.5 13.75C17.5 12.7083 17.3073 11.724 16.9219 10.7969C16.5365 9.86979 15.9792 9.04167 15.25 8.3125C14.8333 8.58333 14.3958 8.78646 13.9375 8.92188C13.4792 9.05729 13.0104 9.125 12.5312 9.125C11.2396 9.125 10.1198 8.69792 9.17188 7.84375C8.22396 6.98958 7.67708 5.9375 7.53125 4.6875C6.71875 5.375 6 6.08854 5.375 6.82812C4.75 7.56771 4.22396 8.31771 3.79688 9.07812C3.36979 9.83854 3.04688 10.6146 2.82812 11.4062C2.60938 12.1979 2.5 12.9792 2.5 13.75ZM10 15.375L8.21875 17.125C7.98958 17.3542 7.8125 17.6146 7.6875 17.9062C7.5625 18.1979 7.5 18.5 7.5 18.8125C7.5 19.4792 7.74479 20.0521 8.23438 20.5312C8.72396 21.0104 9.3125 21.25 10 21.25C10.6875 21.25 11.276 21.0104 11.7656 20.5312C12.2552 20.0521 12.5 19.4792 12.5 18.8125C12.5 18.4792 12.4375 18.1719 12.3125 17.8906C12.1875 17.6094 12.0104 17.3542 11.7812 17.125L10 15.375ZM10 0V4.125C10 4.83333 10.2448 5.42708 10.7344 5.90625C11.224 6.38542 11.8229 6.625 12.5312 6.625C12.9062 6.625 13.2552 6.54688 13.5781 6.39062C13.901 6.23438 14.1875 6 14.4375 5.6875L15 5C16.5417 5.875 17.7604 7.09375 18.6562 8.65625C19.5521 10.2188 20 11.9167 20 13.75C20 16.5417 19.0312 18.9062 17.0938 20.8438C15.1562 22.7812 12.7917 23.75 10 23.75C7.20833 23.75 4.84375 22.7812 2.90625 20.8438C0.96875 18.9062 0 16.5417 0 13.75C0 11.0625 0.901042 8.51042 2.70312 6.09375C4.50521 3.67708 6.9375 1.64583 10 0Z"
          fill="#737686"
        />
      </svg>
    ),
  },
  {
    key: "mentor-sebaya",
    title: "Mentor Sebaya",
    description: "Membantu 50 teman di forum.",
    locked: true,
    progressPercent: 0,
    icon: (
      <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 15V13.0312C0 12.1354 0.458333 11.4062 1.375 10.8438C2.29167 10.2812 3.5 10 5 10C5.27083 10 5.53125 10.0052 5.78125 10.0156C6.03125 10.026 6.27083 10.0521 6.5 10.0938C6.20833 10.5312 5.98958 10.9896 5.84375 11.4688C5.69792 11.9479 5.625 12.4479 5.625 12.9688V15H0ZM7.5 15V12.9688C7.5 12.3021 7.68229 11.6927 8.04688 11.1406C8.41146 10.5885 8.92708 10.1042 9.59375 9.6875C10.2604 9.27083 11.0573 8.95833 11.9844 8.75C12.9115 8.54167 13.9167 8.4375 15 8.4375C16.1042 8.4375 17.1198 8.54167 18.0469 8.75C18.974 8.95833 19.7708 9.27083 20.4375 9.6875C21.1042 10.1042 21.6146 10.5885 21.9688 11.1406C22.3229 11.6927 22.5 12.3021 22.5 12.9688V15H7.5ZM24.375 15V12.9688C24.375 12.4271 24.3073 11.9167 24.1719 11.4375C24.0365 10.9583 23.8333 10.5104 23.5625 10.0938C23.7917 10.0521 24.026 10.026 24.2656 10.0156C24.5052 10.0052 24.75 10 25 10C26.5 10 27.7083 10.276 28.625 10.8281C29.5417 11.3802 30 12.1146 30 13.0312V15H24.375ZM10.1562 12.5H19.875C19.6667 12.0833 19.0885 11.7188 18.1406 11.4062C17.1927 11.0938 16.1458 10.9375 15 10.9375C13.8542 10.9375 12.8073 11.0938 11.8594 11.4062C10.9115 11.7188 10.3438 12.0833 10.1562 12.5ZM5 8.75C4.3125 8.75 3.72396 8.50521 3.23438 8.01562C2.74479 7.52604 2.5 6.9375 2.5 6.25C2.5 5.54167 2.74479 4.94792 3.23438 4.46875C3.72396 3.98958 4.3125 3.75 5 3.75C5.70833 3.75 6.30208 3.98958 6.78125 4.46875C7.26042 4.94792 7.5 5.54167 7.5 6.25C7.5 6.9375 7.26042 7.52604 6.78125 8.01562C6.30208 8.50521 5.70833 8.75 5 8.75ZM25 8.75C24.3125 8.75 23.724 8.50521 23.2344 8.01562C22.7448 7.52604 22.5 6.9375 22.5 6.25C22.5 5.54167 22.7448 4.94792 23.2344 4.46875C23.724 3.98958 24.3125 3.75 25 3.75C25.7083 3.75 26.3021 3.98958 26.7812 4.46875C27.2604 4.94792 27.5 5.54167 27.5 6.25C27.5 6.9375 27.2604 7.52604 26.7812 8.01562C26.3021 8.50521 25.7083 8.75 25 8.75ZM15 7.5C13.9583 7.5 13.0729 7.13542 12.3438 6.40625C11.6146 5.67708 11.25 4.79167 11.25 3.75C11.25 2.6875 11.6146 1.79688 12.3438 1.07812C13.0729 0.359375 13.9583 0 15 0C16.0625 0 16.9531 0.359375 17.6719 1.07812C18.3906 1.79688 18.75 2.6875 18.75 3.75C18.75 4.79167 18.3906 5.67708 17.6719 6.40625C16.9531 7.13542 16.0625 7.5 15 7.5ZM15 5C15.3542 5 15.651 4.88021 15.8906 4.64062C16.1302 4.40104 16.25 4.10417 16.25 3.75C16.25 3.39583 16.1302 3.09896 15.8906 2.85938C15.651 2.61979 15.3542 2.5 15 2.5C14.6458 2.5 14.349 2.61979 14.1094 2.85938C13.8698 3.09896 13.75 3.39583 13.75 3.75C13.75 4.10417 13.8698 4.40104 14.1094 4.64062C14.349 4.88021 14.6458 5 15 5Z"
          fill="#737686"
        />
      </svg>
    ),
  },
];

function Achievement() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua");

  return (
    <div className="dashboard-page">
      <AppSidebar active="Achievement" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main">
        <AppTopbar onMenuClick={() => setSidebarOpen(true)} searchPlaceholder="Cari materi..." />

        <main className="ach-content">
          <div className="ach-blobs" aria-hidden="true">
            <span className="ach-blob ach-blob--blue" />
            <span className="ach-blob ach-blob--purple" />
            <span className="ach-blob ach-blob--pink" />
            <span className="ach-blob ach-blob--green" />
          </div>

          <div className="ach-container">
            <div className="ach-header">
              <div className="ach-header__text">
                <h1 className="ach-header__title">
                  Koleksi
                  <br />
                  Pencapaian
                </h1>
                <p className="ach-header__subtitle">Jejak prestasimu dalam menaklukkan TKA.</p>
              </div>

              <div className="ach-summary">
                <div className="ach-summary__item">
                  <span className="ach-summary__icon ach-summary__icon--purple">
                    <TrophyGlowIcon />
                  </span>
                  <div>
                    <p className="ach-summary__label">
                      Total XP
                      <br />
                      Terkumpul
                    </p>
                    <p className="ach-summary__value">2.450</p>
                  </div>
                </div>
                <span className="ach-summary__divider" />
                <div className="ach-summary__item">
                  <span className="ach-summary__icon ach-summary__icon--blue">
                    <CoinGlowIcon />
                  </span>
                  <div>
                    <p className="ach-summary__label">
                      Badge
                      <br />
                      Terbuka
                    </p>
                    <p className="ach-summary__value">
                      8<span className="ach-summary__value-suffix">/24</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <section className="ach-section">
              <h2 className="ach-section__title">
                <FlameIcon />
                Milestone Utama
              </h2>

              <div className="ach-milestones">
                {milestones.map((milestone) => (
                  <article className={`ach-milestone ach-milestone--${milestone.accent}`} key={milestone.key}>
                    <span className="ach-milestone__glow" aria-hidden="true" />
                    <div className="ach-milestone__top">
                      {milestone.accent === "blue" ? (
                        <span className="ach-milestone__icon ach-milestone__icon--solid">{milestone.icon}</span>
                      ) : (
                        <span className="ach-milestone__icon ach-milestone__icon--glass">{milestone.icon}</span>
                      )}

                      {milestone.status.kind === "selesai" ? (
                        <span className="ach-status-pill ach-status-pill--done">
                          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M5.06667 14L3.8 11.8667L1.4 11.3333L1.63333 8.86667L0 7L1.63333 5.13333L1.4 2.66667L3.8 2.13333L5.06667 0L7.33333 0.966667L9.6 0L10.8667 2.13333L13.2667 2.66667L13.0333 5.13333L14.6667 7L13.0333 8.86667L13.2667 11.3333L10.8667 11.8667L9.6 14L7.33333 13.0333L5.06667 14ZM5.63333 12.3L7.33333 11.5667L9.06667 12.3L10 10.7L11.8333 10.2667L11.6667 8.4L12.9 7L11.6667 5.56667L11.8333 3.7L10 3.3L9.03333 1.7L7.33333 2.43333L5.6 1.7L4.66667 3.3L2.83333 3.7L3 5.56667L1.76667 7L3 8.4L2.83333 10.3L4.66667 10.7L5.63333 12.3ZM6.63333 9.36667L10.4 5.6L9.46667 4.63333L6.63333 7.46667L5.2 6.06667L4.26667 7L6.63333 9.36667Z"
                              fill="#10B981"
                            />
                          </svg>
                          Selesai
                        </span>
                      ) : (
                        <span className="ach-status-pill ach-status-pill--pending">
                          <LockIcon />
                          Sedang Berjalan
                        </span>
                      )}
                    </div>

                    <h3 className="ach-milestone__title">{milestone.title}</h3>
                    <p className="ach-milestone__desc">{milestone.description}</p>

                    {milestone.status.kind === "selesai" ? (
                      <div className="ach-milestone__claim">
                        <span className="ach-milestone__claim-xp">{milestone.status.xp}</span>
                        <span className="ach-milestone__claim-date">{milestone.status.claimedOn}</span>
                      </div>
                    ) : milestone.status.kind === "progress" ? (
                      <div className="ach-milestone__progress">
                        <div className="ach-milestone__progress-row">
                          <span className="ach-milestone__progress-label">{milestone.status.label}</span>
                          <span className="ach-milestone__progress-value">{milestone.status.value}</span>
                        </div>
                        <div className="ach-progress-track">
                          <div
                            className="ach-progress-track__fill"
                            style={{ width: `${milestone.status.percent}%` }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="ach-milestone__progress">
                        <div className="ach-milestone__progress-row">
                          <span className="ach-milestone__progress-label ach-milestone__progress-label--orange">
                            {milestone.status.label}
                          </span>
                          <span className="ach-milestone__progress-value">{milestone.status.value}</span>
                        </div>
                        <div className="ach-streak-track">
                          {(() => {
                            const streakStatus = milestone.status;
                            if (streakStatus.kind !== "streak") return null;
                            return Array.from({ length: streakStatus.total }).map((_, index) => (
                              <span
                                key={index}
                                className={`ach-streak-track__segment${
                                  index < streakStatus.filled
                                    ? " ach-streak-track__segment--filled"
                                    : ""
                                }`}
                              />
                            ));
                          })()}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>

            <section className="ach-section">
              <div className="ach-badges-header">
                <h2 className="ach-section__title">
                  <MedalGlowIcon />
                  Koleksi Badge
                </h2>
                <button type="button" className="ach-see-all">
                  Lihat Semua
                  <ChevronRightIcon />
                </button>
              </div>

              <div className="ach-categories">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`ach-category${category === activeCategory ? " ach-category--active" : ""}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="ach-badge-grid">
                {badges.map((badge) =>
                  badge.locked ? (
                    <div className="ach-badge ach-badge--locked" key={badge.key}>
                      <span className="ach-badge__icon ach-badge__icon--locked">{badge.icon}</span>
                      <h3 className="ach-badge__title ach-badge__title--locked">{badge.title}</h3>
                      <p className="ach-badge__desc ach-badge__desc--locked">{badge.description}</p>
                      <div className="ach-badge__lock-progress">
                        <div className="ach-lock-track">
                          <div
                            className="ach-lock-track__fill"
                            style={{ width: `${badge.progressPercent ?? 0}%` }}
                          />
                        </div>
                        <span className="ach-badge__lock-icon">
                          <LockIcon />
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="ach-badge" key={badge.key}>
                      <span className="ach-badge__icon" style={{ background: `${badge.color}1A`, borderColor: `${badge.color}4D` }}>
                        {badge.icon}
                      </span>
                      <h3 className="ach-badge__title">{badge.title}</h3>
                      <p className="ach-badge__desc">{badge.description}</p>
                      <span className="ach-badge__xp">{badge.xp}</span>
                    </div>
                  )
                )}
              </div>
            </section>
          </div>
        </main>

        <div className="ach-footer-wrap">
          <AppFooter />
        </div>
      </div>
    </div>
  );
}

export default Achievement;
