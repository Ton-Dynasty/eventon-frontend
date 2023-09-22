import React, { useState } from 'react';
import Image from '../assets/subscibe.jpg';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { Address, beginCell, toNano } from '@ton/ton';

const Protocol = () => {
  const [tonConnectUI] = useTonConnectUI();
  const deadline = Math.floor(Date.now() / 1000) + 3600;
  const universalRouterAddress = Address.parse('kQA0XSCioq2wv_YlebEFJysRiUxzQ2MIAu2OPFPAgl_YD9Fb'); // TODO: add address
  const userDefaultCallbackAddress = Address.parse('kQA0XSCioq2wv_YlebEFJysRiUxzQ2MIAu2OPFPAgl_YD9Fb'); // TODO: add address
  const [showToast, setShowToast] = useState(false);
  const handleClick = async () => {
    setInterval(() => {
      setShowToast(true);
    }, 3000);
    if (!tonConnectUI.connected) {
      alert('Please connect to wallet');
      return;
    }
    const body = beginCell()
      .storeUint(1953340414, 32)
      .storeAddress(tonConnectUI.account.address)
      .storeInt(deadline, 257)
      .storeInt(0, 257)
      .storeRef(beginCell().storeAddress(userDefaultCallbackAddress).endCell())
      .endCell();

    await tonConnectUI.sendTransaction({
      validUntil: deadline,
      messages: [
        {
          address: universalRouterAddress.toRawString(),
          amount: toNano(0.5),
          payload: body.toBoc().toString('base64'),
        },
      ],
    });

  };
  const SuccessMessage = () => {
    if (showToast) {
      return (<div className="toast toast-bottom toast-end">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>)
      }
    
    }
  const cards = [
    {
      image: Image,
      title: 'Subscribe as a protocol',
      description: 'Provide a signal and earn',
    },
  ];

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
              <div className=" chat-bubble  bg-blue-800">Let me subscribe bro!!</div>
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
        {cards.map((card, idx) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={`carditem-${idx}`}>
            <figure>
              <img src={card.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary text-lg" onClick={() => handleClick()}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SuccessMessage />
    </div>
  );
}

export default Protocol;
