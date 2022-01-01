import React, { useEffect } from "react";
import Selectors from "./Selectors";
import Style from "./Style";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "./store/StateProvider";

export default function StyleSelector({ productStyles }) {
  const [availableQty, setAvailableQty] = React.useState(0);
  const [{ selected }, dispatch] = useStateValue();

  return (
    <div>
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
            />
          ))}
      </div>
      <span>
        <Selectors select="size" key={uuidv4()} selected={selected} />
        <Selectors select="quantity" key={uuidv4()} selected={selected} />
      </span>
    </div>
  );
}
