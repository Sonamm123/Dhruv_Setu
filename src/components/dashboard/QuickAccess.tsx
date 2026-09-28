import {
  BookOpen,
  Compass,
  Image,
  Map,
  Microscope,
  Users,
} from "lucide-react";
import { Link } from "react-router";

const quickAccessItems = [
  {
    title: "Research",
    description: "Discover polar research",
    icon: Microscope,
    path: "/research",
  },
  {
    title: "Expeditions",
    description: "Explore expeditions",
    icon: Compass,
    path: "/expeditions",
  },
  {
    title: "Polar Map",
    description: "Explore polar regions",
    icon: Map,
    path: "/map",
  },
  {
    title: "Media Library",
    description: "Browse polar media",
    icon: Image,
    path: "/media",
  },
  {
    title: "Knowledge",
    description: "Learn and discover",
    icon: BookOpen,
    path: "/learn",
  },
  {
    title: "Community",
    description: "Connect and participate",
    icon: Users,
    path: "/personalized",
  },
];

export default function QuickAccess() {
  return (
    <section className="mt-6">
      <div className="mb-3">
        <h2 className="text-base font-semibold text-slate-900">
          Quick Access
        </h2>

        <p className="mt-0.5 text-xs text-slate-500">
          Explore PolarConnect India
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {quickAccessItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              to={item.path}
              className="group rounded-xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 transition-colors group-hover:bg-indigo-700 group-hover:text-white">
                <Icon size={18} strokeWidth={1.8} />
              </div>

              <h3 className="mt-3 text-sm font-semibold text-slate-800">
                {item.title}
              </h3>

              <p className="mt-1 text-[11px] leading-4 text-slate-500">
                {item.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}