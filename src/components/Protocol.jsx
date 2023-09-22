import { useTonConnectUI, useTonAddress } from '@tonconnect/ui-react';
import { Address, beginCell, toNano } from '@ton/ton';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FiCopy } from 'react-icons/fi';
import { useState } from 'react';
const Protocol = () => {
  const [tonConnectUI] = useTonConnectUI();
  const userAddress = useTonAddress(true);
  const deadline = Math.floor(Date.now() / 1000) + 3600;
  const universalRouterAddress = Address.parse('EQDgHbzuBG3bXP_0R_XEqc4nhcS7fwA2zR4VDeAaP4AcdUa2'); // TODO: add address
  const userDefaultCallbackAddress = Address.parse('EQAFcgv5ieBtRg-7G842_WU5xPxLLhrRNSPFpKzz7INDoEmR'); // TODO: add address
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

    await tonConnectUI.sendTransaction(
      {
        validUntil: deadline,
        messages: [
          {
            address: universalRouterAddress.toRawString(),
            amount: toNano(0.5).toString(),
            payload: body.toBoc().toString('base64'),
          },
        ],
      },
      {
        modals: 'all',
        notifications: 'all',
      }
    );
  };
  const cards = [
    {
      title: 'PROracle',
      type: 'Official',
      description: 'Send price signal of TONCOIN/USDC',
      address: 'EQB_IbNTgL7I1pcVTOn_hpu90k2glmf9e1B17u55W4_eeKxe',
    },
    {
      title: 'BugDetector',
      type: 'Official',
      description: 'Detect contract bug and send signal',
      address: 'EQB_IbNTgL7I1pcVTOn_hpu90k2glmf9e1B17u55W4_eeKxe',
    },
    {
      title: 'CopyTrading',
      type: 'Popular',
      description: 'Copy trading signal from other trader',
      address: 'EQB_IbNTgL7I1pcVTOn_hpu90k2glmf9e1B17u55W4_eeKxe',
    },
    {
      title: 'Malicious-smart-contract-zkml',
      type: 'Official',
      description: 'Malicious Smart Contract Detection Bot V3',
      address: 'EQB_IbNTgL7I1pcVTOn_hpu90k2glmf9e1B17u55W4_eeKxe',
    },
    {
      title: 'AML',
      type: 'Popular',
      description: 'Anti Money Laundering Bot',
      address: 'EQB_IbNTgL7I1pcVTOn_hpu90k2glmf9e1B17u55W4_eeKxe',
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
  const [currentType, setCurrentType] = useState('Popular');
  const BuildForm = () => {
    return (
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box  text-black bg-white">
          <h3 className="font-bold text-3xl ">Register to become a provider</h3>
          <p className="py-4">
            Make sure your contract have inherited <span className="text-red-600 font-semibold">Alertable</span>{' '}
            interface!
          </p>
          <div className="modal-action mt-0">
            <form method="dialog" className="w-full">
              <div className="form-control flex flex-col gap-4">
                {forms.map((form, idx) => (
                  <div className="" key={`form-${idx}`}>
                    <label className="label">
                      <span className="label-text font-semibold text-lg text-black">{form.name}</span>
                    </label>
                    <input
                      type="text"
                      placeholder={form.placeholder}
                      className="input input-bordered w-full bg-white"
                      key={`formitem-${idx}`}
                    />
                  </div>
                ))}
              </div>
              {/* if there is a button in form, it will close the modal */}
              <div className="flex justify-end gap-3">
                <button className="btn mt-5 bg-blue-200 hover:bg-blue-300 text-xl text-black border-none">Close</button>
                <button className="btn mt-5 bg-blue-600 hover:bg-blue-400 text-xl text-white border-none">Send</button>
              </div>
              {/* Bot name, description, address, user callback template or not */}
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    );
  };
  return (
    <div id="protocol" className="container mx-auto  min-h-screen">
      <div className=" hero min-h-max rounded-lg bg-slate-300/20 p-4 shadow-2xl shadow-blue-400">
        <div className="hero-content w-full justify-between rounded-lg sm:flex-row-reverse">
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            className="hidden min-w-max sm:block font-medium"
          >
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              className="chat chat-start"
            >
              <div className="chat-bubble bg-blue-600 text-white">
                GM! <br />I have a contract bug detection signal.
              </div>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.6)} initial="hidden" whileInView={'show'} className="chat chat-end">
              <div className="chat-bubble  bg-blue-800 text-white">Let me subscribe BRO!!</div>
            </motion.div>
          </motion.div>
          <div>
            <motion.h1
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              whileInView={'show'}
              className="text-5xl font-bold"
            >
              Events on TON
            </motion.h1>
            <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} className="py-6">
              Provide signal to Earn
            </motion.p>
            <motion.button
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              className="btn btn-primary text-lg"
              onClick={() => document.getElementById('my_modal_1').showModal()}
            >
              Build a de-bot
            </motion.button>
          </div>
        </div>
      </div>
      <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        className="mt-6 flex flex-row gap-8"
      >
        <button
          className="btn bg-blue-700 text-white hover:bg-blue-500 border-none text-lg font-base"
          onClick={() => setCurrentType('Popular')}
        >
          Popular
        </button>
        <button
          className="btn btn-neutral text-lg  dark:text-blue-300 text-white font-base"
          onClick={() => setCurrentType('Official')}
        >
          Official
        </button>
      </motion.div>
      <div className="mt-6 grid gap-x-2 md:grid-cols-2 grid-cols-1 gap-4">
        {cards
          .filter((card) => card.type === currentType)
          .map((card, idx) => (
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView={'show'}
              className="card w-full gap-12 bg-white/50 shadow-xl col-span-1"
              key={`carditem-${idx}`}
            >
              <div className="card-body">
                <div className="flex">
                  <h2 className="text-2xl font-semibold flex-1">{card.title}</h2>
                  <div className="flex justify-center items-center gap-x-2">
                    <p className="truncate w-[128px] bg-black/10 text-black rounded-lg px-3">{card.address}</p>
                    <FiCopy className=" cursor-pointer" />
                  </div>
                </div>

                <p>{card.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary text-lg" onClick={() => handleClick()}>
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
      <BuildForm />
    </div>
  );
};

export default Protocol;
