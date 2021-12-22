import React from 'react';
import axios from 'axios';
import Options from '../../config.js';
import ProductImage from './ProductImage'

export default function RelatedProductEntry(props) {

  const [ current, setCurrent ] = React.useState({results: [{photos: [{ url: ''}]}]})

  React.useEffect(()=>{
    const params = {
      product_id: props.related.id
    }
    axios.get(`${Options.URL}/products/${params.product_id}/styles/?count=20`, {
      headers: {
        Authorization: Options.TOKEN
      }
    }).then(res => setCurrent(res.data))
  }, [])


  return (
    <div className="related-product-card-entry">
      <ProductImage currentItem={current} />
      <div className="related-product-category"> {props.related.category}</div>
      <div className="related-product-name">{props.related.name}</div>
      <div className="related-product-price">{props.related.default_price}</div>
    </div>
  )
}

