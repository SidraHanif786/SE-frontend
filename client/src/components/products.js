import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import client from "../service";

const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    totalDocs: 0,
    totalPages: 1,
    page: 1,
    hasPrevPage: false,
    hasNextPage: false,
  });

  useEffect(() => {
    fetchProducts(1, 12);
  }, []); // Fetch products on component mount

  const fetchProducts = async (page = 1, pageSize = 12) => {
    try {
      const response = await client.get(
        `/product/getAll?page=${page}&pageSize=${pageSize}`
      );
      const responseData = response.data.data;
      setProducts(responseData.docs);

      setPageInfo({
        totalDocs: responseData.totalDocs,
        totalPages: responseData.totalPages,
        page: responseData.page,
        hasPrevPage: responseData.hasPrevPage,
        hasNextPage: responseData.hasNextPage,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handlePageChange = async (newPage) => {
    await fetchProducts(newPage, 12);
  };

  return (
    <div className="bg-stone-100 pt-20">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="font-normal text-xl text-center pb-8 md:text-3xl">
          All Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <a key={product._id} href="#" className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={product.img[0]} alt={product.title} />
                <div className="absolute h-full w-full object-cover object-center group-hover:opacity-100 flex items-center justify-center -bottom-10 group-hover:bottom-0 transition-all duration-300 bg-black/20 opacity-0">
                  {product.total === 0 ? (
                    <button className="bg-gray-500 rounded-lg text-white py-2 px-5 cursor-not-allowed">
                      Out of Stock
                    </button>
                  ) : (
                    <button
                      className="bg-teal-700 rounded-lg text-white py-2 px-5 hover:bg-teal-900 transition-all duration-300"
                      onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
              <h3 className="mt-3 text-xl text-gray-700">{product.title}</h3>
              <del className="text-red-700 text-md">
                {`$${parseFloat(product.price) + 150}`}{" "}
              </del>
              <p className="ml-2 mt-2 text-lg font-medium text-gray-900 inline-block">{`$${product.price}`}</p>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="bg-gray-300 px-4 py-2 mr-2 disabled:opacity-50 cursor-pointer"
            disabled={!pageInfo.hasPrevPage}
            onClick={() => handlePageChange(pageInfo.page - 1)}>
            Previous
          </button>
          <button
            className="bg-gray-300 px-4 py-2 ml-2 disabled:opacity-50 cursor-pointer"
            disabled={!pageInfo.hasNextPage}
            onClick={() => handlePageChange(pageInfo.page + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
