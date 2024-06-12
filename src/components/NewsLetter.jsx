import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <div className="max-w-[1520px] m-auto text-white px-4 bg-[#24262b]">
        <div className="mx-auto grid lg:grid-cols-2">
          <div className="lg:col-span-1 my-8 text-center md:text-left">
            <h1 className="text-2xl">
              Need advice on how to improve your flow ?
            </h1>
            <p className="text-gray-400">
              sign up to join us and stay up-to-date
            </p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-center w-full">
              <input
                type="email"
                placeholder="email@gmail.com"
                className=" p-2 flex w-full rounded-md text-black outline-none"
              />
              <button className="textShadowMedium bg-[#00df9a] text-white rounded-md font-medium w-1/3 ml-4 my-6 px-6 py-2 border-none hover:shadow-xl hover:text-black active:scale-90 duration-300 ">
                Notify me
              </button>
            </div>
            <p>
              We are concerned about your data security, Read{" "}
              <span
                className="text-[#00df9a] cursor-pointer textShadowSmall"
                style={{ letterSpacing: 0 }}
              >
                Privacy Policy
              </span>
            </p>
          </div>
          <hr className="my-8 md:w-3/4 bg-gray-700 border-1" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
