import React from "react";

export default function QuantitySelector({ quantity }) {
  return (
    <a className="dropdown-item" href="#">
      {quantity}
    </a>
  );
}
