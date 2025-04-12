import React from "react";
import Men from "../assets/Alergyadvice/Men.png";
import Spice from "../assets/Alergyadvice/Spice.png";
import { FaMobileAlt } from "react-icons/fa";
import QRCode from "../assets/Services/QR Code.png";

import { FaRegCircle } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function AllergyAdvice() {
  return (
    <div className="pt-32 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 gap-10">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-script text-green-700">
            Allergy Advices
          </h1>
          <h3 className="uppercase text-sm tracking-widest text-gray-400">
            At Our Restaurant
          </h3>
          <p className="text-base md:text-lg text-gray-800 font-medium">
            We use only the freshest and highest <br className="hidden md:block" /> quality ingredients in
            all our dishes, <br className="hidden md:block" />
            <span className="text-orange-600 font-semibold">
              and offer transparency in our ingredient labeling.
            </span>
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="border-4 border-blue-500 p-2 rounded-2xl">
            <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
              <div className="absolute inset-0 rounded-full bg-teal-900 -z-10 scale-110"></div>
              <img
                src={Men}
                alt="Chef"
                className="w-full h-full object-cover rounded-full z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20 bg-white overflow-hidden mt-16">
        <img
          src={Spice}
          alt="spice"
          className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-[60rem] opacity-70"
        />

        <div className="relative text-center mb-10 px-4">
          <h1 className="text-3xl font-bold">
            <span className="text-orange-600 font-semibold">Ingredient's</span> Used
          </h1>
        </div>

        <div className="relative flex flex-col items-center gap-8 px-4">
          <div className="bg-white border-2 border-teal-600 p-6 rounded-lg w-full max-w-lg shadow-lg">
            <h1 className="font-semibold text-left mb-2">For the Dough</h1>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />120 gms refined flour</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1/4 tsp baking powder</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1/2 tsp salt water (for kneading)</p>
          </div>
          <div className="bg-white border-2 border-teal-600 p-6 rounded-lg w-full max-w-lg shadow-lg">
            <h1 className="font-semibold text-left mb-2">For the Chicken Filling</h1>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1 cup chicken (minced)</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1/2 cup onions, finely chopped</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1/4 tsp black pepper powder</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1 tbsp oil</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1/2 tsp soya sauce</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />Salt</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1/4 tsp vinegar</p>
          </div>
          <div className="bg-white border-2 border-teal-600 p-6 rounded-lg w-full max-w-lg shadow-lg">
            <h1 className="font-semibold text-left mb-2">For the Vegetarian Filling</h1>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1 cup cabbage and carrots, grated</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />2 tbsp onions, finely chopped</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1/2 tsp garlic, finely chopped</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1 tbsp oil</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1/2 tsp soya sauce</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />To taste salt</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />To taste pepper</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1 tbsp cornflour</p>
          </div>
          <div className="bg-white border-2 border-teal-600 p-6 rounded-lg w-full max-w-lg shadow-lg">
            <h1 className="font-semibold text-left mb-2">For Chilli Sauce</h1>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />25 gram garlic, peeled</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />6 gms whole red chillies</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />3 tbsp vinegar</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />1 tbsp oil</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />To taste salt</p>
            <p><FaRegCircle className="inline mr-2 text-orange-700" />To taste sugar</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl font-bold mb-6">
            <span className="text-orange-700">Allergy</span> Advice
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Our momos are prepared with the utmost care using handpicked ingredients to ensure safety and satisfaction for all our customers. Whether you choose chicken or vegetarian options, each momo is freshly steamed and packed with authentic flavors. Please note that our fillings may include allergens such as gluten, soya, and dairy (depending on the sauce). If you have specific dietary restrictions or allergies, feel free to ask our staff before placing your order.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center p-6 bg-gray-100 rounded-2xl">
          <h1 className="text-3xl font-bold text-green-900 mb-4">
            Scan the QR code
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            You can also check the allergy advices using your phone as well
          </p>
          <div className="mb-6">
            <img
              src={QRCode}
              alt="QR Code"
              className="mx-auto w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-xl font-semibold flex justify-center items-center gap-2 mb-5">
            <NavLink to="/payment"><span className="text-orange-700 underline">SCAN</span></NavLink>
            ME <FaMobileAlt size="20" className="text-black" />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AllergyAdvice;
