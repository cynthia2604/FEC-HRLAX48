import React from "react";

export default function SizeSelector(props) {
  return (
    <span className="p-2">
      <div className="dropdown show">
        <a
          className="btn btn-light btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select Size
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href="#">
            S
          </a>
          <a className="dropdown-item" href="#">
            M
          </a>
          <a className="dropdown-item" href="#">
            L
          </a>
        </div>
      </div>
    </span>
  );
}
