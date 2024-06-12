import React from "react";
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const TopPicks = () => {
  return (
    <>
      <h3 className="textShadowSmallOrange mt-10 text-3xl md:text-4xl text-orange-600 font-bold text-center uppercase">
        Top Picks
      </h3>
      <div className="max-w-[1520px] mx-auto p-4 mt-6">
        <Splide
          options={{
            perPage: 4,
            gap: "0.5rem",
            drag: "free",
            arrows: false,
            pagination: false,
            breakpoints: {
              1024: { perPage: 2 },
              768: { perPage: 2 },
              640: { perPage: 1 },
              480: { perPage: 1 },
            },
          }}
        >
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="relative rounded-3xl cursor-pointer overflow-hidden hover:scale-95 ease-out duration-300">
                <div className="absolute w-full h-full bg-black/50 text-white rounded-3xl">
                  <p className="textShadowSmall px-4 pt-4 font-bold">
                    {item.title}
                  </p>
                  <p className="px-4">{item.price}</p>
                  <button className="textShadowSmall border-dotted border-white text-white mx-2 absolute bottom-4">
                    Add to cart
                  </button>
                </div>
                <img
                  className="h-[300px] w-full object-cover rounded-xl"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default TopPicks;
