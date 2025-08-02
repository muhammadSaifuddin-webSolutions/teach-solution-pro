import { FaSwimmingPool } from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri";
export default function OutdoorActivities() {
  return (
    <div className="p-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="p-10">
            <p className="text-emerald-600 text-sm font-medium mb-2 tracking-wider">LUXURY HOTEL</p>
            <h3 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
              We Provide Outdoor Activities
              <br />
              To All Visitors
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12  rounded-full flex items-center justify-center shadow-md">
                  <FaSwimmingPool height={20} width={20}/>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">The Best Swimming</h4>
                  <h4 className="font-semibold text-gray-800 text-lg">Pool</h4>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <RiEBike2Fill />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">The Best</h4>
                  <h4 className="font-semibold text-gray-800 text-lg">Stationary Bike</h4>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-sm">✓</span>
                </div>
                <span className="text-gray-600">
                  It is a long fact that a reader will be distracted by the readable
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-sm">✓</span>
                </div>
                <span className="text-gray-600">Lorem Ipsum is simply dummy of the printing and industry</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-sm">✓</span>
                </div>
                <span className="text-gray-600">There are many variations of Lorem Ipsum majority</span>
              </div>
            </div>

            <button className="bg-emerald-600 text-white px-8 py-3 rounded hover:bg-emerald-700 transition-colors flex items-center">
              Discover More
              <span className="ml-2">→</span>
            </button>
          </div>

 {/* Right Images */}
            <div className="relative">
              {/* Main large image */}
              <div className="relative">
                  <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                alt="Modern Interior"
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
               
              </div>

              {/* Overlaid smaller image with text overlay */}
              <div className="absolute -bottom-8 -left-8 w-48 h-32">
                <div className="relative w-full h-full">
                  <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                alt="Modern Interior"
                    className="rounded-xl shadow-xl w-full h-full object-cover border-4 border-white"
              />
                  
                  {/* Dark overlay with text */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl flex flex-col justify-center items-center text-white p-4">
                    <div className="w-8 h-8 mb-2">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Restaurants</h4>
                    <p className="text-xs text-center leading-tight">
                      Donec in quis the sed pellentesque velit. Donec id velit ac arcu posuere blane.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
