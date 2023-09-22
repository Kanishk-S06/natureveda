import React from "react";

const Content = () => {
  return (
    <div>
      <div className="mt-2 flex flex-col ">
        <div className=" flex flex-row items-center justify-center text-center p-4 ">
          {/* <div>
            <img
              src="/images/smartphone.png"
              className="w-[70px] h-[65px] "
              alt=""
            />
          </div> */}
          <h1 className="text-4xl font-bold ">Experience Dr. NatureVeda</h1>
        </div>
        <div className=" flex flex-row items-center justify-center text-center">
          {/* <div>
            <img
              src="/images/ayurveda.png"
              className="w-[70px] h-[65px] "
              alt=""
            />
          </div> */}
          <h1 className="text-2xl italic  ">Rediscovering the Forgotten Art</h1>
        </div>
        <div className=" flex flex-row items-center justify-center text-center">
          <h1 className="text-2xl ">
            Where Ayurveda's Ancient Wisdom Meets Modern Well-being.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
