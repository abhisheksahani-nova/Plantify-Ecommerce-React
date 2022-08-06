import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  const token = localStorage.getItem("token");

  return (
    <footer className="footer-container">
      <ul className="footer_list_items">
        <li>
          <NavLink className="mr-1 inherit-clr" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="mr-1 ml-1 inherit-clr" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className="mr-1 ml-1 inherit-clr"
            to={token ? "/cart" : "/login"}
          >
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            className="mr-1 ml-1 inherit-clr"
            to={token ? "/wishlist" : "/login"}
          >
            Wishlist
          </NavLink>
        </li>
      </ul>

      <div className="d-flex justify-cont-center">
        <div className="d-flex j-space-between footer-icon-cont">
          <i className="fa-brands fa-linkedin footer-icon"></i>
          <i className="fa-brands fa-github footer-icon"></i>
          <i className="fa-brands fa-hashnode footer-icon"></i>
        </div>
      </div>

      <div className="d-flex justify-cont-center">
        <div className="d-flex j-space-between footer-copyright-cont">
          <small> © | 2022 | abhishekSahani | Made with love❤️</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
