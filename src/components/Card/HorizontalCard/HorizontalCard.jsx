import { useCart } from "../../../context/cart-context";
import { useWishlist } from "../../../context/wishlist-context";
import { useTheme } from "../../../context/theme-context";
import "./horizontalCard.css";

function HorizontalCard({ product }) {
  const { _id, title, plantType, img, price, qty } = product;
  const { wishlistProducts, moveProductToWishlist } = useWishlist();
  const { removeProductFromCart, productQtyIncrement, productQtyDecrement } =
    useCart();

  const token = localStorage.getItem("token");
  const { theme } = useTheme();

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
    <div className="card-basic Card-horizontalImage-textContainer cart_card_resize p-relative app">
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
          <h3 className="card-heading pri_clr">{title}</h3>
          <small className="card-subHeading sec_clr">{plantType}</small>
          <p className="card-description text-bold pri_clr">₹ {price}</p>

          <div className="d-flex cart_card_quantitycontainer">
            <small className="sec_clr">Quantity :</small>
            <button
              className={`btn cart_card_outlinebtn customstyle_btn ${
                theme == "dark" ? "cart_card_outline_btn" : ""
              }`}
              onClick={() => productQtyIncrement(_id, token)}
            >
              +
            </button>
            <input
              className={`cart_card_quantity_inp ${
                theme == "dark" ? "cart_card_outline_btn" : ""
              }`}
              type="text"
              value={qty}
            />
            <button
              className={`btn cart_card_outlinebtn customstyle_btn ${
                theme == "dark" ? "cart_card_outline_btn" : ""
              }`}
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
              className={`btn btn-text-icon cart_card_outlinebtn ${
                theme == "dark" ? "cart_card_outline_btn" : ""
              }`}
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
