import React from "react";
import { FaPlay } from "react-icons/fa";
import Chief from "../assets/Services/Chief.png";
import Momo from "../assets/Services/Momo.png";
import Shadow from "../assets/Services/Momo.png";
import Party from "../assets/Services/Party .png";
import Categring from "../assets/Services/Categring.png";
import QRCode from "../assets/Services/QR Code.png";
import Eating from "../assets/Services/Eating.png";
import { NavLink } from "react-router-dom";

function Services() {
  return (
    <div className=" pt-20 ">
      <div className="w-full bg-white px-20">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 mr-5">
            <h3 className="text-teal-700 text-lg font-bold italic mb-16">
              <NavLink to="/">Our Services</NavLink>
            </h3>
            <h2 className="text-gray-400  font-semibold  mb-2">
              KNOWING OUR CUSTOMERS NEEDS
            </h2>
            <p className="text-gray-600 text-lg">
              <span className="text-orange-500 font-semibold">
                We're more than just momos.
              </span>{" "}
              <br />
              We're a full-service dining experience.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={Chief}
              alt="Chef"
              className="rounded-full  object-cover shadow-lg "
            />
          </div>
        </div>
        <div className="relative w-full h-[500px] text-white overflow-hidden rounded-2xl">
          <img
            src={Momo}
            alt="Momos "
            className="absolute top-0 left-0 w-full h-full objeect-cover z-0 "
          />
          <img
            src={Shadow}
            alt="Momos "
            className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-70"
          />
          <div className="relative flex flex-col items-center justify-center z-20 h-full  bg-opacity-50 text-center px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Dine With Us
            </h1>
            <p className="text max-w-xl mb-6">
              Enjoy our momos in the comfort of your own home with our delivery
              services
            </p>
            <button className="flex items-center gap-3 bg-green-800 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-green-300 transition duration-300">
              <NavLink
                to="https://youtu.be/akIWCPt7ULs?si=Azpqg1H0PzcTuYh_"
                target="_blank"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
              >
                <FaPlay className="text-green-700 w-3.5 h-3.5 ml-[1px]" />
              </NavLink>
              Watch the Video
            </button>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-6 py-12 grid gap-12">
        <div class="grid md:grid-cols-2 gap-6 items-center">
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <img src={Party} alt="Party Icon" class="w-6 h-6" />
              <h1 class="text-xl font-semibold">Private Party</h1>
            </div>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.
            </p>
            <div class="bg-white shadow-md rounded-xl p-4 flex items-center gap-4 w-fit">
              <div>
                <h3 class="text-sm font-bold text-blue-600">
                  Scan the QR code
                </h3>
                <p class="text-xs text-gray-500">
                  You can also check about the service
                </p>
              </div>
              <img src={QRCode} alt="QR Code" class="w-16 h-16" />
            </div>
          </div>
          <div>
            <img
              src={Eating}
              alt="Private Party"
              class="rounded-xl shadow-md h-80 "
            />
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-6 items-center">
          <div class="order-2 md:order-1">
            <img src={Eating} alt="Eating" class="rounded-xl shadow-md h-80 " />
          </div>
          <div class="space-y-4 order-1 md:order-2">
            <div class="flex items-center gap-2">
              <img src={Categring} alt="Catering Icon" class="w-6 h-6" />
              <h1 class="text-xl font-semibold">Catering</h1>
            </div>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.
            </p>
            <div class="bg-white shadow-md rounded-xl p-4 flex items-center gap-4 w-fit">
              <div>
                <h3 class="text-sm font-bold text-blue-600">
                  Scan the QR code
                </h3>
                <p class="text-xs text-gray-500">
                  You can also check about the service
                </p>
              </div>
              <img src={QRCode} alt="QR Code" class="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-200 py-12 px-4 rounded-2xl text-center max-w-4xl mx-auto">
        <h1 class="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
          Got any Queries?
        </h1>
        <p class="text-gray-600 mb-6">
          If you have any queries, send us a message. Our friendly team would
          love to hear from you
        </p>
        <NavLink to="/menu" class="bg-teal-700 hover:bg-teal-800 text-white font-medium px-6 py-2 rounded-full transition duration-300">
         <span className="text-md font-bold rounded-2xl bg-green-700 hover:text-amber-700 px-1 py-1"> Get In Touch</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Services;
