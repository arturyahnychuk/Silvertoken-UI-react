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
import { Info } from "../info/Info";

const ethereumSendOptions = [
  { value: "slvt", label: "SLVT", labelImage: SLVTCoin },  
  { value: "slvd", label: "SLVD", labelImage: SLVDCoin },
  { value: "usdc", label: "USDC", labelImage: USDCCoin },
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
  { value: "slvd", label: "SLVD", labelImage: SLVDCoin },  
  { value: "usdc", label: "USDC", labelImage: USDC2Coin },
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
                  value={0}
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
                  value={0}
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
              value={0}
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
              value={0}
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

      <div className="flex items-center mt-4">
        <p className="mx-auto font-mainRegular text-sm text-textSecondary text-center">
          Powered by Silver Token
        </p>
        <a href="http://silvertoken.com/widget-help" target="_blank">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.625 11.25C8.625 11.3736 8.58835 11.4945 8.51967 11.5972C8.451 11.7 8.35338 11.7801 8.23918 11.8274C8.12498 11.8747 7.99931 11.8871 7.87807 11.863C7.75683 11.8389 7.64547 11.7794 7.55806 11.6919C7.47065 11.6045 7.41113 11.4932 7.38701 11.3719C7.3629 11.2507 7.37527 11.125 7.42258 11.0108C7.46988 10.8966 7.54999 10.799 7.65277 10.7303C7.75555 10.6617 7.87639 10.625 8 10.625C8.16576 10.625 8.32473 10.6908 8.44195 10.8081C8.55916 10.9253 8.625 11.0842 8.625 11.25ZM8 4.625C6.6875 4.625 5.625 5.57812 5.625 6.75V7C5.625 7.09946 5.66451 7.19484 5.73484 7.26516C5.80516 7.33549 5.90055 7.375 6 7.375C6.09946 7.375 6.19484 7.33549 6.26517 7.26516C6.33549 7.19484 6.375 7.09946 6.375 7V6.75C6.375 5.99187 7.10375 5.375 8 5.375C8.89625 5.375 9.625 5.99187 9.625 6.75C9.625 7.50813 8.89625 8.125 8 8.125C7.90055 8.125 7.80516 8.16451 7.73484 8.23483C7.66451 8.30516 7.625 8.40054 7.625 8.5V9C7.625 9.09946 7.66451 9.19484 7.73484 9.26517C7.80516 9.33549 7.90055 9.375 8 9.375C8.09946 9.375 8.19484 9.33549 8.26517 9.26517C8.33549 9.19484 8.375 9.09946 8.375 9V8.84875C9.50688 8.6875 10.375 7.8075 10.375 6.75C10.375 5.57812 9.3125 4.625 8 4.625ZM14.375 8C14.375 9.26086 14.0011 10.4934 13.3006 11.5418C12.6001 12.5901 11.6045 13.4072 10.4396 13.8897C9.27473 14.3722 7.99293 14.4985 6.7563 14.2525C5.51967 14.0065 4.38376 13.3994 3.4922 12.5078C2.60064 11.6162 1.99348 10.4803 1.7475 9.2437C1.50152 8.00707 1.62776 6.72527 2.11027 5.56039C2.59278 4.39551 3.40988 3.39988 4.45824 2.69938C5.50661 1.99889 6.73915 1.625 8 1.625C9.69015 1.62698 11.3105 2.29927 12.5056 3.49439C13.7007 4.6895 14.373 6.30985 14.375 8ZM13.625 8C13.625 6.88748 13.2951 5.79994 12.677 4.87492C12.0589 3.94989 11.1804 3.22892 10.1526 2.80318C9.12476 2.37743 7.99376 2.26604 6.90262 2.48308C5.81148 2.70012 4.8092 3.23585 4.02253 4.02252C3.23586 4.80919 2.70013 5.81147 2.48309 6.90262C2.26604 7.99376 2.37744 9.12476 2.80318 10.1526C3.22892 11.1804 3.94989 12.0589 4.87492 12.677C5.79995 13.2951 6.88748 13.625 8 13.625C9.49134 13.6233 10.9211 13.0302 11.9757 11.9756C13.0302 10.9211 13.6233 9.49134 13.625 8Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
