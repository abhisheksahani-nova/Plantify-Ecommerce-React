function Navbar() {
  return (
    <nav className="nav-bar white mb-0">
      <div className="nav-innerContainer font-clr">
        <h2 className="nav-heading mr-4 font-resize">Plant.</h2>
      </div>

      <div className="nav-innerContainer font-clr width-auto">
        <input className="nav_searchBar" type="text" />
        <span className="searchBar_icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>

      <div className="nav-innerContainer nav-icon-container width-reset inherit-clr mr-1">
        <div className="flex-col-center">
          <a className="font-clr" href="./wishlist.html">
            <i className="fa-solid fa-heart"></i>
          </a>
          <small>Wishlist</small>
        </div>

        <div className="flex-col-center">
          <a className="font-clr" href="./login.html">
            <i className="fa-solid fa-user"></i>
          </a>
          <small>Profile</small>
        </div>

        <div className="flex-col-center">
          <a className="font-clr nav-icon" href="./cartManagement.html">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
          <small>Cart</small>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
