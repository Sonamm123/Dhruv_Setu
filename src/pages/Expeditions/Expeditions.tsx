import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import ExpeditionCard from "../../components/expeditions/ExpeditionCard";
import { expeditionData } from "../../data/expeditions";

const statuses = ["All", "Upcoming", "Ongoing", "Completed"];

export default function Expeditions() {
  const [status, setStatus] = useState("All");
  const [query, setQuery] = useState("");

  const filteredExpeditions = useMemo(() => {
    const search = query.toLowerCase().trim();

    return expeditionData.filter((expedition) => {
      const statusMatch =
        status === "All" || expedition.status === status;

      const searchMatch =
        !search ||
        expedition.title.toLowerCase().includes(search) ||
        expedition.location.toLowerCase().includes(search) ||
        expedition.description.toLowerCase().includes(search);

      return statusMatch && searchMatch;
    });
  }, [status, query]);

  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-6 lg:px-7">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Polar Missions
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Expeditions
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Explore polar expeditions, missions and scientific programmes
          conducted across the Arctic and Antarctic regions.
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
            placeholder="Search expeditions..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto">
          {statuses.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStatus(item)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                status === item
                  ? "bg-indigo-700 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">
          Polar Expeditions
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          {filteredExpeditions.length} expedition
          {filteredExpeditions.length === 1 ? "" : "s"}
        </p>
      </div>

      {filteredExpeditions.length > 0 ? (
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredExpeditions.map((expedition) => (
            <ExpeditionCard
              key={expedition.id}
              expedition={expedition}
            />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-slate-300 py-16 text-center">
          <p className="font-medium text-slate-700">
            No expeditions found
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Try a different search or status.
          </p>
        </div>
      )}
    </div>
  );
}