import React from "react";
import { Navbar } from "../../components/index";
import CartPayment from "../cart-management/CartPayment/CartPayment";

function CheckoutPage() {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-cont-center align-items-center mt-2">
        <CartPayment />
      </div>
    </div>
  );
}

export default CheckoutPage;
