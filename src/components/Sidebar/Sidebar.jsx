import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/theme-context";
import { useToast } from "../../context/toast-context";

function Sidebar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { theme, setTheme } = useTheme();
  const { setToastData } = useToast();

  function handleLogout() {
    setToastData({
      show: true,
      type: "success",
      message: "Successful logout",
    });
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("isGuest");
    localStorage.removeItem("token");
    localStorage.removeItem("isGuestLogin");
    window.location.href = "/";
  }

  return (
    <div className="videolib-drawer-container viewport-height-100">
      <ul className="videolib-list">
        <li
          className="videolib-list-item sidebar-list"
          onClick={() => navigate("/")}
        >
          <i className="fa-solid fa-house-chimney videolib-drawer-icon"></i>{" "}
          Home
        </li>
        <li
          className="videolib-list-item sidebar-list"
          onClick={() => navigate(token ? "/products" : "/login")}
        >
          <i className="fa-solid fa-basket-shopping videolib-drawer-icon"></i>{" "}
          Products
        </li>
        <li
          className="videolib-list-item sidebar-list"
          onClick={() => navigate(token ? "/wishlist" : "/login")}
        >
          <i className="fa-solid fa-heart videolib-drawer-icon"></i> Wishlist
        </li>

        <li
          className="videolib-list-item sidebar-list"
          onClick={() => navigate(token ? "/cart" : "/login")}
        >
          <i className="fa-solid fa-cart-shopping videolib-drawer-icon"></i>{" "}
          Cart
        </li>

        <li
          className="videolib-list-item sidebar-list"
          onClick={() =>
            setTheme((theme) => (theme == "light" ? "dark" : "light"))
          }
        >
          <i
            className={`videolib-drawer-icon ${
              theme == "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"
            }`}
          ></i>
          {theme == "light" ? "Dark" : "Light"} theme
        </li>

        <li
          className="videolib-list-item sidebar-list"
          onClick={() => navigate(token ? "/profile" : "/login")}
        >
          <i className="fa-solid fa-user videolib-drawer-icon"></i> Profile
        </li>

        <li
          className="videolib-list-item sidebar-list"
          onClick={() => (token ? handleLogout() : navigate("/login"))}
        >
          <i className="fa-solid fa-right-to-bracket videolib-drawer-icon"></i>

          {token ? "Logout" : "Login"}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
