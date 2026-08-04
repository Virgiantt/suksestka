import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import AdminFooter from "../../components/admin/AdminFooter";
import "../../styles/admin/MeetingOnlineAdmin.css";

const stats = [
  {
    key: "total-meeting",
    label: "Total Meeting",
    value: "1,240",
    tone: "blue" as const,
    icon: (
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.58333 13H9.75V9.75H13V7.58333H9.75V4.33333H7.58333V7.58333H4.33333V9.75H7.58333V13V13M2.16667 17.3333C1.57083 17.3333 1.06076 17.1212 0.636458 16.6969C0.212153 16.2726 0 15.7625 0 15.1667V2.16667C0 1.57083 0.212153 1.06076 0.636458 0.636458C1.06076 0.212153 1.57083 0 2.16667 0H15.1667C15.7625 0 16.2726 0.212153 16.6969 0.636458C17.1212 1.06076 17.3333 1.57083 17.3333 2.16667V7.04167L21.6667 2.70833V14.625L17.3333 10.2917V15.1667C17.3333 15.7625 17.1212 16.2726 16.6969 16.6969C16.2726 17.1212 15.7625 17.3333 15.1667 17.3333H2.16667V17.3333Z"
          fill="#004AC6"
        />
      </svg>
    ),
    badge: (
      <span className="mo-stat__badge mo-stat__badge--up">
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.933333 8L0 7.06667L4.93333 2.1L7.6 4.76667L11.0667 1.33333H9.33333V0H13.3333V4H12V2.26667L7.6 6.66667L4.93333 4L0.933333 8V8" fill="#006229" />
        </svg>
        12%
      </span>
    ),
  },
  {
    key: "sesi-berlangsung",
    label: "Sesi Berlangsung",
    value: "42",
    tone: "purple" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.75 21.6667V12.7021C9.425 12.5035 9.16319 12.2462 8.96458 11.9302C8.76597 11.6142 8.66667 11.2486 8.66667 10.8333C8.66667 10.2375 8.87882 9.72743 9.30313 9.30313C9.72743 8.87882 10.2375 8.66667 10.8333 8.66667C11.4292 8.66667 11.9392 8.87882 12.3635 9.30313C12.7878 9.72743 13 10.2375 13 10.8333C13 11.2486 12.9007 11.6188 12.7021 11.9438C12.5035 12.2688 12.2417 12.5215 11.9167 12.7021V21.6667H9.75V21.6667M3.35833 18.6875C2.32917 17.6944 1.51215 16.5253 0.907292 15.1802C0.302431 13.8351 0 12.3861 0 10.8333C0 9.33472 0.284375 7.92639 0.853125 6.60833C1.42188 5.29028 2.19375 4.14375 3.16875 3.16875C4.14375 2.19375 5.29028 1.42188 6.60833 0.853125C7.92639 0.284375 9.33472 0 10.8333 0C12.3319 0 13.7403 0.284375 15.0583 0.853125C16.3764 1.42188 17.5229 2.19375 18.4979 3.16875C19.4729 4.14375 20.2448 5.29028 20.8135 6.60833C21.3823 7.92639 21.6667 9.33472 21.6667 10.8333C21.6667 12.3861 21.3642 13.8396 20.7594 15.1938C20.1545 16.5479 19.3375 17.7125 18.3083 18.6875L16.7917 17.1708C17.6222 16.3764 18.2812 15.433 18.7687 14.3406C19.2562 13.2483 19.5 12.0792 19.5 10.8333C19.5 8.41389 18.6604 6.36458 16.9813 4.68542C15.3021 3.00625 13.2528 2.16667 10.8333 2.16667C8.41389 2.16667 6.36458 3.00625 4.68542 4.68542C3.00625 6.36458 2.16667 8.41389 2.16667 10.8333C2.16667 12.0792 2.41042 13.2438 2.89792 14.3271C3.38542 15.4104 4.05347 16.3493 4.90208 17.1437L3.35833 18.6875V18.6875M6.41875 15.6271C5.78681 15.0313 5.28125 14.3226 4.90208 13.501C4.52292 12.6795 4.33333 11.7903 4.33333 10.8333C4.33333 9.02778 4.96528 7.49306 6.22917 6.22917C7.49306 4.96528 9.02778 4.33333 10.8333 4.33333C12.6389 4.33333 14.1736 4.96528 15.4375 6.22917C16.7014 7.49306 17.3333 9.02778 17.3333 10.8333C17.3333 11.7903 17.1438 12.684 16.7646 13.5146C16.3854 14.3451 15.8799 15.0493 15.2479 15.6271L13.7042 14.0833C14.1556 13.6681 14.5122 13.1806 14.774 12.6208C15.0358 12.0611 15.1667 11.4653 15.1667 10.8333C15.1667 9.64167 14.7424 8.62153 13.8938 7.77292C13.0451 6.92431 12.025 6.5 10.8333 6.5C9.64167 6.5 8.62153 6.92431 7.77292 7.77292C6.92431 8.62153 6.5 9.64167 6.5 10.8333C6.5 11.4833 6.6309 12.0837 6.89271 12.6344C7.15451 13.1851 7.51111 13.6681 7.9625 14.0833L6.41875 15.6271V15.6271Z"
          fill="#8455EF"
        />
      </svg>
    ),
    badge: (
      <span className="mo-stat__badge mo-stat__badge--live">
        <span className="mo-stat__badge-dot" />
        LIVE NOW
      </span>
    ),
  },
  {
    key: "total-jam",
    label: "Total Jam\nPenggunaan",
    value: "4,500",
    unit: "Jam",
    tone: "green" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.3542 15.8708L9.69583 11.2125V5.3625H11.8625V10.3458L15.8708 14.3542L14.3542 15.8708V15.8708M0.866667 15.1938C0.631944 14.6701 0.442361 14.1285 0.297917 13.5688C0.153472 13.009 0.0541667 12.4403 0 11.8625H2.19375C2.24792 12.2417 2.32465 12.6208 2.42396 13C2.52326 13.3792 2.64514 13.7493 2.78958 14.1104L0.866667 15.1938V15.1938M0 9.69583C0.0541667 9.11806 0.153472 8.54479 0.297917 7.97604C0.442361 7.40729 0.640972 6.86111 0.89375 6.3375L2.78958 7.42083C2.64514 7.78194 2.52326 8.15208 2.42396 8.53125C2.32465 8.91042 2.24792 9.29861 2.19375 9.69583H0V9.69583M4.46875 19.6083C3.98125 19.2472 3.52986 18.8545 3.11458 18.4302C2.69931 18.0059 2.31111 17.55 1.95 17.0625L3.84583 15.9792C4.09861 16.3042 4.36493 16.6066 4.64479 16.8865C4.92465 17.1663 5.22708 17.4326 5.55208 17.6854L4.46875 19.6083V19.6083M3.87292 5.55208L1.95 4.46875C2.31111 3.98125 2.69931 3.52986 3.11458 3.11458C3.52986 2.69931 3.98125 2.31111 4.46875 1.95L5.55208 3.87292C5.24514 4.12569 4.95174 4.39201 4.67188 4.67188C4.39201 4.95174 4.12569 5.24514 3.87292 5.55208V5.55208M9.69583 21.5583C9.11806 21.5042 8.54479 21.4049 7.97604 21.2604C7.40729 21.116 6.86111 20.9174 6.3375 20.6646L7.42083 18.7687C7.78194 18.9132 8.15208 19.0351 8.53125 19.1344C8.91042 19.2337 9.29861 19.3104 9.69583 19.3646V21.5583V21.5583M7.42083 2.78958L6.3375 0.89375C6.86111 0.640972 7.40729 0.442361 7.97604 0.297917C8.54479 0.153472 9.11806 0.0541667 9.69583 0V2.19375C9.29861 2.24792 8.91042 2.32465 8.53125 2.42396C8.15208 2.52326 7.78194 2.64514 7.42083 2.78958V2.78958Z"
          fill="#006229"
        />
      </svg>
    ),
    badge: <span className="mo-stat__badge mo-stat__badge--neutral">Total Akumulasi</span>,
  },
  {
    key: "akun-host",
    label: "Akun Host Aktif",
    value: "24",
    unit: "/30 Akun",
    tone: "gray" as const,
    icon: (
      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.16667 17.3333V2.16667H0V17.3333H2.16667M2.16667 19.5C1.57083 19.5 1.06076 19.2878 0.636458 18.8635C0.212153 18.4392 0 17.9292 0 17.3333V2.16667C0 1.57083 0.212153 1.06076 0.636458 0.636458C1.06076 0.212153 1.57083 0 2.16667 0H17.3333C17.9292 0 18.4392 0.212153 18.8635 0.636458C19.2878 1.06076 19.5 1.57083 19.5 2.16667V4.875H17.3333V2.16667H2.16667V17.3333H17.3333V14.625H19.5V17.3333C19.5 17.9292 19.2878 18.4392 18.8635 18.8635C18.4392 19.2878 17.9292 19.5 17.3333 19.5H2.16667M10.8333 15.1667C10.2375 15.1667 9.72743 14.9545 9.30313 14.5302C8.87882 14.1059 8.66667 13.5958 8.66667 13V6.5C8.66667 5.90417 8.87882 5.3941 9.30313 4.96979C9.72743 4.54549 10.2375 4.33333 10.8333 4.33333H18.4167C19.0125 4.33333 19.5226 4.54549 19.9469 4.96979C20.3712 5.3941 20.5833 5.90417 20.5833 6.5V13C20.5833 13.5958 20.3712 14.1059 19.9469 14.5302C19.5226 14.9545 19.0125 15.1667 18.4167 15.1667H10.8333M18.4167 13V6.5H10.8333V13H18.4167M14.0833 11.375C14.5347 11.375 14.9184 11.217 15.2344 10.901C15.5503 10.5851 15.7083 10.2014 15.7083 9.75C15.7083 9.29861 15.5503 8.91493 15.2344 8.59896C14.9184 8.28299 14.5347 8.125 14.0833 8.125C13.6319 8.125 13.2483 8.28299 12.9323 8.59896C12.6163 8.91493 12.4583 9.29861 12.4583 9.75C12.4583 10.2014 12.6163 10.5851 12.9323 10.901C13.2483 11.217 13.6319 11.375 14.0833 11.375V11.375Z"
          fill="#434655"
        />
      </svg>
    ),
    badge: <span className="mo-stat__badge mo-stat__badge--usage">80% Usage</span>,
  },
];

type Account = {
  id: number;
  email: string;
  phone: string;
  license: "BUSINESS" | "PRO" | "WEBINAR";
  available: boolean;
  active: boolean;
};

const accounts: Account[] = [
  { id: 1, email: "zoom.pro1@sukses.tka", phone: "882-990-111", license: "BUSINESS", available: false, active: true },
  { id: 2, email: "zoom.pro2@sukses.tka", phone: "882-990-112", license: "PRO", available: true, active: true },
  { id: 3, email: "zoom.pro3@sukses.tka", phone: "882-990-113", license: "PRO", available: true, active: false },
  { id: 4, email: "zoom.webinar1@sukses.tka", phone: "882-990-201", license: "WEBINAR", available: true, active: true },
  { id: 5, email: "zoom.pro4@sukses.tka", phone: "882-990-114", license: "PRO", available: true, active: true },
];

type ScheduleItem = {
  key: string;
  title: string;
  tag: "LIVE" | "SOON" | "DONE";
  person: string;
  time: string;
};

const schedule: ScheduleItem[] = [
  { key: "kelas-persiapan", title: "Kelas Persiapan TKA Batch A", tag: "LIVE", person: "Bpk. Bambang Pamungkas", time: "08:00 - 10:00 WIB" },
  { key: "webinar-karir", title: "Webinar Karir Industri Kreatif", tag: "SOON", person: "Ibu Susi Pudjiastuti", time: "13:00 - 15:00 WIB" },
  { key: "rapat-koordinasi", title: "Rapat Koordinasi Mentor", tag: "DONE", person: "Tim Kurikulum", time: "07:00 - 08:00 WIB" },
  { key: "bimbingan-teknis", title: "Bimbingan Teknis App TKA", tag: "SOON", person: "Andi Wijaya (Dev)", time: "16:30 - 18:00 WIB" },
];

function PhoneIcon() {
  return (
    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.75 9.33333L2.33333 7H0L0.291667 5.83333H2.625L3.20833 3.5H0.875L1.16667 2.33333H3.5L4.08333 0H5.25L4.66667 2.33333H7L7.58333 0H8.75L8.16667 2.33333H10.5L10.2083 3.5H7.875L7.29167 5.83333H9.625L9.33333 7H7L6.41667 9.33333H5.25L5.83333 7H3.5L2.91667 9.33333H1.75V9.33333M3.79167 5.83333H6.125L6.70833 3.5H4.375L3.79167 5.83333V5.83333Z"
        fill="#434655"
      />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 10V8H7V10H0V10M0 6V4H11V6H0V6M0 2V0H11V2H0V2M9 16V12.925L14.525 7.425C14.675 7.275 14.8417 7.16667 15.025 7.1C15.2083 7.03333 15.3917 7 15.575 7C15.775 7 15.9667 7.0375 16.15 7.1125C16.3333 7.1875 16.5 7.3 16.65 7.45L17.575 8.375C17.7083 8.525 17.8125 8.69167 17.8875 8.875C17.9625 9.05833 18 9.24167 18 9.425C18 9.60833 17.9667 9.79583 17.9 9.9875C17.8333 10.1792 17.725 10.35 17.575 10.5L12.075 16H9V16Z"
        fill="#434655"
      />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.33333 5.33333C4.6 5.33333 3.97222 5.07222 3.45 4.55C2.92778 4.02778 2.66667 3.4 2.66667 2.66667C2.66667 1.93333 2.92778 1.30556 3.45 0.783333C3.97222 0.261111 4.6 0 5.33333 0C6.06667 0 6.69444 0.261111 7.21667 0.783333C7.73889 1.30556 8 1.93333 8 2.66667C8 3.4 7.73889 4.02778 7.21667 4.55C6.69444 5.07222 6.06667 5.33333 5.33333 5.33333V5.33333M0 10.6667V8.8C0 8.42222 0.0972222 8.075 0.291667 7.75833C0.486111 7.44167 0.744444 7.2 1.06667 7.03333C1.75556 6.68889 2.45556 6.43056 3.16667 6.25833C3.87778 6.08611 4.6 6 5.33333 6C6.06667 6 6.78889 6.08611 7.5 6.25833C8.21111 6.43056 8.91111 6.68889 9.6 7.03333C9.92222 7.2 10.1806 7.44167 10.375 7.75833C10.5694 8.075 10.6667 8.42222 10.6667 8.8V10.6667H0V10.6667Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.86667 9.8L9.8 8.86667L7.33333 6.4V3.33333H6V6.93333L8.86667 9.8V9.8M6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45556 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45556 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45556 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45556 13.1583 7.58889 13.3333 6.66667 13.3333V13.3333Z"
        fill="currentColor"
      />
    </svg>
  );
}

const licenseClass: Record<Account["license"], string> = {
  BUSINESS: "mo-license mo-license--business",
  PRO: "mo-license mo-license--pro",
  WEBINAR: "mo-license mo-license--webinar",
};

const scheduleTagClass: Record<ScheduleItem["tag"], string> = {
  LIVE: "mo-schedule-item mo-schedule-item--live",
  SOON: "mo-schedule-item mo-schedule-item--soon",
  DONE: "mo-schedule-item mo-schedule-item--done",
};

const scheduleTagBadgeClass: Record<ScheduleItem["tag"], string> = {
  LIVE: "mo-schedule-item__tag mo-schedule-item__tag--live",
  SOON: "mo-schedule-item__tag mo-schedule-item__tag--soon",
  DONE: "mo-schedule-item__tag mo-schedule-item__tag--done",
};

function MeetingOnlineAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accountList, setAccountList] = useState(accounts);

  const toggleAccount = (id: number) => {
    setAccountList((prev) => prev.map((account) => (account.id === id ? { ...account, active: !account.active } : account)));
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar active="Meeting Online" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-dashboard__main">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="admin-dashboard__content mo-content">
          <header className="mo-header">
            <div>
              <h1>Dashboard Zoom</h1>
              <p>Monitor dan kelola infrastruktur pertemuan virtual secara real-time.</p>
            </div>
            <div className="mo-header__actions">
              <button type="button" className="mo-btn">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 12V10.5H2.0625L1.7625 10.2375C1.1125 9.6625 0.65625 9.00625 0.39375 8.26875C0.13125 7.53125 0 6.7875 0 6.0375C0 4.65 0.415625 3.41562 1.24688 2.33437C2.07813 1.25312 3.1625 0.5375 4.5 0.1875V1.7625C3.6 2.0875 2.875 2.64062 2.325 3.42188C1.775 4.20312 1.5 5.075 1.5 6.0375C1.5 6.6 1.60625 7.14687 1.81875 7.67812C2.03125 8.20937 2.3625 8.7 2.8125 9.15L3 9.3375V7.5H4.5V12H0V12M7.5 11.8125V10.2375C8.4 9.9125 9.125 9.35938 9.675 8.57812C10.225 7.79688 10.5 6.925 10.5 5.9625C10.5 5.4 10.3937 4.85313 10.1812 4.32188C9.96875 3.79063 9.6375 3.3 9.1875 2.85L9 2.6625V4.5H7.5V0H12V1.5H9.9375L10.2375 1.7625C10.85 2.375 11.2969 3.04063 11.5781 3.75938C11.8594 4.47813 12 5.2125 12 5.9625C12 7.35 11.5844 8.58437 10.7531 9.66562C9.92188 10.7469 8.8375 11.4625 7.5 11.8125V11.8125"
                    fill="#191C1E"
                  />
                </svg>
                Sinkronisasi Akun
              </button>
              <button type="button" className="mo-btn mo-btn--primary">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 6H0V4.5H4.5V0H6V4.5H10.5V6H6V10.5H4.5V6V6" fill="white" />
                </svg>
                Tambah Akun Zoom Baru
              </button>
            </div>
          </header>

          <section className="mo-stats">
            {stats.map((stat) => (
              <article className={`mo-stat mo-stat--${stat.tone}`} key={stat.key}>
                <span className="mo-stat__glow" aria-hidden="true" />
                <div className="mo-stat__top">
                  <span className="mo-stat__icon">{stat.icon}</span>
                  {stat.badge}
                </div>
                <p className="mo-stat__label">{stat.label}</p>
                <p className="mo-stat__value">
                  {stat.value}
                  {stat.unit ? <span className="mo-stat__unit">{stat.unit}</span> : null}
                </p>
              </article>
            ))}
          </section>

          <section className="mo-bento">
            <div className="mo-table-card">
              <div className="mo-table-card__head">
                <div className="mo-table-card__title">
                  Manajemen Akun Zoom
                  <span className="mo-table-card__badge">30 Akun</span>
                </div>
                <div className="mo-table-card__tools">
                  <button type="button" className="mo-icon-btn" aria-label="Filter">
                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83333 10V8.33333H9.16667V10H5.83333V10M2.5 5.83333V4.16667H12.5V5.83333H2.5V5.83333M0 1.66667V0H15V1.66667H0V1.66667" fill="#434655" />
                    </svg>
                  </button>
                  <button type="button" className="mo-icon-btn" aria-label="Unduh">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.66667 10L2.5 5.83333L3.66667 4.625L5.83333 6.79167V0H7.5V6.79167L9.66667 4.625L10.8333 5.83333L6.66667 10V10M1.66667 13.3333C1.20833 13.3333 0.815972 13.1701 0.489583 12.8438C0.163194 12.5174 0 12.125 0 11.6667V9.16667H1.66667V11.6667V11.6667V11.6667H11.6667V11.6667V11.6667V9.16667H13.3333V11.6667C13.3333 12.125 13.1701 12.5174 12.8438 12.8438C12.5174 13.1701 12.125 13.3333 11.6667 13.3333H1.66667V13.3333"
                        fill="#434655"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mo-table-wrap">
                <table className="mo-table">
                  <thead>
                    <tr>
                      <th>Informasi Akun</th>
                      <th>Lisensi</th>
                      <th>Ketersediaan</th>
                      <th>Status</th>
                      <th className="mo-table__aksi">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accountList.map((account) => (
                      <tr key={account.id}>
                        <td>
                          <div className="mo-account">
                            <span className="mo-account__avatar">{account.id}</span>
                            <div className="mo-account__info">
                              <p className="mo-account__email">{account.email}</p>
                              <p className="mo-account__phone">
                                <PhoneIcon />
                                {account.phone}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={licenseClass[account.license]}>{account.license}</span>
                        </td>
                        <td>
                          {account.available ? (
                            <span className="mo-availability mo-availability--available">
                              <i className="mo-availability__dot" />
                              Tersedia
                            </span>
                          ) : (
                            <span className="mo-availability mo-availability--busy">
                              <i className="mo-availability__dot" />
                              Sedang Digunakan
                            </span>
                          )}
                        </td>
                        <td>
                          <button
                            type="button"
                            className={`mo-toggle${account.active ? " mo-toggle--on" : ""}`}
                            role="switch"
                            aria-checked={account.active}
                            aria-label={`Status akun ${account.email}`}
                            onClick={() => toggleAccount(account.id)}
                          >
                            <span className="mo-toggle__thumb" />
                          </button>
                        </td>
                        <td className="mo-table__aksi">
                          <button type="button" className="mo-icon-btn" aria-label={`Edit ${account.email}`}>
                            <EditIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mo-table-card__footer">
                <button type="button" className="mo-link-btn">
                  Lihat Semua 30 Akun
                </button>
              </div>
            </div>

            <aside className="mo-schedule-card">
              <div className="mo-schedule-card__head">
                <h2>Jadwal Hari Ini</h2>
                <span className="mo-schedule-card__date">14 OKT</span>
              </div>

              <div className="mo-schedule-list">
                {schedule.map((item) => (
                  <div className={scheduleTagClass[item.tag]} key={item.key}>
                    <div className="mo-schedule-item__top">
                      <h3 className={`mo-schedule-item__title${item.tag === "DONE" ? " mo-schedule-item__title--done" : ""}`}>{item.title}</h3>
                      <span className={scheduleTagBadgeClass[item.tag]}>
                        {item.tag === "LIVE" ? <i className="mo-schedule-item__live-dot" /> : null}
                        {item.tag}
                      </span>
                    </div>
                    <div className="mo-schedule-item__meta">
                      <PersonIcon />
                      {item.person}
                    </div>
                    <div className="mo-schedule-item__meta">
                      <ClockIcon />
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>

              <button type="button" className="mo-schedule-add">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.5 15V12.75H8.25V11.25H10.5V9H12V11.25H14.25V12.75H12V15H10.5V15M1.5 13.5C1.0875 13.5 0.734375 13.3531 0.440625 13.0594C0.146875 12.7656 0 12.4125 0 12V3C0 2.5875 0.146875 2.23437 0.440625 1.94062C0.734375 1.64687 1.0875 1.5 1.5 1.5H2.25V0H3.75V1.5H8.25V0H9.75V1.5H10.5C10.9125 1.5 11.2656 1.64687 11.5594 1.94062C11.8531 2.23437 12 2.5875 12 3V7.575C11.75 7.5375 11.5 7.51875 11.25 7.51875C11 7.51875 10.75 7.5375 10.5 7.575V6H1.5V12V12V12H6.75C6.75 12.25 6.76875 12.5 6.80625 12.75C6.84375 13 6.9125 13.25 7.0125 13.5H1.5V13.5M1.5 4.5H10.5V3V3V3H1.5V3V3V4.5V4.5"
                    fill="#004AC6"
                  />
                </svg>
                Buat Jadwal Baru
              </button>
            </aside>
          </section>
        </div>

        <AdminFooter />
      </div>
    </div>
  );
}

export default MeetingOnlineAdmin;
