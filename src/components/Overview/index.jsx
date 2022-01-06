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
import getDefault from './Utils';

export default function Overview({
  rating,
  productInfo,
  darkTheme,
  selectedProduct,
  setView,
  setSaved,
  saved,
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
  }, [selectedProduct]);

  React.useEffect(() => {
    getDefault(productStyles, productDetail, dispatch, selected.index);
  }, [productStyles, productDetail]);

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
              saved={saved}
              setSaved={setSaved}
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
