import { useState } from "react";
import type { ReactNode } from "react";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import AppFooter from "../components/AppFooter";
import "./AITutor.css";

const mascotImageSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/7e5b2ee50521cdff0d40a516fe6c0780a7ac0103?width=320";
const userAvatarSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/9f996f094ce0f142565ff79a444f653a84ea1019?width=88";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  content: ReactNode;
};

const topics = [
  {
    key: "trigonometri",
    title: "Trigonometri Dasar",
    subtitle: "Sering ditanyakan minggu ini",
    color: "#004AC6",
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
    key: "stoikiometri",
    title: "Stoikiometri Kimia",
    subtitle: "Konsep mol & reaksi",
    color: "#10B981",
    icon: (
      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.0285 18C1.1785 18 0.574338 17.6208 0.216005 16.8625C-0.142329 16.1042 -0.0548287 15.4 0.478505 14.75L6.0285 8V2H5.0285C4.74517 2 4.50767 1.90417 4.316 1.7125C4.12434 1.52083 4.0285 1.28333 4.0285 1C4.0285 0.716667 4.12434 0.479167 4.316 0.2875C4.50767 0.0958333 4.74517 0 5.0285 0H13.0285C13.3118 0 13.5493 0.0958333 13.741 0.2875C13.9327 0.479167 14.0285 0.716667 14.0285 1C14.0285 1.28333 13.9327 1.52083 13.741 1.7125C13.5493 1.90417 13.3118 2 13.0285 2H12.0285V8L17.5785 14.75C18.1118 15.4 18.1993 16.1042 17.841 16.8625C17.4827 17.6208 16.8785 18 16.0285 18H2.0285ZM2.0285 16H16.0285L10.0285 8.7V2H8.0285V8.7L2.0285 16Z"
          fill="#10B981"
        />
      </svg>
    ),
  },
  {
    key: "sejarah",
    title: "Sejarah Kemerdekaan",
    subtitle: "Rangkuman peristiwa penting",
    color: "#F59E0B",
    icon: (
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.5 16C5.95 16 5.47917 15.8042 5.0875 15.4125C4.69583 15.0208 4.5 14.55 4.5 14V11H7.5V8.75C6.91667 8.71667 6.3625 8.5875 5.8375 8.3625C5.3125 8.1375 4.83333 7.8 4.4 7.35V6.25H3.25L0 3C0.6 2.23333 1.34167 1.69167 2.225 1.375C3.10833 1.05833 4 0.9 4.9 0.9C5.35 0.9 5.7875 0.933333 6.2125 1C6.6375 1.06667 7.06667 1.19167 7.5 1.375V0H19.5V13C19.5 13.8333 19.2083 14.5417 18.625 15.125C18.0417 15.7083 17.3333 16 16.5 16H6.5ZM9.5 11H15.5V13C15.5 13.2833 15.5958 13.5208 15.7875 13.7125C15.9792 13.9042 16.2167 14 16.5 14C16.7833 14 17.0208 13.9042 17.2125 13.7125C17.4042 13.5208 17.5 13.2833 17.5 13V2H9.5V2.6L15.5 8.6V10H14.1L11.25 7.15L11.05 7.35C10.8167 7.58333 10.5708 7.79167 10.3125 7.975C10.0542 8.15833 9.78333 8.3 9.5 8.4V11ZM4.1 4.25H6.4V6.4C6.6 6.53333 6.80833 6.625 7.025 6.675C7.24167 6.725 7.46667 6.75 7.7 6.75C8.08333 6.75 8.42917 6.69167 8.7375 6.575C9.04583 6.45833 9.35 6.25 9.65 5.95L9.85 5.75L8.45 4.35C7.96667 3.86667 7.425 3.50417 6.825 3.2625C6.225 3.02083 5.58333 2.9 4.9 2.9C4.56667 2.9 4.25 2.925 3.95 2.975C3.65 3.025 3.35 3.1 3.05 3.2L4.1 4.25Z"
          fill="#F59E0B"
        />
      </svg>
    ),
  },
];

function BotAvatar() {
  return (
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H8C8 2.16667 8.29167 1.45833 8.875 0.875C9.45833 0.291667 10.1667 0 11 0C11.8333 0 12.5417 0.291667 13.125 0.875C13.7083 1.45833 14 2.16667 14 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V7C19.8333 7 20.5417 7.29167 21.125 7.875C21.7083 8.45833 22 9.16667 22 10C22 10.8333 21.7083 11.5417 21.125 12.125C20.5417 12.7083 19.8333 13 19 13V17C19 17.55 18.8042 18.0208 18.4125 18.4125C18.0208 18.8042 17.55 19 17 19H5C4.45 19 3.97917 18.8042 3.5875 18.4125C3.19583 18.0208 3 17.55 3 17V13ZM8 11C8.41667 11 8.77083 10.8542 9.0625 10.5625C9.35417 10.2708 9.5 9.91667 9.5 9.5C9.5 9.08333 9.35417 8.72917 9.0625 8.4375C8.77083 8.14583 8.41667 8 8 8C7.58333 8 7.22917 8.14583 6.9375 8.4375C6.64583 8.72917 6.5 9.08333 6.5 9.5C6.5 9.91667 6.64583 10.2708 6.9375 10.5625C7.22917 10.8542 7.58333 11 8 11ZM14 11C14.4167 11 14.7708 10.8542 15.0625 10.5625C15.3542 10.2708 15.5 9.91667 15.5 9.5C15.5 9.08333 15.3542 8.72917 15.0625 8.4375C14.7708 8.14583 14.4167 8 14 8C13.5833 8 13.2292 8.14583 12.9375 8.4375C12.6458 8.72917 12.5 9.08333 12.5 9.5C12.5 9.91667 12.6458 10.2708 12.9375 10.5625C13.2292 10.8542 13.5833 11 14 11ZM7 15H15V13H7V15ZM5 17H17V5H5V17Z"
        fill="white"
      />
    </svg>
  );
}

const initialMessages: ChatMessage[] = [
  {
    id: "bot-1",
    role: "bot",
    content: (
      <>
        <p className="aitutor-msg__text">
          Halo! Aku Tutor Bot. Ada materi yang bikin kamu bingung untuk persiapan TKA hari ini?
        </p>
      </>
    ),
  },
  {
    id: "user-1",
    role: "user",
    content: (
      <p className="aitutor-msg__text">
        Bisa tolong jelaskan konsep Hukum Newton 2 dengan bahasa yang gampang dimengerti?
      </p>
    ),
  },
  {
    id: "bot-2",
    role: "bot",
    content: (
      <>
        <p className="aitutor-msg__text">
          Tentu! Hukum Newton 2 itu intinya begini: <strong>Kalau kamu dorong barang (Kasih Gaya/F), barang itu
          bakal bergerak makin cepat (Punya Percepatan/a).</strong>
        </p>
        <div className="aitutor-formula-box">F = m &times; a</div>
        <ul className="aitutor-list">
          <li>
            <strong>F (Force/Gaya):</strong> Seberapa kuat doronganmu.
          </li>
          <li>
            <strong>m (Mass/Massa):</strong> Seberapa berat barangnya.
          </li>
        </ul>
        <p className="aitutor-msg__text">
          Bayangin kamu dorong troli kosong vs troli penuh batu. Mana yang lebih susah didorong biar cepat? Pasti
          yang penuh batu kan (massanya besar)? Nah, itu penerapan simpelnya!
        </p>
        <div className="aitutor-quiz-card">
          <span className="aitutor-quiz-card__icon">
            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.875 18.3333C6.37083 18.3333 5.93924 18.1538 5.58021 17.7948C5.22118 17.4358 5.04167 17.0042 5.04167 16.5H8.70833C8.70833 17.0042 8.52882 17.4358 8.16979 17.7948C7.81076 18.1538 7.37917 18.3333 6.875 18.3333ZM3.20833 15.5833V13.75H10.5417V15.5833H3.20833ZM3.4375 12.8333C2.38333 12.2069 1.54688 11.3667 0.928125 10.3125C0.309375 9.25833 0 8.1125 0 6.875C0 4.96528 0.668403 3.34201 2.00521 2.00521C3.34201 0.668403 4.96528 0 6.875 0C8.78472 0 10.408 0.668403 11.7448 2.00521C13.0816 3.34201 13.75 4.96528 13.75 6.875C13.75 8.1125 13.4406 9.25833 12.8219 10.3125C12.2031 11.3667 11.3667 12.2069 10.3125 12.8333H3.4375ZM3.9875 11H9.7625C10.45 10.5111 10.9809 9.90764 11.3552 9.18958C11.7295 8.47153 11.9167 7.7 11.9167 6.875C11.9167 5.46944 11.4278 4.27778 10.45 3.3C9.47222 2.32222 8.28056 1.83333 6.875 1.83333C5.46944 1.83333 4.27778 2.32222 3.3 3.3C2.32222 4.27778 1.83333 5.46944 1.83333 6.875C1.83333 7.7 2.02049 8.47153 2.39479 9.18958C2.7691 9.90764 3.3 10.5111 3.9875 11Z"
                fill="#735C00"
              />
            </svg>
          </span>
          <div>
            <p className="aitutor-quiz-card__title">Mini Kuis!</p>
            <p className="aitutor-quiz-card__desc">
              Kalau gaya diperbesar 2x, tapi massa tetap, apa yang terjadi pada percepatannya?
            </p>
          </div>
        </div>
      </>
    ),
  },
];

const quickReplies = ["Bahas Biologi", "Rumus Fisika"];

function AITutor() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        role: "user",
        content: <p className="aitutor-msg__text">{trimmed}</p>,
      },
    ]);
    setInputValue("");
  };

  return (
    <div className="dashboard-page">
      <AppSidebar active="AI Tutor" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main aitutor-page">
        <AppTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="aitutor-content">
          <div className="aitutor-blobs" aria-hidden="true">
            <span className="aitutor-blob aitutor-blob--blue" />
            <span className="aitutor-blob aitutor-blob--purple" />
            <span className="aitutor-blob aitutor-blob--pink" />
            <span className="aitutor-blob aitutor-blob--green" />
          </div>

          <div className="aitutor-grid">
            <section className="aitutor-chat">
              <header className="aitutor-chat__header">
                <div className="aitutor-chat__identity">
                  <span className="aitutor-chat__avatar">
                    <BotAvatar />
                  </span>
                  <div>
                    <h1 className="aitutor-chat__title">Tutor Bot</h1>
                    <p className="aitutor-chat__status">
                      <i className="aitutor-chat__status-dot" />
                      Online
                    </p>
                  </div>
                </div>
                <button type="button" className="aitutor-chat__more" aria-label="Opsi lain">
                  <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z"
                      fill="#434655"
                    />
                  </svg>
                </button>
              </header>

              <div className="aitutor-chat__messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`aitutor-msg-row${
                      message.role === "user" ? " aitutor-msg-row--user" : ""
                    }`}
                  >
                    <div
                      className={`aitutor-msg${
                        message.role === "user" ? " aitutor-msg--user" : ""
                      }`}
                    >
                      {message.role === "bot" ? (
                        <span className="aitutor-msg__avatar aitutor-msg__avatar--bot">
                          <BotAvatar />
                        </span>
                      ) : null}

                      <div className="aitutor-msg__bubble">
                        {message.content}
                        {message.id === "bot-1" ? (
                          <div className="aitutor-quick-replies">
                            {quickReplies.map((reply) => (
                              <button
                                type="button"
                                key={reply}
                                className="aitutor-quick-reply"
                                onClick={() => sendMessage(reply)}
                              >
                                {reply}
                              </button>
                            ))}
                          </div>
                        ) : null}
                      </div>

                      {message.role === "user" ? (
                        <span className="aitutor-msg__avatar aitutor-msg__avatar--user">
                          <img src={userAvatarSrc} alt="" />
                        </span>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>

              <div className="aitutor-chat__input">
                <div className="aitutor-input-row">
                  <button type="button" className="aitutor-attach-btn" aria-label="Lampirkan berkas">
                    <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.5 13.75C12.5 15.4833 11.8917 16.9583 10.675 18.175C9.45833 19.3917 7.98333 20 6.25 20C4.51667 20 3.04167 19.3917 1.825 18.175C0.608333 16.9583 0 15.4833 0 13.75V4.5C0 3.25 0.4375 2.1875 1.3125 1.3125C2.1875 0.4375 3.25 0 4.5 0C5.75 0 6.8125 0.4375 7.6875 1.3125C8.5625 2.1875 9 3.25 9 4.5V13.25C9 14.0167 8.73333 14.6667 8.2 15.2C7.66667 15.7333 7.01667 16 6.25 16C5.48333 16 4.83333 15.7333 4.3 15.2C3.76667 14.6667 3.5 14.0167 3.5 13.25V4H5.5V13.25C5.5 13.4667 5.57083 13.6458 5.7125 13.7875C5.85417 13.9292 6.03333 14 6.25 14C6.46667 14 6.64583 13.9292 6.7875 13.7875C6.92917 13.6458 7 13.4667 7 13.25V4.5C6.98333 3.8 6.7375 3.20833 6.2625 2.725C5.7875 2.24167 5.2 2 4.5 2C3.8 2 3.20833 2.24167 2.725 2.725C2.24167 3.20833 2 3.8 2 4.5V13.75C1.98333 14.9333 2.39167 15.9375 3.225 16.7625C4.05833 17.5875 5.06667 18 6.25 18C7.41667 18 8.40833 17.5875 9.225 16.7625C10.0417 15.9375 10.4667 14.9333 10.5 13.75V4H12.5V13.75Z"
                        fill="#434655"
                      />
                    </svg>
                  </button>

                  <textarea
                    className="aitutor-textarea"
                    placeholder="Ketik pertanyaanmu di sini..."
                    rows={1}
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        sendMessage(inputValue);
                      }
                    }}
                  />

                  <button
                    type="button"
                    className="aitutor-send-btn"
                    aria-label="Kirim pertanyaan"
                    onClick={() => sendMessage(inputValue)}
                  >
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 16V10L8 8L0 6V0L19 8L0 16Z" fill="white" />
                    </svg>
                  </button>
                </div>

                <div className="aitutor-input-foot">
                  <p className="aitutor-input-disclaimer">AI dapat membuat kesalahan. Cek kembali fakta penting.</p>
                  <button type="button" className="aitutor-history-btn">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.75 13.5C5.025 13.5 3.52187 12.9281 2.24062 11.7844C0.959375 10.6406 0.225 9.2125 0.0375 7.5H1.575C1.75 8.8 2.32812 9.875 3.30938 10.725C4.29063 11.575 5.4375 12 6.75 12C8.2125 12 9.45312 11.4906 10.4719 10.4719C11.4906 9.45312 12 8.2125 12 6.75C12 5.2875 11.4906 4.04688 10.4719 3.02813C9.45312 2.00938 8.2125 1.5 6.75 1.5C5.8875 1.5 5.08125 1.7 4.33125 2.1C3.58125 2.5 2.95 3.05 2.4375 3.75H4.5V5.25H0V0.75H1.5V2.5125C2.1375 1.7125 2.91562 1.09375 3.83437 0.65625C4.75312 0.21875 5.725 0 6.75 0C7.6875 0 8.56562 0.178125 9.38437 0.534375C10.2031 0.890625 10.9156 1.37188 11.5219 1.97812C12.1281 2.58437 12.6094 3.29688 12.9656 4.11562C13.3219 4.93437 13.5 5.8125 13.5 6.75C13.5 7.6875 13.3219 8.56562 12.9656 9.38437C12.6094 10.2031 12.1281 10.9156 11.5219 11.5219C10.9156 12.1281 10.2031 12.6094 9.38437 12.9656C8.56562 13.3219 7.6875 13.5 6.75 13.5Z"
                        fill="#004AC6"
                      />
                    </svg>
                    Riwayat Chat
                  </button>
                </div>
              </div>
            </section>

            <aside className="aitutor-aside">
              <div className="aitutor-mascot-card">
                <span className="aitutor-mascot-card__glow aitutor-mascot-card__glow--top" aria-hidden="true" />
                <span className="aitutor-mascot-card__glow aitutor-mascot-card__glow--bottom" aria-hidden="true" />
                <img src={mascotImageSrc} alt="Maskot AI Tutor" className="aitutor-mascot-card__image" />
                <h2 className="aitutor-mascot-card__title">Tutor Aktif</h2>
                <p className="aitutor-mascot-card__subtitle">Siap bantu pecahkan soal tersulitmu!</p>
                <div className="aitutor-mascot-card__track">
                  <span className="aitutor-mascot-card__fill" style={{ width: "75%" }} />
                </div>
                <p className="aitutor-mascot-card__quota">Batas harian AI: 75/100 query</p>
              </div>

              <div className="aitutor-topics">
                <h3 className="aitutor-topics__title">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.28333 11L0 9.71667L6.78333 2.8875L10.45 6.55417L15.2167 1.83333H12.8333V0H18.3333V5.5H16.5V3.11667L10.45 9.16667L6.78333 5.5L1.28333 11Z"
                      fill="#FB923C"
                    />
                  </svg>
                  Topik Populer
                </h3>
                <div className="aitutor-topics__list">
                  {topics.map((topic) => (
                    <button
                      type="button"
                      key={topic.key}
                      className="aitutor-topic"
                      onClick={() => setInputValue(`Bisa jelaskan tentang ${topic.title}?`)}
                    >
                      <span
                        className="aitutor-topic__icon"
                        style={{
                          background: `linear-gradient(135deg, ${topic.color}33 0%, ${topic.color}0D 100%)`,
                          borderColor: `${topic.color}1A`,
                        }}
                      >
                        {topic.icon}
                      </span>
                      <span className="aitutor-topic__text">
                        <span className="aitutor-topic__title">{topic.title}</span>
                        <span className="aitutor-topic__subtitle">{topic.subtitle}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="aitutor-saved">
                <h3 className="aitutor-saved__title">
                  <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 15V1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0H10C10.4583 0 10.8507 0.163194 11.1771 0.489583C11.5035 0.815972 11.6667 1.20833 11.6667 1.66667V15L5.83333 12.5L0 15Z"
                      fill="#004AC6"
                    />
                  </svg>
                  Tersimpan
                </h3>
                <div className="aitutor-saved__empty">
                  <p>Belum ada chat yang disimpan.</p>
                </div>
              </div>
            </aside>
          </div>

          <AppFooter />
        </div>
      </div>
    </div>
  );
}

export default AITutor;
