import React from "react";
import Label from "./Label";

export default function InputField({
  label,
  src,
  type = "big",
  htmlFor,
  amount,
}) {
  if (type === "small-custom") {
    return (
      <input
        type="number"
        id={htmlFor}
        placeholder="custom"
        className="text-center capitalize bg-[#f4fafa] text-3xl w-full p-2 pr-4 rounded-md text-[#00494d] focus:outline-[#26c0ab]"
      />
    );
  } else if (type === "small") {
    return (
      <input
        readOnly
        type="text"
        value={`${amount}%`}
        className="bg-[#00494d] text-white
      text-center text-3xl p-2 rounded-md capitalize hover:bg-[#aaeee5] hover:text-[#00494d] cursor-pointer focus:outline-none focus:bg-[#26c0ab] focus:text-[#00494d]"
      />
    );
  } else {
    return (
      <div>
        <Label label={label} htmlFor={htmlFor}></Label>
        <div className="relative">
          <img src={src} alt="" className="absolute h-full p-4 pl-4" />
          <input
            type="number"
            id={htmlFor}
            placeholder="0"
            className="text-right bg-[#f4fafa] text-3xl w-full p-2 pr-4 rounded-md text-[#00494d] focus:outline-[#26c0ab]"
          />
        </div>
      </div>
    );
  }
}
