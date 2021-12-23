import React, { useEffect } from "react";
import Selectors from "./Selectors";
import Style from "./Style";

export default function StyleSelector({ productStyles }) {
  const [selectedStyle, setSelectedStyle] = React.useState({
    color: "",
    styleid: "",
    skus: null,
  });

  return (
    <div>
      <span>{"Style: " + selectedStyle.color}</span>
      <div className="d-flex flex-row justify-content-between">
        {productStyles.results &&
          productStyles.results.map((style) => (
            <Style
              key={style.style_id}
              name={style.name}
              styleid={style.style_id}
              skus={style.skus}
              setSelectedStyle={setSelectedStyle}
            />
          ))}
      </div>

      <span className="d-flex flex-row justify-content-between">
        <Selectors select="size" skus={selectedStyle.skus} />
        <Selectors select="quantity" skus={selectedStyle.skus} />
      </span>
    </div>
  );
}
