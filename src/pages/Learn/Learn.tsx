import { BookOpen, Search } from "lucide-react";
import { useMemo, useState } from "react";
import LearnCard from "../../components/learn/LearnCard";
import { learnData } from "../../data/learn";

const categories = [
  "All",
  "Polar Science",
  "Climate",
  "Biodiversity",
  "Expeditions",
  "Ocean",
];

const levels = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

export default function Learn() {
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const search = query.toLowerCase().trim();

    return learnData.filter((item) => {
      const categoryMatch =
        category === "All" || item.category === category;

      const levelMatch =
        level === "All" || item.level === level;

      const searchMatch =
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.topics.some((topic) =>
          topic.toLowerCase().includes(search),
        );

      return categoryMatch && levelMatch && searchMatch;
    });
  }, [category, level, query]);

  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-6 lg:px-7">
      {/* Hero */}
      <section className="overflow-hidden rounded-2xl bg-slate-900 px-6 py-10 md:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-indigo-300">
            <BookOpen size={18} />

            <span className="text-xs font-semibold uppercase tracking-wider">
              Polar Learning
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Learn About the Polar World
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Build your understanding of polar science, climate,
            biodiversity and expeditions through accessible learning
            resources.
          </p>
        </div>
      </section>

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
            placeholder="Search learning resources..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Category */}
        <div className="mt-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Subject
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

        {/* Level */}
        <div className="mt-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Difficulty
          </p>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {levels.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLevel(item)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition ${
                  level === item
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
          Learning Resources
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          {filteredItems.length}{" "}
          {filteredItems.length === 1 ? "resource" : "resources"}{" "}
          available
        </p>
      </div>

      {filteredItems.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <LearnCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-slate-300 py-16 text-center">
          <p className="font-medium text-slate-700">
            No learning resources found
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Try another search, subject or difficulty level.
          </p>
        </div>
      )}
    </div>
  );
}