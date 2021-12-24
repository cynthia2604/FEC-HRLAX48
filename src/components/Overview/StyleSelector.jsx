import React, { useEffect } from "react";
import Selectors from "./Selectors";
import Style from "./Style";
import { v4 as uuidv4 } from "uuid";

export default function StyleSelector({ productStyles }) {
  const [selectedStyle, setSelectedStyle] = React.useState({
    color: "",
    styleid: "",
    skus: null,
  });
  const [availableQty, setAvailableQty] = React.useState(0);

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
        <Selectors
          select="size"
          skus={selectedStyle.skus}
          key={uuidv4()}
          setAvailableQty={setAvailableQty}
        />
        <Selectors
          select="quantity"
          skus={selectedStyle.skus}
          key={uuidv4()}
          availableQty={availableQty}
        />
      </span>
    </div>
  );
}
