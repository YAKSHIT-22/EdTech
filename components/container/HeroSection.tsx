import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <section className="section hero has-bg-image" id="home" aria-label="home"
    style={{backgroundImage: "url('/hero-bg.svg')"}}>
    <div className="container">

      <div className="hero-content">

        <h1 className="h1 section-title">
          The Best Program to <span className="span">Enroll</span> for Exchange
        </h1>

        <p className="hero-text">
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
        </p>

        <a href="#" className="btn has-before">
          <span className="span">Find courses</span>

          <FaArrowRight />
        </a>

      </div>

      <figure className="hero-banner">

        <div className="img-holder one md:w-[270px] md:h-[300px]">
          <Image src="/hero-banner-1.jpg" width="270" height="300" alt="hero banner" className="img-cover"/>
        </div>

        <div className="img-holder two md:w-[240px] md:h-[300px]">
          <Image src="/hero-banner-2.jpg" width="240" height="370" alt="hero banner" className="img-cover"/>
        </div>

        <Image src="/hero-shape-1.svg" width="380" height="190" alt="" className="shape hero-shape-1"/>

        <Image src="/hero-shape-2.png" width="622" height="551" alt="" className="shape hero-shape-2"/>

      </figure>

    </div>
  </section>


  )
}

export default HeroSection