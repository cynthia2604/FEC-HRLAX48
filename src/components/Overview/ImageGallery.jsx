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
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://picsum.photos/400"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://picsum.photos/400"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://picsum.photos/400"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
