import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { v4 as uuidv4 } from "uuid";

export default function ImageGallery({ selectedStyle, defaultProduct }) {
  const defaultPhotos =
    defaultProduct.photos &&
    defaultProduct.photos.map((photo) => {
      return (
        <div>
          <img
            key={uuidv4()}
            src={photo.url}
            style={{ objectFit: "cover", height: 400 }}
          />
        </div>
      );
    });

  const image =
    selectedStyle.photos &&
    selectedStyle.photos.map((photo) => {
      return (
        <div>
          <img
            key={uuidv4()}
            src={photo.url}
            style={{ objectFit: "cover", height: 400 }}
          />
        </div>
      );
    });

  return (
    <div>
      <Carousel infiniteLoop key={uuidv4()}>
        {selectedStyle.photos ? image : defaultPhotos}
      </Carousel>
    </div>
  );
}
