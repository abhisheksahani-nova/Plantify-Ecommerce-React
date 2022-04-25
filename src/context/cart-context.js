import { useState, createContext, useContext } from "react";
import { useToast } from "./toast-context";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const { toastData, setToastData } = useToast();

  const addProductToCart = async (product, token) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setCartProducts(response.data.cart);
      setToastData({
        showToast: true,
        toastType: "success",
        toastMesaage: "Successfully added to the cart",
      });
    } catch (error) {
      console.log(error);
      setToastData({
        showToast: true,
        toastType: "error",
        toastMesaage: "Error while adding product to the cart",
      });
    }
  };

  const removeProductFromCart = async (id, token) => {
    try {
      const response = await axios.delete(`/api/user/cart/${id}`, {
        headers: {
          authorization: token,
        },
      });
      setCartProducts(response.data.cart);
      setToastData({
        showToast: true,
        toastType: "success",
        toastMesaage: "Successfully removed from the cart",
      });
    } catch (error) {
      console.log(error);
      setToastData({
        showToast: true,
        toastType: "error",
        toastMesaage: "Error while removing product from cart",
      });
    }
  };

  const productQtyIncrement = async (id, token) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        { action: { type: "increment" } },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setCartProducts(response.data.cart);
      setToastData({
        showToast: true,
        toastType: "success",
        toastMesaage: "Successfully incremented the qty",
      });
    } catch (error) {
      console.log(error);
      setToastData({
        showToast: true,
        toastType: "error",
        toastMesaage: "Error while incrementing qty",
      });
    }
  };

  const productQtyDecrement = async (id, token) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        { action: { type: "decrement" } },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setCartProducts(response.data.cart);
      setToastData({
        showToast: true,
        toastType: "success",
        toastMesaage: "Successfully decremented the qty",
      });
    } catch (error) {
      console.log(error);
      setToastData({
        showToast: true,
        toastType: "error",
        toastMesaage: "Error while decrementing qty",
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProductToCart,
        removeProductFromCart,
        productQtyIncrement,
        productQtyDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
