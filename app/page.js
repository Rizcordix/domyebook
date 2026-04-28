"use client";
import { useState, useRef } from 'react'; // Import useState and useRef
import Banner from "@/components/Banner";
import { CallToAction1 } from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Special from "@/components/services2";
import PlaxLayout from "@/layouts/PlaxLayout";
// import Link from "next/link";
import Portfolio from "@/components/Portfolio";
import BrandCarousel from "@/components/BrandCarousel";
import BenefitsSection from "@/components/IconBoxes";
import PlaxAccordion from '@/components/PlaxAccordion';
// import ProblemSolutionSection from '@/components/ProblemSolution';
import HeroSection from '@/components/HeroSection';

const Page = () => {
  return (
    <PlaxLayout>
      {/* Add keyframe animations
      <style>{playButtonStyles}</style> */}
      
      {/* banner */}
      <Banner />
      {/* banner end */}

      {/* New Animated Hero Section */}
      <HeroSection />
      {/* New Animated Hero Section */}

      {/* brands */}
      <BrandCarousel />

      {/* <ProblemSolutionSection /> */}

      <div className="mil-features mil-p-0-80">
        <div className="container">
          <Special />
        </div>
      </div>
      {/* call to action end */}
      {/* icon boxes */}
      <BenefitsSection />
      {/* icon boxes end */}
      {/* Portfolio */}
      <Portfolio />
      {/* Portfolio end */}
      <div className="mil-testimonials mil-p-80-0">
        <div className="container">
          <Testimonials />
        </div>
      </div>
      {/* testimonials end */}

      <div className="mil-faq mil-p-0-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="mil-text-center">
                <h2 className="mil-mb-30 mil-up faq">
                  Frequently Asked Questions
                </h2>
                <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                  Find quick and clear answers to the most common <br />
                  questions about DomyEbook
                </p>
              </div>
              <PlaxAccordion />
            </div>
          </div>
        </div>
      </div>


      {/* call to action */}
      <CallToAction1 />
    </PlaxLayout>
  );
};
export default Page; // Export the renamed component
