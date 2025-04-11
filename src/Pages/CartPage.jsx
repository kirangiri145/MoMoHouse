import React, { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import {  NavLink, useNavigate } from "react-router-dom";
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
          <div className="flex lg:flex-row flex-col gap-10 px-16 py-12 ">
            <div className=" border-black ">
              {state.items.map((item) => {
                return (
                  <div key={item.id} className="flex gap-5 px-8 py-5 mt-10">
                    <div>
                      <img
                        src={item.image}
                        alt="Items image"
                        className="w-[150px] rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in-out duration-500"
                      />
                    </div>
                    <div className=" px-6 py-3 w-[350px] space-y-1 ">
                      <h1 className="font-bold text-xl">{item.name}</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At veritatis tempora quasi dicta ad, possimus explicabo
                        aperiam consectetur molestiae esse.
                      </p>
                    </div>

                    <div className="px-3 py-3 space-y-1 ">
                      <p className="text-lg font-medium">
                        Rs. {item.caloriesPerServing}
                      </p>
                      <button
                        onClick={() => {
                          dispatch({
                            type: "RemoveFromCart",
                            payload: item.id,
                          });

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

                    <div className="flex  gap-3 py-3 px-8">
                      <button
                        onClick={() => {
                          dispatch({ type: "Decrement", payload: item.id });
                        }}
                        className="w-8 h-8 rounded-sm  font-bold text-center bg-gray-200 cursor-pointer hover:bg-[#0C6967] hover:text-white"
                      >
                        -
                      </button>
                      <p className="font-semibold ">{item.qty}</p>
                      <button
                        onClick={() => {
                          dispatch({ type: "Increment", payload: item.id });
                        }}
                        className="w-8 h-8 rounded-sm font-bold bg-gray-200 cursor-pointer hover:bg-[#0C6967] hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className=" border-black px-8 py-5 flex flex-col gap-y-8 shadow-lg shadow-gray-400 rounded-lg mt-15">
              <h1 className="text-center font-bold text-xl ">Order Summary</h1>
              <table className="space-y-2">
                <tbody>
                  <tr>
                    <td className="font-medium text-base ">Subtotal :</td>
                    <td> Rs.{totalPrice}</td>
                  </tr>

                  <tr>
                    <td className="font-medium text-base">Shipping :</td>
                    <td> Rs.{shippingFee}</td>
                  </tr>
                </tbody>
              </table>

              <div className="space-y-3 space-x-12">
                <table>
                  <tbody>
                    <tr>
                      <td className="font-medium text-base ">Total :</td>
                      <td className=""> Rs.{totalPrice + shippingFee}</td>
                    </tr>
                  </tbody>
                </table>

                <button 
                onClick={()=>{
                  navigate("/payment",{
                    state:{
                      totalPrice:totalPrice,
                    }
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
                
                className="bg-orange-500 text-white hover:bg-orange-600 lg:text-base text-sm cursor-pointer py-4 px-6  font-bold rounded-lg ">
                  Proceed to checkout ({totalItem})
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "ClearCart" });

                     toast.success("Cart are totally Clered!", {
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
                  className="bg-red-500 text-white hover:bg-red-800 lg:text-base text-sm cursor-pointer py-4 px-6  font-bold rounded-lg"
                >
                  ClearCart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <div className="flex flex-col items-center justify-center h-[60vh] text-center gap-6">
              <img
                src="https://cdn1.vectorstock.com/i/1000x1000/43/85/young-man-pushing-a-shopping-empty-cart-vector-13494385.jpg"
                alt="Empty Cart"
                className="w-40 h-40 object-contain rounded-lg shadow-md"
              />
              <h1 className="text-3xl font-bold text-gray-700">
                Your Cart is Empty
              </h1>
              <p className="text-gray-500">
                Looks like you haven't added anything yet.
              </p>
              <NavLink
                to="/menu"
                className="bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
              >
                Shop Now
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
