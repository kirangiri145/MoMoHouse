import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import { NavLink } from "react-router-dom";
import Scan from "../assets/Home/Scan.png";
import { IoMdPhonePortrait } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function Menu() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let response = await fetch("https://dummyjson.com/recipes");
      response = await response.json();
      console.log(response.recipes);
      setProducts(response.recipes || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="pt-16 px-4 md:px-10">
      <div className="border-2 border-amber-400 rounded-lg">
        <div className="p-6 md:p-10 bg-white text-gray-800 space-y-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-green-700 italic">Our Menu</h1>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-lg md:text-2xl font-medium">
              <span className="text-orange-600 font-semibold">
                Our menu is more than just momos,
              </span><br />
              with a variety of dishes to cater to all tastes and preferences.
            </h2>
          </div>

          <div className="text-center bg-gray-100 rounded-2xl px-4 py-8 sm:px-10 sm:py-10 max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
              Scan the QR code
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              You can also check the allergy advices using your phone as well
            </p>
            <div className="flex flex-col items-center space-y-3">
              <img
                src={Scan}
                alt="QR Code"
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
              />
              <h1 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-orange-700">SCAN</span> ME!
                <IoMdPhonePortrait size={30} />
              </h1>

              <h1 className="flex gap-1.5 font-bold text-sm sm:text-base">
                <span className="flex gap-0.5 text-orange-700">
                  <TfiLayoutLineSolid className="mt-1" /> BUFF
                </span>
                MOMO'S
                <TfiLayoutLineSolid className="mt-1" />
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        {products.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6 my-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="shadow-2xl shadow-gray-400 rounded-2xl w-full sm:w-[280px] md:w-[250px]"
              >
                <NavLink
                  to={`/productdescription/${product.id}`}
                  className="block"
                >
                  <img
                    className="h-48 w-full object-cover rounded-t-2xl"
                    src={
                      product?.image ||
                      product?.images?.[0] ||
                      "https://via.placeholder.com/150"
                    }
                    alt={product?.name || "Product"}
                  />
                </NavLink>
                <NavLink
                  to={`/productdescription/${product.id}`}
                  className="block p-3 text-center"
                >
                  <div className="flex flex-col items-center">
                    <p className="text-orange-500 font-semibold">
                      Rs. {product?.caloriesPerServing || "N/A"}
                    </p>
                    <p className="font-bold text-base md:text-lg">
                      {product?.name || "No Name"}
                    </p>
                    <p className="text-orange-800">
                      ⭐{product?.rating || "No Rating"}
                    </p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Menu;
