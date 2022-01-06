import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../Overview/store/StateProvider";

export default function SelectQty({ qtyArr, item, darkTheme }) {
  //const [selectedQty, setSelectedQty] = React.useState(item.quantity);
  const [{ basket, selected }, dispatch] = useStateValue();
  const handleSelectQty = (qty) => {
    //qty===4
    let newBasket = basket;
    for (var bagItem of basket) {
      if (item.id === bagItem.id && item.size === bagItem.size) {
        newBasket.quantity = qty;
        newBasket.originalPrice = qty * bagItem.originalPrice;
        newBasket.salePrice = qty * bagItem.salePrice;
      }
    }
    dispatch({
      type: "REPLACE_BASKET",
      item: newBasket,
    });
  };

  return (
    <DropdownButton
      id="dropdown-basic-button qty"
      variant={darkTheme ? "outline-light" : "outline-secondary"}
      title={item.quantity}
      size="sm"
    >
      {qtyArr &&
        qtyArr.map((qty) => {
          if (qty <= 15) {
            return (
              <Dropdown.Item
                onClick={() => {
                  handleSelectQty(qty);
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
