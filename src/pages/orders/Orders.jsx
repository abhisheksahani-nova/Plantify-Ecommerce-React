import React from "react";
import "./orders.css";
import { Navbar, Order, Footer } from "../../components/index";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/products-context";

const userProfileLinks = ["Profile", "Address", "Orders"];

function Orders() {
  const { orders, setOrders } = useProducts();
  const navigate = useNavigate();

  function handleTabClick(link) {
    if (link == "Profile") {
      navigate("/profile");
    } else if (link == "Address") {
      navigate("/address");
    } else if (link == "Orders") {
      navigate("/orders");
    }
  }

  return (
    <div>
      <Navbar />

      <ul className="categories_navTabs_list mb-1 mt-1">
        {userProfileLinks.map((link, index) => {
          return (
            <li
              className="categories_navLink categories_navLink1 cursor-pointer"
              key={index}
              onClick={() => handleTabClick(link)}
            >
              {link}
            </li>
          );
        })}
      </ul>

      {orders.length > 0 ? (
        <div className="d-flex gap-3 f-direction-col align-items-center j-content-start order-card-main-container mb-2">
          {orders.map((orderData) => {
            return <Order key={orderData._id} orderData={orderData} />;
          })}
        </div>
      ) : (
        <div className="empty-shooping-cart-icon-container empty-shopping-cart-height">
          <i className="fa-solid fa-basket-shopping empty-shooping-cart-icon"></i>
          <button className="btn cta-btn" onClick={() => navigate("/products")}>
            Browse Products
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Orders;
