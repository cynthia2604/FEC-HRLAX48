import React from "react";
import "../../styles.css";
import StyleSelector from "./StyleSelector";
import AddToBag from "./AddToBag";
import utils from "../utils.js";
import Share from "./Share";

export default function ProductInfo({
  productDetail,
  productStyles,
  rating,
  selectedStyle,
  setSelectedStyle,
  reviews,
}) {
  const handleScroll = () => {
    const reviewElement = document.getElementById("reviews");
    reviewElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {reviews.results.length ? (
        <div className="pd__box">
          <div className="pd__normal mb-2">{utils.starRating(rating)}</div>
          <div className="pd__normal mb-2">
            <u type="button" onClick={handleScroll}>
              Read All {reviews.results.length} Reviews
            </u>
          </div>
        </div>
      ) : null}
      <p className="mb-2">{productDetail.category}</p>
      <h2 className="mb-3">{productDetail.name}</h2>
      <p className="mb-3">{"$" + productDetail.default_price}</p>
      <StyleSelector
        productStyles={productStyles}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
      />
      <AddToBag />
    </div>
  );
}
