import { Navbar, VerticalCard, Footer } from "../../components/index";
import {useWishlist} from "../../context/wishlist-context";

function Wishlist() {

  const {wishlistProducts} = useWishlist();

  return (
    <div className="homepage_main_container">
      <Navbar />

      <section className="productlisting_banner_container"></section>

      <h2 className="cart_page_title">My Wishlist ({wishlistProducts.length})</h2>

      <section className="card_container">
        {wishlistProducts.map(product => {
          return <VerticalCard key={product._id} product={product} />
        })}
      </section>

      <div className="horizontal_rule_container">
        <hr className="horizontal_rule" />
      </div>

      <Footer />
    </div>
  );
}

export default Wishlist;
