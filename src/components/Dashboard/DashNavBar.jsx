import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import WebsiteLogo from "../../assets/VASTUMITRlogo.webp";
const DashNavBar = () => {
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
              {["Buy", "Rent", "Sell", "Leads", "Requirements"].map((item) => (
                <div key={item} className="relative group">
                  <Link
                    to={`/dashboard/${item.toLowerCase()}`}
                    className="text-gray-900 hover:text-brand-maroon px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default DashNavBar;
