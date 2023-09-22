import React from "react";

const LowerDiv = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="w-3/6 flex items-center justify-center "></div>
      <div className="w-3/6 flex items-center justify-center min-h-fit  ">
        {" "}
        <img
          src="/images/myLaptop.png"
          className="object-contain"
          alt=""
        />{" "}
      </div>
    </div>
  );
};

export default LowerDiv;
