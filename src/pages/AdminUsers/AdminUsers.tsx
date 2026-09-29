import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Edit3,
  Eye,
  MoreHorizontal,
  Search,
  Shield,
  UserCheck,
  UserMinus,
  Users,
} from "lucide-react";
import {
  adminUsers,
  type AdminUser,
  type UserRole,
  type UserStatus,
} from "../../data/admin/users";

const statusStyles: Record<UserStatus, string> = {
  Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Suspended: "bg-red-50 text-red-700 border-red-200",
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
};

const roleStyles: Record<UserRole, string> = {
  Researcher: "bg-blue-50 text-blue-700",
  Administrator: "bg-violet-50 text-violet-700",
  Viewer: "bg-slate-100 text-slate-700",
};

export default function AdminUsers() {
  const [users, setUsers] = useState(adminUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<"All" | UserRole>("All");
  const [statusFilter, setStatusFilter] = useState<"All" | UserStatus>("All");
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const filteredUsers = useMemo(() => {
    const query = search.toLowerCase().trim();

    return users.filter((user) => {
      const matchesSearch =
        !query ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.institution.toLowerCase().includes(query);

      const matchesRole =
        roleFilter === "All" || user.role === roleFilter;

      const matchesStatus =
        statusFilter === "All" || user.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, search, roleFilter, statusFilter]);

  const stats = {
    total: users.length,
    researchers: users.filter((u) => u.role === "Researcher").length,
    active: users.filter((u) => u.status === "Active").length,
    pending: users.filter((u) => u.status === "Pending").length,
  };

  const toggleStatus = (user: AdminUser) => {
    setUsers((current) =>
      current.map((item) =>
        item.id === user.id
          ? {
              ...item,
              status:
                item.status === "Suspended"
                  ? "Active"
                  : "Suspended",
            }
          : item,
      ),
    );
    setOpenMenu(null);
  };

  const handleView = (user: AdminUser) => {
    window.alert(
      `${user.name}\n\n${user.email}\n${user.institution}\nRole: ${user.role}\nStatus: ${user.status}`,
    );
    setOpenMenu(null);
  };

  const handleEdit = (user: AdminUser) => {
    window.alert(`Edit user: ${user.name}`);
    setOpenMenu(null);
  };

  return (
    <div className="min-h-full bg-slate-50">
      <div className="mx-auto max-w-[1500px] space-y-6 p-5 sm:p-6 lg:p-8">
        {/* Header */}
        <div>
          <p className="mb-1 text-sm font-medium text-slate-500">
            Administration
          </p>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                User Management
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Manage researchers, administrators and platform users.
              </p>
            </div>

            <button
              onClick={() =>
                window.alert("Invite User workflow will be connected to the backend.")
              }
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <UserCheck className="h-4 w-4" />
              Invite User
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Total Users"
            value={stats.total}
            icon={<Users className="h-5 w-5" />}
          />
          <StatCard
            label="Researchers"
            value={stats.researchers}
            icon={<UserCheck className="h-5 w-5" />}
          />
          <StatCard
            label="Active Users"
            value={stats.active}
            icon={<CheckCircle2 className="h-5 w-5" />}
          />
          <StatCard
            label="Pending Users"
            value={stats.pending}
            icon={<Shield className="h-5 w-5" />}
          />
        </div>

        {/* Filters */}
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative min-w-0 flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search users, email or institution..."
                className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
              />
            </div>

            <FilterSelect
              value={roleFilter}
              onChange={(value) =>
                setRoleFilter(value as "All" | UserRole)
              }
              options={[
                "All",
                "Researcher",
                "Administrator",
                "Viewer",
              ]}
            />

            <FilterSelect
              value={statusFilter}
              onChange={(value) =>
                setStatusFilter(value as "All" | UserStatus)
              }
              options={["All", "Active", "Pending", "Suspended"]}
            />
          </div>
        </section>

        {/* User table */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <h2 className="font-semibold text-slate-900">
                Platform Users
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">
                Showing {filteredUsers.length} of {users.length} users
              </p>
            </div>
          </div>

          {filteredUsers.length === 0 ? (
            <div className="flex min-h-60 flex-col items-center justify-center px-6 text-center">
              <Users className="mb-3 h-10 w-10 text-slate-300" />
              <h3 className="font-semibold text-slate-900">
                No users found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          ) : (
            <>
              {/* Desktop */}
              <div className="hidden overflow-x-auto lg:block">
                <table className="w-full min-w-[1000px] text-left">
                  <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="px-5 py-3">User</th>
                      <th className="px-5 py-3">Institution</th>
                      <th className="px-5 py-3">Role</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Last Active</th>
                      <th className="px-5 py-3">Submissions</th>
                      <th className="px-5 py-3 text-right">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {filteredUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="transition hover:bg-slate-50/70"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                              {user.initials}
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-slate-900">
                                {user.name}
                              </p>
                              <p className="truncate text-xs text-slate-500">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="max-w-[220px] px-5 py-4">
                          <p className="truncate text-sm text-slate-700">
                            {user.institution}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${roleStyles[user.role]}`}
                          >
                            {user.role}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyles[user.status]}`}
                          >
                            {user.status}
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">
                          {user.lastActive}
                        </td>

                        <td className="px-5 py-4 text-sm font-medium text-slate-700">
                          {user.submissions}
                        </td>

                        <td className="relative px-5 py-4 text-right">
                          <button
                            onClick={() =>
                              setOpenMenu(
                                openMenu === user.id ? null : user.id,
                              )
                            }
                            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                          >
                            <MoreHorizontal className="h-5 w-5" />
                          </button>

                          {openMenu === user.id && (
                            <ActionMenu
                              user={user}
                              onView={() => handleView(user)}
                              onEdit={() => handleEdit(user)}
                              onToggleStatus={() => toggleStatus(user)}
                            />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile / tablet */}
              <div className="divide-y divide-slate-100 lg:hidden">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                          {user.initials}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-900">
                            {user.name}
                          </p>
                          <p className="truncate text-xs text-slate-500">
                            {user.email}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          setOpenMenu(
                            openMenu === user.id ? null : user.id,
                          )
                        }
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                      >
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <Info label="Institution" value={user.institution} />
                      <Info label="Last Active" value={user.lastActive} />
                      <div>
                        <p className="text-xs text-slate-400">Role</p>
                        <span
                          className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${roleStyles[user.role]}`}
                        >
                          {user.role}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Status</p>
                        <span
                          className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyles[user.status]}`}
                        >
                          {user.status}
                        </span>
                      </div>
                    </div>

                    {openMenu === user.id && (
                      <div className="mt-3">
                        <ActionMenu
                          user={user}
                          onView={() => handleView(user)}
                          onEdit={() => handleEdit(user)}
                          onToggleStatus={() => toggleStatus(user)}
                          mobile
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
        {icon}
      </div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 min-w-[150px] appearance-none rounded-lg border border-slate-200 bg-white pl-3 pr-9 text-sm font-medium text-slate-700 outline-none focus:border-slate-400"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option === "All" ? "All" : option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </div>
  );
}

function ActionMenu({
  user,
  onView,
  onEdit,
  onToggleStatus,
  mobile = false,
}: {
  user: AdminUser;
  onView: () => void;
  onEdit: () => void;
  onToggleStatus: () => void;
  mobile?: boolean;
}) {
  return (
    <div
      className={
        mobile
          ? "overflow-hidden rounded-lg border border-slate-200 bg-white"
          : "absolute right-5 top-12 z-20 w-44 overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-lg"
      }
    >
      <button
        onClick={onView}
        className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
      >
        <Eye className="h-4 w-4" />
        View User
      </button>

      <button
        onClick={onEdit}
        className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
      >
        <Edit3 className="h-4 w-4" />
        Edit User
      </button>

      <button
        onClick={onToggleStatus}
        className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
      >
        {user.status === "Suspended" ? (
          <UserCheck className="h-4 w-4" />
        ) : (
          <UserMinus className="h-4 w-4" />
        )}
        {user.status === "Suspended" ? "Activate User" : "Suspend User"}
      </button>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 truncate text-sm text-slate-700">{value}</p>
    </div>
  );
}
