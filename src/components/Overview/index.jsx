import React from "react";
import axios from "axios";
import Options from "../../config";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import Description from "./Description";
import Features from "./Features";
import "../../styles.css";
import { v4 as uuidv4 } from "uuid";

export default function Overview({ selected, rating }) {
  const [productDetail, setProductDetail] = React.useState({});
  const [productStyles, setProductStyles] = React.useState({});
  const [selectedStyle, setSelectedStyle] = React.useState({
    color: "",
    skus: null,
    photos: null,
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
    productStyles && getDefault();
  }, [productStyles]);

  const getDefault = () => {
    if (productStyles.results) {
      let defaultObj = productStyles.results[0];
      let color = defaultObj.name;
      let photos = defaultObj.photos;
      let skus = defaultObj.skus;

      setSelectedStyle({
        color: color,
        photos: photos,
        skus: skus,
      });
    }
  };

  return (
    <div className="pd">
      <div className="d-flex flex-row">
        <span className="w-75 p-3">
          <ImageGallery key={uuidv4()} selectedStyle={selectedStyle} />
        </span>
        <span className="w-25 p-3">
          <ProductInfo
            productDetail={productDetail}
            productStyles={productStyles}
            rating={rating}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
        </span>
      </div>
      <div className="d-flex flex-row">
        <span className="w-75 p-3">
          <Description productDetail={productDetail} />
        </span>
        <span className="w-25 p-3">
          <Features productDetail={productDetail} />
        </span>
      </div>
    </div>
  );
}
