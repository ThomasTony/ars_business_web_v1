
import { aboutData } from '../data/about'

import aboutImage from '../assets/images/about/04.webp'
import smallImage from '../assets/images/about/05.webp'
import signature from '../assets/images/about/sign.svg'
import shapeOne from '../assets/images/about/shape/01.svg'
import shapeTwo from '../assets/images/about/shape/02.svg'

export default function About() {
  return (
    <section className="rts-about-area-two rts-section-gap" id="about">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image Area */}
          <div className="col-lg-6">
            <div className="left-thumbnail-about-area-two">

              <img src={aboutImage} alt="About us" />

              <div className="small-image">
                <img src={smallImage} alt="Our team" />
              </div>

              <div className="counter-about-area">
                <h2 className="counter title">
                  <span className="odometer" data-count={aboutData.experience}>
                    00
                  </span>
                  +
                </h2>

                <span>{aboutData.experienceLabel}</span>
              </div>

            </div>
          </div>

          {/* Right Content Area */}
          <div className="col-lg-6 mt_sm--80 mt_md--80">
            <div className="about-inner-content-two">

              {/* Section Title */}
              <div className="title-style-two left">
                <span className="bg-content">
                  {aboutData.bgTitle}
                </span>

                <span className="pre">
                  {aboutData.subtitle}
                </span>

                <h2 className="title rts-text-anime-style-1">
                  {aboutData.title}
                  <br />
                  {aboutData.secondTitle}
                </h2>
              </div>

              <div className="about-between-wrapper">

                <p className="disc">
                  {aboutData.description}
                </p>

                {/* Features */}
                <div className="check-wrapper-area">
                  {aboutData.features.map((feature) => (
                    <div className="single-check" key={feature}>
                      <i className="fa-solid fa-circle-check" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Call and Signature */}
              <div className="call-and-sign-area two">

                <div className="call-area">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-phone-volume" />
                  </div>

                  <div className="information">
                    <span>{aboutData.phoneLabel}</span>

                    <a href={`tel:${aboutData.phone.replace(/[\s.]/g, '')}`}>
                      <h6 className="title">
                        {aboutData.phone}
                      </h6>
                    </a>
                  </div>
                </div>

                <div className="sign-area">
                  <img src={signature} alt="Signature" />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Background Shapes */}
      <div className="shape-area">
        <img src={shapeOne} alt="" className="one" />
        <img src={shapeTwo} alt="" className="two" />
      </div>
    </section>
  )
}
