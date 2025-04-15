import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#292e43] text-white w-full border-b border-white rounded-lg">
      <div className="container mx-auto flex justify-between items-center h-[80px] px-6 md:px-20">
        <Link to="/" className="text-2xl font-bold">
          BrandName
        </Link>

        <ul className="flex gap-6 text-sm font-semibold">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:text-gray-300">
              Product
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-gray-300">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
          <button className="bg-[#23A6F0] border border-white hover:bg-white hover:text-black hover:border hover:border-black transition-colors w-[100px] h-[52px] rounded-l-lg">
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
}
