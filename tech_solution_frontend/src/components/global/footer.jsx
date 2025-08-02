export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-22">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded mr-2"></div>
              <span className="text-xl font-bold">Fixyland</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus maxime.
            </p>
            <div className="flex space-x-4">
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">f</span>
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">X</span>
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">@</span>
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">Be</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">EXPLORE</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About Hotel</li>
              <li>Pricing</li>
              <li>Hotel Staff</li>
              <li>Latest News</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>7635 Sahara Park, Tit Devon Isle,</p>
              <p>Louisiana, USA</p>
              <p className="pt-2">(+1) 987 654 3210</p>
              <p>info@domain.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Ex. info@domain.com"
                className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded-l text-sm"
              />
              <button className="bg-emerald-600 px-4 py-2 rounded-r">→</button>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-400">I agree to all terms and policies</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© Copyright 2024 Fixyland. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
