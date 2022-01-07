export default function getDefault(
  productStyles,
  productDetail,
  dispatch,
  index = 0
) {
  if (productStyles.results && productDetail) {
    let defaultObj = productStyles.results[index];
    let color = defaultObj?.name;
    let photos = defaultObj?.photos || [];
    let skus = defaultObj?.skus;
    let originalPrice = defaultObj?.original_price;
    let salePrice = defaultObj?.sale_price;

    let hasSku = () => {
      if (!skus || Object.keys(skus)[0] !== 'null') {
        return '-';
      } else {
        return 'Out Of Stock';
      }
    };

    dispatch({
      type: 'ADD_TO_SELECTED',
      item: {
        color: color,
        skus: skus,
        photos: photos,
        thumbnail: photos[0]?.thumbnail_url,
        originalPrice: originalPrice,
        salePrice: salePrice,
        size: 'Select Size',
        quantity: hasSku(),
        disabled: true,
        productName: productDetail.name,
        category: productDetail.category,
        productId: productDetail.id,
        index: index,
      },
    });
  }
}
