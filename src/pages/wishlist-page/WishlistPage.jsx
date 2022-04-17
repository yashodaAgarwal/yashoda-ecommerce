import { Navigation } from "../../components";
import "./wishlist-page.css";
import { Link } from "react-router-dom";
import { useProduct } from "../../context";

export default function Wishlist() {
  const {
    ProductState: { wishlist, cart },
    productDispatch,
  } = useProduct();
  return (
    <div>
      <Navigation />
      
      {wishlist.length>0?(
        <div>
      <h1 class="wishlist-heading center">My Wishlist</h1>
      <div className="wishlist-flex">
        {wishlist.map((item) => {
          return (
            <div className="wishlist-container">
              <div className="wishlist-card">
                <img className="card-image" src={item.image} alt={item.alt}></img>
                <div class="description">
                  <p class="card-heading center">{item.name}</p>
                  <p className="product-description">{item.description}</p>
                  <div class="flex product-price">
                    <p>Rs. {item.price}</p>
                    <p className="original-price">Rs. {item.originalPrice} </p>
                    <p>{item.discount}% off</p>
                  </div>
                  <div className="flex product-button">
                    {cart.some((cartitem) => cartitem.id === item.id) ? (
                      <Link to="/Cart">
                        <button class="ecom-btn">Move To Cart</button>
                      </Link>
                    ) : (
                      <button
                        class="ecom-btn"
                        onClick={() =>
                          productDispatch({ type: "ADD_TO_CART", payload: item })
                        }
                      >
                        Add to Cart
                      </button>
                    )}
                    <button
                      class="ecom-btn"
                      onClick={() =>
                        productDispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: item,
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div></div>):(
        <div className="No-wishlist">No Wishlist items</div>
      )}
      
    </div>
  );
}
