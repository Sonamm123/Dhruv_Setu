import {
  User,
  Home,
  UserRound,
  Compass,
  BookOpen,
  FlaskConical,
  Award,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router";

const navigationItems = [
  {
    label: "Home",
    path: "/dashboard",
    icon: Home,
  },
  {
    label: "Personalized",
    path: "/personalized",
    icon: UserRound,
  },
  {
    label: "Recommendations",
    path: "/learn",
    icon: Compass,
  },
  {
    label: "Explore",
    path: "/expeditions",
    icon: Compass,
  },
  {
    label: "Knowledge",
    path: "/research",
    icon: BookOpen,
  },
  {
    label: "Research Content",
    path: "/research",
    icon: FlaskConical,
  },
  {
    label: "Certification",
    path: "/learn",
    icon: Award,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-56 flex-col border-r border-slate-200 bg-white">
      <div className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                  ].join(" ")
                }
              >
                <Icon size={17} strokeWidth={1.8} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Account navigation */}
      <div className="border-t border-slate-200 p-3 space-y-1">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            [
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
            ].join(" ")
          }
        >
          <User size={17} strokeWidth={1.8} />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
        >
          <Settings size={17} strokeWidth={1.8} />
          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
}