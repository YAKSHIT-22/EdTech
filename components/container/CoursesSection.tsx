import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
const CoursesSection = () => {
  return (
    <>
      <section className="section course" id="courses" aria-label="course">
        <div className="container">
          <p className="section-subtitle">Popular Courses</p>

          <h2 className="h2 section-title">Pick A Course To Get Started</h2>

          <ul className="grid-list">
            <li>
              <div className="course-card">
                <figure className="card-banner img-holder md:w-[370px] md:h-[220px]">
                  <Image
                    src="/course-1.jpg"
                    width="370"
                    height="220"
                    loading="lazy"
                    alt="Build Responsive Real- World Websites with HTML and CSS"
                    className="img-cover"
                  />
                </figure>

                <div className="abs-badge">
                  <IoTimeOutline />

                  <span className="span">3 Weeks</span>
                </div>

                <div className="card-content">
                  <span className="badge">Beginner</span>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Build Responsive Real- World Websites with HTML and CSS
                    </a>
                  </h3>

                  <div className="wrapper">
                    <div className="rating-wrapper">
                      <IoStarOutline />
                      <IoStarOutline />
                      <IoStarOutline />
                      <IoStarOutline />
                      <IoStarOutline />
                    </div>

                    <p className="rating-text">(5.0/7 Rating)</p>
                  </div>

                  <data className="price" value="29">
                    $29.00
                  </data>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <IoLibraryOutline />

                      <span className="span">8 Lessons</span>
                    </li>

                    <li className="card-meta-item">
                      <IoPeopleOutline />

                      <span className="span">20 Students</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="course-card">
                <figure className="card-banner img-holder md:w-[370px] md:h-[220px]">
                  <Image
                    src="/course-2.jpg"
                    width="370"
                    height="220"
                    loading="lazy"
                    alt="Java Programming Masterclass for Software Developers"
                    className="img-cover"
                  />
                </figure>

                <div className="abs-badge">
                  <IoTimeOutline />
                  <span className="span">8 Weeks</span>
                </div>

                <div className="card-content">
                  <span className="badge">Advanced</span>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Java Programming Masterclass for Software Developers
                    </a>
                  </h3>

                  <div className="wrapper">
                    <div className="rating-wrapper">
                      <IoStarOutline />
                      <IoStarOutline />
                      <IoStarOutline />
                      <IoStarOutline />
                      <IoStarOutline />
                    </div>

                    <p className="rating-text">(4.5 /9 Rating)</p>
                  </div>

                  <data className="price" value="49">
                    $49.00
                  </data>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <IoLibraryOutline />

                      <span className="span">15 Lessons</span>
                    </li>

                    <li className="card-meta-item">
                      <IoPeopleOutline />

                      <span className="span">35 Students</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="course-card">
                <figure className="card-banner img-holder md:w-[370px] md:h-[220px]">
                  <Image
                    src="/course-3.jpg"
                    width="370"
                    height="220"
                    loading="lazy"
                    alt="The Complete Camtasia Course for Content Creators"
                    className="img-cover"
                  />
                </figure>

                <div className="abs-badge">
                  <IoTimeOutline />

                  <span className="span">3 Weeks</span>
                </div>

                <div className="card-content">
                  <span className="badge">Intermediate</span>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      The Complete Camtasia Course for Content Creators
                    </a>
                  </h3>

                  <div className="wrapper">
                    <div className="rating-wrapper">
                      <IoStarOutline />
                      <IoStarOutline />
                      <IoStarOutline />
                      <IoStarOutline />
                      <IoStarOutline />
                    </div>

                    <p className="rating-text">(4.9 /7 Rating)</p>
                  </div>

                  <data className="price" value="35">
                    $35.00
                  </data>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <IoLibraryOutline />

                      <span className="span">13 Lessons</span>
                    </li>

                    <li className="card-meta-item">
                      <IoPeopleOutline />

                      <span className="span">18 Students</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>

          <a href="#" className="btn has-before">
            <span className="span">Browse more courses</span>
            <FaArrowRight />
          </a>
        </div>
      </section>
      <section
        className="video has-bg-image"
        aria-label="video"
        style={{ backgroundImage: "url('/video-bg.png')" }}
      >
        <div className="container">
          <div className="video-card">
            <div className="video-banner img-holder has-after">
              <Image
                src="/video-banner.jpg"
                width="970"
                height="550"
                loading="lazy"
                alt="video banner"
                className="img-cover"
              />

              <button className="play-btn" aria-label="play video">
                <IoPlayCircleOutline />
              </button>
            </div>

            <Image
              src="/video-shape-1.png"
              width="1089"
              height="605"
              loading="lazy"
              alt=""
              className="shape video-shape-1"
            />

            <Image
              src="/video-shape-2.png"
              width="158"
              height="174"
              loading="lazy"
              alt=""
              className="shape video-shape-2"
            />
          </div>
        </div>
      </section>

      <section className="section stats" aria-label="stats">
        <div className="container">
          <ul className="grid-list">
            <li>
              <div className="stats-card !bg-[#1ab79d]/10">
                <h3 className="card-title !text-[#1ab79d]">29.3k</h3>

                <p className="card-text">Student Enrolled</p>
              </div>
            </li>

            <li>
              <div className="stats-card !bg-[#ee4962]/10">
                <h3 className="card-title !text-[#ee4962]">32.4K</h3>

                <p className="card-text">Class Completed</p>
              </div>
            </li>

            <li>
              <div className="stats-card !bg-[#8f57ff]/10">
                <h3 className="card-title !text-[#8f57ff]">100%</h3>

                <p className="card-text">Satisfaction Rate</p>
              </div>
            </li>

            <li>
              <div className="stats-card !bg-[#f8b720]/10">
                <h3 className="card-title !text-[#f8b720]">354+</h3>

                <p className="card-text">Top Instructors</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CoursesSection;
