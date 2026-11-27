
import React from 'react';

const ClientsSection: React.FC = () => {
    const clients = [1, 2, 3, 4, 5, 6];

    return (
        <div className="rts-trusted-client rts-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title-area-client-client text-center">
                            <p className="client-title">Our Trusted Clients</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="client-wrapper-one">
                        {clients.map((client) => (
                            <a href="#" key={client} aria-label={`Client ${client}`}>
                                <img
                                    src={`/assets/images/client/${client}.webp`}
                                    alt={`Client ${client}`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsSection;
