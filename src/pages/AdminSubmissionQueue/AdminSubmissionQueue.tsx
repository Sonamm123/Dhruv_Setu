import { useMemo, useState } from "react";
import { Link } from "react-router";
import {
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCheck2,
  FileText,
  Filter,
  Search,
  TriangleAlert,
} from "lucide-react";

import {
  submissions,
  type SubmissionStatus,
  type SubmissionType,
} from "../../data/admin/submissions";

const statusOptions: Array<"All" | SubmissionStatus> = [
  "All",
  "Awaiting Review",
  "Pre-check Complete",
  "Correction Requested",
  "Approved",
];

const typeOptions: Array<"All" | SubmissionType> = [
  "All",
  "Research",
  "Report",
  "Dataset",
  "Publication",
];

const researchAreas = [
  "All",
  "Climate Science",
  "Earth Sciences",
  "Polar Biology",
  "Oceanography",
  "Atmospheric Science",
];

function statusClass(status: SubmissionStatus) {
  switch (status) {
    case "Pre-check Complete":
      return "bg-blue-50 text-blue-700";
    case "Awaiting Review":
      return "bg-amber-50 text-amber-700";
    case "Correction Requested":
      return "bg-red-50 text-red-700";
    case "Approved":
      return "bg-emerald-50 text-emerald-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
}

function preCheckClass(preCheck: string) {
  switch (preCheck) {
    case "Passed":
      return "text-emerald-600";
    case "Warnings":
      return "text-amber-600";
    default:
      return "text-slate-500";
  }
}

export default function AdminSubmissionQueue() {
  const [search, setSearch] = useState("");
  const [status, setStatus] =
    useState<"All" | SubmissionStatus>("All");
  const [type, setType] =
    useState<"All" | SubmissionType>("All");
  const [researchArea, setResearchArea] = useState("All");

  const filteredSubmissions = useMemo(() => {
    const query = search.trim().toLowerCase();

    return submissions.filter((submission) => {
      const matchesSearch =
        !query ||
        submission.id.toLowerCase().includes(query) ||
        submission.title.toLowerCase().includes(query) ||
        submission.researcher.toLowerCase().includes(query) ||
        submission.institution.toLowerCase().includes(query);

      const matchesStatus =
        status === "All" || submission.status === status;

      const matchesType =
        type === "All" || submission.type === type;

      const matchesResearchArea =
        researchArea === "All" ||
        submission.researchArea === researchArea;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesType &&
        matchesResearchArea
      );
    });
  }, [search, status, type, researchArea]);

  const awaitingReview = submissions.filter(
    (item) =>
      item.status === "Awaiting Review" ||
      item.status === "Pre-check Complete",
  ).length;

  const corrections = submissions.filter(
    (item) => item.status === "Correction Requested",
  ).length;

  const passedPreChecks = submissions.filter(
    (item) => item.preCheck === "Passed",
  ).length;

  return (
    <div className="min-h-full bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-7 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                <FileCheck2 className="h-4 w-4" />
                <span>Admin Workspace</span>
                <span>/</span>
                <span>Submission Queue</span>
              </div>

              <h1 className="text-2xl font-semibold tracking-tight text-slate-950">
                Submission Queue
              </h1>

              <p className="mt-1 max-w-2xl text-sm text-slate-500">
                Review and manage research submissions waiting for
                administrative validation and publication.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <Clock3 className="h-4 w-4 text-slate-500" />
              <div>
                <p className="text-xs text-slate-500">
                  Items requiring attention
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  {awaitingReview} submissions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1500px] space-y-6 px-6 py-6 lg:px-8">
        {/* Summary */}
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>

            <p className="text-sm text-slate-500">
              Total in Queue
            </p>

            <p className="mt-1 text-2xl font-semibold text-slate-950">
              {submissions.length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            </div>

            <p className="text-sm text-slate-500">
              Pre-check Passed
            </p>

            <p className="mt-1 text-2xl font-semibold text-slate-950">
              {passedPreChecks}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
              <TriangleAlert className="h-5 w-5 text-red-600" />
            </div>

            <p className="text-sm text-slate-500">
              Corrections Requested
            </p>

            <p className="mt-1 text-2xl font-semibold text-slate-950">
              {corrections}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-500" />
            <h2 className="text-sm font-semibold text-slate-900">
              Filter submissions
            </h2>
          </div>

          <div className="grid gap-3 lg:grid-cols-[2fr_1fr_1fr_1fr]">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search by ID, title, researcher or institution..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
              />
            </label>

            <FilterSelect
              value={status}
              onChange={(value) =>
                setStatus(value as "All" | SubmissionStatus)
              }
              options={statusOptions}
            />

            <FilterSelect
              value={type}
              onChange={(value) =>
                setType(value as "All" | SubmissionType)
              }
              options={typeOptions}
            />

            <FilterSelect
              value={researchArea}
              onChange={setResearchArea}
              options={researchAreas}
            />
          </div>
        </section>

        {/* Queue */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-2 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-950">
                Submission Queue
              </h2>

              <p className="text-sm text-slate-500">
                Showing {filteredSubmissions.length} of{" "}
                {submissions.length} submissions
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
              Automated pre-check enabled
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[1050px] w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80 text-left">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Submission
                  </th>

                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Researcher
                  </th>

                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Type
                  </th>

                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Research Area
                  </th>

                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Pre-check
                  </th>

                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </th>

                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Submitted
                  </th>

                  <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredSubmissions.map((submission) => (
                  <tr
                    key={submission.id}
                    className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/70"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-600">
                          {submission.type.slice(0, 2).toUpperCase()}
                        </div>

                        <div className="min-w-0">
                          <p className="font-medium text-slate-900">
                            {submission.title}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500">
                            {submission.id}
                          </p>

                          {submission.priority === "High" && (
                            <span className="mt-1 inline-flex rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600">
                              High priority
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                          {submission.researcherInitials}
                        </div>

                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            {submission.researcher}
                          </p>

                          <p className="text-xs text-slate-500">
                            {submission.institution}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-600">
                      {submission.type}
                    </td>

                    <td className="px-4 py-4">
                      <p className="text-sm text-slate-700">
                        {submission.researchArea}
                      </p>

                      <p className="text-xs text-slate-400">
                        {submission.polarRegion}
                      </p>
                    </td>

                    <td className="px-4 py-4">
                      <div
                        className={`flex items-center gap-1.5 text-sm font-medium ${preCheckClass(
                          submission.preCheck,
                        )}`}
                      >
                        {submission.preCheck === "Passed" ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <TriangleAlert className="h-4 w-4" />
                        )}

                        {submission.preCheck}
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusClass(
                          submission.status,
                        )}`}
                      >
                        {submission.status}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-500">
                      {submission.submittedDate}
                    </td>

                    <td className="px-5 py-4 text-right">
                      <Link
                        to={`/admin/submission-review/${submission.id}`}
                        className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                      >
                        Review
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSubmissions.length === 0 && (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                <Search className="h-5 w-5 text-slate-400" />
              </div>

              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                No submissions found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filter criteria.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 pr-10 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </div>
  );
}
