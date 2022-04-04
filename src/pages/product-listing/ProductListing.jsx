import { Navbar, Footer, Filter, VerticalCard } from "../../components/index";
import "../landing-page/landingPage.css";
import "./productListing.css";
import { useProducts } from "../../context/products-context";
import { useCategory } from "../../context/category-context";
import { useFilter, applyFilters } from "../../reducer/filterReducer";
import { useEffect } from "react";

function ProductListing() {
  const { products } = useProducts();
  const { category } = useCategory();

  const { state, dispatch } = useFilter();

  const newProducts = applyFilters(state, products);

  useEffect(() => {
    if (category == "INDOOR_PLANTS") {
      dispatch({ type: "FILTER_BY_CATEGORY", payload: "Indoor Plant" });
    } else if (category == "OUTDOOR_PLANTS") {
      dispatch({ type: "FILTER_BY_CATEGORY", payload: "Outdoor Plant" });
    }
  }, []);

  return (
    <div className="homepage_main_container">
      <Navbar />

      {/* <!-- hero banner image--> */}
      <section className="productlisting_banner_container"></section>

      <section className="productlisting_main_content_container d-flex">
        {/* <!-- filter sidebar --> */}
        <Filter dispatch={dispatch} state={state} />

        <div className="productlisting_products_container">
          {newProducts.map((product) => {
            return <VerticalCard key={product._id} product={product} />;
          })}
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
