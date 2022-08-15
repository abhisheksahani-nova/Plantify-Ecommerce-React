import {
  Navbar,
  Footer,
  VerticalCard,
  HeroBanner,
  CategoryNavTab,
  Sidebar,
} from "../../components/index";
import ProductCategory from "./ProductCategory/ProductCategory";
import { useProducts } from "../../context/products-context";
import { useState } from "react";

function LandingPage() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const { products } = useProducts();

  return (
    <div className="homepage_main_container">
      <Navbar setOpenSidebar={setOpenSidebar} />

      <div className="p-relative">
        {openSidebar && <Sidebar />}
        <HeroBanner />
      </div>

      <ProductCategory />
      <CategoryNavTab />

      <section className="card_container">
        {products.map((product) => {
          return <VerticalCard key={product._id} product={product} />;
        })}
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
