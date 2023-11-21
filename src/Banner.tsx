import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center bg-white-500 py-4">
      <div className="text-center">
        <h1 className="text-5xl  font-inter font-bold mb-4">
          <span
            className="bg-gradient-to-r text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(to right, #978AFC, #C387FF, #FF47AA, #FF51CE)",
            }}
          >
            Retirement Calculator
          </span>
        </h1>
        <p className="text-lg font-medium text-white font-inter font-sansserif ">
          "Calculate Your Future Financial Freedom Now!"
        </p>
      </div>
    </div>
  );
};

export default Banner;
