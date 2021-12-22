import React from "react";

export default function Description({ productDetail }) {
  return (
    <div>
      <p className="pd__slogan">
        <b>{productDetail.slogan}</b>
      </p>
      <p className="pd__description">{productDetail.description}</p>
    </div>
  );
}
