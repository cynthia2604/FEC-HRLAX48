import React from "react";
import { useStateValue } from "./store/StateProvider";
import Dropdown from "react-bootstrap/Dropdown";
import { v4 as uuidv4 } from "uuid";

export default function QuantityDropdown({ darkTheme }) {
  const [{ selected }, dispatch] = useStateValue();

  const handleDisplay = (qty) => {
    dispatch({
      type: "ADD_TO_SELECTED",
      item: {
        quantity: qty,
      },
    });
  };

  return (
    selected.stockQuantityArr &&
    selected.stockQuantityArr.map((qty) => {
      if (qty <= 15) {
        return (
          <Dropdown.Item
            onClick={() => {
              handleDisplay(qty);
            }}
            key={uuidv4()}
            className={darkTheme && "dropdown-item-dark"}
          >
            {qty}
          </Dropdown.Item>
        );
      }
    })
  );
}
