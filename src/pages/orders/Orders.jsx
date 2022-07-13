import React from "react";
import "./orders.css";
import { Navbar } from "../../components/index";
import { useNavigate } from "react-router-dom";

const userProfileLinks = ["Profile", "Address", "Orders"];

function Orders() {
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

      <div className="d-flex align-items-center justify-cont-center">
        <div className="order-card-container">
          <div className="d-flex gap-3 p-1 order-card-header border-bottom">
            <div className="d-flex f-direction-col">
              <small className="mb-small">ORDER PLACED</small>
              <small>11 September 2022</small>
            </div>
            <div className="d-flex f-direction-col">
              <small className="mb-small">TOTAL</small>
              <small>₹291</small>
            </div>
            <div className="d-flex f-direction-col">
              <small className="mb-small">SHIP TO</small>
              <small className="blue-clr">Abhishek Sahani</small>
            </div>
          </div>

          <div className="d-flex gap-3 mt-1 p-1">
            <img className="order-product-img" src="https://images-eu.ssl-images-amazon.com/images/I/41o3wAbJmOL._SY90_.jpg" />

            <div className="d-flex f-direction-col">
              <p className="mb-smallest order-para-text">
                Havintha Natural Hair Shampoo With Amla, Reetha, Shikakai and
                Methi Dana (Advanced Shampoo), 227 g
              </p>
              <small>Return window closed on 14-Oct-2021</small>
              <button className="btn custom_btn btn-resize mt-1 btn-small">
                <i class="fa-solid fa-rotate-left mr-small"></i>
                Buy it again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
