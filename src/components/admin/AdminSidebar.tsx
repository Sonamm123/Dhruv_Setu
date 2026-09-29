import {
  FileCheck2,
  FileText,
  Home,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import { NavLink } from "react-router";

const navigation = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: Home,
  },
  {
    label: "Researcher Verification",
    path: "/admin/researcher-verification",
    icon: ShieldCheck,
  },
  {
    label: "Submission Queue",
    path: "/admin/submission-queue",
    icon: FileCheck2,
  },
  {
    label: "Content Management",
    path: "/admin/content",
    icon: FileText,
  },
  {
    label: "User Management",
    path: "/admin/users",
    icon: Users,
  },
];

export default function AdminSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <div className="border-b border-slate-200 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-950 text-sm font-bold text-white">
            PC
          </div>

          <div>
            <p className="text-sm font-bold text-indigo-950">
              PolarConnect India
            </p>
            <p className="text-[11px] font-medium text-slate-400">
              ADMIN PORTAL
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-950 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              <Icon size={17} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 p-3">
        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-950 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`
          }
        >
          <Settings size={17} />
          Settings
        </NavLink>
      </div>
    </aside>
  );
}
