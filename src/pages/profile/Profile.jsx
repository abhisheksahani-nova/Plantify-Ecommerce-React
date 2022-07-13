import React from "react";
import { Navbar } from "../../components/index";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const userProfileLinks = ["Profile", "Address", "Orders"];

function Profile() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
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

      <section className="d-flex justify-cont-center">
        <div className="profile-page-container card-basic width-auto">
          <div className="d-flex justify-cont-center mb-2 mt-2">
            <img
              className="avatar md"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="user avatar"
            />
          </div>
          <label className="inp-label d-block login_inp_label_resize inherit-clr mb-1">
            Name : {username ? username : "Abhishek Sahani"}
          </label>
          <label className="inp-label d-block login_inp_label_resize inherit-clr mb-1">
            Email : {email}
          </label>
          <label className="inp-label d-block login_inp_label_resize inherit-clr mb-2">
            Password : *******************
          </label>

          <button
            className="btn cta-btn btn-small"
            onClick={() => navigate("/address")}
          >
            Add address
          </button>
        </div>
      </section>
    </div>
  );
}

export default Profile;
