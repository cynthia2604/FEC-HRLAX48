import React from "react";

export default function OverviewInfo({ overview }) {
  return (
    <div>
      <p>
        <b>Overview:</b>
      </p>
      <div className="d-flex flex-column">{overview}</div>
    </div>
  );
}
