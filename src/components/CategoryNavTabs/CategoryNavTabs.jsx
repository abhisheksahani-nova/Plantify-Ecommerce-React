import "./categoryNavTabs.css";

function CategoryNavTab() {
  return (
    <section class="categories_navTab_container">
      <ul class="categories_navTabs_list">
        <li>
          <a
            class="categories_navLink categories_navLink1"
            href="/new-arrivals"
          >
            New Arrivals
          </a>
        </li>
        <li>
          <a class="categories_navLink categories_navLink2" href="/bestsellers">
            Best Sellers
          </a>
        </li>
        <li>
          <a class="categories_navLink categories_navLink2" href="/trending">
            Trending
          </a>
        </li>
      </ul>
    </section>
  );
}

export default CategoryNavTab;