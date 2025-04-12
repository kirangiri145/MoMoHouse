import Momo from "../assets/Home/Momo.png";
import OneBg from "../assets/Home/OneBg.png";
import Man from "../assets/Home/Man.png";
import QualityFood from "../assets/Home/QualityFood.png";
import PrivateParty from "../assets/Home/PrivateParty.png";
import Categring from "../assets/Home/Categring.png";
import Waiter from "../assets/Home/Waiter.png";

import Women from "../assets/Home/Women.png";
import Circle from "../assets/Home/Circle.png";

import { BsArrowRightShort } from "react-icons/bs";
import NavigateToMenu from "../Components/NavigateToMenu";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import "react-phone-input-2/lib/style.css";
import { NavLink } from "react-router-dom";

function Home() {
  const [phone, setPhone] = useState("");

  const [recipes, setRecipes] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setRecipes(response.recipes);

    const filterItems = response.recipes.filter((item) => {
      return item.cuisine == "Italian";
    });
    setFilterProduct(filterItems);
  };

  const filterRecipes = (country) => {
    const filterItems = recipes.filter((item) => {
      return item.cuisine == country;
    });
    setFilterProduct(filterItems);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-end items-center md:items-start">
        <div className="mt-28 pt-7 md:mr-48 text-center md:text-left">
          <div>
            <p className="font-Roboto text-xl md:text-2xl">RESTAURANT</p>
            <h1 className="text-4xl md:text-[61px] flex justify-center md:justify-start">
              The
              <span
                style={{ backgroundImage: `url(${OneBg})` }}
                className="h-12 md:h-20 text-white bg-bottom bg-no-repeat w-32 md:w-48 flex justify-center items-center border-2"
              >
                #One
              </span>
            </h1>
            <h1 className="text-4xl md:text-[61px]">
              Momo <span className="text-[#D95103]">Restaurant</span>
            </h1>
            <p className="text-lg md:text-[20px] font-medium">
              More than
              <span className="text-[#D95103] mx-2 text-[20px]">
                20+ Varieties
              </span>
              of momo available for you
            </p>
          </div>

          <NavigateToMenu />
        </div>
        <div className="mt-8 overflow-hidden w-96 relative flex justify-center md:justify-end">
          <img
            className="h-32 md:h-52 top-14 left-8 absolute"
            src={Momo}
            alt="Momo"
          />
          <img
            className="h-52 md:h-96 -mt-4 md:-mt-0"
            src={Circle}
            alt="circle"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="bg-white rounded-lg w-full max-w-md p-6 flex justify-center items-center shadow-lg">
            <img
              src={Man}
              alt="Man"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Customers <span className="text-orange-600">Love Us</span>
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
            fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
            dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
            cursus turpis.
          </p>

          <NavLink to="/menu">
            <button className="flex items-center gap-2 bg-[#0C6967] text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-all">
              Explore Our Story <BsArrowRightShort className="text-xl" />
            </button>
          </NavLink>
        </div>
      </div>

      <div className="">
        <div className="text-center  ">
          <h1 className="text-[39px]">
            Our <span className="text-[#D95103]">Most Popular</span> Recipes
          </h1>
          <p className="text-[20px]">
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places
          </p>
        </div>
        <div className="text-center space-x-2 p-2   ">
          <button
            onClick={() => {
              filterRecipes("Italian");
            }}
            className="border-1   hover:bg-gray-400  rounded-2xl p-1  w-24  "
          >
            Italian
          </button>
          <button
            onClick={() => {
              filterRecipes("Korean");
            }}
            className="border-1  hover:bg-gray-400  rounded-2xl p-1  w-24  "
          >
            Korean
          </button>
          <button
            onClick={() => {
              filterRecipes("Indian");
            }}
            className="border-1   hover:bg-gray-400 rounded-2xl p-1   w-24 "
          >
            Indian
          </button>
        </div>
        <div className="">
          <div>
            {filterProduct.length > 0 ? (
              <div className="flex  flex-wrap justify-center gap-5 p-5 px-14  ">
                {filterProduct.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="shadow-2xl  shadow-gray-800   rounded-2xl   w-52  h-52  flex  justify-center flex-col  items-center "
                    >
                      <img
                        className="h-32 rounded-2xl  "
                        src={item.image}
                        alt=""
                      />

                      <NavLink to={`/productdescription/${item.id}`}>
                        <div className="flex flex-col justify-center items-center">
                          <p className="text-orange-500">
                            Rs.{item.caloriesPerServing}
                          </p>
                          <p>{item.name}</p>
                          <p className="text-orange-800">{item.rating}</p>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className=" flex  justify-center">
          <NavigateToMenu />
        </div>
      </div>

      <div className="flex flex-col items-center w-full pt-10">
        <div className="relative w-full max-w-5xl ">
          <div className="text-center py-10">
            <h1 className="text-3xl md:text-4xl font-semibold">
              <span className="text-[#D95103] font-bold">We Offer People</span>
              The Service They Want
            </h1>
          </div>

          <div className="relative w-full h-[700px]">
            <img
              src={Waiter}
              alt="Chef in kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
              <h2 className="text-white text-3xl md:text-4xl font-bold">
                Process behind the making
              </h2>
              <p className="text-gray-200 mt-2">
                See how only chefs cook only the best momos
              </p>

              <NavLink
                to="https://youtu.be/-AuK92Jq4yQ?si=GULtN-w8DilDtwMy"
                target="_blank"
                className="flex items-center gap-2 bg-teal-500 text-white px-6 py-2 rounded-full mt-5 hover:bg-teal-600 transition"
              >
                <FaPlay /> Watch the Video
              </NavLink>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center max-w-5xl w-full px-4">
          <div className="flex flex-col items-center border p-4 rounded-lg shadow-md">
            <img
              src={QualityFood}
              alt="Quality Food"
              className="w-16 h-16 mb-2"
            />
            <h3 className="text-xl font-bold">Quality Food</h3>
            <p className="text-gray-600">
              Only the best food with top quality products and ingredients
            </p>
          </div>
          <div className="flex flex-col items-center border p-4 rounded-lg shadow-md">
            <img
              src={PrivateParty}
              alt="Private Party"
              className="w-16 h-16 mb-2"
            />
            <h3 className="text-xl font-bold">Private Party</h3>
            <p className="text-gray-600">
              Only the best food with top quality products and ingredients
            </p>
          </div>
          <div className="flex flex-col items-center border p-4 rounded-lg shadow-md ">
            <img src={Categring} alt="Catering" className="w-16 h-16 mb-2" />
            <h3 className="text-xl font-bold ">Catering</h3>
            <p className="text-gray-600">
              Get the best food for any occasions and gatherings
            </p>
          </div>
        </div>
        <div className="mt-8">
          <NavLink to="/menu">
            <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-all">
              Explore Our Services <BsArrowRightShort className="text-xl" />
            </button>
          </NavLink>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row items-center justify-between px-12 py-15 bg-gray-100 mt-8 ">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">
              200+ <span className="text-orange-600">Happy Customers</span>
            </h1>
            <h3 className="text-lg text-green-700 font-semibold mt-2">
              What our customers say about us
            </h3>
            <p className="text-gray-700 italic mt-4">
              “Only the best momo you can find in the market. Different
              Varieties of momo to choose from. Will be visiting again soon”
            </p>
            <h2 className="font-bold text-lg mt-4">Livia Dias</h2>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200">
                ←
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200">
                →
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={Women}
              alt="Woman"
              className="rounded-xl w-80 md:w-96 shadow-md"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center py-10 bg-white shadow">
          <div className="w-[90%] md:w-[800px] border border-blue-300 p-6 md:p-10 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">
                Get <span className="text-orange-700">In Touch</span>
              </h1>
              <p className="text-green-800 font-semibold">
                Our Friendly team would love to hear from you
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-teal-700 text-white p-6 rounded-lg w-full md:w-[40%] flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    📍 Our Address
                  </h2>
                  <p className="text-sm">
                    New Baneshwor, Kathmandu, Bagmati, Nepal
                  </p>
                  <h2 className="text-lg font-semibold mt-6">
                    📞 Our Contacts
                  </h2>
                  <p className="text-sm">Mobile: 980 5689879 | 9841 275297</p>
                  <p className="text-sm">Landline: 01-4783872</p>
                  <h2 className="text-lg font-semibold mt-6">
                    🕒 Our Service Time
                  </h2>
                  <p className="text-sm">MON - FRI: 10 am - 6 pm</p>
                  <p className="text-sm">SAT - SUN: Closed</p>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-semibold">
                    🌍 Get in touch on social networks
                  </h2>
                  <div className="flex gap-5 mt-2">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-2xl hover:text-gray-300" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-2xl hover:text-gray-300" />
                    </a>
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTiktok className="text-2xl hover:text-gray-300" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[60%] bg-white">
                <form className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="block text-gray-700 font-semibold">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="border p-2 rounded w-full"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-gray-700 font-semibold">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="border p-2 rounded w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold">
                      Email
                    </label>
                    <input type="email" className="border p-2 rounded w-full" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold">
                      What can we do for you
                    </label>
                    <select className="border p-2 rounded w-full">
                      <option>Choose</option>
                      <option>General Inquiry</option>
                      <option>Support Request</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold">
                      Phone Number
                    </label>
                    <PhoneInput
                      country={"np"}
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      inputClass="w-full border p-2 rounded"
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
                      rows="3"
                      className="border p-2 rounded w-full"
                    ></textarea>
                  </div>
                  <button className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22661.672720520837!2d85.33571491855625!3d27.6582533097218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1743082076691!5m2!1sen!2snp"
          className="w-full h-[50vw] max-h-[450px] rounded-3xl shadow-2xs"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
