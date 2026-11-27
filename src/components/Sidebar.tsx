
type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        id="side-bar"
        className={`side-bar header-two ${isOpen ? 'show' : ''}`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="close-icon-menu"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <i className="far fa-times" />
        </button>

        {/* Desktop Sidebar */}
        <div className="rts-sidebar-menu-desktop">

          <a className="logo-1" href="/" onClick={onClose}>
            <img
              className="logo"
              src="/assets/images/logo/01.svg"
              alt="Invena Logo"
            />
          </a>

          <div className="body d-none d-xl-block">

            <p className="disc">
              We must explain to you how all seds this mistakens idea
              denouncing pleasures and praising account.
              All seds this mistakens idea denouncing pleasures.
            </p>

            <div className="get-in-touch">

              <div className="h6 title">Get In Touch</div>

              <div className="wrapper">

                <div className="single">
                  <i className="fas fa-phone-alt" />
                  <a href="tel:+8801234566789">
                    +8801234566789
                  </a>
                </div>

                <div className="single">
                  <i className="fas fa-envelope" />
                  <a href="mailto:example@gmail.com">
                    example@gmail.com
                  </a>
                </div>

                <div className="single">
                  <i className="fas fa-globe" />
                  <a href="https://www.webexample.com">
                    www.webexample.com
                  </a>
                </div>

                <div className="single">
                  <i className="fas fa-map-marker-alt" />
                  <a href="#">
                    13/A, New Pro State, NYC
                  </a>
                </div>

              </div>

              {/* Desktop Social Links */}
              <div className="social-wrapper-two menu">

                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>

                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>

                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>

                <a href="#" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp" />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu d-block d-xl-none">

          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu">

              <li className="main-nav mega-menu project-a-after">
                <a className="main" href="#home" onClick={onClose}>
                  Home
                </a>
              </li>

              <li className="main-nav mega-menu">
                <a className="main" href="#about" onClick={onClose}>
                  About
                </a>
              </li>

              <li className="main-nav mega-menu">
                <a className="main" href="#service" onClick={onClose}>
                  Service
                </a>
              </li>

              <li className="main-nav mega-menu">
                <a className="main" href="#project" onClick={onClose}>
                  Project
                </a>
              </li>

              <li className="main-nav project-a-after">
                <a className="main" href="#blog" onClick={onClose}>
                  Blog
                </a>
              </li>

              <li className="main-nav">
                <a className="main" href="#contact" onClick={onClose}>
                  Contact
                </a>
              </li>

            </ul>
          </nav>

          {/* Mobile Social Links */}
          <div className="social-wrapper-one">
            <ul>

              <li>
                <a href="#" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </li>

              <li>
                <a href="#" aria-label="Twitter">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>

              <li>
                <a href="#" aria-label="YouTube">
                  <i className="fa-brands fa-youtube" />
                </a>
              </li>

              <li>
                <a href="#" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </>
  )
}
