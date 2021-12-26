import React from "react";

export default function Features({ productDetail }) {
  return (
    <div>
      <p>
        <b>Features:</b>
      </p>
      <ul className="d-flex flex-column">
        {productDetail.features &&
          productDetail.features.map((feature, i) => (
            <li key={i}>{`-${feature.feature}: ${feature.value}`}</li>
          ))}
      </ul>
    </div>
  );
}
