import {
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  Filter,
  Search,
  Upload,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router";

type SubmissionStatus =
  | "Under Review"
  | "Approved"
  | "Needs Changes"
  | "Draft";

type Submission = {
  id: string;
  title: string;
  type: string;
  submittedOn: string;
  updatedOn: string;
  status: SubmissionStatus;
  description: string;
  reviewerComment?: string;
};

const submissions: Submission[] = [
  {
    id: "SUB-2026-0142",
    title: "Sea Ice Thickness Study 2024",
    type: "Research",
    submittedOn: "28 Sep 2026",
    updatedOn: "28 Sep 2026",
    status: "Under Review",
    description:
      "A study analysing seasonal changes in Antarctic sea ice thickness using field observations and satellite-derived measurements.",
    reviewerComment:
      "Submission received successfully and assigned to the polar climate research review team.",
  },
  {
    id: "SUB-2026-0138",
    title: "Bharati Station Environmental Dataset",
    type: "Dataset",
    submittedOn: "24 Sep 2026",
    updatedOn: "26 Sep 2026",
    status: "Approved",
    description:
      "Environmental and geophysical observations collected around Bharati Research Station.",
    reviewerComment:
      "Dataset metadata and supporting documentation verified.",
  },
  {
    id: "SUB-2026-0129",
    title: "Arctic Atmospheric Observation Study",
    type: "Research",
    submittedOn: "20 Sep 2026",
    updatedOn: "25 Sep 2026",
    status: "Needs Changes",
    description:
      "Research examining atmospheric conditions and changing weather patterns observed during an Arctic campaign.",
    reviewerComment:
      "Please provide additional information about the observation period and source dataset.",
  },
  {
    id: "DRAFT-2026-008",
    title: "Antarctic Marine Ecosystem Observations",
    type: "Research",
    submittedOn: "—",
    updatedOn: "27 Sep 2026",
    status: "Draft",
    description:
      "Draft research entry containing preliminary marine ecosystem observations.",
  },
];

const statusOptions = [
  "All",
  "Under Review",
  "Approved",
  "Needs Changes",
  "Draft",
];

export default function ResearcherSubmissions() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(submissions[0].id);

  const filteredSubmissions = useMemo(() => {
    const query = search.trim().toLowerCase();

    return submissions.filter((submission) => {
      const matchesSearch =
        !query ||
        submission.title.toLowerCase().includes(query) ||
        submission.type.toLowerCase().includes(query) ||
        submission.id.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" || submission.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const selectedSubmission =
    submissions.find((submission) => submission.id === selectedId) ??
    filteredSubmissions[0] ??
    null;

  const stats = {
    total: submissions.length,
    drafts: submissions.filter((item) => item.status === "Draft").length,
    review: submissions.filter((item) => item.status === "Under Review").length,
    approved: submissions.filter((item) => item.status === "Approved").length,
  };

  return (
    <div className="min-h-full bg-slate-50 px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-medium text-blue-600">
              Researcher Workspace
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              My Submission
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Track your research entries, review progress, and submission
              status from one place.
            </p>
          </div>

          <Link
            to="/researcher/new-entry"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <Upload className="h-4 w-4" />
            New Entry
          </Link>
        </div>

        {/* Statistics */}
        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Total Submissions"
            value={stats.total}
            description="All your entries"
            icon={<FileText className="h-5 w-5" />}
          />

          <StatCard
            label="Under Review"
            value={stats.review}
            description="Currently being reviewed"
            icon={<Clock3 className="h-5 w-5" />}
          />

          <StatCard
            label="Approved"
            value={stats.approved}
            description="Accepted submissions"
            icon={<FileText className="h-5 w-5" />}
          />

          <StatCard
            label="Drafts"
            value={stats.drafts}
            description="Entries not submitted"
            icon={<Upload className="h-5 w-5" />}
          />
        </div>

        {/* Search + filters */}
        <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search submissions..."
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto">
              <Filter className="h-4 w-4 shrink-0 text-slate-400" />

              {statusOptions.map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setStatusFilter(status)}
                  className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition ${
                    statusFilter === status
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_390px]">
          {/* Submission list */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-5">
              <h2 className="font-semibold text-slate-900">
                Your Submissions
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                {filteredSubmissions.length} submission
                {filteredSubmissions.length === 1 ? "" : "s"} found
              </p>
            </div>

            {filteredSubmissions.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {filteredSubmissions.map((submission) => {
                  const selected = selectedSubmission?.id === submission.id;

                  return (
                    <button
                      key={submission.id}
                      type="button"
                      onClick={() => setSelectedId(submission.id)}
                      className={`w-full p-5 text-left transition ${
                        selected
                          ? "bg-blue-50/70"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex gap-4">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                            selected
                              ? "bg-blue-100 text-blue-600"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <FileText className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div className="min-w-0">
                              <h3 className="truncate text-sm font-semibold text-slate-900">
                                {submission.title}
                              </h3>

                              <p className="mt-1 text-xs text-slate-500">
                                {submission.id} · {submission.type}
                              </p>
                            </div>

                            <StatusBadge status={submission.status} />
                          </div>

                          <p className="mt-3 line-clamp-2 text-xs leading-5 text-slate-500">
                            {submission.description}
                          </p>

                          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
                            <span className="inline-flex items-center gap-1">
                              <CalendarDays className="h-3.5 w-3.5" />
                              Updated {submission.updatedOn}
                            </span>

                            {submission.submittedOn !== "—" && (
                              <span>
                                Submitted {submission.submittedOn}
                              </span>
                            )}
                          </div>
                        </div>

                        <ChevronRight
                          className={`mt-1 hidden h-4 w-4 shrink-0 sm:block ${
                            selected
                              ? "text-blue-500"
                              : "text-slate-300"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="p-10 text-center">
                <Search className="mx-auto h-8 w-8 text-slate-300" />

                <p className="mt-3 text-sm font-semibold text-slate-700">
                  No submissions found
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Try changing your search or status filter.
                </p>
              </div>
            )}
          </section>

          {/* Details */}
          <aside className="h-fit overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm xl:sticky xl:top-6">
            {selectedSubmission ? (
              <>
                <div className="border-b border-slate-200 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Submission Details
                      </p>

                      <h2 className="mt-2 text-lg font-bold text-slate-900">
                        {selectedSubmission.title}
                      </h2>

                      <p className="mt-1 text-xs text-slate-500">
                        {selectedSubmission.id}
                      </p>
                    </div>

                    <StatusBadge status={selectedSubmission.status} />
                  </div>
                </div>

                <div className="space-y-6 p-6">
                  <DetailItem
                    label="Entry Type"
                    value={selectedSubmission.type}
                  />

                  <DetailItem
                    label="Submitted On"
                    value={selectedSubmission.submittedOn}
                  />

                  <DetailItem
                    label="Last Updated"
                    value={selectedSubmission.updatedOn}
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Description
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {selectedSubmission.description}
                    </p>
                  </div>

                  {selectedSubmission.reviewerComment && (
                    <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                        Review Update
                      </p>

                      <p className="mt-2 text-sm leading-6 text-blue-900">
                        {selectedSubmission.reviewerComment}
                      </p>
                    </div>
                  )}

                  {selectedSubmission.status === "Draft" ? (
                    <Link
                      to="/researcher/new-entry"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Continue Editing
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      View Submission
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="p-8 text-center text-sm text-slate-500">
                Select a submission to view its details.
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  description,
  icon,
}: {
  label: string;
  value: number;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {label}
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>

          <p className="mt-1 text-xs text-slate-500">{description}</p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: SubmissionStatus }) {
  const styles: Record<SubmissionStatus, string> = {
    "Under Review": "bg-amber-50 text-amber-700 border-amber-200",
    Approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Needs Changes": "bg-red-50 text-red-700 border-red-200",
    Draft: "bg-slate-100 text-slate-600 border-slate-200",
  };

  return (
    <span
      className={`inline-flex shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1.5 text-sm font-medium text-slate-800">{value}</p>
    </div>
  );
}
