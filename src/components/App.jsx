import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";
import Catalogue from "./Catalogue";
import Options from "../config";
import Detail from "./Detail";
import axios from "axios";
import Header from "./Header";

export default function App(props) {
  const [view, setView] = React.useState("catalogue");
  const [products, setProducts] = React.useState([]);
  const [selected, setSelected] = React.useState({});
  const [saved, setSaved] = React.useState(
   () => JSON.parse(localStorage.getItem('outfits')) || []
  );

  React.useEffect(() => {
    axios
      .get(`${Options.URL}/products/?count=60`, {
        headers: {
          Authorization: Options.TOKEN,
        },
      })
      .then((res) => setProducts(res.data));
  }, []);

  React.useEffect(() => {
    localStorage.setItem('outfits', JSON.stringify(saved))
  }, [ saved ])
  
  return (
    <>
      <Header setView={setView} />
      {view === "catalogue" && (
        <div className="container">
          <Catalogue
            setView={setView}
            products={products}
            setSelected={setSelected}
          />
        </div>
      )}
      {view === "detail" && (
        <div className="container">
          <Detail
            selected={selected}
            products={products}
            setView={setView}
            setSelected={setSelected}
            saved={saved}
            setSaved={setSaved}
            outfits={saved}
          />
        </div>
      )}
    </>
  );
}
