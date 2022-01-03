import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './Checkout';
import Catalogue from './Catalogue';
import Options from '../config';
import Detail from './Detail';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

let theme;
export function siteTheme() {
  return theme;
}

export default function App(props) {
  const [view, setView] = React.useState('catalogue');
  const [products, setProducts] = React.useState([]);
  const [selected, setSelected] = React.useState({});
  const [saved, setSaved] = React.useState(
    () => JSON.parse(localStorage.getItem('outfits')) || []
  );
  const [darkTheme, setDarkTheme] = React.useState(
    () => JSON.parse(localStorage.getItem('darkMode')) || false
  );
  const [bag, setBag] = React.useState(
    // getting stored value
    () => JSON.parse(localStorage.getItem('bagItems')) || []
  );
  const [page, setPage] = React.useState(1);

  theme = darkTheme;

  React.useEffect(() => {
    axios
      .get(`${Options.URL}/products/?count=8&page=${page}`, {
        headers: {
          Authorization: Options.TOKEN,
        },
      })
      .then((res) => setProducts(res.data));
  }, [page]);

  React.useEffect(() => {
    localStorage.setItem('outfits', JSON.stringify(saved));
  }, [saved]);

  const themedStyle = {
    backgroundColor: darkTheme ? 'rgb(25, 25, 25)' : 'white',
    color: darkTheme ? 'white' : 'black',
  };

  return (
    <div className='d-flex flex-column min-vh-100' style={themedStyle}>
      <Header
        setView={setView}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        bag={bag}
      />
      {view === 'catalogue' && (
        <div className='container'>
          <Catalogue
            setView={setView}
            products={products}
            setSelected={setSelected}
            darkTheme={darkTheme}
            page={page}
            setPage={setPage}
          />
        </div>
      )}
      {view === 'detail' && (
        <div className='container mb-5'>
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
      {view === 'checkout' && (
        <div className='container'>
          <Checkout
            setView={setView}
            bag={bag}
            setBag={setBag}
            darkTheme={darkTheme}
          />
        </div>
      )}
      <div>
        <Footer darkTheme={darkTheme} />
      </div>
    </div>
  );
}
