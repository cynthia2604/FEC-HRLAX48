import React from "react";
import QuantitySelector from "./QuantitySelector";
import SizeSelector from "./SizeSelector";
import Style from "./Style";

export default function StyleSelector({ productStyles }) {
  const [selectedStyle, setSelectedStyle] = React.useState("");

  const handleSelection = (e) => {
    setSelectedStyle(`${e.target.name}`);
  };

  return (
    <div>
      <span>{"Style: " + selectedStyle}</span>
      <div className="d-flex flex-row justify-content-between">
        {productStyles.results &&
          productStyles.results.map((style) => (
            <Style
              key={style.style_id}
              name={style.name}
              handleSelection={handleSelection}
            />
          ))}
      </div>
      <span className="d-flex flex-row justify-content-between">
        <SizeSelector />
        <QuantitySelector />
      </span>
    </div>
  );
}
