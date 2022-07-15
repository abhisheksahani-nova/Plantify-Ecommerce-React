import React from "react";

function OrderProductBox({ product, isCheckoutPage }) {
  const { img, title, plantType, categoryName, price, qty } = product;

  return (
    <div className="d-flex gap-3 p-1">
      <img className="order-product-img" src={img} />

      <div className="d-flex f-direction-col">
        <p
          className={`${
            isCheckoutPage ? "mb-small" : "mb-smallest"
          } order-para-text font-bold`}
        >
          {`${title}, ${plantType} ( ${categoryName} )`}
        </p>

        {isCheckoutPage && (
          <small className="verticalcard-wishlist-icon-select-clr font-bold">
            {" "}
            ₹{price}{" "}
          </small>
        )}

        {isCheckoutPage && (
          <small>
            {" "}
            <span className="font-bold">Quantity</span>: {qty}{" "}
          </small>
        )}

        {!isCheckoutPage && <small>Return window closed on 14-Oct-2022</small>}

        {!isCheckoutPage && (
          <button className="btn custom_btn btn-resize mt-1 btn-small">
            <i class="fa-solid fa-rotate-left mr-small"></i>
            Buy it again
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderProductBox;
