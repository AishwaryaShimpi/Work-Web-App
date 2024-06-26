import { motion } from "framer-motion";
import React from "react";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "6.5vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration : 1 }}
                    className="mr-[1vw] w-[6.5vw] h-[5vw]  relative top-[0.4vw] bg-red-500"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[6.5vw] leading-[5.5vw] tracking-tighter font-Founders-Grotesk font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none  ">
            {item}
          </p>
        ))}
        <div className="start">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-sm capitalize rounded-full">
            Start the project
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
