import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Camera,
  CheckCircle2,
  Clock3,
  FileText,
  FlaskConical,
  Image,
  Link2,
  Upload,
  Users,
} from "lucide-react";
import {
  leaderboard,
  recentResearchActivity,
  researcherStats,
} from "../../data/researcher";

const statIcons = {
  research: BookOpen,
  expedition: FlaskConical,
  media: Camera,
  users: Users,
};

export default function ResearcherDashboard() {
  return (
    <div className="min-h-full bg-slate-50">
      <main className="mx-auto max-w-[1400px] p-5">
        {/* Hero */}
        <section
          className="relative overflow-hidden rounded-lg bg-cover bg-center px-7 py-8 text-white"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(8,20,65,.92), rgba(8,50,110,.52)), url('https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="relative z-10">
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-cyan-200">
              Researcher Portal
            </p>

            <h1 className="text-3xl font-bold tracking-tight">
              Researcher Workspace
            </h1>

            <p className="mt-2 max-w-xl text-sm text-slate-100">
              Manage research, connect related content, and follow your review
              submissions.
            </p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-indigo-950">
              Research Workspace
            </h2>

            <span className="text-xs text-slate-500">
              Manage your research resources
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <ActionCard
              icon={<BookOpen size={20} />}
              title="Existing Research"
              description="Browse and manage related research records."
              path="/researcher/research"
            />

            <ActionCard
              icon={<FileText size={20} />}
              title="Reports"
              description="View and manage your research reports."
              path="/researcher/reports"
            />

            <ActionCard
              icon={<Upload size={20} />}
              title="New Entry"
              description="Create and submit a new research resource."
              path="/researcher/new-entry"
            />
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mt-5 rounded-lg border border-cyan-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <h2 className="font-bold text-indigo-950">Recent Activity</h2>
              <p className="mt-0.5 text-xs text-slate-500">
                Latest updates across your research workspace
              </p>
            </div>

            <button className="flex items-center gap-1 text-xs font-semibold text-indigo-800">
              View all
              <ArrowRight size={13} />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {recentResearchActivity.map((activity) => (
              <div
                key={activity.title}
                className="flex items-center gap-4 px-5 py-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-indigo-800">
                  {activity.type === "research" && <BookOpen size={17} />}
                  {activity.type === "report" && <Link2 size={17} />}
                  {activity.type === "review" && <Clock3 size={17} />}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-indigo-950">
                    {activity.title}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {activity.description}
                  </p>
                </div>

                <span className="whitespace-nowrap text-[11px] text-slate-400">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {researcherStats.map((stat) => {
            const Icon =
              statIcons[stat.icon as keyof typeof statIcons] ?? BarChart3;

            return (
              <div
                key={stat.label}
                className="rounded-lg border border-cyan-200 bg-white p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 text-indigo-800">
                    <Icon size={19} />
                  </div>

                  <div>
                    <p className="text-xl font-bold text-indigo-950">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Progress + Leaderboard */}
        <section className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-cyan-200 bg-white p-5">
            <h2 className="font-bold text-indigo-950">Your Progress</h2>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-indigo-950">
                XK
              </div>

              <div>
                <p className="font-bold text-indigo-950">Xu Kai</p>
                <p className="text-xs text-indigo-600">
                  Explorer level 2
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-[11px] text-slate-500">
                <span>Research contribution</span>
                <span>120 / 200 XP</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[60%] rounded-full bg-indigo-900" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <ProgressItem icon={<CheckCircle2 size={15} />} text="12 Approved" />
              <ProgressItem icon={<FileText size={15} />} text="8 Submitted" />
              <ProgressItem icon={<Image size={15} />} text="16 Media" />
            </div>
          </div>

          <div className="rounded-lg border border-cyan-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="font-bold text-indigo-950">Leaderboard</h2>
                <p className="text-xs text-slate-500">
                  Researcher contribution
                </p>
              </div>

              <button className="flex items-center gap-1 text-xs font-semibold text-indigo-800">
                View all
                <ArrowRight size={13} />
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {leaderboard.map((person) => (
                <div
                  key={person.rank}
                  className="flex items-center gap-3 px-5 py-2.5"
                >
                  <span className="w-5 text-center text-xs font-bold text-indigo-900">
                    {person.rank}
                  </span>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[9px] font-bold text-indigo-900">
                    {person.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>

                  <span className="flex-1 truncate text-xs font-medium text-slate-700">
                    {person.name}
                  </span>

                  <span className="text-xs font-bold text-indigo-900">
                    {person.points}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ActionCard({
  icon,
  title,
  description,
  path,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}) {
  return (
    <a
      href={path}
      className="group flex items-center gap-4 rounded-lg border border-cyan-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-sm"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-indigo-800">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-bold text-indigo-950">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <ArrowRight
        size={16}
        className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-800"
      />
    </a>
  );
}

function ProgressItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-slate-50 px-2.5 py-2 text-[10px] font-medium text-slate-600">
      <span className="text-indigo-800">{icon}</span>
      {text}
    </div>
  );
}
