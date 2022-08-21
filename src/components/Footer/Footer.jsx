import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  const token = localStorage.getItem("token");

  return (
    <footer className="footer-container">
      <div className="d-flex justify-cont-center">
        <div className="d-flex j-space-between footer-icon-cont mt-2">
          <a href="https://www.linkedin.com/in/abhishek-sahani-698b12135/">
            <i className="fa-brands fa-linkedin footer-icon"></i>
          </a>
          <a href="https://github.com/abhisheksahani-nova">
            <i className="fa-brands fa-github footer-icon"></i>
          </a>
          <a href="https://abhisheksahani.hashnode.dev/">
            <i className="fa-brands fa-hashnode footer-icon"></i>
          </a>
        </div>
      </div>

      <div className="d-flex justify-cont-center">
        <div className="d-flex j-space-between footer-copyright-cont">
          <small> © | 2022 | abhishekSahani | Made with love❤️</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
