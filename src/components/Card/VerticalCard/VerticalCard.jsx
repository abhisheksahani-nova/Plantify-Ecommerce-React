import "./verticalCard.css";

function VerticalCard() {
  return (
    <div class="card-basic card_custom_width">
      <div class="badge-container">
        <img
          class="card-img"
          src="https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/05/04150624/Spider-plant.jpg"
          alt="plant"
        />
        <span class="card-withBadge">New</span>

        <div class="">
          <h3 class="card-heading pri_clr">Aleovera Indoor Plant</h3>
          <small class="card-subHeading">Outdoor</small>
        </div>

        <p class="card-description text-bold pri_clr">₹ 10,999</p>
      </div>

      <div class="card-footer">
        <button class="btn custom_btn">
          <span class="icon">
            <i class="fa fa-shopping-cart"></i>
          </span>{" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default VerticalCard;
