import React from "react";

export default function AddToBag() {
  const handleAlert = () => {
    return;
  };
  return (
    <span className="dp__box">
      <span>
        <button
          type="button"
          className="btn btn-outline-secondary add"
          onClick={handleAlert}
        >
          Add To Bag
        </button>
      </span>
      <span>
        <button type="button" className="btn btn-outline-secondary star">
          ☆
        </button>
      </span>
    </span>
  );
}
