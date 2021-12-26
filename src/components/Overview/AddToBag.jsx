import React from "react";

export default function AddToBag() {
  const handleAlert = () => {
    return;
  };
  return (
    <span className="btn-group">
      <span>
        <button
          type="button"
          className="btn btn-outline-secondary pd__button-wide"
          onClick={handleAlert}
        >
          Add To Bag
        </button>
      </span>
      <span>
        <button
          type="button"
          className="btn btn-outline-secondary pd__button-narrow"
        >
          ☆
        </button>
      </span>
    </span>
  );
}
