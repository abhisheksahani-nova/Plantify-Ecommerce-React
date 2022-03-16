import { Navbar, Footer, HorizontalCard } from "../../components/index";
import CartPayment from "./CartPayment/CartPayment";
import "./cartManagement.css";
import "../landing-page/landingPage.css";
import "../product-listing/productListing.css";

function CartManagement() {
  return (
    <div className="homepage_main_container">
      <Navbar />

      {/* <!-- hero banner image--> */}
      <section className="productlisting_banner_container"></section>

      <h2 className="cart_page_title">My Cart (3)</h2>

      <section className="cart_container d-flex productlisting_main_content_container">
        {/* <!-- Product items container --> */}

        <div className="cart_products_container d-flex">
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </div>

        {/* <!-- Payment details card container --> */}
        <CartPayment />
      </section>

      <div className="horizontal_rule_container">
        <hr className="horizontal_rule" />
      </div>

      <Footer />
    </div>
  );
}

export default CartManagement;
