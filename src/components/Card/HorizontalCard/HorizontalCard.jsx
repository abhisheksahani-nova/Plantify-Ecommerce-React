function HorizontalCard() {
  return (
    <div className="card-basic Card-horizontalImage-textContainer cart_card_resize p-relative">
      <div className="Card-horizontalImage-text">
        <img
          className="card-img Card-horizontalImage-text-img Card-horizontalImage-text-img-Ecommerce cart_card_imgresize"
          src="https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/05/04150624/Spider-plant.jpg"
          alt="plant"
        />
        <i className="fa-solid fa-xmark cart_card_closeicon"></i>

        <div className="ml-2 cart_card_content">
          <h3 className="card-heading">Indoor Aleovera Plant</h3>
          <small className="card-subHeading">Air purifier</small>
          <p className="card-description text-bold">₹ 800</p>

          <div className="d-flex cart_card_quantitycontainer">
            <small>Quantity :</small>
            <button className="btn cart_card_outlinebtn customstyle_btn">+</button>
            <input className="cart_card_quantity_inp" type="text" value="1" />
            <button className="btn cart_card_outlinebtn customstyle_btn">-</button>
          </div>

          <div className="d-flex mt-2 cart_card_btncontainer mb-2">
            <button className="btn btn-text-icon cart_card_solidbtn cta-btn mr-1">
              Remove from Cart
            </button>
            <button className="btn btn-text-icon cart_card_outlinebtn">
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
