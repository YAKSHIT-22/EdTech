import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <Image
            src="/about-banner.jpg"
            width="450"
            height="590"
            loading="lazy"
            alt="about banner"
            className="w-100 about-img"
          />

          <Image
            src="/about-abs-1.jpg"
            width="188"
            height="242"
            loading="lazy"
            alt="baner"
            aria-hidden="true"
            className="abs-img abs-img-1"
          />

          <Image
            src="/about-abs-2.jpg"
            width="150"
            height="200"
            loading="lazy"
            alt="baner"
            aria-hidden="true"
            className="abs-img abs-img-2"
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">Who We Are</p>

          <h2 className="h2 section-title">We Offer The Best Carrier</h2>

          <ul className="about-list">
            <li className="about-item">
              <div className="item-icon item-icon-1">
                <Image
                  src="/about-icon-1.png"
                  width="30"
                  height="30"
                  loading="lazy"
                  alt="baner"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="h3 item-title">Industry Expert Instructor</h3>

                <p className="item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmoded tempor incididunt dolore magna aliqua.
                </p>
              </div>
            </li>

            <li className="about-item">
              <div className="item-icon item-icon-2">
                <Image
                  src="/about-icon-2.png"
                  alt="baner"
                  width="30"
                  height="30"
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="h3 item-title">Up-to-Date Course Content</h3>

                <p className="item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmoded tempor incididunt dolore magna aliqua.
                </p>
              </div>
            </li>

            <li className="about-item">
              <div className="item-icon item-icon-3">
                <Image
                  src="/about-icon-3.png"
                  alt="baner"
                  width="30"
                  height="30"
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="h3 item-title">Biggest Student Community</h3>

                <p className="item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmoded tempor incididunt dolore magna aliqua.
                </p>
              </div>
            </li>
          </ul>

          <a href="#" className="btn btn-primary">
            <span className="span">Know About Us</span>

            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
