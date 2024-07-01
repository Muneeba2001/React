import React, { useEffect, useState } from "react";
import AxiosInstance from "../axios/axios";
import CategoryCard from "../components/categoryCard";

const Category = () => {
  const [category, setCategory] = useState([]);

  const getCategories = async () => {
    try {
      const response = await AxiosInstance.get("/products/categories");
      setCategory(response.data); // Update state only after successful fetch
      console.log(category);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
    console.log();
  }, []);

  return (
    <>
      <div className="mb-4 flex flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold">Categories</h1>
      </div>
      <div className="w-full p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {category &&
            category.length > 0 &&
            category.map((categories, index) => (
              <CategoryCard key={index} title={categories} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Category;
