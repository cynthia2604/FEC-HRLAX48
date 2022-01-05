import React from "react";
import BagItem from "./BagItem";
import Summary from "./Summary";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { v4 as uuidv4 } from "uuid";

export default function BagItems({ basket, dispatch, darkTheme, setView }) {
  const deleteCartItem = (id) => {
    const filtered = basket.filter((item) => item.id !== id);
    dispatch({
      type: "REPLACE_BASKET",
      item: filtered,
    });
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h4 className="mb-4">Bag</h4>
          {basket.length ? (
            basket.map((item) => {
              return (
                <BagItem
                  key={uuidv4()}
                  item={item}
                  deleteCartItem={deleteCartItem}
                  setView={setView}
                />
              );
            })
          ) : (
            <div style={{ color: "grey" }}>
              -- Your Bag is Currently Empty --
            </div>
          )}
        </Col>
        <Col className="ms-5">
          <h4 className="mb-4">Summary</h4>
          <Summary basket={basket} darkTheme={darkTheme} />
        </Col>
      </Row>
    </Container>
  );
}
