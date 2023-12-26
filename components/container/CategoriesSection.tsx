import Image from "next/image";
import React from "react";

const CategoriesSection = () => {
  return (
    <section className="section category" aria-label="category">
      <div className="container">
        <p className="section-subtitle">Categories</p>

        <h2 className="h2 section-title">
          Online <span className="span">Classes</span> For Remote Learning.
        </h2>

        <p className="section-text">
          Consectetur adipiscing elit sed do eiusmod tempor.
        </p>

        <ul className="grid-list">
          <li>
            <div className="category-card !bg-[#1ab79d]/10">
              <div className="card-icon !bg-[#1ab79d]/10">
                <Image
                  src="/category-1.svg"
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Online Degree Programs"
                  className="img "
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Online Degree Programs
                </a>
              </h3>

              <p className="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <span className="card-badge !bg-[#1ab79d]/10 !text-[#1ab79d]">7 Courses</span>
            </div>
          </li>

          <li>
            <div className="category-card !bg-[#ee4962]/10">
              <div className="card-icon !bg-[#ee4962]/10">
                <Image
                  src="/category-2.svg"
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Non-Degree Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Non-Degree Programs
                </a>
              </h3>

              <p className="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <span className="card-badge !bg-[#ee4962]/10 !text-[#ee4962]">4 Courses</span>
            </div>
          </li>

          <li>
            <div className="category-card !bg-[#4461e4]/10">
              <div className="card-icon !bg-[#4461e4]/10">
                <Image
                  src="/category-3.svg"
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Off-Campus Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Off-Campus Programs
                </a>
              </h3>

              <p className="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <span className="card-badge !bg-[#4461e4]/10 !text-[#4461e4]">8 Courses</span>
            </div>
          </li>

          <li>
            <div className="category-card !bg-[#f8b720]/10">
              <div className="card-icon !bg-[#f8b720]/10">
                <Image
                  src="/category-4.svg"
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Hybrid Distance Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Hybrid Distance Programs
                </a>
              </h3>

              <p className="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>
              <span className="card-badge !bg-[#f8b720]/10 !text-[#f8b720]">8 Courses</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CategoriesSection;
