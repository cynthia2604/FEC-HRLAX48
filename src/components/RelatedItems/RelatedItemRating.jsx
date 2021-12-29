import React from "react";
import utils from "../utils.js";
import axios from "axios";
import Options from "../../config";

export default function RelatedItemRating(props) {
  const [relatedItemRating, setRelatedItemRating] = React.useState();

  React.useEffect(() => {
    axios
      .get(
        `${Options.URL}/reviews/?product_id=${props.currentItem.product_id}&count=99`,
        {
          headers: {
            Authorization: Options.TOKEN,
          },
        }
      )
      .then((res) => {
        function roundHalf(num) {
          return Math.round(num * 2) / 2;
        }
        let average = 0;
        for (let i = 0; i < res.data.results.length; i++) {
          average += res.data.results[i].rating;
        }
        average = average / res.data.results.length;
        setRelatedItemRating(roundHalf(average));
      });
  }, [props.currentItem]);

  return (
    <div className="related-product-rating">
      {relatedItemRating && (
        <div className="rating">{utils.starRating(relatedItemRating)}</div>
      )}
    </div>
  );
}

// {results: [{rating: Number}]}
