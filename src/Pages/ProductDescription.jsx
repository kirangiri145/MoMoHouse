import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";
import { Bounce, toast } from "react-toastify";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductDescription() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const { dispatch } = useContext(CartContext);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      let response = await fetch(`https://dummyjson.com/recipes/${id}`);
      response = await response.json();
      setProduct(response);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  let totalPrice = product?.caloriesPerServing * quantity;

  useEffect(() => {
    getProduct();
    AOS.init(); 
  }, [id]);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => quantity > 1 && setQuantity((prev) => prev - 1);

  if (loading) return <div className="pt-16 text-center text-xl">Loading...</div>;
  if (!product) return <div className="pt-16 text-center text-xl">Product not found</div>;

  return (
    <div className="pt-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div
          className="flex flex-col lg:flex-row shadow-xl shadow-gray-500 gap-x-4 rounded-2xl p-4 md:p-6"
          data-aos="fade-up"
        >
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <motion.img
              className="w-full h-auto rounded-2xl object-cover"
              src={
                product?.image ||
                product?.images?.[0] ||
                "https://via.placeholder.com/150"
              }
              alt={product?.name || "Product"}
              loading="lazy" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>

          <div className="space-y-4 mt-4 lg:mt-0 w-full lg:w-1/2">
            <motion.h1
              className="text-2xl md:text-3xl font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {product?.name}
            </motion.h1>
            <p className="text-orange-500">Rating: {product?.rating || "N/A"}</p>
            <p className="text-emerald-800">
              Description: {product?.description || "N/A"}
            </p>
            <p className="text-2xl text-amber-500">
              Rs. {product?.caloriesPerServing || "N/A"}
            </p>

            <div className="flex items-center gap-3">
              <p>Quantity</p>
              <div className="flex items-center gap-2">
                <button
                  className="bg-gray-300 h-7 w-7 hover:bg-gray-500 hover:text-white"
                  onClick={decrement}
                >
                  -
                </button>
                <span className="inline-block h-7 w-7 text-center leading-7">
                  {quantity}
                </span>
                <button
                  className="bg-gray-300 h-7 w-7 hover:bg-gray-500 hover:text-white"
                  onClick={increment}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => {
                  navigate("/payment", {
                    state: {
                      totalPrice: totalPrice,
                    },
                  });
                }}
                className="bg-blue-700 text-white w-full sm:w-auto px-5 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Now
              </motion.button>

              <motion.button
                onClick={() => {
                  dispatch({ type: "AddToCart", payload: product });
                  toast.success("Product added to cart!", {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Bounce,
                  });
                }}
                className="bg-orange-700 text-white w-full sm:w-auto px-5 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add To Cart
              </motion.button>
            </div>
          </div>
        </div>

        <div className="mt-6 px-2">
          <p className="text-emerald-800 text-sm md:text-base">
            <span className="font-semibold text-amber-600">Instructions</span>:{" "}
            {product?.instructions || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
