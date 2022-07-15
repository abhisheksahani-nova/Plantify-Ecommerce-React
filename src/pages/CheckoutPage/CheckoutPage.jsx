import React, { useState } from "react";
import { Navbar } from "../../components/index";
import CartPayment from "../cart-management/CartPayment/CartPayment";
import "./checkoutPage.css";
import { useTheme } from "../../context/theme-context";

function CheckoutPage() {
  const [couponCode, setCouponCode] = useState("");
  const { addressInfo } = useTheme();

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-around mt-2">
        <div className="checkout-details-container">
          <div className="d-flex gap-3 p-1 order-card-header light-border">
            <div className="d-flex f-direction-col">
              <small className="mb-small font-bold">Shipping address</small>
              <small>
                {addressInfo.address1}, {addressInfo.address2},{" "}
                {addressInfo.city}, {addressInfo.state} - {addressInfo.pincode}{" "}
                {addressInfo.country}
              </small>
            </div>
            <div className="d-flex f-direction-col">
              <small className="mb-small font-bold">Coupon code</small>
              <div className="d-flex gap-small">
                <input
                  className="coupon-code-input light-border"
                  onChange={(e) => setCouponCode(e.target.value)}
                  type="text"
                />
                <button className="btn custom_clear_btn bg-pri-clr">
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div></div>
        </div>

        <CartPayment />
      </div>
    </div>
  );
}

export default CheckoutPage;
