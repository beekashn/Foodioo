import React, { useEffect, useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import MealFiltering from "./MealFiltering";

import { motion } from "framer-motion";

const mealVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Meal = ({ food, handleFilter }) => {
  const [showNoResultMessage, setShowNoResultMessage] = useState(false);
  useEffect(() => {
    if (food.length === 0) {
      setShowNoResultMessage(true);
    } else {
      setShowNoResultMessage(false);
    }
  }, [food]);
  return (
    <div
      className="max-w-[1520px] min-h-screen mx-auto px-4 py-12 bg-slate-100/100 "
      id="meal"
    >
      <h3 className="textShadowSmallOrange mt-10 text-3xl md:text-4xl text-orange-600 font-bold text-center uppercase mb-10">
        Our Meal
      </h3>
      <MealFiltering onFilter={handleFilter} />
      <div className="grid relative sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {food.length === 0 && showNoResultMessage ? (
          <div className="h-[60vh] w-[80vw] top-4 absolute textShadowMedium bg-slate-300 shadow-lg flex flex-col justify-center items-center md:text-4xl text-2xl text-orange-600 font-semibold">
            <p className="text-center"> Oops !</p>
            <p className="text-center">Food not Available</p>
          </div>
        ) : (
          food.map((meal) => (
            <motion.div
              key={meal.id}
              className="border-none rounded-3xl bg-slate-100 shadow-2xl p-2"
            >
              <motion.img
                variants={mealVariant}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true, amount: 0.5 }}
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                src={meal.image}
                alt={meal.name}
                className="w-full lg:h-[200px] sm:h-[300px] object-cover customBorderRadius customBoxShadow  duration-300 cursor-pointer -z-10"
              />
              <div className="flex justify-between px-4 py-2">
                <p
                  className="textShadowMedium font-semibold capitalize"
                  style={{ letterSpacing: "1px" }}
                >
                  {meal.name}
                </p>
                <p className="textShadowMedium bg-orange-600 text-white h-18 w-16 rounded-full z-40 -mt-10 border-4 border-white font-bold flex items-center justify-center">
                  {meal.price}
                </p>
              </div>
              <div
                className="textShadowSmall pl-4 flex gap-2 items-center justify-start text-blue-600"
                style={{ letterSpacing: 0 }}
              >
                View More
                <FaCircleArrowRight className="text-orange-600 size-5 hover:text-blue-600 cursor-pointer hover:scale-110 active:scale-90 duration-300" />
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Meal;
