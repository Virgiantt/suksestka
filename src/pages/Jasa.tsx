import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/siswa/Jasa.css";

function CheckIcon({ tone = "muted" }: { tone?: "muted" | "solid" | "accent" }) {
  if (tone === "solid") {
    return (
      <span className="jasa-check jasa-check--solid">
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.8 8.01667L0 4.21667L0.95 3.26667L3.8 6.11667L9.91667 0L10.8667 0.95L3.8 8.01667Z" fill="white" />
        </svg>
      </span>
    );
  }
  if (tone === "accent") {
    return (
      <span className="jasa-check jasa-check--accent">
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.8 8.01667L0 4.21667L0.95 3.26667L3.8 6.11667L9.91667 0L10.8667 0.95L3.8 8.01667Z" fill="#004AC6" />
        </svg>
      </span>
    );
  }
  return (
    <span className="jasa-check jasa-check--muted">
      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.8 8.01667L0 4.21667L0.95 3.26667L3.8 6.11667L9.91667 0L10.8667 0.95L3.8 8.01667Z" fill="#006E2F" />
      </svg>
    </span>
  );
}

type PlanItem = string | { text: string; tone?: "muted" | "solid" | "accent"; strong?: boolean };

interface PricingPlan {
  key: string;
  variant: "default" | "popular";
  title: string;
  subtitle: string;
  price: string;
  icon: ReactNode;
  items: PlanItem[];
  action: string;
}

const pricingPlans: PricingPlan[] = [
  {
    key: "pemula",
    variant: "default",
    title: "Paket Pemula",
    subtitle: "Starter",
    price: "Rp 49.000",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.8 17.0244C1.925 16.1494 1.23958 15.1382 0.74375 13.991C0.247917 12.8438 0 11.6577 0 10.4327C0 9.20769 0.233333 7.99728 0.7 6.80144C1.16667 5.60561 1.925 4.48269 2.975 3.43269C3.65556 2.75214 4.49653 2.1688 5.49792 1.68269C6.49931 1.19658 7.68542 0.812553 9.05625 0.530609C10.4271 0.248664 11.9924 0.0785256 13.7521 0.0201923C15.5118 -0.038141 17.4806 0.0299145 19.6583 0.224359C19.8139 2.28547 19.8625 4.1813 19.8042 5.91186C19.7458 7.64241 19.5854 9.20283 19.3229 10.5931C19.0604 11.9834 18.691 13.1987 18.2146 14.2389C17.7382 15.2792 17.15 16.1494 16.45 16.8494C15.4194 17.8799 14.3257 18.6334 13.1687 19.1098C12.0118 19.5862 10.8306 19.8244 9.625 19.8244C8.36111 19.8244 7.12639 19.5764 5.92083 19.0806C4.71528 18.5848 3.675 17.8994 2.8 17.0244Z"
          fill="#004AC6"
        />
      </svg>
    ),
    items: ["Akses 5 Mapel", "AI Tutor Dasar", "1x Tryout/bulan", "Bank Soal Terupdate", "Rangkuman Materi PDF"],
    action: "Pilih Pemula",
  },
  {
    key: "juara",
    variant: "popular",
    title: "Paket Juara",
    subtitle: "Best Value",
    price: "Rp 99.000",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.33333 24V21.3333H10.6667V17.2C9.57778 16.9556 8.60556 16.4944 7.75 15.8167C6.89444 15.1389 6.26667 14.2889 5.86667 13.2667C4.2 13.0667 2.80556 12.3389 1.68333 11.0833C0.561111 9.82778 0 8.35556 0 6.66667V5.33333C0 4.6 0.261111 3.97222 0.783333 3.45C1.30556 2.92778 1.93333 2.66667 2.66667 2.66667H5.33333V0H18.6667V2.66667H21.3333C22.0667 2.66667 22.6944 2.92778 23.2167 3.45C23.7389 3.97222 24 4.6 24 5.33333V6.66667C24 8.35556 23.4389 9.82778 22.3167 11.0833C21.1944 12.3389 19.8 13.0667 18.1333 13.2667C17.7333 14.2889 17.1056 15.1389 16.25 15.8167C15.3944 16.4944 14.4222 16.9556 13.3333 17.2V21.3333H18.6667V24H5.33333Z"
          fill="#004AC6"
        />
      </svg>
    ),
    items: [
      { text: "Semua Mapel", tone: "solid" as const },
      { text: "AI Tutor Pro 24/7", tone: "solid" as const },
      { text: "Tryout Tanpa Batas", tone: "solid" as const },
      { text: "Analisis Peluang Lulus", tone: "accent" as const },
      { text: "Akses Komunitas", tone: "accent" as const },
      { text: "Webinar Mingguan", tone: "accent" as const },
      { text: "Sertifikat Kelulusan", tone: "accent" as const },
    ],
    action: "Mulai Berlangganan",
  },
  {
    key: "ultimate",
    variant: "default",
    title: "Paket Ultimate",
    subtitle: "Premium",
    price: "Rp 199.000",
    icon: (
      <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.6667 21L0 7L3.5 0H19.8333L23.3333 7L11.6667 21ZM8.89583 5.83333H14.4375L12.6875 2.33333H10.6458L8.89583 5.83333ZM10.5 15.9542V8.16667H4.025L10.5 15.9542ZM12.8333 15.9542L19.3083 8.16667H12.8333V15.9542ZM17.0333 5.83333H20.125L18.375 2.33333H15.2833L17.0333 5.83333ZM3.20833 5.83333H6.3L8.05 2.33333H4.95833L3.20833 5.83333Z"
          fill="#004AC6"
        />
      </svg>
    ),
    items: [
      { text: "Semua fitur Paket Juara", strong: true },
      { text: "Sesi Konsultasi Privat 1-on-1", strong: false },
      { text: "Materi Eksklusif Olimpiade", strong: false },
      { text: "Laporan Progres Mingguan ke Orang Tua", strong: false },
    ],
    action: "Pilih Ultimate",
  },
];

const privateLessons = [
  {
    key: "sd",
    title: "Siswa SD",
    subtitle: "Bimbingan belajar dasar & PR",
    desc: "Fokus pada pemahaman konsep dasar matematika, sains, dan bahasa dengan metode yang menyenangkan.",
    tint: "blue",
    icon: (
      <svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.3333 30L6.66667 23.6667V13.6667L0 10L18.3333 0L36.6667 10V23.3333H33.3333V11.8333L30 13.6667V23.6667L18.3333 30ZM18.3333 16.1667L29.75 10L18.3333 3.83333L6.91667 10L18.3333 16.1667ZM18.3333 26.2083L26.6667 21.7083V15.4167L18.3333 20L10 15.4167V21.7083L18.3333 26.2083Z"
          fill="#004AC6"
        />
      </svg>
    ),
  },
  {
    key: "smp",
    title: "Siswa SMP",
    subtitle: "Persiapan UN & Kompetisi",
    desc: "Pendalaman materi sekolah dan strategi pengerjaan soal cepat untuk menghadapi ujian sekolah.",
    tint: "green",
    icon: (
      <svg width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.6667 9.83333V7C22.5833 6.61111 23.5208 6.31944 24.4792 6.125C25.4375 5.93056 26.4444 5.83333 27.5 5.83333C28.2222 5.83333 28.9306 5.88889 29.625 6C30.3194 6.11111 31 6.25 31.6667 6.41667V9.08333C31 8.83333 30.3264 8.64583 29.6458 8.52083C28.9653 8.39583 28.25 8.33333 27.5 8.33333C26.4444 8.33333 25.4306 8.46528 24.4583 8.72917C23.4861 8.99306 22.5556 9.36111 21.6667 9.83333ZM18.3333 26.6667C17 25.6111 15.5556 24.7917 14 24.2083C12.4444 23.625 10.8333 23.3333 9.16667 23.3333C8 23.3333 6.85417 23.4861 5.72917 23.7917C4.60417 24.0972 3.52778 24.5278 2.5 25.0833C1.91667 25.3889 1.35417 25.375 0.8125 25.0417C0.270833 24.7083 0 24.2222 0 23.5833V3.5C0 3.19444 0.0763889 2.90278 0.229167 2.625C0.381944 2.34722 0.611111 2.13889 0.916667 2C2.19444 1.33333 3.52778 0.833333 4.91667 0.5C6.30556 0.166667 7.72222 0 9.16667 0C10.7778 0 12.3542 0.208333 13.8958 0.625C15.4375 1.04167 16.9167 1.66667 18.3333 2.5C19.75 1.66667 21.2292 1.04167 22.7708 0.625C24.3125 0.208333 25.8889 0 27.5 0C28.9444 0 30.3611 0.166667 31.75 0.5C33.1389 0.833333 34.4722 1.33333 35.75 2C36.0556 2.13889 36.2847 2.34722 36.4375 2.625C36.5903 2.90278 36.6667 3.19444 36.6667 3.5V23.5833C36.6667 24.2222 36.3958 24.7083 35.8542 25.0417C35.3125 25.375 34.75 25.3889 34.1667 25.0833C33.1389 24.5278 32.0625 24.0972 30.9375 23.7917C29.8125 23.4861 28.6667 23.3333 27.5 23.3333C25.8333 23.3333 24.2222 23.625 22.6667 24.2083C21.1111 24.7917 19.6667 25.6111 18.3333 26.6667Z"
          fill="#006E2F"
        />
      </svg>
    ),
  },
  {
    key: "khusus",
    title: "Persiapan Khusus",
    subtitle: "Olimpiade & Ujian Masuk",
    desc: "Kurikulum khusus untuk persiapan kompetisi sains nasional atau ujian masuk sekolah unggulan.",
    tint: "purple",
    icon: (
      <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.7917 11.6667L25.9583 7.66667L21.9583 5.83333L25.9583 4L27.7917 0L29.625 4L33.625 5.83333L29.625 7.66667L27.7917 11.6667ZM31.125 23.3333L29.7917 20.5L26.9583 19.1667L29.7917 17.8333L31.125 15L32.4583 17.8333L35.2917 19.1667L32.4583 20.5L31.125 23.3333ZM9.45833 33.3333L8.95833 29.4167C8.76389 29.3333 8.55556 29.2222 8.33333 29.0833C8.11111 28.9444 7.93056 28.8056 7.79167 28.6667L4.125 30.25L0 23L3.125 20.6667C3.125 20.4444 3.125 20.2222 3.125 20C3.125 19.7778 3.125 19.5556 3.125 19.3333L0 17L4.125 9.75L7.79167 11.3333C7.93056 11.1944 8.11111 11.0556 8.33333 10.9167C8.55556 10.7778 8.76389 10.6667 8.95833 10.5833L9.45833 6.66667H17.7917L18.2917 10.5833C18.4861 10.6667 18.6944 10.7778 18.9167 10.9167C19.1389 11.0556 19.3194 11.1944 19.4583 11.3333L23.125 9.75L27.25 17L24.125 19.3333C24.125 19.5556 24.125 19.7778 24.125 20C24.125 20.2222 24.125 20.4444 24.125 20.6667L27.25 23L23.125 30.25L19.4583 28.6667C19.3194 28.8056 19.1389 28.9444 18.9167 29.0833C18.6944 29.2222 18.4861 29.3333 18.2917 29.4167L17.7917 33.3333H9.45833ZM13.625 25C15.0139 25 16.1944 24.5139 17.1667 23.5417C18.1389 22.5694 18.625 21.3889 18.625 20C18.625 18.6111 18.1389 17.4306 17.1667 16.4583C16.1944 15.4861 15.0139 15 13.625 15C12.2361 15 11.0556 15.4861 10.0833 16.4583C9.11111 17.4306 8.625 18.6111 8.625 20C8.625 21.3889 9.11111 22.5694 10.0833 23.5417C11.0556 24.5139 12.2361 25 13.625 25ZM12.375 30H14.875L15.2083 27C16.0139 26.7778 16.7014 26.4931 17.2708 26.1458C17.8403 25.7986 18.4028 25.3333 18.9583 24.75L21.7083 26L22.875 23.9167L20.4583 22.0833C20.6806 21.4444 20.7917 20.75 20.7917 20C20.7917 19.25 20.6806 18.5556 20.4583 17.9167L22.875 16.0833L21.7083 14L18.9583 15.25C18.4028 14.6667 17.8403 14.2014 17.2708 13.8542C16.7014 13.5069 16.0139 13.2222 15.2083 13L14.875 10H12.375L12.0417 13C11.2361 13.2222 10.5486 13.5069 9.97917 13.8542C9.40972 14.2014 8.84722 14.6667 8.29167 15.25L5.54167 14L4.375 16.0833L6.79167 17.9167C6.56944 18.5556 6.45139 19.25 6.4375 20C6.42361 20.75 6.54167 21.4444 6.79167 22.0833L4.375 23.9167L5.54167 26L8.29167 24.75C8.84722 25.3333 9.40972 25.7986 9.97917 26.1458C10.5486 26.4931 11.2361 26.7778 12.0417 27L12.375 30Z"
          fill="#9333EA"
        />
      </svg>
    ),
  },
];

const faqs = [
  {
    key: "cancel",
    question: "Apakah saya bisa membatalkan langganan kapan saja?",
    answer:
      "Tentu! Kamu bisa membatalkan langganan kapan saja tanpa biaya tambahan melalui halaman akun. Akses tetap aktif sampai akhir periode yang sudah dibayar.",
  },
  {
    key: "ai-tutor",
    question: "Bagaimana cara kerja AI Tutor?",
    answer:
      "AI Tutor menganalisis pertanyaanmu dan memberikan penjelasan langkah demi langkah yang disesuaikan dengan gaya belajarmu, lengkap dengan visual dan contoh interaktif.",
  },
  {
    key: "refund",
    question: "Apakah ada jaminan uang kembali?",
    answer:
      "Ya, kami memberikan jaminan uang kembali 100% dalam 7 hari pertama jika kamu merasa paket yang dipilih belum sesuai dengan kebutuhan belajarmu.",
  },
];

function Jasa() {
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0].key);

  return (
    <div className="page">
      <Navbar active="Jasa" />

      <main>
        <section className="jasa-hero">
          <span className="jasa-hero__blob jasa-hero__blob--blue" aria-hidden="true" />
          <span className="jasa-hero__blob jasa-hero__blob--green" aria-hidden="true" />
          <span className="jasa-hero__blob jasa-hero__blob--gold" aria-hidden="true" />
          <svg
            className="jasa-hero__shape jasa-hero__shape--triangle"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M32.0002 5.3335L5.3335 58.6668H58.6668L32.0002 5.3335Z" fill="#004AC6" fillOpacity="0.2" />
          </svg>
          <svg
            className="jasa-hero__shape jasa-hero__shape--circle"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6.6665 39.9998C6.6665 58.397 21.6027 73.3332 39.9998 73.3332C58.397 73.3332 73.3332 58.397 73.3332 39.9998C73.3332 21.6027 58.397 6.6665 39.9998 6.6665C21.6027 6.6665 6.6665 21.6027 6.6665 39.9998Z"
              fill="#006E2F"
              fillOpacity="0.2"
            />
          </svg>

          <div className="jasa-hero__inner">
            <span className="jasa-hero__badge">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 13.3333L8.33333 10.7917L11.6667 13.3333L10.4167 9.20833L13.75 6.83333H9.66667L8.33333 2.5L7 6.83333H2.91667L6.25 9.20833L5 13.3333ZM8.33333 16.6667C7.18056 16.6667 6.09722 16.4479 5.08333 16.0104C4.06944 15.5729 3.1875 14.9792 2.4375 14.2292C1.6875 13.4792 1.09375 12.5972 0.65625 11.5833C0.21875 10.5694 0 9.48611 0 8.33333C0 7.18056 0.21875 6.09722 0.65625 5.08333C1.09375 4.06944 1.6875 3.1875 2.4375 2.4375C3.1875 1.6875 4.06944 1.09375 5.08333 0.65625C6.09722 0.21875 7.18056 0 8.33333 0C9.48611 0 10.5694 0.21875 11.5833 0.65625C12.5972 1.09375 13.4792 1.6875 14.2292 2.4375C14.9792 3.1875 15.5729 4.06944 16.0104 5.08333C16.4479 6.09722 16.6667 7.18056 16.6667 8.33333C16.6667 9.48611 16.4479 10.5694 16.0104 11.5833C15.5729 12.5972 14.9792 13.4792 14.2292 14.2292C13.4792 14.9792 12.5972 15.5729 11.5833 16.0104C10.5694 16.4479 9.48611 16.6667 8.33333 16.6667Z"
                  fill="#004AC6"
                />
              </svg>
              Paket Belajar Ajaib
            </span>

            <h1 className="jasa-hero__heading">
              Investasi Terbaik untuk
              <br />
              Masa Depan Sang Juara
            </h1>

            <p className="jasa-hero__subtitle">
              Pilih paket yang paling sesuai dengan kebutuhan belajarmu. Dapatkan pendampingan AI
              cerdas dan ribuan latihan soal untuk menaklukkan setiap ujian.
            </p>
          </div>

          <div className="jasa-pricing">
            {pricingPlans.map((plan) => (
              <article
                className={`jasa-plan${plan.variant === "popular" ? " jasa-plan--popular" : ""}`}
                key={plan.key}
              >
                {plan.variant === "popular" && (
                  <span className="jasa-plan__ribbon">
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.25625 8.775L4.9125 6.6375L3.1875 5.25H5.325L6 3.15L6.675 5.25H8.8125L7.06875 6.6375L7.725 8.775L6 7.44375L4.25625 8.775ZM1.5 15.75V9.95625C1.025 9.43125 0.65625 8.83125 0.39375 8.15625C0.13125 7.48125 0 6.7625 0 6C0 4.325 0.58125 2.90625 1.74375 1.74375C2.90625 0.58125 4.325 0 6 0C7.675 0 9.09375 0.58125 10.2563 1.74375C11.4188 2.90625 12 4.325 12 6C12 6.7625 11.8687 7.48125 11.6062 8.15625C11.3438 8.83125 10.975 9.43125 10.5 9.95625V15.75L6 14.25L1.5 15.75Z"
                        fill="white"
                      />
                    </svg>
                    Paling Populer
                  </span>
                )}

                <div className="jasa-plan__head">
                  <div>
                    <h3 className="jasa-plan__title">{plan.title}</h3>
                    <p className="jasa-plan__subtitle">{plan.subtitle}</p>
                  </div>
                  <span className="jasa-plan__icon">{plan.icon}</span>
                </div>

                <div className="jasa-plan__price">
                  <span className="jasa-plan__price-value">{plan.price}</span>
                  <span className="jasa-plan__price-period">/bulan</span>
                </div>

                <ul className="jasa-plan__list">
                  {plan.items.map((item) => {
                    if (typeof item === "string") {
                      return (
                        <li key={item}>
                          <CheckIcon />
                          <span>{item}</span>
                        </li>
                      );
                    }
                    return (
                      <li key={item.text}>
                        <CheckIcon tone={item.tone as "muted" | "solid" | "accent" | undefined} />
                        <span className={item.strong ? "jasa-plan__list-strong" : ""}>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>

                <button
                  type="button"
                  className={`jasa-plan__btn${plan.variant === "popular" ? " jasa-plan__btn--primary" : ""}`}
                >
                  {plan.action}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="jasa-private">
          <div className="jasa-private__head">
            <h2>Les Privat 1-on-1</h2>
            <p>
              Belajar lebih intensif dengan Guru Favorit pilihanmu. Jadwal fleksibel dan materi
              terpersonalisasi sesuai kebutuhanmu.
            </p>
          </div>

          <div className="jasa-private__grid">
            {privateLessons.map((lesson) => (
              <article className={`jasa-lesson jasa-lesson--${lesson.tint}`} key={lesson.key}>
                <div>
                  <span className="jasa-lesson__icon">{lesson.icon}</span>
                  <h3>{lesson.title}</h3>
                  <p className="jasa-lesson__subtitle">{lesson.subtitle}</p>
                  <p className="jasa-lesson__desc">{lesson.desc}</p>
                </div>
                <button type="button" className="jasa-lesson__btn">
                  Cek Jadwal
                </button>
              </article>
            ))}
          </div>

          <svg
            className="jasa-private__wave"
            width="1440"
            height="189"
            viewBox="0 0 1440 189"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 -2L48 9.8125C96 21.625 192 45.25 288 45.25C384 45.25 480 21.625 576 9.8125C672 -2 768 -2 864 9.8125C960 21.625 1056 45.25 1152 45.25C1248 45.25 1344 21.625 1392 9.8125L1440 -2V189H1392C1344 189 1248 189 1152 189C1056 189 960 189 864 189C768 189 672 189 576 189C480 189 384 189 288 189C192 189 96 189 48 189H0V-2Z"
              fill="white"
            />
          </svg>
        </section>

        <section className="jasa-finale">
          <div className="jasa-faq">
            <h2 className="jasa-faq__title">Pertanyaan yang Sering Diajukan</h2>
            <div className="jasa-faq__list">
              {faqs.map((faq) => {
                const isOpen = openFaq === faq.key;
                return (
                  <div className={`jasa-faq-item${isOpen ? " jasa-faq-item--open" : ""}`} key={faq.key}>
                    <button
                      type="button"
                      className="jasa-faq-item__label"
                      onClick={() => setOpenFaq(isOpen ? null : faq.key)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className="jasa-faq-item__toggle">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill="#004AC6" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && <p className="jasa-faq-item__answer">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="jasa-cta">
            <span className="jasa-cta__icon">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 13.3259L9.25 14.7009C9.63889 13.9232 10.0417 13.1732 10.4583 12.4509C10.875 11.7287 11.3333 11.0065 11.8333 10.2843L9.5 9.82594L6 13.3259ZM11.9167 16.7843L16.6667 21.4926C17.8333 21.0482 19.0833 20.3676 20.4167 19.4509C21.75 18.5343 23 17.4926 24.1667 16.3259C26.1111 14.3815 27.6319 12.2218 28.7292 9.84677C29.8264 7.47177 30.3056 5.28427 30.1667 3.28427C28.1667 3.14539 25.9722 3.62455 23.5833 4.72177C21.1944 5.819 19.0278 7.33983 17.0833 9.28427C15.9167 10.4509 14.875 11.7009 13.9583 13.0343C13.0417 14.3676 12.3611 15.6176 11.9167 16.7843ZM19.3333 14.0759C18.6944 13.4371 18.375 12.6523 18.375 11.7218C18.375 10.7912 18.6944 10.0065 19.3333 9.36761C19.9722 8.72872 20.7639 8.40927 21.7083 8.40927C22.6528 8.40927 23.4444 8.72872 24.0833 9.36761C24.7222 10.0065 25.0417 10.7912 25.0417 11.7218C25.0417 12.6523 24.7222 13.4371 24.0833 14.0759C23.4444 14.7148 22.6528 15.0343 21.7083 15.0343C20.7639 15.0343 19.9722 14.7148 19.3333 14.0759ZM20.125 27.4509L23.625 23.9509L23.1667 21.6176C22.4444 22.1176 21.7222 22.569 21 22.9718C20.2778 23.3746 19.5278 23.7704 18.75 24.1593L20.125 27.4509ZM33.1667 0.242608C33.6944 3.60372 33.3681 6.87455 32.1875 10.0551C31.0069 13.2357 28.9722 16.2704 26.0833 19.1593L26.9167 23.2843C27.0278 23.8398 27 24.3815 26.8333 24.9093C26.6667 25.4371 26.3889 25.8954 26 26.2843L19 33.2843L15.5 25.0759L8.375 17.9509L0.166667 14.4509L7.125 7.45094C7.51389 7.06205 7.97917 6.78427 8.52083 6.61761C9.0625 6.45094 9.61111 6.42316 10.1667 6.53427L14.2917 7.36761C17.1806 4.47872 20.2083 2.43705 23.375 1.24261C26.5417 0.0481631 29.8056 -0.28517 33.1667 0.242608ZM3.125 23.2426C4.09722 22.2704 5.28472 21.7773 6.6875 21.7634C8.09028 21.7496 9.27778 22.2287 10.25 23.2009C11.2222 24.1732 11.7014 25.3607 11.6875 26.7634C11.6736 28.1662 11.1806 29.3537 10.2083 30.3259C9.51389 31.0204 8.35417 31.6176 6.72917 32.1176C5.10417 32.6176 2.86111 33.062 0 33.4509C0.388889 30.5898 0.833333 28.3468 1.33333 26.7218C1.83333 25.0968 2.43056 23.9371 3.125 23.2426ZM5.5 25.5759C5.22222 25.8537 4.94444 26.3607 4.66667 27.0968C4.38889 27.8329 4.19444 28.5759 4.08333 29.3259C4.83333 29.2148 5.57639 29.0273 6.3125 28.7634C7.04861 28.4996 7.55556 28.2287 7.83333 27.9509C8.16667 27.6176 8.34722 27.2148 8.375 26.7426C8.40278 26.2704 8.25 25.8676 7.91667 25.5343C7.58333 25.2009 7.18056 25.0412 6.70833 25.0551C6.23611 25.069 5.83333 25.2426 5.5 25.5759Z"
                  fill="white"
                />
              </svg>
            </span>
            <h2 className="jasa-cta__title">Siap Menjadi Juara?</h2>
            <p className="jasa-cta__desc">
              Bergabunglah dengan ribuan siswa lain yang telah merasakan keajaiban belajar bersama
              SuksesTKA.
            </p>
            <Link to="/daftar" className="jasa-cta__btn">
              Mulai Petualangan Belajarmu Sekarang!
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Jasa;
