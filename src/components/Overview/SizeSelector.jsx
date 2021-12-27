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
    <div className="dropdown-item" onClick={handleDisplay}>
      {sku.size}
    </div>
  );
}
