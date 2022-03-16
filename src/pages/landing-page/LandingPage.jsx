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
    <div class="homepage_main_container">
      <Navbar />
      <HeroBanner />
      <ProductCategory />
      <CategoryNavTab />

      <section class="card_container">
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

      <div class="horizontal_rule_container">
        <hr class="horizontal_rule" />
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
