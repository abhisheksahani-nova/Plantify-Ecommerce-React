import {
  CartManagement,
  ProductListing,
  LandingPage,
  Wishlist,
  Login,
  Signup,
} from "./pages/index.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/products" element={<ProductListing />}></Route>
        <Route path="/cart" element={<CartManagement />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
