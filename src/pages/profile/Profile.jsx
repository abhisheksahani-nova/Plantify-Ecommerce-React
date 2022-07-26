import React, { useState } from "react";
import { Navbar, ProfileEditModal } from "../../components/index";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const userProfileLinks = ["Profile", "Address", "Orders"];

function Profile() {
  const [openProfileEditModal, setProfileEditModal] = useState(false);
  const [profileImg, setProfileImg] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
  );

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const isGuestLogin = localStorage.getItem("isGuestLogin");
  const profilePic = localStorage.getItem("profilePic");
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

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
        const profilePic = localStorage.setItem("profilePic", reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <Navbar />
      {console.log(isGuestLogin)}

      {openProfileEditModal && (
        <ProfileEditModal setProfileEditModal={setProfileEditModal} />
      )}

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
        <div className="profile-page-container card-basic">
          <div className="d-flex justify-cont-center mb-2 mt-2 p-relative">
            <img
              className="avatar md object-fit-cover"
              src={profilePic ? profilePic : profileImg}
              alt="user avatar"
            />

            {isGuestLogin && (
              <label htmlFor="input-img">
                <i className="fa-solid fa-camera select-img-icon"></i>
              </label>
            )}

            <input
              className="d-none"
              type="file"
              accept="image/*"
              id="input-img"
              onChange={(e) => imageHandler(e)}
            />
          </div>
          <label className="inp-label d-block login_inp_label_resize inherit-clr mb-1 word-wrap">
            Name : {username}
          </label>
          <label className="inp-label d-block login_inp_label_resize inherit-clr mb-1 word-wrap">
            Email : {email}
          </label>
          <label className="inp-label d-block login_inp_label_resize inherit-clr mb-2 word-wrap">
            Password : **************
          </label>

          <button
            className="btn cta-btn btn-small"
            onClick={() => setProfileEditModal((prev) => !prev)}
          >
            Edit profile
          </button>
        </div>
      </section>
    </div>
  );
}

export default Profile;
