import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url('/footer-bg.png')" }}
    >
      <div className="footer-top section">
        <div className="container grid-list">
          <div className="footer-brand">
            <Link href="#" className="logo">
              <Image
                src="/logo-light.svg"
                width="162"
                height="50"
                alt="EduWeb logo"
              />
            </Link>

            <p className="footer-brand-text">
              Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor
              incidid unt labore dolore.
            </p>

            <div className="wrapper">
              <span className="span">Add:</span>

              <address className="address">70-80 Upper St Norwich NR2</address>
            </div>

            <div className="wrapper">
              <span className="span">Call:</span>

              <Link href="tel:+011234567890" className="footer-link">
                +01 123 4567 890
              </Link>
            </div>

            <div className="wrapper">
              <span className="span">Email:</span>

              <Link href="mailto:info@eduweb.com" className="footer-link">
                info@eduweb.com
              </Link>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Online Platform</p>
            </li>

            <li>
              <Link href="#" className="footer-link">
                About
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Courses
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Instructor
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Events
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Instructor Profile
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Purchase Guide
              </Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Links</p>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Contact Us
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                News & Articles
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                FAQ&apos;s
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Sign In/Registration
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Coming Soon
              </Link>
            </li>
          </ul>

          <div className="footer-list">
            <p className="footer-list-title">Contacts</p>

            <p className="footer-list-text">
              Enter your email address to register to our newsletter
              subscription
            </p>

            <form action="" className="newsletter-form">
              <input
                type="email"
                name="email_address"
                placeholder="Your email"
                required
                className="input-field"
              />

              <button type="submit" className="btn has-before">
                <span className="span">Subscribe</span>

                <FaArrowRight />
              </button>
            </form>

            <ul className="social-list">
              <li>
                <Link href="#" className="social-link">
                  <FaFacebook />
                </Link>
              </li>

              <li>
                <Link href="#" className="social-link">
                  <FaLinkedin />
                </Link>
              </li>

              <li>
                <Link href="#" className="social-link">
                  <FaInstagram />
                </Link>
              </li>

              <li>
                <Link href="#" className="social-link">
                  <FaTwitter />
                </Link>
              </li>

              <li>
                <Link href="#" className="social-link">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright 2022 All Rights Reserved by{" "}
            <Link href="#" className="copyright-link">
              companyname
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
