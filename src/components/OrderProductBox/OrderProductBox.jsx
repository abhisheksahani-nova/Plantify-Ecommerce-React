import React from "react";
import { useCart } from "../../context/cart-context";

function OrderProductBox({ product, isCheckoutPage }) {
  const { _id, img, title, plantType, categoryName, price, qty } = product;

  const { addProductToCart, productQtyIncrement, cartProducts } = useCart();

  const token = localStorage.getItem("token");

  function handleBuyAgainProduct(product, id, token) {
    if (cartProducts.find((product) => product._id == _id)) {
      productQtyIncrement(id, token);
    } else {
      addProductToCart(product, token);
    }
  }

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
          <button
            className="btn custom_btn btn-resize mt-1 btn-small"
            onClick={() => handleBuyAgainProduct(product, _id, token)}
          >
            <i className="fa-solid fa-rotate-left mr-small"></i>
            Buy it again
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderProductBox;
