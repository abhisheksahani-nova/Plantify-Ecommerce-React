import "./singleproduct.css";
import { Navbar, Footer } from "../../components/index";

function SingleProduct() {
  return (
    <div>
      <Navbar />
      <section className="d-flex singleproductpage-container">
        <div className="singleproductpage-img-container">
          <img
            src="https://pyxis.nymag.com/v1/imgs/4a7/29b/4ef2f518834dd81d8ceb374caa54fd5171-22-plant-gifts.rsquare.w700.jpg"
            className="singleProduct-img"
          />
        </div>
        <div className="singleproductpage-info-container">
            <h1>Aleovera Succulent</h1>
        </div>
      </section>
    </div>
  );
}

export default SingleProduct;
