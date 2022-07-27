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

      <section className="productlisting_main_content_container d-flex p-relative">
        {/* <!-- filter sidebar --> */}
        <Filter dispatch={dispatch} state={state} />

        <div className="productlisting_products_container">
          <p className="product-count mb-2">{`${newProducts.length} products`}</p>

          {newProducts?.length > 0 ? (
            <div className="productlisting_products_inner_container">
              {newProducts.map((product) => {
                return <VerticalCard key={product._id} product={product} />;
              })}
            </div>
          ) : (
            <div className="empty-shooping-cart-icon-container h-100percent">
              <i className="fa-solid fa-basket-shopping empty-shooping-cart-icon transform-center"></i>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProductListing;
