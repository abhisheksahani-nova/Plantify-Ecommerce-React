import "./footer.css";

function Footer() {
  return (
    <footer>
      <ul class="footer_list_items">
        <li>
          <a class="mr-1 footer_link inherit-clr" href="/about">
            About Us
          </a>
        </li>
        <li>
          <a class="mr-1 ml-1 inherit-clr" href="/customer-service">
            Customer Service
          </a>
        </li>
        <li>
          <a class="mr-1 ml-1 inherit-clr" href="/subscription">
            Subscription
          </a>
        </li>
        <li>
          <a class="mr-1 ml-1 inherit-clr" href="/contact-us">
            Contact Us
          </a>
        </li>
        <li>
          <a class="mr-1 ml-1 inherit-clr" href="/category">
            Category
          </a>
        </li>
        <li>
          <a class="mr-1 ml-1 inherit-clr" href="./productListing.html">
            All Product
          </a>
        </li>
        <li>
          <a class="mr-1 ml-1 inherit-clr" href="./cartManagement.html">
            My Cart
          </a>
        </li>
        <li>
          <a class="mr-1 ml-1 inherit-clr" href="./wishlist.html">
            My Wishlist
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;