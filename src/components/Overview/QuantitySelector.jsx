import React from "react";
import { useStateValue } from "./store/StateProvider";

export default function QuantitySelector({ size, quantity }) {
  const [{ selected }, dispatch] = useStateValue();

  const handleDisplay = () => {
    dispatch({
      type: "ADD_TO_SELECTED",
      item: {
        size: size,
        quantity: quantity,
      },
    });
  };

  return (
    <div className="dropdown-item" onClick={handleDisplay}>
      {quantity}
    </div>
  );
}
