function HorizontalCard({product}) {

  const { title, plantType, img, price, qty } = product;

  return (
    <div className="card-basic Card-horizontalImage-textContainer cart_card_resize p-relative">
      <div className="Card-horizontalImage-text">
        <img
          className="card-img Card-horizontalImage-text-img Card-horizontalImage-text-img-Ecommerce cart_card_imgresize"
          src={img}
          alt="plant"
        />
        <i className="fa-solid fa-xmark cart_card_closeicon"></i>

        <div className="ml-2 cart_card_content">
          <h3 className="card-heading">{title}</h3>
          <small className="card-subHeading">{plantType}</small>
          <p className="card-description text-bold">₹ {price}</p>

          <div className="d-flex cart_card_quantitycontainer">
            <small>Quantity :</small>
            <button className="btn cart_card_outlinebtn customstyle_btn">+</button>
            <input className="cart_card_quantity_inp" type="text" value={qty} />
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
