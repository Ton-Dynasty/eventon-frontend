import React, { useEffect, useState } from 'react';
import { FaYoutube, FaGithub, FaBook } from 'react-icons/fa';
import Image from '../assets/coin.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
// import '../styles/default.css';
import '../styles/shiki.css';
import { highlightTactCode } from '../utils/highlighter';

const Banner = () => {
  const [eventSignalCode, setEventSignalCode] = useState('');
  const [registerCode, setRegisterCode] = useState('');
  async function fetchData() {
    let result = await highlightTactCode(`
    import "@stdlib/ownable";
  
    trait Alertable with Ownable {
        owner: Address;
        universalRouterAddress: Address;
        eventId: Int; // Event id of this protocol
    
        // Send event signal to Universal Router so that it can be broadcasted to subscribers
        fun sendAlert(msg: EventSignal) {
            send(SendParameters{
                to: self.universalRouterAddress, 
                value: 0,
                bounce: false,
                mode: SendRemainingValue,
                body: EventSignal{ 
                    eventId: msg.eventId, // This is protocol's event signal id, it can let one protocol to have multiple event signals(not implemented yet)
                    payload: msg.payload // Information about the event signal
                }.toCell()
            });
        }
    }`);
    let html = parse(result);
    setEventSignalCode(html);
    result = await highlightTactCode(`
    trait Alertable with Ownable {
      owner: Address;
      universalRouterAddress: Address;
      eventId: Int; // Event id of this protocol
      // Register protocol to Universal Router
      receive(msg : EventSourceRegister) {
          self.requireOwner();
          send(SendParameters{
              to: self.universalRouterAddress, 
              value: 0, 
              bounce: false,
              mode: SendRemainingValue, 
              body: ProtcolRegister{ 
                  sourceAddress: myAddress(), // Protocol's address
                  template: msg.template, // Callback contract for subscribers
                  maxUserStakeAmount: msg.maxUserStakeAmount, // Maximum amount of stake that a user can stake for the protocol
                  subscribeFeePerTick: msg.subscribeFeePerTick, // Amount of fee that a subscriber has to pay for each tick
                  sourceName: msg.sourceName // Protocol's name
              }.toCell()
          });
      }
  }`);
    html = parse(result);
    setRegisterCode(html);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh]" id="instruction">
      <div className="container mx-auto flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-4 mt-12">
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="lg:col-span-1 gap-4 col-span-2 flex flex-col items-start justify-center"
          >
            <h2 className="font-bold text-4xl font-primary">
              Customize <br />
              <span className=" text-blue-600">event signal</span>
            </h2>
            <div className="text-xl text-black">
              By simply inheriting from alertable and filling in the message payload, you can send any event signal to
              the subscriber's contract.
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="lg:col-span-1 col-span-2 mockup-code text-sm"
          >
            {registerCode}
          </motion.div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12">
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="lg:col-span-1 gap-4 col-span-2 flex flex-col items-start justify-center"
          >
            <h2 className="font-bold text-4xl font-primary">
              Provide <br />
              <span className=" text-blue-600">to Earn</span>
            </h2>
            <div className="text-xl text-black">By providing signals to earn subscribes' fee.</div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="lg:col-span-1 col-span-2 mockup-code text-sm"
          >
            {eventSignalCode}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
