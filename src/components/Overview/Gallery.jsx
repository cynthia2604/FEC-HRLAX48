import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function Gallery({ selected, handleExpand }) {
  const images = [];
  const isAvailable = [];
  const image =
    selected.photos &&
    selected.photos.map((photo) => {
      isAvailable.push(photo.url);
      let tempObj = { original: photo.url, thumbnail: photo.thumbnail_url };
      images.push(tempObj);
    });

  return (
    <div className='pd__container'>
      {isAvailable[0] ? (
        <div>
          <div className='image'>
            <ImageGallery
              items={images}
              thumbnailPosition='left'
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
          <div className='expand-icon' type='button' onClick={handleExpand}>
            <AspectRatioIcon key={uuidv4()} sx={{ color: 'white' }} />
          </div>
        </div>
      ) : (
        <img
          className='pd__alt'
          src='https://i5.walmartimages.com/asr/4add4de6-7b92-4846-8316-b7a0cbec4dc7_1.8e2f7305081b9284e56d112fe146dc90.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
        ></img>
      )}
    </div>
  );
}
