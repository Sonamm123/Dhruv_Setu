import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import ContentCard from "../../components/common/ContentCard";
import { personalizedContent } from "../../data/personalized";

const categories = [
  "All",
  "Research",
  "Climate & Environment",
  "Biodiversity",
  "Science",
  "Expeditions",
];

export default function Personalized() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContent = useMemo(() => {
    return personalizedContent.filter((content) => {
      const matchesCategory =
        activeCategory === "All" ||
        content.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        !query ||
        content.title.toLowerCase().includes(query) ||
        content.description.toLowerCase().includes(query) ||
        content.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-6 lg:px-7">
      {/* Page heading */}
      <div>
        <p className="text-xs font-medium text-indigo-600">
          Personalized
        </p>

        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
          Content Tailored for You
        </h1>

        <p className="mt-1 max-w-2xl text-sm text-slate-500">
          Discover research, stories and polar knowledge selected around
          your interests.
        </p>
      </div>

      {/* Search + filter */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search personalized content..."
              className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <button
            type="button"
            className="flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-xs font-medium text-slate-600 hover:bg-slate-50"
          >
            <SlidersHorizontal size={15} />
            Filters
          </button>
        </div>

        {/* Categories */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  active
                    ? "bg-indigo-700 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results heading */}
      <div className="mt-7 flex items-end justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Recommended Content
          </h2>

          <p className="mt-0.5 text-xs text-slate-500">
            {filteredContent.length}{" "}
            {filteredContent.length === 1 ? "result" : "results"} found
          </p>
        </div>
      </div>

      {/* Content */}
      {filteredContent.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredContent.map((content) => (
            <ContentCard key={content.id} content={content} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <p className="text-sm font-medium text-slate-700">
            No content found
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Try another search term or category.
          </p>
        </div>
      )}
    </div>
  );
}