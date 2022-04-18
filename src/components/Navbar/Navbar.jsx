import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { useTheme } from "../../context/theme-context";

function Navbar() {
  const { cartProducts } = useCart();
  const { wishlistProducts } = useWishlist();
  const { theme, setTheme } = useTheme();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    navigate("/");
  }

  function handleThemeChange() {
    setTheme((theme) => (theme == "light" ? "dark" : "light"));
  }

  return (
    <nav
      className={`nav-bar white mb-0 ${
        (location.pathname == "/singleproduct" ||
          location.pathname == "/profile") &&
        "nav-border"
      }`}
    >
      <div className="nav-innerContainer font-clr">
        <NavLink className="navlink-custom-style" to="/">
          <h2 className="nav-heading mr-1 font-resize">Plantify.</h2>
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
          <div className="flex-col-center">
            <i
              className={
                theme == "light"
                  ? "fa-solid fa-moon"
                  : "fa-solid fa-sun nav-icon-clr"
              }
              onClick={handleThemeChange}
            ></i>
            <small>{theme == "light" ? "dark" : "light"}</small>
          </div>
        </div>

        <div className="flex-col-center">
          <NavLink className="nav-icon-clr" to="/" exact="true">
            <i class="fa-solid fa-house-chimney"></i>
          </NavLink>
          <small>Home</small>
        </div>

        <div className="flex-col-center">
          <NavLink
            className="nav-icon-clr"
            to={token ? "/profile" : "/login"}
            exact="true"
          >
            <i class="fa-solid fa-user"></i>
          </NavLink>

          <small>Profile</small>
        </div>

        <div className="flex-col-center">
          <NavLink
            className="nav-icon-clr"
            to={token ? "/wishlist" : "/login"}
            exact="true"
          >
            <div className="badge-container">
              <i className="fa-solid fa-heart f-size-large"></i>
              <span className="badge notification-right-badge badge-lg">
                {wishlistProducts?.length}
              </span>
            </div>
          </NavLink>

          <small>Wishlist</small>
        </div>

        <div className="flex-col-center">
          <NavLink
            className="nav-icon-clr nav-icon"
            to={token ? "/cart" : "/login"}
            exact="true"
          >
            <div class="badge-container">
              <i className="fa-solid fa-cart-shopping f-size-large"></i>
              <span class="badge notification-right-badge badge-lg">
                {cartProducts?.length}
              </span>
            </div>
          </NavLink>

          <small>Cart</small>
        </div>

        <button
          className="btn nav-auth-btn-style"
          onClick={() => (token ? handleLogout() : navigate("/login"))}
        >
          {token ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
