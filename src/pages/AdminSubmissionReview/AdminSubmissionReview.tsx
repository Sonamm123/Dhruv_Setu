import { useState } from "react";
import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Download,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

import {
  getReviewSubmission,
  type ReviewDecision,
} from "../../data/admin/submissionReview";

export default function AdminSubmissionReview() {
  const { id } = useParams();

  const submission = id ? getReviewSubmission(id) : undefined;

  const [decision, setDecision] =
    useState<ReviewDecision | null>(null);

  const [notes, setNotes] = useState("");

  if (!submission) {
    return (
      <div className="flex min-h-full items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
            <CircleAlert className="h-6 w-6 text-red-500" />
          </div>

          <h1 className="mt-4 text-xl font-semibold text-slate-950">
            Submission not found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            The requested submission could not be found in the
            administrative review workspace.
          </p>

          <Link
            to="/admin/submission-queue"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to queue
          </Link>
        </div>
      </div>
    );
  }

  function applyDecision(nextDecision: ReviewDecision) {
    setDecision(nextDecision);
  }

  return (
    <div className="min-h-full bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1450px] px-6 py-6 lg:px-8">
          <Link
            to="/admin/submission-queue"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Submission Queue
          </Link>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span>Submission Review</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>{submission.id}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {submission.title}
                </h1>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {submission.type}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Submitted on {submission.submittedDate} ·{" "}
                {submission.polarRegion}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
                {submission.id}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1450px] space-y-6 px-6 py-6 lg:px-8">
        {decision && (
          <DecisionBanner
            decision={decision}
            notes={notes}
            onDismiss={() => setDecision(null)}
          />
        )}

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* Main content */}
          <div className="space-y-6">
            {/* Researcher */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={<UserRound className="h-4 w-4" />}
                title="Researcher Information"
              />

              <div className="p-5">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {submission.researcherInitials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold text-slate-950">
                      {submission.researcher}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {submission.institution}
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <InfoItem
                        icon={<Mail className="h-4 w-4" />}
                        label="Email"
                        value={submission.email}
                      />

                      <InfoItem
                        icon={<FileText className="h-4 w-4" />}
                        label="Department"
                        value={submission.department}
                      />

                      <InfoItem
                        icon={<ShieldCheck className="h-4 w-4" />}
                        label="Research Area"
                        value={submission.researchArea}
                      />

                      <InfoItem
                        icon={<MapPin className="h-4 w-4" />}
                        label="Polar Region"
                        value={submission.polarRegion}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Metadata */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={<FileText className="h-4 w-4" />}
                title="Submission Details"
              />

              <div className="p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Abstract
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {submission.abstract}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Keywords
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {submission.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <MetadataItem
                    label="Content Type"
                    value={submission.type}
                  />

                  <MetadataItem
                    label="Research Area"
                    value={submission.researchArea}
                  />

                  <MetadataItem
                    label="Polar Region"
                    value={submission.polarRegion}
                  />
                </div>
              </div>
            </section>

            {/* Files */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={<FileText className="h-4 w-4" />}
                title="Submitted Files"
              />

              <div className="divide-y divide-slate-100">
                {submission.files.map((file) => (
                  <div
                    key={file.name}
                    className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                        <FileText className="h-5 w-5 text-slate-500" />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-slate-800">
                          {file.name}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                          {file.type} · {file.size}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Related work */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={<MessageSquare className="h-4 w-4" />}
                title="Related Work"
              />

              <div className="space-y-2 p-5">
                {submission.relatedWork.map((work) => (
                  <div
                    key={work}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700"
                  >
                    {work}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            {/* Automated checks */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Automated Pre-check"
              />

              <div className="divide-y divide-slate-100">
                {submission.checks.map((check) => (
                  <div
                    key={check.label}
                    className="px-5 py-4"
                  >
                    <div className="flex items-start gap-3">
                      {check.status === "Passed" ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      ) : (
                        <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                      )}

                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {check.label}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {check.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-xs font-semibold text-slate-500">
                  Overall result
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="text-sm font-semibold text-slate-800">
                    Passed with warnings
                  </span>
                </div>
              </div>
            </section>

            {/* Admin review */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={<MessageSquare className="h-4 w-4" />}
                title="Admin Review"
              />

              <div className="p-5">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Review notes
                </label>

                <textarea
                  value={notes}
                  onChange={(event) =>
                    setNotes(event.target.value)
                  }
                  rows={6}
                  placeholder="Add internal review notes..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-3 py-3 text-sm leading-5 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                />

                <p className="mt-2 text-xs text-slate-400">
                  These notes will be attached to the administrative
                  review record.
                </p>
              </div>
            </section>

            {/* Actions */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Review Decision
              </h2>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Select the appropriate action after reviewing the
                submission and automated checks.
              </p>

              <div className="mt-4 space-y-2">
                <button
                  type="button"
                  onClick={() =>
                    applyDecision("Correction Requested")
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-100"
                >
                  <MessageSquare className="h-4 w-4" />
                  Request Correction
                </button>

                <button
                  type="button"
                  onClick={() => applyDecision("Rejected")}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                >
                  <X className="h-4 w-4" />
                  Reject Submission
                </button>

                <button
                  type="button"
                  onClick={() => applyDecision("Approved")}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <Check className="h-4 w-4" />
                  Approve & Publish
                </button>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 border-b border-slate-200 px-5 py-4">
      <div className="text-slate-500">{icon}</div>
      <h2 className="text-sm font-semibold text-slate-900">
        {title}
      </h2>
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="mt-0.5 text-slate-400">{icon}</div>

      <div className="min-w-0">
        <p className="text-xs text-slate-400">{label}</p>
        <p className="mt-0.5 break-words text-sm text-slate-700">
          {value}
        </p>
      </div>
    </div>
  );
}

function MetadataItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-medium text-slate-800">
        {value}
      </p>
    </div>
  );
}

function DecisionBanner({
  decision,
  notes,
  onDismiss,
}: {
  decision: ReviewDecision;
  notes: string;
  onDismiss: () => void;
}) {
  const isApproved = decision === "Approved";
  const isRejected = decision === "Rejected";

  const icon = isApproved ? (
    <CheckCircle2 className="h-5 w-5" />
  ) : isRejected ? (
    <X className="h-5 w-5" />
  ) : (
    <MessageSquare className="h-5 w-5" />
  );

  const title = isApproved
    ? "Submission approved"
    : isRejected
      ? "Submission rejected"
      : "Correction requested";

  const description = isApproved
    ? "The submission is marked ready for publication."
    : isRejected
      ? "The submission has been marked as rejected."
      : "The researcher will need to address the requested corrections.";

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div
        className={`mt-0.5 ${
          isApproved
            ? "text-emerald-600"
            : isRejected
              ? "text-red-600"
              : "text-amber-600"
        }`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-900">
          {title}
        </p>

        <p className="mt-0.5 text-sm text-slate-500">
          {description}
        </p>

        {notes.trim() && (
          <p className="mt-2 text-xs text-slate-400">
            Review notes recorded.
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={onDismiss}
        className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
