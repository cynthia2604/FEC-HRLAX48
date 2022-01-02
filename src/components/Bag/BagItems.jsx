import React from "react";
import BagItem from "./BagItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BagItems({ bag }) {
  return (
    <Container>
      <Row>
        <Col>
          {bag &&
            bag.map((item) => {
              return <BagItem item={item} />;
            })}
        </Col>
        <Col>
          <h3>Checkout:</h3>
        </Col>
      </Row>
    </Container>
  );
}
