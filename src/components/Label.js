import React from "react";

export default function Label({ label, htmlFor = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[#5e7a7d] text-lg inline-block mb-2 capitalize"
    >
      {label}
    </label>
  );
}
