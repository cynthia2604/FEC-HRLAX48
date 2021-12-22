import React from "react";

export default function Description({ productDetail }) {
  return (
    <div className="pd__description">
      <p>
        <b>{productDetail.slogan}</b>
      </p>
      <p>{productDetail.description}</p>
    </div>
  );
}
