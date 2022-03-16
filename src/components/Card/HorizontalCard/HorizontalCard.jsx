function HorizontalCard() {
  return (
    <div class="card-basic Card-horizontalImage-textContainer cart_card_resize p-relative">
      <div class="Card-horizontalImage-text">
        <img
          class="card-img Card-horizontalImage-text-img Card-horizontalImage-text-img-Ecommerce cart_card_imgresize"
          src="https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/05/04150624/Spider-plant.jpg"
          alt="plant"
        />
        <i class="fa-solid fa-xmark cart_card_closeicon"></i>

        <div class="ml-2 cart_card_content">
          <h3 class="card-heading">Indoor Aleovera Plant</h3>
          <small class="card-subHeading">Air purifier</small>
          <p class="card-description text-bold">₹ 800</p>

          <div class="d-flex cart_card_quantitycontainer">
            <small>Quantity :</small>
            <button class="btn cart_card_outlinebtn customstyle_btn">+</button>
            <input class="cart_card_quantity_inp" type="text" value="1" />
            <button class="btn cart_card_outlinebtn customstyle_btn">-</button>
          </div>

          <div class="d-flex mt-2 cart_card_btncontainer mb-2">
            <button class="btn btn-text-icon cart_card_solidbtn cta-btn mr-1">
              Remove from Cart
            </button>
            <button class="btn btn-text-icon cart_card_outlinebtn">
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
