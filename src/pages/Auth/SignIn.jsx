import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    setApiError("");

    try {
      const res = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          user_email: formData.email,
          user_pass: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // store full response or token based on backend
      localStorage.setItem("authUser", JSON.stringify(res.data));

      navigate("/");
    } catch (err) {
      setApiError(err?.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <main className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
        <header className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVcAPH6JwhEmJLO23UtAEnL6_asMJ17u8L4sEdNERYmIFFoVEfJ47Ut5AqXoLuXX_j5he2B22rA0zFQJZtYS7gzV44IncQh3q9LeEG6KE6PFK16FrYLNj7JDctZlR9BgTx2i6UjX6V-JkfeCkMSnxaq_GLJ_HrnPGAaVnUZhWQMw7rh6DAIJmlYSq6wxg1OUk8cYJZzUvPinwmrUShw2Qy6KW1rexFuIegqB0gCqxnU8JNwEhu5_HU7DyP1KLZsNW13qXcvNFa738L"
              alt="Logo"
              className="w-28"
            />
          </div>
          <h1 className="text-3xl font-bold text-[#e72608] mb-2">Sign In</h1>
          <p className="text-sm text-gray-600">
            Access exclusive properties across India
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg py-3 px-4"
              placeholder="name@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg py-3 px-4"
              placeholder="********"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* API Error */}
          {apiError && (
            <p className="text-red-600 text-sm text-center">{apiError}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#e72608] text-white font-semibold py-3 rounded-2xl disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>

        <footer className="mt-8 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/signup" className="font-semibold hover:text-[#e72608]">
            Sign Up
          </a>
        </footer>
      </main>
    </div>
  );
};

export default SignIn;
