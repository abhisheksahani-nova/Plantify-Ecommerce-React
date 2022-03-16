import "./filter.css";

function Filter() {
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
          <label className="ml-1" for="">
            Indoor Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1" for="">
            Outdoor Plants
          </label>
        </div>

        <div>
          <input type="checkbox" />
          <label className="ml-1" for="">
            Office Plants
          </label>
        </div>
      </div>
      <div className="mb-2">
        <h4 className="products_sidebar_title">Price</h4>

        <div className="products_sidebar_inputbox">
          <input type="radio" />
          <label className="ml-1" for="">
            $100 - 200$
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="radio" />
          <label className="ml-1" for="">
            $200 - $300
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="radio" />
          <label className="ml-1" for="">
            $300 - $400
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="radio" />
          <label className="ml-1" for="">
            $400 - $500
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="radio" />
          <label className="ml-1" for="">
            Above $500
          </label>
        </div>
      </div>

      <div>
        <h4 className="products_sidebar_title">Rating</h4>

        <div className="products_sidebar_inputbox">
          <input type="radio" />
          <label className="ml-1" for="">
            4 Star &#38; above
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="radio" />
          <label className="ml-1" for="">
            3 Star &#38; above
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="radio" />
          <label className="ml-1" for="">
            2 Star &#38; above
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="radio" />
          <label className="ml-1" for="">
            1 Star &#38; above
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
