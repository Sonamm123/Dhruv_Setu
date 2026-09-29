export type SubmissionStatus =
  | "Awaiting Review"
  | "Pre-check Complete"
  | "Correction Requested"
  | "Approved";

export type SubmissionType =
  | "Research"
  | "Report"
  | "Dataset"
  | "Publication";

export type Submission = {
  id: string;
  title: string;
  researcher: string;
  researcherInitials: string;
  institution: string;
  type: SubmissionType;
  researchArea: string;
  polarRegion: "Arctic" | "Antarctica" | "Both";
  submittedDate: string;
  status: SubmissionStatus;
  preCheck: "Passed" | "Warnings" | "Pending";
  priority: "High" | "Normal";
};

export const submissions: Submission[] = [
  {
    id: "SUB-2026-0142",
    title: "Sea Ice Thickness Study",
    researcher: "Dr. Aditi Sharma",
    researcherInitials: "AS",
    institution: "NCPOR",
    type: "Research",
    researchArea: "Climate Science",
    polarRegion: "Antarctica",
    submittedDate: "24 Sep 2026",
    status: "Pre-check Complete",
    preCheck: "Passed",
    priority: "High",
  },
  {
    id: "SUB-2026-0141",
    title: "Bharati Station Annual Report",
    researcher: "Dr. Rahul Kumar",
    researcherInitials: "RK",
    institution: "National Institute of Oceanography",
    type: "Report",
    researchArea: "Earth Sciences",
    polarRegion: "Antarctica",
    submittedDate: "23 Sep 2026",
    status: "Awaiting Review",
    preCheck: "Passed",
    priority: "High",
  },
  {
    id: "SUB-2026-0138",
    title: "Bharati Station Dataset",
    researcher: "Dr. Meera Sen",
    researcherInitials: "MS",
    institution: "University Research Centre",
    type: "Dataset",
    researchArea: "Polar Biology",
    polarRegion: "Arctic",
    submittedDate: "22 Sep 2026",
    status: "Awaiting Review",
    preCheck: "Warnings",
    priority: "Normal",
  },
  {
    id: "SUB-2026-0135",
    title: "Antarctic Microbial Diversity",
    researcher: "Dr. Vikram Singh",
    researcherInitials: "VS",
    institution: "IIT Delhi",
    type: "Research",
    researchArea: "Polar Biology",
    polarRegion: "Antarctica",
    submittedDate: "20 Sep 2026",
    status: "Correction Requested",
    preCheck: "Warnings",
    priority: "Normal",
  },
  {
    id: "SUB-2026-0132",
    title: "Oceanographic Observations 2025",
    researcher: "Dr. Neha Verma",
    researcherInitials: "NV",
    institution: "NIO",
    type: "Dataset",
    researchArea: "Oceanography",
    polarRegion: "Both",
    submittedDate: "18 Sep 2026",
    status: "Awaiting Review",
    preCheck: "Passed",
    priority: "Normal",
  },
  {
    id: "SUB-2026-0128",
    title: "Polar Atmospheric Chemistry",
    researcher: "Dr. Arjun Mehta",
    researcherInitials: "AM",
    institution: "IISc Bangalore",
    type: "Publication",
    researchArea: "Atmospheric Science",
    polarRegion: "Arctic",
    submittedDate: "16 Sep 2026",
    status: "Approved",
    preCheck: "Passed",
    priority: "Normal",
  },
  {
    id: "SUB-2026-0124",
    title: "Glacial Mass Balance Analysis",
    researcher: "Dr. Priya Nair",
    researcherInitials: "PN",
    institution: "IIT Madras",
    type: "Research",
    researchArea: "Climate Science",
    polarRegion: "Antarctica",
    submittedDate: "14 Sep 2026",
    status: "Awaiting Review",
    preCheck: "Passed",
    priority: "Normal",
  },
];
