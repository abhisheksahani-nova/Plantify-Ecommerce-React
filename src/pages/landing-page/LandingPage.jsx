import {
  Navbar,
  Footer,
  VerticalCard,
  HeroBanner,
  PromotionBanner,
  CategoryNavTab,
} from "../../components/index";
import ProductCategory from "./ProductCategory/ProductCategory";

function LandingPage() {
  return (
    <div className="homepage_main_container">
      <Navbar />
      <HeroBanner />
      <ProductCategory />
      <CategoryNavTab />

      <section className="card_container">
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
      </section>

      <PromotionBanner />

      <div className="horizontal_rule_container">
        <hr className="horizontal_rule" />
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
