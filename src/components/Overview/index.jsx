import React from 'react';
import axios from 'axios';
import Options from '../../config';
import Gallery from './Gallery';
import ProductInfo from './ProductInfo';
import Description from './Description';
import Features from './Features';
import Share from './Share';
import OverviewInfo from './OverviewInfo';
import '../../styles.css';
import { v4 as uuidv4 } from 'uuid';
import { useStateValue } from './store/StateProvider';

export default function Overview({
  rating,
  productInfo,
  darkTheme,
  selectedProduct,
  setView,
}) {
  const [productDetail, setProductDetail] = React.useState({});
  const [productStyles, setProductStyles] = React.useState({});
  const [isExpand, setIsExpand] = React.useState(false);
  const [{ selected }, dispatch] = useStateValue();

  React.useEffect(() => {
    axios
      .get(`${Options.URL}/products/${selectedProduct.id}`, {
        headers: {
          Authorization: Options.TOKEN,
        },
      })
      .then(({ data }) => setProductDetail(data));
    axios
      .get(`${Options.URL}/products/${selectedProduct.id}/styles`, {
        headers: {
          Authorization: Options.TOKEN,
        },
      })
      .then(({ data }) => setProductStyles(data));
  }, []);

  React.useEffect(() => {
    getDefault();
  }, [productStyles, productDetail]);

  const getDefault = () => {
    if (productStyles.results && productDetail) {
      let defaultObj = productStyles.results[0];
      let color = defaultObj.name;
      let photos = defaultObj.photos;
      let skus = defaultObj.skus;
      let originalPrice = defaultObj.original_price;
      let salePrice = defaultObj.sale_price;

      let hasSku = () => {
        if (Object.keys(skus)[0] !== 'null') {
          return '-';
        } else {
          return 'Out Of Stock';
        }
      };

      dispatch({
        type: 'ADD_TO_SELECTED',
        item: {
          color: color,
          skus: skus,
          photos: photos,
          thumbnail: photos[0].thumbnail_url,
          originalPrice: originalPrice,
          salePrice: salePrice,
          size: 'Select Size',
          quantity: hasSku(),
          disabled: true,
          productName: productDetail.name,
          category: productDetail.category,
          productId: productDetail.id,
        },
      });
    }
  };

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className='mb-3'>
      <div className='pd__box mb-4 pb-4'>
        <div className={isExpand ? 'pd__gallery-expand' : 'wide'}>
          {selected.productId === productDetail.id &&
            selected.photos?.length > 0 && (
              <Gallery
                key={uuidv4()}
                selected={selected}
                handleExpand={handleExpand}
              />
            )}
        </div>
        {!isExpand ? (
          <div className='narrow'>
            <ProductInfo
              selected={selected}
              productDetail={productDetail}
              productStyles={productStyles}
              rating={rating}
              reviews={productInfo}
              darkTheme={darkTheme}
              setView={setView}
            />
          </div>
        ) : null}
      </div>
      <div className='pd__box d-flex justify-content-between pb-3 pt-1'>
        <div className='w-50'>
          <Description productDetail={productDetail} />
        </div>
        {productDetail.overview ? (
          <OverviewInfo overview={productDetail.overview} />
        ) : null}
        <div>
          <Features productDetail={productDetail} className='w-30' />
        </div>
        <div>
          <Share />
        </div>
      </div>
    </div>
  );
}
