import React from "react";
import "../../styles.css";
import StyleSelector from "./StyleSelector";
import AddToBag from "./AddToBag";
import utils from "../utils.js";

export default function ProductInfo({ productDetail, productStyles, rating }) {
  const handleScroll = () => {
    const reviewElement = document.getElementById("review");
    reviewElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="d-inline-flex">
        <span>{utils.starRating(rating)}</span>
        <span>
          <u onClick={handleScroll}>Read All Reviews</u>
        </span>
      </div>

      <p className="pd__category">{productDetail.category}</p>
      <h2 className="pd__name">{productDetail.name}</h2>
      <p className="pd__price">{"$" + productDetail.default_price}</p>
      <StyleSelector productStyles={productStyles} />
      <AddToBag />
    </div>
  );
}
