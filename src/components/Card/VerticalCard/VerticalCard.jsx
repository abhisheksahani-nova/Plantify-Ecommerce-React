import "./verticalCard.css";
import { useCart } from "../../../context/cart-context";
import { useWishlist } from "../../../context/wishlist-context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VerticalCard({ product }) {
  const { cartProducts, addProductToCart, productQtyIncrement } = useCart();
  const { wishlistProducts, moveProductToWishlist, removeProductFromWishlist } =
    useWishlist();
  const { _id, title, plantType, img, price, rating, categoryName } = product;
  const [addToCart, setAddToCart] = useState(false);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleAddToCart(product, id, token) {
    if (cartProducts.find((product) => product._id == _id)) {
      productQtyIncrement(id, token);
      setAddToCart(true);
    } else {
      addProductToCart(product, token);
      setAddToCart(true);
    }
  }

  return (
    <div
      className="card-basic card_custom_width app"
      onClick={() => navigate(`/singleProduct/${_id}`)}
    >
      <div className="badge-container">
        <img className="card-img" src={img} alt={title} />
        <span className="card-withBadge">New</span>

        {wishlistProducts.find((item) => item._id == _id) ? (
          <i
            className="fa-solid fa-heart dismiss-card f-size-large verticalcard-wishlist-icon-select-clr"
            onClick={() => removeProductFromWishlist(_id, token)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-heart dismiss-card f-size-large verticalcard-wishlist-icon-clr"
            onClick={() => moveProductToWishlist(product, token)}
          ></i>
        )}

        <div>
          <h3 className="card-heading pri_clr"> {title} </h3>
          <small className="card-subHeading sec_clr">
            {" "}
            {plantType} : {rating}
            <i class="fa-solid fa-star products_filter_staricon_style"></i>{" "}
          </small>
        </div>
        <small className="card-subHeading sec_clr">{categoryName}</small>

        <p className="card-description text-bold pri_clr">₹ {price}</p>
      </div>

      <div className="card-footer">
        {!addToCart ? (
          <button
            className="btn custom_btn"
            onClick={() => handleAddToCart(product, _id, token)}
          >
            <span className="icon">
              <i className="fa fa-shopping-cart"></i>
            </span>
            Add to Cart
          </button>
        ) : (
          <button className="btn custom_btn" onClick={() => navigate("/cart")}>
            <span className="icon">
              <i className="fa fa-shopping-cart"></i>
            </span>
            Go to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default VerticalCard;
