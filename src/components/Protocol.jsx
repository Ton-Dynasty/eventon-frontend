import React, { useState } from 'react';
import Image from '../assets/subscibe.jpg';
import { useTonConnectUI, useTonAddress } from '@tonconnect/ui-react';
import { Address, beginCell, toNano } from '@ton/ton';

const Protocol = () => {
  const [tonConnectUI] = useTonConnectUI();
  const userAddress = useTonAddress(true);
  const deadline = Math.floor(Date.now() / 1000) + 3600;
  const universalRouterAddress = Address.parse('EQDgHbzuBG3bXP_0R_XEqc4nhcS7fwA2zR4VDeAaP4AcdUa2'); // TODO: add address
  const userDefaultCallbackAddress = Address.parse('EQAFcgv5ieBtRg-7G842_WU5xPxLLhrRNSPFpKzz7INDoEmR'); // TODO: add address
  const [showToast, setShowToast] = useState(false);
  console.log(userAddress);
  setInterval(() => {
    setShowToast(true);
  }, 3000);
  const handleClick = async () => {
    if (!tonConnectUI.connected || !userAddress) {
      alert('Please connect to wallet');
      return;
    }
    const body = beginCell()
      .storeUint(1953340414n, 32)
      .storeAddress(Address.parse(userAddress))
      .storeInt(deadline, 257)
      .storeInt(0n, 257)
      .storeRef(beginCell().storeAddress(userDefaultCallbackAddress).endCell())
      .endCell();

    await tonConnectUI.sendTransaction({
      validUntil: deadline,
      messages: [
        {
          address: universalRouterAddress.toRawString(),
          amount: toNano(0.5).toString(),
          payload: body.toBoc().toString('base64'),
        },
      ],
    });
  };
  const SuccessMessage = () => {
    if (showToast) {
      return (
        <div className="toast toast-bottom toast-end">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      );
    }
  };
  const cards = [
    {
      image: Image,
      title: 'PROracle',
      description: 'Send price signal of TONCOIN/USDC',
    },
  ];
  const forms = [
    {
      name: 'Name',
      placeholder: 'PROracle',
    },
    {
      name: 'Description',
      placeholder: 'Send price signal of TONCOIN/USDC',
    },
    {
      name: 'Provider address',
      placeholder: 'EQB_IbNTgL7I1pcVTOn_hpu90k2glmf9e1B17u55W4_eeKxe',
    },
    {
      name: 'Max user stake amount',
      placeholder: '100',
    },
    {
      name: 'Subscriber fee per tick',
      placeholder: '0.5',
    },
  ];
  const BuildForm = () => {
    return (
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-3xl">Register to become a provider</h3>
          <p className="py-4">
            Make sure your contract have inherited <span className="text-red-600 font-semibold">Alertable</span>{' '}
            interface!
          </p>
          <div className="modal-action mt-0">
            <form method="dialog" className="w-full">
              <div className="form-control flex flex-col gap-4">
                {forms.map((form, idx) => (
                  <div className="">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">{form.name}</span>
                    </label>
                    <input
                      type="text"
                      placeholder={form.placeholder}
                      className="input input-bordered w-full"
                      key={`formitem-${idx}`}
                    />
                  </div>
                ))}
              </div>
              {/* if there is a button in form, it will close the modal */}
              <div className="flex justify-end gap-3">
                <button className="btn mt-5 bg-blue-200 hover:bg-blue-300 text-xl">Close</button>
                <button className="btn mt-5 bg-blue-600 hover:bg-blue-400 text-xl text-white">Send</button>
              </div>
              {/* Bot name, description, address, user callback template or not */}
            </form>
          </div>
        </div>
      </dialog>
    );
  };
  return (
    <div id="protocol" className="container mx-auto  min-h-screen">
      <div className=" hero min-h-max rounded-lg bg-slate-300/20 p-4 shadow-2xl shadow-blue-400">
        <div className="hero-content w-full justify-between rounded-lg sm:flex-row-reverse">
          <div className="hidden min-w-max sm:block font-medium">
            <div className="chat chat-start">
              <div className="chat-bubble bg-blue-600 ">
                GM! <br />I have a contract bug detection signal.
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble  bg-blue-800">Let me subscribe BRO!!</div>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Events on TON</h1>
            <p className="py-6">Provide signal to Earn</p>
            <button
              className="btn btn-primary text-lg"
              onClick={() => document.getElementById('my_modal_1').showModal()}
            >
              Build a de-bot
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-row gap-8">
        <button className="btn bg-blue-700 text-white hover:bg-blue-500 border-none text-lg font-base">Popular</button>
        <button className="btn btn-neutral  text-lg font-base">Official</button>
      </div>
      <div className="mt-6 flex gap-x-2">
        {cards.map((card, idx) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={`carditem-${idx}`}>
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
      <BuildForm />
    </div>
  );
};

export default Protocol;
