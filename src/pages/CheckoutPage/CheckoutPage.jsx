import React, { useState } from "react";
import { Navbar, OrderProductBox } from "../../components/index";
import CartPayment from "../cart-management/CartPayment/CartPayment";
import "./checkoutPage.css";
import { useTheme } from "../../context/theme-context";
import { useCart } from "../../context/cart-context";

function CheckoutPage() {
  const [couponCode, setCouponCode] = useState("");
  const { addressInfo } = useTheme();
  const { cartProducts } = useCart();

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-around mt-2">
        <div className="d-flex f-direction-col gap-1 checkout-details-container">
          <div className="d-flex gap-3 p-1 order-card-header lightest-border border-radius">
            <div className="d-flex f-direction-col">
              <small className="mb-small font-bold">Shipping address</small>
              <small>
                {addressInfo.address1}, {addressInfo.address2}, -{" "}
                {addressInfo.pincode}, {addressInfo.country}
              </small>
            </div>
            <div className="d-flex f-direction-col">
              <small className="mb-small font-bold">Coupon code</small>
              <div className="d-flex gap-small">
                <input
                  className="coupon-code-input light-border"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  type="text"
                />
                <button className="btn custom_clear_btn bg-pri-clr">
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex f-direction-col gap-1 mt-1 mb-1 lightest-border border-radius">
            {cartProducts.map((product) => {
              return (
                <OrderProductBox
                  key={product._id}
                  product={product}
                  isCheckoutPage={true}
                />
              );
            })}
          </div>
        </div>

        <CartPayment />
      </div>
    </div>
  );
}

export default CheckoutPage;
