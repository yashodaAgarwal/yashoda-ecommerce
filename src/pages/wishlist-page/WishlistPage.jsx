import { Navigation } from "../../components";
import "./wishlist-page.css";
import { useProduct } from "../../context/ProductContext";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const {
    ProductState: { wishlist,cart },
    ProductDispatch,
  } = useProduct();
  console.log(wishlist);
  return (
    <div>
      <Navigation />
      <h1 class="wishlist-heading center">My Wishlist</h1>
      <div className="wishlist-flex">
      {wishlist.map((w) => {
        return (
          <div className="wishlist-container">
          <div className="wishlist-card">
            <img className="card-image" src={w.image} alt={w.alt}></img>
            <div class="description">
        <p class="card-heading center">{w.name}</p>
        <p className="product-description">{w.description}</p>
        <div class="flex product-price">
          <p>Rs. {w.price}</p>
          <p className="original-price">Rs. {w.originalPrice} </p>
          <p>{w.discount}% off</p>
        </div>
        <div className="flex product-button">
          {cart.some((c) => c.id === w.id) ? (
            <Link to="/Cart" >
              <button class="ecom-btn" >Move To Cart</button>
            </Link>
          ) : (
            <button
              class="ecom-btn"
              onClick={() =>
                ProductDispatch({ type: "ADD_TO_CART", payload: w })
              }
            >
              Add to Cart
            </button>
          )}
          <button
              class="ecom-btn"
              onClick={() =>
                ProductDispatch({ type: "REMOVE_FROM_WISHLIST", payload: w })
              }
            >
              Remove
            </button>
        </div>
          </div>
          </div>
          </div>
        )
        
      })}
    </div>
    </div>
  );
}
