import { Navigation } from "../../components";
import "./wishlist-page.css";
import { useProduct } from "../../context/ProductContext";

export default function Wishlist() {
  const {
    ProductState: { wishlist },
    ProductDispatch,
  } = useProduct();
  console.log(wishlist);
  return (
    <div>
      <Navigation />
      <h1 class="mywishlist-heading center">My Wishlist</h1>
      {wishlist.map((w) => {
        return <div>{w.name}</div>;
      })}
    </div>
  );
}
