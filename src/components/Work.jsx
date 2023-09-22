import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container mx-auto">
        <div className="flex h-screen flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 justify-center">
          <motion.h2
            className="h2 font-bold text-blue-800"
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            Slide
          </motion.h2>
          <motion.iframe
            className="w-full"
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            src="https://docs.google.com/presentation/d/e/2PACX-1vQaZF5r--0abgoh6LeEdKlMirBGr7VgEC2a4m4BFI9w8gWwuSW0ALxLuvohWgQDWw/embed?start=false"
            frameborder="0"
            width="900"
            height="480"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></motion.iframe>
        </div>
      </div>
    </div>
  );
};

export default Work;
