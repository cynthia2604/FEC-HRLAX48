import React from "react";

export default function AddToBag() {
  const handleAlert = () => {
    return;
  };
  return (
    <span className="pd__box d-inline">
      <span>
        <button
          type="button"
          className="btn btn-outline-secondary pd__wide-add"
          onClick={handleAlert}
        >
          Add To Bag
        </button>
      </span>
      <span>
        <button
          type="button"
          className="btn btn-outline-secondary pd__narrow-star"
        >
          ☆
        </button>
      </span>
    </span>
  );
}
