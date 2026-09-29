import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router";

import {
  adminStats,
  priorityReviewQueue,
  researcherVerification,
} from "../../data/admin/dashboard";

function statIcon(type: string) {
  switch (type) {
    case "researchers":
      return <Users size={20} />;
    case "submissions":
      return <FileText size={20} />;
    case "corrections":
      return <AlertCircle size={20} />;
    default:
      return <CheckCircle2 size={20} />;
  }
}

export default function AdminDashboard() {
  return (
    <div className="min-h-full bg-slate-50 p-5 lg:p-7">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950 via-blue-900 to-sky-700 px-6 py-7 text-white shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-200">
              PolarConnect India
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-sm leading-6 text-blue-100">
              Monitor verification, review research submissions,
              manage content and maintain the public polar knowledge
              repository.
            </p>
          </div>

          <div className="absolute -right-12 -top-20 h-56 w-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 right-24 h-48 w-48 rounded-full bg-cyan-300/10" />
        </section>

        {/* Statistics */}
        <section className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {adminStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-800">
                  {statIcon(stat.type)}
                </div>

                <span className="text-xs font-medium text-slate-400">
                  Today
                </span>
              </div>

              <p className="mt-4 text-2xl font-bold text-slate-900">
                {stat.value}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* Main columns */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.3fr_1fr]">
          {/* Priority Review Queue */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Priority Review Queue
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Submissions requiring administrator attention
                </p>
              </div>

              <Link
                to="/admin/submission-queue"
                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 hover:text-indigo-900"
              >
                View All
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {priorityReviewQueue.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <FileCheck2
                        size={16}
                        className="shrink-0 text-indigo-700"
                      />

                      <p className="truncate text-sm font-semibold text-slate-800">
                        {item.title}
                      </p>
                    </div>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.type} · {item.researcher}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-700">
                      {item.status}
                    </span>

                    <Link
                      to={`/admin/submission-review/${item.id}`}
                      className="rounded-lg bg-indigo-950 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-900"
                    >
                      Review
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Researcher Verification */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Researcher Verification
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Recent researcher applications
                </p>
              </div>

              <Link
                to="/admin/researcher-verification"
                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 hover:text-indigo-900"
              >
                View All
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {researcherVerification.map((researcher) => (
                <div
                  key={researcher.id}
                  className="flex items-center justify-between gap-3 px-5 py-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800">
                      {researcher.name
                        .split(" ")
                        .slice(-2)
                        .map((part) => part[0])
                        .join("")}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-800">
                        {researcher.name}
                      </p>

                      <p className="truncate text-xs text-slate-500">
                        {researcher.institution}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-700">
                    {researcher.status}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Information banner */}
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-sky-200 bg-sky-50 p-4">
          <Clock3
            size={19}
            className="mt-0.5 shrink-0 text-sky-700"
          />

          <div>
            <p className="text-sm font-semibold text-sky-900">
              Repository processing
            </p>

            <p className="mt-1 text-xs leading-5 text-sky-800">
              Approved research content is processed before being
              published to the public PolarConnect repository.
            </p>
          </div>
        </div>

        {/* Quick actions */}
        <section className="mt-5 grid gap-4 sm:grid-cols-3">
          <Link
            to="/admin/researcher-verification"
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow"
          >
            <ShieldCheck className="text-indigo-700" size={22} />
            <h3 className="mt-3 text-sm font-semibold text-slate-900">
              Verify Researchers
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Review researcher registration and supporting documents.
            </p>
          </Link>

          <Link
            to="/admin/submission-queue"
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow"
          >
            <FileCheck2 className="text-indigo-700" size={22} />
            <h3 className="mt-3 text-sm font-semibold text-slate-900">
              Review Submissions
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Find and prioritize research submissions awaiting review.
            </p>
          </Link>

          <Link
            to="/admin/content"
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow"
          >
            <FileText className="text-indigo-700" size={22} />
            <h3 className="mt-3 text-sm font-semibold text-slate-900">
              Manage Content
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Maintain approved content in the public repository.
            </p>
          </Link>
        </section>
      </div>
    </div>
  );
}
