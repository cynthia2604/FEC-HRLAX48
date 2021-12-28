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
      {reviews.results.length ? (
        <div className="pd__box">
          <div className="pd__normal mb-3">{utils.starRating(rating)}</div>
          <div className="pd__normal mb-3">
            <u onClick={handleScroll}>
              Read All {reviews.results.length} Reviews
            </u>
          </div>
        </div>
      ) : null}

      <p className="mb-4">
        Category:
        {" " + productDetail.category}
      </p>
      <h2 className="mb-2">{productDetail.name}</h2>
      <h3 className="mb-4">{"$" + productDetail.default_price}</h3>
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
