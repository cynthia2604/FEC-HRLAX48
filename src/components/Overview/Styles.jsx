import React, { useEffect } from "react";
import Style from "./Style";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "./store/StateProvider";
import Dropdowns from "./Dropdowns";

export default function Styles({
  productStyles,
  darkTheme,
  productId,
  productName,
  category,
}) {
  const [{ selected }, dispatch] = useStateValue();

  return (
    <>
      <div className="pd__styleText mb-3">{"Style: " + selected.color}</div>
      <div className="d-flex align-content-start flex-wrap">
        {productStyles.results &&
          productStyles.results.map((style) => (
            <Style
              key={style.style_id}
              name={style.name}
              skus={style.skus}
              allPhotos={style.photos}
              thumbnail={style.photos[0].thumbnail_url}
              originalPrice={style.original_price}
              salePrice={style.sale_price}
              productId={productId}
              productName={productName}
              category={category}
            />
          ))}
      </div>
      <Dropdowns darkTheme={darkTheme} />
    </>
  );
}
