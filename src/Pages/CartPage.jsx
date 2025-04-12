import React, { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

function CartPage() {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(state);

  let totalPrice = state.items.reduce((acc, product) => {
    return acc + product.qty * product.caloriesPerServing;
  }, 0);

  let totalItem = state.items.reduce((acc, product) => {
    return acc + product.qty;
  }, 0);

  let shippingFee = totalItem * 5;

  return (
    <>
      <div className="pt-32">
        {state.items.length > 0 ? (
          <div className="flex lg:flex-row flex-col gap-10 px-4 sm:px-6 md:px-10 lg:px-16 py-12 flex-wrap">
            <div className="w-full lg:w-2/3">
              {state.items.map((item) => {
                return (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-5 px-4 py-5 mt-10 border-b pb-5">
                    <div className="flex-shrink-0 flex justify-center">
                      <img
                        src={item.image}
                        alt="Items image"
                        className="w-[150px] rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in-out duration-500"
                      />
                    </div>
                    <div className="px-4 py-2 sm:w-full space-y-1">
                      <h1 className="font-bold text-xl">{item.name}</h1>
                      <p className="text-sm">
                        Momo is a popular South Asian dumpling filled with vegetables or meat, seasoned with spices, and steamed or fried to perfection. A street food favorite and comfort food for many!
                      </p>
                    </div>
                    <div className="px-3 py-3 space-y-1">
                      <p className="text-lg font-medium">Rs. {item.caloriesPerServing}</p>
                      <button
                        onClick={() => {
                          dispatch({ type: "RemoveFromCart", payload: item.id });
                          toast.success("Product Deleted From cart!", {
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
                        className="bg-red-600 text-white py-2 px-4 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="flex gap-3 py-3 px-4 sm:px-8">
                      <button
                        onClick={() => dispatch({ type: "Decrement", payload: item.id })}
                        className="w-8 h-8 rounded-sm font-bold text-center bg-gray-200 cursor-pointer hover:bg-[#0C6967] hover:text-white"
                      >
                        -
                      </button>
                      <p className="font-semibold">{item.qty}</p>
                      <button
                        onClick={() => dispatch({ type: "Increment", payload: item.id })}
                        className="w-8 h-8 rounded-sm font-bold bg-gray-200 cursor-pointer hover:bg-[#0C6967] hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full lg:w-1/3 border-black px-6 py-5 flex flex-col gap-y-8 shadow-lg shadow-gray-400 rounded-lg mt-5">
              <h1 className="text-center font-bold text-xl">Order Summary</h1>
              <table className="space-y-2">
                <tbody>
                  <tr>
                    <td className="font-medium text-base">Subtotal :</td>
                    <td> Rs.{totalPrice}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-base">Shipping :</td>
                    <td> Rs.{shippingFee}</td>
                  </tr>
                </tbody>
              </table>

              <div className="space-y-3 space-x-0 lg:space-x-12">
                <table>
                  <tbody>
                    <tr>
                      <td className="font-medium text-base">Total :</td>
                      <td> Rs.{totalPrice + shippingFee}</td>
                    </tr>
                  </tbody>
                </table>

                <button
                  onClick={() => {
                    navigate("/payment", {
                      state: {
                        totalPrice: totalPrice,
                      },
                    });

                    toast.success("Product are ready to checkout!", {
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
                  className="bg-orange-500 text-white hover:bg-orange-600 text-sm lg:text-base cursor-pointer py-4 px-6 font-bold rounded-lg"
                >
                  Proceed to checkout ({totalItem})
                </button>

                <button
                  onClick={() => {
                    dispatch({ type: "ClearCart" });
                    toast.success("Cart are totally Cleared!", {
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
                  className="bg-red-500 text-white hover:bg-red-800 text-sm lg:text-base cursor-pointer py-4 px-6 font-bold rounded-lg"
                >
                  ClearCart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center gap-6 px-4">
            <img
              src="https://cdn1.vectorstock.com/i/1000x1000/43/85/young-man-pushing-a-shopping-empty-cart-vector-13494385.jpg"
              alt="Empty Cart"
              className="w-40 h-40 object-contain rounded-lg shadow-md"
            />
            <h1 className="text-3xl font-bold text-gray-700">Your Cart is Empty</h1>
            <p className="text-gray-500">Looks like you haven't added anything yet.</p>
            <NavLink
              to="/menu"
              className="bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
            >
              Shop Now
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
