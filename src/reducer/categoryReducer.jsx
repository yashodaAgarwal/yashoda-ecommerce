const serverReducer = (state, action) => {
    switch (action.type) {
      case "savedata":
        console.log(action.payload)
        return { ...state, categorydata: action.payload, loading: false };
      default:
        return state;
    }
  };

  export default serverReducer; 