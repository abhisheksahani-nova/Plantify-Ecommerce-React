import { useReducer } from "react";

let initialFilterState = {
  priceLowToHigh: false,
  priceHighToLow: false,
  priceRange: 1800,
  category: [],
  oneRatingPlus: 0,
  twoRatingPlus: 0,
  threeRatingPlus: 0,
  fourRatingPlus: 0,
  searchQuery: "",
};

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

    case "SEARCH_BY_QUERY":
      return { ...state, searchQuery: action.payload };

    case "FILTER_BY_CATEGORY":
      return state.category.includes(action.payload)
        ? {
            ...state,
            category: state.category.filter(
              (singleCategory) => singleCategory !== action.payload
            ),
          }
        : { ...state, category: [...state.category, action.payload] };

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

    case "CLEAR_FILTERS":
      return initialFilterState;

    default:
      return state;
  }
}

function applyFilters(state, products) {
  let filterProducts = products;

  if (state.priceLowToHigh) {
    filterProducts = filterProducts.sort((a, b) => a.price - b.price);
  }

  if (state.priceHighToLow) {
    filterProducts = filterProducts.sort((a, b) => b.price - a.price);
  }

  if (state.priceRange) {
    filterProducts = filterProducts.filter(
      ({ price }) => Number(price) <= state.priceRange
    );
  }

  if (state.category.length) {
    filterProducts = filterProducts.filter(({ categoryName }) =>
      state.category.includes(categoryName)
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

  if (state.searchQuery !== "") {
    filterProducts = filterProducts.filter(({ title }) => title.includes(state.searchQuery)
    );
  }

  return filterProducts;
}

const useFilter = () => {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);

  return { state, dispatch };
};

export { useFilter, applyFilters };
