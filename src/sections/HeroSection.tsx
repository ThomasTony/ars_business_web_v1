
import React from 'react';

const slides = [
    {
        title: <>Innovative Solutions <br /> Tailored for Your Success</>,
        className: ''
    },
    {
        title: <>Impressive Solutions <br /> Crafted for Your Goal</>,
        className: 'two'
    },
    {
        title: <>Best Solutions <br /> Intro for Your Business</>,
        className: 'three'
    }
];

const HeroSection: React.FC = () => {
    return (
        <div className="banner-swiper-two">
            <div className="swiper mySwiper-banner-two">
                <div className="swiper-wrapper">
                    {slides.map((slide, index) => (
                        <div className="swiper-slide" key={index}>
                            <div className={`rts-banner-area-two ${slide.className} rts-section-gap bg_image`}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="banner-inner-two-content">
                                                <p className="pre-title">
                                                    <span>Welcome!</span> Start Growing Your Business Today
                                                </p>

                                                <h1 className="title">{slide.title}</h1>

                                                <p className="disc">
                                                    Porttitor ornare fermentum aliquam pharetra facilisis
                                                    gravida risus suscipit Dui feugiat fusce conubia
                                                    ridiculus tristique parturient
                                                </p>

                                                <a href="/contact" className="rts-btn btn-primary btn-white">
                                                    Get Consultant
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="shape-area-start">
                                    {[1, 2, 3, 4].map((number) => (
                                        <div className={`shape shape-${['one', 'two', 'three', 'four'][number - 1]}`} key={number}>
                                            <img
                                                src={`/assets/images/banner/shape/0${number}.webp`}
                                                alt="Banner shape"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="swiper-button-next">
                    <i className="fa-light fa-chevron-right"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="fa-light fa-chevron-left"></i>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
