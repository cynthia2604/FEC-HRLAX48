import React from "react";
import { useStateValue } from "./store/StateProvider";
import Dropdown from "react-bootstrap/Dropdown";

export default function SizeDropdown() {
  const [{ selected }, dispatch] = useStateValue();

  const handleDisplay = (sku) => {
    dispatch({
      type: "ADD_TO_SELECTED",
      item: {
        size: sku.size,
        quantity: 1,
        id: sku.id,
        stockQuantity: sku.quantity,
        stockQuantityArr: [...Array(sku.quantity + 1).keys()].slice(1),
        disabled: false,
      },
    });
  };

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
  };

  return getSku().map((sku) => {
    return (
      <Dropdown.Item
        onClick={() => {
          handleDisplay(sku);
        }}
        sku={sku.size}
        key={sku.id}
      >
        {selected.quantity !== null ? sku.size : null}
      </Dropdown.Item>
    );
  });
}
