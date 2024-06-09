"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      src: "/assets/images/hero/make-believe.jpeg",
      alt: "Hero image",
      buttonText: "Shop Now",
    },
    {
      src: "/assets/images/hero/picture-perfect-deals.jpeg",
      alt: "Hero image",
      buttonText: "Do It Now",
    },
    {
      src: "/assets/images/hero/new-arrivals.jpeg",
      alt: "Hero image",
      buttonText: "Hit It Now",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative">
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === activeIndex && (
              <motion.div
                key={index}
                className="absolute left-0 top-0 h-full w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-video">
                  <Image
                    className="h-full w-full object-cover object-center"
                    src={slide.src}
                    width={1920}
                    height={1080}
                    alt={slide.alt}
                  />
                  <button>{slide.buttonText}</button>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 transform space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 cursor-pointer rounded-full ${index === activeIndex ? "bg-light" : "bg-gray-500"}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
