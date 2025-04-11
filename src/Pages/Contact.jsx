import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosTime } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Contact() {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <div className="py-12 px-6 md:px-16">
        <div className="text-center mb-6 mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">
            Our Contact
          </h1>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-orange-500">
            GET IN TOUCH
          </h2>
        </div>
        <div className="text-center max-w-lg mx-auto mb-8">
          <h2 className="text-xl md:text-xl font-semibold text-gray-700">
            Our Friendly Team would love to hear from you
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-gray-800 flex gap-2">
              <FaLocationDot size={32} className="text-amber-600" />
              Location
            </h1>
            <p className="text-gray-600 mt-2">
              New Baneshwor -41201, Kathmandu, Bagmati, Nepal
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-gray-800 flex gap-2">
              <FiPhoneCall size={32} className="text-amber-600" />
              Phone
            </h1>
            <p className="text-gray-600 mt-2">
              <span className="text-green-800 font-bold"> Mobile:</span> (+977)
              980 5689789 <br />
              <span className="block ml-16">(+977) 9841 275897</span>
            </p>
            <p className="text-gray-600 mt-2">
              <span className="text-green-800 font-bold"> Tel:</span>{" "}
              <span className="font-semibold">01-4783972</span>
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-gray-800 flex gap-2">
              <IoIosTime size={32} className="text-amber-600" />
              Service Time
            </h1>
            <p className="text-gray-600 mt-2">
              <span className="text-green-800 font-bold "> MON-FRI:</span>{" "}
              <span className="font-semibold">8am-8pm</span>
            </p>
            <p className="text-gray-600 mt-2">
              <span className="text-green-800 font-bold">SAT-SUN:</span>{" "}
              <span className="font-semibold text-red-500">Closed</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-12 md:px-16 bg-gray-100">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14137.005058740315!2d85.344622!3d27.6476968!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1743790264561!5m2!1sen!2snp"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px] rounded-lg"
          ></iframe>
        </div>
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Contact <span className="text-amber-700">Us</span></h1>
            <p className="text-gray-600 mt-2 font-semibold">
              If you have any queries, send us a message. Our friendly team
              would love to hear from you.
            </p>
          </div>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 font-semibold">
                  First Name
                </label>
                <input
                  type="text" placeholder="Enter First Name"
                  className="border p-2 rounded w-full focus:ring focus:ring-orange-300"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 font-semibold">
                  Last Name
                </label>
                <input
                  type="text" placeholder="Enter Last Name"
                  className="border p-2 rounded w-full focus:ring focus:ring-orange-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email" placeholder="Enter Email"
                className="border p-2 rounded w-full focus:ring focus:ring-orange-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Phone Number
              </label>
              <PhoneInput
                country={"np"}
                value={phone}
                onChange={(value) => setPhone(value)}
                inputClass="w-full border p-2 rounded focus:ring focus:ring-orange-300"
                containerClass="w-full"
                preferredCountries={["np", "in", "us"]}
                enableSearch={true}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                rows="3" placeholder="Enter Message Here..."
                className="border p-2 rounded w-full focus:ring focus:ring-orange-300"
              ></textarea>
            </div>
            <button className="bg-emerald-700 text-white py-3 px-6 rounded-lg hover:bg-orange-600 w-full transition">
              <span className="text-amber-50">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
