import React from "react";

export default function AddToBag() {
  return (
    <span className="d-flex flex-row justify-content-between">
      <span className="p-2">
        <button type="button" className="btn btn-light">
          Add To Bag
        </button>
      </span>
      <span className="p-2">
        <button type="button" className="btn btn-light">
          ☆
        </button>
      </span>
    </span>
  );
}
