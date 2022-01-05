import React from "react";
import "../../styles.css";
import Styles from "./Styles";
import AddToBag from "./AddToBag";
import utils from "../utils.js";
import Share from "./Share";

export default function ProductInfo({
  selected,
  productDetail,
  productStyles,
  rating,
  reviews,
  darkTheme,
  setView,
}) {
  const handleScroll = () => {
    const reviewElement = document.getElementById("reviews");
    reviewElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {reviews.results.length ? (
        <div className="pd__box" align-items-center>
          <div className="pd__normal mb-2 me-3">
            {darkTheme
              ? utils.starRatingWhite(rating)
              : utils.starRating(rating)}
          </div>
          <div className="pd__normal mb-2">
            <u type="button" onClick={handleScroll}>
              Read All {reviews.results.length} Reviews
            </u>
          </div>
        </div>
      ) : null}
      <p className="mb-2">{productDetail.category}</p>
      <h2 className="mb-3">{productDetail.name}</h2>
      <div className="mb-3">
        {selected.salePrice ? (
          <div>
            <span>
              <s>{"$" + selected.originalPrice}</s>
            </span>
            <span style={{ color: "red" }} className="ms-2">
              {"$" + selected.salePrice}
            </span>
          </div>
        ) : (
          "$" + selected.originalPrice
        )}
      </div>
      <Styles
        productStyles={productStyles}
        darkTheme={darkTheme}
        productId={productDetail.id}
        productName={productDetail.name}
        category={productDetail.category}
      />
      <AddToBag setView={setView} darkTheme={darkTheme} />
    </div>
  );
}
