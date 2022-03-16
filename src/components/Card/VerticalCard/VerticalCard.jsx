import "./verticalCard.css";

function VerticalCard() {
  return (
    <div className="card-basic card_custom_width">
      <div className="badge-container">
        <img
          className="card-img"
          src="https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/05/04150624/Spider-plant.jpg"
          alt="plant"
        />
        <span className="card-withBadge">New</span>

        <div className="">
          <h3 className="card-heading pri_clr">Aleovera Indoor Plant</h3>
          <small className="card-subHeading">Outdoor</small>
        </div>

        <p className="card-description text-bold pri_clr">₹ 10,999</p>
      </div>

      <div className="card-footer">
        <button className="btn custom_btn">
          <span className="icon">
            <i className="fa fa-shopping-cart"></i>
          </span>{" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default VerticalCard;
