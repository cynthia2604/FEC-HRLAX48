import React from "react";

export default function QuantitySelector({ size, quantity, setDisplay }) {
  const handleDisplay = () => {
    setDisplay({
      size: size,
      quantity: quantity,
    });
  };

  return (
    <div className="dropdown-item" onClick={handleDisplay}>
      {quantity}
    </div>
  );
}
