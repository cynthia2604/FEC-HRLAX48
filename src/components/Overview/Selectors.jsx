import React from "react";
import SelectorContent from "./SelectorContent";

export default function Selectors({ select, skus }) {
  const getSku = () => {
    let result = [];
    for (var keys in skus) {
      result.push({ quantity: skus[keys].quantity, size: skus[keys].size });
    }
    return result;
  };

  const skuElement = getSku().map((sku) => {
    return (
      <SelectorContent
        select={select}
        size={sku.size}
        quantity={sku.quantity}
      />
    );
  });

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
          {select === "size" ? "Select Size" : "1"}
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {skus && skuElement}
        </div>
      </div>
    </span>
  );
}

// skus.map((sku) => (
//   <SelectorContent
//     select={select}
//     size={sku.size}
//     quantity={sku.quantity}
//   />
// ))
