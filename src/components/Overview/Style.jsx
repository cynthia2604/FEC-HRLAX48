import React from "react";

export default function Style({
  name,
  selectedStyle,
  setSelectedStyle,
  skus,
  allPhotos,
  thumbnail,
}) {
  const handleSelection = () => {
    setSelectedStyle({
      color: `${name}`,
      skus: skus,
      photos: allPhotos,
    });
  };
  const addSelectionBorder = {
    backgroundImage: `url(${thumbnail})`,
    border: "3px solid lightgrey",
  };

  const removeSelectionBorder = {
    backgroundImage: `url(${thumbnail})`,
    border: "0px",
  };

  return (
    <button
      name={name}
      className="pd__style-icon p-4"
      style={
        name === selectedStyle.color
          ? addSelectionBorder
          : removeSelectionBorder
      }
      onClick={handleSelection}
    ></button>
  );
}
