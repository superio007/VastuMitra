import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <Routes path="/" element={<MainLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Optional: Add a catch-all route for 404 pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
