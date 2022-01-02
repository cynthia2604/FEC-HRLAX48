export const initialState = {
  basket: [],
  selected: {},
};

// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);

// export const getBasketQtyTotal = (basket) =>
//   basket?.reduce((amount, item) => item.quantity + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "ADD_TO_SELECTED":
      return {
        ...state,
        selected: { ...state.selected, ...action.item },
      };
    default:
      return state;
  }
};

export default reducer;
