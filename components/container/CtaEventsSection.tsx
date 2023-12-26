import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
const CtaEventsSection = () => {
  return (
    <>
      <section
        className="section cta"
        aria-label="workshop"
        style={{ backgroundImage: "url('/cta-bg.png')" }}
      >
        <div className="container">
          <figure className="cta-banner">
            <Image
              src="/cta-banner.jpg"
              width="580"
              height="380"
              loading="lazy"
              alt="cta banner"
              className="img-cover"
            />
          </figure>

          <div className="cta-content">
            <p className="section-subtitle">Free Workshop</p>

            <h2 className="h2 section-title">Join Our Free Workshops</h2>

            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet,
              consect adipi scing elit, sed do eiusmod tempor incididunt ut sed
              do eiusmod tempor incididunt ut labore et dolore aliqua.
            </p>

            <a href="#" className="btn btn-secondary">
              <span className="span">Upcomming Workshop</span>

              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      <section className="section event" id="event" aria-label="event">
        <div className="container">
          <p className="section-subtitle">Upcomming Event</p>

          <h2 className="h2 section-title">Let’s Join Our Community</h2>

          <ul className="grid-list">
            <li>
              <div className="event-card">
                <figure className="card-banner">
                  <Image
                    src="/event-1.jpg"
                    width="370"
                    height="250"
                    loading="lazy"
                    alt="Innovation & Technological Entrepreneurship Team"
                    className="img-cover"
                  />
                </figure>

                <time className="badge" dateTime="2022-12-04">
                  04 Dec 2022
                </time>

                <div className="card-content">
                  <address className="card-address">
                    <IoLocationOutline />

                    <span className="span">Alpaca Way Anaheim, CA 92805</span>
                  </address>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Innovation & Technological Entrepreneurship Team
                    </a>
                  </h3>

                  <a href="#" className="btn-link">
                    <span className="span">Get Ticket</span>

                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="event-card">
                <figure className="card-banner">
                  <Image
                    src="/event-2.jpg"
                    width="370"
                    height="250"
                    loading="lazy"
                    alt="Virtual Spring Part-time Jobs Fair for Student"
                    className="img-cover"
                  />
                </figure>

                <time className="badge" dateTime="2022-10-30">
                  30th Oct 2022
                </time>

                <div className="card-content">
                  <address className="card-address">
                    <IoLocationOutline />

                    <span className="span">
                      Ritter Avenue Detroit, MI 48226
                    </span>
                  </address>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Virtual Spring Part-time Jobs Fair for Student
                    </a>
                  </h3>

                  <a href="#" className="btn-link">
                    <span className="span">Get Ticket</span>

                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="event-card">
                <figure className="card-banner">
                  <Image
                    src="/event-3.jpg"
                    width="370"
                    height="250"
                    loading="lazy"
                    alt="Explorations of Regional Chief Executive Network"
                    className="img-cover"
                  />
                </figure>

                <time className="badge" dateTime="2022-09-18">
                  18th Sep 2022
                </time>

                <div className="card-content">
                  <address className="card-address">
                    <IoLocationOutline />

                    <span className="span">Stout Street York, PA 17401</span>
                  </address>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Explorations of Regional Chief Executive Network
                    </a>
                  </h3>

                  <a href="#" className="btn-link">
                    <span className="span">Get Ticket</span>

                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CtaEventsSection;
