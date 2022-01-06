import React from 'react';
import BagItem from './BagItem';
import Summary from './Summary';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import { useStateValue } from '../Overview/store/StateProvider';

export default function BagItems({
  darkTheme,
  setView,
  setSelectedProduct,
  products,
}) {
  const [{ basket, selected }, dispatch] = useStateValue();

  const deleteCartItem = (id) => {
    const filtered = basket.filter((item) => item.id !== id);
    dispatch({
      type: 'REPLACE_BASKET',
      item: filtered,
    });
  };
  const handleBack = () => {
    if (!Object.keys(selected).length) {
      setView('catalogue');
    } else {
      setView('detail');
    }
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h4 className='mb-4'>Bag</h4>
          {basket.length ? (
            basket.map((item) => {
              return (
                <BagItem
                  key={uuidv4()}
                  item={item}
                  deleteCartItem={deleteCartItem}
                  setView={setView}
                  setSelectedProduct={setSelectedProduct}
                  products={products}
                  darkTheme={darkTheme}
                  basket={basket}
                />
              );
            })
          ) : (
            <>
              <div style={{ color: 'grey' }}>
                -- Your Bag is Currently Empty --
              </div>
              <Button
                variant={darkTheme ? 'outline-light' : 'outline-secondary'}
                className='mt-4'
                onClick={handleBack}
              >
                Back
              </Button>
            </>
          )}
        </Col>
        <Col className='ms-5'>
          <h4 className='mb-4'>Summary</h4>
          <Summary basket={basket} darkTheme={darkTheme} />
        </Col>
      </Row>
    </Container>
  );
}
