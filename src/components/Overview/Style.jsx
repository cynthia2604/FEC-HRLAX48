import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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

  const renderCheck = () => {
    if (name === selectedStyle.color) {
      <div className="pd__style-check">
        <CheckCircleOutlineIcon />
      </div>;
    }
  };

  return (
    <div className="pd__container">
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
      <div className="pd__style-check">
        <CheckCircleOutlineIcon />
      </div>
    </div>
  );
}
