const footerLogoSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/9061de07dac0f99f52fcc59e42e1bf7d27c953bf?width=54";

function TeacherFooter() {
  return (
    <footer className="app-footer">
      <div className="app-footer__brand">
        <img src={footerLogoSrc} alt="" className="app-footer__logo" />
        <p className="app-footer__name">
          <span className="app-footer__name-blue">Sukses</span>
          <span className="app-footer__name-green">TKA</span>
        </p>
        <span className="app-footer__divider">|</span>
        <p className="app-footer__copy">© 2026 . Education Management.</p>
      </div>
      <div className="app-footer__links">
        <a href="#footer">Privacy Policy</a>
        <a href="#footer">Terms of Service</a>
        <a href="#footer">Report</a>
      </div>
    </footer>
  );
}

export default TeacherFooter;
