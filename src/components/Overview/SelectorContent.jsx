import React from "react";

export default function SelectorContent({ select, size, quantity }) {
  return (
    <a className="dropdown-item" href="#">
      {select && select === "size" ? size : quantity}
    </a>
  );
}
