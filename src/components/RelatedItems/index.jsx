import React from "react";
import RelatedProductEntry from './RelatedProductEntry'
import axios from 'axios';
import OutfitList from './OutfitList'
import Options from '../../config.js';

export default function RelatedItems(props) {
  const [relatedItems, setRelatedItems] = React.useState([])

  React.useEffect(() => {
      axios.get(`${Options.URL}/products/${props.selected.id}/related`, {
        headers: {
          Authorization: Options.TOKEN
        }
      }).then((res) => {
        let related = props.products.filter(item => res.data.includes(item.id))
        setRelatedItems(related)
      })
   }, [])

  const entry = relatedItems.map(product => (
    <div className="related-products-card" key={product.id}>
      <RelatedProductEntry related={product}/>
    </div>
  ))

  return (
    <div className="related-products">
      <div className="sectionTitle">RELATED ITEMS</div>
        <div className="card-products-list">
          {entry}
        </div>
      <div className="sectionTitle">YOUR OUTFITS</div>
        <div className="user-created-outfit">
          <OutfitList currentView={props.selected} setSaved={props.setSaved} outfits={props.outfits}/>
        </div>
    </div>
  )
}