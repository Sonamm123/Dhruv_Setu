import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronRight,
  FileText,
  Search,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";

import { existingResearch } from "../../data/researcher/existingResearch";
import { useResearcherEntry } from "../../context/ResearcherEntryContext";

const steps = [
  "Metadata",
  "Add Content",
  "Link Related Work",
  "Review & Submit",
];

export default function ResearcherLinkWork() {
  const navigate = useNavigate();

  const { entry, toggleRelatedResearch } =
    useResearcherEntry();

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All Regions");
  const [discipline, setDiscipline] =
    useState("All Disciplines");
  const [status, setStatus] = useState("All Status");

  const regions = useMemo(
    () => [
      "All Regions",
      ...Array.from(
        new Set(existingResearch.map((item) => item.region)),
      ),
    ],
    [],
  );

  const disciplines = useMemo(
    () => [
      "All Disciplines",
      ...Array.from(
        new Set(
          existingResearch.map((item) => item.researchArea),
        ),
      ),
    ],
    [],
  );

  const statuses = [
    "All Status",
    "Published",
    "Under Review",
    "Draft",
  ];

  const filteredResearch = useMemo(() => {
    const query = search.trim().toLowerCase();

    return existingResearch.filter((research) => {
      const matchesSearch =
        !query ||
        research.title.toLowerCase().includes(query) ||
        research.summary.toLowerCase().includes(query) ||
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
        status === "All Status" ||
        research.status === status;

      return (
        matchesSearch &&
        matchesRegion &&
        matchesDiscipline &&
        matchesStatus
      );
    });
  }, [search, region, discipline, status]);

  const selectedResearch = existingResearch.filter((research) =>
    entry.relatedResearchIds.includes(research.id),
  );

  return (
    <div className="min-h-full bg-slate-50 p-5 md:p-7">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div>
          <p className="text-sm font-medium text-cyan-700">
            Researcher Workspace
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-indigo-950">
            New Research Entry
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Connect your new entry with relevant research already
            available in the PolarConnect knowledge base.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-2 overflow-x-auto">
            {steps.map((step, index) => {
              const active = index === 2;
              const completed = index < 2;

              return (
                <div
                  key={step}
                  className="flex min-w-max items-center"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                        active
                          ? "bg-indigo-950 text-white"
                          : completed
                            ? "bg-cyan-100 text-cyan-700"
                            : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {completed ? (
                        <Check size={15} />
                      ) : (
                        index + 1
                      )}
                    </div>

                    <span
                      className={`text-xs font-semibold ${
                        active
                          ? "text-indigo-950"
                          : completed
                            ? "text-cyan-700"
                            : "text-slate-400"
                      }`}
                    >
                      {step}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`mx-3 hidden h-px w-10 sm:block md:w-16 ${
                        completed
                          ? "bg-cyan-200"
                          : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Entry summary */}
        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <BookOpen size={20} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Current Entry
              </p>

              <h2 className="mt-1 truncate text-base font-bold text-indigo-950">
                {entry.title || "Untitled Research Entry"}
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                {entry.entryType}
                {entry.researchArea
                  ? ` · ${entry.researchArea}`
                  : ""}
                {entry.polarRegion
                  ? ` · ${entry.polarRegion}`
                  : ""}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_360px]">
          {/* Research browser */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                  <FileText size={19} />
                </div>

                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Existing Research
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Select relevant records to link with this
                    entry.
                  </p>
                </div>
              </div>

              {/* Search */}
              <div className="relative mt-5">
                <Search
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search research, keywords, or topics..."
                  className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              {/* Filters */}
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                <select
                  value={region}
                  onChange={(event) =>
                    setRegion(event.target.value)
                  }
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 outline-none focus:border-cyan-500"
                >
                  {regions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>

                <select
                  value={discipline}
                  onChange={(event) =>
                    setDiscipline(event.target.value)
                  }
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 outline-none focus:border-cyan-500"
                >
                  {disciplines.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>

                <select
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value)
                  }
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 outline-none focus:border-cyan-500"
                >
                  {statuses.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="divide-y divide-slate-100">
              {filteredResearch.length > 0 ? (
                filteredResearch.map((research) => {
                  const selected =
                    entry.relatedResearchIds.includes(
                      research.id,
                    );

                  return (
                    <div
                      key={research.id}
                      className={`p-5 transition ${
                        selected
                          ? "bg-cyan-50/50"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                          <FileText size={18} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-bold text-slate-900">
                              {research.title}
                            </h3>

                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                                research.status ===
                                "Published"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : research.status ===
                                      "Under Review"
                                    ? "bg-amber-50 text-amber-700"
                                    : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {research.status}
                            </span>
                          </div>

                          <p className="mt-1 text-xs font-medium text-cyan-700">
                            {research.researchArea} ·{" "}
                            {research.region} ·{" "}
                            {research.station}
                          </p>

                          <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                            {research.summary}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {research.keywords
                              .slice(0, 4)
                              .map((keyword) => (
                                <span
                                  key={keyword}
                                  className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500"
                                >
                                  {keyword}
                                </span>
                              ))}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            toggleRelatedResearch(
                              research.id,
                            )
                          }
                          className={`shrink-0 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                            selected
                              ? "bg-cyan-600 text-white hover:bg-cyan-700"
                              : "border border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-700"
                          }`}
                        >
                          {selected ? (
                            <span className="inline-flex items-center gap-1.5">
                              <Check size={14} />
                              Selected
                            </span>
                          ) : (
                            "Select"
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-10 text-center">
                  <Search
                    size={26}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-3 text-sm font-semibold text-slate-600">
                    No research records found
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Try changing your search or filters.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Selected panel */}
          <div className="h-fit rounded-xl border border-slate-200 bg-white shadow-sm lg:sticky lg:top-5">
            <div className="border-b border-slate-200 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Related Research
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    {selectedResearch.length} selected
                  </p>
                </div>

                <div className="flex h-8 min-w-8 items-center justify-center rounded-full bg-cyan-50 px-2 text-xs font-bold text-cyan-700">
                  {selectedResearch.length}
                </div>
              </div>
            </div>

            <div className="p-4">
              {selectedResearch.length > 0 ? (
                <div className="space-y-2">
                  {selectedResearch.map((research) => (
                    <div
                      key={research.id}
                      className="rounded-lg border border-cyan-100 bg-cyan-50/50 p-3"
                    >
                      <div className="flex items-start gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-cyan-700">
                          <FileText size={15} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold leading-5 text-slate-800">
                            {research.title}
                          </p>

                          <p className="mt-1 text-[10px] text-slate-500">
                            {research.researchArea} ·{" "}
                            {research.region}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            toggleRelatedResearch(
                              research.id,
                            )
                          }
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-slate-400 hover:bg-white hover:text-red-600"
                          title="Remove"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-slate-200 p-6 text-center">
                  <BookOpen
                    size={24}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-2 text-xs font-semibold text-slate-600">
                    No related research selected
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-slate-400">
                    Select relevant research records from the list
                    to link them with this entry.
                  </p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="border-t border-slate-200 bg-slate-50 p-4">
              <Link
                to="/researcher/new-entry/content"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <ArrowLeft size={15} />
                Back to Add Content
              </Link>

              <button
                type="button"
                onClick={() =>
                  navigate("/researcher/new-entry/review")
                }
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-950 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-indigo-900"
              >
                Continue to Review
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="mt-5 rounded-xl border border-cyan-100 bg-cyan-50 px-5 py-4">
          <div className="flex gap-3">
            <div className="mt-0.5 text-cyan-700">
              <BookOpen size={17} />
            </div>

            <div>
              <p className="text-xs font-bold text-cyan-900">
                Why link related work?
              </p>

              <p className="mt-1 text-xs leading-5 text-cyan-800/80">
                Linking existing research helps researchers discover
                related studies, avoid duplicate work, and build a
                connected polar research knowledge base.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
