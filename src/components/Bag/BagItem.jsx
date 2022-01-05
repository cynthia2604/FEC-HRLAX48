import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SelectQty from "./SelectQty";

export default function BagItem({
  item,
  deleteCartItem,
  setView,
  setSelectedProduct,
  products,
  darkTheme,
}) {
  const handleProduct = () => {
    for (var product of products) {
      if (item.productId === product.id) {
        setSelectedProduct(product);
        setView("detail");
      }
    }
  };

  return (
    <Row>
      <Col md={2}>
        <img
          src={item.thumbnail}
          height="100px"
          width="100px"
          style={{ objectFit: "cover" }}
          type="button"
          onClick={handleProduct}
        ></img>
      </Col>
      <Col md={8}>
        <b>
          <div type="button" onClick={handleProduct}>
            {item.name}
          </div>
        </b>
        <div>{item.color}</div>
        <div>{`Size ${item.size}`}</div>
        <div>{`Qty ${item.quantity}`}</div>
        <SelectQty
          qtyArr={item.stockQuantityArr}
          item={item}
          darkTheme={darkTheme}
        />
      </Col>
      <Col md={2}>
        <div style={{ textAlign: "end" }}>{`$${
          item.salePrice || item.originalPrice
        }`}</div>
        <DeleteOutlineIcon
          key={item.id}
          style={{ float: "right" }}
          onClick={() => {
            deleteCartItem(item.id);
          }}
          type="button"
        />
      </Col>
      <hr className="mt-3"></hr>
    </Row>
  );
}
