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

  return (
    <div className="pd__container">
      <button
        name={name}
        className="pd__style-icon p-4"
        onClick={handleSelection}
        style={{ backgroundImage: `url(${thumbnail})`, border: "none" }}
      ></button>
      {name === selectedStyle.color ? (
        <div className="pd__style-check">
          <CheckCircleOutlineIcon
            sx={{
              color: "rgb(80, 80, 80)",
              backgroundColor: "white",
              borderRadius: "50%",
              fontSize: "medium",
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
