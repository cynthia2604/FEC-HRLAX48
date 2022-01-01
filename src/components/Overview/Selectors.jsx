import React from "react";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import { v4 as uuidv4 } from "uuid";

export default function Selectors({ select, selected }) {
  const getSku = () => {
    let result = [];
    for (var key in selected.skus) {
      let current = selected.skus[key];
      result.push({
        id: key,
        quantity: current.quantity,
        size: current.size,
      });
    }
    return result;
    ß;
  };

  const skuElement = getSku().map((sku) => {
    if (select === "size") {
      return <SizeSelector sku={sku} key={uuidv4()} />;
    }
  });

  const qtyElement =
    selected.stockQuantityArr &&
    selected.stockQuantityArr.map((qty) => {
      if (select === "quantity" && qty <= 15) {
        return (
          <QuantitySelector
            key={uuidv4()}
            quantity={qty}
            size={selected.size}
          />
        );
      }
    });

  const handleDropdown = () => {
    if (select === "size") {
      return selected.size;
    } else {
      for (var key in selected.skus) {
        if (key === "null") {
          return "Out of Stock";
        }
      }
    }

    return selected.quantity;
  };

  return (
    <span className="pd__box d-inline">
      <div
        className={
          select === "size"
            ? "dropdown show btn-group size mt-4"
            : "dropdown show btn-group quantity mt-4"
        }
      >
        <button
          className={
            select === "size" || selected.size === "Select Size"
              ? `btn btn-outline-secondary dropdown-toggle`
              : `btn btn-outline-secondary dropdown-toggle disabled`
          }
          type="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {handleDropdown()}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {skuElement}
          {qtyElement}
        </div>
      </div>
    </span>
  );
}
