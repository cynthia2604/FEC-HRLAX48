import React from "react";
import ProductCardEntry from './ProductCardEntry'
import OutfitList from './OutfitList'
import Carousel from './Carousel'

export default function RelatedList(props) {

  const [whoRender, setWhoRender] = React.useState('related');

  const entry =  props.related.map(product => {
    if (props.selected.id !== product.id) {
      return(
        <div className="related-products-card" key={product.id} >
          <ProductCardEntry
            currentItem={product}
            render={whoRender}
            whoRender={setWhoRender}
            setRenderTable={props.setRenderTable}
            setSelectRelated={props.setSelectRelated}
            renderTable={props.renderTable}
            />
        </div>
      )
    }
  })

  return(
    <div className="card-product-list">
      <Carousel entry={entry}>
      </Carousel>
    </div>
  )
}