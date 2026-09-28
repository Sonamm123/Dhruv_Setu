import {
  Award,
  BookOpen,
  Bookmark,
  Check,
  Edit3,
  GraduationCap,
  Mail,
  MapPin,
  Save,
  Settings,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import StatCard from "../../components/profile/StatCard";
import {
  profileStats,
  recentActivity,
  savedTopics,
} from "../../data/profile";

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Polar Explorer");
  const [bio, setBio] = useState(
    "Exploring polar science, research and India's contribution to the polar regions.",
  );

  const handleSave = () => {
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 py-5 sm:px-5 sm:py-6 lg:px-7">
      {/* =========================================================
          PROFILE HEADER
      ========================================================= */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Cover */}
        <div className="relative h-32 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 sm:h-36">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-2xl" />
            <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-blue-400/10 blur-2xl" />
          </div>

          <div className="absolute bottom-4 left-5 text-white/60 md:left-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em]">
              Polar Research Platform
            </p>
          </div>
        </div>

        {/* Profile content */}
        <div className="relative px-5 pb-6 md:px-7">
          {/* Avatar */}
          <div className="absolute -top-12 left-5 flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-indigo-100 text-indigo-700 shadow-lg md:left-7">
            <User size={38} strokeWidth={1.7} />
          </div>

          {/* Identity + Edit */}
          <div className="pt-16">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                  My Profile
                </p>

                <h1 className="mt-1.5 break-words text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {name}
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Polar Research Explorer
                </p>
              </div>

              <button
                type="button"
                onClick={() => setEditing((value) => !value)}
                className="inline-flex w-fit items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              >
                {editing ? (
                  <>
                    <X size={14} />
                    Cancel
                  </>
                ) : (
                  <>
                    <Edit3 size={14} />
                    Edit Profile
                  </>
                )}
              </button>
            </div>

            {/* Edit form */}
            {editing ? (
              <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/40 p-4 sm:p-5">
                <div>
                  <label
                    htmlFor="profile-name"
                    className="text-xs font-semibold text-slate-700"
                  >
                    Display Name
                  </label>

                  <input
                    id="profile-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="profile-bio"
                    className="text-xs font-semibold text-slate-700"
                  >
                    Bio
                  </label>

                  <textarea
                    id="profile-bio"
                    value={bio}
                    onChange={(event) => setBio(event.target.value)}
                    rows={3}
                    className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white p-3 text-sm leading-6 text-slate-800 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-700 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  >
                    <Save size={14} />
                    Save Changes
                  </button>

                  <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-100"
                  >
                    <X size={14} />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Profile metadata */}
                <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
                  <div className="flex min-w-0 items-center gap-2 text-sm text-slate-500">
                    <Mail
                      size={15}
                      className="shrink-0 text-indigo-600"
                    />
                    <span className="truncate">
                      explorer@polarconnect.in
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin
                      size={15}
                      className="shrink-0 text-indigo-600"
                    />
                    <span>India</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <GraduationCap
                      size={15}
                      className="shrink-0 text-indigo-600"
                    />
                    <span>Research &amp; Learning</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-500">
                  {bio}
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          STATISTICS
      ========================================================= */}
      <section className="mt-7">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Your Progress
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Your activity across the PolarConnect learning experience.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {profileStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="mt-7 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Recent Activity */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Recent Activity
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Your latest research and learning activity.
              </p>
            </div>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
              <Award size={18} className="text-indigo-600" />
            </div>
          </div>

          <div className="mt-5 divide-y divide-slate-100">
            {recentActivity.map((activity) => (
              <div
                key={`${activity.title}-${activity.date}`}
                className="flex items-center gap-3 py-4 first:pt-0 last:pb-0"
              >
                {/* Activity icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  {activity.type === "Research" && (
                    <BookOpen
                      size={16}
                      className="text-indigo-600"
                    />
                  )}

                  {activity.type === "Learning" && (
                    <GraduationCap
                      size={16}
                      className="text-indigo-600"
                    />
                  )}

                  {activity.type === "Expedition" && (
                    <MapPin
                      size={16}
                      className="text-indigo-600"
                    />
                  )}

                  {activity.type === "Media" && (
                    <Bookmark
                      size={16}
                      className="text-indigo-600"
                    />
                  )}
                </div>

                {/* Activity details */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-800">
                    {activity.title}
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">
                    {activity.type} · {activity.date}
                  </p>
                </div>

                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                  <Check
                    size={13}
                    className="text-emerald-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Saved Topics */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Saved Topics
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Topics selected for your interests.
              </p>
            </div>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
              <Settings size={17} className="text-slate-400" />
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {savedTopics.map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition hover:border-indigo-100 hover:bg-indigo-50/40"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                  <Bookmark size={15} />
                </div>

                <span className="text-sm font-medium text-slate-700">
                  {topic}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-xs font-semibold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          >
            <Settings size={14} />
            Manage Interests
          </button>
        </section>
      </div>

      {/* =========================================================
          ACHIEVEMENT
      ========================================================= */}
      <section className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-700 text-white">
            <Award size={24} />
          </div>

          <div className="flex-1">
            <h2 className="text-sm font-semibold text-slate-900">
              Polar Explorer Achievement
            </h2>

            <p className="mt-1 text-xs leading-5 text-slate-600">
              You have explored research, expeditions, media and
              learning resources across the platform.
            </p>
          </div>

          <div className="rounded-lg bg-white px-5 py-2.5 text-center shadow-sm">
            <p className="text-lg font-bold text-indigo-700">
              39
            </p>

            <p className="text-[10px] font-medium text-slate-400">
              Activities
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}