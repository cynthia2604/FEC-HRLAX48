import React from "react";

export default function Features({ productDetail }) {
  return (
    <div>
      <p className="d-flex flex-column">
        {productDetail.features &&
          productDetail.features.map((feature, i) => (
            <span key={i}>{`-${feature.feature}: ${feature.value}`}</span>
          ))}
      </p>
      <p className="pd__share">
        share on social media facebook, twitter, pinterest
      </p>
    </div>
  );
}
