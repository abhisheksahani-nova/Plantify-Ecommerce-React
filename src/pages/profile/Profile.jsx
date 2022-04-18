import React from "react";
import { Navbar } from "../../components/index";
import "./profile.css";
import { NavLink } from "react-router-dom";

function Profile() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  return (
    <div>
      <Navbar />

      <ul className="categories_navTabs_list mb-2">
        <li>
          <NavLink
            to="/profile"
            className="categories_navLink categories_navLink1"
          >
            Profile
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className="categories_navLink categories_navLink1"
          >
            Addresses
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className="categories_navLink categories_navLink1"
          >
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className="categories_navLink categories_navLink1"
          >
            Setting
          </NavLink>
        </li>
      </ul>

      <section className="d-flex justify-cont-center">
        <div className="profile-page-container card-basic width-auto">
          <div className="d-flex justify-cont-center mb-2 mt-2">
            <img
              className="avatar md"
              src="https://semantic-ui.com/images/avatar2/large/matthew.png"
            />
          </div>
          <label className="inp-label d-block login_inp_label_resize inherit-clr mb-1">
            Name : {username ? username : "Abhishek Sahani"}
          </label>
          <label className="inp-label d-block login_inp_label_resize inherit-clr mb-1">
            Email : {email}
          </label>
          <label className="inp-label d-block login_inp_label_resize inherit-clr mb-1">
            Password : *************
          </label>
        </div>
      </section>
    </div>
  );
}

export default Profile;
