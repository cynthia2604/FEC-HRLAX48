export const initialState = {
  basket: [],
  selected: {},
};

// Selector
const reducer = (state, action) => {
  console.log(action);
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
