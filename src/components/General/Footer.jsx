import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer
        className="bg-brand-footer text-white py-6"
        style={{ backgroundColor: "#D63818" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm"
            style={{ alignItems: "center" }}
          >
            <div className="text-center md:text-left font-light opacity-90">
              DESIGNED BY MASYS
            </div>
            <div className="flex space-x-4">
              <Link
                className="w-8 h-8 flex items-center justify-center border border-white/40 rounded bg-white/10 hover:bg-white/20 transition"
                to="#"
              >
                <Facebook color="#fff" />
              </Link>
              <Link
                className="w-8 h-8 flex items-center justify-center border border-white/40 rounded bg-white/10 hover:bg-white/20 transition"
                to="#"
              >
                <Instagram color="#fff" />
              </Link>
              <Link
                className="w-8 h-8 flex items-center justify-center border border-white/40 rounded bg-white/10 hover:bg-white/20 transition"
                to="#"
              >
                <Youtube color="#fff" />
              </Link>
            </div>
            <div className="text-center md:text-right">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-2 text-xs font-light mb-1">
                <li>
                  <Link className="hover:underline" to="/">
                    Home
                  </Link>
                </li>
                <li>|</li>
                <li>
                  <Link className="hover:underline" to="/about">
                    About Us
                  </Link>
                </li>
                <li>|</li>
                <li>
                  <Link className="hover:underline" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>|</li>
                <li>
                  <Link className="hover:underline" to="/terms">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>|</li>
                <li>
                  <Link className="hover:underline" to="/privacy">
                    Privacy policy
                  </Link>
                </li>
              </ul>
              <p className="text-xs text-white/70">RERA A51700029922</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
