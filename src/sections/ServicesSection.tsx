
import React from 'react';

const services = [
    { icon: '01.svg', title: 'Business Planning' },
    { icon: '02.svg', title: 'Process Development' },
    { icon: '03.svg', title: 'Strategy & Planning' },
    { icon: '01.svg', title: 'Business Goal' }
];

const ServicesSection: React.FC = () => {
    return (
        <div className="rts-service-area pt--40 pb--60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-style-two center">
                            <span className="bg-content">Services</span>
                            <span className="pre">Our Service</span>
                            <h2 className="title rts-text-anime-style-1">
                                High Quality Services
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-2 mt--30">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="service-bg-style-one-wrapper">
                            <div className="service-style-swiper-wrapper-two">
                                <div className="swiper mySwiper-service-1">
                                    <div className="swiper-wrapper">
                                        {services.map((service) => (
                                            <div className="swiper-slide" key={service.title}>
                                                <div className="single-service-signle-wrapper">
                                                    <div className="icons">
                                                        <img
                                                            src={`/assets/images/service/icons/${service.icon}`}
                                                            alt="Service"
                                                        />
                                                    </div>

                                                    <div className="information">
                                                        <h5 className="title">{service.title}</h5>
                                                        <p className="disc">
                                                            Sagitis himos pulvinar morb socis laoreet
                                                            posuere enim non auctor etiam pretium libero.
                                                        </p>

                                                        <a href="/service-details" className="arrow-right">
                                                            <i className="fa-sharp fa-solid fa-arrow-right"></i>
                                                            <span>Read More</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
