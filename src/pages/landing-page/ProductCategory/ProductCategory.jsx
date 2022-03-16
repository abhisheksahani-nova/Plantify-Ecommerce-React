import "./productCategory.css";

function ProductCategory() {
  return (
    <section className="homepage_categories">
      <div className="categories_img_container">
        <img
          className="plant_img"
          src="https://cdn.shopify.com/s/files/1/0317/0687/3992/files/banner2-1.jpg?v=1580878417"
          alt="new plant"
        />
        <div className="info">
          <h2 className="categories_img_title">Indoor Plants!</h2>
          <p className="categories_img_subtitle_plant">Get 30% Off</p>
        </div>
      </div>
      <div className="categories_img_container">
        <img
          className="plant_img"
          src="https://cdn.shopify.com/s/files/1/0317/0687/3992/files/banner2-2.jpg?v=1580878425"
          alt="bestselling plant"
        />
        <div className="info info-bestselling">
          <h2 className="categories_img_title">Outdoor Plants</h2>
          <p className="categories_img_subtitle_plant">Get Exclusive Offer</p>
        </div>
      </div>
    </section>
  );
}

export default ProductCategory;