import React from 'react';
import axios from 'axios';
import Options from '../../../config.js';

import SearchIcon from '@mui/icons-material/Search';

export default function ProductImage(props) {

  function showComparison(selected) {
    props.setRenderTable(true)
     axios.get(`${Options.URL}/products/${Number(selected.product_id)}`, {
       headers: {
         Authorization: Options.TOKEN
       }
     }).then((res) => {
        props.setSelectRelated(res.data)
     })
  }


    return(
      <div className="card-product-image">
        <img src={`${props.currentItem.results[0].photos[0].url}`}/>
        <SearchIcon className="modal-button" onClick={() => showComparison(props.currentItem)}/>
      </div>
    )

}
