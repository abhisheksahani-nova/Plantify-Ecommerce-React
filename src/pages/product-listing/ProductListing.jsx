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
    priceRange: 1800,
    indoorPlants: false,
    outdoorPlants: false,
    officePlants: false,
    succulentPlants: false,
    floweringPlants: false,
    evergreenPlants: false,
    oneRatingPlus: 0,
    twoRatingPlus: 0,
    threeRatingPlus: 0,
    fourRatingPlus: 0,
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

      case "ONE_RATING_PLUS":
        return { ...state, oneRatingPlus: state.oneRatingPlus == 0 ? 1 : 0 };

      case "TWO_RATING_PLUS":
        return { ...state, twoRatingPlus: state.twoRatingPlus == 0 ? 2 : 0 };

      case "THREE_RATING_PLUS":
        return {
          ...state,
          threeRatingPlus: state.threeRatingPlus == 0 ? 3 : 0,
        };

      case "FOUR_RATING_PLUS":
        return { ...state, fourRatingPlus: state.fourRatingPlus == 0 ? 4 : 0 };

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

    if (state.oneRatingPlus) {
      filterProducts = filterProducts.filter(
        ({ rating }) => rating >= state.oneRatingPlus
      );
    } else if (state.twoRatingPlus) {
      filterProducts = filterProducts.filter(
        ({ rating }) => rating >= state.twoRatingPlus
      );
    } else if (state.threeRatingPlus) {
      filterProducts = filterProducts.filter(
        ({ rating }) => rating >= state.threeRatingPlus
      );
    } else if (state.fourRatingPlus) {
      filterProducts = filterProducts.filter(
        ({ rating }) => rating >= state.fourRatingPlus
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
