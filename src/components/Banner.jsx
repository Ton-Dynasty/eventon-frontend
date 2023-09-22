import React, { useEffect, useState } from 'react';
import { FaYoutube, FaGithub, FaBook } from 'react-icons/fa';
import Image from '../assets/coin.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="min-h-[90vh] lg:min-h-[92vh]" id="home">
      <div className="container mx-auto flex flex-col justify-between py-12">
        <div className="flex flex-col gap-y-8 lg:ml-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-[55px] font-bold leading-[0.8] text-blue-800 lg:text-[110px]"
            >
              Even<span className=" text-blue-500">ton</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="my-6 font-secondary text-[36px] font-semibold uppercase leading-[1] lg:text-[48px]"
            >
              <span className="mr-4">A </span>
              <TypeAnimation
                sequence={['Flexible', 2000, 'Easy', 2000, 'Scalable', 2000]}
                speed={40}
                className="mr-4 text-blue-600"
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation>
              <span>message hub for event on TON.</span>
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-8 max-w-lg lg:mx-0"
            >
              Customize your code or use our smart contracts for automatic actions on specific signals!
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-12 flex max-w-max items-center gap-x-6 lg:mx-0"
            >
              <a className="my-btn my-btn-lg inline-flex items-center justify-center">
                <Link to="app">Start</Link>
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
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
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
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="hidden max-w-[320px] flex-1 animate-pulse items-center justify-center lg:flex lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
        {/* <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
