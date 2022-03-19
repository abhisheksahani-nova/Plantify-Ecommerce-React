import "./verticalCard.css";

function VerticalCard({ product: { title, plantType, img, price , rating} }) {
  return (
    <div className="card-basic card_custom_width">
      <div className="badge-container">
        <img className="card-img" src={img} alt="plant" />
        <span className="card-withBadge">New</span>

        <div className="">
          <h3 className="card-heading pri_clr"> {title} </h3>
          <small className="card-subHeading"> {plantType}: {rating} </small>
        </div>

        <p className="card-description text-bold pri_clr">₹ {price}</p>
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
