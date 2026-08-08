import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white px-6 py-6 mt-15">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-2xl mb-1">Filters</h3>
          <div className="flex gap-4">
              <p className=" text-gray-300">All</p>
              <p className=" text-gray-300">Electronics</p>
          </div>
          <p className=" text-gray-300 mt-4">© 2024 All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-2 ">
          <h3 className="font-semibold text-2xl mb-1">About Us</h3>
          <p className=" text-gray-300">About Us</p>
          <p className=" text-gray-300">Contact</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1 text-2xl">Follow Us</h3>
          <div className="flex gap-4 mt-2">
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
    </footer>
  );
}
