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

  function handleProductClick(e) {
    if (e.target.id == "remove-from-wishlist") {
      removeProductFromWishlist(_id, token);
    } else if (e.target.id == "move-to-wishlist") {
      moveProductToWishlist(product, token);
    } else if (e.target.id == "btn-add-to-cart") {
      handleAddToCart(product, _id, token);
    } else if (e.target.id == "btn-go-to-cart") {
      navigate("/cart");
    } else {
      navigate(`/singleProduct/${_id}`);
    }
  }

  return (
    <div
      className="card-basic card_custom_width app"
      onClick={(e) => handleProductClick(e)}
    >
      <div className="badge-container">
        <img className="card-img" src={img} alt={title} />
        <span className="card-withBadge">New</span>

        {wishlistProducts.find((item) => item._id == _id) ? (
          <i
            className="fa-solid fa-heart dismiss-card f-size-large verticalcard-wishlist-icon-select-clr"
            id="remove-from-wishlist"
          ></i>
        ) : (
          <i
            className="fa-solid fa-heart dismiss-card f-size-large verticalcard-wishlist-icon-clr"
            id="move-to-wishlist"
          ></i>
        )}

        <div>
          <div className="d-flex justify-content-between align-items-center ">
            <h3 className="card-heading pri_clr"> {title} </h3>
            <div>
              <i className="fa-solid fa-star products_filter_staricon_style"></i>
              <small className="sec_clr rating-num"> {rating} </small>
            </div>
          </div>

          <small className="card-subHeading sec_clr">
            {plantType} ({categoryName})
          </small>
        </div>

        <p className="card-description text-bold pri_clr">₹ {price}</p>
      </div>

      <div className="card-footer">
        {!addToCart ? (
          <button className="btn custom_btn" id="btn-add-to-cart">
            <span className="icon">
              <i className="fa fa-shopping-cart"></i>
            </span>
            Add to Cart
          </button>
        ) : (
          <button className="btn custom_btn" id="btn-go-to-cart">
            <span className="icon">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
            Go to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default VerticalCard;
