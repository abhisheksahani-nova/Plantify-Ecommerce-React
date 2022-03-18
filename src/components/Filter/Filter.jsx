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
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize">
            Indoor Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize">
            Outdoor Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize">
            Office Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize">
            Succulent Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize">
            Flowering Plants
          </label>
        </div>

        <div>
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize">
            Evergreen Plants
          </label>
        </div>
      </div>

      <div className="mb-2">
        <h4 className="products_sidebar_title">Price</h4>

        <div className="products_sidebar_inputbox">
          <input type="range" min="1" max="2000" value="1000" />
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
