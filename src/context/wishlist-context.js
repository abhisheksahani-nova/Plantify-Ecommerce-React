import { useState, createContext, useContext } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  return (
    <WishlistContext.Provider value={{ wishlistProducts, setWishlistProducts }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
