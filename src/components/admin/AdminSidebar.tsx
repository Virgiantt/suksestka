import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import "../../styles/admin/AdminShell.css";

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
    to: "/dashboard-admin",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 6V0H18V6H10V6M0 10V0H8V10H0V10M10 18V8H18V18H10V18M0 18V12H8V18H0V18" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Pengajar",
    to: "/admin/pengajar",
    icon: (
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 18L4 14.2V8.2L0 6L11 0L22 6V14H20V7.1L18 8.2V14.2L11 18V18M11 9.7L17.85 6L11 2.3L4.15 6L11 9.7V9.7M11 15.725L16 13.025V9.25L11 12L6 9.25V13.025L11 15.725V15.725"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Siswa",
    to: "/admin/siswa",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8V8M0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0V16M8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6V6"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Langganan & Pembayaran",
    to: "/admin/langganan",
    icon: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 9C12.1667 9 11.4583 8.70833 10.875 8.125C10.2917 7.54167 10 6.83333 10 6C10 5.16667 10.2917 4.45833 10.875 3.875C11.4583 3.29167 12.1667 3 13 3C13.8333 3 14.5417 3.29167 15.125 3.875C15.7083 4.45833 16 5.16667 16 6C16 6.83333 15.7083 7.54167 15.125 8.125C14.5417 8.70833 13.8333 9 13 9V9M6 12C5.45 12 4.97917 11.8042 4.5875 11.4125C4.19583 11.0208 4 10.55 4 10V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H20C20.55 0 21.0208 0.195833 21.4125 0.5875C21.8042 0.979167 22 1.45 22 2V10C22 10.55 21.8042 11.0208 21.4125 11.4125C21.0208 11.8042 20.55 12 20 12H6V12M8 10H18C18 9.45 18.1958 8.97917 18.5875 8.5875C18.9792 8.19583 19.45 8 20 8V4C19.45 4 18.9792 3.80417 18.5875 3.4125C18.1958 3.02083 18 2.55 18 2H8C8 2.55 7.80417 3.02083 7.4125 3.4125C7.02083 3.80417 6.55 4 6 4V8C6.55 8 7.02083 8.19583 7.4125 8.5875C7.80417 8.97917 8 9.45 8 10V10"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Analitik Platform",
    to: "/admin/analitik",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 14H6V9H4V14V14M12 14H14V4H12V14V14M8 14H10V11H8V14V14M8 9H10V7H8V9V9M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2V18M2 16H16V2H2V16V16"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Pengumuman",
    to: "/admin/pengumuman",
    icon: (
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 9V7H20V9H16V9M17.2 16L14 13.6L15.2 12L18.4 14.4L17.2 16V16M15.2 4L14 2.4L17.2 0L18.4 1.6L15.2 4V4M3 15V11H2C1.45 11 0.979167 10.8042 0.5875 10.4125C0.195833 10.0208 0 9.55 0 9V7C0 6.45 0.195833 5.97917 0.5875 5.5875C0.979167 5.19583 1.45 5 2 5H6L11 2V14L6 11H5V15H3V15"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Laporan",
    to: "/admin/laporan",
    icon: (
      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.3 20L6.9 16.8C6.68333 16.7167 6.47917 16.6167 6.2875 16.5C6.09583 16.3833 5.90833 16.2583 5.725 16.125L2.75 17.375L0 12.625L2.575 10.675C2.55833 10.5583 2.55 10.4458 2.55 10.3375V9.6625C2.55 9.55417 2.55833 9.44167 2.575 9.325L0 7.375L2.75 2.625L5.725 3.875C5.90833 3.74167 6.1 3.61667 6.3 3.5C6.5 3.38333 6.7 3.28333 6.9 3.2L7.3 0H12.8L13.2 3.2C13.4167 3.28333 13.6208 3.38333 13.8125 3.5C14.0042 3.61667 14.1917 3.74167 14.375 3.875L17.35 2.625L20.1 7.375L17.525 9.325C17.5417 9.44167 17.55 9.55417 17.55 9.6625V10.3375C17.55 10.4458 17.5333 10.5583 17.5 10.675L20.075 12.625L17.325 17.375L14.375 16.125C14.1917 16.2583 14 16.3833 13.8 16.5C13.6 16.6167 13.4 16.7167 13.2 16.8L12.8 20H7.3V20M10.1 13.5C11.0667 13.5 11.8917 13.1583 12.575 12.475C13.2583 11.7917 13.6 10.9667 13.6 10C13.6 9.03333 13.2583 8.20833 12.575 7.525C11.8917 6.84167 11.0667 6.5 10.1 6.5C9.11667 6.5 8.2875 6.84167 7.6125 7.525C6.9375 8.20833 6.6 9.03333 6.6 10C6.6 10.9667 6.9375 11.7917 7.6125 12.475C8.2875 13.1583 9.11667 13.5 10.1 13.5V13.5"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Pengaturan",
    to: "/admin/pengaturan",
    icon: (
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 16V9H16V16H12V16M6 16V0H10V16H6V16M0 16V5H4V16H0V16"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

type AdminSidebarProps = {
  active: string;
  open: boolean;
  onClose: () => void;
};

function AdminSidebar({ active, open, onClose }: AdminSidebarProps) {
  return (
    <>
      <aside className={`admin-sidebar${open ? " admin-sidebar--open" : ""}`}>
        <div className="admin-sidebar__brand">
          <img src={logoImageSrc} alt="" className="admin-sidebar__logo" />
          <div>
            <p className="admin-sidebar__brand-title">SuksesTKA</p>
            <p className="admin-sidebar__brand-subtitle">Premium EdTech</p>
          </div>
        </div>

        <nav className="admin-sidebar__nav">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className={`admin-sidebar__link${item.label === active ? " admin-sidebar__link--active" : ""}`}
              >
                <span className="admin-sidebar__link-icon">{item.icon}</span>
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href="#top"
                className={`admin-sidebar__link${item.label === active ? " admin-sidebar__link--active" : ""}`}
              >
                <span className="admin-sidebar__link-icon">{item.icon}</span>
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="admin-sidebar__user">
          <span className="admin-sidebar__user-avatar">
            <img src={sidebarAvatarSrc} alt="" />
          </span>
          <div className="admin-sidebar__user-info">
            <p className="admin-sidebar__user-name">User</p>
            <p className="admin-sidebar__user-role">Admin</p>
          </div>
          <Link to="/login" className="admin-sidebar__logout" aria-label="Keluar">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14V14"
                fill="white"
                fillOpacity="0.4"
              />
            </svg>
          </Link>
        </div>
      </aside>

      {open ? <button type="button" className="admin-sidebar__backdrop" aria-label="Tutup menu" onClick={onClose} /> : null}
    </>
  );
}

export default AdminSidebar;
