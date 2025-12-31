import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashLayout from "./layouts/DashLayout.jsx";
import HomePage from "./pages/landing/HomePage";
import About from "./pages/landing/About";
import Contact from "./pages/landing/Contact";
import NotFound from "./pages/NotFound";
import Listings from "./pages/landing/Listings.jsx";
import Signin from "./pages/Auth/SignIn.jsx";
import PostRequirements from "./pages/landing/PostRequirements.jsx";
import SingleListing from "./pages/landing/SingleListing.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import BuyDash from "./pages/dashboard/BuyDash.jsx";
import SellDash from "./pages/dashboard/SellDash.jsx";
import ReqDash from "./pages/dashboard/ReqDash.jsx";
import LeadsDash from "./pages/dashboard/LeadsDash.jsx";
import RentDash from "./pages/dashboard/RentDash.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listing/:id" element={<SingleListing />} />
          <Route path="/post-requirement" element={<PostRequirements />} />
          {/* Optional: Add a catch-all route for 404 pages */}
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Signin />} />
        </Route>
        <Route element={<DashLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/buy" element={<BuyDash />} />
          <Route path="/dashboard/sell" element={<SellDash />} />
          <Route path="/dashboard/rent" element={<RentDash />} />
          <Route path="/dashboard/leads" element={<LeadsDash />} />
          <Route path="/dashboard/requirements" element={<ReqDash />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
