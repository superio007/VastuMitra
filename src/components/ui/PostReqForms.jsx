import { useForm } from "react-hook-form";
import axios from "axios";

const RequirementForm = ({ userId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    const payload = {
      user_id: userId,
      req_name: data.req_name,
      req_email: data.req_email,
      req_phone: data.req_phone,
      req_whatsapp: data.req_whatsapp,
      req_city: data.req_city,
      req_location: data.req_location,
      req_type: data.req_type,
      req_property_type: data.req_property_type,
      req_budget: Number(data.req_budget),
      req_message: data.req_message,
    };

    try {
      await axios.post("http://localhost:3001/api/requirements", payload, {
        headers: { "Content-Type": "application/json" },
      });

      reset();
      alert("Requirement submitted successfully");
    } catch (err) {
      alert(err?.response?.data?.message || "Failed to submit requirement");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-8 bg-white shadow-xs rounded-xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-[#e72608] uppercase text-center">
        Property Requirement
      </h2>
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          className="w-full border rounded-md px-4 py-3"
          {...register("req_name", { required: "Name is required" })}
        />
        {errors.req_name && (
          <p className="text-red-600 text-sm mt-1">{errors.req_name.message}</p>
        )}
      </div>
      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full border rounded-md px-4 py-3"
          {...register("req_email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
        />
        {errors.req_email && (
          <p className="text-red-600 text-sm mt-1">
            {errors.req_email.message}
          </p>
        )}
      </div>
      {/* Phone */}
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
          className="w-full border rounded-md px-4 py-3"
          {...register("req_phone", {
            required: "Phone is required",
            minLength: { value: 10, message: "Invalid phone number" },
          })}
        />
        {errors.req_phone && (
          <p className="text-red-600 text-sm mt-1">
            {errors.req_phone.message}
          </p>
        )}
      </div>
      {/* WhatsApp */}
      <div>
        <label className="block text-sm font-medium mb-1">
          WhatsApp Number
        </label>
        <input
          className="w-full border rounded-md px-4 py-3"
          {...register("req_whatsapp", {
            required: "WhatsApp number is required",
          })}
        />
        {errors.req_whatsapp && (
          <p className="text-red-600 text-sm mt-1">
            {errors.req_whatsapp.message}
          </p>
        )}
      </div>
      {/* City */}
      <div>
        <label className="block text-sm font-medium mb-1">City</label>
        <input
          className="w-full border rounded-md px-4 py-3"
          {...register("req_city", { required: "City is required" })}
        />
        {errors.req_city && (
          <p className="text-red-600 text-sm mt-1">{errors.req_city.message}</p>
        )}
      </div>
      {/* Location */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Preferred Location
        </label>
        <input
          className="w-full border rounded-md px-4 py-3"
          {...register("req_location", { required: "Location is required" })}
        />
        {errors.req_location && (
          <p className="text-red-600 text-sm mt-1">
            {errors.req_location.message}
          </p>
        )}
      </div>
      {/* Buy / Rent */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Requirement Type
        </label>
        <select
          className="w-full border rounded-md px-4 py-3"
          {...register("req_type", {
            required: "Requirement type is required",
          })}
        >
          <option value="">Select</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
        {errors.req_type && (
          <p className="text-red-600 text-sm mt-1">{errors.req_type.message}</p>
        )}
      </div>
      {/* Property Type */}
      <div>
        <label className="block text-sm font-medium mb-1">Property Type</label>
        <select
          className="w-full border rounded-md px-4 py-3"
          {...register("req_property_type", {
            required: "Property type is required",
          })}
        >
          <option value="">Select</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="commercial">Commercial</option>
        </select>
        {errors.req_property_type && (
          <p className="text-red-600 text-sm mt-1">
            {errors.req_property_type.message}
          </p>
        )}
      </div>
      {/* Budget */}
      <div>
        <label className="block text-sm font-medium mb-1">Budget (₹)</label>
        <input
          type="number"
          className="w-full border rounded-md px-4 py-3"
          {...register("req_budget", {
            required: "Budget is required",
            min: { value: 10000, message: "Budget too low" },
          })}
        />
        {errors.req_budget && (
          <p className="text-red-600 text-sm mt-1">
            {errors.req_budget.message}
          </p>
        )}
      </div>
      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          rows="4"
          className="w-full border rounded-md px-4 py-3"
          {...register("req_message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message too short" },
          })}
        />
        {errors.req_message && (
          <p className="text-red-600 text-sm mt-1">
            {errors.req_message.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#e72608] text-white py-3 rounded-lg disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Requirement"}
      </button>
    </form>
  );
};

export default RequirementForm;
