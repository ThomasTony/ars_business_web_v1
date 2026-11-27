
import { topLinks, socialLinks } from '../data/navigation'

export default function Topbar() {
  return (
    <div className="header-top-area-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-top-one-wrapper">

              {/* Left Side */}
              <div className="left">
                <div className="mail">
                  <a href="mailto:support@invena.com">
                    <i className="fal fa-envelope" />
                    support@invena.com
                  </a>
                </div>

                <div className="working-time">
                  <p>
                    <i className="fal fa-clock" />
                    Working: 8.00am - 5.00pm
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="right">
                <ul className="top-nav">
                  {topLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <ul className="social-wrapper-one">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={social.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
