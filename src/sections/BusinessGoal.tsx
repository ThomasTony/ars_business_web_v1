
import React from 'react';

const BusinessGoal: React.FC = () => {
    return (
        <div className="business-goal-area-2 rts-section-gap">
            <div className="container pt--30">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="consultancy-style-one">
                            <div className="title-style-two mb--40 left">
                                <span className="bg-content">Business Goal</span>
                                <span className="pre">JUST A CONSULTANCY</span>
                                <h2 className="title rts-text-anime-style-1">
                                    We know how to manage <br />
                                    business globally
                                </h2>
                            </div>

                            {[
                                {
                                    icon: '01.svg',
                                    title: 'Best Business Consulting'
                                },
                                {
                                    icon: '02.svg',
                                    title: '24/7 Customer Support'
                                }
                            ].map((item) => (
                                <div className="signle-consultancy mb--30" key={item.title}>
                                    <div className="icon">
                                        <img src={`/assets/images/about/icons/${item.icon}`} alt="" />
                                    </div>
                                    <div className="information">
                                        <h4 className="title">{item.title}</h4>
                                        <p className="disc">
                                            Fusce condimentum mattis placerat odio donec lacus porta
                                            torquent, mauris gravida rutrum.
                                        </p>
                                    </div>
                                </div>
                            ))}

                            <div
                                className="button-wrapper mt--40"
                                data-animation="fadeInUp"
                                data-delay="0.4"
                                data-duration="1.2"
                            >
                                <a href="/contact" className="rts-btn btn-primary">
                                    Contact Us
                                </a>

                                <div className="vedio-icone">
                                    <a
                                        className="video-play-button play-video popup-video"
                                        href="https://www.youtube.com/watch?v=vZE0j_WCRvI"
                                        aria-label="Watch promotional video"
                                    >
                                        <span></span>
                                    </a>
                                    <div className="video-overlay">
                                        <a href="#section1" className="video-overlay-close">×</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="thumbnail-business-area-right-two">
                            <div className="large-thumbnail">
                                <img src="/assets/images/business-goal/02.webp" alt="Business" />
                            </div>
                            <div className="small-thumbnail images-r">
                                <img src="/assets/images/business-goal/01.webp" alt="Business" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessGoal;
