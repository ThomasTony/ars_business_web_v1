
import React from 'react';

const blogs = [
    {
        image: '01.webp',
        title: 'Building a Brand That from Market Leaders'
    },
    {
        image: '02.webp',
        title: 'Transforming Your Best Of Approach to Business'
    },
    {
        image: '03.webp',
        title: 'The quick settle tips of the new ages exist'
    },
    {
        image: '01.webp',
        title: 'Building a Brand That from Market Leaders'
    },
    {
        image: '02.webp',
        title: 'Transforming Your Best Of Approach to Business'
    },
    {
        image: '03.webp',
        title: 'The quick settle tips of the new ages exist'
    }
];

const BlogSection: React.FC = () => {
    return (
        <div className="rts-blog-area rts-section-gapBottom pt--40 mb--310">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-style-two center">
                            <span className="bg-content">Blog</span>
                            <span className="pre">Blog & News</span>
                            <h2 className="title">Recent blog post</h2>
                        </div>
                    </div>
                </div>

                <div className="row g-5 mt--20">
                    <div className="col-lg-12">
                        <div className="blog-swiper-style-one">
                            <div className="swiper mySwiper-blog-one">
                                <div className="swiper-wrapper">
                                    {blogs.map((blog, index) => (
                                        <div className="swiper-slide" key={index}>
                                            <div className="single-blog-area-one">
                                                <p>
                                                    Business Solution / <span>by David Dolean</span>
                                                </p>

                                                <a href="/blog-details">
                                                    <h4 className="title">{blog.title}</h4>
                                                </a>

                                                <div className="bottom-details">
                                                    <a href="/blog-details" className="thumbnail">
                                                        <img
                                                            src={`/assets/images/blog/${blog.image}`}
                                                            alt={blog.title}
                                                        />
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
    );
};

export default BlogSection;
