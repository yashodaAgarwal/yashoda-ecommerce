import "./App.css";
import { Cart, HomePage, ProductListing, Wishlist } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductListing />} />
        <Route path="/signup" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
