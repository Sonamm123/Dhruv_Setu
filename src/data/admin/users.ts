export type UserRole = "Researcher" | "Administrator" | "Viewer";

export type UserStatus = "Active" | "Suspended" | "Pending";

export type AdminUser = {
  id: string;
  name: string;
  initials: string;
  email: string;
  institution: string;
  role: UserRole;
  status: UserStatus;
  joinedDate: string;
  lastActive: string;
  submissions: number;
};

export const adminUsers: AdminUser[] = [
  {
    id: "USR-2026-001",
    name: "Dr. Aditi Sharma",
    initials: "AS",
    email: "aditi.sharma@ncpor.res.in",
    institution: "NCPOR",
    role: "Researcher",
    status: "Active",
    joinedDate: "12 Aug 2026",
    lastActive: "Today, 10:42 AM",
    submissions: 8,
  },
  {
    id: "USR-2026-002",
    name: "Dr. Rahul Kumar",
    initials: "RK",
    email: "rahul.kumar@nio.org",
    institution: "National Institute of Oceanography",
    role: "Researcher",
    status: "Active",
    joinedDate: "08 Aug 2026",
    lastActive: "Today, 09:18 AM",
    submissions: 5,
  },
  {
    id: "USR-2026-003",
    name: "Dr. Meera Sen",
    initials: "MS",
    email: "meera.sen@urc.edu.in",
    institution: "University Research Centre",
    role: "Researcher",
    status: "Pending",
    joinedDate: "16 Sep 2026",
    lastActive: "Yesterday",
    submissions: 2,
  },
  {
    id: "USR-2026-004",
    name: "Dr. Vikram Singh",
    initials: "VS",
    email: "vikram.singh@iitd.ac.in",
    institution: "IIT Delhi",
    role: "Researcher",
    status: "Suspended",
    joinedDate: "21 Jul 2026",
    lastActive: "18 Sep 2026",
    submissions: 4,
  },
  {
    id: "USR-2026-005",
    name: "Ananya Verma",
    initials: "AV",
    email: "ananya.verma@polarconnect.in",
    institution: "PolarConnect India",
    role: "Administrator",
    status: "Active",
    joinedDate: "02 Jul 2026",
    lastActive: "Today, 11:06 AM",
    submissions: 0,
  },
  {
    id: "USR-2026-006",
    name: "Karan Mehta",
    initials: "KM",
    email: "karan.mehta@example.com",
    institution: "Independent Researcher",
    role: "Viewer",
    status: "Active",
    joinedDate: "29 Aug 2026",
    lastActive: "Yesterday",
    submissions: 0,
  },
  {
    id: "USR-2026-007",
    name: "Dr. Priya Nair",
    initials: "PN",
    email: "priya.nair@iitm.ac.in",
    institution: "IIT Madras",
    role: "Researcher",
    status: "Active",
    joinedDate: "05 Aug 2026",
    lastActive: "22 Sep 2026",
    submissions: 6,
  },
];
