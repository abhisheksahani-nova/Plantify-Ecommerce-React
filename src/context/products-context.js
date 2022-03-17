import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
