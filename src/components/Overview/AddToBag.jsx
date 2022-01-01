import React from "react";
import { useStateValue } from "./store/StateProvider";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function AddToBag({ category, name }) {
  const [{ basket, selected }, dispatch] = useStateValue();
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);

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

  return (
    <span className="dp__box">
      <span>
        <button
          type="button"
          className="btn btn-outline-secondary add"
          onClick={handleAdd}
        >
          Add To Bag
        </button>
      </span>
      <span>
        <button type="button" className="btn btn-outline-secondary star">
          ☆
        </button>
      </span>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <CheckCircleIcon sx={{ color: "#38e038", fontSize: "30" }} />{" "}
              Added To Bag
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container fluid>
              <Row>
                <Col>
                  <img src={selected.thumbnail} height="100"></img>
                </Col>
                <Col>
                  <div>{name}</div>
                  <div>{category}</div>
                  <div>{`Size ${selected.size}`}</div>
                  <div>{`$${
                    selected.salePrice || selected.originalPrice
                  }`}</div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              {`View Bag(${basket.length})`}
            </Button>
            <Button variant="outline-success" onClick={handleClose}>
              Checkout
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </span>
  );
}
