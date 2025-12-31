import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const fetchProperty = async (id) => {
  const res = await axios.get(`http://localhost:3001/api/properties/${id}`);
  return res.data.data;
};

const createLeads = async (dataPack) => {
  const res = await axios.post("http://localhost:3001/api/leads", dataPack);
  return res.data.data;
};

const SingleListing = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const isWhatsappSame = watch("sameWhatsapp", true);
  const phoneValue = watch("phone");
  const onSubmit = async (data) => {
    const datapack = {
      lead_name: data?.name,
      lead_email: data?.email,
      lead_phone: data?.Phone,
      lead_whatsapp: data?.sameWhatsapp ? data?.Phone : data?.whatsapp,
      lead_type: data?.lead_type,
      lead_source: "website",
      lead_message: data?.message,
      property_id: id,
    };
    const res = await createLeads(datapack);
    alert("form submited will get back to you...");
    reset();
  };

  const {
    data: property,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["property", id],
    queryFn: () => fetchProperty(id),
    enabled: !!id,
  });

  if (isLoading) return <div className="p-8">Loading property...</div>;
  if (error || !property)
    return <div className="p-8">Failed to load property</div>;

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-medium text-[#e72608] mb-6">
        {property.prop_type} in {property.prop_loc}, {property.prop_city}
      </h1>

      {/* IMAGE + DETAILS */}
      <section className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* IMAGES */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-96 mb-2">
            <div className="md:col-span-2 h-full overflow-hidden rounded-sm">
              <img
                src={property.prop_frontimagelink}
                alt="Property"
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col gap-2 h-full">
              {property.prop_insideimages?.slice(0, 2).map((img, i) => (
                <div key={i} className="h-1/2 overflow-hidden rounded-sm">
                  <img
                    src={img}
                    alt={`Interior ${i + 1}`}
                    className="w-full h-full "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INFO BOX */}
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-100 p-4 rounded-lg border">
            <ul className="text-base">
              <li className="flex justify-between py-3 border-b">
                <span>Price</span>
                <span className="font-bold">
                  ₹ {Number(property.prop_cost).toLocaleString("en-IN")}
                </span>
              </li>

              <li className="flex justify-between py-3 border-b">
                <span>Type</span>
                <span className="font-bold">{property.prop_type}</span>
              </li>

              <li className="flex justify-between py-3 border-b">
                <span>For</span>
                <span className="font-bold capitalize">
                  {property.prop_typefor}
                </span>
              </li>

              <li className="flex justify-between py-3 border-b">
                <span>Status</span>
                <span className="font-bold">
                  {property.prop_isverified ? "Verified" : "Unverified"}
                </span>
              </li>

              <li className="flex justify-between py-3 border-b">
                <span>Negotiable</span>
                <span className="font-bold">
                  {property.prop_isnegotiable ? "Yes" : "No"}
                </span>
              </li>
            </ul>

            <button
              onClick={() => {
                const contactForm = document.querySelector(
                  "section:last-of-type"
                );
                contactForm?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full mt-6 bg-[#e72608] text-white py-3 rounded font-bold"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">About Property</h2>
        <p className="text-gray-700">{property.prop_description}</p>
      </section>

      {/* FEATURES */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Key Details</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
          <li>Area: {property.prop_area}</li>
          <li>Floor: {property.prop_floor}</li>
          <li>Floor Number: {property.prop_floornumber}</li>
          <li>Property Age: {property.prop_age} years</li>
          <li>Parking: {property.prop_parking}</li>
          <li>Lift: {property.prop_islift ? "Available" : "Not Available"}</li>
          <li>Loan: {property.prop_loanstatus}</li>
        </ul>
      </section>

      {/* LOCATION */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Location</h2>
        <p className="text-gray-700">{property.prop_addressofsale}</p>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-white border rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Send Inquiry</h3>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* NAME */}
          <div>
            <input
              className={`w-full border p-3 rounded ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              className={`w-full border p-3 rounded ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <input
              className={`w-full border p-3 rounded ${
                errors.phone ? "border-red-500" : ""
              }`}
              placeholder="Phone"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter valid 10 digit number",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* WHATSAPP SAME CHECKBOX */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked
              {...register("sameWhatsapp")}
            />
            <span className="text-sm">This number is on WhatsApp</span>
          </div>

          {/* WHATSAPP NUMBER */}
          {!isWhatsappSame && (
            <div>
              <input
                className={`w-full border p-3 rounded ${
                  errors.whatsapp ? "border-red-500" : ""
                }`}
                placeholder="WhatsApp Number"
                {...register("whatsapp", {
                  required: "WhatsApp number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter valid WhatsApp number",
                  },
                })}
              />
              {errors.whatsapp && (
                <p className="text-red-500 text-sm">
                  {errors.whatsapp.message}
                </p>
              )}
            </div>
          )}

          {/* LEAD TYPE */}
          <div>
            <select
              className={`w-full border p-3 rounded ${
                errors.lead_type ? "border-red-500" : ""
              }`}
              {...register("lead_type", {
                required: "Lead type is required",
              })}
            >
              <option value="">Select Lead Type</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
              <option value="rent">Rent</option>
            </select>
            {errors.lead_type && (
              <p className="text-red-500 text-sm">{errors.lead_type.message}</p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              className={`w-full border p-3 rounded ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Message"
              rows="4"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters",
                },
              })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="bg-[#e72608] text-white w-full py-3 rounded font-bold"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default SingleListing;
