import { FilterBtn } from "../filters/filterBtn";
import { SelectBox } from "../select/selectBox";
import { ExchangeItem } from "./ExchangeItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EthereumCoin from "../../assets/images/coins/ethereum.svg";
import PolygonCoin from "../../assets/images/coins/polygon.svg";
import SwapVert from "../../assets/images/swap_vert.svg";
import { useState } from "react";

import SLVTCoin from "../../assets/images/coins/SLVT.svg";
import USDCCoin from "../../assets/images/coins/USDC.svg";
import USDC2Coin from "../../assets/images/coins/USDC2.svg";
import SLVDCoin from "../../assets/images/coins/SLVD.svg";
import MATICCoin from "../../assets/images/coins/MATIC.svg";

const ethereumSendOptions = [
  { value: "slvt", label: "SLVT", labelImage: SLVTCoin },
  { value: "usdc", label: "USDC", labelImage: USDCCoin },
  { value: "slvd", label: "SLVD", labelImage: SLVDCoin },
];
const ethereumReceiveOptions = [
  { value: "slvd", label: "SLVD", labelImage: SLVDCoin },
  { value: "usdc", label: "USDC", labelImage: USDCCoin },
];
const ethereumReceiveOptionsWhenSLVD = [
  { value: "slvt", label: "SLVT", labelImage: SLVTCoin },
  { value: "usdc", label: "USDC", labelImage: USDCCoin },
];
const ethereumReceiveOptionsSwap = [
  { value: "slvd", label: "SLVD", labelImage: SLVDCoin },
];
const ethereumReceiveOptionsWhenSLVT = [
  { value: "slvd", label: "SLVD", labelImage: SLVDCoin },
];
const polygonReceiveOptionsSwapWhenSLVT = [
  { value: "slvd", label: "SLVD", labelImage: SLVDCoin },
];
const polygonSendOptions = [
  { value: "slvt", label: "SLVT", labelImage: SLVTCoin },
  { value: "usdc", label: "USDC", labelImage: USDC2Coin },
  { value: "slvd", label: "SLVD", labelImage: SLVDCoin },
];
const polygonReceiveOptions = [
  { value: "slvd", label: "SLVD", labelImage: SLVDCoin },
  { value: "usdc", label: "USDC", labelImage: USDCCoin },
];
const polygonReceiveOptionsSwapWhenSLVD = [
  { value: "slvt", label: "SLVT", labelImage: SLVTCoin },
  { value: "usdc", label: "USDC", labelImage: USDCCoin },
];
const polygonReceiveOptionsSwap = [
  { value: "slvd", label: "SLVD", labelImage: SLVDCoin },
];
const bridgeSend = [{ value: "slvt", label: "SLVT", labelImage: SLVTCoin }];

export function ExchangeLayout() {
  const [switched, setSwitched] = useState(false);
  const handleSwitch = () => {
    if (switched) {
      setSwitched(false);
    } else {
      setSwitched(true);
    }
  };

  const options = [
    { value: "ethereum", label: "Ethereum", labelImage: EthereumCoin },
    { value: "polygon", label: "Polygon", labelImage: PolygonCoin },
  ];

  // swap options (Send)
  const [selectedOpt, setSelectedOpt] = useState(options[0].value);
  const handleChange = (selectedOption) => {
    setSelectedOpt(selectedOption.value);
  };

  const [activeFilter, setActiveFilter] = useState("swap");
  const [exchangeFilter, setExchangeFilter] = useState("");
  const handleFilter = (val) => {
    setActiveFilter(val);
  };
  const [receiveSelected, setReceiveSelected] = useState(0);
  const handleExchangeFilter = (val) => {
    setExchangeFilter(val);
  };

  const handleSubmit = () => {
    const message = "Your transaction was unsuccessful";
    const messageType = "error";
    const Msg = ({ closeToast, toastProps }) => (
      <div className="flex items-center justify-between">
        <p
          className={`${
            messageType === "success"
              ? "text-success"
              : messageType === "error"
              ? "text-error"
              : "text-black"
          } font-mainMedium text-xs`}
        >
          {message}
        </p>
        <button onClick={closeToast}>
          <svg
            className={
              messageType === "success"
                ? "fill-success"
                : messageType === "error"
                ? "fill-error"
                : "fill-black"
            }
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_11_531"
              masktype="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" />
            </mask>
            <g mask="url(#mask0_11_531)">
              <path d="M4.26671 12.6667L3.33337 11.7333L7.06671 8L3.33337 4.26666L4.26671 3.33333L8.00004 7.06666L11.7334 3.33333L12.6667 4.26666L8.93337 8L12.6667 11.7333L11.7334 12.6667L8.00004 8.93333L4.26671 12.6667Z" />
            </g>
          </svg>
        </button>
      </div>
    );
    toast(<Msg />, {
      type: messageType,
      icon: false,
      autoClose: 3000, // Close after 5 seconds
      closeOnClick: true, // Close on click
      closeButton: false, // Show a close button
      hideProgressBar: true,
      pauseOnHover: true,
    });
  };
  return (
    <div className="w-full max-w-[360px] bg-linearWhite p-6 border border-gray-200 rounded-2xl">
      <div className="w-full flex items-center justify-between">
        <ul className="flex items-center gap-4">
          <FilterBtn
            text="swap"
            activeFilter={activeFilter}
            onFilter={handleFilter}
          />
          <FilterBtn
            text="bridge"
            activeFilter={activeFilter}
            onFilter={handleFilter}
          />
        </ul>
        {activeFilter === "swap" ? (
          <SelectBox
            options={options}
            selected={options[0]}
            onChange={handleChange}
          />
        ) : (
          <></>
        )}
      </div>

      <div className="overflow-hidden">
        <ToastContainer />
      </div>

      <div className="relative w-full flex flex-col gap-2 mt-4 mb-2">
        {activeFilter === "swap" ? (
          <>
            {selectedOpt === "ethereum" ? (
              <>
                <ExchangeItem
                  activeFilter={activeFilter}
                  type="Send"
                  amount="0.00"
                  value={10}
                  options={ethereumSendOptions}
                  isSwitched={switched}
                  onExchangeFilterChange={handleExchangeFilter}
                />
              </>
            ) : (
              <>
                <ExchangeItem
                  activeFilter={activeFilter}
                  type="Send"
                  amount="0.00"
                  value={10}
                  options={polygonSendOptions}
                  isSwitched={switched}
                  onExchangeFilterChange={handleExchangeFilter}
                />
              </>
            )}
          </>
        ) : (
          <>
            <ExchangeItem
              activeFilter={activeFilter}
              type="Send"
              amount="0.00"
              value={10}
              options={bridgeSend}
              isSwitched={switched}
              onExchangeFilterChange={handleExchangeFilter}
            />
          </>
        )}

        {activeFilter === "bridge" ? (
          <div
            onClick={handleSwitch}
            className={`${
              selectedOpt === "ethereum" ? "bg-blue-300" : "bg-purple-300"
            } absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[32px] h-[32px] rounded-[12px] flex items-center justify-center cursor-pointer`}
          >
            <img src={SwapVert} alt="swap vertical" />
          </div>
        ) : (
          <></>
        )}

        {activeFilter === "swap" ? (
          <>
            {selectedOpt === "ethereum" ? (
              <>
                {activeFilter === "swap" ? (
                  <>
                    {exchangeFilter.value === "usdc" ? (
                      <ExchangeItem
                        activeFilter={activeFilter}
                        type="Receive"
                        amount="0.00"
                        value={0}
                        selectedOption={receiveSelected}
                        options={ethereumReceiveOptionsSwap}
                        isSwitched={switched}
                      />
                    ) : exchangeFilter.value === "slvd" ? (
                      <>
                        <ExchangeItem
                          activeFilter={activeFilter}
                          type="Receive"
                          amount="0.00"
                          value={0}
                          selectedOption={receiveSelected}
                          options={ethereumReceiveOptionsWhenSLVD}
                          isSwitched={switched}
                        />
                      </>
                    ) : (
                      <>
                        <ExchangeItem
                          activeFilter={activeFilter}
                          type="Receive"
                          amount="0.00"
                          value={0}
                          selectedOption={receiveSelected}
                          options={ethereumReceiveOptionsWhenSLVT}
                          isSwitched={switched}
                        />
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <ExchangeItem
                      activeFilter={activeFilter}
                      type="Receive"
                      amount="0.00"
                      value={0}
                      selectedOption={receiveSelected}
                      options={ethereumReceiveOptions}
                      isSwitched={switched}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                {activeFilter === "swap" ? (
                  <>
                    {exchangeFilter.value === "usdc" ? (
                      <>
                        <ExchangeItem
                          activeFilter={activeFilter}
                          type="Receive"
                          amount="0.00"
                          value={0}
                          selectedOption={receiveSelected}
                          options={polygonReceiveOptionsSwap}
                          isSwitched={switched}
                        />
                      </>
                    ) : exchangeFilter.value === "slvd" ? (
                      <>
                        <ExchangeItem
                          activeFilter={activeFilter}
                          type="Receive"
                          amount="0.00"
                          value={0}
                          selectedOption={receiveSelected}
                          options={polygonReceiveOptionsSwapWhenSLVD}
                          isSwitched={switched}
                        />
                      </>
                    ) : (
                      <>
                        <>
                          <ExchangeItem
                            activeFilter={activeFilter}
                            type="Receive"
                            amount="0.00"
                            selectedOption={receiveSelected}
                            value={0}
                            options={polygonReceiveOptionsSwapWhenSLVT}
                            isSwitched={switched}
                          />
                        </>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <ExchangeItem
                      activeFilter={activeFilter}
                      type="Receive"
                      amount="0.00"
                      value={0}
                      options={polygonReceiveOptions}
                      selectedOption={receiveSelected}
                      isSwitched={switched}
                    />
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <>
          <ExchangeItem
            activeFilter={activeFilter}
            type="Receive"
            amount="0.00"
            value={10}
            options={bridgeSend}
            isSwitched={switched}
            onExchangeFilterChange={handleExchangeFilter}
          />
        </>
        )}
      </div>

      <button
        onClick={handleSubmit}
        className={
          selectedOpt === "ethereum"
            ? "bg-blue-300 hover:bg-blue-600 active:bg-blue-900 border border-blue-600 w-full py-3 rounded-lg"
            : "bg-purple-300 hover:bg-purple-600 active:bg-purple-900 border border-purple-600 w-full py-3 rounded-lg"
        }
      >
        <p className="font-mainSemibold text-white">
          {activeFilter === "swap" ? "Swap" : "Bridge"}
        </p>
      </button>

      <p className="font-mainRegular text-sm text-textSecondary mt-4 text-center">
        Powered by Silver Token
      </p>
    </div>
  );
}
