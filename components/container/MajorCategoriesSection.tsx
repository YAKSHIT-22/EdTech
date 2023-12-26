import React from 'react'
import { BsBriefcase } from "react-icons/bs";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { IoLayersOutline } from "react-icons/io5";
import { IoLaptopOutline } from "react-icons/io5";
import { IoThumbsUpOutline } from "react-icons/io5";
import { IoHeadsetOutline } from "react-icons/io5";
import { IoServerOutline } from "react-icons/io5";
import { IoMedkitOutline } from "react-icons/io5";
const MajorCategoriesSection = () => {
  return (
    <section className="section category-course" aria-label="category">
    <div className="container">

      <p className="section-subtitle">Course Categories</p>

      <h2 className="h2 section-title">Popular Topics To Learn</h2>

      <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-12">

        <li>
          <div className="category-card-course">

            <div className="card-icon-course">
            <BsBriefcase />
            </div>

            <div>
              <h3 className="h3 card-title-course">
                <a href="#">Personal Development</a>
              </h3>

              <span className="card-meta-course">39 Course</span>
            </div>

          </div>
        </li>

        <li>
          <div className="category-card-course">

            <div className="card-icon-course">
            <IoFileTrayFullOutline />
            </div>

            <div>
              <h3 className="h3 card-title-course">
                <a href="#">Human Research</a>
              </h3>

              <span className="card-meta-course">24 Course</span>
            </div>

          </div>
        </li>

        <li>
          <div className="category-card-course">

            <div className="card-icon-course">
            <IoIosColorPalette />
            </div>

            <div>
              <h3 className="h3 card-title-course">
                <a href="#">Art & Design</a>
              </h3>

              <span className="card-meta-course">39 Course</span>
            </div>

          </div>
        </li>

        <li>
          <div className="category-card-course">

            <div className="card-icon-course">
            <IoLayersOutline />
            </div>

            <div>
              <h3 className="h3 card-title-course">
                <a href="#">Business Management</a>
              </h3>

              <span className="card-meta-course">39 Course</span>
            </div>

          </div>
        </li>

        <li>
          <div className="category-card-course">

            <div className="card-icon-course">
            <IoLaptopOutline />
            </div>

            <div>
              <h3 className="h3 card-title-course">
                <a href="#">Web Development</a>
              </h3>

              <span className="card-meta-course">39 Course</span>
            </div>

          </div>
        </li>

        <li>
          <div className="category-card-course">

            <div className="card-icon-course">
            <IoThumbsUpOutline />
            </div>

            <div>
              <h3 className="h3 card-title-course">
                <a href="#">Lifestyle</a>
              </h3>

              <span className="card-meta-course">39 Course</span>
            </div>

          </div>
        </li>

        <li>
          <div className="category-card-course">

            <div className="card-icon-course">
            <IoHeadsetOutline />
            </div>

            <div>
              <h3 className="h3 card-title-course">
                <a href="#">Digital Marketing</a>
              </h3>

              <span className="card-meta-course">39 Course</span>
            </div>

          </div>
        </li>

        <li>
          <div className="category-card-course">

            <div className="card-icon-course">
            <IoServerOutline />
            </div>

            <div>
              <h3 className="h3 card-title-course">
                <a href="#">Data Sciences</a>
              </h3>

              <span className="card-meta-course">39 Course</span>
            </div>

          </div>
        </li>

        <li>
          <div className="category-card-course">

            <div className="card-icon-course">
            <IoMedkitOutline />
            </div>

            <div>
              <h3 className="h3 card-title-course">
                <a href="#">Health & Fitness</a>
              </h3>

              <span className="card-meta-course">39 Course</span>
            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>
  )
}

export default MajorCategoriesSection;