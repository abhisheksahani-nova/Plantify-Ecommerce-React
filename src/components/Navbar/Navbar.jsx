function Navbar() {
  return (
    <nav class="nav-bar white mb-0">
      <div class="nav-innerContainer font-clr">
        <h2 class="nav-heading mr-4 font-resize">Plant.</h2>
      </div>

      <div class="nav-innerContainer font-clr width-auto">
        <input class="nav_searchBar" type="text" />
        <span class="searchBar_icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>

      <div class="nav-innerContainer nav-icon-container width-reset inherit-clr mr-1">
        <div class="flex-col-center">
          <a class="font-clr" href="./wishlist.html">
            <i class="fa-solid fa-heart"></i>
          </a>
          <small>Wishlist</small>
        </div>

        <div class="flex-col-center">
          <a class="font-clr" href="./login.html">
            <i class="fa-solid fa-user"></i>
          </a>
          <small>Profile</small>
        </div>

        <div class="flex-col-center">
          <a class="font-clr nav-icon" href="./cartManagement.html">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
          <small>Cart</small>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
