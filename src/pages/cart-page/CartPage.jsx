import { useState } from "react";
import { useEffect } from "react";
import { Navigation } from "../../components";
import { useProduct } from "../../context/ProductContext";
import "./cart-page.css";

export default function Cart() {
  const {
    ProductState: { cart, wishlist },
    productDispatch,
  } = useProduct();

  const [Total, setTotal] = useState(0);
  const [Discount, setDiscount] = useState(0);
  const [OriginalTotal, setOriginalTotal] = useState(0);

  useEffect(() => {
    setOriginalTotal(
      cart.reduce((acc, curr) => acc + Number(curr.originalPrice * curr.qty), 0)
    );
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
    );
    setDiscount(
      cart.reduce(
        (acc, curr) =>
          acc + Number((curr.originalPrice - curr.price) * curr.qty),
        0
      )
    );
  }, [cart]);

  return (
    <div>
      <Navigation />
      <div className="mycart-container">
        <div className="mycart-heading ">Shopping Cart ({cart.length})</div>
        {cart.map((item) => {
          return (
            <div className="flex">
              <img className="cart-image" src={item.image} alt={item.alt} />
              <div className="cart-info">
                <p className="cart-title">{item.name}</p>
                <p className="cart-description">{item.description}</p>
                <div class="flex cart-price">
                  <p>Rs. {item.price}</p>

                  <p className="original-price">Rs. {item.originalPrice} </p>
                  <p>{item.discount}% off</p>
                </div>
                <select
                  className="qty-button"
                  value={item.qty}
                  onChange={(e) =>
                    productDispatch({
                      type: "CHANGE_IN_QTY",
                      payload: { id: item.id, qty: e.target.value },
                    })
                  }
                >
                  {[...Array(item.inStock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </select>
                <button className="remove-btn"
                  onClick={() =>
                    productDispatch({ type: "REMOVE_FROM_CART", payload: item })
                  }
                >
                  Delete
                </button>
                {wishlist.some(
                  (wishlistItem) => wishlistItem.id === item.id
                ) ?  (
                  <button
                    class="ecom-btn"
                  >
                    Add to Wishlist
                  </button>
                ):(
                  <button
                    class="ecom-btn"
                    onClick={() =>
                      productDispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: item,
                      })
                    }
                  >
                    Add to Wishlist
                  </button>
                ) }
              </div>
            </div>
          );
        })}
      </div>
      <div className="Price-container">
        <h3 class="price-details-heading">PRICE DETAILS</h3>
        <hr />
        <div class="item">
          <p class="list">Price of {cart.length} Items</p>
          <span class="price-items">{OriginalTotal}</span>
        </div>
        <div class="item">
          <p class="list">Discount</p>
          <span class="price-items">-{Discount}</span>
        </div>
        <div class="item">
          <p class="list">Delivery charges</p>
          <span class="price-items">FREE</span>
        </div>
        <hr />
        <div class="item">
          <p class="list">Total Amount</p>
          <span class="price-items">{Total}</span>
        </div>
        <hr />
        <div class="item saved-money">
          <p class="list">You will save {Discount} in this order</p>
        </div>
        <button class="btn-place-order">Place Order</button>
      </div>
    </div>
  );
}
