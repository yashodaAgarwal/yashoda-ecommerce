import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider, ProductProvider, ServerProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ServerProvider>
      <FilterProvider>
        <ProductProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductProvider>
      </FilterProvider>
    </ServerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
