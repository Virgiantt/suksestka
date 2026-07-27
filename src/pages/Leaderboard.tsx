import { useState } from "react";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import AppFooter from "../components/AppFooter";
import "../styles/siswa/Leaderboard.css";

const rank1Avatar =
  "https://api.builder.io/api/v1/image/assets/TEMP/d220ee104f35e55285c4228c70e7193702db4f7d?width=296";
const rank2Avatar =
  "https://api.builder.io/api/v1/image/assets/TEMP/e5bf912aab4aa5f94f243dc02bef4cb3c61524ca?width=204";
const rank3Avatar =
  "https://api.builder.io/api/v1/image/assets/TEMP/9c4f8fd405ed28bc9c401d3d6a6e8c096f0015c7?width=204";
const currentUserAvatar =
  "https://api.builder.io/api/v1/image/assets/TEMP/4dcdb54c82e2bcc91f1017674005813b3c08579a?width=104";

const listAvatars = [
  "https://api.builder.io/api/v1/image/assets/TEMP/27c5ddf549851f2339f59f1fe579c0a6d29904e6?width=92",
  "https://api.builder.io/api/v1/image/assets/TEMP/80178142c4b750e7967be95d6f7de4d18f7a92aa?width=92",
  "https://api.builder.io/api/v1/image/assets/TEMP/1f4ec404d8cd589e224c844b56140a1310eda3d2?width=92",
  "https://api.builder.io/api/v1/image/assets/TEMP/be2535723ec24b0ea4b41c2a05b1e37b37e5d554?width=92",
  "https://api.builder.io/api/v1/image/assets/TEMP/7eb1a869ae7dc0f7b943df9d664aaa11cdb40049?width=92",
  "https://api.builder.io/api/v1/image/assets/TEMP/9f996f094ce0f142565ff79a444f653a84ea1019?width=92",
];

const filters = ["Mingguan", "Bulanan", "Semua Waktu"];

const podium = [
  {
    rank: 2,
    name: "teddy",
    level: "Lvl 45",
    xp: "12,450 XP",
    avatar: rank2Avatar,
    tier: "silver" as const,
  },
  {
    rank: 1,
    name: "fufufafa",
    level: "Lvl 50 (Max)",
    xp: "15,200 XP",
    avatar: rank1Avatar,
    tier: "gold" as const,
  },
  {
    rank: 3,
    name: "wowo",
    level: "Lvl 42",
    xp: "11,800 XP",
    avatar: rank3Avatar,
    tier: "bronze" as const,
  },
];

const students = [
  { rank: 4, name: "Dimas R.", level: "Lvl 38", xp: "10,200" },
  { rank: 5, name: "Eka P.", level: "Lvl 36", xp: "9,850" },
  { rank: 6, name: "Fajar W.", level: "Lvl 35", xp: "9,100" },
  { rank: 7, name: "Gita S.", level: "Lvl 33", xp: "8,750" },
  { rank: 8, name: "Hadi K.", level: "Lvl 31", xp: "8,200" },
  { rank: 9, name: "Intan A.", level: "Lvl 30", xp: "7,900" },
].map((student, index) => ({ ...student, avatar: listAvatars[index] }));

function StarBadge() {
  return (
    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.23125 11.0833L3.17917 6.98542L0 4.22917L4.2 3.86458L5.83333 0L7.46667 3.86458L11.6667 4.22917L8.4875 6.98542L9.43542 11.0833L5.83333 8.91042L2.23125 11.0833Z"
        fill="#8D6E63"
      />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="20" height="21" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 31.5V29H19V25.125C17.9792 24.8958 17.0677 24.4635 16.2656 23.8281C15.4635 23.1927 14.875 22.3958 14.5 21.4375C12.9375 21.25 11.6302 20.5677 10.5781 19.3906C9.52604 18.2135 9 16.8333 9 15.25V14C9 13.3125 9.24479 12.724 9.73438 12.2344C10.224 11.7448 10.8125 11.5 11.5 11.5H14V9H26.5V11.5H29C29.6875 11.5 30.276 11.7448 30.7656 12.2344C31.2552 12.724 31.5 13.3125 31.5 14V15.25C31.5 16.8333 30.974 18.2135 29.9219 19.3906C28.8698 20.5677 27.5625 21.25 26 21.4375C25.625 22.3958 25.0365 23.1927 24.2344 23.8281C23.4323 24.4635 22.5208 24.8958 21.5 25.125V29H26.5V31.5H14ZM14 18.75V14H11.5V15.25C11.5 16.0417 11.7292 16.7552 12.1875 17.3906C12.6458 18.026 13.25 18.4792 14 18.75ZM26.5 18.75C27.25 18.4792 27.8542 18.026 28.3125 17.3906C28.7708 16.7552 29 16.0417 29 15.25V14H26.5V18.75Z"
        fill="#004AC6"
      />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.66667 10.6667V2.55L0.933333 6.28333L0 5.33333L5.33333 0L10.6667 5.33333L9.73333 6.28333L6 2.55V10.6667H4.66667Z" fill="#4ADE80" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 6.16667L0 1.16667L1.16667 0L5 3.83333L8.83333 0L10 1.16667L5 6.16667Z" fill="#004AC6" />
    </svg>
  );
}

function Leaderboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Bulanan");

  return (
    <div className="dashboard-page">
      <AppSidebar active="Leaderboard" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main">
        <AppTopbar onMenuClick={() => setSidebarOpen(true)} searchPlaceholder="Cari materi..." />

        <main className="lb-content">
          <div className="lb-blobs" aria-hidden="true">
            <span className="lb-blob lb-blob--blue" />
            <span className="lb-blob lb-blob--purple" />
            <span className="lb-blob lb-blob--pink" />
            <span className="lb-blob lb-blob--green" />
          </div>

          <div className="lb-container">
            <div className="lb-header">
              <div className="lb-header__text">
                <div className="lb-header__title-row">
                  <span className="lb-header__icon">
                    <TrophyIcon />
                  </span>
                  <h1 className="lb-header__title">Global Leaderboard</h1>
                </div>
                <p className="lb-header__subtitle">
                  Buktikan kemampuanmu dan jadilah yang terbaik di antara ribuan pejuang PTN lainnya.
                </p>
              </div>

              <div className="lb-filters">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`lb-filters__btn${filter === activeFilter ? " lb-filters__btn--active" : ""}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="lb-podium">
              {podium.map((entry) => (
                <div className={`lb-podium__item lb-podium__item--${entry.tier}`} key={entry.rank}>
                  <div className={`lb-podium__card lb-podium__card--${entry.tier}`}>
                    <div className={`lb-podium__avatar-wrap lb-podium__avatar-wrap--${entry.tier}`}>
                      <img src={entry.avatar} alt={entry.name} className="lb-podium__avatar" />
                      <span className={`lb-podium__rank-badge lb-podium__rank-badge--${entry.tier}`}>
                        {entry.rank}
                      </span>
                      {entry.tier === "gold" ? (
                        <span className="lb-podium__crown">
                          <StarBadge />
                        </span>
                      ) : null}
                    </div>
                    <p className="lb-podium__name">{entry.name}</p>
                    {entry.tier === "gold" ? (
                      <span className="lb-podium__level lb-podium__level--gold">{entry.level}</span>
                    ) : (
                      <span className="lb-podium__level">{entry.level}</span>
                    )}
                    <div className={`lb-podium__xp lb-podium__xp--${entry.tier}`}>
                      {entry.tier !== "gold" ? <StarBadge /> : null}
                      <span>{entry.xp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lb-user-highlight">
              <span className="lb-user-highlight__rank">42</span>
              <span className="lb-user-highlight__avatar">
                <img src={currentUserAvatar} alt="Anda" />
              </span>
              <div className="lb-user-highlight__info">
                <div className="lb-user-highlight__name-row">
                  <p className="lb-user-highlight__name">Anda (Virgi)</p>
                  <span className="lb-user-highlight__level">Lvl 12</span>
                </div>
                <p className="lb-user-highlight__hint">Keep pushing! 850 XP to next rank.</p>
              </div>
              <div className="lb-user-highlight__xp-block">
                <p className="lb-user-highlight__xp">2,450 XP</p>
                <span className="lb-user-highlight__trend">
                  <TrendIcon />
                  <span>3</span>
                </span>
              </div>
            </div>

            <div className="lb-list">
              <div className="lb-list__header">
                <span className="lb-list__col-rank">RANK</span>
                <span className="lb-list__col-student">STUDENT</span>
                <span className="lb-list__col-xp">TOTAL XP</span>
              </div>

              <div className="lb-list__body">
                {students.map((student) => (
                  <div className="lb-list__row" key={student.rank}>
                    <span className="lb-list__col-rank">{student.rank}</span>
                    <span className="lb-list__col-student lb-list__student">
                      <span className="lb-list__avatar">
                        <img src={student.avatar} alt={student.name} />
                      </span>
                      <span>
                        <p className="lb-list__name">{student.name}</p>
                        <p className="lb-list__level">{student.level}</p>
                      </span>
                    </span>
                    <span className="lb-list__col-xp">{student.xp}</span>
                  </div>
                ))}
              </div>
            </div>

            <button type="button" className="lb-more-btn">
              Tampilkan Lebih Banyak
              <ChevronDownIcon />
            </button>
          </div>
        </main>

        <div className="lb-footer-wrap">
          <AppFooter />
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
