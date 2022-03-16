import "./productCategory.css";

function ProductCategory() {
  return (
    <section class="homepage_categories">
      <div class="categories_img_container">
        <img
          class="plant_img"
          src="https://cdn.shopify.com/s/files/1/0317/0687/3992/files/banner2-1.jpg?v=1580878417"
          alt="new plant"
        />
        <div class="info">
          <h2 class="categories_img_title">Indoor Plants!</h2>
          <p class="categories_img_subtitle_plant">Get 30% Off</p>
        </div>
      </div>
      <div class="categories_img_container">
        <img
          class="plant_img"
          src="https://cdn.shopify.com/s/files/1/0317/0687/3992/files/banner2-2.jpg?v=1580878425"
          alt="bestselling plant"
        />
        <div class="info info-bestselling">
          <h2 class="categories_img_title">Outdoor Plants</h2>
          <p class="categories_img_subtitle_plant">Get Exclusive Offer</p>
        </div>
      </div>
    </section>
  );
}

export default ProductCategory;