import { useMemo, useState } from "react";
import {
  Archive,
  CheckCircle2,
  Edit3,
  Eye,
  FileText,
  Filter,
  FolderOpen,
  MoreHorizontal,
  Search,
  Upload,
} from "lucide-react";
import { managedContent, type ContentStatus, type ContentType } from "../../data/admin/content";

const statusStyles: Record<ContentStatus, string> = {
  Published: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Under Review": "bg-amber-50 text-amber-700 border-amber-200",
  Draft: "bg-slate-100 text-slate-700 border-slate-200",
  Archived: "bg-red-50 text-red-700 border-red-200",
};

const typeStyles: Record<ContentType, string> = {
  Research: "bg-blue-50 text-blue-700",
  Report: "bg-violet-50 text-violet-700",
  Dataset: "bg-cyan-50 text-cyan-700",
  Publication: "bg-indigo-50 text-indigo-700",
  Media: "bg-pink-50 text-pink-700",
};

export default function AdminContent() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | ContentStatus>("All");
  const [typeFilter, setTypeFilter] = useState<"All" | ContentType>("All");
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  const filteredContent = useMemo(() => {
    const query = search.trim().toLowerCase();

    return managedContent.filter((item) => {
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.researcher.toLowerCase().includes(query) ||
        item.institution.toLowerCase().includes(query) ||
        item.researchArea.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      const matchesType =
        typeFilter === "All" || item.type === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [search, statusFilter, typeFilter]);

  const publishedCount = managedContent.filter(
    (item) => item.status === "Published",
  ).length;

  const reviewCount = managedContent.filter(
    (item) => item.status === "Under Review",
  ).length;

  const draftCount = managedContent.filter(
    (item) => item.status === "Draft",
  ).length;

  const archivedCount = managedContent.filter(
    (item) => item.status === "Archived",
  ).length;

  const handleAction = (action: string, title: string) => {
    window.alert(`${action}: ${title}`);
    setSelectedContent(null);
  };

  return (
    <section className="min-h-full bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600">
              Repository Administration
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
              Content Management
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              Manage approved research resources, publications, datasets and
              media across the PolarConnect India repository.
            </p>
          </div>

          <button
            onClick={() => window.alert("Upload content workflow opened.")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <Upload className="h-4 w-4" />
            Add Content
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <StatCard
            icon={<CheckCircle2 className="h-5 w-5" />}
            label="Published"
            value={publishedCount}
            helper="Public resources"
          />
          <StatCard
            icon={<Eye className="h-5 w-5" />}
            label="Under Review"
            value={reviewCount}
            helper="Awaiting approval"
          />
          <StatCard
            icon={<Edit3 className="h-5 w-5" />}
            label="Drafts"
            value={draftCount}
            helper="Not published"
          />
          <StatCard
            icon={<Archive className="h-5 w-5" />}
            label="Archived"
            value={archivedCount}
            helper="Retained records"
          />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-4 sm:p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="relative min-w-0 flex-1 xl:max-w-xl">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search title, researcher, institution..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
                  <Filter className="h-4 w-4 text-slate-400" />
                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(
                        event.target.value as "All" | ContentStatus,
                      )
                    }
                    className="bg-transparent py-2.5 text-sm text-slate-700 outline-none"
                  >
                    <option value="All">All Status</option>
                    <option value="Published">Published</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Draft">Draft</option>
                    <option value="Archived">Archived</option>
                  </select>
                </label>

                <select
                  value={typeFilter}
                  onChange={(event) =>
                    setTypeFilter(event.target.value as "All" | ContentType)
                  }
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-400"
                >
                  <option value="All">All Content Types</option>
                  <option value="Research">Research</option>
                  <option value="Report">Report</option>
                  <option value="Dataset">Dataset</option>
                  <option value="Publication">Publication</option>
                  <option value="Media">Media</option>
                </select>
              </div>
            </div>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[1050px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80 text-left">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Content
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Researcher
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Type
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Published
                  </th>
                  <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredContent.map((item) => (
                  <tr key={item.id} className="transition hover:bg-slate-50/70">
                    <td className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-lg bg-blue-50 p-2 text-blue-600">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="max-w-[320px] font-semibold text-slate-900">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {item.id} · {item.researchArea}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-slate-800">
                        {item.researcher}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.institution}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${typeStyles[item.type]}`}
                      >
                        {item.type}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyles[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {item.publishedDate}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() =>
                            handleAction("View content", item.title)
                          }
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600"
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() =>
                            handleAction("Edit content", item.title)
                          }
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600"
                          title="Edit"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() =>
                            setSelectedContent(
                              selectedContent === item.id ? null : item.id,
                            )
                          }
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
                          title="More actions"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>

                      {selectedContent === item.id && (
                        <div className="relative">
                          <div className="absolute right-0 z-20 mt-1 w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
                            <button
                              onClick={() =>
                                handleAction("Manage versions", item.title)
                              }
                              className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                            >
                              Manage versions
                            </button>
                            <button
                              onClick={() =>
                                handleAction("Archive content", item.title)
                              }
                              className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                            >
                              Archive content
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="divide-y divide-slate-100 md:hidden">
            {filteredContent.map((item) => (
              <div key={item.id} className="p-4">
                <div className="flex gap-3">
                  <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                    <FileText className="h-4 w-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{item.id}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${typeStyles[item.type]}`}
                      >
                        {item.type}
                      </span>
                      <span
                        className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyles[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="text-slate-400">Researcher</p>
                        <p className="mt-1 font-medium text-slate-700">
                          {item.researcher}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400">Published</p>
                        <p className="mt-1 font-medium text-slate-700">
                          {item.publishedDate}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() =>
                          handleAction("View content", item.title)
                        }
                        className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700"
                      >
                        View
                      </button>
                      <button
                        onClick={() =>
                          handleAction("Edit content", item.title)
                        }
                        className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredContent.length === 0 && (
            <div className="px-6 py-16 text-center">
              <FolderOpen className="mx-auto h-10 w-10 text-slate-300" />
              <h3 className="mt-3 font-semibold text-slate-800">
                No content found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          )}

          <div className="border-t border-slate-200 px-5 py-4 text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {filteredContent.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-700">
              {managedContent.length}
            </span>{" "}
            repository resources
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  label,
  value,
  helper,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  helper: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
          {icon}
        </div>
        <span className="text-2xl font-bold text-slate-900">{value}</span>
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-800">{label}</p>
      <p className="mt-1 text-xs text-slate-500">{helper}</p>
    </div>
  );
}
