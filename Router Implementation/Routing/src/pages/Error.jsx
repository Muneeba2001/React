import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Oops!</h1>
        <p className="mb-6 text-lg text-gray-600">
          We can't seem to find the page you're looking for.
        </p>
        <Link
          to="/"
          className="inline-block transform rounded-lg bg-blue-500 px-4 py-2 text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
