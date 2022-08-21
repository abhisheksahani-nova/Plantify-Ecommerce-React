import { Navbar, VerticalCard, Footer, Sidebar } from "../../components/index";
import { useWishlist } from "../../context/wishlist-context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Wishlist() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const { wishlistProducts } = useWishlist();
  const navigate = useNavigate();

  return (
    <div className="homepage_main_container">
      <Navbar setOpenSidebar={setOpenSidebar} />

      <div className="p-relative">
        <section className="productlisting_banner_container"></section>
        {openSidebar && <Sidebar />}
      </div>

      <h2 className="cart_page_title">
        My Wishlist ({wishlistProducts.length})
      </h2>

      {wishlistProducts.length <= 0 && (
        <div className="empty-shooping-cart-icon-container">
          <i className="fa-solid fa-basket-shopping empty-shooping-cart-icon"></i>
          <button className="btn cta-btn" onClick={() => navigate("/products")}>
            Browse Products
          </button>
        </div>
      )}

      <section className="card_container">
        {wishlistProducts.map((product) => {
          return <VerticalCard key={product._id} product={product} />;
        })}
      </section>

      <Footer />
    </div>
  );
}

export default Wishlist;
