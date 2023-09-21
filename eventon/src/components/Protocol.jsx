import React from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
import Image from "../assets/subscibe.jpg";

const Protocol = () => {
  return (
    <div id="protocol" className="container mx-auto  min-h-screen">
      <div className=" hero min-h-max rounded-lg bg-slate-300/20 p-4 shadow-2xl shadow-blue-400">
        <div className="hero-content w-full justify-between rounded-lg sm:flex-row-reverse">
          <div className="hidden min-w-max sm:block">
            <div className="chat chat-start">
              <div className="chat-bubble bg-blue-600">
                Hi <br />I have a new b signal.
              </div>
            </div>
            <div className="chat chat-end">
              <div className=" chat-bubble  bg-blue-800">
                Let me subscribe bro!!
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Events on TON</h1>
            <p className="py-6">message is all u need</p>
            <button className="btn btn-primary text-lg">Build a de-bot</button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-row gap-8">
        <button className="btn btn-primary">Popular</button>
        <button className="btn btn-neutral">Official</button>
      </div>
      <div className="mt-6 flex gap-x-2">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Subscribe as a protocol</h2>
            <p>Provide a signal and earn</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-lg">GO</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Subscribe as a protocol</h2>
            <p>Provide a signal and earn</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-lg">GO</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Subscribe as a protocol</h2>
            <p>Provide a signal and earn</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-lg">GO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protocol;
