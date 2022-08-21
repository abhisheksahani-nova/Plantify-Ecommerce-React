import "./heroBanner.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const bannerImages = ["banner-bg-img1", "banner-bg-img2", "banner-bg-img3"];

function HeroBanner() {
  const [bannerImg, setBannerImg] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    let bannerImgTimer = setTimeout(() => {
      if (bannerImg == 2) {
        setBannerImg(0);
      } else {
        setBannerImg((prev) => prev + 1);
      }
    }, 3000);

    return () => {
      clearTimeout(bannerImgTimer);
    };
  }, [bannerImg]);

  return (
    <section
      onClick={() => navigate("/products")}
      className={`cursor-p ${bannerImages[bannerImg]}`}
    >
      <div className="banner_content_container"></div>
    </section>
  );
}

export default HeroBanner;
