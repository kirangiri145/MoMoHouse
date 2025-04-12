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
import Blure from "..//assets/Home/BlureBg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import HeadChief from "../assets/Home/HeadChief.png";
import AssistantChief from "../assets/Home/AssistantChief.png";
import AssistantChiefFire from "../assets/Home/AssistantChiefFire.png";

function About() {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">
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
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute w-48 h-48 bg-green-700 rounded-full -z-10 top-10"></div>
          <img
            src={Girls}
            alt="Chef"
            className="max-w-xs md:max-w-sm rounded-lg relative"
          />
        </div>
      </div>

      <div
        className="relative w-full h-[400px] shadow-gray-800 "
        style={{ backgroundImage: `url(${Worker})` }}
      >
        <div className="absolute inset-0 "></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h3 className="text-2xl font-bold drop-shadow-lg">
            Process behind the making
          </h3>
          <p className="text-lg max-w-md drop-shadow-md">
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

      <div className="space-y-12 px-6 md:px-20 py-10">
        <div className="p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Our momos are{" "}
              <span className="text-orange-500">made with love</span>
            </h1>
            <p className="text-gray-600 mt-3 leading-relaxed">
            Every momo comes with our house-made chutney – a bold, garlicky, chili-infused sauce that makes each bite unforgettable. We also offer a mild version if you’re not into too much heat!
            </p>
          </div>
          <div className="flex gap-4">
            <img
              src={Tatto}
              alt="Tatto"
              className="w-1/2 rounded-lg shadow-md"
            />
            <img
              src={MomoPlate}
              alt="Momo Plate"
              className="w-1/2 rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className=" p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex gap-4">
            <img src={Hand} alt="Hand" className="w-1/2 rounded-lg shadow-md" />
            <img
              src={FrieMomo}
              alt="Fried Momo"
              className="w-1/2 rounded-lg shadow-md"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Taste the difference with{" "}
              <span className="text-orange-500">our handcrafted momos</span>
            </h1>
            <p className="text-gray-600 mt-3 leading-relaxed">
            Momos are more than just dumplings — they’re a taste of the Himalayas, a bite-sized journey into the heart of Nepali and Tibetan cuisine. Each momo is handcrafted with love, sealed with spice, and steamed or fried to perfection.
            </p>
          </div>
        </div>
        <div className=" p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Our momos are the perfect{" "}
              <span className="text-orange-500">blend of tradition</span> and{" "}
              <span className="text-orange-500"> innovation</span>
            </h1>
            <p className="text-gray-600 mt-3 leading-relaxed">
            Momo is a type of South Asian dumpling — a beloved street food originally from Tibet and Nepal, now loved all across the world. These savory, bite-sized delights are typically filled with seasoned meats or vegetables, then steamed, fried, or pan-fried to perfection.
            </p>
          </div>
          <div className="flex gap-4">
            <img
              src={Casma}
              alt="Casma"
              className="w-1/2 rounded-lg shadow-md"
            />
            <img
              src={VegMomo}
              alt="Veg Momo"
              className="w-1/2 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-[3fr_1fr] h-[500px] w-full">
          <div
            className="relative flex items-center justify-center p-8 bg-cover bg-center h-full rounded-3xl "
            style={{ backgroundImage: `url(${Blure})` }}
          >
            <div className="absolute inset-0 bg-opacity-40"></div>

            <div className="relative text-white text-center md:text-left max-w-lg">
              <p className="text-2xl md:text-3xl font-serif italic">“</p>
              <p className="text-lg leading-relaxed">
                Momo is not just about sustenance, it's about bringing people
                together and creating memories. At our restaurant, we strive to
                create a warm and inviting atmosphere where our guests can enjoy
                delicious momo, great company, and unforgettable experiences.
              </p>
              <h2 className="mt-4 text-xl font-bold">Marcus Schleifer</h2>
              <h3 className="text-sm opacity-80">CEO</h3>
              <div className="mt-6 flex gap-4 justify-center md:justify-start">
                <button className="p-3 rounded-full text-white shadow-md hover:bg-orange-400 transition">
                  <FaArrowLeftLong />
                </button>
                <button className="p-3 rounded-full  text-white shadow-md hover:bg-orange-400 transition">
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <div className="h-full">
            <img
              src={SmileGirl}
              alt="CEO"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="py-12 px-6 md:px-16">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Meet The <span className="text-orange-500">Team</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Our talented team members who deliver only the best results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border-2 border-gray-300 shadow-md rounded-lg overflow-hidden">
            <img
              src={HeadChief}
              alt="Head Chef"
              className="w-full h-72 object-cover"
            />
            <h3 className="text-center text-lg font-semibold bg-gray-800 text-white py-2">
              Head Chef
            </h3>
          </div>
          <div className="border-2 border-gray-300 shadow-md rounded-lg overflow-hidden">
            <img
              src={AssistantChief}
              alt="Assistant Chef"
              className="w-full h-72 object-cover"
            />
            <h3 className="text-center text-lg font-semibold bg-gray-800 text-white py-2">
              Assistant Chef
            </h3>
          </div>
          <div className="border-2 border-gray-300 shadow-md rounded-lg overflow-hidden">
            <img
              src={AssistantChiefFire}
              alt="Assistant Chef"
              className="w-full h-72 object-cover"
            />
            <h3 className="text-center text-lg font-semibold bg-gray-800 text-white py-2">
              Assistant Chef
            </h3>
          </div>
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
