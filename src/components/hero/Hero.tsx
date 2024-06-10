"use client";

import { useState, useEffect } from "react";
import Slide from "./Slide";
import { slides } from "@/config/slides";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: any) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-container relative overflow-hidden">
      <div
        className="hero-slides flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            <Slide {...slide} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 transform gap-6">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full border-2 ${
              currentSlide === index ? "border-brand bg-brand" : "border-light"
            }`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
