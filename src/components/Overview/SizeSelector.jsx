import React from "react";

export default function SizeSelector({
  select,
  sku,
  setDisplay,
  setAvailableQty,
}) {
  const handleDisplay = () => {
    setDisplay({
      size: sku.size,
      quantity: 1,
      stockQuantity: sku.quantity,
    });
    setAvailableQty(sku.quantity);
  };

  return (
    <a className="dropdown-item" href="#" onClick={handleDisplay}>
      {sku.size}
    </a>
  );
}
