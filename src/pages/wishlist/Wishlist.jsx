import { Navbar, VerticalCard, Footer } from "../../components/index";

function Wishlist() {
  return (
    <div class="homepage_main_container">
      <Navbar />

      <section class="productlisting_banner_container"></section>

      <h2 class="cart_page_title">My Wishlist (4)</h2>

      <section class="card_container">
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
      </section>

      <div class="horizontal_rule_container">
        <hr class="horizontal_rule" />
      </div>

      <Footer />
    </div>
  );
}

export default Wishlist;
