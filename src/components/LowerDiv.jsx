import React from "react";

const LowerDiv = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-8 ">
        <div className="w-3/6 flex  items-center justify-center text-justify ">
          <p className=" p-2 mx-10 ">
            <h1 className="text-3xl font-bold mb-4 ">Nature With LLM</h1>
            <div className="text-2xl">
              Dr. NatureVeda is driven by a custom-trained LLM model with 2
              million parameters and 20k layers, fusing ancient Ayurvedic wisdom
              with cutting-edge technology. We're dedicated to unlocking the
              healing potential of nature, providing holistic wellness solutions
              rooted in science and tradition
            </div>
          </p>
        </div>
        <div className="w-3/6 flex items-center justify-center min-h-fit  ">
          {" "}
          <img
            src="/images/myLaptop.png"
            className="object-contain"
            alt=""
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default LowerDiv;
