import "./singleproduct.css";
import { Navbar, Footer } from "../../components/index";
import { useCart } from "../../context/cart-context";
import { useTheme } from "../../context/theme-context";
import { useProducts } from "../../context/products-context";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { theme } = useTheme();
  const { products } = useProducts();
  let { id } = useParams();
  const { removeProductFromCart, productQtyIncrement, productQtyDecrement } =
    useCart();

  function getProductById() {
    let singleProduct = products.find((item) => item._id == id);

    return singleProduct;
  }

  const { title, plantType, img, price, rating, categoryName, description } =
    getProductById();

  function handleProductQtyDecrement(_id, token) {
    if (qty >= 1) {
      productQtyDecrement(_id, token);
    }
  }

  return (
    <div>
      <Navbar />
      <section className="d-flex singleproductpage-container">
        <div className="singleproductpage-img-container">
          <img src={img} className="singleProduct-img" alt={title} />
        </div>
        <div className="singleproductpage-info-container">
          <h1 className="card-heading pri_clr">{title}</h1>
          <p className="card-description text-bold para-price">₹ {price}</p>

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
              //   value={qty}
            />
            <button
              className={`btn cart_card_outlinebtn customstyle_btn ${
                theme == "dark" ? "cart_card_outline_btn" : ""
              }`}
              //   disabled={qty <= 1 ? true : false}
              //   onClick={() => handleProductQtyDecrement(_id, token)}
            >
              -
            </button>
          </div>
          <p className="card-description pri_clr">{description}</p>

          <div className="d-flex mt-2 cart_card_btncontainer mb-2">
            <button
              className="btn cart_card_solidbtn cta-btn mr-1"
              onClick={() => handleAddToCart(product, _id, token)}
            >
              <span className="icon">
                <i className="fa fa-shopping-cart"></i>
              </span>
              Add to Cart
            </button>
            <button
              className={`btn cart_card_outlinebtn ${
                theme == "dark" ? "cart_card_outline_btn" : ""
              }`}
              //   onClick={() => handleMoveProductToWishlist(product, token)}
            >
              Move to Wishlist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleProduct;
