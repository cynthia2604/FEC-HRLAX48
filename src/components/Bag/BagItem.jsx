import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SelectQty from './SelectQty';

export default function BagItem({
  item,
  deleteCartItem,
  setView,
  setSelectedProduct,
  products,
  darkTheme,
  basket,
}) {
  const handleProduct = () => {
    for (var product of products) {
      if (item.productId === product.id) {
        setSelectedProduct(product);
        setView('detail');
      }
    }
  };

  return (
    <Row>
      <Col>
        <img
          src={item.thumbnail}
          height='120px'
          width='120px'
          style={{ objectFit: 'cover' }}
          type='button'
          onClick={handleProduct}
        ></img>
      </Col>
      <Col xs={5}>
        <b>
          <div type='button' onClick={handleProduct}>
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
        <div style={{ textAlign: 'end' }}>
          {item &&
            `${item.quantity} x $${
              item.salePrice ? item.salePrice : item.originalPrice
            } -> $${item.itemTotal}`}
        </div>
        <DeleteOutlineIcon
          key={item.id}
          style={{ float: 'right' }}
          onClick={() => {
            deleteCartItem(item.id);
          }}
          type='button'
        />
      </Col>
      <hr className='mt-3'></hr>
    </Row>
  );
}
