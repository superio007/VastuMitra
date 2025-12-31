import { Link } from "react-router-dom";
export const PropertyCard = ({ property }) => {
  return (
    <article className="bg-white rounded-xl flex-col flex justify-center shadow-sm overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />

        <span className="absolute top-3 left-3 bg-[#d4381d] text-white text-xs px-3 py-1 rounded">
          {property.type}
        </span>
      </div>

      <div className="p-6 flex flex-col">
        <h3 className="font-bold text-gray-900 mb-1">{property.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{property.location}</p>
        <p className="text-xs text-gray-400 line-clamp-2 mb-4">
          {property.description}
        </p>

        <Link
          type="button"
          className="bg-[#d4381d] text-white text-center py-2.5 rounded-lg text-sm"
          to={`/listing/id:${property.id}`}
        >
          View more
        </Link>
      </div>
    </article>
  );
};
