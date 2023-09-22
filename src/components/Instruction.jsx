import React from 'react';
import { FaYoutube, FaGithub, FaBook } from 'react-icons/fa';
import Image from '../assets/coin.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Banner = () => {
  const eventSignalCode = `import "@stdlib/ownable";

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
  }`;
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
            <h2 className="font-bold text-5xl">
              Customize <br />
              <span className=" text-blue-600">event signal</span>
            </h2>
            <div className="text-2xl text-black">
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
            <pre data-prefix="$">
              <code>{eventSignalCode}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
