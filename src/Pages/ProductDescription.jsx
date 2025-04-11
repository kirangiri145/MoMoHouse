import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";
import { Bounce, toast } from "react-toastify";

function ProductDescription() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  
   const {dispatch} = useContext(CartContext)

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

  let totalPrice = product?.caloriesPerServing*quantity;

  useEffect(() => {
    getProduct();
  }, [id]);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.caloriesPerServing,
      quantity,
      image: product.images?.[0] || "https://via.placeholder.com/150",
    };

    const updatedCart = [...cart, newProduct];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Product added to cart!");
  };
  const buyNow = () => {
    if (!product) {
      console.log("Product not available for checkout");
      return;
    }

    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.caloriesPerServing,
      quantity,
      image: product.images?.[0] || "https://via.placeholder.com/150",
    };

    const updatedCart = [...cart, newProduct];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate(`/payment/${product.id}`);
  };

  if (loading) {
    return <div className="pt-16 text-center text-xl">Loading...</div>;
  }

  if (!product) {
    return <div className="pt-16 text-center text-xl">Product not found</div>;
  }

  return (
    <div>
      <div className="pt-20 w-[600px] ml-52">
        <div className="flex shadow-xl shadow-gray-500 ml-40 gap-x-2 rounded-2xl">
          <div>
            <img
              className="w-100 rounded-2xl ml-2 p-2"
              src={
                product?.image ||
                product?.images?.[0] ||
                "https://via.placeholder.com/150"
              }
              alt={product?.name || "Product"}
            />
          </div>
          <div className="py-3 space-y-3 w-[500px]">
            <h1 className="text-3xl font-bold">{product?.name}</h1>
            <p className="text-orange-500">
              Rating: {product?.rating || "N/A"}
            </p>
            <p className="text-emerald-800 ">
              Description: {product?.description || "N/A"}
            </p>
            <p className="text-3xl text-amber-500">
              Rs. {product?.caloriesPerServing || "N/A"}
            </p>
            <div className="flex items-center">
              <p>Quantity</p>
              <div className="ml-7 flex items-center gap-2">
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

            <div className="mt-5">
              <button
               onClick={()=>{
                navigate("/payment",{
                  state:{
                    totalPrice:totalPrice,
                  }
                });
              }}
              
                className="bg-blue-700 text-white w-50 p-3 rounded-md mb-4"
              >
                Buy Now
              </button>
              <button

               onClick={()=>{
                dispatch ({type :"AddToCart", payload:product})

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
               
                className="bg-orange-700 text-white  mb-1 w-50 p-3 rounded-md"
      
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="pl-30 ml-10">
          <p className="text-emerald-800 text-[15px] m-3">
            <span className="font-semibold text-amber-600">Instructions </span>
            : {product?.instructions || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
