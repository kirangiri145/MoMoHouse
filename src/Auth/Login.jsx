import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

function Login() {

  const {loginWithRedirect} = useAuth0();
  const login = (e) => {
    e.preventDefault(); 
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Please <span className="text-orange-700">Login</span> Here
        </h2>
        <form className="space-y-5" onSubmit={login}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Address"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Log in
          </button>

          <p className="text-center">or</p>

          <button
            onClick={()=>{
              loginWithRedirect();
            }}
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 relative"
          >
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <FcGoogle size={24} />
            </span>
            <span className="block text-center">Login With Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
