import { createContext, useReducer, useContext } from "react";
import { productReducer } from "../reducer";

const ProductFromServer = createContext(null);

const ProductProvider = ({ children }) => {
  const [ProductState, ProductDispatch] = useReducer(productReducer, {
    productdata: [],
    loading: true,
    cart: [],
    wishlist: [],
  });

  return (
    <ProductFromServer.Provider value={{ ProductState, ProductDispatch }}>
      {children}
    </ProductFromServer.Provider>
  );
};

const useProduct = () => useContext(ProductFromServer);

export { useProduct, ProductProvider };
