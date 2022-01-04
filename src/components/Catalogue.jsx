import axios from 'axios';
import React from 'react';
import Options from '../config';
import migos from '../assets/Migos.png';
import { Box } from '@mui/system';
import { CircularProgress, Pagination } from '@mui/material';

export default function Catalogue(props) {
  function handleClick(product) {
    props.setSelected(product);
    props.setView('detail');
  }

  const [productInfo, setProductInfo] = React.useState({});

  React.useEffect(() => {
    setProductInfo({});
    for (let i = 0; i < props.products.length; i++) {
      axios
        .get(`${Options.URL}/products/${props.products[i].id}/styles`, {
          headers: {
            Authorization: Options.TOKEN,
          },
        })
        .then((res) => {
          setProductInfo((prevState) => ({
            ...prevState,
            [res.data.product_id]: res.data,
          }));
        });
    }
  }, [props.products]);

  const products = props.products.map((product) => {
    return (
      <div
        onClick={() => handleClick(product)}
        key={product.id}
        className='cP col-3'
      >
        <img
          src={productInfo[product.id]?.results[0]?.photos[0]?.url || migos}
          alt={product.name}
          className='catalogueImage'
          width='250px'
          height='250px'
        />
        <div className=''>
          <b>{product.name}</b>
        </div>
        <div className='pb-4'>${product.default_price}</div>
      </div>
    );
  });

  const paginationStyle = {
    color: props.darkTheme ? 'white' : 'black',
  };

  return (
    <div className='d-flex flex-wrap justify-content-around text-center'>
      {Object.keys(productInfo).length < 8 && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color='inherit' />
        </Box>
      )}
      {Object.keys(productInfo).length === 8 && (
        <div className='d-flex flex-wrap justify-content-around text-center'>
          {products}
          <div className='pt-5'>
            <Pagination
              count={10}
              shape='rounded'
              page={props.page}
              onChange={(e, newPage) => props.setPage(newPage)}
              sx={{
                '& .MuiPaginationItem-root': {
                  color: props.darkTheme ? 'white' : 'black',
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                  backgroundColor: props.darkTheme
                    ? 'rgb(50, 50, 50)'
                    : 'rgb(200, 200, 200)',
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
