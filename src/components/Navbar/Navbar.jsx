import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

function Navbar() {
  const { cartProducts } = useCart();
  const { wishlistProducts } = useWishlist();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <nav className="nav-bar white mb-0">
      <div className="nav-innerContainer font-clr">
        <NavLink className="navlink-custom-style" to="/">
          <h2 className="nav-heading mr-4 font-resize">Plant.</h2>
        </NavLink>
      </div>

      <div className="nav-innerContainer font-clr width-auto">
        <input className="nav_searchBar" type="text" />
        <span className="searchBar_icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>

      <div className="nav-innerContainer nav-icon-container nav-width-reset inherit-clr mr-1 align-items-center">
        <div className="flex-col-center">
          <NavLink className="font-clr" to="/" exact="true">
            <i class="fa-solid fa-house-chimney"></i>
          </NavLink>
          <small>Home</small>
        </div>

        <div className="flex-col-center">
          {token ? (
            <NavLink className="font-clr" to="/wishlist" exact="true">
              <div className="badge-container">
                <i className="fa-solid fa-heart f-size-large"></i>
                <span className="badge notification-right-badge badge-lg">
                  {wishlistProducts?.length}
                </span>
              </div>
            </NavLink>
          ) : (
            <NavLink className="font-clr" to="/login" exact="true">
              <i className="fa-solid fa-heart"></i>
            </NavLink>
          )}

          <small>Wishlist</small>
        </div>

        <div className="flex-col-center">
          {token ? (
            <NavLink className="font-clr nav-icon" to="/cart" exact="true">
              <div class="badge-container">
                <i className="fa-solid fa-cart-shopping f-size-large"></i>
                <span class="badge notification-right-badge badge-lg">
                  {cartProducts?.length}
                </span>
              </div>
            </NavLink>
          ) : (
            <NavLink className="font-clr nav-icon" to="/login" exact="true">
              <i className="fa-solid fa-cart-shopping f-size-large"></i>
            </NavLink>
          )}

          <small>Cart</small>
        </div>

        {token ? (
          <button
            className="btn nav-auth-btn-style"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login">
            <button className="btn nav-auth-btn-style">Login</button>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
