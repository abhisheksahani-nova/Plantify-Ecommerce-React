import React from "react";
import "./couponModal.css";

function CouponModal({ setOpenCouponModal }) {
  return (
    <div>
      <div className="playlist-dropdown-container">
        <div
          className={`list-style-none playlist-stacklist profile-edit-modal modal-width-resize `}
        >
          <div className="coupon-modal-body p-relative">
            <h1 className="coupon-modal-header">10% Off</h1>
            <h3>Your Purchase</h3>

            <i
              className="fa-solid fa-square-xmark dismiss-card coupon-modal-close-icon"
              onClick={() => setOpenCouponModal((prev) => !prev)}
            ></i>
          </div>

          <div className="coupon-modal-footer">
            <h4 className="font-bold">Use Code</h4>
            <small className="font-bold">SSW10NRATRG</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CouponModal;
