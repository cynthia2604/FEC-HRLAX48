import React from "react";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import { v4 as uuidv4 } from "uuid";

export default function Selectors({
  select,
  skus,
  setAvailableQty,
  availableQty,
  setDisplay,
  display,
}) {
  const [qtyArray, setQtyArray] = React.useState([]);
  React.useEffect(() => {
    renderQuantity();
  }, [availableQty]);

  const getSku = () => {
    let result = [];
    for (var key in skus) {
      result.push({ quantity: skus[key].quantity, size: skus[key].size });
    }
    return result;
  };

  const skuElement = getSku().map((sku) => {
    if (select === "size") {
      return (
        <SizeSelector
          sku={sku}
          setQtyArray={setQtyArray}
          key={uuidv4()}
          setDisplay={setDisplay}
          setAvailableQty={setAvailableQty}
        />
      );
    }
  });

  const qtyElement = qtyArray.map((qty) => {
    if (select === "quantity" && qty <= 15) {
      return (
        <QuantitySelector
          key={uuidv4()}
          quantity={qty}
          setDisplay={setDisplay}
          size={display.size}
        />
      );
    }
  });

  const renderQuantity = () => {
    var qty = [];
    for (var i = 1; i <= availableQty; i++) {
      qty.push(i);
    }
    setQtyArray(qty);
  };

  return (
    <span>
      <div
        className={
          select === "size"
            ? "dropdown show btn-group pd__button-wide mt-4"
            : "dropdown show btn-group pd__button-narrow mt-4"
        }
      >
        <a
          className="btn btn-outline-secondary dropdown-toggle "
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {select === "size" ? display.size : display.quantity}
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {skuElement}
          {qtyElement}
        </div>
      </div>
    </span>
  );
}
