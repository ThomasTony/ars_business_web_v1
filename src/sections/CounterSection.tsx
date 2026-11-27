
import React from 'react';

const counters = [
    { icon: '01.svg', count: '199', label: 'Successful Projects' },
    { icon: '02.svg', count: '300', label: 'Media Activities' },
    { icon: '03.svg', count: '699', label: 'Skilled Experts' },
    { icon: '04.svg', count: '120', label: 'Happy Clients' }
];

const CounterSection: React.FC = () => {
    return (
        <div className="rts-counter-up-area rts-section-gap counter-bg">
            <div className="container">
                <div className="row g-5">
                    {counters.map((counter, index) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={counter.label}>
                            <div className={`single-counter ${index > 0 ? 'pl--10' : ''}`}>
                                <div className="icon">
                                    <img
                                        src={`/assets/images/counterup/icon/${counter.icon}`}
                                        alt="Business counter"
                                    />
                                </div>

                                <div className="counter-details">
                                    <h2 className="counter title">
                                        <span className="odometer" data-count={counter.count}>00</span>+
                                    </h2>
                                    <p className="disc">{counter.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
