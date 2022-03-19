import "./filter.css";

function Filter({ state, dispatch }) {
  return (
    <div className="productlisting_sidebar">
      <div className="d-flex products_filter_section">
        <h2>Filters</h2>
        <button className="btn custom_clear_btn">Clear</button>
      </div>

      <div className="mb-2">
        <h4 className="products_sidebar_title">Category</h4>
        <div className="products_sidebar_inputbox">
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "INDOOR_PLANTS" })}
            checked={state.indoorPlants}
          />
          <label className="ml-1 products_filter_labelsize">
            Indoor Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "OUTDOOR_PLANTS" })}
            checked={state.outdoorPlants}
          />
          <label className="ml-1 products_filter_labelsize">
            Outdoor Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "OFFICE_PLANTS" })}
            checked={state.officePlants}
          />
          <label className="ml-1 products_filter_labelsize">
            Office Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "SUCCULENT_PLANTS" })}
            checked={state.succulentPlants}
          />
          <label className="ml-1 products_filter_labelsize">
            Succulent Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "FLOWERING_PLANTS" })}
            checked={state.floweringPlants}
          />
          <label className="ml-1 products_filter_labelsize">
            Flowering Plants
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "EVERGREEN_PLANTS" })}
            checked={state.evergreenPlants}
          />
          <label className="ml-1 products_filter_labelsize">
            Evergreen Plants
          </label>
        </div>
      </div>

      <div className="mb-2">
        <h4 className="products_sidebar_title">Price</h4>

        <div className="products_sidebar_inputbox">
          <input
            onChange={(e) =>
              dispatch({ type: "SORT_BY_PRICE", payload: e.target.value })
            }
            type="range"
            min="100"
            max="2000"
            value={state.priceRange}
          />
        </div>

        <div className="products_sidebar_inputbox">
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })}
            checked={state.priceHighToLow}
          />
          <label className="ml-1 products_filter_labelsize">
            Price - high to low
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })}
            checked={state.priceLowToHigh}
          />
          <label className="ml-1 products_filter_labelsize">
            Price - low to high
          </label>
        </div>
      </div>

      <div>
        <h4 className="products_sidebar_title">Rating</h4>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize">
            4 <i class="fa-solid fa-star products_filter_icon_resize"></i> &#38;
            above
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize">
            3 <i class="fa-solid fa-star products_filter_icon_resize"></i> &#38;
            above
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize">
            2 <i class="fa-solid fa-star products_filter_icon_resize"></i> &#38;
            above
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize">
            1 <i class="fa-solid fa-star products_filter_icon_resize"></i> &#38;
            above
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
