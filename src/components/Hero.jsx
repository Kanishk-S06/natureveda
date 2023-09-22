import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const imageVariants = {
    initial: {
      width: "0%",
      height: "0%",
    },
    animate: {
      width: "100%",
      height: "100%",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center bg-bgOne  bg-cover   ">
        <div className="h-[440px]   ">
          {/* <img src="./random.jpg" className="w-[300px] h-[300px] " alt="" /> */}
          <motion.img
            src="./tripleImage.png"
            alt=""
            initial="initial"
            animate="animate"
            variants={imageVariants}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
