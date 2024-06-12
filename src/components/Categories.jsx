import React from "react";
import { categories } from "../data/data";
import { delay, easeInOut, motion, stagger } from "framer-motion";

const categoryVarient = {
  initial: { x: 30 },
  animate: {
    x: -30,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1,
      ease: "easeInOut",
      // type: "tween",
      // type: "spring", // Use a spring animation for a bouncy effect
      // stiffness: 300, // Adjust stiffness for the desired bounciness
    },
  },
};

const Categories = () => {
  return (
    <div className="max-w-[1520px] m-auto p-4 overflow-x-hidden ">
      <h3 className="textShadowSmallOrange mt-10 text-3xl md:text-4xl text-orange-600 font-bold text-center uppercase mb-10">
        Trending Categories
      </h3>
      <motion.div
        variants={categoryVarient}
        initial="initial"
        whileInView="animate"
        // viewport={{ once: false, amount: 0.9 }}
        className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2 place-items-center"
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-center px-4 py-2 hover:scale-110 duration-300 shadow-2xl rounded-md"
          >
            <img
              src={category.image}
              alt={category.name}
              className="cursor-pointer w-40 h-12 object-center shadow-xl"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Categories;
