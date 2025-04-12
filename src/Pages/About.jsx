import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import Girls from "../assets/Home/Girls.png";
import Worker from "../assets/Home/Worker.png";
import Tatto from "../assets/Home/Tatto.png";
import MomoPlate from "../assets/Home/MomoPlate.png";
import Hand from "../assets/Home/Hand.png";
import FrieMomo from "../assets/Home/FrieMomo.png";
import Casma from "../assets/Home/Casma.png";
import VegMomo from "../assets/Home/VegMomo.png";
import SmileGirl from "../assets/Home/SmileGirl.png";
import Blure from "../assets/Home/BlureBg.png";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import HeadChief from "../assets/Home/HeadChief.png";
import AssistantChief from "../assets/Home/AssistantChief.png";
import AssistantChiefFire from "../assets/Home/AssistantChiefFire.png";

function About() {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-16 max-w-7xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="font-allura text-green-700 text-4xl font-bold italic">About Us</h1>
          <h2 className="text-gray-400 uppercase tracking-wide font-semibold">
            WE PRIDE OURSELF ON
          </h2>
          <p className="text-lg">
            <span className="font-semibold text-orange-600">
              Our authentic momo recipes
            </span>{" "}
            <br />
            passed down through generations
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          <div className="absolute w-40 h-40 md:w-48 md:h-48 bg-green-700 rounded-full -z-10 top-10"></div>
          <img
            src={Girls}
            alt="Chef"
            className="w-full max-w-xs md:max-w-sm rounded-lg relative"
          />
        </div>
      </div>
      <div
        className="relative w-full h-[400px] bg-cover bg-center shadow-gray-800"
        style={{ backgroundImage: `url(${Worker})` }}
      >
        <div className="absolute inset-0  bg-opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:px-6">
          <h3 className="text-2xl font-bold drop-shadow-lg">
            Process behind the making
          </h3>
          <p className="text-lg max-w-md drop-shadow-md mt-2">
            See how we make momos that you like from only the best ingredients.
          </p>
          <NavLink
            to="https://youtu.be/BIG1h2vG-Qg?si=suCoT5H-60MinGxq"
            target="_blank"
            className="mt-4 flex items-center bg-green-900 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-700 transition"
          >
            <FaPlay className="mr-2" /> Watch the Video
          </NavLink>
        </div>
      </div>

      <div className="space-y-12 px-4 md:px-20 py-10 max-w-7xl mx-auto">
        <div className="p-4 md:p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Our momos are <span className="text-orange-500">made with love</span>
            </h1>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <img src={Tatto} alt="Tatto" className="w-1/2 md:w-1/2 rounded-lg shadow-md" />
            <img src={MomoPlate} alt="Momo Plate" className="w-1/2 md:w-1/2 rounded-lg shadow-md" />
          </div>
        </div>
        <div className="p-4 md:p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex gap-4 flex-wrap justify-center md:order-1 order-2">
            <img src={Hand} alt="Hand" className="w-1/2 md:w-1/2 rounded-lg shadow-md" />
            <img src={FrieMomo} alt="Fried Momo" className="w-1/2 md:w-1/2 rounded-lg shadow-md" />
          </div>
          <div className="order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Taste the difference with{" "}
              <span className="text-orange-500">our handcrafted momos</span>
            </h1>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
        </div>

        <div className="p-4 md:p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Our momos are the perfect{" "}
              <span className="text-orange-500">blend of tradition</span> and{" "}
              <span className="text-orange-500"> innovation</span>
            </h1>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <img src={Casma} alt="Casma" className="w-1/2 md:w-1/2 rounded-lg shadow-md" />
            <img src={VegMomo} alt="Veg Momo" className="w-1/2 md:w-1/2 rounded-lg shadow-md" />
          </div>
        </div>
      </div>
      <div className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 h-auto md:h-[500px] w-full">
          <div
            className="relative flex items-center justify-center p-8 bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url(${Blure})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl" />
            <div className="relative text-white text-center lg:text-left max-w-lg z-10">
              <p className="text-2xl md:text-3xl font-serif italic">“</p>
              <p className="text-lg leading-relaxed">
                Momo is not just about sustenance, it's about bringing people
                together and creating memories. At our restaurant, we strive to
                create a warm and inviting atmosphere where our guests can enjoy
                delicious momo, great company, and unforgettable experiences.
              </p>
              <h2 className="mt-4 text-xl font-bold">Marcus Schleifer</h2>
              <h3 className="text-sm opacity-80">CEO</h3>
              <div className="mt-6 flex gap-4 justify-center lg:justify-start">
                <button className="p-3 rounded-full text-white shadow-md hover:bg-orange-400 transition">
                  <FaArrowLeftLong />
                </button>
                <button className="p-3 rounded-full text-white shadow-md hover:bg-orange-400 transition">
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <div className="h-full rounded-3xl overflow-hidden">
            <img
              src={SmileGirl}
              alt="CEO"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Meet The <span className="text-orange-500">Team</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Our talented team members who deliver only the best results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[HeadChief, AssistantChief, AssistantChiefFire].map((member, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-300 shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={member}
                alt="Team"
                className="w-full h-72 object-cover"
              />
              <h3 className="text-center text-lg font-semibold bg-gray-800 text-white py-2">
                {idx === 0 ? "Head Chef" : "Assistant Chef"}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6 text-gray-600 text-lg font-medium">
          <span className="text-gray-800 text-lg font-bold">01 / 05</span>
          <div className="flex gap-4">
            <button className="p-3 rounded-full bg-gray-800 text-white shadow-md hover:bg-orange-500 transition">
              <FaArrowLeftLong />
            </button>
            <button className="p-3 rounded-full bg-gray-800 text-white shadow-md hover:bg-orange-500 transition">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
