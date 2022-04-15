// import { Navigation } from "../../components";
// import { useProduct } from "../../context/ProductContext";
// import "./cart-page.css";
// import { MdDelete } from "react-icons/md";
// export default function Cart() {
//   const {
//     ProductState: { cart },
//     ProductDispatch,
//   } = useProduct();
//   console.log(cart);
//   return (
//     <div>
//       <Navigation />
//       <div className="mycart-container">
//         <div className="mycart-heading ">Shopping Cart</div>
//         {cart.map((c) => {
//           return (
//             <div className="flex">
//               <img className="cart-image" src={c.image} alt={c.alt} />
//               <div className="cart-info">
//                 <p className="cart-title">{c.name}</p>
//                 <p className="cart-description">{c.description}</p>
//                 <div class="flex cart-price">
//                   <p >Rs. {c.price}</p>
//                   <p className="original-price">Rs. {c.originalPrice} </p>
//                   <p>{c.discount}% off</p>
//                 </div>
//                 <select
//                   className="qty-button"
//                   value={c.qty}
//                   onChange={(e) =>
//                     ProductDispatch({
//                       type: "CHANGE_IN_QTY",
//                       payload: { id: c.id, qty: e.target.value },
//                     })
//                   }
//                 >
//                   {[...Array(c.inStock).keys()].map((x) => (
//                     <option key={x + 1}>Qty: {x + 1}</option>
//                   ))}
//                 </select>
//                 <button
//                   onClick={() =>
//                     ProductDispatch({ type: "REMOVE_FROM_CART", payload: c })
//                   }
//                 >
//                   < MdDelete />
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       {/* <div class="price-container">
//         <h3 class="price-details-heading">PRICE DETAILS</h3>
//         <hr />
//         <div class="item">
//           <p class="list">Price of 2 Items</p>
//           <span class="price-items">400$</span>
//         </div>
//         <div class="item">
//           <p class="list">Discount</p>
//           <span class="price-items">-10$</span>
//         </div>
//         <div class="item">
//           <p class="list">Delievery charges</p>
//           <span class="price-items">10$</span>
//         </div> 
//         <hr />
//         <div class="item">
//           <p class="list">Total Amount</p>
//           <span class="price-items">400$</span>
//         </div>
//         <hr />
//         <div class="item saved-money">
//           <p class="list">You will save 10$ in this order</p>
//         </div>
//         <button class="btn-place-order">Place Order</button>
//       </div>
//     </div> */}
//     </div>
//   );
// }
