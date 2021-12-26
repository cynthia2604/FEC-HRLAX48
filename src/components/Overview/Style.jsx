import React from "react";

export default function Style({ name, setSelectedStyle, skus, photos }) {
  const handleSelection = () => {
    setSelectedStyle({
      color: `${name}`,
      skus: skus,
      photos: photos,
    });
  };

  return (
    <button
      className="pd__style-icon p-2"
      style={{ backgroundColor: `${name}` }}
      onClick={handleSelection}
    ></button>
  );
}
