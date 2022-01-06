import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { v4 as uuidv4 } from 'uuid';
import { useStateValue } from '../Overview/store/StateProvider';

export default function SelectQty({ qtyArr, item, darkTheme }) {
  //const [selectedQty, setSelectedQty] = React.useState(item.quantity);
  const [{ basket, selected }, dispatch] = useStateValue();
  const handleSelectQty = (qty) => {
    //qty===4
    let newBasket = [...basket];
    for (let i = 0; i < newBasket.length; i++) {
      if (newBasket[i].id === item.id && newBasket[i].size === item.size) {
        newBasket[i].quantity = qty;
        // newBasket[i].originalPrice = qty * item.originalPrice;
        // newBasket[i].salePrice = qty * item.salePrice;
        newBasket[i].totalPrice = qty * (item.salePrice || item.originalPrice);
      }
    }

    dispatch({
      type: 'REPLACE_BASKET',
      item: newBasket,
    });
  };

  return (
    <DropdownButton
      id='dropdown-basic-button qty'
      variant={darkTheme ? 'outline-light' : 'outline-secondary'}
      title={item.quantity}
      size='sm'
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
                className={darkTheme && 'dropdown-item-dark'}
              >
                {qty}
              </Dropdown.Item>
            );
          }
        })}
    </DropdownButton>
  );
}
