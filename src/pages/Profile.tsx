import { useState } from "react";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import AppFooter from "../components/AppFooter";
import "../styles/siswa/Profile.css";

const avatarSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/93896cd785e748b83909f3619bd7e007360e5ec7?width=360";

function PencilIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.83333 14.6667H3.13958L12.1 5.70625L10.7937 4.4L1.83333 13.3604V14.6667ZM0 16.5V12.6042L12.1 0.527083C12.2833 0.359028 12.4858 0.229167 12.7073 0.1375C12.9288 0.0458333 13.1618 0 13.4062 0C13.6507 0 13.8875 0.0458333 14.1167 0.1375C14.3458 0.229167 14.5444 0.366667 14.7125 0.55L15.9729 1.83333C16.1562 2.00139 16.2899 2.2 16.374 2.42917C16.458 2.65833 16.5 2.8875 16.5 3.11667C16.5 3.36111 16.458 3.5941 16.374 3.81562C16.2899 4.03715 16.1562 4.23958 15.9729 4.42292L3.89583 16.5H0Z"
        fill="#004AC6"
      />
    </svg>
  );
}

function ClassCapIcon() {
  return (
    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.16667 15L3.33333 11.8333V6.83333L0 5L9.16667 0L18.3333 5V11.6667H16.6667V5.91667L15 6.83333V11.8333L9.16667 15ZM9.16667 8.08333L14.875 5L9.16667 1.91667L3.45833 5L9.16667 8.08333ZM9.16667 13.1042L13.3333 10.8542V7.70833L9.16667 10L5 7.70833V10.8542L9.16667 13.1042Z"
        fill="#735C00"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.66667 8.33333C7.125 8.33333 7.51736 8.17014 7.84375 7.84375C8.17014 7.51736 8.33333 7.125 8.33333 6.66667C8.33333 6.20833 8.17014 5.81597 7.84375 5.48958C7.51736 5.16319 7.125 5 6.66667 5C6.20833 5 5.81597 5.16319 5.48958 5.48958C5.16319 5.81597 5 6.20833 5 6.66667C5 7.125 5.16319 7.51736 5.48958 7.84375C5.81597 8.17014 6.20833 8.33333 6.66667 8.33333ZM6.66667 14.4583C8.36111 12.9028 9.61806 11.4896 10.4375 10.2188C11.2569 8.94792 11.6667 7.81944 11.6667 6.83333C11.6667 5.31944 11.184 4.07986 10.2188 3.11458C9.25347 2.14931 8.06944 1.66667 6.66667 1.66667C5.26389 1.66667 4.07986 2.14931 3.11458 3.11458C2.14931 4.07986 1.66667 5.31944 1.66667 6.83333C1.66667 7.81944 2.07639 8.94792 2.89583 10.2188C3.71528 11.4896 4.97222 12.9028 6.66667 14.4583ZM6.66667 16.6667C4.43056 14.7639 2.76042 12.9965 1.65625 11.3646C0.552083 9.73264 0 8.22222 0 6.83333C0 4.75 0.670139 3.09028 2.01042 1.85417C3.35069 0.618055 4.90278 0 6.66667 0C8.43056 0 9.98264 0.618055 11.3229 1.85417C12.6632 3.09028 13.3333 4.75 13.3333 6.83333C13.3333 8.22222 12.7812 9.73264 11.6771 11.3646C10.5729 12.9965 8.90278 14.7639 6.66667 16.6667Z"
        fill="#004AC6"
      />
    </svg>
  );
}

function FlameStatIcon() {
  return (
    <svg width="20" height="26" viewBox="0 0 48 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 33C6 35.6 6.525 38.0625 7.575 40.3875C8.625 42.7125 10.125 44.75 12.075 46.5C12.025 46.25 12 46.025 12 45.825C12 45.625 12 45.4 12 45.15C12 43.55 12.3 42.05 12.9 40.65C13.5 39.25 14.375 37.975 15.525 36.825L24 28.5L32.475 36.825C33.625 37.975 34.5 39.25 35.1 40.65C35.7 42.05 36 43.55 36 45.15C36 45.4 36 45.625 36 45.825C36 46.025 35.975 46.25 35.925 46.5C37.875 44.75 39.375 42.7125 40.425 40.3875C41.475 38.0625 42 35.6 42 33C42 30.5 41.5375 28.1375 40.6125 25.9125C39.6875 23.6875 38.35 21.7 36.6 19.95C35.6 20.6 34.55 21.0875 33.45 21.4125C32.35 21.7375 31.225 21.9 30.075 21.9C26.975 21.9 24.2875 20.875 22.0125 18.825C19.7375 16.775 18.425 14.25 18.075 11.25C16.125 12.9 14.4 14.6125 12.9 16.3875C11.4 18.1625 10.1375 19.9625 9.1125 21.7875C8.0875 23.6125 7.3125 25.475 6.7875 27.375C6.2625 29.275 6 31.15 6 33ZM24 36.9L19.725 41.1C19.175 41.65 18.75 42.275 18.45 42.975C18.15 43.675 18 44.4 18 45.15C18 46.75 18.5875 48.125 19.7625 49.275C20.9375 50.425 22.35 51 24 51C25.65 51 27.0625 50.425 28.2375 49.275C29.4125 48.125 30 46.75 30 45.15C30 44.35 29.85 43.6125 29.55 42.9375C29.25 42.2625 28.825 41.65 28.275 41.1L24 36.9ZM24 0V9.9C24 11.6 24.5875 13.025 25.7625 14.175C26.9375 15.325 28.375 15.9 30.075 15.9C30.975 15.9 31.8125 15.7125 32.5875 15.3375C33.3625 14.9625 34.05 14.4 34.65 13.65L36 12C39.7 14.1 42.625 17.025 44.775 20.775C46.925 24.525 48 28.6 48 33C48 39.7 45.675 45.375 41.025 50.025C36.375 54.675 30.7 57 24 57C17.3 57 11.625 54.675 6.975 50.025C2.325 45.375 0 39.7 0 33C0 26.55 2.1625 20.425 6.4875 14.625C10.8125 8.825 16.65 3.95 24 0Z"
        fill="#FB923C"
      />
    </svg>
  );
}

function ClockStatIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 54 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 6V0H36V6H18ZM24 39H30V21H24V39ZM27 63C23.3 63 19.8125 62.2875 16.5375 60.8625C13.2625 59.4375 10.4 57.5 7.95 55.05C5.5 52.6 3.5625 49.7375 2.1375 46.4625C0.7125 43.1875 0 39.7 0 36C0 32.3 0.7125 28.8125 2.1375 25.5375C3.5625 22.2625 5.5 19.4 7.95 16.95C10.4 14.5 13.2625 12.5625 16.5375 11.1375C19.8125 9.7125 23.3 9 27 9C30.1 9 33.075 9.5 35.925 10.5C38.775 11.5 41.45 12.95 43.95 14.85L48.15 10.65L52.35 14.85L48.15 19.05C50.05 21.55 51.5 24.225 52.5 27.075C53.5 29.925 54 32.9 54 36C54 39.7 53.2875 43.1875 51.8625 46.4625C50.4375 49.7375 48.5 52.6 46.05 55.05C43.6 57.5 40.7375 59.4375 37.4625 60.8625C34.1875 62.2875 30.7 63 27 63ZM27 57C32.8 57 37.75 54.95 41.85 50.85C45.95 46.75 48 41.8 48 36C48 30.2 45.95 25.25 41.85 21.15C37.75 17.05 32.8 15 27 15C21.2 15 16.25 17.05 12.15 21.15C8.05 25.25 6 30.2 6 36C6 41.8 8.05 46.75 12.15 50.85C16.25 54.95 21.2 57 27 57Z"
        fill="#6A1EDB"
      />
    </svg>
  );
}

function CheckCircleStatIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36 56C33.2333 56 30.6333 55.475 28.2 54.425C25.7667 53.375 23.65 51.95 21.85 50.15C20.05 48.35 18.625 46.2333 17.575 43.8C16.525 41.3667 16 38.7667 16 36C16 33.2333 16.525 30.6333 17.575 28.2C18.625 25.7667 20.05 23.65 21.85 21.85C23.65 20.05 25.7667 18.625 28.2 17.575C30.6333 16.525 33.2333 16 36 16C38.1667 16 40.2167 16.3167 42.15 16.95C44.0833 17.5833 45.8667 18.4667 47.5 19.6L44.6 22.55C43.3333 21.75 41.9833 21.125 40.55 20.675C39.1167 20.225 37.6 20 36 20C31.5667 20 27.7917 21.5583 24.675 24.675C21.5583 27.7917 20 31.5667 20 36C20 40.4333 21.5583 44.2083 24.675 47.325C27.7917 50.4417 31.5667 52 36 52C40.4333 52 44.2083 50.4417 47.325 47.325C50.4417 44.2083 52 40.4333 52 36C52 35.4 51.9667 34.8 51.9 34.2C51.8333 33.6 51.7333 33.0167 51.6 32.45L54.85 29.2C55.2167 30.2667 55.5 31.3667 55.7 32.5C55.9 33.6333 56 34.8 56 36C56 38.7667 55.475 41.3667 54.425 43.8C53.375 46.2333 51.95 48.35 50.15 50.15C48.35 51.95 46.2333 53.375 43.8 54.425C41.3667 55.475 38.7667 56 36 56ZM33.2 45.2L24.7 36.7L27.5 33.9L33.2 39.6L53.2 19.55L56 22.35L33.2 45.2Z"
        fill="#004AC6"
      />
    </svg>
  );
}

function TrophyBadgeIcon() {
  return (
    <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0H20V15.7C20 16.4667 19.8333 17.15 19.5 17.75C19.1667 18.35 18.7 18.8333 18.1 19.2L11 23.4L12.4 28H20L13.8 32.4L16.2 40L10 35.3L3.8 40L6.2 32.4L0 28H7.6L9 23.4L1.9 19.2C1.3 18.8333 0.833333 18.35 0.5 17.75C0.166667 17.15 0 16.4667 0 15.7V0ZM8 4V18.1L10 19.3L12 18.1V4H8Z"
        fill="#6F5900"
      />
    </svg>
  );
}

function CalcIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 40V31.4C4.1 29.6667 2.625 27.6417 1.575 25.325C0.525 23.0083 0 20.5667 0 18C0 13 1.75 8.75 5.25 5.25C8.75 1.75 13 0 18 0C22.1667 0 25.8583 1.225 29.075 3.675C32.2917 6.125 34.3833 9.31667 35.35 13.25L37.95 23.5C38.1167 24.1333 38 24.7083 37.6 25.225C37.2 25.7417 36.6667 26 36 26H32V32C32 33.1 31.6083 34.0417 30.825 34.825C30.0417 35.6083 29.1 36 28 36H24V40H6ZM18 28C18.5667 28 19.0417 27.8083 19.425 27.425C19.8083 27.0417 20 26.5667 20 26C20 25.4333 19.8083 24.9583 19.425 24.575C19.0417 24.1917 18.5667 24 18 24C17.4333 24 16.9583 24.1917 16.575 24.575C16.1917 24.9583 16 25.4333 16 26C16 26.5667 16.1917 27.0417 16.575 27.425C16.9583 27.8083 17.4333 28 18 28ZM16.5 21.6H19.55C19.55 20.7667 19.6583 20.0917 19.875 19.575C20.0917 19.0583 20.5333 18.4333 21.2 17.7C21.8 17.0333 22.3833 16.3583 22.95 15.675C23.5167 14.9917 23.8 14.1 23.8 13C23.8 11.6 23.2583 10.4167 22.175 9.45C21.0917 8.48333 19.75 8 18.15 8C16.8167 8 15.6083 8.38333 14.525 9.15C13.4417 9.91667 12.6833 10.9167 12.25 12.15L15 13.3C15.2333 12.5667 15.6417 11.975 16.225 11.525C16.8083 11.075 17.45 10.85 18.15 10.85C18.8833 10.85 19.4917 11.05 19.975 11.45C20.4583 11.85 20.7 12.3667 20.7 13C20.7 13.7 20.4917 14.325 20.075 14.875C19.6583 15.425 19.1667 15.9833 18.6 16.55C17.9333 17.25 17.4167 17.95 17.05 18.65C16.6833 19.35 16.5 20.3333 16.5 21.6Z"
        fill="#004AC6"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 31.5C2.175 31.5 1.46875 31.2062 0.88125 30.6187C0.29375 30.0312 0 29.325 0 28.5V13.5C0 12.675 0.29375 11.9688 0.88125 11.3813C1.46875 10.7938 2.175 10.5 3 10.5H4.5V7.5C4.5 5.425 5.23125 3.65625 6.69375 2.19375C8.15625 0.73125 9.925 0 12 0C14.075 0 15.8438 0.73125 17.3062 2.19375C18.7687 3.65625 19.5 5.425 19.5 7.5V10.5H21C21.825 10.5 22.5312 10.7938 23.1187 11.3813C23.7062 11.9688 24 12.675 24 13.5V28.5C24 29.325 23.7062 30.0312 23.1187 30.6187C22.5312 31.2062 21.825 31.5 21 31.5H3ZM3 28.5H21V13.5H3V28.5ZM12 24C12.825 24 13.5312 23.7062 14.1187 23.1187C14.7062 22.5312 15 21.825 15 21C15 20.175 14.7062 19.4688 14.1187 18.8813C13.5312 18.2938 12.825 18 12 18C11.175 18 10.4688 18.2938 9.88125 18.8813C9.29375 19.4688 9 20.175 9 21C9 21.825 9.29375 22.5312 9.88125 23.1187C10.4688 23.7062 11.175 24 12 24ZM7.5 10.5H16.5V7.5C16.5 6.25 16.0625 5.1875 15.1875 4.3125C14.3125 3.4375 13.25 3 12 3C10.75 3 9.6875 3.4375 8.8125 4.3125C7.9375 5.1875 7.5 6.25 7.5 7.5V10.5Z"
        fill="#737686"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#737686" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7Z"
        fill="#434655"
      />
    </svg>
  );
}

function LockSettingIcon() {
  return (
    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 21C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V9C0 8.45 0.195833 7.97917 0.5875 7.5875C0.979167 7.19583 1.45 7 2 7H3V5C3 3.61667 3.4875 2.4375 4.4625 1.4625C5.4375 0.4875 6.61667 0 8 0C9.38333 0 10.5625 0.4875 11.5375 1.4625C12.5125 2.4375 13 3.61667 13 5V7H14C14.55 7 15.0208 7.19583 15.4125 7.5875C15.8042 7.97917 16 8.45 16 9V19C16 19.55 15.8042 20.0208 15.4125 20.4125C15.0208 20.8042 14.55 21 14 21H2ZM2 19H14V9H2V19ZM8 16C8.55 16 9.02083 15.8042 9.4125 15.4125C9.80417 15.0208 10 14.55 10 14C10 13.45 9.80417 12.9792 9.4125 12.5875C9.02083 12.1958 8.55 12 8 12C7.45 12 6.97917 12.1958 6.5875 12.5875C6.19583 12.9792 6 13.45 6 14C6 14.55 6.19583 15.0208 6.5875 15.4125C6.97917 15.8042 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7Z"
        fill="#434655"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 8.05C0 6.38333 0.370833 4.85417 1.1125 3.4625C1.85417 2.07083 2.85 0.916667 4.1 0L5.275 1.6C4.275 2.33333 3.47917 3.25833 2.8875 4.375C2.29583 5.49167 2 6.71667 2 8.05H0ZM18 8.05C18 6.71667 17.7042 5.49167 17.1125 4.375C16.5208 3.25833 15.725 2.33333 14.725 1.6L15.9 0C17.15 0.916667 18.1458 2.07083 18.8875 3.4625C19.6292 4.85417 20 6.38333 20 8.05H18ZM2 17.05V15.05H4V8.05C4 6.66667 4.41667 5.4375 5.25 4.3625C6.08333 3.2875 7.16667 2.58333 8.5 2.25V1.55C8.5 1.13333 8.64583 0.779167 8.9375 0.4875C9.22917 0.195833 9.58333 0.05 10 0.05C10.4167 0.05 10.7708 0.195833 11.0625 0.4875C11.3542 0.779167 11.5 1.13333 11.5 1.55V2.25C12.8333 2.58333 13.9167 3.2875 14.75 4.3625C15.5833 5.4375 16 6.66667 16 8.05V15.05H18V17.05H2ZM10 20.05C9.45 20.05 8.97917 19.8542 8.5875 19.4625C8.19583 19.0708 8 18.6 8 18.05H12C12 18.6 11.8042 19.0708 11.4125 19.4625C11.0208 19.8542 10.55 20.05 10 20.05Z"
        fill="#434655"
      />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z"
        fill="#F43F5E"
      />
    </svg>
  );
}

function SettingsGearIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.3 28L14.9 24.8C14.6833 24.7167 14.4792 24.6167 14.2875 24.5C14.0958 24.3833 13.9083 24.2583 13.725 24.125L10.75 25.375L8 20.625L10.575 18.675C10.5583 18.5583 10.55 18.4458 10.55 18.3375C10.55 18.2292 10.55 18.1167 10.55 18C10.55 17.8833 10.55 17.7708 10.55 17.6625C10.55 17.5542 10.5583 17.4417 10.575 17.325L8 15.375L10.75 10.625L13.725 11.875C13.9083 11.7417 14.1 11.6167 14.3 11.5C14.5 11.3833 14.7 11.2833 14.9 11.2L15.3 8H20.8L21.2 11.2C21.4167 11.2833 21.6208 11.3833 21.8125 11.5C22.0042 11.6167 22.1917 11.7417 22.375 11.875L25.35 10.625L28.1 15.375L25.525 17.325C25.5417 17.4417 25.55 17.5542 25.55 17.6625C25.55 17.7708 25.55 17.8833 25.55 18C25.55 18.1167 25.55 18.2292 25.55 18.3375C25.55 18.4458 25.5333 18.5583 25.5 18.675L28.075 20.625L25.325 25.375L22.375 24.125C22.1917 24.2583 22 24.3833 21.8 24.5C21.6 24.6167 21.4 24.7167 21.2 24.8L20.8 28H15.3ZM17.05 26H19.025L19.375 23.35C19.8917 23.2167 20.3708 23.0208 20.8125 22.7625C21.2542 22.5042 21.6583 22.1917 22.025 21.825L24.5 22.85L25.475 21.15L23.325 19.525C23.4083 19.2917 23.4667 19.0458 23.5 18.7875C23.5333 18.5292 23.55 18.2667 23.55 18C23.55 17.7333 23.5333 17.4708 23.5 17.2125C23.4667 16.9542 23.4083 16.7083 23.325 16.475L25.475 14.85L24.5 13.15L22.025 14.2C21.6583 13.8167 21.2542 13.4958 20.8125 13.2375C20.3708 12.9792 19.8917 12.7833 19.375 12.65L19.05 10H17.075L16.725 12.65C16.2083 12.7833 15.7292 12.9792 15.2875 13.2375C14.8458 13.4958 14.4417 13.8083 14.075 14.175L11.6 13.15L10.625 14.85L12.775 16.45C12.6917 16.7 12.6333 16.95 12.6 17.2C12.5667 17.45 12.55 17.7167 12.55 18C12.55 18.2667 12.5667 18.525 12.6 18.775C12.6333 19.025 12.6917 19.275 12.775 19.525L10.625 21.15L11.6 22.85L14.075 21.8C14.4417 22.1833 14.8458 22.5042 15.2875 22.7625C15.7292 23.0208 16.2083 23.2167 16.725 23.35L17.05 26ZM18.1 21.5C19.0667 21.5 19.8917 21.1583 20.575 20.475C21.2583 19.7917 21.6 18.9667 21.6 18C21.6 17.0333 21.2583 16.2083 20.575 15.525C19.8917 14.8417 19.0667 14.5 18.1 14.5C17.1167 14.5 16.2875 14.8417 15.6125 15.525C14.9375 16.2083 14.6 17.0333 14.6 18C14.6 18.9667 14.9375 19.7917 15.6125 20.475C16.2875 21.1583 17.1167 21.5 18.1 21.5Z"
        fill="#434655"
      />
    </svg>
  );
}

const achievements = [
  {
    key: "rajin",
    state: "gold" as const,
    icon: <TrophyBadgeIcon />,
    title: "Si Paling Rajin",
    desc: "Login 7 hari berturut-turut",
  },
  {
    key: "mtk",
    state: "blue" as const,
    icon: <CalcIcon />,
    title: "Master MTK",
    desc: "Selesaikan 100 soal MTK",
  },
  {
    key: "tryout",
    state: "locked" as const,
    icon: <LockIcon />,
    title: "Penakluk Tryout",
    desc: "Skor > 700 di Tryout Nasional",
  },
  {
    key: "night-owl",
    state: "locked" as const,
    icon: <LockIcon />,
    title: "Night Owl",
    desc: "Belajar di atas jam 10 malam",
  },
];

const accountSettings = [
  {
    key: "email",
    icon: <MailIcon />,
    title: "Email",
    value: "budi.santoso@example.com",
    type: "link" as const,
  },
  {
    key: "password",
    icon: <LockSettingIcon />,
    title: "Kata Sandi",
    value: "Diperbarui 2 bulan yang lalu",
    type: "link" as const,
  },
  {
    key: "notif",
    icon: <BellIcon />,
    title: "Notifikasi Belajar",
    value: "Pengingat harian",
    type: "toggle" as const,
  },
];

function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOn, setNotifOn] = useState(true);

  return (
    <div className="dashboard-page">
      <AppSidebar active="Profil" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main">
        <AppTopbar onMenuClick={() => setSidebarOpen(true)} searchPlaceholder="Cari materi..." />

        <main className="prof-content">
          <div className="prof-blobs" aria-hidden="true">
            <span className="prof-blob prof-blob--blue" />
            <span className="prof-blob prof-blob--purple" />
            <span className="prof-blob prof-blob--pink" />
            <span className="prof-blob prof-blob--green" />
          </div>

          <div className="prof-container">
            <section className="prof-hero">
              <div className="prof-hero__glow prof-hero__glow--a" aria-hidden="true" />
              <div className="prof-hero__glow prof-hero__glow--b" aria-hidden="true" />

              <div className="prof-hero__avatar-wrap">
                <div className="prof-hero__avatar-ring">
                  <img src={avatarSrc} alt="Foto profil" className="prof-hero__avatar" />
                </div>
                <button type="button" className="prof-hero__edit-btn" aria-label="Ubah foto profil">
                  <PencilIcon />
                </button>
              </div>

              <div className="prof-hero__body">
                <h1 className="prof-hero__name">Bahlil</h1>
                <p className="prof-hero__meta">
                  Pejuang TKA <span className="prof-hero__dot">•</span> Saintek
                </p>

                <div className="prof-hero__chips">
                  <span className="prof-hero__chip">
                    <ClassCapIcon />
                    Kelas 3 SMP
                  </span>
                  <span className="prof-hero__chip">
                    <PinIcon />
                    Jakarta
                  </span>
                </div>

                <div className="prof-level">
                  <div className="prof-level__head">
                    <div className="prof-level__badge-group">
                      <span className="prof-level__badge">LVL 12</span>
                      <span className="prof-level__title">Pelajar Ambis</span>
                    </div>
                    <span className="prof-level__xp">
                      450 <span className="prof-level__xp-muted">/ 1000 XP</span>
                    </span>
                  </div>
                  <div className="prof-level__track">
                    <div className="prof-level__fill" style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
            </section>

            <div className="prof-grid">
              <section className="prof-stats">
                <h2 className="prof-section-title">
                  <span className="prof-section-icon prof-section-icon--blue">
                    <svg width="20" height="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 26V24L10 22V26H8ZM12 26V20L14 18V26H12ZM16 26V18L18 20.025V26H16ZM20 26V20.025L22 18.025V26H20ZM24 26V16L26 14V26H24ZM8 20.825V18L15 11L19 15L26 8V10.825L19 17.825L15 13.825L8 20.825Z"
                        fill="#004AC6"
                      />
                    </svg>
                  </span>
                  Statistik
                </h2>

                <div className="prof-stats__grid">
                  <div className="prof-stat-card">
                    <span className="prof-stat-card__decor prof-stat-card__decor--orange">
                      <FlameStatIcon />
                    </span>
                    <span className="prof-stat-card__value">14</span>
                    <span className="prof-stat-card__label">
                      Hari
                      <br />
                      Beruntun
                    </span>
                  </div>

                  <div className="prof-stat-card">
                    <span className="prof-stat-card__decor prof-stat-card__decor--purple">
                      <ClockStatIcon />
                    </span>
                    <span className="prof-stat-card__value-row">
                      <span className="prof-stat-card__value">42</span>
                      <span className="prof-stat-card__unit">j</span>
                    </span>
                    <span className="prof-stat-card__label">
                      Total
                      <br />
                      Belajar
                    </span>
                  </div>

                  <div className="prof-stat-card prof-stat-card--wide">
                    <div className="prof-stat-card__wide-text">
                      <span className="prof-stat-card__eyebrow">Soal Terjawab</span>
                      <span className="prof-stat-card__big-value">1,204</span>
                    </div>
                    <span className="prof-stat-card__decor prof-stat-card__decor--blue-circle">
                      <CheckCircleStatIcon />
                    </span>
                  </div>
                </div>
              </section>

              <section className="prof-achievements">
                <div className="prof-achievements__head">
                  <h2 className="prof-section-title">
                    <span className="prof-section-icon prof-section-icon--yellow">
                      <svg width="20" height="23" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.675 19.7L14.55 16.85L12.25 15H15.1L16 12.2L16.9 15H19.75L17.425 16.85L18.3 19.7L16 17.925L13.675 19.7ZM10 29V21.275C9.36667 20.575 8.875 19.775 8.525 18.875C8.175 17.975 8 17.0167 8 16C8 13.7667 8.775 11.875 10.325 10.325C11.875 8.775 13.7667 8 16 8C18.2333 8 20.125 8.775 21.675 10.325C23.225 11.875 24 13.7667 24 16C24 17.0167 23.825 17.975 23.475 18.875C23.125 19.775 22.6333 20.575 22 21.275V29L16 27L10 29ZM16 22C17.6667 22 19.0833 21.4167 20.25 20.25C21.4167 19.0833 22 17.6667 22 16C22 14.3333 21.4167 12.9167 20.25 11.75C19.0833 10.5833 17.6667 10 16 10C14.3333 10 12.9167 10.5833 11.75 11.75C10.5833 12.9167 10 14.3333 10 16C10 17.6667 10.5833 19.0833 11.75 20.25C12.9167 21.4167 14.3333 22 16 22Z"
                          fill="#FED01B"
                        />
                      </svg>
                    </span>
                    Achievements
                  </h2>
                  <button type="button" className="prof-achievements__see-all">
                    Lihat Semua
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z" fill="#004AC6" />
                    </svg>
                  </button>
                </div>

                <div className="prof-achievements__grid">
                  {achievements.map((item) => (
                    <div
                      key={item.key}
                      className={`prof-achievement prof-achievement--${item.state === "locked" ? "locked" : "unlocked"}`}
                    >
                      <span
                        className={`prof-achievement__icon prof-achievement__icon--${item.state}`}
                      >
                        {item.icon}
                      </span>
                      <h3
                        className={`prof-achievement__title${
                          item.state === "locked" ? " prof-achievement__title--locked" : ""
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`prof-achievement__desc${
                          item.state === "locked" ? " prof-achievement__desc--locked" : ""
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="prof-settings">
              <h2 className="prof-section-title">
                <span className="prof-section-icon prof-section-icon--gray">
                  <SettingsGearIcon />
                </span>
                Pengaturan Akun Dasar
              </h2>

              <div className="prof-settings__list">
                {accountSettings.map((item, index) => (
                  <div key={item.key}>
                    <div className="prof-settings__row">
                      <div className="prof-settings__row-left">
                        <span className="prof-settings__icon">{item.icon}</span>
                        <div className="prof-settings__text">
                          <p className="prof-settings__title">{item.title}</p>
                          <p className="prof-settings__value">{item.value}</p>
                        </div>
                      </div>

                      {item.type === "toggle" ? (
                        <button
                          type="button"
                          className={`prof-toggle${notifOn ? " prof-toggle--on" : ""}`}
                          role="switch"
                          aria-checked={notifOn}
                          aria-label="Notifikasi Belajar"
                          onClick={() => setNotifOn((prev) => !prev)}
                        >
                          <span className="prof-toggle__knob" />
                        </button>
                      ) : (
                        <span className="prof-settings__chevron">
                          <ChevronIcon />
                        </span>
                      )}
                    </div>
                    {index < accountSettings.length - 1 ? <div className="prof-settings__divider" /> : null}
                  </div>
                ))}
              </div>

              <div className="prof-settings__footer">
                <button type="button" className="prof-logout-btn">
                  <LogoutIcon />
                  Keluar Akun
                </button>
              </div>
            </section>
          </div>
        </main>

        <div className="prof-footer-wrap">
          <AppFooter />
        </div>
      </div>
    </div>
  );
}

export default Profile;
