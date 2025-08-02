import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pages", label: "Pages" },
    { href: "/rooms", label: "Rooms & Suites" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span>7635 Sahara Park, Tit Devon Isle, USA</span>
            <span>✉️ info@domain.com</span>
            <span>📞 (+1) 987 654 3210</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>Be</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[10vh]">
            {/* Logo */}
            <div
              className="hidden md:flex items-center w-[25vh] h-full px-3 bg-white relative"
              style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
            >
              <div className="w-8 h-8 bg-emerald-600 rounded mr-2 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl text-black font-bold">Fixyland</span>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8 p-4">
              {navLinks.map((link, idx) => (
                <div key={idx} className="relative group">
                  <a
                    href={link.href}
                    className="text-white hover:text-emerald-400 flex items-center"
                  >
                    {link.label}
                    {link.label !== "Contact" && (
                      <span className="ml-1">
                        <RiArrowDropDownLine />
                      </span>
                    )}
                  </a>
                </div>
              ))}
            </nav>

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 hidden md:flex">
                🔍
              </button>

              {/* Hamburger Button (mobile only) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 md:hidden"
              >
                {mobileMenuOpen ? <IoClose size={24} /> : <>☰</>}
              </button>

              {/* CTA Button */}
              <button onClick={()=>navigate("/booking")} className="bg-yellow-400 text-black px-4 md:px-6 py-2 rounded font-medium hover:bg-yellow-500 transition-colors text-sm md:text-base">
                Book Your Stay <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 px-4 py-4 space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="block text-white hover:text-emerald-400 text-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
