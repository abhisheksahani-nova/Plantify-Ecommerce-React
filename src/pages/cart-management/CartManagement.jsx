import {
  Navbar,
  Footer,
  HorizontalCard,
  Sidebar,
} from "../../components/index";
import CartPayment from "./CartPayment/CartPayment";
import "./cartManagement.css";
import "../landing-page/landingPage.css";
import "../product-listing/productListing.css";
import { useCart } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CartManagement() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const { cartProducts } = useCart();
  const navigate = useNavigate();

  return (
    <div className="homepage_main_container">
      <Navbar setOpenSidebar={setOpenSidebar} />

      {/* <!-- hero banner image--> */}
      <div className="p-relative">
        <section className="productlisting_banner_container"></section>

        {openSidebar && <Sidebar />}
      </div>

      <h2 className="cart_page_title">My Cart ({cartProducts.length})</h2>

      {cartProducts.length <= 0 && (
        <div className="empty-shooping-cart-icon-container">
          <i className="fa-solid fa-basket-shopping empty-shooping-cart-icon"></i>
          <button className="btn cta-btn" onClick={() => navigate("/products")}>
            Browse Products
          </button>
        </div>
      )}

      <section className="cart_container d-flex productlisting_main_content_container cart_page_main_container">
        {/* <!-- Product items container --> */}

        <div className="cart_products_container d-flex">
          {cartProducts.map((product) => {
            return <HorizontalCard key={product._id} product={product} />;
          })}
        </div>

        {/* <!-- Payment details card container --> */}
        {cartProducts.length > 0 && <CartPayment />}
      </section>

      <Footer />
    </div>
  );
}

export default CartManagement;
