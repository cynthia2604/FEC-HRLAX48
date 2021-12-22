import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Catalogue from "./Catalogue"
import Detail from "./Detail"
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
        <div className="container">
          <Detail
          selected={selected}
          products={products}
          setView={setView}/>
        </div>
      )}
    </>
  );
}
