import React from 'react';
// count up
import CountUp from 'react-countup';
// intersection observer
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex h-screen flex-col lg:flex-row lg:items-center justify-center">
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className=""
          >
            <h2 className="h2 font-bold text-4xl text-blue-800 font-primary">About us</h2>
            <h3 className="h3 mb-4 font-tertiary">
              We are <span>TON fanatic</span> and <span>keep explore this amazing world</span>{' '}
            </h3>
            <p className="mb-6 ">
              Come from NYCU in Hsinchu Taiwan, we are a group of TON fanatic and keep explore this amazing world ...
            </p>
            {/* stats */}
            <div className="mb-12 mt-6 flex gap-x-6 lg:gap-x-10">
              <div>
                <div className="text-gradient mb-2 font-primary text-[40px]">
                  {inView ? <CountUp start={0} end={2} duration={3}></CountUp> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  experience
                </div>
              </div>
              <div>
                <div className="text-gradient mb-2 font-primary text-[40px]">
                  {inView ? <CountUp start={0} end={3} duration={3}></CountUp> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Finished <br />
                  Projects
                </div>
              </div>
              <div>
                <div className="text-gradient mb-2 font-primary text-[40px]">
                  {inView ? <CountUp start={0} end={4} duration={3}></CountUp> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Number of <br />
                  Members
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className=" bg-about bg-contain bg-top bg-no-repeat h-56 -mt-6 sm:h-96"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
