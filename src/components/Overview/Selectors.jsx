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
    selectedQuantity: 1,
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
      return <QuantitySelector key={uuidv4()} quantity={qty} />;
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
    <span className="p-2">
      <div className="dropdown show">
        <a
          className="btn btn-light btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {select === "size" ? display.size : display.selectedQuantity}
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {skus && skuElement}
          {qtyElement}
        </div>
      </div>
    </span>
  );
}
