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
  darkTheme,
}) {
  const [{ basket, selected }, dispatch] = useStateValue();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        style={{
          backgroundColor: darkTheme ? "rgb(50, 50, 50)" : "white",
          border: darkTheme ? "1px solid white" : null,
        }}
      >
        <Modal.Title style={{ color: darkTheme ? "white" : "black" }}>
          <CheckCircleIcon sx={{ color: "#38e038", fontSize: "30" }} /> Added To
          Bag
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          color: darkTheme ? "white" : "black",
          backgroundColor: darkTheme ? "rgb(50, 50, 50)" : "white",

          borderRight: darkTheme ? "1px solid white" : null,
          borderLeft: darkTheme ? "1px solid white" : null,
        }}
      >
        <Container fluid>
          <Row>
            <Col>
              <img src={selected.thumbnail} height="100"></img>
            </Col>
            <Col>
              <div>
                <b>{selected.productName}</b>
              </div>
              <div className="pd__font-small">{selected.color}</div>
              <div className="pd__font-small">{selected.category}</div>
              <div className="pd__font-small">{`Size ${selected.size}`}</div>
              <div className="pd__font-small">{`$${
                selected.salePrice || selected.originalPrice
              }`}</div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer
        style={{
          backgroundColor: darkTheme ? "rgb(50, 50, 50)" : "white",
          border: darkTheme ? "1px solid white" : null,
        }}
      >
        <Button
          variant={darkTheme ? "outline-light" : "outline-secondary"}
          onClick={handleClose}
        >
          {`Continue Shopping`}
        </Button>
        <Button
          variant={darkTheme ? "outline-light" : "outline-secondary"}
          onClick={() => {
            setView("checkout");
          }}
        >
          {`Checkout`}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
