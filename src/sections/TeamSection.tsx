
import React from 'react';

const team = [
    { image: '04.webp', name: 'Archer Graham', role: 'Founder' },
    { image: '05.webp', name: 'Amelia Clover', role: 'Co-Founder' },
    { image: '06.webp', name: 'Beckett Hayden', role: 'Deputy Manager' },
    { image: '07.webp', name: 'Julian Wyat', role: 'Finance Manager' },
    { image: '07.webp', name: 'Julian Wyat', role: 'Finance Manager' }
];

const TeamSection: React.FC = () => {
    return (
        <div className="rts-team-area rts-section-gapBottom pt--40">
            <div className="container">
                <div className="row">
                    <div className="title-style-two center">
                        <span className="bg-content">Members</span>
                        <span className="pre">Expert Members</span>
                        <h2 className="title rts-text-anime-style-1">
                            Professionals Team
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="swiper mySwiperh1_team pt--50 pb--80" dir="ltr">
                            <div className="swiper-wrapper">
                                {team.map((member, index) => (
                                    <div className="swiper-slide" key={`${member.name}-${index}`}>
                                        <div className="team-single-one-start">
                                            <div className="team-image-area">
                                                <a href="/team-details">
                                                    <img
                                                        src={`/assets/images/team/${member.image}`}
                                                        alt={member.name}
                                                    />
                                                    <div className="team-social">
                                                        <div className="main">
                                                            <i className="fal fa-plus"></i>
                                                        </div>
                                                        <div className="team-social-one">
                                                            <i className="fab fa-youtube"></i>
                                                            <i className="fab fa-twitter"></i>
                                                            <i className="fab fa-instagram"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="single-details" dir="rtl">
                                                <a href="/team-details">
                                                    <h5 className="title">{member.name}</h5>
                                                </a>
                                                <p>{member.role}</p>
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
    );
};

export default TeamSection;
