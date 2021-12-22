import React from "react";
import "../../styles.css";
import StyleSelector from "./StyleSelector";
import AddToBag from "./AddToBag";

export default function ProductInfo({ productDetail, productStyles }) {
  return (
    <div>
      <div>⭐⭐⭐⭐⭐</div>
      <p className="pd__category">{productDetail.category}</p>
      <h1 className="pd__name">{productDetail.name}</h1>
      <p className="pd__price">{"$" + productDetail.default_price}</p>
      <StyleSelector productStyle={productStyles} />
      <AddToBag />
    </div>
  );
}
