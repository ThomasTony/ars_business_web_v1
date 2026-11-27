
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email.trim()) return

    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <footer className="rts-footer-area footer-two mt-dec-footer-map bg-footer-two bg_image">

      {/* Map and Contact */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="map-area-main-wrapper">
              <div className="row">

                <div className="col-lg-7">
                  <div className="map-area-main-footer-two">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.07522277672!2d90.423296!3d23.7826795!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1738651440174!5m2!1sen!2sbd"
                      width="625"
                      height="625"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Our location"
                    />
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="map-information-2-footer">

                    <h5 className="title-main">Contact Us</h5>

                    <img
                      src="/assets/images/footer/02.svg"
                      alt=""
                      className="line"
                    />

                    <div className="contact-information-main-wrapper">

                      <div className="signle-contact-information">
                        <div className="icon">
                          <i className="fa-solid fa-phone" />
                        </div>
                        <div className="information-wrapper">
                          <span>Call Us 24/7</span>
                          <a href="tel:+25621452156">
                            <h6 className="title">(+256) 2145.2156</h6>
                          </a>
                        </div>
                      </div>

                      <div className="signle-contact-information">
                        <div className="icon">
                          <i className="fa-regular fa-envelope" />
                        </div>
                        <div className="information-wrapper">
                          <span>Work with us</span>
                          <a href="mailto:info@invena.com">
                            <h6 className="title">info@invena.com</h6>
                          </a>
                        </div>
                      </div>

                      <div className="signle-contact-information">
                        <div className="icon">
                          <i className="fa-sharp fa-solid fa-location-dot" />
                        </div>
                        <div className="information-wrapper">
                          <span>Our Location</span>
                          <a href="#">
                            <h6 className="title">
                              125 Town United State
                            </h6>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="container bg-shape-f1">
        <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">

          {/* Opening Hours */}
          <div className="col-xl-4 col-md-6 col-sm-12 col-12">
            <div className="footer-one-single-wized mid-bg">

              <div className="wized-title">
                <h5 className="title">Opening Hours</h5>
                <img src="/assets/images/footer/01.svg" alt="" />
              </div>

              <div className="opening-time-inner">

                <div className="single-opening">
                  <p className="day">Week Days</p>
                  <p className="time">09.00 - 24:00</p>
                </div>

                <div className="single-opening">
                  <p className="day">Saturday</p>
                  <p className="time">08:00 - 03.00</p>
                </div>

                <div className="single-opening mb--30 mb_sm--10">
                  <p className="day">Sunday</p>
                  <p className="time">Day Off</p>
                </div>

                <a href="/contact" className="rts-btn btn-primary btn-white">
                  Contact Us
                </a>

              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-xl-4 col-md-6 col-sm-12 col-12 pl--50 pl_sm--15">
            <div className="footer-one-single-wized">

              <div className="wized-title">
                <h5 className="title">Quick Links</h5>
                <img src="/assets/images/footer/01.svg" alt="" />
              </div>

              <div className="quick-link-inner">

                <ul className="links">
                  <li><a href="#"><i className="far fa-arrow-right" /> Forum Support</a></li>
                  <li><a href="#"><i className="far fa-arrow-right" /> Help & FAQ</a></li>
                  <li><a href="/contact"><i className="far fa-arrow-right" /> Contact Us</a></li>
                  <li><a href="#"><i className="far fa-arrow-right" /> Pricing & Plans</a></li>
                  <li><a href="#"><i className="far fa-arrow-right" /> Cookie Policy</a></li>
                </ul>

                <ul className="links margin-left-70">
                  <li><a href="#about"><i className="far fa-arrow-right" /> About Us</a></li>
                  <li><a href="#"><i className="far fa-arrow-right" /> My Account</a></li>
                  <li><a href="#"><i className="far fa-arrow-right" /> Our Company</a></li>
                  <li><a href="#service"><i className="far fa-arrow-right" /> Service</a></li>
                </ul>

              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-xl-4 col-md-6 col-sm-12 col-12">
            <div className="footer-one-single-wized margin-left-65">

              <div className="wized-title">
                <h5 className="title">Get Updates</h5>
                <img src="/assets/images/footer/01.svg" alt="" />
              </div>

              <div className="body">
                <div className="update-wrapper">

                  <p className="disc">
                    Sign up for our latest news & articles.
                    We won’t give you spam mails.
                  </p>

                  <form
                    className="email-footer-area"
                    onSubmit={handleSubscribe}
                  >
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <button type="submit" aria-label="Subscribe">
                      <i className="fas fa-location-arrow" />
                    </button>
                  </form>

                  <div className="note-area">
                    <p>
                      <span>Note:</span> We do not publish your email
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="rts-copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p>
                  Invena - Copyright {new Date().getFullYear()}.
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
