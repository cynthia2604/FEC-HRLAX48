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
        id: getCurrentID(),
      },
    });
  };

  const getCurrentID = () => {
    let result = [];
    for (var key in skus) {
      let current = skus[key];
      result.push({
        id: key,
        quantity: current.quantity,
        size: current.size,
      });
    }
    result = result.filter((item) => item.size === selected.size);
    return result[0]?.id;
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
