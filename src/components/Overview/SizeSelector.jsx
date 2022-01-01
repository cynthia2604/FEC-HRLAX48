import React from "react";
import { useStateValue } from "./store/StateProvider";

export default function SizeSelector({ sku }) {
  const [{ selected }, dispatch] = useStateValue();

  const handleDisplay = () => {
    dispatch({
      type: "ADD_TO_SELECTED",
      item: {
        size: sku.size,
        quantity: 1,
        id: sku.id,
        stockQuantity: sku.quantity,
        stockQuantityArr: [...Array(sku.quantity + 1).keys()].slice(1),
      },
    });
  };

  return (
    <div className="dropdown-item" onClick={handleDisplay}>
      {sku.quantity !== null ? sku.size : null}
    </div>
  );
}
