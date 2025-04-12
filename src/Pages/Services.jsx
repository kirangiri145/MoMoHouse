import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="pt-16 px-4 md:px-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-700">Our Services</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          We provide the best service for your taste buds! Explore our range of services below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Service 1"
            className="w-full h-80 object-cover rounded-md"
          />
          <h2 className="text-2xl font-semibold text-teal-700 mt-4">Custom Momo Creations</h2>
          <p className="text-gray-600 text-center mt-2">Build your own momo with unique fillings and dips!</p>
          <Link
            to="/service1"
            className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-800 transition-all"
          >
            Learn More
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Service 2"
            className="w-full h-80 object-cover rounded-md"
          />
          <h2 className="text-2xl font-semibold text-teal-700 mt-4">Momo Party Packages</h2>
          <p className="text-gray-600 text-center mt-2">Host a momo party with all your friends and family!</p>
          <Link
            to="/service2"
            className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-800 transition-all"
          >
            Learn More
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Service 3"
            className="w-full h-80 object-cover rounded-md"
          />
          <h2 className="text-2xl font-semibold text-teal-700 mt-4">Momo Delivery Service</h2>
          <p className="text-gray-600 text-center mt-2">Get your favorite momos delivered to your doorsteps!</p>
          <Link
            to="/service3"
            className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-800 transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-teal-700 text-center">Customer Reviews</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <p className="text-lg text-gray-600">
              "The custom momo creations were amazing! Loved the variety of fillings and sauces!"
            </p>
            <div className="flex items-center mt-4">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-300" />
            </div>
            <p className="text-teal-700 font-semibold mt-2">John Doe</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <p className="text-lg text-gray-600">
              "Momo party packages are a hit at every gathering. Highly recommend for any occasion!"
            </p>
            <div className="flex items-center mt-4">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
            <p className="text-teal-700 font-semibold mt-2">Jane Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
