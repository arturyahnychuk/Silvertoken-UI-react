import { useState } from "react";
import { SelectBox } from "../select/selectBox";
import ETHCoin from "../../assets/images/coins/ethereum.svg";
import PolygonCoin from "../../assets/images/coins/polygon.svg";

export function ExchangeItem({
  options,
  type,
  amount,
  value,
  selectedOption,
  activeFilter,
  isSwitched,
  onChange,
  onExchangeFilterChange
}) {

  const [val, setVal] = useState(value ? value : "");

  const handleInput = (e) => {
    // Remove non-numeric characters
    const numericValue = e.target.value.replace(/[^0-9.]/g, "");
    setVal(numericValue);
  };
  const handleChange = (selectedOption) => {
    if (onChange) {
      onChange(selectedOption);
    }
    if (onExchangeFilterChange) {
      onExchangeFilterChange(selectedOption);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full rounded-lg bg-gray-300 border border-gray-600 p-4">
      <div className="w-full flex items-center justify-between">
        {activeFilter === "swap" ? (
          <>
            <p className="font-mainRegular text-xs text-textSecondary">
              {type}
            </p>
          </>
        ) : (
          <>
            <div className="flex items-center gap-4">
              <p className="font-mainRegular text-xs text-textSecondary">
                {type}
              </p>
              {type === "Send" && isSwitched === false ? (
                <div className="flex items-center gap-2">
                  <img src={PolygonCoin} className="w-full max-w-[18px]" />
                  <p>Polygon</p>
                </div>
              ) : type === "Send" && isSwitched === true ? (
                <div className="flex items-center gap-2">
                  <img src={ETHCoin} className="w-full max-w-[18px]" />
                  <p>Ethereum</p>
                </div>
              ) : type === "Receive" && isSwitched === false ? (
                <div className="flex items-center gap-2">
                  <img src={ETHCoin} className="w-full max-w-[18px]" />
                  <p>Ethereum</p>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <img src={PolygonCoin} className="w-full max-w-[18px]" />
                  <p>Polygon</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-between">
        <input
          onInput={handleInput}
          value={val}
          className="w-[100px] border-transparent bg-transparent outline-none placeholder:text-textSecondary text-textPrimary font-mainSemibold text-2xl"
          placeholder="0"
          type="text"
        />
        <SelectBox
          options={options}
          selected={options[selectedOption]}
          rounded={true}
          placeholder="Select Token"
          onExchangeFilterChange={handleChange}
        />
      </div>
    </div>
  );
}
