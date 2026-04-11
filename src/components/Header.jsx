const navLinks = [
  ["home_section", "Home", true],
  ["about", "About"],
  ["services", "Services"],
  ["portfolio", "Portfolio"],
  ["experience", "Experience"],
  ["blog", "blog"],
  ["contact", "contact"],
];

const socialLinks = [
  ["sc_facebook", "ion-social-facebook"],
  ["sc_twitter", "ion-social-twitter"],
  ["sc_google", "ion-social-googleplus"],
  ["sc_youtube", "ion-social-youtube-outline"],
  ["sc_instagram", "ion-social-instagram-outline"],
];

function Header() {
  return (
    <header className="header_wrap fixed-top dark_skin hover_menu_style3 sidebar_menu side_menu_mobile transparent-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand page-scroll" href="#home_section">
            <img className="logo_light" src="assets/images/logo_white.png" alt="logo" />
            <img className="logo_dark" src="assets/images/logo_dark.png" alt="logo" />
            <img className="logo_default" src="assets/images/logo_dark.png" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="ion-android-menu" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <a className="navbar-brand page-scroll" href="#home_section">
              <img className="logo_light" src="assets/images/logo_white.png" alt="logo" />
              <img className="logo_dark" src="assets/images/logo_dark.png" alt="logo" />
              <img className="logo_default" src="assets/images/logo_dark.png" alt="logo" />
            </a>

            <ul className="navbar-nav">
              {navLinks.map(([id, label, active]) => (
                <li key={id}>
                  <a className={`nav-link page-scroll${active ? " active" : ""}`} href={`#${id}`}>
                    {label}
                  </a>
                </li>
              ))}
              <li className="dropdown">
                <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu dropdown-reverse">
                  <ul>
                    <li><a className="dropdown-item nav-link nav_item" href="portfolio-detail-dark.html">portfolio detail dark</a></li>
                    <li><a className="dropdown-item nav-link nav_item" href="portfolio-detail-sidemenu-dark.html">portfolio detail sidemenu dark</a></li>
                    <li><a className="dropdown-item nav-link nav_item" href="portfolio-detail-sidemenu-white.html">portfolio detail sidemenu white</a></li>
                    <li><a className="dropdown-item nav-link nav_item" href="portfolio-detail-white.html">portfolio detail white</a></li>
                    <li><a className="dropdown-item nav-link nav_item" href="blog-detail-dark.html">blog detail dark</a></li>
                    <li><a className="dropdown-item nav-link nav_item" href="blog-detail-sidemenu-dark.html">blog detail sidemenu dark</a></li>
                    <li><a className="dropdown-item nav-link nav_item" href="blog-detail-sidemenu-white.html">blog detail sidemenu white</a></li>
                    <li><a className="dropdown-item nav-link nav_item" href="blog-detail-white.html">blog detail white</a></li>
                  </ul>
                </div>
              </li>
            </ul>

            <div className="bottom_content">
              <ul className="contact_info list_none">
                <li><span className="ti-mobile" /><p>+ 91 8816 9548 63</p></li>
                <li><span className="ti-email" /><a href="mailto:info@sitename.com">anassiddiqui544@gmail.com</a></li>
                <li><span className="ti-location-pin" /><address>#85 Gandhi Nagar Colony, Yamunanagar</address></li>
              </ul>
              <ul className="list_none social_icons">
                {socialLinks.map(([cls, icon]) => (
                  <li key={cls}><a href="#" className={cls}><i className={icon} /></a></li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
