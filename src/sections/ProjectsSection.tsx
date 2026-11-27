
import React from 'react';

const projects = [
    { image: '01.webp', title: 'Business Growth' },
    { image: '02.webp', title: 'Startup Solution' },
    { image: '01.webp', title: 'Marketing Growth' }
];

const ProjectsSection: React.FC = () => {
    return (
        <div className="rts-gallery-area rts-section-gap gallery-bg bg_image">
            <div className="container pt--40">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area-between-wrapper-gallery-project">
                            <div className="title-style-two mb--40 left">
                                <span className="bg-content">Projects</span>
                                <span className="pre">Popular Projects</span>
                                <h2 className="title rts-text-anime-style-1">
                                    Our Completed Projects
                                </h2>
                            </div>
                            <div className="swiper-paginations"></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="project-style-one-wrapper">
                            <div className="swiper mySwiper-project-1">
                                <div className="swiper-wrapper">
                                    {projects.map((project) => (
                                        <div className="swiper-slide" key={project.title}>
                                            <div className="project-style-one">
                                                <a href="/project-details" className="thumbnail">
                                                    <img
                                                        src={`/assets/images/project/${project.image}`}
                                                        alt={project.title}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="/project-details">
                                                        <h5 className="title">{project.title}</h5>
                                                    </a>
                                                    <span>Business Strategy</span>
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

export default ProjectsSection;
