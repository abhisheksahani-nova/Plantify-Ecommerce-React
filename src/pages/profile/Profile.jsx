import React from "react";
import { Navbar } from "../../components/index";
import "./profile.css";
import { NavLink } from "react-router-dom";

const userProfileLinks = ["Profile", " Addresses", "Orders", "Setting"];

function Profile() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  return (
    <div>
      <Navbar />

      <ul className="categories_navTabs_list mb-2">
        {userProfileLinks.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to="/profile"
                className="categories_navLink categories_navLink1"
              >
                {link}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <section className="d-flex justify-cont-center">
        <div className="profile-page-container card-basic width-auto">
          <div className="d-flex justify-cont-center mb-2 mt-2">
            <img
              className="avatar md"
              src="https://semantic-ui.com/images/avatar2/large/matthew.png"
              alt="user avatar"
            />
          </div>
          <label className="inp-label d-block login_inp_label_resize inherit-clr mb-1">
            Name : {username ? username : "Abhishek Sahani"}
          </label>
          <label className="inp-label d-block login_inp_label_resize inherit-clr mb-1">
            Email : {email}
          </label>
          <label className="inp-label d-block login_inp_label_resize inherit-clr mb-1">
            Password : *******************
          </label>
        </div>
      </section>
    </div>
  );
}

export default Profile;
