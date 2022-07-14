import React from "react";
import { OrderProductBox } from "../../components/index";

function Order({ orderData }) {
  const { createdAt, payment_amount, email, username, products } = orderData;

  return (
    <div className="order-card-container">
      <div className="d-flex gap-3 p-1 order-card-header border-bottom">
        <div className="d-flex f-direction-col">
          <small className="mb-small">ORDER PLACED</small>
          <small> {createdAt} </small>
        </div>
        <div className="d-flex f-direction-col">
          <small className="mb-small">TOTAL</small>
          <small>{payment_amount}</small>
        </div>
        <div className="d-flex f-direction-col">
          <small className="mb-small">SHIP TO</small>
          <small className="blue-clr"> {username} </small>
        </div>
      </div>

      <div className="d-flex gap-3 mt-1 p-1">
        {products.map((product) => {
          return <OrderProductBox key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Order;
