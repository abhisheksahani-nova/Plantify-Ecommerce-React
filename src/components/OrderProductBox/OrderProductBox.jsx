import React from "react";

function OrderProductBox({ product }) {
  const { img, title, plantType, categoryName } = product;

  return (
    <div className="d-flex gap-3 p-1">
      <img className="order-product-img" src={img} />

      <div className="d-flex f-direction-col">
        <p className="mb-smallest order-para-text">
          {`${title}, ${plantType} ( ${categoryName} )`}
        </p>
        <small>Return window closed on 14-Oct-2021</small>
        <button className="btn custom_btn btn-resize mt-1 btn-small">
          <i class="fa-solid fa-rotate-left mr-small"></i>
          Buy it again
        </button>
      </div>
    </div>
  );
}

export default OrderProductBox;
