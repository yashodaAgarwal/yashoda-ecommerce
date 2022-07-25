import "../../pages/product-listing/produc-listing.css";
import { Link } from "react-router-dom";
import { useProduct } from "../../context";

const ContainerCard = ({ product }) => {
  const {
    ProductState: { cart, wishlist },
    productDispatch,
  } = useProduct();
  const prod = product.product;

  return (
    <div class="card-container">
      
      <img class="card-image" src={prod.image} alt={prod.alt} />
      <div class="description">
        <p class="card-heading">{prod.name}</p>
        <p className="product-description">{prod.description}</p>
        <div class="flex product-price">
          <p>Rs. {prod.price}</p>
          <p className="original-price">Rs. {prod.originalPrice} </p>
          <p>{prod.discount}% off</p>
        </div>
        <div className="flex product-button">
          {cart.some((p) => p.id === prod.id) ? (
            <Link to="/Cart">
              <button class="ecom-btn">Go To Cart</button>
            </Link>
          ) : (
            <button
              class="ecom-btn"
              onClick={() =>
                productDispatch({ type: "ADD_TO_CART", payload: prod })
              }
            >
              Add to Cart
            </button>
          )}
          {wishlist.some((p) => p.id === prod.id) ? (
            <button
              class="ecom-btn"
              onClick={() =>
                productDispatch({ type: "REMOVE_FROM_WISHLIST", payload: prod })
              }
            >
              Remove
            </button>
          ) : (
            <button
              class="ecom-btn"
              onClick={() =>
                productDispatch({ type: "ADD_TO_WISHLIST", payload: prod })
              }
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
