import React from "react";

import Logo from "../assets/eventon-logo.png";
import { TonConnectButton } from "@tonconnect/ui-react";

const Header = () => {
  // const wallet = useTonWallet();

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img className="w-10" src={Logo} alt="" />
            <span className=" text-2xl font-bold text-blue-800">
              Even<span className=" text-blue-500">ton</span>
            </span>
          </a>
          <TonConnectButton></TonConnectButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
