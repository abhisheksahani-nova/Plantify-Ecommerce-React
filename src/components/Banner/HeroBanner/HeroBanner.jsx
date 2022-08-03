import "./heroBanner.css";
import { useNavigate } from "react-router-dom";

function HeroBanner() {
  const navigate = useNavigate();

  return (
    <section
      onClick={() => navigate("/products")}
      className="homepage_banner_container cursor-p"
    >
      <div className="banner_content_container"></div>
    </section>
  );
}

export default HeroBanner;
