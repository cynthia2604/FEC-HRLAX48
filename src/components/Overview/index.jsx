import React from "react";
import axios from "axios";
import Options from "../../config";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import Description from "./Description";
import Features from "./Features";
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
  });

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
      setSelectedStyle({
        color: color,
        skus: skus,
        photos: photos,
        thumbnail: photos[0].thumbnail_url,
      });
    }
  };

  return (
    <div className="mb-3">
      <div className="pd__box">
        <div className="pd__wide">
          <ImageGallery key={uuidv4()} selectedStyle={selectedStyle} />
        </div>
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
      </div>
      <div className="pd__box">
        <div className="pd__wide">
          <Description productDetail={productDetail} />
        </div>
        <div className="pd__narrow">
          <Features productDetail={productDetail} />
        </div>
      </div>
    </div>
  );
}
