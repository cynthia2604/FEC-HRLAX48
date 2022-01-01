import React from "react";
import { useStateValue } from "./store/StateProvider";
import BagModal from "./BagModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collection from "./Collection";
import Alert from "react-bootstrap/Alert";

export default function AddToBag({ category, name }) {
  const [{ basket, selected }, dispatch] = useStateValue();
  const [show, setShow] = React.useState(false);

  const handleAdd = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: selected.id,
        color: selected.color,
        size: selected.size,
        quantity: selected.quantity,
        thumbnail: selected.thumbnail,
        originalPrice: selected.originalPrice,
        salePrice: selected.salePrice,
      },
    });
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Container fluid>
        <Row className="pt-2">
          <Col className="col-10 pe-2">
            <Button
              variant="outline-secondary"
              size="large"
              onClick={handleAdd}
            >
              Add To Bag
            </Button>
          </Col>
          <Col>
            <Collection />
          </Col>
        </Row>
      </Container>
      <Row></Row>
      <BagModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        category={category}
        name={name}
      />
    </>
  );
}
