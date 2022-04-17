import {
  CartManagement,
  ProductListing,
  LandingPage,
  Wishlist,
  Login,
  Signup,
  SingleProduct,
  Profile,
} from "./pages/index.js";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { useEffect } from "react";
import "./index.css";
import { useTheme } from "./context/theme-context";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  return (
    <div className="app" data-theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/products" element={<ProductListing />}></Route>
        <Route path="/cart" element={<CartManagement />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/singleProduct/:id" element={<SingleProduct />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/mock" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
