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
      {console.log(productDetail)}
      {console.log(productStyles)}
      <div className="pd">
        <div class="d-flex flex-row">
          <span class="p-2">
            <ImageGallery productStyles={productStyles} />
          </span>
          <span class="p-2">
            <ProductInfo
              productDetail={productDetail}
              productStyles={productStyles}
            />
          </span>
        </div>
        <div class="d-flex flex-row">
          <span class="p-2">
            <Description productDetail={productDetail} />
          </span>
          <span class="p-2">
            <Features productDetail={productDetail} />
          </span>
        </div>
      </div>
    </div>
  );
}
