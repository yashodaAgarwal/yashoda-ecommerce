import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { serverReducer } from "../reducer";

const DataFromServer = createContext(null);

const ServerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(serverReducer, {
    categorydata: [] ,
    loading: true,
  });
  return (
    <DataFromServer.Provider value={{ state, dispatch }}>
      {children}
    </DataFromServer.Provider>
  );
};

const useServer = () => useContext(DataFromServer);

export { ServerProvider, useServer };
