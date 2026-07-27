import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import "../styles/shared/AppShell.css";

const logoImageSrc =
  "https://cdn.builder.io/api/v1/image/assets%2Fb52cb71ec6374715a04a0689eb72fbdc%2F850d192fca624eef823e8eafe0d7c4ec?format=webp&width=800&height=1200";
const sidebarAvatarSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/7eb1a869ae7dc0f7b943df9d664aaa11cdb40049?width=80";

type NavItem = {
  label: string;
  to?: string;
  icon: ReactNode;
};

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    to: "/dashboard-guru",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 6V0H18V6H10ZM0 10V0H8V10H0ZM10 18V8H18V18H10ZM0 18V12H8V18H0Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Materi",
    to: "/materi-guru",
    icon: (
      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 19.5C10.2 18.8667 9.33333 18.375 8.4 18.025C7.46667 17.675 6.5 17.5 5.5 17.5C4.8 17.5 4.1125 17.5917 3.4375 17.775C2.7625 17.9583 2.11667 18.2167 1.5 18.55C1.15 18.7333 0.8125 18.725 0.4875 18.525C0.1625 18.325 0 18.0333 0 17.65V5.6C0 5.41667 0.0458333 5.24167 0.1375 5.075C0.229167 4.90833 0.366667 4.78333 0.55 4.7C1.31667 4.3 2.11667 4 2.95 3.8C3.78333 3.6 4.63333 3.5 5.5 3.5C6.46667 3.5 7.4125 3.625 8.3375 3.875C9.2625 4.125 10.15 4.5 11 5V17.1C11.85 16.5667 12.7417 16.1667 13.675 15.9C14.6083 15.6333 15.55 15.5 16.5 15.5C17.1 15.5 17.6875 15.55 18.2625 15.65C18.8375 15.75 19.4167 15.9 20 16.1V4.1C20.25 4.18333 20.4958 4.27083 20.7375 4.3625C20.9792 4.45417 21.2167 4.56667 21.45 4.7C21.6333 4.78333 21.7708 4.90833 21.8625 5.075C21.9542 5.24167 22 5.41667 22 5.6V17.65C22 18.0333 21.8375 18.325 21.5125 18.525C21.1875 18.725 20.85 18.7333 20.5 18.55C19.8833 18.2167 19.2375 17.9583 18.5625 17.775C17.8875 17.5917 17.2 17.5 16.5 17.5C15.5 17.5 14.5333 17.675 13.6 18.025C12.6667 18.375 11.8 18.8667 11 19.5ZM13 14.5V5L18 0V10L13 14.5ZM9 16.125V6.225C8.45 5.99167 7.87917 5.8125 7.2875 5.6875C6.69583 5.5625 6.1 5.5 5.5 5.5C4.88333 5.5 4.28333 5.55833 3.7 5.675C3.11667 5.79167 2.55 5.96667 2 6.2V16.125C2.58333 15.9083 3.1625 15.75 3.7375 15.65C4.3125 15.55 4.9 15.5 5.5 15.5C6.1 15.5 6.6875 15.55 7.2625 15.65C7.8375 15.75 8.41667 15.9083 9 16.125ZM9 16.125V6.225V16.125Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Bank Soal",
    to: "/bank-soal",
    icon: (
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 10V8H7V10H0ZM0 6V4H11V6H0ZM0 2V0H11V2H0ZM9 16V12.925L14.525 7.425C14.675 7.275 14.8417 7.16667 15.025 7.1C15.2083 7.03333 15.3917 7 15.575 7C15.775 7 15.9667 7.0375 16.15 7.1125C16.3333 7.1875 16.5 7.3 16.65 7.45L17.575 8.375C17.7083 8.525 17.8125 8.69167 17.8875 8.875C17.9625 9.05833 18 9.24167 18 9.425C18 9.60833 17.9667 9.79583 17.9 9.9875C17.8333 10.1792 17.725 10.35 17.575 10.5L12.075 16H9ZM10.5 14.5H11.45L14.475 11.45L14.025 10.975L13.55 10.525L10.5 13.55V14.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Tryout",
    to: "/manajemen-tryout",
    icon: (
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.6 15.05L14.65 8L13.25 6.6L7.6 12.25L4.75 9.4L3.35 10.8L7.6 15.05ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H6.2C6.41667 1.4 6.77917 0.916667 7.2875 0.55C7.79583 0.183333 8.36667 0 9 0C9.63333 0 10.2042 0.183333 10.7125 0.55C11.2208 0.916667 11.5833 1.4 11.8 2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V4H2V18ZM9 3.25C9.21667 3.25 9.39583 3.17917 9.5375 3.0375C9.67917 2.89583 9.75 2.71667 9.75 2.5C9.75 2.28333 9.67917 2.10417 9.5375 1.9625C9.39583 1.82083 9.21667 1.75 9 1.75C8.78333 1.75 8.60417 1.82083 8.4625 1.9625C8.32083 2.10417 8.25 2.28333 8.25 2.5C8.25 2.71667 8.32083 2.89583 8.4625 3.0375C8.60417 3.17917 8.78333 3.25 9 3.25ZM2 18V4V18Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "AI Workspace",
    to: "/ai-workspace",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 20V15.7C2.05 14.8333 1.3125 13.8208 0.7875 12.6625C0.2625 11.5042 0 10.2833 0 9C0 6.5 0.875 4.375 2.625 2.625C4.375 0.875 6.5 0 9 0C11.0833 0 12.9292 0.6125 14.5375 1.8375C16.1458 3.0625 17.1917 4.65833 17.675 6.625L18.975 11.75C19.0583 12.0667 19 12.3542 18.8 12.6125C18.6 12.8708 18.3333 13 18 13H16V16C16 16.55 15.8042 17.0208 15.4125 17.4125C15.0208 17.8042 14.55 18 14 18H12V20H10V16H14V11H16.7L15.75 7.125C15.3667 5.60833 14.55 4.375 13.3 3.425C12.05 2.475 10.6167 2 9 2C7.06667 2 5.41667 2.675 4.05 4.025C2.68333 5.375 2 7.01667 2 8.95C2 9.95 2.20417 10.9 2.6125 11.8C3.02083 12.7 3.6 13.5 4.35 14.2L5 14.8V20H3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Siswa",
    to: "/manajemen-siswa",
    icon: (
      <svg width="18" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM18 16V13C18 12.2667 17.7958 11.5625 17.3875 10.8875C16.9792 10.2125 16.4 9.63333 15.65 9.15C16.5 9.25 17.3 9.42083 18.05 9.6625C18.8 9.90417 19.5 10.2 20.15 10.55C20.75 10.8833 21.2083 11.2542 21.525 11.6625C21.8417 12.0708 22 12.5167 22 13V16H18ZM8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM18 4C18 5.1 17.6083 6.04167 16.825 6.825C16.0417 7.60833 15.1 8 14 8C13.8167 8 13.5833 7.97917 13.3 7.9375C13.0167 7.89583 12.7833 7.85 12.6 7.8C13.05 7.26667 13.3958 6.675 13.6375 6.025C13.8792 5.375 14 4.7 14 4C14 3.3 13.8792 2.625 13.6375 1.975C13.3958 1.325 13.05 0.733333 12.6 0.2C12.8333 0.116667 13.0667 0.0625 13.3 0.0375C13.5333 0.0125 13.7667 0 14 0C15.1 0 16.0417 0.391667 16.825 1.175C17.6083 1.95833 18 2.9 18 4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Analitik",
    to: "/analitik",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 18V8H5V18H2ZM8.5 18V2H11.5V18H8.5ZM15 18V11H18V18H15ZM0 20V18H20V20H0Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Pengumuman",
    to: "/pengumuman",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 3V17L11 13.5V18L8 17V12H5C3.89543 12 3 11.1046 3 10V7C3 5.89543 3.89543 5 5 5H8L18 3ZM1 8H0V11H1V8Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Profil",
    to: "/profil-guru",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

type TeacherSidebarProps = {
  active: string;
  open: boolean;
  onClose: () => void;
};

function TeacherSidebar({ active, open, onClose }: TeacherSidebarProps) {
  return (
    <>
      <aside className={`dashboard-sidebar${open ? " dashboard-sidebar--open" : ""}`}>
        <div className="dashboard-sidebar__brand">
          <img src={logoImageSrc} alt="" className="dashboard-sidebar__logo" />
          <div>
            <p className="dashboard-sidebar__brand-title">SuksesTKA</p>
            <p className="dashboard-sidebar__brand-subtitle">Premium EdTech</p>
          </div>
        </div>

        <nav className="dashboard-sidebar__nav">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className={`dashboard-sidebar__link${
                  item.label === active ? " dashboard-sidebar__link--active" : ""
                }`}
              >
                <span className="dashboard-sidebar__link-icon">{item.icon}</span>
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href="#"
                className={`dashboard-sidebar__link${
                  item.label === active ? " dashboard-sidebar__link--active" : ""
                }`}
              >
                <span className="dashboard-sidebar__link-icon">{item.icon}</span>
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="dashboard-sidebar__user">
          <span className="dashboard-sidebar__user-avatar">
            <img src={sidebarAvatarSrc} alt="" />
          </span>
          <div className="dashboard-sidebar__user-info">
            <p className="dashboard-sidebar__user-name">Bu Rina</p>
            <p className="dashboard-sidebar__user-role">Senior Teacher</p>
          </div>
          <Link to="/login" className="dashboard-sidebar__logout" aria-label="Keluar">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z"
                fill="white"
                fillOpacity="0.4"
              />
            </svg>
          </Link>
        </div>
      </aside>

      {open ? (
        <button
          type="button"
          className="dashboard-sidebar__backdrop"
          aria-label="Tutup menu"
          onClick={onClose}
        />
      ) : null}
    </>
  );
}

export default TeacherSidebar;
