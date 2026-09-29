export type VerificationStatus =
  | "Pending"
  | "Verified"
  | "Needs Information";

export type ResearcherApplication = {
  id: string;
  name: string;
  initials: string;
  institution: string;
  email: string;
  department: string;
  researchArea: string;
  polarRegion: string;
  role: string;
  submittedDate: string;
  status: VerificationStatus;
  documents: {
    name: string;
    type: string;
    status: "Verified" | "Pending";
  }[];
  notes: string;
};

export const researcherApplications: ResearcherApplication[] = [
  {
    id: "RES-2026-0042",
    name: "Dr. Aditi Sharma",
    initials: "AS",
    institution: "National Centre for Polar and Ocean Research",
    email: "aditi.sharma@ncpor.res.in",
    department: "Polar Oceanography",
    researchArea: "Climate Science",
    polarRegion: "Antarctica",
    role: "Research Scientist",
    submittedDate: "18 Sep 2026",
    status: "Pending",
    documents: [
      {
        name: "Institutional ID",
        type: "PDF",
        status: "Verified",
      },
      {
        name: "Researcher Affiliation Letter",
        type: "PDF",
        status: "Verified",
      },
      {
        name: "Research Credentials",
        type: "PDF",
        status: "Pending",
      },
    ],
    notes: "",
  },
  {
    id: "RES-2026-0041",
    name: "Dr. Rahul Kumar",
    initials: "RK",
    institution: "National Institute of Oceanography",
    email: "rahul.kumar@nio.org",
    department: "Marine Geoscience",
    researchArea: "Earth Sciences",
    polarRegion: "Antarctica",
    role: "Senior Research Fellow",
    submittedDate: "17 Sep 2026",
    status: "Needs Information",
    documents: [
      {
        name: "Institutional ID",
        type: "PDF",
        status: "Verified",
      },
      {
        name: "Researcher Affiliation Letter",
        type: "PDF",
        status: "Pending",
      },
      {
        name: "Research Credentials",
        type: "PDF",
        status: "Verified",
      },
    ],
    notes:
      "Please provide an updated institutional affiliation letter.",
  },
  {
    id: "RES-2026-0040",
    name: "Dr. Meera Sen",
    initials: "MS",
    institution: "University Research Centre",
    email: "meera.sen@urc.edu.in",
    department: "Polar Ecology",
    researchArea: "Polar Biology",
    polarRegion: "Arctic",
    role: "Research Associate",
    submittedDate: "16 Sep 2026",
    status: "Pending",
    documents: [
      {
        name: "Institutional ID",
        type: "PDF",
        status: "Verified",
      },
      {
        name: "Researcher Affiliation Letter",
        type: "PDF",
        status: "Verified",
      },
      {
        name: "Research Credentials",
        type: "PDF",
        status: "Verified",
      },
    ],
    notes: "",
  },
];
