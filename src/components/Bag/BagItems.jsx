import React from "react";
import BagItem from "./BagItem";
import Summary from "./Summary";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BagItems({ bag, setBag }) {
  const deleteCartItem = (id) => {
    let items = JSON.parse(localStorage.getItem("bagItems"));
    items = items.filter((item) => item.id !== id);
    localStorage.setItem("bagItems", JSON.stringify(items));
    setBag(items);
  };
  return (
    <Container>
      <Row>
        <Col md={8}>
          <h4 className="mb-4">Bag</h4>
          {bag &&
            bag.map((item) => {
              return (
                <BagItem
                  key={item.id}
                  item={item}
                  deleteCartItem={deleteCartItem}
                />
              );
            })}
        </Col>
        <Col className="ms-5">
          <h4 className="mb-4">Summary</h4>
          <Summary bag={bag} />
        </Col>
      </Row>
    </Container>
  );
}
