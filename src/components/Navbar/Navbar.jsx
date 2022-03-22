import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="nav-bar white mb-0">
      <div className="nav-innerContainer font-clr">
        <NavLink to="/" ><h2 className="nav-heading mr-4 font-resize">Plant.</h2></NavLink>
      </div>

      <div className="nav-innerContainer font-clr width-auto">
        <input className="nav_searchBar" type="text" />
        <span className="searchBar_icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>

      <div className="nav-innerContainer nav-icon-container nav-width-reset inherit-clr mr-1 align-items-center">
        <div className="flex-col-center">
          {token ? (
            <NavLink className="font-clr" to="/wishlist" exact="true" >
              <i className="fa-solid fa-heart"></i>
            </NavLink>
          ) : (
            <NavLink className="font-clr" to="/login" exact="true" >
              <i className="fa-solid fa-heart"></i>
            </NavLink>
          )}

          <small>Wishlist</small>
        </div>

        <div className="flex-col-center">
          {token ? 
            <NavLink className="font-clr nav-icon" to="/cart" exact="true" >
            <i className="fa-solid fa-cart-shopping f-size-large"></i>
            </NavLink> :
            <NavLink className="font-clr nav-icon" to="/login" exact="true" >
            <i className="fa-solid fa-cart-shopping f-size-large"></i>
            </NavLink>
          }

          <small>Cart</small>
        </div>

        <div className="flex-col-center">
          <NavLink className="font-clr" to="/login" exact="true">
            <i className="fa-solid fa-user"></i>
          </NavLink>

          <small>Profile</small>
        </div>

        <NavLink to="/login">
          <button className="btn nav-auth-btn-style">Login</button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
