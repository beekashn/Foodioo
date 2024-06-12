import React, { useState } from "react";
import { motion } from "framer-motion";

const filterButtonVariant = {
  animate: {
    y: [0, -10],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        ease: "easeOut",
      },
    },
  },
};

const MealFiltering = ({ onFilter }) => {
  const categories = [
    { id: 1, title: "All" },
    { id: 2, title: "Chicken" },
    { id: 3, title: "Pizza" },
    { id: 4, title: "Salad" },
  ];

  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (category, id) => {
    onFilter(category.toLowerCase());
    setActiveButton(id);
  };

  return (
    <div>
      <motion.div
        variants={filterButtonVariant}
        animate="animate"
        className="flex justify-center items-center gap-2 md:gap-4 mb-4 w-full"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() =>
              handleClick(category.title.toLowerCase(), category.id)
            }
            className={`textShadowSmall rounded-3xl hover:scale-105 active:scale-90 duration-300 px-4 font-semibold ${
              activeButton === category.id
                ? "bg-orange-500 text-white"
                : "bg-white"
            }`}
          >
            {category.title}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default MealFiltering;
