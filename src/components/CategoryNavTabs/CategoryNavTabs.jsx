import "./categoryNavTabs.css";
import { NavLink } from "react-router-dom";

function CategoryNavTab() {
  return (
    <section className="categories_navTab_container">
      <ul className="categories_navTabs_list">
        <li>
          <NavLink
            to="/products"
            className="categories_navLink categories_navLink1"
          >
            All Products
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default CategoryNavTab;