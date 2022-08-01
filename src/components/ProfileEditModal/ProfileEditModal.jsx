import React, { useState } from "react";
import "./profileEditModal.css";

function ProfileEditModal({ setProfileEditModal }) {
  const [editUserData, setEditUserData] = useState({
    name: localStorage.getItem("username") || "",
    email: localStorage.getItem("email") || "",
  });

  function handleEditProfile() {
    localStorage.setItem("username", editUserData.name);
    localStorage.setItem("email", editUserData.email);
    setProfileEditModal((prev) => !prev);
  }

  return (
    <div>
      <div className="playlist-dropdown-container">
        <div
          className={`list-style-none playlist-stacklist profile-edit-modal p-1`}
        >
          <div
            className={`d-flex playlist-li-item videolib-list-container border-bottom j-space-between mb-1`}
          >
            <h3 className="break-word">Edit Profile</h3>
            <i
              className="fa-solid fa-rectangle-xmark cursor-p"
              onClick={() => setProfileEditModal((prev) => !prev)}
            ></i>
          </div>

          <div className="d-flex f-direction-col playlist-li-item cursor-p gap-small mb-1">
            <label className="profile-edit-modal-inp-label">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`profile-edit-modal-inp`}
              value={editUserData.name}
              onChange={(e) =>
                setEditUserData({ ...editUserData, name: e.target.value })
              }
            ></input>
          </div>

          <div className="d-flex f-direction-col playlist-li-item cursor-p gap-small mb-1">
            <label className="profile-edit-modal-inp-label">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className={`profile-edit-modal-inp`}
              value={editUserData.email}
              onChange={(e) =>
                setEditUserData({ ...editUserData, email: e.target.value })
              }
            ></input>
          </div>

          <div className="d-flex justify-cont-right">
            <button
              className="btn cta-btn btn-small"
              onClick={() => handleEditProfile()}
            >
              <i class="fa-solid fa-pen-to-square edit-pencil-icon"></i>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEditModal;
