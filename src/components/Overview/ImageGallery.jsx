import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { v4 as uuidv4 } from "uuid";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

export default function ImageGallery({ selectedStyle, handleExpand }) {
  const image =
    selectedStyle.photos &&
    selectedStyle.photos.map((photo) => {
      return (
        <div>
          <img
            key={uuidv4()}
            src={photo.url}
            style={{ objectFit: "cover", height: 450 }}
          />
        </div>
      );
    });

  return (
    <div className="pd__container">
      <div className="image">
        <Carousel
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          key={uuidv4()}
        >
          {image}
        </Carousel>
      </div>
      <div className="expand-icon" type="button" onClick={handleExpand}>
        <AspectRatioIcon sx={{ color: "white" }} />
      </div>
    </div>
  );
}
