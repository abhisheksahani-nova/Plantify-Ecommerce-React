import { useState, createContext, useContext } from "react";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

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
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
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
