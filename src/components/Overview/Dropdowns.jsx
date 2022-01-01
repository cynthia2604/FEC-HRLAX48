import React from "react";
import SizeDropdown from "./SizeDropdown";
import QuantityDropdown from "./QuantityDropdown";
import { v4 as uuidv4 } from "uuid";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useStateValue } from "./store/StateProvider";

export default function Dropdowns() {
  const [{ selected }, dispatch] = useStateValue();

  return (
    <>
      <Container fluid>
        <Row className="pt-3">
          <Col className="col-8 pe-2">
            <DropdownButton
              id="dropdown-basic-button"
              variant="outline-secondary"
              title={selected.size}
              disabled={selected.quantity === "Out Of Stock" ? true : false}
              size="large"
            >
              <SizeDropdown key={uuidv4()} />
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton
              id="dropdown-basic-button quantity"
              variant="outline-secondary"
              disabled={selected.disabled}
              title={selected.quantity}
              size="small"
            >
              <QuantityDropdown key={uuidv4()} />
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </>
  );
}
