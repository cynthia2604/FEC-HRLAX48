import React from "react";

export default function Features({ productDetail }) {
  return (
    <div>
      <p>
        <b>Features:</b>
      </p>
      <div className="d-flex flex-column">
        {productDetail.features &&
          productDetail.features.map((feature, i) => (
            <div key={i}>{`${feature.feature}: ${feature.value}`}</div>
          ))}
      </div>
    </div>
  );
}
