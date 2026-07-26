const footerColumns = [
  {
    title: "Platform",
    links: [
      "Learning Materials",
      "Tryout Simulation",
      "AI Tutor",
      "Leaderboard",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Support",
    links: ["Help Center", "Community", "Contact Us"],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">SuksesTKA</p>
          <p className="footer__copy">
            © 2024 SuksesTKA. Empowering students for a brighter future
            through intelligent AI learning systems.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div className="footer__column" key={column.title}>
            <h4 className="footer__column-title">{column.title}</h4>
            <ul className="footer__list">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#footer">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
