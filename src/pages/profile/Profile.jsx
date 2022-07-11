import React from "react";
import { Navbar } from "../../components/index";
import "./profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

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
