import { Outlet } from "react-router-dom";
import Navbar from "../components/General/Navbar.jsx";
import Footer from "../components/General/Footer.jsx";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
