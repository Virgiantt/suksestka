import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/siswa/Register.css";

const heroImageSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/6801a2aefb10406b820dd0a1f33d43dc46dcfd60?width=1382";
const logoImageSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/946e00083bcacf4e4b6617ad452d0426fd1b41f2?width=102";

type Role = "siswa" | "guru";

function Register() {
  const [role, setRole] = useState<Role>("siswa");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="register">
      <div className="register__media">
        <img
          src={heroImageSrc}
          alt="Siswa belajar bersama guru di ruang kelas"
          className="register__media-image"
        />
      </div>

      <div className="register__panel">
        <span className="register__blob" aria-hidden="true" />

        <svg
          className="register__deco register__deco--star"
          width="120"
          height="127"
          viewBox="0 0 120 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g opacity="0.4">
            <path
              d="M37.5 100C34.75 100 32.3958 99.0208 30.4375 97.0625C28.4792 95.1042 27.5 92.75 27.5 90H47.5C47.5 92.75 46.5208 95.1042 44.5625 97.0625C42.6042 99.0208 40.25 100 37.5 100ZM17.5 85V75H57.5V85H17.5ZM18.75 70C13 66.5833 8.4375 62 5.0625 56.25C1.6875 50.5 0 44.25 0 37.5C0 27.0833 3.64583 18.2292 10.9375 10.9375C18.2292 3.64583 27.0833 0 37.5 0C47.9167 0 56.7708 3.64583 64.0625 10.9375C71.3542 18.2292 75 27.0833 75 37.5C75 44.25 73.3125 50.5 69.9375 56.25C66.5625 62 62 66.5833 56.25 70H18.75Z"
              fill="#735C00"
              fillOpacity="0.2"
            />
          </g>
        </svg>
        <svg
          className="register__deco register__deco--triangle"
          width="71"
          height="77"
          viewBox="0 0 71 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g opacity="0.7">
            <path
              d="M58.3333 40.8333V20.7083L32.0833 35L0 17.5L32.0833 0L64.1667 17.5V40.8333H58.3333ZM32.0833 52.5L11.6667 41.4167V26.8333L32.0833 37.9167L52.5 26.8333V41.4167L32.0833 52.5Z"
              fill="#2563EB"
              fillOpacity="0.4"
            />
          </g>
        </svg>
        <svg
          className="register__deco register__deco--sparkle"
          width="67"
          height="64"
          viewBox="0 0 67 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            opacity="0.6"
            d="M12.75 63.3333L18.1667 39.9167L0 24.1667L24 22.0833L33.3333 0L42.6667 22.0833L66.6667 24.1667L48.5 39.9167L53.9167 63.3333L33.3333 50.9167L12.75 63.3333Z"
            fill="#004AC6"
            fillOpacity="0.3"
          />
        </svg>
        <svg
          className="register__deco register__deco--arrow"
          width="101"
          height="107"
          viewBox="0 0 101 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g opacity="0.5">
            <path
              d="M0 75V57.2917L55 2.39583C55.8333 1.63194 56.7535 1.04167 57.7604 0.625C58.7674 0.208333 59.8264 0 60.9375 0C62.0486 0 63.125 0.208333 64.1667 0.625C65.2083 1.04167 66.1111 1.66667 66.875 2.5L72.6042 8.33333C73.4375 9.09722 74.0451 10 74.4271 11.0417C74.809 12.0833 75 13.125 75 14.1667C75 15.2778 74.809 16.3368 74.4271 17.3438C74.0451 18.3507 73.4375 19.2708 72.6042 20.1042L17.7083 75H0ZM60.8333 20L66.6667 14.1667L60.8333 8.33333L55 14.1667L60.8333 20Z"
              fill="#006E2F"
              fillOpacity="0.2"
            />
          </g>
        </svg>

        <div className="register__card">
          <div className="register__header">
            <div className="register__logo-row">
              <img src={logoImageSrc} alt="" className="register__logo-icon" />
              <span className="register__logo-text">
                <span className="text-blue">Sukses</span>
                <span className="text-green">TKA</span>
              </span>
            </div>
            <p className="register__subtitle">
              Mulai perjalanan belajarmu hari ini.
            </p>
          </div>

          <form
            className="register__form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="register__role-section">
              <span className="register__role-label">Pilih Peran</span>
              <div className="register__role-grid">
                <button
                  type="button"
                  className={`register__role-card${
                    role === "siswa" ? " is-active" : ""
                  }`}
                  onClick={() => setRole("siswa")}
                  aria-pressed={role === "siswa"}
                >
                  <span className="register__role-icon">
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 14V7.1L11 12L0 6L11 0L22 6V14H20ZM11 18L4 14.2V9.2L11 13L18 9.2V14.2L11 18Z"
                        fill="#004AC6"
                      />
                    </svg>
                  </span>
                  <span className="register__role-text">
                    <span className="register__role-title">Siswa</span>
                    <span className="register__role-desc">
                      Belajar & Tryout
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className={`register__role-card${
                    role === "guru" ? " is-active" : ""
                  }`}
                  onClick={() => setRole("guru")}
                  aria-pressed={role === "guru"}
                >
                  <span className="register__role-icon">
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 20V16.925L15.525 11.425C15.675 11.275 15.8417 11.1667 16.025 11.1C16.2083 11.0333 16.3917 11 16.575 11C16.775 11 16.9667 11.0375 17.15 11.1125C17.3333 11.1875 17.5 11.3 17.65 11.45L18.575 12.375C18.7083 12.525 18.8125 12.6917 18.8875 12.875C18.9625 13.0583 19 13.2417 19 13.425C19 13.6083 18.9667 13.7958 18.9 13.9875C18.8333 14.1792 18.725 14.35 18.575 14.5L13.075 20H10ZM17.5 13.425L16.575 12.5L17.5 13.425ZM11.5 18.5H12.45L15.475 15.45L15.025 14.975L14.55 14.525L11.5 17.55V18.5ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V9H14V7H9V2H2V18H8V20H2ZM15.025 14.975L14.55 14.525L15.475 15.45L15.025 14.975Z"
                        fill="#004AC6"
                      />
                    </svg>
                  </span>
                  <span className="register__role-text">
                    <span className="register__role-title">Guru</span>
                    <span className="register__role-desc">Kelola Kelas</span>
                  </span>
                </button>
              </div>
            </div>

            <div className="register__divider" role="separator" />

            <div className="register__fields">
              <div className="register__field">
                <label className="register__label" htmlFor="register-name">
                  Nama Lengkap
                </label>
                <div className="register__input-wrap">
                  <svg
                    className="register__input-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM2 14H14V13.2C14 13.0167 13.9542 12.85 13.8625 12.7C13.7708 12.55 13.65 12.4333 13.5 12.35C12.6 11.9 11.6917 11.5625 10.775 11.3375C9.85833 11.1125 8.93333 11 8 11C7.06667 11 6.14167 11.1125 5.225 11.3375C4.30833 11.5625 3.4 11.9 2.5 12.35C2.35 12.4333 2.22917 12.55 2.1375 12.7C2.04583 12.85 2 13.0167 2 13.2V14ZM8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6Z"
                      fill="#737686"
                    />
                  </svg>
                  <input
                    id="register-name"
                    type="text"
                    className="register__input"
                    placeholder="Masukkan nama lengkap"
                    autoComplete="name"
                  />
                </div>
              </div>

              <div className="register__field">
                <label className="register__label" htmlFor="register-email">
                  Email
                </label>
                <div className="register__input-wrap">
                  <svg
                    className="register__input-icon"
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V4V14V4Z"
                      fill="#737686"
                    />
                  </svg>
                  <input
                    id="register-email"
                    type="email"
                    className="register__input"
                    placeholder="contoh@email.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="register__field">
                <label className="register__label" htmlFor="register-password">
                  Password
                </label>
                <div className="register__input-wrap">
                  <svg
                    className="register__input-icon"
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 21C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V9C0 8.45 0.195833 7.97917 0.5875 7.5875C0.979167 7.19583 1.45 7 2 7H3V5C3 3.61667 3.4875 2.4375 4.4625 1.4625C5.4375 0.4875 6.61667 0 8 0C9.38333 0 10.5625 0.4875 11.5375 1.4625C12.5125 2.4375 13 3.61667 13 5V7H14C14.55 7 15.0208 7.19583 15.4125 7.5875C15.8042 7.97917 16 8.45 16 9V19C16 19.55 15.8042 20.0208 15.4125 20.4125C15.0208 20.8042 14.55 21 14 21H2ZM2 19H14V9H2V19ZM8 16C8.55 16 9.02083 15.8042 9.4125 15.4125C9.80417 15.0208 10 14.55 10 14C10 13.45 9.80417 12.9792 9.4125 12.5875C9.02083 12.1958 8.55 12 8 12C7.45 12 6.97917 12.1958 6.5875 12.5875C6.19583 12.9792 6 13.45 6 14C6 14.55 6.19583 15.0208 6.5875 15.4125C6.97917 15.8042 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7ZM2 19V9V19Z"
                      fill="#737686"
                    />
                  </svg>
                  <input
                    id="register-password"
                    type={showPassword ? "text" : "password"}
                    className="register__input register__input--password"
                    placeholder="Minimal 8 karakter"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="register__toggle-password"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Sembunyikan password" : "Tampilkan password"
                    }
                  >
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1 10.5L13.65 9.05C13.8 8.26667 13.575 7.53333 12.975 6.85C12.375 6.16667 11.6 5.9 10.65 6.05L9.2 4.6C9.48333 4.46667 9.77083 4.36667 10.0625 4.3C10.3542 4.23333 10.6667 4.2 11 4.2C12.25 4.2 13.3125 4.6375 14.1875 5.5125C15.0625 6.3875 15.5 7.45 15.5 8.7C15.5 9.03333 15.4667 9.34583 15.4 9.6375C15.3333 9.92917 15.2333 10.2167 15.1 10.5ZM18.3 13.65L16.85 12.25C17.4833 11.7667 18.0458 11.2375 18.5375 10.6625C19.0292 10.0875 19.45 9.43333 19.8 8.7C18.9667 7.01667 17.7708 5.67917 16.2125 4.6875C14.6542 3.69583 12.9167 3.2 11 3.2C10.5167 3.2 10.0417 3.23333 9.575 3.3C9.10833 3.36667 8.65 3.46667 8.2 3.6L6.65 2.05C7.33333 1.76667 8.03333 1.55417 8.75 1.4125C9.46667 1.27083 10.2167 1.2 11 1.2C13.5167 1.2 15.7583 1.89583 17.725 3.2875C19.6917 4.67917 21.1167 6.48333 22 8.7C21.6167 9.68333 21.1125 10.5958 20.4875 11.4375C19.8625 12.2792 19.1333 13.0167 18.3 13.65ZM18.8 19.8L14.6 15.65C14.0167 15.8333 13.4292 15.9708 12.8375 16.0625C12.2458 16.1542 11.6333 16.2 11 16.2C8.48333 16.2 6.24167 15.5042 4.275 14.1125C2.30833 12.7208 0.883333 10.9167 0 8.7C0.35 7.81667 0.791667 6.99583 1.325 6.2375C1.85833 5.47917 2.46667 4.8 3.15 4.2L0.4 1.4L1.8 0L20.2 18.4L18.8 19.8ZM4.55 5.6C4.06667 6.03333 3.625 6.50833 3.225 7.025C2.825 7.54167 2.48333 8.1 2.2 8.7C3.03333 10.3833 4.22917 11.7208 5.7875 12.7125C7.34583 13.7042 9.08333 14.2 11 14.2C11.3333 14.2 11.6583 14.1792 11.975 14.1375C12.2917 14.0958 12.6167 14.05 12.95 14L12.05 13.05C11.8667 13.1 11.6917 13.1375 11.525 13.1625C11.3583 13.1875 11.1833 13.2 11 13.2C9.75 13.2 8.6875 12.7625 7.8125 11.8875C6.9375 11.0125 6.5 9.95 6.5 8.7C6.5 8.51667 6.5125 8.34167 6.5375 8.175C6.5625 8.00833 6.6 7.83333 6.65 7.65L4.55 5.6Z"
                        fill="#737686"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className="register__submit">
              Daftar Sekarang
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z"
                  fill="white"
                />
              </svg>
            </button>

            <p className="register__login-link">
              Sudah punya akun? <Link to="/login">Masuk di sini</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
