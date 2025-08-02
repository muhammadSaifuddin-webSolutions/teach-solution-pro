import { Link } from "react-router-dom";

export default function RouteNotFound() {
  return (
    <div className="bg-[#e8f5e9] min-h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Illustration */}
      <div className="mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" // replace with your custom illustration if needed
          alt="404 Illustration"
          className="w-64 h-auto mx-auto"
        />
      </div>

      {/* 404 Text */}
      <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ohh! Page Not Found</h2>

      {/* Description */}
      <p className="text-gray-600 mb-8 max-w-md">
        We're sorry but we can't seem to find the page you requested. This might be because you typed the web address
        incorrectly.
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
      >
        Back To Home
        <span className="ml-2">→</span>
      </Link>
    </div>
  );
}
