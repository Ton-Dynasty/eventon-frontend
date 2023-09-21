import React from "react";
import { FaYoutube, FaGithub, FaBook } from "react-icons/fa";
import Image from "../assets/coin.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh]" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:ml-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-[55px] font-bold leading-[0.8] text-blue-800 lg:text-[110px]"
            >
              Even<span className=" text-blue-500">ton</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-6 font-secondary text-[36px] font-semibold uppercase leading-[1] lg:text-[60px]"
            >
              <span className="mr-4">A </span>
              <TypeAnimation
                sequence={["Flexible", 2000, "Easy", 2000, "Scalable", 2000]}
                speed={100}
                className="mr-4 text-blue-600"
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation>
              <span>message hub for event on TON.</span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-8 max-w-lg lg:mx-0"
            >
              Customize your code or use our smart contracts for automatic
              actions on specific signals!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-12 flex max-w-max items-center gap-x-6 lg:mx-0"
            >
              <a className="my-btn my-btn-lg inline-flex items-center justify-center">
                <Link to="/app">Start</Link>
              </a>
              <ScrollLink
                to="contact"
                className="text-gradient my-btn-link cursor-pointer"
                activeClass="active"
                smooth={true}
                spy={true}
              >
                Contact us
              </ScrollLink>
            </motion.div>
            {/* social */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto flex max-w-max gap-x-6 text-[20px] lg:mx-0"
            >
              <a href="https://www.youtube.com/watch?v=u8M1qNCyN6U">
                <FaYoutube />
              </a>
              <a href="https://github.com/Ton-Dynasty">
                <FaGithub />
              </a>
              <a href="https://ton-dynasty.github.io/eventon-doc/">
                <FaBook />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden max-w-[320px] flex-1 animate-pulse items-center justify-center lg:flex lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
