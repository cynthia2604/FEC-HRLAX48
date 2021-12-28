import React from "react";
import axios from "axios";
import Options from "../../config";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import Description from "./Description";
import Features from "./Features";
import Share from "./Share";
import OverviewInfo from "./OverviewInfo";
import "../../styles.css";
import { v4 as uuidv4 } from "uuid";

export default function Overview({ selected, rating, productInfo }) {
  const [productDetail, setProductDetail] = React.useState({});
  const [productStyles, setProductStyles] = React.useState({});
  const [selectedStyle, setSelectedStyle] = React.useState({
    color: "",
    skus: null,
    photos: null,
    thumbnails: null,
    thumbnail: null,
    originalPrice: null,
    salePrice: null,
  });
  const [isExpand, setIsExpand] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`${Options.URL}/products/${selected.id}`, {
        headers: {
          Authorization: Options.TOKEN,
        },
      })
      .then(({ data }) => setProductDetail(data));
    axios
      .get(`${Options.URL}/products/${selected.id}/styles`, {
        headers: {
          Authorization: Options.TOKEN,
        },
      })
      .then(({ data }) => setProductStyles(data));
  }, []);

  React.useEffect(() => {
    getDefault();
  }, [productStyles]);

  const getDefault = () => {
    if (productStyles.results) {
      let defaultObj = productStyles.results[0];
      let color = defaultObj.name;
      let photos = defaultObj.photos;
      let skus = defaultObj.skus;
      let originalPrice = defaultObj.original_price;
      let salePrice = defaultObj.sale_price;

      setSelectedStyle({
        color: color,
        skus: skus,
        photos: photos,
        thumbnail: photos[0].thumbnail_url,
        originalPrice: originalPrice,
        salePrice: salePrice,
      });
    }
  };

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className="mb-3">
      <div className="pd__box">
        <div className={isExpand ? "pd__box" : "pd__wide"}>
          <ImageGallery
            key={uuidv4()}
            selectedStyle={selectedStyle}
            handleExpand={handleExpand}
          />
        </div>
        {!isExpand ? (
          <div className="pd__narrow">
            <ProductInfo
              productDetail={productDetail}
              productStyles={productStyles}
              rating={rating}
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
              reviews={productInfo}
            />
          </div>
        ) : null}
      </div>
      <div className="pd__box mt-4 d-flex justify-content-between">
        <div className="w-50">
          <Description productDetail={productDetail} />
        </div>
        {productDetail.overview ? (
          <OverviewInfo overview={productDetail.overview} />
        ) : null}
        <div>
          <Features productDetail={productDetail} />
        </div>
        <div>
          <Share />
        </div>
      </div>
    </div>
  );
}
