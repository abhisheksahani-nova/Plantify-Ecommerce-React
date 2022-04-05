import { useCart } from "../../../context/cart-context";
import { useWishlist } from "../../../context/wishlist-context";

function HorizontalCard({ product }) {
  const { _id, title, plantType, img, price, qty } = product;
  const { wishlistProducts, moveProductToWishlist } = useWishlist();
  const { removeProductFromCart, productQtyIncrement, productQtyDecrement } =
    useCart();

  const token = localStorage.getItem("token");

  function handleProductQtyDecrement(_id, token) {
    if (qty >= 1) {
      productQtyDecrement(_id, token);
    }
  }

  function handleMoveProductToWishlist(product, token) {
    if (!wishlistProducts.find((product) => product._id == _id)) {
      moveProductToWishlist(product, token);
    }
  }

  return (
    <div className="card-basic Card-horizontalImage-textContainer cart_card_resize p-relative">
      <div className="Card-horizontalImage-text">
        <img
          className="card-img Card-horizontalImage-text-img Card-horizontalImage-text-img-Ecommerce cart_card_imgresize"
          src={img}
          alt={title}
        />
        <i
          className="fa-solid fa-xmark cart_card_closeicon"
          onClick={() => removeProductFromCart(_id, token)}
        ></i>

        <div className="ml-2 cart_card_content">
          <h3 className="card-heading">{title}</h3>
          <small className="card-subHeading">{plantType}</small>
          <p className="card-description text-bold">₹ {price}</p>

          <div className="d-flex cart_card_quantitycontainer">
            <small>Quantity :</small>
            <button
              className="btn cart_card_outlinebtn customstyle_btn"
              onClick={() => productQtyIncrement(_id, token)}
            >
              +
            </button>
            <input className="cart_card_quantity_inp" type="text" value={qty} />
            <button
              className="btn cart_card_outlinebtn customstyle_btn"
              disabled={qty <= 1 ? true : false}
              onClick={() => handleProductQtyDecrement(_id, token)}
            >
              -
            </button>
          </div>

          <div className="d-flex mt-2 cart_card_btncontainer mb-2">
            <button
              className="btn btn-text-icon cart_card_solidbtn cta-btn mr-1"
              onClick={() => removeProductFromCart(_id, token)}
            >
              Remove from Cart
            </button>
            <button
              className="btn btn-text-icon cart_card_outlinebtn"
              onClick={() => handleMoveProductToWishlist(product, token)}
            >
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
