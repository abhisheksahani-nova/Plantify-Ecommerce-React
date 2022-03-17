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
          <label className="ml-1 products_filter_labelsize" for="">
            Indoor Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            Outdoor Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            Office Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            Succulent Plants
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            Flowering Plants
          </label>
        </div>

        <div>
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            Evergreen Plants
          </label>
        </div>
      </div>

      <div className="mb-2">
        <h4 className="products_sidebar_title">Price</h4>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            Price - high to low
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            Price - low to high
          </label>
        </div>

        <div className="products_filter_hr_line"></div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            ₹200 - ₹400
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            ₹400 - ₹600
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            ₹600 - ₹800
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            ₹800 - ₹1000
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            Above ₹1000
          </label>
        </div>
      </div>

      <div>
        <h4 className="products_sidebar_title">Rating</h4>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            4 <i class="fa-solid fa-star products_filter_icon_resize"></i> &#38; above
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            3 <i class="fa-solid fa-star products_filter_icon_resize"></i> &#38; above
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            2 <i class="fa-solid fa-star products_filter_icon_resize"></i> &#38; above
          </label>
        </div>

        <div className="products_sidebar_inputbox">
          <input type="checkbox" />
          <label className="ml-1 products_filter_labelsize" for="">
            1 <i class="fa-solid fa-star products_filter_icon_resize"></i> &#38; above
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
