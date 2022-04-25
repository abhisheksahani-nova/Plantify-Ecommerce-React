import { useState, createContext, useContext } from "react";
import axios from "axios";
import { useToast } from "./toast-context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const { setToastData } = useToast();

  const moveProductToWishlist = async (product, token) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setWishlistProducts(response.data.wishlist);
      setToastData({
        showToast: true,
        toastType: "success",
        toastMesaage: "Successfully move to wishlist",
      });
    } catch (error) {
      console.log(error);
      setToastData({
        showToast: true,
        toastType: "error",
        toastMesaage: "Error in adding to wishlist",
      });
    }
  };

  const removeProductFromWishlist = async (id, token) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: {
          authorization: token,
        },
      });
      setWishlistProducts(response.data.wishlist);
      setToastData({
        showToast: true,
        toastType: "success",
        toastMesaage: "Successfully remove from wishlist",
      });
    } catch (error) {
      console.log(error);
      setToastData({
        showToast: true,
        toastType: "error",
        toastMesaage: "Error in removing product from wishlist",
      });
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistProducts,
        setWishlistProducts,
        moveProductToWishlist,
        removeProductFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
