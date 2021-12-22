import React from "react";

export default function Style({ name, photos, handleSelection }) {
  const styleColor = { backgroundColor: `${name}` };

  return (
    <button
      className="pd__style-icon p-2"
      style={styleColor}
      name={name}
      onClick={handleSelection}
    ></button>
  );
}
