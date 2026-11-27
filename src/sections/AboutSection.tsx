import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <div className="rts-about-area-two rts-section-gap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="left-thumbnail-about-area-two">
                            <img src="/assets/images/about/04.webp" alt="About" />
                            <div className="small-image">
                                <img src="/assets/images/about/05.webp" alt="About" />
                            </div>
                            <div className="counter-about-area">
                                <h2 className="counter title">
                                    <span className="odometer" data-count="25">00</span>+
                                </h2>
                                <span>Year of experience</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt_sm--80 mt_md--80">
                        <div className="about-inner-content-two">
                            <div className="title-style-two left">
                                <span className="bg-content">About Us</span>
                                <span className="pre">More About Us</span>
                                <h2 className="title rts-text-anime-style-1">
                                    Empowering You to Feel <br /> Your Best Every Day
                                </h2>
                            </div>

                            <div className="about-between-wrapper">
                                <p className="disc">
                                    Porttitor ornare fermentum aliquam pharetra
                                    ut facilisis gravida risus suscipit. dui feugiat
                                    fusce conubia ridiculus tristique parturient
                                    natoque vulputate risu.
                                </p>

                                <div className="check-wrapper-area">
                                    {[
                                        '24/7 Call Services Available',
                                        'Great Skilled Consultant',
                                        'Expert Team Members'
                                    ].map((item) => (
                                        <div className="single-check" key={item}>
                                            <i className="fa-solid fa-circle-check"></i>
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="call-and-sign-area two">
                                <div className="call-area">
                                    <div className="icon">
                                        <i className="fa-sharp fa-regular fa-phone-volume"></i>
                                    </div>
                                    <div className="information">
                                        <span>Call us anytime</span>
                                        <a href="tel:+256567785678">
                                            <h6 className="title">+256 56778.5678</h6>
                                        </a>
                                    </div>
                                </div>

                                <div className="sign-area">
                                    <img src="/assets/images/about/sign.svg" alt="Signature" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape-area">
                <img src="/assets/images/about/shape/01.svg" alt="" className="one" />
                <img src="/assets/images/about/shape/02.svg" alt="" className="two" />
            </div>
        </div>
    );
};

export default AboutSection;