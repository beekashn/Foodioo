import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { motion, spring } from "framer-motion";

const Featured = () => {
  const sliders = [
    { url: "images/pizza.jpg" },
    { url: "images/burger.jpg" },
    { url: "images/momo.jpg" },
    { url: "images/noodles.jpeg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1520px] h-[400px] w-full p-4 relative group shadow-2xl">
      <div
        className="w-full h-full rounded-xl bg-cover bg-center duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-orange-700 p-2 cursor-pointer text-white hover:scale-110 active:scale-90 transition-all duration-300 ease-in-out"
        onClick={prevSlider}
      >
        <BsChevronCompactLeft />
      </div>
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-orange-700 p-2 cursor-pointer text-white hover:scale-110 active:scale-90 transition-all duration-300 ease-in-out"
        onClick={nextSlider}
      >
        <BsChevronCompactRight />
      </div>

      <div className="flex justify-center py-2">
        {sliders.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`text-2xl -mt-3 cursor-pointer transition-all duration-300 ease-in-out 
          ${isActive ? "text-orange-600 scale-125" : "text-gray-400 scale-90"}`}
              onClick={() => moveToNextSlide(index)}
            >
              <RxDotFilled />
            </div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: [-10, 0] }}
        transition={{
          delay: 1,
          duration: 1,
          type: "spring",
          stiffness: 900,
        }}
        className="flex justify-center items-center py-10 text-2xl md:text-4xl"
      >
        <h1 className="textShadowMedium">Ok goooooooooooooooooooooooooooo</h1>
      </motion.div>
    </div>
  );
};

export default Featured;
