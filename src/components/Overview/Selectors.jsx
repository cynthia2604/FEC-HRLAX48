import React from "react";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import { v4 as uuidv4 } from "uuid";

export default function Selectors({
  select,
  skus,
  setAvailableQty,
  availableQty,
}) {
  const [qtyArray, setQtyArray] = React.useState([]);
  const [display, setDisplay] = React.useState({
    size: "Select Size",
    quantity: 1,
    stockQuantity: null,
  });

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
    if (select === "quantity") {
      return (
        <QuantitySelector
          key={uuidv4()}
          quantity={qty}
          setDisplay={setDisplay}
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
          className="btn btn-light dropdown-toggle "
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {console.log(
            "select:",
            select,
            "size:",
            display.size,
            "quan:",
            display.quantity
          )}
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
