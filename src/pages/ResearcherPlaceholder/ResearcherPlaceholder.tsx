import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router";

const pageTitles: Record<string, string> = {
  "/researcher/research": "Existing Research",
  "/researcher/reports": "Reports",
  "/researcher/new-entry": "New Entry",
  "/researcher/submissions": "My Submission",
  "/researcher/profile": "Researcher Profile",
  "/researcher/settings": "Settings",
};

export default function ResearcherPlaceholder() {
  const location = useLocation();

  const title =
    pageTitles[location.pathname] ?? "Researcher Portal";

  return (
    <div className="flex min-h-full items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-lg rounded-xl border border-cyan-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-indigo-900">
          <span className="text-xl font-bold">PC</span>
        </div>

        <h1 className="mt-5 text-2xl font-bold text-indigo-950">
          {title}
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          This researcher module is being built screen-by-screen
          from the PolarConnect India design.
        </p>

        <Link
          to="/researcher"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-indigo-950 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-900"
        >
          <ArrowLeft size={15} />
          Back to Workspace
        </Link>
      </div>
    </div>
  );
}
