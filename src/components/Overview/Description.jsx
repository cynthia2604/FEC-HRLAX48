import React from "react";

export default function Description({ productDetail }) {
  return (
    <div>
      <p>
        <b>{productDetail.slogan}</b>
      </p>
      <p>{productDetail.description}</p>
    </div>
  );
}
