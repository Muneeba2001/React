import React, { useEffect, useState } from "react";
import AxiosInstance from "../axios/axios";
import ProductCard from "../components/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchString, setSearchString] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const getProducts = async () => {
    if (params.CategoryName) {
      const response = await AxiosInstance.get(
        `/products/category/${params.CategoryName}`,
      );
      if (response.data.length) {
        setProducts(response.data); // Update state only after successful fetch
        setSearchProducts(response.data);
      } else {
        navigate("/products");
      }
    } else {
      const response = await AxiosInstance.get("/products");
      setProducts(response.data); // Update state only after successful fetch
      setSearchProducts(response.data);
    }
  };

  useEffect(() => {
    // Make API calls
    getProducts();
  }, []);

  useEffect(() => {
    const searchResults = products.filter((product) => {
      return product.title.toLowerCase().includes(searchString.toLowerCase());
    });

    setSearchProducts(searchResults);
  }, [searchString]);

  return (
    <>
      <div className="mb-4 flex flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold">Products</h1>

        <input
          type="text"
          placeholder="Search"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          className="w-full max-w-md rounded-lg border border-gray-300 p-2 text-lg shadow focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div className="w-full p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {searchProducts.map((product) => (
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
