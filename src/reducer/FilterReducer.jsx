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
      const { byCategory } = state;
      return byCategory.includes(action.payload)
        ? {
            ...state,
            byCategory: byCategory.filter(
              (category) => category !== action.payload
            ),
          }
        : { ...state, byCategory: [...byCategory, action.payload] };
    case "Search_By_Filter":{
      console.log(action.payload)
      return {...state,searchQuery:action.payload}
    }
    case "Clear_Filter":
      return {
        byCategory: [],
        sortBy: null,
        byRating: 0,
        byPrice: null,
        searchQuery:""
      };
    default:
      return state;
  }
};

export default FilterReducer;
