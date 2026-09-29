import {
  BarChart3,
  BookOpen,
  FileText,
  Home,
  PlusSquare,
  Settings,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router";

const navigationItems = [
  {
    label: "Dashboard",
    path: "/researcher",
    icon: Home,
  },
  {
    label: "Existing Research",
    path: "/researcher/research",
    icon: BookOpen,
  },
  {
    label: "Reports",
    path: "/researcher/reports",
    icon: FileText,
  },
  {
    label: "New Entry",
    path: "/researcher/new-entry",
    icon: PlusSquare,
  },
  {
    label: "My Submission",
    path: "/researcher/submissions",
    icon: BarChart3,
  },
];

export default function ResearcherSidebar() {
  return (
    <aside className="flex h-full w-56 shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="border-b border-slate-100 px-5 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
            <div className="h-4 w-4 rounded-full border-2 border-cyan-600" />
          </div>

          <span className="text-[15px] font-bold text-indigo-950">
            PolarConnect India
          </span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-5">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === "/researcher"}
              className={({ isActive }) =>
                [
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-indigo-950 text-white shadow-sm"
                    : "text-indigo-950 hover:bg-indigo-50",
                ].join(" ")
              }
            >
              <Icon size={16} strokeWidth={1.8} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 p-3">
        <NavLink
          to="/researcher/profile"
          className={({ isActive }) =>
            [
              "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-all",
              isActive
                ? "bg-indigo-50 text-indigo-950"
                : "text-indigo-950 hover:bg-indigo-50",
            ].join(" ")
          }
        >
          <UserRound size={16} strokeWidth={1.8} />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/researcher/settings"
          className="mt-1 flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-indigo-950 hover:bg-indigo-50"
        >
          <Settings size={16} strokeWidth={1.8} />
          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
}
