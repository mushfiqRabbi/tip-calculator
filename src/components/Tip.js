import React from "react";
import InputField from "./InputField";

export default function Tip({ amount, selected, setSelected }) {
  if (amount !== "custom") {
    return <InputField type="small" amount={amount}></InputField>;
  } else {
    return <InputField type="small-custom"></InputField>;
  }
}
