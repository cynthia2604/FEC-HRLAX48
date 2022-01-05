import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { v4 as uuidv4 } from "uuid";

export default function SelectQty({ qtyArr, item, darkTheme }) {
  const [selectedQty, setSelectedQty] = React.useState(item.quantity);

  return (
    <DropdownButton
      id="dropdown-basic-button qty"
      variant={darkTheme ? "outline-light" : "outline-secondary"}
      title={selectedQty}
    >
      {qtyArr &&
        qtyArr.map((qty) => {
          if (qty <= 15) {
            return (
              <Dropdown.Item
                onClick={() => {
                  setSelectedQty(qty);
                }}
                key={uuidv4()}
                className={darkTheme && "dropdown-item-dark"}
              >
                {qty}
              </Dropdown.Item>
            );
          }
        })}
    </DropdownButton>
  );
}
