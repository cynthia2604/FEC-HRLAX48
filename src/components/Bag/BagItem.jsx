import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BagItem({ item }) {
  return (
    <Container>
      <Row>
        <Col>
          <img src={item.thumbnail}></img>
        </Col>
        <Col>
          <div>{item.color}</div>
          <div>{item.salePrice || item.originalPrice}</div>
          <div>{item.size}</div>
          <div>{item.quantity}</div>
        </Col>
      </Row>
    </Container>
  );
}
