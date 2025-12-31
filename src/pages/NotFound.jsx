import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-[#e72608]">404</h1>

      <p className="mt-4 text-lg text-gray-700 text-center">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-[#e72608] text-white px-6 py-3 rounded font-semibold"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
