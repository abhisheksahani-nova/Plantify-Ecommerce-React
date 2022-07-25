import React from "react";
import "./profileEditModal.css";

function ProfileEditModal({ setProfileEditModal }) {
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
            <label className="profile-edit-modal-inp-label">Bio</label>
            <input
              type="text"
              placeholder="Enter your bio"
              className={`profile-edit-modal-inp`}
              onChange={(e) =>
                setEditUserData({ ...editUserData, bio: e.target.value })
              }
            ></input>
          </div>

          <div className="d-flex f-direction-col playlist-li-item cursor-p gap-small mb-2">
            <label className="profile-edit-modal-inp-label">Portfolio</label>
            <input
              type="text"
              placeholder="Enter your portfolio"
              className={`profile-edit-modal-inp`}
            ></input>
          </div>

          <div className="d-flex justify-cont-right">
            <button className="btn btn-custom-sty">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEditModal;
