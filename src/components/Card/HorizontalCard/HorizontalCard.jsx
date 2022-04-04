import axios from "axios";
import { useCart } from "../../../context/cart-context";
import { useWishlist } from "../../../context/wishlist-context";

function HorizontalCard({ product }) {
  const { _id, title, plantType, img, price, qty } = product;
  const { setWishlistProducts } = useWishlist();
  const { setCartProducts } = useCart();

  const token = localStorage.getItem("token");

  const removeProductFromCart = async (id) => {
    try {
      const response = await axios.delete(`/api/user/cart/${id}`, {
        headers: {
          authorization: token,
        },
      });
      setCartProducts(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const productQtyIncrement = async (id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        { action: { type: "increment" } },
        {
          headers: {
            authorization: token,
          },
        }
      );

      setCartProducts(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const productQtyDecrement = async (id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        { action: { type: "decrement" } },
        {
          headers: {
            authorization: token,
          },
        }
      );

      setCartProducts(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const moveProductToWishlist = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setWishlistProducts(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  function handleProductQtyDecrement(_id) {
    if (qty >= 1) {
      productQtyDecrement(_id);
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
          onClick={() => removeProductFromCart(_id)}
        ></i>

        <div className="ml-2 cart_card_content">
          <h3 className="card-heading">{title}</h3>
          <small className="card-subHeading">{plantType}</small>
          <p className="card-description text-bold">₹ {price}</p>

          <div className="d-flex cart_card_quantitycontainer">
            <small>Quantity :</small>
            <button
              className="btn cart_card_outlinebtn customstyle_btn"
              onClick={() => productQtyIncrement(_id)}
            >
              +
            </button>
            <input className="cart_card_quantity_inp" type="text" value={qty} />
            <button
              className="btn cart_card_outlinebtn customstyle_btn"
              disabled={qty <= 1 ? true : false}
              onClick={() => handleProductQtyDecrement(_id)}
            >
              -
            </button>
          </div>

          <div className="d-flex mt-2 cart_card_btncontainer mb-2">
            <button
              className="btn btn-text-icon cart_card_solidbtn cta-btn mr-1"
              onClick={() => removeProductFromCart(_id)}
            >
              Remove from Cart
            </button>
            <button
              className="btn btn-text-icon cart_card_outlinebtn"
              onClick={() => moveProductToWishlist(product)}
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
