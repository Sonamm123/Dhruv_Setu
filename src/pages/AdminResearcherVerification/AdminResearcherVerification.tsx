import {
  CheckCircle2,
  Clock3,
  FileText,
  Info,
  Search,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";

import {
  researcherApplications,
  
  type VerificationStatus,
} from "../../data/admin/researcherVerification";

const tabs: {
  label: string;
  value: VerificationStatus;
}[] = [
  { label: "Pending", value: "Pending" },
  { label: "Verified", value: "Verified" },
  { label: "Needs Information", value: "Needs Information" },
];

function statusClasses(status: VerificationStatus) {
  switch (status) {
    case "Verified":
      return "bg-emerald-50 text-emerald-700";
    case "Needs Information":
      return "bg-amber-50 text-amber-700";
    default:
      return "bg-blue-50 text-blue-700";
  }
}

function statusIcon(status: VerificationStatus) {
  switch (status) {
    case "Verified":
      return <CheckCircle2 size={14} />;
    case "Needs Information":
      return <Info size={14} />;
    default:
      return <Clock3 size={14} />;
  }
}

export default function AdminResearcherVerification() {
  const [applications, setApplications] = useState(
    researcherApplications,
  );

  const [activeTab, setActiveTab] =
    useState<VerificationStatus>("Pending");

  const [selectedId, setSelectedId] = useState(
    researcherApplications[0]?.id ?? "",
  );

  const [search, setSearch] = useState("");
  const [reviewNotes, setReviewNotes] = useState("");

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return applications.filter((application) => {
      const matchesTab =
        application.status === activeTab;

      const matchesSearch =
        !query ||
        application.name.toLowerCase().includes(query) ||
        application.institution.toLowerCase().includes(query) ||
        application.researchArea.toLowerCase().includes(query);

      return matchesTab && matchesSearch;
    });
  }, [applications, activeTab, search]);

  const selectedApplication =
    applications.find(
      (application) => application.id === selectedId,
    ) ?? filteredApplications[0];

  function updateStatus(
    id: string,
    status: VerificationStatus,
    notes = "",
  ) {
    setApplications((current) =>
      current.map((application) =>
        application.id === id
          ? {
              ...application,
              status,
              notes: notes || application.notes,
            }
          : application,
      ),
    );
  }

  function handleRequestInformation() {
    if (!selectedApplication) return;

    updateStatus(
      selectedApplication.id,
      "Needs Information",
      reviewNotes.trim() ||
        "Additional supporting information is required.",
    );

    setReviewNotes("");
    setActiveTab("Needs Information");
  }

  function handleReject() {
    if (!selectedApplication) return;

    updateStatus(
      selectedApplication.id,
      "Needs Information",
      reviewNotes.trim() || "Application requires correction.",
    );

    setReviewNotes("");
    setActiveTab("Needs Information");
  }

  function handleVerify() {
    if (!selectedApplication) return;

    updateStatus(
      selectedApplication.id,
      "Verified",
      reviewNotes.trim(),
    );

    setReviewNotes("");
    setActiveTab("Verified");
  }

  return (
    <div className="min-h-full bg-slate-50 p-5 lg:p-7">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950 via-blue-900 to-sky-700 px-6 py-7 text-white shadow-sm">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-200">
              Admin Portal
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Researcher Verification
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100">
              Review researcher registration details and supporting
              documents before granting access to the research
              workspace.
            </p>
          </div>

          <div className="absolute -right-16 -top-20 h-60 w-60 rounded-full bg-white/10" />
          <div className="absolute -bottom-28 right-28 h-52 w-52 rounded-full bg-cyan-300/10" />
        </section>

        {/* Tabs */}
        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const count = applications.filter(
                (application) =>
                  application.status === tab.value,
              ).length;

              const isActive = activeTab === tab.value;

              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveTab(tab.value)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-indigo-950 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}

                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Main */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[380px_1fr]">
          {/* Applications */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-4">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search researchers..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-indigo-400 focus:bg-white"
                />
              </div>
            </div>

            <div className="max-h-[620px] overflow-y-auto">
              {filteredApplications.length === 0 ? (
                <div className="p-8 text-center">
                  <ShieldCheck
                    size={28}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    No applications found
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Try another status or search term.
                  </p>
                </div>
              ) : (
                filteredApplications.map((application) => {
                  const selected =
                    selectedApplication?.id === application.id;

                  return (
                    <button
                      key={application.id}
                      type="button"
                      onClick={() => {
                        setSelectedId(application.id);
                        setReviewNotes(application.notes);
                      }}
                      className={`w-full border-b border-slate-100 p-4 text-left transition ${
                        selected
                          ? "bg-indigo-50"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800">
                          {application.initials}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <p className="truncate text-sm font-semibold text-slate-900">
                              {application.name}
                            </p>

                            <span
                              className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-semibold ${
                                statusClasses(application.status)
                              }`}
                            >
                              {application.status}
                            </span>
                          </div>

                          <p className="mt-1 truncate text-xs text-slate-500">
                            {application.institution}
                          </p>

                          <p className="mt-1 text-[11px] text-slate-400">
                            {application.researchArea} ·{" "}
                            {application.polarRegion}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </section>

          {/* Details */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {selectedApplication ? (
              <>
                <div className="border-b border-slate-200 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-900">
                        {selectedApplication.initials}
                      </div>

                      <div>
                        <h2 className="text-xl font-bold text-slate-900">
                          {selectedApplication.name}
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                          {selectedApplication.role} ·{" "}
                          {selectedApplication.department}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${statusClasses(
                        selectedApplication.status,
                      )}`}
                    >
                      {statusIcon(selectedApplication.status)}
                      {selectedApplication.status}
                    </span>
                  </div>
                </div>

                {/* Profile information */}
                <div className="grid gap-4 border-b border-slate-200 p-5 sm:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Institution
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {selectedApplication.institution}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Email
                    </p>
                    <p className="mt-1 break-all text-sm font-medium text-slate-800">
                      {selectedApplication.email}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Research Area
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {selectedApplication.researchArea}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Polar Region
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {selectedApplication.polarRegion}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Role
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {selectedApplication.role}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Submitted
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {selectedApplication.submittedDate}
                    </p>
                  </div>
                </div>

                {/* Documents */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Supporting Documents
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Review submitted documents before verification.
                      </p>
                    </div>

                    <FileText
                      size={20}
                      className="text-indigo-700"
                    />
                  </div>

                  <div className="mt-4 space-y-3">
                    {selectedApplication.documents.map(
                      (document) => (
                        <div
                          key={document.name}
                          className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                              <FileText
                                size={17}
                                className="text-slate-500"
                              />
                            </div>

                            <div>
                              <p className="text-sm font-medium text-slate-800">
                                {document.name}
                              </p>

                              <p className="text-[11px] text-slate-400">
                                {document.type}
                              </p>
                            </div>
                          </div>

                          <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                              document.status === "Verified"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-amber-50 text-amber-700"
                            }`}
                          >
                            {document.status}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div className="border-t border-slate-200 p-5">
                  <label className="text-sm font-semibold text-slate-800">
                    Review Notes
                  </label>

                  <textarea
                    value={reviewNotes}
                    onChange={(event) =>
                      setReviewNotes(event.target.value)
                    }
                    rows={3}
                    placeholder="Add your review notes..."
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-indigo-400 focus:bg-white"
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 p-5 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={handleRequestInformation}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-200 bg-white px-4 py-2.5 text-sm font-semibold text-amber-700 hover:bg-amber-50"
                  >
                    <Info size={16} />
                    Request Information
                  </button>

                  <button
                    type="button"
                    onClick={handleReject}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
                  >
                    <XCircle size={16} />
                    Reject
                  </button>

                  <button
                    type="button"
                    onClick={handleVerify}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-900"
                  >
                    <CheckCircle2 size={16} />
                    Verify Researcher
                  </button>
                </div>
              </>
            ) : (
              <div className="flex min-h-[500px] items-center justify-center p-8 text-center">
                <div>
                  <ShieldCheck
                    size={40}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-3 font-semibold text-slate-700">
                    Select a researcher
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Choose an application from the list to review
                    its details.
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
