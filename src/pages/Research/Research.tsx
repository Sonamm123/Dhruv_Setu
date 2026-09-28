import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import ResearchCard from "../../components/research/ResearchCard";
import { researchData } from "../../data/research";

const categories = [
  "All",
  "Research",
  "Climate & Environment",
  "Biodiversity",
  "Science",
];

export default function Research() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredResearch = useMemo(() => {
    const search = query.toLowerCase().trim();

    return researchData.filter((item) => {
      const categoryMatch =
        category === "All" || item.category === category;

      const searchMatch =
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.summary.toLowerCase().includes(search) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(search),
        );

      return categoryMatch && searchMatch;
    });
  }, [category, query]);

  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-6 lg:px-7">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Knowledge Hub
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Research & Insights
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Explore research, scientific observations and insights from
          India's polar knowledge ecosystem.
        </p>
      </div>

      <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search research..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
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

      <div className="mt-8 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Latest Research
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            {filteredResearch.length} research{" "}
            {filteredResearch.length === 1 ? "item" : "items"}
          </p>
        </div>
      </div>

      {filteredResearch.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredResearch.map((research) => (
            <ResearchCard
              key={research.id}
              research={research}
            />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-slate-300 py-16 text-center">
          <p className="font-medium text-slate-700">
            No research found
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Try a different search term or category.
          </p>
        </div>
      )}
    </div>
  );
}