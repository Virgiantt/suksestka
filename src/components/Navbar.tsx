import { useState } from "react";
import { Link } from "react-router-dom";

const logoImageSrc =
  "https://cdn.builder.io/api/v1/image/assets%2Fb52cb71ec6374715a04a0689eb72fbdc%2F850d192fca624eef823e8eafe0d7c4ec?format=webp&width=800&height=1200";

const routedLinks: Record<string, string> = {
  Home: "/",
  Fitur: "/fitur",
  Tryout: "/tryout",
  "Tutor AI": "/tutor-ai",
  Jasa: "/jasa",
};

const navLinks = ["Home", "Fitur", "Tryout", "Tutor AI", "Jasa"];

function Navbar({ active }: { active: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="logo">
          <img src={logoImageSrc} className="logo__icon" alt="" />
          <span className="logo__sukses">Sukses</span>
          <span className="logo__tka">TKA</span>
        </Link>
        <button
          type="button"
          className="navbar__menu-toggle"
          aria-label={isMenuOpen ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`navbar__links${isMenuOpen ? " navbar__links--open" : ""}`}>
          {navLinks.map((link) => {
            const className = `navbar__link${
              active === link ? " navbar__link--active" : ""
            }`;
            const route = routedLinks[link];
            return route ? (
              <Link
                key={link}
                to={route}
                className={className}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            ) : (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className={className}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            );
          })}
        </nav>
        <div className="navbar__actions">
          <Link to="/login" className="btn btn--text">
            Login
          </Link>
          <Link to="/daftar" className="btn btn--primary">
            Mulai Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
