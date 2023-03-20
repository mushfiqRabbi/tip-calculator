import React from "react";
import { useState } from "react";
import Tip from "./Tip";

export default function Tips() {
  const [selected, setSelected] = useState("");
  return (
    <div className="grid grid-cols-2 gap-4">
      <Tip amount="5" selected={selected} setSelected={setSelected}></Tip>
      <Tip amount="10" selected={selected} setSelected={setSelected}></Tip>
      <Tip amount="15" selected={selected} setSelected={setSelected}></Tip>
      <Tip amount="25" selected={selected} setSelected={setSelected}></Tip>
      <Tip amount="50" selected={selected} setSelected={setSelected}></Tip>
      <Tip amount="custom"></Tip>
    </div>
  );
}
