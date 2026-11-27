
import React from 'react';

const AppointmentSection: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (!form.reportValidity()) return;

        alert('Thank you! Your request has been submitted.');
        form.reset();
    };

    return (
        <div className="appoinment-area-start rts-section-gapBottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="appoinment-wrapper-one-start">
                            <div className="title-style-two mb--40 left">
                                <span className="bg-content">Hello</span>
                                <span className="pre">Make An Appointment</span>
                                <h2 className="title">Request a free quote</h2>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="single-input-wrapper">
                                    <div className="single-input">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            name="name"
                                            required
                                        />
                                    </div>

                                    <div className="single-input">
                                        <input
                                            type="tel"
                                            placeholder="Number"
                                            name="phone"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="single-input">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        name="email"
                                        required
                                    />
                                </div>

                                <div className="single-input mb--30">
                                    <textarea
                                        placeholder="Type Your Message"
                                        name="message"
                                        required
                                    />
                                </div>

                                <button type="submit" className="rts-btn btn-primary">
                                    Submit Message
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="appoinment-thumbnail">
                            <img
                                src="/assets/images/appoinment/01.webp"
                                alt="Appointment"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentSection;
