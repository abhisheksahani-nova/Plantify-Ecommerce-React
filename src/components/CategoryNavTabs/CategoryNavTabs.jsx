import "./categoryNavTabs.css";

function CategoryNavTab() {
  return (
    <section className="categories_navTab_container">
      <ul className="categories_navTabs_list">
        <li>
          <a
            className="categories_navLink categories_navLink1"
            href="/new-arrivals"
          >
            New Arrivals
          </a>
        </li>
        <li>
          <a className="categories_navLink categories_navLink2" href="/bestsellers">
            Best Sellers
          </a>
        </li>
        <li>
          <a className="categories_navLink categories_navLink2" href="/trending">
            Trending
          </a>
        </li>
      </ul>
    </section>
  );
}

export default CategoryNavTab;