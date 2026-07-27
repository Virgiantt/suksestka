import "../styles/siswa/TutorAI.css";

import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const chatBgImageSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/1f4145dbe6428b622a4bfbd34fbc7ff84d4eaa4d?width=1788";
const botSmallAvatarSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/ecf7255b612d459df8352158964a4ecb2ff779a8?width=64";
const headerAvatarSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/f7b485c7aafd6d39295fa47ce241099985a2ccca?width=96";

function StarIcon() {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
        fill="#EEC200"
      />
    </svg>
  );
}

const features = [
  {
    key: "visual",
    title: "Penjelasan Visual",
    background: "#DCE9FF",
    desc: "Memahami konsep rumit lebih mudah dengan diagram interaktif dan animasi yang disesuaikan dengan pertanyaanmu.",
    icon: (
      <svg
        width="28"
        height="19"
        viewBox="0 0 28 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.75 15C15.3125 15 16.6406 14.4531 17.7344 13.3594C18.8281 12.2656 19.375 10.9375 19.375 9.375C19.375 7.8125 18.8281 6.48438 17.7344 5.39062C16.6406 4.29688 15.3125 3.75 13.75 3.75C12.1875 3.75 10.8594 4.29688 9.76562 5.39062C8.67188 6.48438 8.125 7.8125 8.125 9.375C8.125 10.9375 8.67188 12.2656 9.76562 13.3594C10.8594 14.4531 12.1875 15 13.75 15ZM13.75 12.75C12.8125 12.75 12.0156 12.4219 11.3594 11.7656C10.7031 11.1094 10.375 10.3125 10.375 9.375C10.375 8.4375 10.7031 7.64062 11.3594 6.98438C12.0156 6.32812 12.8125 6 13.75 6C14.6875 6 15.4844 6.32812 16.1406 6.98438C16.7969 7.64062 17.125 8.4375 17.125 9.375C17.125 10.3125 16.7969 11.1094 16.1406 11.7656C15.4844 12.4219 14.6875 12.75 13.75 12.75ZM13.75 18.75C10.7083 18.75 7.9375 17.901 5.4375 16.2031C2.9375 14.5052 1.125 12.2292 0 9.375C1.125 6.52083 2.9375 4.24479 5.4375 2.54688C7.9375 0.848958 10.7083 0 13.75 0C16.7917 0 19.5625 0.848958 22.0625 2.54688C24.5625 4.24479 26.375 6.52083 27.5 9.375C26.375 12.2292 24.5625 14.5052 22.0625 16.2031C19.5625 17.901 16.7917 18.75 13.75 18.75ZM13.75 16.25C16.1042 16.25 18.2656 15.6302 20.2344 14.3906C22.2031 13.151 23.7083 11.4792 24.75 9.375C23.7083 7.27083 22.2031 5.59896 20.2344 4.35938C18.2656 3.11979 16.1042 2.5 13.75 2.5C11.3958 2.5 9.23438 3.11979 7.26562 4.35938C5.29688 5.59896 3.79167 7.27083 2.75 9.375C3.79167 11.4792 5.29688 13.151 7.26562 14.3906C9.23438 15.6302 11.3958 16.25 13.75 16.25Z"
          fill="#004AC6"
        />
      </svg>
    ),
  },
  {
    key: "adaptif",
    title: "Adaptasi Personal",
    background: "#6BFF8F",
    desc: "AI Tutor mempelajari tingkat pemahamanmu dan menyesuaikan kecepatan serta gaya bahasa agar belajar lebih efektif.",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 25V19.625C2.5625 18.5417 1.64062 17.276 0.984375 15.8281C0.328125 14.3802 0 12.8542 0 11.25C0 8.125 1.09375 5.46875 3.28125 3.28125C5.46875 1.09375 8.125 0 11.25 0C13.8542 0 16.1615 0.765625 18.1719 2.29688C20.1823 3.82812 21.4896 5.82292 22.0938 8.28125L23.7188 14.6875C23.8229 15.0833 23.75 15.4427 23.5 15.7656C23.25 16.0885 22.9167 16.25 22.5 16.25H20V20C20 20.6875 19.7552 21.276 19.2656 21.7656C18.776 22.2552 18.1875 22.5 17.5 22.5H15V25H12.5V20H17.5V13.75H20.875L19.6875 8.90625C19.2083 7.01042 18.1875 5.46875 16.625 4.28125C15.0625 3.09375 13.2708 2.5 11.25 2.5C8.83333 2.5 6.77083 3.34375 5.0625 5.03125C3.35417 6.71875 2.5 8.77083 2.5 11.1875C2.5 12.4375 2.75521 13.625 3.26562 14.75C3.77604 15.875 4.5 16.875 5.4375 17.75L6.25 18.5V25H3.75ZM10 16.25H12.5L12.6875 14.6875C12.8542 14.625 13.0052 14.5521 13.1406 14.4688C13.276 14.3854 13.3958 14.2917 13.5 14.1875L14.9375 14.8125L16.1875 12.6875L14.9375 11.75C14.9792 11.5833 15 11.4167 15 11.25C15 11.0833 14.9792 10.9167 14.9375 10.75L16.1875 9.8125L14.9375 7.6875L13.5 8.3125C13.3958 8.20833 13.276 8.11458 13.1406 8.03125C13.0052 7.94792 12.8542 7.875 12.6875 7.8125L12.5 6.25H10L9.8125 7.8125C9.64583 7.875 9.49479 7.94792 9.35938 8.03125C9.22396 8.11458 9.10417 8.20833 9 8.3125L7.5625 7.6875L6.3125 9.8125L7.5625 10.75C7.52083 10.9167 7.5 11.0833 7.5 11.25C7.5 11.4167 7.52083 11.5833 7.5625 11.75L6.3125 12.6875L7.5625 14.8125L9 14.1875C9.10417 14.2917 9.22396 14.3854 9.35938 14.4688C9.49479 14.5521 9.64583 14.625 9.8125 14.6875L10 16.25ZM11.25 13.125C10.7292 13.125 10.2865 12.9427 9.92188 12.5781C9.55729 12.2135 9.375 11.7708 9.375 11.25C9.375 10.7292 9.55729 10.2865 9.92188 9.92188C10.2865 9.55729 10.7292 9.375 11.25 9.375C11.7708 9.375 12.2135 9.55729 12.5781 9.92188C12.9427 10.2865 13.125 10.7292 13.125 11.25C13.125 11.7708 12.9427 12.2135 12.5781 12.5781C12.2135 12.9427 11.7708 13.125 11.25 13.125Z"
          fill="#007432"
        />
      </svg>
    ),
  },
  {
    key: "247",
    title: "Tanya Apapun 24/7",
    background: "#CEA700",
    desc: "Dari matematika kompleks hingga teori sains dasar, AI Tutor siap menjawab pertanyaanmu 24 jam sehari tanpa batas.",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 25L20 20H7.5C6.8125 20 6.22396 19.7552 5.73438 19.2656C5.24479 18.776 5 18.1875 5 17.5V16.25H18.75C19.4375 16.25 20.026 16.0052 20.5156 15.5156C21.0052 15.026 21.25 14.4375 21.25 13.75V5H22.5C23.1875 5 23.776 5.24479 24.2656 5.73438C24.7552 6.22396 25 6.8125 25 7.5V25ZM2.5 12.7188L3.96875 11.25H16.25V2.5H2.5V12.7188ZM0 18.75V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H16.25C16.9375 0 17.526 0.244792 18.0156 0.734375C18.5052 1.22396 18.75 1.8125 18.75 2.5V11.25C18.75 11.9375 18.5052 12.526 18.0156 13.0156C17.526 13.5052 16.9375 13.75 16.25 13.75H5L0 18.75ZM2.5 11.25V2.5V11.25Z"
          fill="#4E3D00"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    key: "andi",
    text: '"SuksesTKA Tutor sangat membantu saya belajar Matematika SD dan IPA Dasar. Penjelasannya pakai gambar-gambar lucu jadi gampang banget dipahami!"',
    initial: "A",
    avatarBg: "#DBE1FF",
    avatarColor: "#004AC6",
    name: "Andi P.",
    role: "Siswa Kelas 5 SD",
  },
  {
    key: "budi",
    text: '"Awalnya ragu, tapi ternyata SuksesTKA Tutor ini bisa bantu persiapan Ujian Sekolah saya. Materi SMP yang susah jadi terasa lebih ringan."',
    initial: "B",
    avatarBg: "#6BFF8F",
    avatarColor: "#007432",
    name: "Budi S.",
    role: "Siswa Kelas 8 SMP",
  },
  {
    key: "citra",
    text: '"Belajar jadi seru banget! SuksesTKA Tutor bantu aku persiapan masuk SMP Favorit. Penjelasannya sabar banget kalau aku nanya berkali-kali."',
    initial: "C",
    avatarBg: "#FFE083",
    avatarColor: "#231B00",
    name: "Citra K.",
    role: "Siswi Kelas 6 SD",
  },
];

const testimonialSlides = [...testimonials, ...testimonials];

function TutorAI() {
  return (
    <div className="page">
      <Navbar active="Tutor AI" />

      <main>
        <section className="tutorai-hero">
          <span
            className="tutorai-hero__blob tutorai-hero__blob--yellow"
            aria-hidden="true"
          />
          <span
            className="tutorai-hero__blob tutorai-hero__blob--green"
            aria-hidden="true"
          />

          <div className="tutorai-hero__card">
            <span className="tutorai-hero__glow" aria-hidden="true" />

            <span className="tutorai-hero__badge">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 9.33333L5.83333 7.55417L8.16667 9.33333L7.29167 6.44583L9.625 4.78333H6.76667L5.83333 1.75L4.9 4.78333H2.04167L4.375 6.44583L3.5 9.33333Z"
                  fill="#735C00"
                />
              </svg>
              AI Tutor Interaktif
            </span>

            <h1 className="tutorai-hero__heading">
              Teman Belajar
              <span className="tutorai-hero__heading-accent">
                Pintarmu 24/7
              </span>
            </h1>

            <p className="tutorai-hero__subtitle">
              Tingkatkan pemahamanmu dengan AI Tutor interaktif. Penjelasan
              mendalam, disesuaikan dengan gaya belajarmu, kapan saja kamu
              butuhkan.
            </p>

            <div className="tutorai-hero__actions">
              <Link
                to="/daftar"
                className="tutorai-btn tutorai-btn--primary"
              >
                <span>
                  Mulai Petualangan
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.6 7.99556L5.55 8.82056C5.78333 8.3539 6.025 7.9039 6.275 7.47056C6.525 7.03723 6.8 6.6039 7.1 6.17056L5.7 5.89556L3.6 7.99556ZM7.15 10.0706L10 12.8956C10.7 12.6289 11.45 12.2206 12.25 11.6706C13.05 11.1206 13.8 10.4956 14.5 9.79556C15.6667 8.6289 16.5792 7.33306 17.2375 5.90806C17.8958 4.48306 18.1833 3.17056 18.1 1.97056C16.9 1.88723 15.5833 2.17473 14.15 2.83306C12.7167 3.4914 11.4167 4.4039 10.25 5.57056C9.55 6.27056 8.925 7.02056 8.375 7.82056C7.825 8.62056 7.41667 9.37056 7.15 10.0706ZM11.6 8.44556C11.2167 8.06223 11.025 7.5914 11.025 7.03306C11.025 6.47473 11.2167 6.0039 11.6 5.62056C11.9833 5.23723 12.4583 5.04556 13.025 5.04556C13.5917 5.04556 14.0667 5.23723 14.45 5.62056C14.8333 6.0039 15.025 6.47473 15.025 7.03306C15.025 7.5914 14.8333 8.06223 14.45 8.44556C14.0667 8.8289 13.5917 9.02056 13.025 9.02056C12.4583 9.02056 11.9833 8.8289 11.6 8.44556ZM12.075 16.4706L14.175 14.3706L13.9 12.9706C13.4667 13.2706 13.0333 13.5414 12.6 13.7831C12.1667 14.0247 11.7167 14.2622 11.25 14.4956L12.075 16.4706ZM19.9 0.145565C20.2167 2.16223 20.0208 4.12473 19.3125 6.03306C18.6042 7.9414 17.3833 9.76223 15.65 11.4956L16.15 13.9706C16.2167 14.3039 16.2 14.6289 16.1 14.9456C16 15.2622 15.8333 15.5372 15.6 15.7706L11.4 19.9706L9.3 15.0456L5.025 10.7706L0.1 8.67056L4.275 4.47056C4.50833 4.23723 4.7875 4.07056 5.1125 3.97056C5.4375 3.87056 5.76667 3.8539 6.1 3.92056L8.575 4.42056C10.3083 2.68723 12.125 1.46223 14.025 0.745565C15.925 0.0288979 17.8833 -0.171102 19.9 0.145565ZM1.875 13.9456C2.45833 13.3622 3.17083 13.0664 4.0125 13.0581C4.85417 13.0497 5.56667 13.3372 6.15 13.9206C6.73333 14.5039 7.02083 15.2164 7.0125 16.0581C7.00417 16.8997 6.70833 17.6122 6.125 18.1956C5.70833 18.6122 5.0125 18.9706 4.0375 19.2706C3.0625 19.5706 1.71667 19.8372 0 20.0706C0.233333 18.3539 0.5 17.0081 0.8 16.0331C1.1 15.0581 1.45833 14.3622 1.875 13.9456ZM3.3 15.3456C3.13333 15.5122 2.96667 15.8164 2.8 16.2581C2.63333 16.6997 2.51667 17.1456 2.45 17.5956C2.9 17.5289 3.34583 17.4164 3.7875 17.2581C4.22917 17.0997 4.53333 16.9372 4.7 16.7706C4.9 16.5706 5.00833 16.3289 5.025 16.0456C5.04167 15.7622 4.95 15.5206 4.75 15.3206C4.55 15.1206 4.30833 15.0247 4.025 15.0331C3.74167 15.0414 3.5 15.1456 3.3 15.3456Z"
                      fill="#0B1C30"
                    />
                  </svg>
                </span>
              </Link>
              <button
                type="button"
                className="tutorai-btn tutorai-btn--outline"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 14.5L14.5 10L7.5 5.5V14.5ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                    fill="#004AC6"
                  />
                </svg>
                Lihat Demo
              </button>
            </div>

            <div className="tutorai-hero__trust">
              <span className="tutorai-hero__trust-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.6 21L5.7 17.8L2.1 17L2.45 13.3L0 10.5L2.45 7.7L2.1 4L5.7 3.2L7.6 0L11 1.45L14.4 0L16.3 3.2L19.9 4L19.55 7.7L22 10.5L19.55 13.3L19.9 17L16.3 17.8L14.4 21L11 19.55L7.6 21ZM8.45 18.45L11 17.35L13.6 18.45L15 16.05L17.75 15.4L17.5 12.6L19.35 10.5L17.5 8.35L17.75 5.55L15 4.95L13.55 2.55L11 3.65L8.4 2.55L7 4.95L4.25 5.55L4.5 8.35L2.65 10.5L4.5 12.6L4.25 15.45L7 16.05L8.45 18.45ZM9.95 14.05L15.6 8.4L14.2 6.95L9.95 11.2L7.8 9.1L6.4 10.5L9.95 14.05Z"
                    fill="#006E2F"
                  />
                </svg>
                Teruji 10k+ Siswa
              </span>
              <span className="tutorai-hero__trust-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8L16.75 5.25L14 4L16.75 2.75L18 0L19.25 2.75L22 4L19.25 5.25L18 8ZM18 22L16.75 19.25L14 18L16.75 16.75L18 14L19.25 16.75L22 18L19.25 19.25L18 22ZM8 19L5.5 13.5L0 11L5.5 8.5L8 3L10.5 8.5L16 11L10.5 13.5L8 19ZM8 14.15L9 12L11.15 11L9 10L8 7.85L7 10L4.85 11L7 12L8 14.15Z"
                    fill="#735C00"
                  />
                </svg>
                Powered by AVIRI
              </span>
              <span className="tutorai-hero__trust-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18C7.75 18 6.57917 17.7625 5.4875 17.2875C4.39583 16.8125 3.44583 16.1708 2.6375 15.3625C1.82917 14.5542 1.1875 13.6042 0.7125 12.5125C0.2375 11.4208 0 10.25 0 9C0 7.75 0.2375 6.57917 0.7125 5.4875C1.1875 4.39583 1.82917 3.44583 2.6375 2.6375C3.44583 1.82917 4.39583 1.1875 5.4875 0.7125C6.57917 0.2375 7.75 0 9 0C10.3667 0 11.6625 0.291667 12.8875 0.875C14.1125 1.45833 15.15 2.28333 16 3.35V1H18V7H12V5H14.75C14.0667 4.06667 13.225 3.33333 12.225 2.8C11.225 2.26667 10.15 2 9 2C7.05 2 5.39583 2.67917 4.0375 4.0375C2.67917 5.39583 2 7.05 2 9C2 10.95 2.67917 12.6042 4.0375 13.9625C5.39583 15.3208 7.05 16 9 16C10.75 16 12.2792 15.4333 13.5875 14.3C14.8958 13.1667 15.6667 11.7333 15.9 10H17.95C17.7 12.2833 16.7208 14.1875 15.0125 15.7125C13.3042 17.2375 11.3 18 9 18ZM11.8 13.2L8 9.4V4H10V8.6L13.2 11.8L11.8 13.2Z"
                    fill="#004AC6"
                  />
                </svg>
                Respons Instan
              </span>
            </div>
          </div>
        </section>

        <section className="tutorai-chat">
          <div className="tutorai-chat__card">
            <div className="tutorai-chat__header">
              <div className="tutorai-chat__header-user">
                <img
                  src={headerAvatarSrc}
                  alt=""
                  className="tutorai-chat__header-avatar"
                />
                <div>
                  <p className="tutorai-chat__header-name">SuksesTKA Tutor</p>
                  <p className="tutorai-chat__header-status">
                    <span />
                    Online
                  </p>
                </div>
              </div>
              <div className="tutorai-chat__header-actions">
                <button type="button" aria-label="Riwayat">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18C6.7 18 4.69583 17.2375 2.9875 15.7125C1.27917 14.1875 0.3 12.2833 0.05 10H2.1C2.33333 11.7333 3.10417 13.1667 4.4125 14.3C5.72083 15.4333 7.25 16 9 16C10.95 16 12.6042 15.3208 13.9625 13.9625C15.3208 12.6042 16 10.95 16 9C16 7.05 15.3208 5.39583 13.9625 4.0375C12.6042 2.67917 10.95 2 9 2C7.85 2 6.775 2.26667 5.775 2.8C4.775 3.33333 3.93333 4.06667 3.25 5H6V7H0V1H2V3.35C2.85 2.28333 3.8875 1.45833 5.1125 0.875C6.3375 0.291667 7.63333 0 9 0C10.25 0 11.4208 0.2375 12.5125 0.7125C13.6042 1.1875 14.5542 1.82917 15.3625 2.6375C16.1708 3.44583 16.8125 4.39583 17.2875 5.4875C17.7625 6.57917 18 7.75 18 9C18 10.25 17.7625 11.4208 17.2875 12.5125C16.8125 13.6042 16.1708 14.5542 15.3625 15.3625C14.5542 16.1708 13.6042 16.8125 12.5125 17.2875C11.4208 17.7625 10.25 18 9 18ZM11.8 13.2L8 9.4V4H10V8.6L13.2 11.8L11.8 13.2Z"
                      fill="#434655"
                    />
                  </svg>
                </button>
                <button type="button" aria-label="Menu">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z"
                      fill="#434655"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className="tutorai-chat__body"
              style={{ backgroundImage: `url(${chatBgImageSrc})` }}
            >
              <div className="tutorai-chat__overlay" />
              <div className="tutorai-chat__messages">
                <div className="tutorai-chat__message tutorai-chat__message--bot">
                  <img
                    src={botSmallAvatarSrc}
                    alt=""
                    className="tutorai-chat__avatar"
                  />
                  <div className="tutorai-chat__bubble">
                    Hello! I&apos;m Prof. Bot. How can I help with your studies
                    today?
                  </div>
                </div>
                <div className="tutorai-chat__message tutorai-chat__message--user">
                  <div className="tutorai-chat__bubble tutorai-chat__bubble--user">
                    I need help with calculus, specifically finding the
                    derivative of f(x) = x^3 - 4x.
                  </div>
                  <span className="tutorai-chat__user-avatar">U</span>
                </div>
                <div className="tutorai-chat__message tutorai-chat__message--bot">
                  <img
                    src={botSmallAvatarSrc}
                    alt=""
                    className="tutorai-chat__avatar"
                  />
                  <div className="tutorai-chat__bubble">
                    f&apos;(x) = 3x² - 4(1)
                    <br />
                    f&apos;(x) = 3x² - 4
                  </div>
                </div>
              </div>

              <div className="tutorai-chat__wall">
                <div className="tutorai-chat__wall-card">
                  <span className="tutorai-chat__wall-icon">
                    <svg
                      width="20"
                      height="27"
                      viewBox="0 0 20 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 26.25C1.8125 26.25 1.22396 26.0052 0.734375 25.5156C0.244792 25.026 0 24.4375 0 23.75V11.25C0 10.5625 0.244792 9.97396 0.734375 9.48438C1.22396 8.99479 1.8125 8.75 2.5 8.75H3.75V6.25C3.75 4.52083 4.35938 3.04688 5.57812 1.82812C6.79688 0.609375 8.27083 0 10 0C11.7292 0 13.2031 0.609375 14.4219 1.82812C15.6406 3.04688 16.25 4.52083 16.25 6.25V8.75H17.5C18.1875 8.75 18.776 8.99479 19.2656 9.48438C19.7552 9.97396 20 10.5625 20 11.25V23.75C20 24.4375 19.7552 25.026 19.2656 25.5156C18.776 26.0052 18.1875 26.25 17.5 26.25H2.5ZM2.5 23.75H17.5V11.25H2.5V23.75ZM10 20C10.6875 20 11.276 19.7552 11.7656 19.2656C12.2552 18.776 12.5 18.1875 12.5 17.5C12.5 16.8125 12.2552 16.224 11.7656 15.7344C11.276 15.2448 10.6875 15 10 15C9.3125 15 8.72396 15.2448 8.23438 15.7344C7.74479 16.224 7.5 16.8125 7.5 17.5C7.5 18.1875 7.74479 18.776 8.23438 19.2656C8.72396 19.7552 9.3125 20 10 20ZM6.25 8.75H13.75V6.25C13.75 5.20833 13.3854 4.32292 12.6562 3.59375C11.9271 2.86458 11.0417 2.5 10 2.5C8.95833 2.5 8.07292 2.86458 7.34375 3.59375C6.61458 4.32292 6.25 5.20833 6.25 6.25V8.75ZM2.5 23.75V11.25V23.75Z"
                        fill="#EEEFFF"
                      />
                    </svg>
                  </span>
                  <h3 className="tutorai-chat__wall-title">
                    Siap untuk Bertanya?
                  </h3>
                  <p className="tutorai-chat__wall-desc">
                    Masuk atau daftar untuk melanjutkan obrolan dan dapatkan
                    penjelasan tak terbatas.
                  </p>
                  <div className="tutorai-chat__wall-actions">
                    <Link
                      to="/daftar"
                      className="tutorai-chat__wall-btn tutorai-chat__wall-btn--primary"
                    >
                      Mulai Belajar Sekarang
                    </Link>
                    <Link
                      to="/login"
                      className="tutorai-chat__wall-btn tutorai-chat__wall-btn--text"
                    >
                      Sudah punya akun? Masuk
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="tutorai-chat__footer">
              <div className="tutorai-chat__input">
                Tanyakan materi apa saja...
              </div>
            </div>
          </div>
        </section>

        <section className="tutorai-features">
          <div className="tutorai-features__head">
            <h2 className="tutorai-features__title">
              Kenapa Memilih{" "}
              <span className="tutorai-features__title-blue">Sukses</span>
              <span className="tutorai-features__title-green">TKA</span>{" "}
              <span className="tutorai-features__title-blue">Tutor?</span>
            </h2>
            <p className="tutorai-features__subtitle">
              Teknologi SuksesTKA Tutor yang dirancang khusus untuk memahami
              kebutuhan belajarmu.
            </p>
          </div>
          <div className="tutorai-features__grid">
            {features.map((feature) => (
              <article className="tutorai-feature-card" key={feature.key}>
                <span
                  className="tutorai-feature-card__icon"
                  style={{ background: feature.background }}
                >
                  {feature.icon}
                </span>
                <h3 className="tutorai-feature-card__title">{feature.title}</h3>
                <p className="tutorai-feature-card__desc">{feature.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tutorai-testimonials">
          <div className="tutorai-testimonials__head">
            <h2 className="tutorai-testimonials__title">Kisah Sukses Siswa</h2>
            <p className="tutorai-testimonials__subtitle">
              Lihat bagaimana AI Tutor membantu mereka meraih nilai terbaik.
            </p>
          </div>
          <Swiper
            className="tutorai-testimonials__swiper"
            modules={[Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={24}
            breakpoints={{
              961: {
                slidesPerView: 3,
              },
            }}
            loop
            speed={700}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
          >
            {testimonialSlides.map((testimonial, index) => (
              <SwiperSlide
                className="tutorai-testimonial-card"
                key={`${testimonial.key}-${index}`}
              >
                <div className="tutorai-testimonial-card__stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="tutorai-testimonial-card__text">
                  {testimonial.text}
                </p>
                <div className="tutorai-testimonial-card__author">
                  <span
                    className="tutorai-testimonial-card__avatar"
                    style={{
                      background: testimonial.avatarBg,
                      color: testimonial.avatarColor,
                    }}
                  >
                    {testimonial.initial}
                  </span>
                  <div>
                    <p className="tutorai-testimonial-card__name">
                      {testimonial.name}
                    </p>
                    <p className="tutorai-testimonial-card__role">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default TutorAI;
