import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex h-screen flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <div className="flex flex-col">
            <motion.h2
              className="h2 font-bold text-blue-800"
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Milestone
            </motion.h2>
            <motion.h2
              className="h2 font-bold text-blue-800"
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <TypeAnimation
                sequence={["V1", 3000, "V1 ---> V2", 3000]}
                speed={50}
                className="mr-4 text-blue-600"
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation>
            </motion.h2>
          </div>
          <motion.iframe
            className="h2 font-bold text-blue-800"
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            width="100%"
            height="480"
            src="https://miro.com/app/embed/uXjVMj5BncA=/?pres=1&frameId=3458764564417750286&embedId=549493201325"
            frameborder="0"
            scrolling="no"
            allow="fullscreen; clipboard-read; clipboard-write"
            allowFullScreen
          ></motion.iframe>
        </div>
      </div>
    </div>
  );
};

export default Services;
