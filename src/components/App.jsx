import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from "./Checkout";
import Catalogue from "./Catalogue";
import Options from "../config";
import Detail from "./Detail";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useStateValue } from "../components/Overview/store/StateProvider";

let theme;
export function siteTheme() {
  return theme;
}

export default function App(props) {
  const [view, setView] = React.useState("catalogue");
  const [products, setProducts] = React.useState([]);
  const [selected, setSelected] = React.useState({});
  const [saved, setSaved] = React.useState(
    () => JSON.parse(localStorage.getItem("outfits")) || []
  );
  const [{ basket }, dispatch] = useStateValue();
  const [darkTheme, setDarkTheme] = React.useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );

  theme = darkTheme;

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
    localStorage.setItem("outfits", JSON.stringify(saved));
  }, [saved]);

  React.useEffect(() => {
    localStorage.setItem("bagItems", JSON.stringify(basket));
  }, [basket]);

  const themedStyle = {
    backgroundColor: darkTheme ? "rgb(25, 25, 25)" : "white",
    color: darkTheme ? "white" : "black",
  };

  return (
    <div style={themedStyle}>
      <Header
        setView={setView}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
      />
      {view === "catalogue" && (
        <div className="container">
          <Catalogue
            setView={setView}
            products={products}
            setSelected={setSelected}
            darkTheme={darkTheme}
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
            darkTheme={darkTheme}
          />
        </div>
      )}
      {view === "checkout" && (
        <div className="container">
          <Checkout darkTheme={darkTheme} basket={basket} dispatch={dispatch} />
        </div>
      )}
      <Footer darkTheme={darkTheme} />
    </div>
  );
}
