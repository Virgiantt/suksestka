import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const heroImageSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/e5e73147ba6676142dc6baf9113ed37ddd66a4c4?width=1382";

const VALID_EMAIL = "siswa" + "@" + "gmail.com";
const VALID_PASSWORD = "12345678";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Email atau password salah.");
    }
  }

  return (
    <div className="login">
      <div className="login__panel">
        <span className="login__blob" aria-hidden="true" />

        <svg
          className="login__deco login__deco--star"
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
          className="login__deco login__deco--triangle"
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
          className="login__deco login__deco--sparkle"
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
          className="login__deco login__deco--arrow"
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

        <div className="login__card">
          <div className="login__header">
            <h1 className="login__title">
              Masuk ke <span className="text-blue">Sukses</span>
              <span className="text-green">TKA</span>
            </h1>
            <p className="login__subtitle">
              Lanjutkan perjalanan belajarmu hari ini.
            </p>
          </div>

          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__field">
              <label className="login__label" htmlFor="login-email">
                Email Address
              </label>
              <div className="login__input-wrap">
                <svg
                  className="login__input-icon"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V4V14V4Z"
                    fill="#C3C6D7"
                  />
                </svg>
                <input
                  id="login-email"
                  type="email"
                  className="login__input"
                  placeholder="student@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>

            <div className="login__field">
              <div className="login__field-head">
                <label className="login__label" htmlFor="login-password">
                  Password
                </label>
                <Link to="#" className="login__link">
                  Forgot Password?
                </Link>
              </div>
              <div className="login__input-wrap">
                <svg
                  className="login__input-icon"
                  width="16"
                  height="21"
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 21C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V9C0 8.45 0.195833 7.97917 0.5875 7.5875C0.979167 7.19583 1.45 7 2 7H3V5C3 3.61667 3.4875 2.4375 4.4625 1.4625C5.4375 0.4875 6.61667 0 8 0C9.38333 0 10.5625 0.4875 11.5375 1.4625C12.5125 2.4375 13 3.61667 13 5V7H14C14.55 7 15.0208 7.19583 15.4125 7.5875C15.8042 7.97917 16 8.45 16 9V19C16 19.55 15.8042 20.0208 15.4125 20.4125C15.0208 20.8042 14.55 21 14 21H2ZM2 19H14V9H2V19ZM8 16C8.55 16 9.02083 15.8042 9.4125 15.4125C9.80417 15.0208 10 14.55 10 14C10 13.45 9.80417 12.9792 9.4125 12.5875C9.02083 12.1958 8.55 12 8 12C7.45 12 6.97917 12.1958 6.5875 12.5875C6.19583 12.9792 6 13.45 6 14C6 14.55 6.19583 15.0208 6.5875 15.4125C6.97917 15.8042 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7ZM2 19V9V19Z"
                    fill="#C3C6D7"
                  />
                </svg>
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  className="login__input login__input--password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  type="button"
                  className="login__toggle-password"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                >
                  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z"
                      fill="#C3C6D7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {error ? <p className="login__error">{error}</p> : null}

            <button type="submit" className="login__submit">
              Masuk Sekarang
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white" />
              </svg>
            </button>

            <div className="login__divider">
              <span className="login__divider-line" />
              <span className="login__divider-text">Or continue with</span>
              <span className="login__divider-line" />
            </div>

            <button type="button" className="login__social">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.8 10.2085C18.8 9.5585 18.7417 8.9335 18.6333 8.3335H10V11.8835H14.9333C14.7167 13.0252 14.0667 13.9918 13.0917 14.6418V16.9502H16.0667C17.8 15.3502 18.8 13.0002 18.8 10.2085Z"
                  fill="#4285F4"
                />
                <path
                  d="M9.99998 19.1667C12.475 19.1667 14.55 18.35 16.0667 16.95L13.0917 14.6417C12.275 15.1917 11.2333 15.525 9.99998 15.525C7.61665 15.525 5.59165 13.9167 4.86665 11.75H1.81665V14.1167C3.32498 17.1083 6.41665 19.1667 9.99998 19.1667Z"
                  fill="#34A853"
                />
                <path
                  d="M4.86671 11.7416C4.68337 11.1916 4.57504 10.6083 4.57504 9.99993C4.57504 9.3916 4.68337 8.80827 4.86671 8.25827V5.8916H1.81671C1.19171 7.12493 0.833374 8.5166 0.833374 9.99993C0.833374 11.4833 1.19171 12.8749 1.81671 14.1083L4.19171 12.2583L4.86671 11.7416Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.99998 4.4835C11.35 4.4835 12.55 4.95016 13.5083 5.85016L16.1333 3.22516C14.5417 1.74183 12.475 0.833496 9.99998 0.833496C6.41665 0.833496 3.32498 2.89183 1.81665 5.89183L4.86665 8.2585C5.59165 6.09183 7.61665 4.4835 9.99998 4.4835Z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>

            <p className="login__signup">
              Don't have an account? <Link to="/daftar">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>

      <div className="login__media">
        <img
          src={heroImageSrc}
          alt="Siswa belajar bersama AI Tutor di ruang kelas"
          className="login__media-image"
        />
      </div>
    </div>
  );
}

export default Login;
