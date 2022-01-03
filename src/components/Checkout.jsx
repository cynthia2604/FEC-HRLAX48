import React from "react";
import BagItems from "./Bag/BagItems";

export default function checkout({ basket, dispatch, darkTheme }) {
  return <BagItems basket={basket} dispatch={dispatch} darkTheme={darkTheme} />;
}
