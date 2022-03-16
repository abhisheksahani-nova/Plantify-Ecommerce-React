import { Navbar, Footer, Filter, VerticalCard } from "../../components/index";
import "../landing-page/landingPage.css";
import "./productListing.css";

function ProductListing() {
  return (
    <div className="homepage_main_container">
      <Navbar />

      {/* <!-- hero banner image--> */}
      <section className="productlisting_banner_container"></section>

      <section className="productlisting_main_content_container d-flex">
        {/* <!-- filter sidebar --> */}
        <Filter />

        <div className="productlisting_products_container">
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

      <div className="horizontal_rule_container">
        <hr className="horizontal_rule" />
      </div>

      <Footer />
    </div>
  );
}

export default ProductListing;
