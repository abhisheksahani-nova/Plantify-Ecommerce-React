import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  const token = localStorage.getItem("token");

  return (
    <footer>
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
    </footer>
  );
}

export default Footer;
