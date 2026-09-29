import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Snowflake,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router";

const roles = [
  {
    title: "Explore as User",
    description:
      "Explore polar research, expeditions, media and learning resources.",
    icon: UserRound,
    route: "/research",
    label: "User Portal",
  },
  {
    title: "Researcher Workspace",
    description:
      "Manage research, submit entries, track submissions and reports.",
    icon: BookOpen,
    route: "/researcher",
    label: "Researcher Portal",
  },
  {
    title: "Administration",
    description:
      "Verify researchers, review submissions and manage platform content.",
    icon: ShieldCheck,
    route: "/admin",
    label: "Admin Portal",
  },
];

export default function Login() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="relative min-h-screen overflow-hidden">
        {/* Soft sky-blue background accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_30%)]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-8 sm:px-8 lg:px-12">

          {/* Header */}
          <header className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 ring-1 ring-sky-200">
                <Snowflake className="h-5 w-5 text-sky-600" />
              </div>

              <div className="text-left">
                <p className="text-sm font-semibold tracking-wide text-slate-900">
                  POLARCONNECT INDIA
                </p>
                <p className="text-xs text-slate-500">
                  Dhruv Setu
                </p>
              </div>
            </button>
          </header>

          {/* Main content */}
          <section className="flex flex-1 flex-col justify-center py-12">
            <div className="mx-auto w-full max-w-5xl text-center">

              {/* Badge */}
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700">
                <Snowflake className="h-3.5 w-3.5" />
                India's Polar Research Knowledge Platform
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Welcome to{" "}
                <span className="text-sky-600">
                  PolarConnect India
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Dhruv Setu connects citizens, researchers and administrators
                through a unified digital platform for India's polar research,
                knowledge and discovery.
              </p>

              {/* Role cards */}
              <div className="mt-12 grid gap-5 text-left md:grid-cols-3">
                {roles.map((role) => {
                  const Icon = role.icon;

                  return (
                    <button
                      key={role.route}
                      onClick={() => navigate(role.route)}
                      className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                          <Icon className="h-5 w-5" />
                        </div>

                        <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-sky-600" />
                      </div>

                      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-sky-600">
                        {role.label}
                      </p>

                      <h2 className="mt-2 text-lg font-semibold text-slate-900">
                        {role.title}
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {role.description}
                      </p>

                      <div className="mt-6 text-sm font-medium text-slate-600 transition group-hover:text-sky-600">
                        Continue →
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-slate-200 py-5 text-center text-xs text-slate-400">
            PolarConnect India · Dhruv Setu · SIH 2026 Prototype
          </footer>
        </div>
      </div>
    </main>
  );
}