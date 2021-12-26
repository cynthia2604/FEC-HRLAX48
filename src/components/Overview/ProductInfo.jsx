import React from "react";
import "../../styles.css";
import StyleSelector from "./StyleSelector";
import AddToBag from "./AddToBag";
import utils from "../utils.js";

export default function ProductInfo({
  productDetail,
  productStyles,
  rating,
  selectedStyle,
  setSelectedStyle,
  defaultProduct,
}) {
  const handleScroll = () => {
    const reviewElement = document.getElementById("review");
    reviewElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="pd__box">
        <div className="pd__normal mb-3">{utils.starRating(rating)}</div>
        <div className="pd__normal mb-3">
          <u onClick={handleScroll}>Read All Reviews</u>
        </div>
      </div>

      <p className="mb-3">{"Category: " + productDetail.category}</p>
      <h3 className="mb-2">{productDetail.name}</h3>
      <h4 className="mb-3">{"$" + productDetail.default_price}</h4>
      <StyleSelector
        productStyles={productStyles}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        defaultProduct={defaultProduct}
      />
      <AddToBag />
    </div>
  );
}
