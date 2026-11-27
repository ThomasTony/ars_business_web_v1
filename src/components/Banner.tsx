
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import { bannerSlides } from '../data/banner'

export default function Banner() {
  return (
    <div className="banner-swiper-two" id="home">
      <Swiper
        modules={[Navigation, Autoplay]}
        className="mySwiper-banner-two"
        slidesPerView={1}
        loop
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`rts-banner-area-two ${slide.className} rts-section-gap bg_image`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="banner-inner-two-content">

                      <p className="pre-title">
                        <span>Welcome!</span> {slide.subtitle}
                      </p>

                      <h1 className="title">
                        {slide.title}
                        <br />
                        {slide.secondTitle}
                      </h1>

                      <p className="disc">
                        {slide.description}
                      </p>

                      <a
                        href={slide.buttonLink}
                        className="rts-btn btn-primary btn-white"
                      >
                        {slide.buttonText}
                      </a>

                    </div>
                  </div>
                </div>
              </div>

              {/* Banner Shapes */}
              <div className="shape-area-start">
                {[1, 2, 3, 4].map((shape) => (
                  <div
                    key={shape}
                    className={`shape shape-${[
                      'one',
                      'two',
                      'three',
                      'four',
                    ][shape - 1]}`}
                  >
                    <img
                      src={`/assets/images/banner/shape/0${shape}.webp`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-next">
          <i className="fa-light fa-chevron-right" />
        </div>

        <div className="swiper-button-prev">
          <i className="fa-light fa-chevron-left" />
        </div>
      </Swiper>
    </div>
  )
}
