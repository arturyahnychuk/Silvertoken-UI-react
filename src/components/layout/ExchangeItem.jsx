import { useState } from "react";
import { SelectBox } from "../select/selectBox";

export function ExchangeItem({ options, type, amount, value, selectedOption }) {
  const [val, setVal] = useState(value ? value : "");

  const handleInput = (e) => {
    // Remove non-numeric characters
    const numericValue = e.target.value.replace(/[^0-9.]/g, "");
    setVal(numericValue);
  };

  return (
    <div className="flex flex-col gap-2 w-full rounded-lg bg-gray-300 border border-gray-600 p-4">
      <div className="w-full flex items-center justify-between">
        <p className="font-mainRegular text-xs text-textSecondary">{type}</p>
        <p className="font-mainRegular text-xs text-textSecondary">${amount}</p>
      </div>
      <div className="flex items-center justify-between">
        <input
          onInput={handleInput}
          value={val}
          className="w-[100px] border-transparent bg-transparent outline-none placeholder:text-textSecondary text-textPrimary font-mainSemibold text-2xl"
          placeholder="0"
          type="text"
        />
        <SelectBox options={options} rounded={true} placeholder="Select Token" />
      </div>
    </div>
  );
}
