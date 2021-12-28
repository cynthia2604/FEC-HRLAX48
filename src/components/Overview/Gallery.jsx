import React from "react";
import { v4 as uuidv4 } from "uuid";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import ImageGallery from "../../../node_modules/react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

export default function Gallery({ selectedStyle, handleExpand }) {
  let images = [];
  const image =
    selectedStyle.photos &&
    selectedStyle.photos.map((photo) => {
      let tempObj = { original: photo.url, thumbnail: photo.thumbnail_url };
      images.push(tempObj);
    });

  return (
    <div className="pd__container">
      <div className="image">
        <ImageGallery
          items={images}
          thumbnailPosition="left"
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
      <div className="expand-icon" type="button" onClick={handleExpand}>
        <AspectRatioIcon key={uuidv4()} sx={{ color: "white" }} />
      </div>
    </div>
  );
}
