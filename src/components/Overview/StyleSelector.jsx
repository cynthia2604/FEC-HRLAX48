import React from "react";
import QuantitySelector from "./QuantitySelector";
import SizeSelector from "./SizeSelector";

export default function StyleSelector({ productStyles }) {
  return (
    <span className="pd__selector">
      <SizeSelector />
      <QuantitySelector />
    </span>
  );
}
