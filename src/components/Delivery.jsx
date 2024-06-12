import React from "react";

import { motion } from "framer-motion";

const deliveryVariant = {
  hidden: { opacity: 0, x: -300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

const Delivery = () => {
  return (
    <div className="w-full bg-white py-18 px-4 mt-40">
      <h3 className="textShadowSmallOrange text-2xl md:text-4xl text-orange-600 font-bold text-center uppercase">
        Quick Delivery App
      </h3>
      <div className="mx-auto grid md:grid-cols-2">
        <motion.img
          variants={deliveryVariant}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true, amount: 0.1 }}
          className="w-[400px] mx-auto my-4 cursor-pointer]"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt=""
        />
        <div className="flex flex-col justify-center mt-10 md:mr-10 mr-2">
          <p className="textShadowSmallBlue text-[#4a4aff] font-bold md:text-3xl text-2xl">
            Get The App
          </p>
          <h1 className="textShadowSmall text-2xl md:text-4xl py-4">
            Convenience on-demand
          </h1>
          <p className="textShadowParagraph text-gray-700 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            veniam ducimus. Dolore provident ratione quia voluptatem sequi non
            sed nemo. Laboriosam consequuntur natus earum itaque recusandae
            rerum illo ad vitae, officiis iure mollitia praesentium. Quis
            debitis aut fuga quod, unde harum illo adipisci corporis illum vel
            sapiente temporibus nemo, voluptatem vero officia dolor dolorum quo
            totam. Eius cumque magni quidem voluptatum possimus in ea laudantium
            animi facilis officiis quis modi atque sapiente labore, odit dolor
            fugiat aspernatur ullam officia ipsam rerum.
          </p>
          <button className="bg-black text-[#43df00] w-[150px] rounded-md font-medium my-6 mx-auto py-3 transition-all duration-300 ease-out active:scale-90 hover:text-white">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
