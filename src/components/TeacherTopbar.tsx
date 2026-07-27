import "../styles/shared/AppShell.css";

const teacherAvatarSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/2f65435dfa8ffc7d30d60e57d05f86a493ebf19a?width=88";

type TeacherTopbarProps = {
  onMenuClick: () => void;
};

function TeacherTopbar({ onMenuClick }: TeacherTopbarProps) {
  return (
    <header className="dashboard-topbar">
      <button type="button" className="dashboard-topbar__menu" aria-label="Buka menu" onClick={onMenuClick}>
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 16V14H20V16H0ZM0 9V7H20V9H0ZM0 2V0H20V2H0Z" fill="#1B1B23" />
        </svg>
      </button>

      <div className="dashboard-topbar__search">
        <svg
          className="dashboard-topbar__search-icon"
          width="16"
          height="16"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
            fill="#434655"
          />
        </svg>
        <input type="search" placeholder="Search students, materials..." aria-label="Search students, materials..." />
      </div>

      <div className="dashboard-topbar__actions">
        <button type="button" className="dashboard-icon-btn" aria-label="Notifikasi">
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 17V15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H16V17H0ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20Z"
              fill="#434655"
            />
          </svg>
          <span className="dashboard-icon-btn__dot" />
        </button>
        <div className="teacher-topbar__profile">
          <img src={teacherAvatarSrc} alt="Bu Rina" className="teacher-topbar__avatar" />
          <div className="teacher-topbar__info">
            <p className="teacher-topbar__name">Bu Rina</p>
            <p className="teacher-topbar__role">Senior Teacher</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TeacherTopbar;
