import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PropertyCard } from "../../components/ui/PropertyCard";
import axios from "axios";
const callApi = async (For, type) => {
  const res = await axios.get(
    `http://localhost:3001/api/properties?prop_for=${For}&prop_modeofuse=${type}`
  );

  return res.data.data.map((p) => ({
    id: p.prop_id,
    title: `${p.prop_type} in ${p.prop_loc}`,
    location: `${p.prop_loc}, ${p.prop_city}`,
    description: p.prop_description,
    type: p.prop_typefor.toUpperCase(),
    image: p.prop_frontimagelink,
    createdAt: p.created_at,
    popularity: p.prop_ishot ? 100 : 0,
    raw: p,
  }));
};

const Listings = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type"); // commercial, residential, etc
  const For = searchParams.get("for");
  console.log(type);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const {
    data: properties = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: [`properties_${type}_$${For}`],
    queryFn: () => callApi(For, type),
  });
  console.log(properties);
  const filteredProperties = useMemo(() => {
    let data = [...properties];

    if (search) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (location) {
      data = data.filter((p) =>
        p.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (sortBy === "newest") {
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (sortBy === "popular") {
      data.sort((a, b) => b.popularity - a.popularity);
    }

    return data;
  }, [properties, search, location, sortBy]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Filters */}
      {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
        <input
          className="md:col-span-5 border rounded-md px-4 py-3"
          placeholder="Search properties..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          className="md:col-span-4 border rounded-md px-4 py-3"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button className="bg-[#e72608] text-white md:col-span-3 rounded-xl">Submit</button>
      </div> */}

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading && (
          <p className="text-gray-500 col-span-full text-center">Loading...</p>
        )}
        {error && (
          <p className="text-red-500 col-span-full text-center">
            Failed to load properties
          </p>
        )}

        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}

        {!isLoading && filteredProperties.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No properties found
          </p>
        )}
      </section>
    </main>
  );
};

export default Listings;
