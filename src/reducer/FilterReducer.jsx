const FilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state, 
        sortBy: action.payload,
      };
    case "RATING":
      return {
        ...state,
        byRating: action.payload,
      };
    case "CATEGORY":
      return {
        ...state,
        byCategory: action.payload,
      };
    case "Clear_Filter":
      return {
        byCategory: null,
        sortBy: null,
        byRating: 0,
        byPrice: null,
      };
    default:
      return state;
  }
};

export default FilterReducer;
