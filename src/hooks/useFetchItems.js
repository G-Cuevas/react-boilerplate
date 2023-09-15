import { useState, useEffect } from "react";
import { getItems } from "../helpers/getItems";

export const useFetchProducts = (query) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async (productQuery) => {
    const newProducts = await getItems(productQuery);
    setProducts(newProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts(query);
  }, []);

  return {
    products,
    isLoading,
  };
};
