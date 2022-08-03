import {
  CartManagement,
  ProductListing,
  LandingPage,
  Wishlist,
  Login,
  Signup,
  SingleProduct,
  Profile,
  Address,
  CheckoutPage,
  Orders,
} from "./pages/index.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import Mockman from "mockman-js";
import { useEffect } from "react";
import "./index.css";
import { useTheme } from "./context/theme-context";
import { Toast } from "./components/index";
import { useToast } from "./context/toast-context";

function App() {
  const { theme } = useTheme();
  const { toastData, setToastData } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("isGuest");
    localStorage.removeItem("token");
    localStorage.removeItem("isGuestLogin");

    navigate("/");
  }, []);

  useEffect(() => {
    if (toastData.show) {
      const timer = setTimeout(
        () => setToastData({ show: false, type: "", message: "" }),
        3000
      );

      return () => clearTimeout(timer);
    }
  }, [toastData]);

  return (
    <div className="app" data-theme={theme}>
      {toastData.show && <Toast />}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/products" element={<ProductListing />}></Route>
        <Route path="/cart" element={<CartManagement />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/singleProduct/:id" element={<SingleProduct />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/mock" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
