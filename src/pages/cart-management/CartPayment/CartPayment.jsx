import "./cartPayment.css";
import { useCart } from "../../../context/cart-context";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "../../../context/toast-context";
import { useProducts } from "../../../context/products-context";
import { v4 as uuid } from "uuid";
import { formatDate } from "../../../backend/utils/authUtils";

function CartPayment() {
  const { cartProducts, removeProductFromCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const { setToastData } = useToast();
  const { orders, setOrders } = useProducts();

  const cartPrice = cartProducts.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );
  const discount = cartPrice - cartPrice / 2 - 50;
  const paymentPrice = cartPrice - discount;
  const savedPrice = cartPrice - paymentPrice;

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  async function handlePay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_0RjEvAbIKnq7cU",
      currency: "INR",
      amount: paymentPrice * 100,
      name: "Plantify",
      description: "Thanks for purchasing",

      handler: function (response) {
        navigate("/orders");
        setToastData({
          show: true,
          type: "success",
          message: "Successful payment",
        });
        clearCart();
      },
      prefill: {
        name: "Abhishek Sahani",
        email: "abhishekSahani@gmail.com",
        contact: "9909999099",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  function clearCart() {
    for (let product of cartProducts) {
      const { _id } = product;
      const token = localStorage.getItem("token");

      removeProductFromCart(_id, token);
    }
  }

  function handlePlaceOrder() {
    if (location.pathname == "/checkout") {
      handlePay();

      let userEmail = localStorage.getItem("email");
      let userName = "";

      if (userEmail == "abhishekSahani@gmail.com") {
        userName = "Abhishek Sahani";
      }

      const orderData = {
        _id: uuid(),
        createdAt: formatDate(),
        payment_amount: paymentPrice,
        email: userEmail,
        username: userName,
        products: cartProducts,
      };

      setOrders([...orders, orderData]);

      localStorage.setItem("isPlaceOrder", false);
    } else {
      navigate("/address");
      localStorage.setItem("isPlaceOrder", true);
    }
  }

  return (
    <div className="cart_payment_receipt card-basic app">
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
        <button
          className="btn cta-btn cart_pricedetails_section_gap width-100p"
          onClick={() => handlePlaceOrder()}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default CartPayment;
