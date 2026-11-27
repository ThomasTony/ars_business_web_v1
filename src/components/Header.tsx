
import { navigationLinks } from '../data/navigation'

type HeaderProps = {
  onSearch?: () => void
  onMenuToggle?: () => void
}

export default function Header({
  onSearch,
  onMenuToggle,
}: HeaderProps) {
  return (
    <div className="header-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-main-one-wrapper">

              {/* Logo */}
              <div className="thumbnail">
                <a href="/">
                  <img
                    src="/assets/images/logo/01.svg"
                    alt="Invena Logo"
                  />
                </a>
              </div>

              <div className="main-header">

                {/* Navigation */}
                <div className="nav-area">
                  <ul>
                    {navigationLinks.map((link, index) => (
                      <li
                        key={link.label}
                        className={`main-nav ${
                          index === 0 || index === 4
                            ? 'project-a-after'
                            : ''
                        }`}
                      >
                        <a href={link.href}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Header Actions */}
                <div className="button-area">

                  <button
                    type="button"
                    className="search"
                    aria-label="Search"
                    onClick={onSearch}
                  >
                    <i className="far fa-search" />
                  </button>

                  <a
                    href="/contact"
                    className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn"
                  >
                    Get Quote
                  </a>

                  <button
                    type="button"
                    id="menu-btn"
                    className="menu-btn menu ml--20 ml_sm--5"
                    aria-label="Open menu"
                    onClick={onMenuToggle}
                  >
                    <img
                      className="menu-light"
                      src="/assets/images/icons/01.svg"
                      alt=""
                    />
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
