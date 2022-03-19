import { Navbar, VerticalCard, Footer } from "../../components/index";

function Wishlist() {
  return (
    <div className="homepage_main_container">
      <Navbar />

      <section className="productlisting_banner_container"></section>

      <h2 className="cart_page_title">My Wishlist (4)</h2>

      <section className="card_container">
        
      </section>

      <div className="horizontal_rule_container">
        <hr className="horizontal_rule" />
      </div>

      <Footer />
    </div>
  );
}

export default Wishlist;
