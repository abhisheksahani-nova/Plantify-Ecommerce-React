import "./verticalCard.css";
import { useCart } from "../../../context/cart-context";
import axios from "axios";
import { useState } from "react";

function VerticalCard({ product }) {
  const { setCartProducts } = useCart();
  const { title, plantType, img, price, rating } = product;
  const [addToCart, setAddToCart] = useState(false);

  const token = localStorage.getItem("token");

  const handleAddToCart = async (product, token) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setCartProducts(response.data.cart);
      setAddToCart(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-basic card_custom_width">
      <div className="badge-container">
        <img className="card-img" src={img} alt="plant" />
        <span className="card-withBadge">New</span>

        <div className="">
          <h3 className="card-heading pri_clr"> {title} </h3>
          <small className="card-subHeading">
            {" "}
            {plantType}: {rating}
            <i class="fa-solid fa-star products_filter_staricon_style"></i>{" "}
          </small>
        </div>

        <p className="card-description text-bold pri_clr">₹ {price}</p>
      </div>

      <div className="card-footer">
        {!addToCart ? (
          <button
            className="btn custom_btn"
            onClick={() => handleAddToCart(product, token)}
          >
            <span className="icon">
              <i className="fa fa-shopping-cart"></i>
            </span>
            Add to Cart
          </button>
        ) : (
          <button className="btn custom_btn">
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
