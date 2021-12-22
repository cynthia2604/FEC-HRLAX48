import React from "react";
import axios from "axios";
import Options from "../../config";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import Description from "./Description";
import Features from "./Features";
import "../../styles.css";

export default function Overview({ selected }) {
  const [productDetail, setProductDetail] = React.useState({});
  const [productStyles, setProductStyles] = React.useState({});

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

  return (
    <div>
      Overview Component
      <div className="pd">
        <div className="d-flex flex-row">
          <span className="w-75 p-3">
            <ImageGallery productStyles={productStyles} />
          </span>
          <span className="w-25 p-3">
            <ProductInfo
              productDetail={productDetail}
              productStyles={productStyles}
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
    </div>
  );
}
