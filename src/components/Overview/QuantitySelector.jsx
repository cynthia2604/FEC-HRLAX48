import React from "react";

export default function QuantitySelector({ size, quantity, setDisplay }) {
  const handleDisplay = () => {
    setDisplay({
      size: size,
      quantity: quantity,
    });
  };

  return (
    <a className="dropdown-item" href="#" onClick={handleDisplay}>
      {quantity}
    </a>
  );
}
