import "./cartPayment.css";

function CartPayment() {
  return (
    <div class="cart_payment_receipt card-basic">
      <div class="b-bottom1 cart_pricedetails_section_gap">
        <h4>PRICE DETAILS</h4>
      </div>
      <div class="cart_pricedetails_section cart_pricedetails_section_gap d-flex">
        <p>Price (3 items)</p>
        <p>₹ 3,000</p>
      </div>

      <div class="cart_pricedetails_section cart_pricedetails_section_gap d-flex">
        <p>Discount</p>
        <p>− ₹3,660</p>
      </div>

      <div class="cart_pricedetails_section cart_pricedetails_section_gap d-flex">
        <p>Coupons for you</p>
        <p>− ₹100</p>
      </div>

      <div class="cart_pricedetails_section cart_pricedetails_section_gap d-flex b-bottom1">
        <p>Delivery Charges</p>
        <p>FREE</p>
      </div>

      <div class="cart_pricedetails_section cart_pricedetails_section_gap d-flex b-bottom1">
        <h3>TOTAL AMOUNT</h3>
        <h3>₹837</h3>
      </div>

      <p class="cart_pricedetails_section_gap">
        You will save ₹3,760 on this order
      </p>

      <div class="cart_pricedetails_section_gap mb-1">
        <button class="btn cta-btn cart_pricedetails_section_gap width-100p">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default CartPayment;
