
import React from 'react';

const testimonials = [
    {
        image: '01.webp',
        name: 'William Henry',
        position: 'Designer at Vertex Agency'
    },
    {
        image: '01.webp',
        name: 'William Henry',
        position: 'Designer at Vertex Agency'
    },
    {
        image: '01.webp',
        name: 'William Henry',
        position: 'Designer at Vertex Agency'
    }
];

const TestimonialsSection: React.FC = () => {
    return (
        <div className="rts-client-review-area rts-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area-between-wrapper" dir="ltr">
                            <div className="title-style-two mb--40 left">
                                <span className="bg-content">Review</span>
                                <span className="pre">Our Testimonial</span>
                                <h2 className="title">Our Client Reviews</h2>
                            </div>

                            <div className="pagination-wrapper">
                                <div className="swiper-pagination-fraction"></div>
                                <div className="swiper-button-next">
                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                </div>
                                <div className="swiper-button-prev">
                                    <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonials-wrapper-swiper-demo-2">
                            <div className="swiper mySwiper-testimonials-dmeo-2" dir="ltr">
                                <div className="swiper-wrapper">
                                    {testimonials.map((item, index) => (
                                        <div className="swiper-slide" key={index}>
                                            <div className="testimonials-main-wrapper-two">
                                                <div className="left-thumbnail">
                                                    <img
                                                        src={`/assets/images/testimonials/${item.image}`}
                                                        alt="Testimonial"
                                                    />
                                                </div>

                                                <div className="right-content-testimonials">
                                                    <p className="disc">
                                                        I can't recommend The Gourmet Haven enough.
                                                        It's a place for special occasions, date nights,
                                                        or whenever you're in the mood for a culinary
                                                        adventure. The combination of exceptional service
                                                        and quality makes it outstanding.
                                                    </p>

                                                    <div className="name-desig">
                                                        <h6 className="title">{item.name}</h6>
                                                        <p>
                                                            Designer at <b>Vertex Agency</b>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
