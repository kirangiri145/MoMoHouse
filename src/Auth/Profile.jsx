import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function Profile() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div className="pt-20 text-center text-gray-500">Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="pt-20 flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
          <img
            src={user?.picture}
            alt="user picture"
            className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Name: {user?.name}</h2>
          <p className="text-gray-600">Email: {user?.email}</p>
          <p className="text-gray-600">Email Verification: {user?.email_verified}</p>
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Log Out
          </button>
        </div>
      </div>
    )
  );
}

export default Profile;
