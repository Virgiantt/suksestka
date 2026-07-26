import { Link } from "react-router-dom";

const logoImageSrc =
  "https://cdn.builder.io/api/v1/image/assets%2Fb52cb71ec6374715a04a0689eb72fbdc%2Fc9a1df78433f44d78aa9ca3d87d9bc72?format=webp&width=800&height=1200";

const routedLinks: Record<string, string> = {
  Home: "/",
  Fitur: "/fitur",
  Tryout: "/tryout",
  "Tutor AI": "/tutor-ai",
  Jasa: "/jasa",
};

const navLinks = ["Home", "Fitur", "Tryout", "Tutor AI", "Jasa"];

function Navbar({ active }: { active: string }) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="logo">
          <img src={logoImageSrc} className="logo__icon" alt="" />
          <span className="logo__sukses">Sukses</span>
          <span className="logo__tka">TKA</span>
        </Link>
        <nav className="navbar__links">
          {navLinks.map((link) => {
            const className = `navbar__link${
              active === link ? " navbar__link--active" : ""
            }`;
            const route = routedLinks[link];
            return route ? (
              <Link key={link} to={route} className={className}>
                {link}
              </Link>
            ) : (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className={className}
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
