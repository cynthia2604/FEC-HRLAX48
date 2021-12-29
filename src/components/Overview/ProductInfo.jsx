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
  defaultProduct,
  reviews,
}) {
  const handleScroll = () => {
    const reviewElement = document.getElementById("reviews");
    reviewElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="pd__box">
        <div className="pd__normal mb-3">{utils.starRating(rating)}</div>
        {reviews.results.length ? (
          <div className="pd__normal mb-3">
            <u onClick={handleScroll}>
              Read All {reviews.results.length} Reviews
            </u>
          </div>
        </div>
      ) : null}
      <p className="mb-2">{productDetail.category}</p>
      <h2 className="mb-3">{productDetail.name}</h2>
      <div className="mb-3">
        {selectedStyle.salePrice ? (
          <div>
            <span>
              <s>{"$" + selectedStyle.originalPrice}</s>
            </span>
            <span style={{ color: "red" }} className="ms-2">
              {"$" + selectedStyle.salePrice}
            </span>
          </div>
        ) : (
          "$" + selectedStyle.originalPrice
        )}
      </div>
      <StyleSelector
        productStyles={productStyles}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        defaultProduct={defaultProduct}
      />
      <AddToBag />
      <Share />
    </div>
  );
}
