import React from "react";
import Overview from "./Overview";
import RatingsAndReviews from "./RatingsReviews";
import RelatedItems from "./RelatedItems";
import axios from "axios";
import Options from "../config";
import QuestionsAnswers from "./QuestionsAnswers";
import { useStateValue } from "../components/Overview/store/StateProvider";

export default function Detail(props) {
  const [rating, setRating] = React.useState(5);
  const [productInfo, setProductInfo] = React.useState();
  const [{ selected }, dispatch] = useStateValue();

  React.useEffect(() => {
    fetchProductInfo();
  }, [props.selected]);

  function fetchProductInfo() {
    axios
      .get(
        `${Options.URL}/reviews/?product_id=${props.selected.id}&count=999`,
        {
          headers: {
            Authorization: Options.TOKEN,
          },
        }
      )
      .then((res) => {
        setProductInfo(res.data);
        function roundQuarter(num) {
          return Math.round(num * 4) / 4;
        }
        let average = 0;
        if (res.data.results.length) {
          for (let i = 0; i < res.data.results.length; i++) {
            average += res.data.results[i].rating;
          }
          average = average / res.data.results.length;
        }
        setRating(roundQuarter(average));
      });
  }

  return (
    <>
      {productInfo && (
        <div>
          <Overview
            selectedProduct={props.selected}
            rating={rating}
            productInfo={productInfo}
            darkTheme={props.darkTheme}
            setView={props.setView}
          />
          <RelatedItems
            products={props.products}
            selected={props.selected}
            setSaved={props.setSaved}
            outfits={props.outfits}
            rating={rating}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            darkTheme={props.darkTheme}
          />
          <QuestionsAnswers
            selected={props.selected}
            darkTheme={props.darkTheme}
          />
          <RatingsAndReviews
            selected={props.selected}
            rating={rating}
            productInfo={productInfo}
            refresh={fetchProductInfo}
            darkTheme={props.darkTheme}
          />
        </div>
      )}
    </>
  );
}
