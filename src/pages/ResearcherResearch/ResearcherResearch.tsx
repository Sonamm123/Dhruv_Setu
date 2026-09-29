import { useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  FileText,
  MapPin,
  Search,
  UserRound,
} from "lucide-react";
import { existingResearch, type ResearchRecord } from "../../data/researcher/existingResearch";

const regions = ["All Regions", "Antarctica", "Arctic"];
const disciplines = [
  "All Disciplines",
  "Climate Science",
  "Polar Biology",
  "Earth Sciences",
  "Marine Biology",
  "Atmospheric Science",
];
const statuses = ["All Statuses", "Published", "Under Review", "Draft"];

function statusClasses(status: ResearchRecord["status"]) {
  if (status === "Published") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  if (status === "Under Review") {
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }

  return "bg-slate-100 text-slate-600 ring-slate-200";
}

function ResearchListCard({
  research,
  selected,
  onClick,
}: {
  research: ResearchRecord;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full border-b border-slate-100 px-5 py-4 text-left transition ${
        selected
          ? "bg-cyan-50/70"
          : "bg-white hover:bg-slate-50"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-5 text-slate-900">
            {research.title}
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            {research.researchArea}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ${statusClasses(
            research.status,
          )}`}
        >
          {research.status}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <MapPin size={13} />
          {research.region}
        </span>

        <span className="flex items-center gap-1">
          <CalendarDays size={13} />
          {research.period}
        </span>
      </div>
    </button>
  );
}

function FilterSelect({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}

export default function ResearcherResearch() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All Regions");
  const [discipline, setDiscipline] = useState("All Disciplines");
  const [status, setStatus] = useState("All Statuses");
  const [selectedId, setSelectedId] = useState(
    existingResearch[0]?.id ?? "",
  );

  const filteredResearch = useMemo(() => {
    const query = search.trim().toLowerCase();

    return existingResearch.filter((research) => {
      const matchesSearch =
        !query ||
        research.title.toLowerCase().includes(query) ||
        research.researchArea.toLowerCase().includes(query) ||
        research.station.toLowerCase().includes(query) ||
        research.keywords.some((keyword) =>
          keyword.toLowerCase().includes(query),
        );

      const matchesRegion =
        region === "All Regions" ||
        research.region === region;

      const matchesDiscipline =
        discipline === "All Disciplines" ||
        research.researchArea === discipline;

      const matchesStatus =
        status === "All Statuses" ||
        research.status === status;

      return (
        matchesSearch &&
        matchesRegion &&
        matchesDiscipline &&
        matchesStatus
      );
    });
  }, [search, region, discipline, status]);

  const selectedResearch =
    filteredResearch.find((research) => research.id === selectedId) ??
    filteredResearch[0] ??
    null;

  return (
    <div className="min-h-full bg-slate-50 p-5 md:p-7">
      <div className="mx-auto max-w-[1500px]">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-cyan-700">
            Researcher Workspace
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-indigo-950">
            Existing Research
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Browse, review, and manage research records available in
            the PolarConnect knowledge repository.
          </p>
        </div>

        {/* Search + filters */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid gap-3 lg:grid-cols-[minmax(260px,1.8fr)_1fr_1fr_1fr]">
            <div className="relative">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search research..."
                className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            <FilterSelect
              value={region}
              options={regions}
              onChange={setRegion}
            />

            <FilterSelect
              value={discipline}
              options={disciplines}
              onChange={setDiscipline}
            />

            <FilterSelect
              value={status}
              options={statuses}
              onChange={setStatus}
            />
          </div>
        </div>

        {/* Main workspace */}
        <div className="mt-5 grid min-h-[620px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[390px_minmax(0,1fr)]">
          {/* Research list */}
          <section className="border-b border-slate-200 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Research Records
                </h2>

                <p className="mt-0.5 text-xs text-slate-500">
                  {filteredResearch.length} record
                  {filteredResearch.length === 1 ? "" : "s"}
                  found
                </p>
              </div>
            </div>

            <div className="max-h-[620px] overflow-y-auto">
              {filteredResearch.length > 0 ? (
                filteredResearch.map((research) => (
                  <ResearchListCard
                    key={research.id}
                    research={research}
                    selected={selectedResearch?.id === research.id}
                    onClick={() => setSelectedId(research.id)}
                  />
                ))
              ) : (
                <div className="px-5 py-12 text-center">
                  <Search
                    size={28}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    No research found
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Try changing your search or filters.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Details */}
          <section className="min-w-0 bg-white">
            {selectedResearch ? (
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ${statusClasses(
                        selectedResearch.status,
                      )}`}
                    >
                      {selectedResearch.status}
                    </span>

                    <h2 className="mt-3 text-2xl font-bold leading-tight text-indigo-950">
                      {selectedResearch.title}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      {selectedResearch.researchArea}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                    <FileText size={15} />
                    Research Record
                  </div>
                </div>

                {/* Metadata */}
                <div className="mt-6">
                  <h3 className="text-sm font-bold text-slate-900">
                    Research Metadata
                  </h3>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Research Area
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {selectedResearch.researchArea}
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Polar Region
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-slate-800">
                        <MapPin size={14} className="text-cyan-600" />
                        {selectedResearch.region}
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Research Station
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {selectedResearch.station}
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Date / Period
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-slate-800">
                        <CalendarDays
                          size={14}
                          className="text-cyan-600"
                        />
                        {selectedResearch.period}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contributors */}
                <div className="mt-6">
                  <h3 className="text-sm font-bold text-slate-900">
                    Authors / Contributors
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedResearch.authors.map((author) => (
                      <span
                        key={author}
                        className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-800"
                      >
                        <UserRound size={13} />
                        {author}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-6">
                  <h3 className="text-sm font-bold text-slate-900">
                    Summary
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {selectedResearch.summary}
                  </p>
                </div>

                {/* Source + keywords */}
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Source / Identifier
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      {selectedResearch.source}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Keywords
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedResearch.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Linked content */}
                <div className="mt-7 border-t border-slate-200 pt-6">
                  <h3 className="text-sm font-bold text-slate-900">
                    Linked Existing Content
                  </h3>

                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    {selectedResearch.linkedContent.map((content) => (
                      <div
                        key={content.title}
                        className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition hover:border-cyan-200 hover:bg-cyan-50/30"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                          <FileText size={17} />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-800">
                            {content.title}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500">
                            {content.type}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-full min-h-[500px] items-center justify-center p-8 text-center">
                <div>
                  <FileText
                    size={36}
                    className="mx-auto text-slate-300"
                  />
                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    Select a research record
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Research details will appear here.
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
