import { Phone } from "lucide-react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    reset();
  };

  return (
    <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      <div className="mb-10">
        <h1 className="text-4xl font-normal text-gray-900">Contact Us</h1>
      </div>

      <div className="bg-white rounded-lg">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="w-full lg:w-3/5 lg:pr-8 py-4 lg:border-r lg:border-gray-200">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-1 text-sm font-medium"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="w-full rounded-md bg-gray-100 border-gray-300 py-3 px-4"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: { value: 3, message: "Minimum 3 characters" },
                  })}
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md bg-gray-100 border-gray-300 py-3 px-4"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1 text-sm font-medium"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-md bg-gray-100 border-gray-300 py-3 px-4"
                  {...register("phone", {
                    required: "Phone number is required",
                    minLength: { value: 10, message: "Invalid phone number" },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full rounded-md bg-gray-100 border-gray-300 py-3 px-4"
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "Message too short" },
                  })}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-lg font-medium text-white bg-brand-red rounded-full disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="w-full lg:w-2/5 py-4 flex flex-col justify-start">
            <div className="flex items-center mb-8">
              <div className="shrink-0 rounded-lg mr-4 flex items-center justify-center bg-slate-600 w-12 h-12">
                <Phone color="#fff" />
              </div>
              <h2 className="text-3xl font-normal text-gray-900">
                Get in Touch
              </h2>
            </div>

            <div className="space-y-4 mb-8 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                <span className="font-bold text-black">Address:</span>
                <br />
                4th Floor, Tower B, Cyber City,
                <br />
                Dombivali, India
              </p>

              <p>
                <span className="font-bold text-black">Phone:</span> +91 124 456
                7890
              </p>

              <p>
                <span className="font-bold text-black">Email:</span>{" "}
                support@vaastumitra.in
              </p>
            </div>

            <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbehc19JrFSqknaM6P5l-t8HvKQj3306IzpffOfUmieDz4_h4YYjmZqWV5_obUucKa7fkevT74RHlOvTVaqP1gJ35xFTiTbUM-Rsp2j0UAaTCDV0RsSHiS1AJFe8B8BaUWY67YgFEABfCq6EhVEkcAy6enRQlksSf8Y8Ysla9QpvVA6jNVmJkyTXJuldiz3JgpsXpsBFwhBcQZ2whecEa2ELmpxHIvOM6gQJuuomcSSH-2mTt99O8y8FUsDQiHbxffFdlSpHoZSjZ5"
                alt="Office Location Map"
                className="w-full h-full object-cover"
              />

              {/* Map Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                <svg
                  className="w-8 h-8 text-red-600 drop-shadow-md"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2a8.25 8.25 0 00-8.25 8.25c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282c.377.27.77.52 1.145.742a.76.76 0 00.723 0c.375-.222.768-.472 1.144-.742a19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827A8.25 8.25 0 0012 2zm0 11.5a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>
              </div>

              {/* Tooltip */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-full bg-white px-3 py-1 rounded shadow text-xs font-semibold text-gray-800">
                India Properties Office
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-45 w-2 h-2 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
