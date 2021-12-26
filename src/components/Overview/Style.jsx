import React from "react";

export default function Style({
  name,
  selectedStyle,
  setSelectedStyle,
  skus,
  photos,
}) {
  const handleSelection = () => {
    setSelectedStyle({
      color: `${name}`,
      skus: skus,
      photos: photos,
    });
  };

  const addSelectionBorder = {
    border: "3px solid lightgrey",
    backgroundColor: `${name}`,
  };

  const removeSelectionBorder = {
    border: "none",
    backgroundColor: `${name}`,
  };

  return (
    <button
      name={name}
      className="pd__style-icon p-3"
      style={
        name === selectedStyle.color
          ? addSelectionBorder
          : removeSelectionBorder
      }
      onClick={handleSelection}
    ></button>
  );
}
