import {
  Navbar,
  Footer,
  VerticalCard,
  HeroBanner,
  PromotionBanner,
  CategoryNavTab,
} from "../../components/index";
import ProductCategory from "./ProductCategory/ProductCategory";
import { useProducts } from "../../context/products-context";

function LandingPage() {
  const { products } = useProducts();

  return (
    <div className="homepage_main_container">
      <Navbar />
      <HeroBanner />
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
