import React from "react";

export default function QuantitySelector({ quantity, setDisplay }) {
  const handleDisplay = () => {
    setDisplay({
      quantity: quantity,
    });
  };

  return (
    <a className="dropdown-item" href="#" onClick={handleDisplay}>
      {quantity}
    </a>
  );
}
