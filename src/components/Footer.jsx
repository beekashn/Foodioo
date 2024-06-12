import React from "react";

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-slate-800">
      <div className="py-10 px-4 grid lg:grid-cols-3  gap-8 text-gray-300">
        <div className="">
          <h1 className="textShadowSmall font-bold cursor-pointer px-2 text-xl md:text-2xl lg:text-3xl">
            F
            <span className="text-[#ff4646] font-medium text-2xl hover:text-[#5245ff]">
              oo
            </span>
            di
            <span className="text-[#5245ff] font-medium text-2xl hover:text-[#ff4646]">
              oo
            </span>
          </h1>
          <p className="px-2 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium totam aspernatur dolorem minus architecto nulla,
            perferendis ab vitae alias neque.
          </p>
          <div className="flex px-2 justify-between md:w-[75%] my-6">
            <FaFacebookSquare
              size={30}
              className="cursor-pointer hover:scale-110 duration-300 active:scale-90"
            />
            <FaGithubSquare
              size={30}
              className="cursor-pointer hover:scale-110 duration-300 active:scale-90"
            />
            <FaInstagram
              size={30}
              className="cursor-pointer hover:scale-110 duration-300 active:scale-90"
            />
            <FaTwitterSquare
              size={30}
              className="cursor-pointer hover:scale-110 duration-300 active:scale-90"
            />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6 ">
          <div>
            <h6 className="font-medium text-[#ff3d3d]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Nepal</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#ff3d3d]">Navigation</h6>
            <ul>
              <li className="py-2 text-sm">Home</li>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Services</li>
              <li className="py-2 text-sm">Contact</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#ff3d3d]">Resources</h6>
            <ul>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">News Update</li>
              <li className="py-2 text-sm">Testimonials</li>
              <li className="py-2 text-sm">Privacy & Policy</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#ff3d3d]">Company</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Affiliate</li>
              <li className="py-2 text-sm">Changelog</li>
              <li className="py-2 text-sm">Login</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white grid place-items-center">
        <h1>© Copyright 2024 Foodioo | All rights reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
