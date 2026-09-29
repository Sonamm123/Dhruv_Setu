import {
  Award,
  Building2,
  CalendarDays,
  ChevronRight,
  Edit3,
  FlaskConical,
  Globe2,
  Mail,
  MapPin,
  Microscope,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Link } from "react-router";

import { researcherProfile } from "../../data/researcher/profile";

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}

export default function ResearcherProfile() {
  return (
    <div className="min-h-full bg-slate-50 px-6 py-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
          <Link
            to="/researcher"
            className="transition hover:text-slate-900"
          >
            Researcher Workspace
          </Link>

          <ChevronRight size={15} />

          <span className="text-slate-700">Profile</span>
        </div>

        {/* Profile Header */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="h-32 bg-gradient-to-r from-slate-950 via-slate-800 to-cyan-900" />

          <div className="px-6 pb-6">
            <div className="-mt-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-sky-100 text-2xl font-bold text-sky-800 shadow-md">
                  {researcherProfile.initials}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-2xl font-bold text-slate-900">
                      {researcherProfile.name}
                    </h1>

                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      <ShieldCheck size={13} />
                      Verified Researcher
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-medium text-slate-600">
                    {researcherProfile.designation}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {researcherProfile.institution}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <Edit3 size={16} />
                Edit Profile
              </button>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {researcherProfile.statistics.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Main */}
          <div className="space-y-6">
            {/* About */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <UserRound size={18} className="text-sky-700" />
                <h2 className="font-semibold text-slate-900">
                  About Researcher
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {researcherProfile.bio}
              </p>
            </section>

            {/* Research Areas */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Microscope size={18} className="text-sky-700" />
                <h2 className="font-semibold text-slate-900">
                  Research Areas
                </h2>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {researcherProfile.researchAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-sm text-sky-800"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-sky-700" />
                <h2 className="font-semibold text-slate-900">
                  Achievements & Contributions
                </h2>
              </div>

              <div className="mt-4 space-y-3">
                {researcherProfile.achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="rounded-xl border border-slate-200 p-4"
                  >
                    <h3 className="text-sm font-semibold text-slate-900">
                      {achievement.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Activity */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <FlaskConical size={18} className="text-sky-700" />
                <h2 className="font-semibold text-slate-900">
                  Recent Research Activity
                </h2>
              </div>

              <div className="mt-4 divide-y divide-slate-100">
                {researcherProfile.recentActivity.map((activity) => (
                  <div
                    key={activity.title}
                    className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        {activity.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {activity.time}
                      </p>
                    </div>

                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Researcher Information */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-slate-900">
                Researcher Information
              </h2>

              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <Building2
                    size={17}
                    className="mt-0.5 shrink-0 text-slate-400"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Institution
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {researcherProfile.institution}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FlaskConical
                    size={17}
                    className="mt-0.5 shrink-0 text-slate-400"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Department
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {researcherProfile.department}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0 text-slate-400"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {researcherProfile.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail
                    size={17}
                    className="mt-0.5 shrink-0 text-slate-400"
                  />

                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">
                      Email
                    </p>
                    <p className="mt-1 break-all text-sm font-medium text-slate-800">
                      {researcherProfile.email}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Globe2
                    size={17}
                    className="mt-0.5 shrink-0 text-slate-400"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Researcher ID
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {researcherProfile.researcherId}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CalendarDays
                    size={17}
                    className="mt-0.5 shrink-0 text-slate-400"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Joined PolarConnect
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {researcherProfile.joined}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Regions */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-slate-900">
                Research Regions
              </h2>

              <div className="mt-4 space-y-2">
                {researcherProfile.regions.map((region) => (
                  <div
                    key={region}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2.5"
                  >
                    <Globe2 size={16} className="text-sky-700" />
                    <span className="text-sm text-slate-700">
                      {region}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Stations */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-slate-900">
                Research Stations
              </h2>

              <div className="mt-4 space-y-2">
                {researcherProfile.stations.map((station) => (
                  <div
                    key={station}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2.5"
                  >
                    <Building2 size={16} className="text-sky-700" />
                    <span className="text-sm text-slate-700">
                      {station} Station
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
