import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import WebsiteLogo from "../../assets/VASTUMITRlogo.webp";

const Navbar = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="shrink-0 flex items-center cursor-pointer">
              <img
                alt="VastuMitra Logo"
                className="h-16 w-auto"
                src={WebsiteLogo}
                onClick={() => navigate("/")}
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              {["Buy", "Rent", "New Projects"].map((item) => (
                <div key={item} className="relative group">
                  <button className="text-gray-900 hover:text-brand-maroon px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    {item}
                  </button>
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <Link
                      to={`/listings/${item.toLowerCase()}&type=commercial`}
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 rounded-t-md"
                    >
                      Commercial
                    </Link>
                    <Link
                      to={`/listings/${item.toLowerCase()}&type=residential`}
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 rounded-b-md"
                    >
                      Residential
                    </Link>
                  </div>
                </div>
              ))}
              <Link
                className="text-gray-900 hover:text-brand-maroon px-3 py-2 rounded-md text-sm font-medium transition-colors"
                to="/about"
              >
                About Us
              </Link>
              <Link
                className="text-gray-900 hover:text-brand-maroon px-3 py-2 rounded-md text-sm font-medium transition-colors"
                to="/contact"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center">
              <Link
                className="bg-brand-maroon hover:bg-opacity-90 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md transition-all"
                to="/post-requirement"
                style={{
                  backgroundColor: "#d73818",
                  color: "white",
                  borderRadius: "20px",
                }}
              >
                Post Requirement
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
