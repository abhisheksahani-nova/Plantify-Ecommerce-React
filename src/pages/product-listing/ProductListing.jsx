import { Navbar, Footer, Filter, VerticalCard } from "../../components/index";
import "../landing-page/landingPage.css";
import "./productListing.css";
import { useProducts } from "../../context/products-context";
import { useReducer } from "react";

function ProductListing() {
  const { products } = useProducts();

  const [state, dispatch] = useReducer(filterReducer, {
    priceLowToHigh: false,
    priceHighToLow: false,
    priceRange: 0,
    indoorPlants: false,
    outdoorPlants: false,
    officePlants: false,
    succulentPlants: false,
    floweringPlants: false,
    evergreenPlants: false,
  });

  function filterReducer(state, action) {
    switch (action.type) {
      case "PRICE_LOW_TO_HIGH":
        return {
          ...state,
          priceLowToHigh: !state.priceLowToHigh,
          priceHighToLow: false,
        };

      case "PRICE_HIGH_TO_LOW":
        return {
          ...state,
          priceHighToLow: !state.priceHighToLow,
          priceLowToHigh: false,
        };

      case "SORT_BY_PRICE":
        return { ...state, priceRange: action.payload };

      case "INDOOR_PLANTS":
        return { ...state, indoorPlants: !state.indoorPlants };

      case "OUTDOOR_PLANTS":
        return { ...state, outdoorPlants: !state.outdoorPlants };

      case "OFFICE_PLANTS":
        return { ...state, officePlants: !state.officePlants };

      case "SUCCULENT_PLANTS":
        return { ...state, succulentPlants: !state.succulentPlants };

      case "FLOWERING_PLANTS":
        return { ...state, floweringPlants: !state.floweringPlants };

      case "EVERGREEN_PLANTS":
        return { ...state, evergreenPlants: !state.evergreenPlants };

      default:
        return state;
    }
  }

  function applyFilters(state) {
    let filterProducts = products;

    if (state.priceLowToHigh) {
      filterProducts = filterProducts.sort((a, b) => a.price - b.price);
    }

    if (state.priceHighToLow) {
      filterProducts = filterProducts.sort((a, b) => b.price - a.price);
    }

    if (state.priceRange) {
      console.log(state.priceRange);
      filterProducts = filterProducts.filter(
        ({ price }) => Number(price) <= state.priceRange
      );
    }

    if (state.indoorPlants) {
      filterProducts = filterProducts.filter(
        ({ categoryName }) => categoryName.toUpperCase() == "INDOOR PLANT"
      );
    }

    if (state.outdoorPlants) {
      filterProducts = filterProducts.filter(
        ({ categoryName }) => categoryName.toUpperCase() == "OUTDOOR PLANT"
      );
    }

    if (state.officePlants) {
      filterProducts = filterProducts.filter(
        ({ categoryName }) => categoryName.toUpperCase() == "OFFICE PLANT"
      );
    }

    if (state.succulentPlants) {
      filterProducts = filterProducts.filter(
        ({ plantType }) => plantType.toUpperCase() == "SUCCULENT"
      );
    }

    if (state.evergreenPlants) {
      filterProducts = filterProducts.filter(({ plantType }) =>
        plantType.toUpperCase().includes("EVERGREEN")
      );
    }

    if (state.floweringPlants) {
      filterProducts = filterProducts.filter(({ plantType }) =>
        plantType.toUpperCase().includes("FLOWERING")
      );
    }

    return filterProducts;
  }

  const newProducts = applyFilters(state);

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
