import { Outlet } from "react-router-dom";
import DashNavBar from "../components/Dashboard/DashNavBar";
import DashFooter from "../components/Dashboard/DashFooter.jsx";
const DashLayout = () => {
  return (
    <>
      <DashNavBar />
      <Outlet />
      <DashFooter />
    </>
  );
};
export default DashLayout;
