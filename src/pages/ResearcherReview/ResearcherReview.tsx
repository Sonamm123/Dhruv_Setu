import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  FileText,
  Link2,
  Pencil,
  Send,
  Upload,
} from "lucide-react";
import { Link, useNavigate } from "react-router";

import { existingResearch } from "../../data/researcher/existingResearch";
import { useResearcherEntry } from "../../context/ResearcherEntryContext";

const steps = [
  { label: "Metadata", path: "/researcher/new-entry" },
  { label: "Add Content", path: "/researcher/new-entry/content" },
  { label: "Link Related Work", path: "/researcher/new-entry/link-work" },
  { label: "Review & Submit", path: "/researcher/new-entry/review" },
];

export default function ResearcherReview() {
  const navigate = useNavigate();
  const { entry } = useResearcherEntry();

  const [submitted, setSubmitted] = useState(false);

  const relatedResearch = existingResearch.filter((research) =>
    entry.relatedResearchIds.includes(research.id),
  );

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-full bg-slate-50 px-6 py-8 lg:px-10">
        <div className="mx-auto flex min-h-[calc(100vh-130px)] max-w-3xl items-center justify-center">
          <div className="w-full rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-9 w-9 text-emerald-600" />
            </div>

            <h1 className="mt-6 text-2xl font-bold text-slate-900">
              Submission Sent for Review
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Your research entry has been submitted successfully. The
              submission will now go through the researcher review process.
            </p>

            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Submitted Entry
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                {entry.title || "Untitled Research Entry"}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {entry.entryType} · {entry.researchArea || "Research Area not specified"}
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/researcher")}
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Back to Researcher Dashboard
              </button>

              <button
                type="button"
                onClick={() => navigate("/researcher/submissions")}
                className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View My Submissions
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-slate-50 px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-blue-600">
            Researcher Workspace
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Review & Submit
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Review your research entry carefully before submitting it for
            expert verification.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            {steps.map((step, index) => {
              const isCurrent = index === 3;
              const isCompleted = index < 3;

              return (
                <div key={step.label} className="flex items-center">
                  <Link
                    to={step.path}
                    className={`flex items-center gap-2 ${
                      isCurrent
                        ? "text-blue-600"
                        : isCompleted
                          ? "text-emerald-600"
                          : "text-slate-400"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                        isCurrent
                          ? "bg-blue-600 text-white"
                          : isCompleted
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        index + 1
                      )}
                    </span>

                    <span className="text-sm font-semibold">
                      {step.label}
                    </span>
                  </Link>

                  {index < steps.length - 1 && (
                    <div className="mx-3 hidden h-px w-8 bg-slate-200 sm:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Entry title */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Entry Type
              </p>

              <p className="mt-1 text-sm font-semibold text-blue-600">
                {entry.entryType}
              </p>

              <h2 className="mt-2 text-xl font-bold text-slate-900">
                {entry.title || "Untitled Research Entry"}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {entry.summary ||
                  "No summary has been provided for this research entry."}
              </p>
            </div>

            <Link
              to="/researcher/new-entry"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Pencil className="h-4 w-4" />
              Edit Metadata
            </Link>
          </div>
        </div>

        {/* Metadata */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <h2 className="font-semibold text-slate-900">
                Research Metadata
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Information provided in the metadata step
              </p>
            </div>

            <Link
              to="/researcher/new-entry"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Edit
            </Link>
          </div>

          <div className="grid gap-5 p-6 sm:grid-cols-2 lg:grid-cols-4">
            <MetadataItem label="Research Area" value={entry.researchArea} />
            <MetadataItem label="Polar Region" value={entry.polarRegion} />
            <MetadataItem
              label="Research Station"
              value={entry.researchStation}
            />
            <MetadataItem label="Date / Period" value={entry.datePeriod} />
            <MetadataItem
              label="Authors / Contributors"
              value={entry.authors}
              wide
            />
            <MetadataItem
              label="Source / Identifier"
              value={entry.sourceIdentifier}
              wide
            />
          </div>

          <div className="border-t border-slate-100 px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Keywords
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {entry.keywords.length > 0 ? (
                entry.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                  >
                    {keyword}
                  </span>
                ))
              ) : (
                <span className="text-sm text-slate-400">
                  No keywords added
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <h2 className="font-semibold text-slate-900">
                Added Content
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Files and supporting material attached to this entry
              </p>
            </div>

            <Link
              to="/researcher/new-entry/content"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Edit
            </Link>
          </div>

          <div className="p-6">
            {entry.contents.length > 0 ? (
              <div className="space-y-3">
                {entry.contents.map((content) => (
                  <div
                    key={content.id}
                    className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                        {content.type === "Images" ||
                        content.type === "Videos" ? (
                          <Upload className="h-5 w-5 text-blue-600" />
                        ) : (
                          <FileText className="h-5 w-5 text-blue-600" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">
                          {content.title || content.fileName}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {content.type} · {content.fileName}
                        </p>

                        {content.description && (
                          <p className="mt-1 truncate text-xs text-slate-400">
                            {content.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <span className="shrink-0 text-xs font-medium text-slate-400">
                      {formatFileSize(content.fileSize)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <Upload className="mx-auto h-8 w-8 text-slate-400" />

                <p className="mt-3 text-sm font-semibold text-slate-700">
                  No supporting content added
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  You can submit this entry without additional files.
                </p>

                <Link
                  to="/researcher/new-entry/content"
                  className="mt-4 inline-block text-sm font-semibold text-blue-600"
                >
                  Add content
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Related research */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <h2 className="font-semibold text-slate-900">
                Related Research
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Existing research records linked to this submission
              </p>
            </div>

            <Link
              to="/researcher/new-entry/link-work"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Edit
            </Link>
          </div>

          <div className="p-6">
            {relatedResearch.length > 0 ? (
              <div className="space-y-3">
                {relatedResearch.map((research) => (
                  <div
                    key={research.id}
                    className="flex gap-4 rounded-xl border border-slate-200 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
                      <Link2 className="h-5 w-5 text-indigo-600" />
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900">
                        {research.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {research.researchArea} · {research.region} ·{" "}
                        {research.station}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {research.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <Link2 className="mx-auto h-8 w-8 text-slate-400" />

                <p className="mt-3 text-sm font-semibold text-slate-700">
                  No related research selected
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  You can submit the entry without linking existing research.
                </p>

                <Link
                  to="/researcher/new-entry/link-work"
                  className="mt-4 inline-block text-sm font-semibold text-blue-600"
                >
                  Link research
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Submission notice */}
        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <div className="flex gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100">
              <Send className="h-4 w-4 text-blue-600" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-blue-900">
                Ready to submit?
              </h3>

              <p className="mt-1 text-sm leading-6 text-blue-800">
                Once submitted, your entry will be sent to the appropriate
                review team for verification. You can continue to track its
                status from My Submission.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-200 pb-10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/researcher/new-entry/link-work"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/researcher")}
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Save as Draft
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Submit for Review
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetadataItem({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-slate-800">
        {value || "Not specified"}
      </p>
    </div>
  );
}

function formatFileSize(bytes: number) {
  if (!bytes) {
    return "0 KB";
  }

  const units = ["B", "KB", "MB", "GB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${(bytes / Math.pow(1024, index)).toFixed(index === 0 ? 0 : 1)} ${
    units[index]
  }`;
}
