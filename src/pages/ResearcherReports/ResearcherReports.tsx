import { useMemo, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  ChevronRight,
  FileText,
  Link2,
  Search,
  UserRound,
} from "lucide-react";
import { Link } from "react-router";

import {
  researchReports,
  type ReportStatus,
} from "../../data/researcher/reports";

const statusOptions: Array<"All" | ReportStatus> = [
  "All",
  "Published",
  "Under Review",
  "Draft",
  "Needs Changes",
];

function statusClasses(status: ReportStatus) {
  switch (status) {
    case "Published":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "Under Review":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "Draft":
      return "bg-slate-100 text-slate-700 border-slate-200";
    case "Needs Changes":
      return "bg-rose-50 text-rose-700 border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
        {icon}
      </div>

      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}

export default function ResearcherReports() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"All" | ReportStatus>("All");
  const [selectedId, setSelectedId] = useState(researchReports[0]?.id ?? "");

  const filteredReports = useMemo(() => {
    const query = search.trim().toLowerCase();

    return researchReports.filter((report) => {
      const matchesSearch =
        !query ||
        report.title.toLowerCase().includes(query) ||
        report.researchArea.toLowerCase().includes(query) ||
        report.region.toLowerCase().includes(query) ||
        report.authors.some((author) =>
          author.toLowerCase().includes(query),
        );

      const matchesStatus =
        status === "All" || report.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const selectedReport =
    researchReports.find((report) => report.id === selectedId) ??
    filteredReports[0] ??
    null;

  const publishedCount = researchReports.filter(
    (report) => report.status === "Published",
  ).length;

  const reviewCount = researchReports.filter(
    (report) => report.status === "Under Review",
  ).length;

  const draftCount = researchReports.filter(
    (report) => report.status === "Draft",
  ).length;

  return (
    <div className="min-h-full bg-slate-50 px-6 py-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
              <Link
                to="/researcher"
                className="transition hover:text-slate-900"
              >
                Researcher Workspace
              </Link>

              <ChevronRight size={15} />

              <span className="text-slate-700">Reports</span>
            </div>

            <h1 className="text-2xl font-bold text-slate-900">
              Research Reports
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage, review and explore reports connected to polar research.
            </p>
          </div>

          <Link
            to="/researcher/new-entry"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <FileText size={17} />
            Create New Entry
          </Link>
        </div>

        {/* Statistics */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Total Reports"
            value={researchReports.length}
            icon={<FileText size={19} />}
          />

          <StatCard
            label="Published"
            value={publishedCount}
            icon={<Link2 size={19} />}
          />

          <StatCard
            label="Under Review"
            value={reviewCount}
            icon={<CalendarDays size={19} />}
          />

          <StatCard
            label="Draft Reports"
            value={draftCount}
            icon={<UserRound size={19} />}
          />
        </div>

        {/* Main workspace */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Toolbar */}
          <div className="border-b border-slate-200 p-4">
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search reports, research areas or authors..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-sky-400 focus:bg-white"
                />
              </div>

              <select
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value as "All" | ReportStatus)
                }
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-sky-400"
              >
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option === "All" ? "All Statuses" : option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid min-h-[600px] lg:grid-cols-[390px_minmax(0,1fr)]">
            {/* Report list */}
            <div className="border-b border-slate-200 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <h2 className="font-semibold text-slate-900">
                    Reports
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {filteredReports.length} result
                    {filteredReports.length === 1 ? "" : "s"}
                  </p>
                </div>
              </div>

              <div className="max-h-[650px] overflow-y-auto">
                {filteredReports.length === 0 ? (
                  <div className="px-6 py-12 text-center">
                    <FileText
                      size={32}
                      className="mx-auto text-slate-300"
                    />

                    <p className="mt-3 text-sm font-medium text-slate-700">
                      No reports found
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Try changing your search or filter.
                    </p>
                  </div>
                ) : (
                  filteredReports.map((report) => {
                    const selected = report.id === selectedReport?.id;

                    return (
                      <button
                        key={report.id}
                        type="button"
                        onClick={() => setSelectedId(report.id)}
                        className={`w-full border-b border-slate-100 p-5 text-left transition ${
                          selected
                            ? "bg-sky-50"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">
                              {report.title}
                            </h3>

                            <p className="mt-1 text-xs text-slate-500">
                              {report.researchArea} • {report.region}
                            </p>
                          </div>

                          <span
                            className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-semibold ${statusClasses(
                              report.status,
                            )}`}
                          >
                            {report.status}
                          </span>
                        </div>

                        <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                          <span>{report.date}</span>
                          <span>{report.pages} pages</span>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Details */}
            <div className="p-6">
              {selectedReport ? (
                <div>
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClasses(
                          selectedReport.status,
                        )}`}
                      >
                        {selectedReport.status}
                      </span>

                      <h2 className="mt-3 text-xl font-bold text-slate-900">
                        {selectedReport.title}
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        {selectedReport.reportType}
                      </p>
                    </div>

                    <Link
                      to="/researcher/research"
                      className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      <ArrowLeft size={16} />
                      Research
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-xs font-medium text-slate-400">
                        Research Area
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {selectedReport.researchArea}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-xs font-medium text-slate-400">
                        Polar Region
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {selectedReport.region}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-xs font-medium text-slate-400">
                        Research Station
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {selectedReport.station}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-xs font-medium text-slate-400">
                        Publication Date
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {selectedReport.date}
                      </p>
                    </div>
                  </div>

                  <section className="mt-6">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Authors / Contributors
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedReport.authors.map((author) => (
                        <span
                          key={author}
                          className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700"
                        >
                          {author}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section className="mt-6">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Report Summary
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {selectedReport.summary}
                    </p>
                  </section>

                  <section className="mt-6 rounded-xl border border-sky-100 bg-sky-50 p-4">
                    <div className="flex items-start gap-3">
                      <Link2
                        size={18}
                        className="mt-0.5 shrink-0 text-sky-700"
                      />

                      <div>
                        <h3 className="text-sm font-semibold text-sky-900">
                          Linked Research
                        </h3>

                        <p className="mt-1 text-sm text-sky-800">
                          {selectedReport.linkedResearch}
                        </p>

                        <Link
                          to="/researcher/research"
                          className="mt-3 inline-flex text-xs font-semibold text-sky-700 hover:text-sky-900"
                        >
                          Open research records →
                        </Link>
                      </div>
                    </div>
                  </section>

                  <section className="mt-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-slate-900">
                        Keywords
                      </h3>

                      <span className="text-xs text-slate-400">
                        {selectedReport.pages} pages
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedReport.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              ) : (
                <div className="flex h-full min-h-[500px] items-center justify-center text-sm text-slate-500">
                  Select a report to view its details.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
