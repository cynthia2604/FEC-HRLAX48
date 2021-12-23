import React from "react";

export default function ImageGallery({ productStyles }) {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {console.log(productStyles)}
      <div className="carousel-indicators">
        <input
          type="image"
          data-bs-slide-to="0"
          aria-label="Slide 1"
          aria-current="true"
          src="https://picsum.photos/50"
          className="d-block active p-2"
          alt="..."
        />
        <input
          type="image"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          src="https://picsum.photos/50"
          className="d-block active p-2"
          alt="..."
        />
        <input
          type="image"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          src="https://picsum.photos/50"
          className="d-block active p-2"
          alt="..."
        />
      </div>
    </div>
  );
}
