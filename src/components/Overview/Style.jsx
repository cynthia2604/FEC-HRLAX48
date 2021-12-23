import React from "react";

export default function Style({ name, styleid, setSelectedStyle, skus }) {
  const styleColor = { backgroundColor: `${name}` };

  const handleSelection = (e) => {
    setSelectedStyle({
      color: `${name}`,
      styleid: styleid,
      skus: skus,
    });
  };

  return (
    <button
      id={styleid}
      className="pd__style-icon p-2"
      style={styleColor}
      onClick={handleSelection}
    ></button>
  );
}
