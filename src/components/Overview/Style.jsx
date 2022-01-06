import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useStateValue } from './store/StateProvider';

export default function Style({
  name,
  skus,
  allPhotos,
  thumbnail,
  originalPrice,
  salePrice,
  productId,
  productName,
  category,
  index,
}) {
  const [{ selected }, dispatch] = useStateValue();

  const handleSelection = () => {
    dispatch({
      type: 'ADD_TO_SELECTED',
      item: {
        color: `${name}`,
        skus: skus,
        photos: allPhotos,
        originalPrice: originalPrice,
        salePrice: salePrice,
        thumbnail: thumbnail,
        productId: productId,
        productName: productName,
        category: category,
        index: index,
      },
    });
  };

  return (
    <div className='pd__container'>
      <button
        name={name}
        className='pd__style-icon'
        onClick={handleSelection}
        style={{
          backgroundImage: `url(${thumbnail})`,
          border: 'none',
        }}
      ></button>
      {name === selected.color ? (
        <div className='pd__style-check'>
          <CheckCircleOutlineIcon
            sx={{
              color: 'rgb(80, 80, 80)',
              backgroundColor: 'white',
              borderRadius: '50%',
              fontSize: 'medium',
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
