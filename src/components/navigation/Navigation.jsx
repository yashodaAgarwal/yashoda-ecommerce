import { Link } from "react-router-dom";
import { useProduct } from "../../context";
import "../../pages/home-page/home-page.css";

export default function Navigation() {
  const {
    ProductState: { cart, wishlist },
  } = useProduct();
  return (
    <nav className="flex nav-item">
      <div className="left-nav flex">
        <Link to="/">
          <p className="nav-heading">Delicious Cakes</p>
        </Link>
        <input className="search-bar" placeholder="Search" />
      </div>
      <div className="right-nav flex">
        <Link to="/login">
          <button className="btn btn-round">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-round">Signup</button>
        </Link>

        <Link to="/Wishlist">
          <button className="badge-button badge-lg">
            <i className="fas fa-heart fa-2x"></i>
            <span className="icon-button-badge flex center icon-xl">
              {wishlist.length}
            </span>
          </button>
        </Link>
        <Link to="/Cart">
          <button className="badge-button badge-lg">
            <i className="fas fa-shopping-cart fa-2x"></i>
            <span className="icon-button-badge flex center icon-xl">
              {cart.length}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
