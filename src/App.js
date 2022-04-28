import "./App.css";
import {
  Cart,
  HomePage,
  LoginPage,
  PageNotFound,
  ProductListing,
  Signup,
  Wishlist,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./RequiresAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductListing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
