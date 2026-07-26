import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import AppFooter from "../components/AppFooter";
import "./LatihanSoal.css";

const heroIllustrationSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/f37a4551803b9e0d1d284d0f0a71bf0193e67a66?width=576";

type Category = {
  key: string;
  name: string;
  sets: string;
  desc: string;
  percent: number;
  gradient: string;
  ctaColor: string;
  icon: ReactNode;
};

const categories: Category[] = [
  {
    key: "matematika",
    name: "Matematika",
    sets: "24 Set",
    desc: "Aljabar, Geometri, Kalkulus",
    percent: 60,
    gradient: "linear-gradient(135deg, #2563EB 0%, #4F46E5 50%, #7E22CE 100%)",
    ctaColor: "#4338CA",
    icon: (
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.25 18.75H8.125V16.25H10.625V14.375H8.125V11.875H6.25V14.375H3.75V16.25H6.25V18.75ZM12.5 17.8125H18.75V15.9375H12.5V17.8125ZM12.5 14.6875H18.75V12.8125H12.5V14.6875ZM4.0625 7.75H10.3125V5.875H4.0625V7.75ZM2.5 22.5C1.8125 22.5 1.22396 22.2552 0.734375 21.7656C0.244792 21.276 0 20.6875 0 20V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H20C20.6875 0 21.276 0.244792 21.7656 0.734375C22.2552 1.22396 22.5 1.8125 22.5 2.5V20C22.5 20.6875 22.2552 21.276 21.7656 21.7656C21.276 22.2552 20.6875 22.5 20 22.5H2.5ZM13.875 9.9375L15.625 8.1875L17.375 9.9375L18.6875 8.625L16.9375 6.8125L18.6875 5.0625L17.375 3.75L15.625 5.5L13.875 3.75L12.5625 5.0625L14.3125 6.8125L12.5625 8.625L13.875 9.9375Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    key: "fisika",
    name: "Fisika",
    sets: "18 Set",
    desc: "Mekanika, Termodinamika",
    percent: 45,
    gradient: "linear-gradient(135deg, #10B981 0%, #14B8A6 50%, #0891B2 100%)",
    ctaColor: "#0F766E",
    icon: (
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.53563 22.5C1.47313 22.5 0.717923 22.026 0.270006 21.0781C-0.177911 20.1302 -0.0685359 19.25 0.598131 18.4375L7.53563 10V2.5H6.28563C5.93146 2.5 5.63459 2.38021 5.39501 2.14062C5.15542 1.90104 5.03563 1.60417 5.03563 1.25C5.03563 0.895833 5.15542 0.598958 5.39501 0.359375C5.63459 0.119792 5.93146 0 6.28563 0H16.2856C16.6398 0 16.9367 0.119792 17.1763 0.359375C17.4158 0.598958 17.5356 0.895833 17.5356 1.25C17.5356 1.60417 17.4158 1.90104 17.1763 2.14062C16.9367 2.38021 16.6398 2.5 16.2856 2.5H15.0356V10L21.9731 18.4375C22.6398 19.25 22.7492 20.1302 22.3013 21.0781C21.8533 22.026 21.0981 22.5 20.0356 22.5H2.53563Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    key: "bindonesia",
    name: "B. Indonesia",
    sets: "30 Set",
    desc: "Pemahaman Bacaan, PBM",
    percent: 80,
    gradient: "linear-gradient(135deg, #F97316 0%, #F59E0B 50%, #EF4444 100%)",
    ctaColor: "#B45309",
    icon: (
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.25 7.375V5.25C16.9375 4.95833 17.6406 4.73958 18.3594 4.59375C19.0781 4.44792 19.8333 4.375 20.625 4.375C21.1667 4.375 21.6979 4.41667 22.2188 4.5C22.7396 4.58333 23.25 4.6875 23.75 4.8125V6.8125C23.25 6.625 22.7448 6.48438 22.2344 6.39062C21.724 6.29688 21.1875 6.25 20.625 6.25C19.8333 6.25 19.0729 6.34896 18.3438 6.54688C17.6146 6.74479 16.9167 7.02083 16.25 7.375ZM16.25 14.25V12.125C16.9375 11.8333 17.6406 11.6146 18.3594 11.4688C19.0781 11.3229 19.8333 11.25 20.625 11.25C21.1667 11.25 21.6979 11.2917 22.2188 11.375C22.7396 11.4583 23.25 11.5625 23.75 11.6875V13.6875C23.25 13.5 22.7448 13.3594 22.2344 13.2656C21.724 13.1719 21.1875 13.125 20.625 13.125C19.8333 13.125 19.0729 13.2188 18.3438 13.4062C17.6146 13.5938 16.9167 13.875 16.25 14.25ZM16.25 10.8125V8.6875C16.9375 8.39583 17.6406 8.17708 18.3594 8.03125C19.0781 7.88542 19.8333 7.8125 20.625 7.8125C21.1667 7.8125 21.6979 7.85417 22.2188 7.9375C22.7396 8.02083 23.25 8.125 23.75 8.25V10.25C23.25 10.0625 22.7448 9.92188 22.2344 9.82812C21.724 9.73438 21.1875 9.6875 20.625 9.6875C19.8333 9.6875 19.0729 9.78646 18.3438 9.98438C17.6146 10.1823 16.9167 10.4583 16.25 10.8125ZM15 16.3125C15.9167 15.875 16.8385 15.5469 17.7656 15.3281C18.6927 15.1094 19.6458 15 20.625 15C21.375 15 22.1094 15.0625 22.8281 15.1875C23.5469 15.3125 24.2708 15.5 25 15.75V3.375C24.3125 3.08333 23.599 2.86458 22.8594 2.71875C22.1198 2.57292 21.375 2.5 20.625 2.5C19.6458 2.5 18.6771 2.625 17.7188 2.875C16.7604 3.125 15.8542 3.5 15 4V16.3125ZM13.75 20C12.75 19.2083 11.6667 18.5938 10.5 18.1562C9.33333 17.7188 8.125 17.5 6.875 17.5C6 17.5 5.14062 17.6146 4.29688 17.8438C3.45312 18.0729 2.64583 18.3958 1.875 18.8125C1.4375 19.0417 1.01562 19.0312 0.609375 18.7812C0.203125 18.5312 0 18.1667 0 17.6875V2.625C0 2.39583 0.0572917 2.17708 0.171875 1.96875C0.286458 1.76042 0.458333 1.60417 0.6875 1.5C1.66667 1.02083 2.67188 0.651042 3.70312 0.390625C4.73438 0.130208 5.79167 0 6.875 0C8.08333 0 9.26562 0.15625 10.4219 0.46875C11.5781 0.78125 12.6875 1.25 13.75 1.875C14.8125 1.25 15.9219 0.78125 17.0781 0.46875C18.2344 0.15625 19.4167 0 20.625 0C21.7083 0 22.7656 0.130208 23.7969 0.390625C24.8281 0.651042 25.8333 1.02083 26.8125 1.5C27.0417 1.60417 27.2135 1.76042 27.3281 1.96875C27.4427 2.17708 27.5 2.39583 27.5 2.625V17.6875C27.5 18.1667 27.2969 18.5312 26.8906 18.7812C26.4844 19.0312 26.0625 19.0417 25.625 18.8125C24.8542 18.3958 24.0469 18.0729 23.2031 17.8438C22.3594 17.6146 21.5 17.5 20.625 17.5C19.375 17.5 18.1667 17.7188 17 18.1562C15.8333 18.5938 14.75 19.2083 13.75 20Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    key: "binggris",
    name: "B. Inggris",
    sets: "15 Set",
    desc: "Reading Comprehension",
    percent: 20,
    gradient: "linear-gradient(135deg, #A855F7 0%, #D946EF 50%, #DB2777 100%)",
    ctaColor: "#A21CAF",
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.5156 25C10.7969 25 9.17708 24.6719 7.65625 24.0156C6.13542 23.3594 4.80729 22.4635 3.67188 21.3281C2.53646 20.1927 1.64062 18.8646 0.984375 17.3438C0.328125 15.8229 0 14.2031 0 12.4844C0 10.7656 0.328125 9.15104 0.984375 7.64062C1.64062 6.13021 2.53646 4.80729 3.67188 3.67188C4.80729 2.53646 6.13542 1.64062 7.65625 0.984375C9.17708 0.328125 10.7969 0 12.5156 0C14.2344 0 15.849 0.328125 17.3594 0.984375C18.8698 1.64062 20.1927 2.53646 21.3281 3.67188C22.4635 4.80729 23.3594 6.13021 24.0156 7.64062C24.6719 9.15104 25 10.7656 25 12.4844C25 14.2031 24.6719 15.8229 24.0156 17.3438C23.3594 18.8646 22.4635 20.1927 21.3281 21.3281C20.1927 22.4635 18.8698 23.3594 17.3594 24.0156C15.849 24.6719 14.2344 25 12.5156 25Z"
          fill="white"
        />
      </svg>
    ),
  },
];

type HistoryItem = {
  key: string;
  title: string;
  meta: string;
  score: number;
  tone: "blue" | "violet";
  icon: ReactNode;
};

const historyItems: HistoryItem[] = [
  {
    key: "aljabar",
    title: "Matematika: Aljabar",
    meta: "12 Okt 2023 • 20 Soal",
    score: 88,
    tone: "blue",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 15H6.5V13H8.5V11.5H6.5V9.5H5V11.5H3V13H5V15ZM10 14.25H15V12.75H10V14.25ZM10 11.75H15V10.25H10V11.75ZM11.1 7.95L12.5 6.55L13.9 7.95L14.95 6.9L13.55 5.45L14.95 4.05L13.9 3L12.5 4.4L11.1 3L10.05 4.05L11.45 5.45L10.05 6.9L11.1 7.95ZM3.25 6.2H8.25V4.7H3.25V6.2ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16ZM2 2V16V2Z"
          fill="#004AC6"
        />
      </svg>
    ),
  },
  {
    key: "reading",
    title: "B. Inggris: Reading",
    meta: "11 Okt 2023 • 15 Soal",
    score: 92,
    tone: "violet",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.0125 20C8.6375 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3625 0 9.9875C0 8.6125 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.6375 0 10.0125 0C11.3875 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.6125 20 9.9875C20 11.3625 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3875 20 10.0125 20Z"
          fill="#6A1EDB"
        />
      </svg>
    ),
  },
  {
    key: "bindo",
    title: "B. Indonesia",
    meta: "19 Okt 2023 • 15 Soal",
    score: 83,
    tone: "violet",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.0125 20C8.6375 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3625 0 9.9875C0 8.6125 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.6375 0 10.0125 0C11.3875 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.6125 20 9.9875C20 11.3625 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3875 20 10.0125 20Z"
          fill="#6A1EDB"
        />
      </svg>
    ),
  },
];

const weeklyBars = [38, 58, 86, 45, 62];

const recommendations = [
  {
    key: "hots",
    title: "Paket Soal HOTS TPS",
    desc: "Latihan soal dengan tingkat kesulitan tinggi untuk persiapan maksimal.",
    tag: "Sulit",
    tagTone: "rose",
    time: "45 Menit",
    iconTone: "rose",
    icon: (
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 13.75C2.5 14.8333 2.71875 15.8594 3.15625 16.8281C3.59375 17.7969 4.21875 18.6458 5.03125 19.375C5.01042 19.2708 5 19.1771 5 19.0938C5 19.0104 5 18.9167 5 18.8125C5 18.1458 5.125 17.5208 5.375 16.9375C5.625 16.3542 5.98958 15.8229 6.46875 15.3438L10 11.875L13.5312 15.3438C14.0104 15.8229 14.375 16.3542 14.625 16.9375C14.875 17.5208 15 18.1458 15 18.8125C15 18.9167 15 19.0104 15 19.0938C15 19.1771 14.9896 19.2708 14.9688 19.375C15.7812 18.6458 16.4062 17.7969 16.8438 16.8281C17.2812 15.8594 17.5 14.8333 17.5 13.75C17.5 12.7083 17.3073 11.724 16.9219 10.7969C16.5365 9.86979 15.9792 9.04167 15.25 8.3125C14.8333 8.58333 14.3958 8.78646 13.9375 8.92188C13.4792 9.05729 13.0104 9.125 12.5312 9.125C11.2396 9.125 10.1198 8.69792 9.17188 7.84375C8.22396 6.98958 7.67708 5.9375 7.53125 4.6875C6.71875 5.375 6 6.08854 5.375 6.82812C4.75 7.56771 4.22396 8.31771 3.79688 9.07812C3.36979 9.83854 3.04688 10.6146 2.82812 11.4062C2.60938 12.1979 2.5 12.9792 2.5 13.75ZM10 15.375L8.21875 17.125C7.98958 17.3542 7.8125 17.6146 7.6875 17.9062C7.5625 18.1979 7.5 18.5 7.5 18.8125C7.5 19.4792 7.74479 20.0521 8.23438 20.5312C8.72396 21.0104 9.3125 21.25 10 21.25C10.6875 21.25 11.276 21.0104 11.7656 20.5312C12.2552 20.0521 12.5 19.4792 12.5 18.8125C12.5 18.4792 12.4375 18.1719 12.3125 17.8906C12.1875 17.6094 12.0104 17.3542 11.7812 17.125L10 15.375ZM10 0V4.125C10 4.83333 10.2448 5.42708 10.7344 5.90625C11.224 6.38542 11.8229 6.625 12.5312 6.625C12.9062 6.625 13.2552 6.54688 13.5781 6.39062C13.901 6.23438 14.1875 6 14.4375 5.6875L15 5C16.5417 5.875 17.7604 7.09375 18.6562 8.65625C19.5521 10.2188 20 11.9167 20 13.75C20 16.5417 19.0312 18.9062 17.0938 20.8438C15.1562 22.7812 12.7917 23.75 10 23.75C7.20833 23.75 4.84375 22.7812 2.90625 20.8438C0.96875 18.9062 0 16.5417 0 13.75C0 11.0625 0.901042 8.51042 2.70312 6.09375C4.50521 3.67708 6.9375 1.64583 10 0Z"
          fill="#F43F5E"
        />
      </svg>
    ),
  },
  {
    key: "logika",
    title: "Kuis Kilat: Logika",
    desc: "Pertajam logika berpikir dengan 10 soal cepat.",
    tag: "Mudah",
    tagTone: "green",
    time: "10 Menit",
    iconTone: "violet",
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.75 25V19.625C2.5625 18.5417 1.64062 17.276 0.984375 15.8281C0.328125 14.3802 0 12.8542 0 11.25C0 8.125 1.09375 5.46875 3.28125 3.28125C5.46875 1.09375 8.125 0 11.25 0C13.8542 0 16.1615 0.765625 18.1719 2.29688C20.1823 3.82812 21.4896 5.82292 22.0938 8.28125L23.7188 14.6875C23.8229 15.0833 23.75 15.4427 23.5 15.7656C23.25 16.0885 22.9167 16.25 22.5 16.25H20V20C20 20.6875 19.7552 21.276 19.2656 21.7656C18.776 22.2552 18.1875 22.5 17.5 22.5H15V25H12.5V20H17.5V13.75H20.875L19.6875 8.90625C19.2083 7.01042 18.1875 5.46875 16.625 4.28125C15.0625 3.09375 13.2708 2.5 11.25 2.5C8.83333 2.5 6.77083 3.34375 5.0625 5.03125C3.35417 6.71875 2.5 8.77083 2.5 11.1875C2.5 12.4375 2.75521 13.625 3.26562 14.75C3.77604 15.875 4.5 16.875 5.4375 17.75L6.25 18.5V25H3.75Z"
          fill="#6A1EDB"
        />
      </svg>
    ),
  },
];

function LatihanSoal() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const maxBar = Math.max(...weeklyBars);
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <AppSidebar active="Latihan Soal" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main latsol-main">
        <AppTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="latsol-content">
          <section className="latsol-hero">
            <span className="latsol-hero__glow latsol-hero__glow--blue" aria-hidden="true" />
            <span className="latsol-hero__glow latsol-hero__glow--purple" aria-hidden="true" />
            <div className="latsol-hero__text">
              <h1 className="latsol-hero__title">Pusat Latihan</h1>
              <p className="latsol-hero__subtitle">
                Asah kemampuanmu dengan berbagai kategori soal. Semakin sering berlatih, semakin tinggi
                levelmu!
              </p>
              <button
                type="button"
                className="latsol-btn-gradient"
                onClick={() => navigate("/latihan-soal/sesi")}
              >
                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 14V0L11 7L0 14Z" fill="white" />
                </svg>
                Lanjutkan Latihan
              </button>
            </div>
            <img src={heroIllustrationSrc} alt="Ilustrasi belajar" className="latsol-hero__illustration" />
          </section>

          <section className="latsol-stats">
            <div className="latsol-stat-card">
              <div className="latsol-stat-card__header">
                <h3>Rata-rata Skor</h3>
                <span className="latsol-stat-card__icon latsol-stat-card__icon--green">
                  <svg width="18" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.4 12L8 10.6L15.4 3.15L19.4 7.15L24.6 2H22V0H28V6H26V3.4L19.4 10L15.4 6L9.4 12Z" fill="#10B981" />
                  </svg>
                </span>
              </div>
              <p className="latsol-stat-card__value">
                85<span>/100</span>
              </p>
              <p className="latsol-stat-card__trend">
                <strong>+5%</strong> dari minggu lalu
              </p>
            </div>

            <div className="latsol-stat-card">
              <div className="latsol-stat-card__header">
                <h3>Waktu Latihan</h3>
                <span className="latsol-stat-card__icon latsol-stat-card__icon--blue">
                  <svg width="17" height="18" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 10V8H20V10H14ZM16 21H18V15H16V21ZM17 29C15.7667 29 14.6042 28.7625 13.5125 28.2875C12.4208 27.8125 11.4667 27.1667 10.65 26.35C9.83333 25.5333 9.1875 24.5792 8.7125 23.4875C8.2375 22.3958 8 21.2333 8 20C8 18.7667 8.2375 17.6042 8.7125 16.5125C9.1875 15.4208 9.83333 14.4667 10.65 13.65C11.4667 12.8333 12.4208 12.1875 13.5125 11.7125C14.6042 11.2375 15.7667 11 17 11C18.0333 11 19.025 11.1667 19.975 11.5C20.925 11.8333 21.8167 12.3167 22.65 12.95L24.05 11.55L25.45 12.95L24.05 14.35C24.6833 15.1833 25.1667 16.075 25.5 17.025C25.8333 17.975 26 18.9667 26 20C26 21.2333 25.7625 22.3958 25.2875 23.4875C24.8125 24.5792 24.1667 25.5333 23.35 26.35C22.5333 27.1667 21.5792 27.8125 20.4875 28.2875C19.3958 28.7625 18.2333 29 17 29ZM17 27C18.9333 27 20.5833 26.3167 21.95 24.95C23.3167 23.5833 24 21.9333 24 20C24 18.0667 23.3167 16.4167 21.95 15.05C20.5833 13.6833 18.9333 13 17 13C15.0667 13 13.4167 13.6833 12.05 15.05C10.6833 16.4167 10 18.0667 10 20C10 21.9333 10.6833 23.5833 12.05 24.95C13.4167 26.3167 15.0667 27 17 27Z"
                      fill="#004AC6"
                    />
                  </svg>
                </span>
              </div>
              <p className="latsol-stat-card__value">
                12<span>Jam</span>
              </p>
              <div className="latsol-stat-card__track">
                <div className="latsol-stat-card__track-fill" style={{ width: "75%" }} />
              </div>
            </div>

            <div className="latsol-mission-card">
              <span className="latsol-mission-card__glow" aria-hidden="true" />
              <span className="latsol-mission-card__medal">
                <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 0H20V15.7C20 16.4667 19.8333 17.15 19.5 17.75C19.1667 18.35 18.7 18.8333 18.1 19.2L11 23.4L12.4 28H20L13.8 32.4L16.2 40L10 35.3L3.8 40L6.2 32.4L0 28H7.6L9 23.4L1.9 19.2C1.3 18.8333 0.833333 18.35 0.5 17.75C0.166667 17.15 0 16.4667 0 15.7V0ZM8 4V18.1L10 19.3L12 18.1V4H8Z"
                    fill="white"
                  />
                </svg>
              </span>
              <h3 className="latsol-mission-card__title">Misi Harian</h3>
              <p className="latsol-mission-card__desc">Selesaikan 1 set soal TPS</p>
              <button type="button" className="latsol-mission-card__cta">
                Mulai Sekarang
              </button>
            </div>
          </section>

          <section className="latsol-categories">
            <h2 className="latsol-section-title">Pilih Kategori</h2>
            <div className="latsol-category-grid">
              {categories.map((category) => (
                <article
                  key={category.key}
                  className="latsol-category-card"
                  style={{ background: category.gradient }}
                >
                  <span className="latsol-category-card__icon">{category.icon}</span>
                  <span className="latsol-category-card__sets">{category.sets}</span>
                  <h3 className="latsol-category-card__name">{category.name}</h3>
                  <p className="latsol-category-card__desc">{category.desc}</p>
                  <div className="latsol-category-card__progress">
                    <div className="latsol-category-card__progress-row">
                      <span>Progres</span>
                      <strong>{category.percent}%</strong>
                    </div>
                    <div className="latsol-category-card__track">
                      <div
                        className="latsol-category-card__track-fill"
                        style={{ width: `${category.percent}%` }}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="latsol-category-card__cta"
                    style={{ color: category.ctaColor }}
                    onClick={() => navigate("/latihan-soal/sesi")}
                  >
                    Mulai Latihan
                  </button>
                </article>
              ))}
            </div>
          </section>

          <div className="latsol-bottom-grid">
            <section className="latsol-history">
              <h2 className="latsol-section-title">Riwayat Latihan Terakhir</h2>
              <div className="latsol-history-list">
                {historyItems.map((item) => (
                  <div className="latsol-history-item" key={item.key}>
                    <div className="latsol-history-item__left">
                      <span className={`latsol-history-item__icon latsol-history-item__icon--${item.tone}`}>
                        {item.icon}
                      </span>
                      <div>
                        <p className="latsol-history-item__title">{item.title}</p>
                        <p className="latsol-history-item__meta">{item.meta}</p>
                      </div>
                    </div>
                    <p className={`latsol-history-item__score latsol-history-item__score--${item.tone}`}>
                      {item.score}
                      <span>/100</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="latsol-weekly">
              <h2 className="latsol-section-title">Statistik Minggu Ini</h2>
              <div className="latsol-weekly-card">
                <div className="latsol-weekly-card__header">
                  <span>Total Soal</span>
                  <strong>145</strong>
                </div>
                <div className="latsol-weekly-card__bars">
                  {weeklyBars.map((value, index) => (
                    <div
                      key={index}
                      className={`latsol-weekly-card__bar${value === maxBar ? " latsol-weekly-card__bar--peak" : ""}`}
                      style={{ height: `${(value / 100) * 100}%` }}
                    />
                  ))}
                </div>
                <p className="latsol-weekly-card__note">
                  Kamu 15% lebih aktif dibanding minggu lalu. Pertahankan!
                </p>
              </div>
            </section>
          </div>

          <section className="latsol-recommendations">
            <h2 className="latsol-section-title">Rekomendasi Latihan</h2>
            <div className="latsol-recommendation-grid">
              {recommendations.map((item) => (
                <button type="button" className="latsol-recommendation-card" key={item.key}>
                  <span className={`latsol-recommendation-card__icon latsol-recommendation-card__icon--${item.iconTone}`}>
                    {item.icon}
                  </span>
                  <div className="latsol-recommendation-card__body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <div className="latsol-recommendation-card__meta">
                      <span className={`latsol-tag latsol-tag--${item.tagTone}`}>{item.tag}</span>
                      <span className="latsol-recommendation-card__time">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7.75833 8.575L8.575 7.75833L6.41667 5.6V2.91667H5.25V6.06667L7.75833 8.575ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667Z"
                            fill="#434655"
                          />
                        </svg>
                        {item.time}
                      </span>
                    </div>
                  </div>
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="latsol-recommendation-card__chevron">
                    <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#737686" />
                  </svg>
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="latsol-footer-wrap">
          <AppFooter />
        </div>
      </div>
    </div>
  );
}

export default LatihanSoal;
