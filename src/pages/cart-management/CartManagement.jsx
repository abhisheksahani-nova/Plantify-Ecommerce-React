import { Navbar, Footer, HorizontalCard } from "../../components/index";
import CartPayment from "./CartPayment/CartPayment";
import "./cartManagement.css";
import "../landing-page/landingPage.css";
import "../product-listing/productListing.css";
import { useCart } from "../../context/cart-context";

function CartManagement() {
  const { cartProducts } = useCart();

  return (
    <div className="homepage_main_container">
      <Navbar />

      {/* <!-- hero banner image--> */}
      <section className="productlisting_banner_container"></section>

      <h2 className="cart_page_title">My Cart ({cartProducts.length})</h2>

      <section className="cart_container d-flex productlisting_main_content_container cart_page_main_container">
        {/* <!-- Product items container --> */}

        <div className="cart_products_container d-flex">
          {cartProducts.map((product) => {
            return <HorizontalCard key={product._id} product={product} />;
          })}
        </div>

        {/* <!-- Payment details card container --> */}
        <CartPayment />
      </section>

      <Footer />
    </div>
  );
}

export default CartManagement;
