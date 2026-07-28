const footerLogoSrc =
  "https://api.builder.io/api/v1/image/assets/TEMP/9061de07dac0f99f52fcc59e42e1bf7d27c953bf?width=54";

function AdminFooter() {
  return (
    <footer className="admin-footer">
      <div className="admin-footer__brand">
        <img src={footerLogoSrc} alt="" className="admin-footer__logo" />
        <p className="admin-footer__name">
          <span className="admin-footer__name-blue">Sukses</span>
          <span className="admin-footer__name-green">TKA</span>
        </p>
        <span className="admin-footer__divider">|</span>
        <p className="admin-footer__copy">© 2026 . Education Management.</p>
      </div>
      <div className="admin-footer__links">
        <a href="#top">Privacy Policy</a>
        <a href="#top">Terms of Service</a>
        <a href="#top">Report</a>
      </div>
    </footer>
  );
}

export default AdminFooter;
