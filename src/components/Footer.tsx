import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-3">Filters</h3>
          <p className="text-sm text-gray-300">All</p>
          <p className="text-sm text-gray-300">Electronics</p>
        </div>
        <div>
          <h3 className="font-bold mb-3">About Us</h3>
          <p className="text-sm text-gray-300">About Us</p>
          <p className="text-sm text-gray-300">Contact</p>
        </div>
        <div>
          <h3 className="font-bold mb-3">Follow Us</h3>
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              className="bg-blue-800 p-2 rounded-full hover:bg-blue-700"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="bg-blue-800 p-2 rounded-full hover:bg-blue-700"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="bg-blue-800 p-2 rounded-full hover:bg-blue-700"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-8">© 2024 All rights reserved.</p>
    </footer>
  );
}
