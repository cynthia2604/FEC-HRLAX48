import React from "react";
import { useStateValue } from "./store/StateProvider";
import BagModal from "./BagModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collection from "./Collection";
import Button from "react-bootstrap/Button";

export default function AddToBag({ category, name, setView }) {
  const [{ basket, selected, toggleWarning }, dispatch] = useStateValue();
  const [show, setShow] = React.useState(false);
  //const [warning, setWarning] = React.useState(false);

  const handleAdd = () => {
    if (typeof selected.quantity === "number") {
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
    } else {
      dispatch({
        type: "TOGGLE_WARNING",
        item: true,
      });
    }
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
        {toggleWarning ? (
          <Row>
            <div style={{ color: "red", textAlign: "center" }}>
              --select size first--
            </div>
          </Row>
        ) : null}
      </Container>
      <BagModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        category={category}
        name={name}
        setView={setView}
      />
    </>
  );
}
