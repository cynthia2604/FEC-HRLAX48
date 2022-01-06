import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SelectQty from './SelectQty';
import { useStateValue } from '../Overview/store/StateProvider';

export default function BagItem({
  item,
  deleteCartItem,
  setView,
  setSelectedProduct,
  products,
  darkTheme,
}) {
  const [{ basket, selected }, dispatch] = useStateValue();
  const handleProduct = () => {
    for (var product of products) {
      if (item.productId === product.id) {
        dispatch({
          type: 'ADD_TO_SELECTED',
          item: item,
        });
        setSelectedProduct(product);
        setView('detail');
      }
    }
  };

  function itemTotal() {
    if (item.quantity > 1) {
      return `(${item.quantity} x $${
        item.salePrice ? item.salePrice : item.originalPrice
      }) » $${item.itemTotal}`;
    } else {
      return `$${item.itemTotal}`;
    }
  }

  return (
    <Row>
      <Col>
        <img
          src={item.thumbnail}
          height='120px'
          width='120px'
          style={{ objectFit: 'cover' }}
          className='cP'
          onClick={handleProduct}
        ></img>
      </Col>
      <Col xs={5}>
        <b>
          <div className='cP' onClick={handleProduct}>
            {item.name}
          </div>
        </b>
        <div>{item.color}</div>
        <div>{`Size ${item.size}`}</div>
        <div className='mt-2'>
          <SelectQty
            qtyArr={item.stockQuantityArr}
            item={item}
            darkTheme={darkTheme}
          />
        </div>
      </Col>
      <Col>
        <div style={{ textAlign: 'end' }}>{item && itemTotal()}</div>
        <DeleteOutlineIcon
          key={item.id}
          style={{ float: 'right' }}
          onClick={() => {
            deleteCartItem(item.id);
          }}
          className='cP'
        />
      </Col>
      <hr className='mt-3'></hr>
    </Row>
  );
}
