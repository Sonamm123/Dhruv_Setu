import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import MediaCard from "../../components/media/MediaCard";
import { mediaData } from "../../data/media";

const categories = [
  "All",
  "Antarctica",
  "Research",
  "Climate",
  "Expeditions",
  "Biodiversity",
  "Ocean",
];

const types = ["All", "Image", "Video"];

export default function Media() {
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [query, setQuery] = useState("");

  const filteredMedia = useMemo(() => {
    const search = query.toLowerCase().trim();

    return mediaData.filter((media) => {
      const categoryMatch =
        category === "All" || media.category === category;

      const typeMatch = type === "All" || media.type === type;

      const searchMatch =
        !search ||
        media.title.toLowerCase().includes(search) ||
        media.description.toLowerCase().includes(search) ||
        media.category.toLowerCase().includes(search);

      return categoryMatch && typeMatch && searchMatch;
    });
  }, [category, type, query]);

  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-6 lg:px-7">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Polar Gallery
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Media
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Explore images, videos and visual stories from India's
          polar research and expeditions.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search media..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Category */}
        <div className="mt-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Category
          </p>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition ${
                  category === item
                    ? "bg-indigo-700 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Type */}
        <div className="mt-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Media Type
          </p>

          <div className="flex gap-2">
            {types.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setType(item)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  type === item
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">
          Polar Media
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          {filteredMedia.length}{" "}
          {filteredMedia.length === 1 ? "item" : "items"} found
        </p>
      </div>

      {filteredMedia.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredMedia.map((media) => (
            <MediaCard key={media.id} media={media} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-slate-300 py-16 text-center">
          <p className="font-medium text-slate-700">
            No media found
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Try another search or filter.
          </p>
        </div>
      )}
    </div>
  );
}