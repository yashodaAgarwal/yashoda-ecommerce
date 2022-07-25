import { Link } from "react-router-dom";
import { useAuth, useProduct, useFilter } from "../../context";
import "../../pages/home-page/home-page.css";

export default function Navigation() {
  const {
    ProductState: { cart, wishlist },
  } = useProduct();
  const { FilterDispatch } = useFilter();
  const { isLogin, setIsLogin } = useAuth();
  return (
    <nav className="flex nav-item">
      <div className="left-nav flex">
        <Link to="/">
          <p
            className="nav-heading"
            onClick={() => {
              FilterDispatch({ type: "Clear_Filter" });
            }}
          >
            Delicious Cakes
          </p>
        </Link>
        <input
          className="search-bar"
          placeholder="Search"
          onChange={(e) => {
            FilterDispatch({
              type: "Search_By_Filter",
              payload: e.target.value,
            });
          }}
        />
      </div>
      <div className="right-nav flex">
        <Link to="/login">
          {isLogin ? (
            <button
              className="btn btn-round"
              onClick={() => setIsLogin((isLogin) => !isLogin)}
            >
              logout
            </button>
          ) : (
            <button className="btn btn-round">login</button>
          )}
        </Link>
        <Link to="/signup">
          {isLogin ? <></> : <button className="btn btn-round Lbtn">SignUp</button>}
        </Link>
        <Link to="/Wishlist">
          <button className="badge-button badge-lg">
            <i className="fas fa-heart fa-2x"></i>
            <span className="icon-button-badge flex center icon-xl">
              {isLogin ? wishlist.length : 0}
            </span>
          </button>
        </Link>
        <Link to="/Cart">
          <button className="badge-button badge-lg">
            <i className="fas fa-shopping-cart fa-2x"></i>
            <span className="icon-button-badge flex center icon-xl">
              {isLogin ? cart.length : 0}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
