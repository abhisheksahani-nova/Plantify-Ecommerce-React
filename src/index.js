import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/products-context";
import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";
import { CategoryProvider } from "./context/category-context";
import { ThemeProvider } from "./context/theme-context";
import { ToastProvider } from "./context/toast-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ToastProvider>
          <CartProvider>
            <WishlistProvider>
              <ProductsProvider>
                <CategoryProvider>
                  <App />
                </CategoryProvider>
              </ProductsProvider>
            </WishlistProvider>
          </CartProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
