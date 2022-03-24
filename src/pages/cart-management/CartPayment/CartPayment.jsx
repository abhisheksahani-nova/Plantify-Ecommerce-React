import "./cartPayment.css";
import { useCart } from "../../../context/cart-context";

function CartPayment() {
  const { cartProducts } = useCart();

  const cartPrice = cartProducts.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );
  const discount = cartPrice - cartPrice / 2;
  const paymentPrice = cartPrice - discount;
  const savedPrice = cartPrice - paymentPrice;

  return (
    <div className="cart_payment_receipt card-basic">
      <div className="b-bottom1 cart_pricedetails_section_gap">
        <h4>PRICE DETAILS</h4>
      </div>
      <div className="cart_pricedetails_section cart_pricedetails_section_gap d-flex">
        <p>Price</p>
        <p>₹ {cartPrice ? cartPrice : 0}</p>
      </div>

      <div className="cart_pricedetails_section cart_pricedetails_section_gap d-flex">
        <p>Discount</p>
        <p> ₹{discount ? discount : 0} </p>
      </div>

      <div className="cart_pricedetails_section cart_pricedetails_section_gap d-flex">
        <p>Coupons for you</p>
        <p> ₹0</p>
      </div>

      <div className="cart_pricedetails_section cart_pricedetails_section_gap d-flex b-bottom1">
        <p>Delivery Charges</p>
        <p>FREE</p>
      </div>

      <div className="cart_pricedetails_section cart_pricedetails_section_gap d-flex b-bottom1">
        <h3>TOTAL AMOUNT</h3>
        <h3>₹{paymentPrice ? paymentPrice : 0} </h3>
      </div>

      <p className="cart_pricedetails_section_gap">
        You will save ₹{savedPrice ? savedPrice : 0} on this order
      </p>

      <div className="cart_pricedetails_section_gap mb-1">
        <button className="btn cta-btn cart_pricedetails_section_gap width-100p">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default CartPayment;
