import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Listings from "./pages/Listings.jsx";
import Signin from "./pages/SignIn.jsx";
import PostRequirements from "./pages/PostRequirements.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:id" element={<Listings />} />
          <Route path="/post-requirement" element={<PostRequirements />} />
          {/* Optional: Add a catch-all route for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Signin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
