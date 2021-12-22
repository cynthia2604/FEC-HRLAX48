import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RatingsAndReviews from "./RatingsReviews"
import Overview from "./Overview"
import RelatedItems from "./RelatedItems"
import Catalogue from "./Catalogue"
import Options from "../config"
import axios from "axios";

export default function App(props) {
  const [view, setView] = React.useState("catalogue");
  const [products, setProducts] = React.useState([]);
  const [selected, setSelected] = React.useState({});

  React.useEffect(() => {
    axios.get(`${Options.URL}/products/?count=20`, {
      headers: {
        Authorization: Options.TOKEN
      }
    })
      .then(res => setProducts(res.data))
  }, [])

  return (
    <>
      {view === "catalogue" && (
        <div>
          <Catalogue
            setView={setView}
            products={products}
            setSelected={setSelected}
          />
        </div>
      )}
      {view === "detail" && (
        <div>
          <div onClick={() => setView('catalogue')}>GO TO CATALOGUE</div>
          <Overview />
          <RelatedItems products={products} selected ={selected}/>
          <RatingsAndReviews />
          <div onClick={() => setView("catalogue")}>GO TO CATALOGUE</div>
          <Overview selected={selected} />
          <RelatedItems />
          <RatingsAndReviews selected={selected}/>
        </div>
      )}
    </>
  );
}
