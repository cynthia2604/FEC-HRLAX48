import React from "react";
import BagItems from "./Bag/BagItems";

export default function checkout({
  basket,
  dispatch,
  darkTheme,
  setView,
  setSelectedProduct,
  products,
}) {
  return (
    <BagItems
      basket={basket}
      dispatch={dispatch}
      darkTheme={darkTheme}
      setView={setView}
      setSelectedProduct={setSelectedProduct}
      products={products}
    />
  );
}
