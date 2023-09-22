import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
const Contact = () => {
  // 這是代表連結的陣列
  const links = [
    { name: "Ton-Dynasty", link: "https://github.com/Ton-Dynasty" },
    {
      name: "Eventon",
      link: "https://github.com/Ton-Dynasty/eventon",
    },
    { name: "Document", link: "https://ton-dynasty.github.io/eventon-doc/" },
    { name: "Video", link: "https://www.youtube.com/watch?v=u8M1qNCyN6U" },
    { name: "Telegram", link: "https://t.me/+5affnJVZV4I4MTI1" },
    {
      name: "DEV note",
      link: "https://ipromise-ton.notion.site/Dev-Note-c73c5fb859fe4bfa92cef2251d41d9e4?pvs=4",
    },

    // ...您可以根據需求添加更多的連結
  ];

  return (
    <div className="section" id="contact">
      <div className="container mx-auto">
        <div className="mockup-browser border-base-300 border">
          <div className="mockup-browser-toolbar">
            <div className="input border-base-300 border">
              <TypeAnimation
                sequence={["eventon.ton", 3000, "dynasty.ton", 3000]}
                speed={50}
                className="mr-4 text-black font-mono font-bold"
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation>
            </div>
          </div>
          <div className="border-base-300 grid grid-cols-3 flex-col justify-center gap-4 border-t px-8 py-16">
            <motion.div
              className="col-span-1"
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="grid h-full grid-rows-6 items-center gap-4">
                <div className="row-span-2  inline-flex h-full items-center justify-center rounded-lg bg-blue-900 text-3xl font-semibold text-blue-100 shadow-lg shadow-blue-950">
                  GitHub
                </div>
                <div className="row-span-2  inline-flex h-full items-center justify-center rounded-lg bg-blue-900 text-3xl font-semibold text-blue-100 shadow-lg shadow-blue-950">
                  Tutorial
                </div>
                <div className="row-span-2  inline-flex h-full items-center justify-center rounded-lg bg-blue-900 text-3xl font-semibold text-blue-100 shadow-lg shadow-blue-950">
                  Community
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-span-2 mx-4"
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex flex-col gap-y-4">
                {links.map((linkItem, index) => (
                  <a
                    href={linkItem.link}
                    key={index}
                    className="inline-flex h-full items-center justify-center rounded-lg bg-blue-400 py-4 text-3xl font-normal text-black shadow-lg shadow-blue-950 hover:bg-blue-900 hover:text-blue-100"
                  >
                    {linkItem.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
