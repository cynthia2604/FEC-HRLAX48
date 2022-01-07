import React from 'react';
import RelatedList from '../RelatedItems/RelatedItemsList/RelatedList';
import axios from 'axios';
import OutfitList from '../RelatedItems/OutfitList/OutfitList';
import Compare from '../RelatedItems/Compare/Compare';
import Options from '../../config.js';

export default function RelatedItems(props) {
  const [width, setWidth] = React.useState(0);
  const [relatedItems, setRelatedItems] = React.useState([]);
  const [renderTable, setRenderTable] = React.useState(false);
  const [selectRelated, setSelectRelated] = React.useState();

  React.useEffect(() => {
    axios
      .get(`${Options.URL}/products/${props.selected.id}/related`, {
        headers: {
          Authorization: Options.TOKEN,
        },
      })
      .then((res) => {
        let related = props.products.filter((item) =>
          res.data.includes(item.id)
        );
        let filteredRelated = related.filter(
          (product) => product.id !== props.selected.id
        );
        setRelatedItems(filteredRelated);
        setWidth(
          () => document.getElementById('related-product-list').offsetWidth
        );
      });
  }, [props.selected]);

  return (
    <div
      className='related-products'
      onClick={(e) => props.tracker(e, 'Related Items')}
    >
      <div className='sectionTitle'>RELATED ITEMS</div>
      <div id='related-product-list'>
        {renderTable && (
          <Compare
            related={relatedItems}
            renderTable={renderTable}
            setRenderTable={setRenderTable}
            selected={props.selected}
            selectRelated={selectRelated}
            darkTheme={props.darkTheme}
          />
        )}
        <RelatedList
          selected={props.selected}
          related={relatedItems}
          setRenderTable={setRenderTable}
          renderTable={renderTable}
          setSelected={props.setSelected}
          setSelectRelated={setSelectRelated}
          darkTheme={props.darkTheme}
          width={width}
        />
      </div>
      {props.saved?.length > 0 && (
        <>
          <div className='sectionTitle' style={{ paddingTop: '30px' }}>
            YOUR OUTFITS
          </div>
          <div className='user-created-outfit'>
            <OutfitList
              products={props.products}
              related={relatedItems}
              currentView={props.selected}
              setSelected={props.setSelected}
              saved={props.saved}
              setSaved={props.setSaved}
              outfits={props.outfits}
              selectedStyle={props.selectedStyle}
              darkTheme={props.darkTheme}
              rating={props.rating}
              width={width}
            />
          </div>
        </>
      )}
    </div>
  );
}
