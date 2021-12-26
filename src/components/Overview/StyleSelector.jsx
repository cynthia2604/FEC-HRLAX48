import React, { useEffect } from "react";
import Selectors from "./Selectors";
import Style from "./Style";
import { v4 as uuidv4 } from "uuid";

export default function StyleSelector({
  productStyles,
  selectedStyle,
  setSelectedStyle,
  defaultProduct,
}) {
  const [availableQty, setAvailableQty] = React.useState(0);

  return (
    <div>
      <div className="pd__styleText mb-2">
        {"Style: " + selectedStyle.color}
      </div>
      <div>
        {productStyles.results &&
          productStyles.results.map((style) => (
            <Style
              key={style.style_id}
              name={style.name}
              skus={style.skus}
              photos={style.photos}
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
            />
          ))}
      </div>

      <span>
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
