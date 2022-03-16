import { Navbar, Footer, Filter, VerticalCard } from "../../components/index";
import "../landing-page/landingPage.css";
import "./productListing.css";

function ProductListing() {
  return (
    <div class="homepage_main_container">
      <Navbar />

      {/* <!-- hero banner image--> */}
      <section class="productlisting_banner_container"></section>

      <section class="productlisting_main_content_container d-flex">
        {/* <!-- filter sidebar --> */}
        <Filter />

        <div class="productlisting_products_container">
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </div>
      </section>

      <div class="horizontal_rule_container">
        <hr class="horizontal_rule" />
      </div>

      <Footer />
    </div>
  );
}

export default ProductListing;
