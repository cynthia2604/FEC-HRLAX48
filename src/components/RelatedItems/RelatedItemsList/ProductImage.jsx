import React from 'react';
import axios from 'axios';
import Options from '../../../config.js';
import MigoPNG from '../../../assets/Migos.png'

import SearchIcon from '@mui/icons-material/Search';

export default function ProductImage(props) {

  function showComparison(selected, e) {
    e.stopPropagation();
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
        <img src={`${props.currentItem.results[0].photos[0].url || MigoPNG}`}/>
        <SearchIcon className="modal-button" onClick={(e) => showComparison(props.currentItem, e)}/>
      </div>
    )

}
