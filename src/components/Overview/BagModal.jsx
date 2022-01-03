import React from "react";
import { useStateValue } from "./store/StateProvider";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function BagModal({
  show,
  setShow,
  handleClose,
  category,
  name,
  setView,
}) {
  const [{ basket, selected }, dispatch] = useStateValue();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <CheckCircleIcon sx={{ color: "#38e038", fontSize: "30" }} /> Added
            To Bag
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
                <div>{`$${selected.salePrice || selected.originalPrice}`}</div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            {`Continue Shopping`}
          </Button>
          <Button
            variant="outline-success"
            onClick={() => {
              setView("checkout");
            }}
          >
            {`Checkout`}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
