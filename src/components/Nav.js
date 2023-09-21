import React from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquareText, BsClipboard, BsFillLayersFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8">
      <div className="container mx-auto">
        {/* inner */}
        <div className="mx-auto flex h-[60px] w-full max-w-[460px] items-center justify-between rounded-full bg-black/20 px-5 text-2xl text-white/50 backdrop-blur-2xl">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsClipboard />
          </Link>
          <Link
            to="tx"
            className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsFillLayersFill />
          </Link>
          <Link
            to="work"
            className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
