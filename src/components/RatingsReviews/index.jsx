import React from "react";
import axios from "axios";
import Options from "../../config";
import StarColumn from "./StarColumn";
import ReviewColumn from "./ReviewColumn";
import utils from "../utils";

export default function RatingsAndReviews(props) {
  const [productInfo, setProductInfo] = React.useState();
  const [percentage, setPercentage] = React.useState(100);

  React.useEffect(() => {
    axios
      .get(`${Options.URL}/reviews/?product_id=${props.selected.id}&count=10`, {
        headers: {
          Authorization: Options.TOKEN,
        },
      })
      .then((res) => setProductInfo(res.data));
  }, [props.selected]);

  return (
    <>
      <div className="sectionTitle pt-5">{`RATINGS & REVIEWS`}</div>
      {productInfo && (
        <div className="reviews pt-3">
          <div className="reviews-left">
            <StarColumn
              rating={props.rating}
              productInfo={productInfo}
              starRating={utils.starRating}
            />
          </div>
          <div className="reviews-right">
            <ReviewColumn
              rating={props.rating}
              productInfo={productInfo}
              starRating={utils.starRating}
            />
          </div>
        </div>
      )}
    </>
  );
}
