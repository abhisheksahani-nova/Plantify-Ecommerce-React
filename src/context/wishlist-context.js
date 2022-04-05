import { useState, createContext, useContext } from "react";
import axios from "axios";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

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
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
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
