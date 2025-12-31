import { useMemo, useState } from "react";
import { PropertyCard } from "../components/ui/PropertyCard";
const PROPERTIES = [
  {
    id: 1,
    title: "C3 CHAPTER THREE - Life of Joy",
    location: "UMBHARLI, Dombivli",
    description: "1, 2, 3 BHK Homes with Sundecks. Where Nature Meets Luxury.",
    type: "Residential",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCX0pP4Gllg-A69zIxVEsi48L0szP_RHBZWhWSXBr-kQpmhW8pRslrcOUzq7pg3eJalCtWro92SEOkGgLmx5aqY5uI57oKP7Gl1GN_gCyVw7v6-QHw89NNWDCGMQ8iWk3JHQjCtP7YZEXKj_1cTnZUZpqWKSws6TqFk4i_y-2dg_owU52ov6IJWwTfvDfwf68FlYNKSXzR9x3pXxphZDpczc0pIp42O7sDLUYf3QPGTp6FE4KnoOoEDn2OGHrrOigy2i7O9w8jFRadd",
    createdAt: "2024-06-01",
    popularity: 90,
  },
  {
    id: 2,
    title: "KHOPOLI NAVI MUMBAI ROAD",
    location: "NELLIV HILLTOP, Dombivli",
    description: "65 acres of pristine hilltop living.",
    type: "Residential",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2ma1C_Mqxr-thPbrvXzv6eD-kU4ypPBG3tfNa4umFZq35Wk6mY6tWqA1GHampCLr5eCZJT28h7joG8ro3Tvmo7c8N93KqZKnfyDorKMMMWknqHUIKkkv2mm1pyWvEPL9vuj9j69OaMOTZkEEirBmZRR9lmKlPlqp7RRg1XBkmKCY04SH5HjuvuJdTXo_eTI6sLBOYXluJ0U_zCZKgQpX1TZOA5hSLAoFT99uZww3Kyz-KPni3_d7pCJCZXdcPjXthRQhB1_Uz4eDU",
    createdAt: "2024-05-15",
    popularity: 70,
  },
];

const Listings = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filteredProperties = useMemo(() => {
    let data = [...PROPERTIES];

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
  }, [search, location, sortBy]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
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

        <select
          className="md:col-span-3 border rounded-md px-4 py-3"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="popular">Popular</option>
        </select>
      </div>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}

        {filteredProperties.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No properties found
          </p>
        )}
      </section>
    </main>
  );
};

export default Listings;
