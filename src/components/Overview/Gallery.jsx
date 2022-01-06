import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import MigosImage from '../../assets/Migos.png';

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
          <div className='expand-icon cP' onClick={handleExpand}>
            <AspectRatioIcon key={uuidv4()} sx={{ color: 'white' }} />
          </div>
        </div>
      ) : (
        <img className='pd__alt' src={MigosImage}></img>
      )}
    </div>
  );
}
