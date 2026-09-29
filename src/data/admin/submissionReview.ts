export type ReviewDecision =
  | "Approved"
  | "Correction Requested"
  | "Rejected";

export type ReviewSubmission = {
  id: string;
  title: string;
  type: string;
  researcher: string;
  researcherInitials: string;
  institution: string;
  email: string;
  department: string;
  researchArea: string;
  polarRegion: string;
  submittedDate: string;
  abstract: string;
  keywords: string[];
  files: {
    name: string;
    type: string;
    size: string;
  }[];
  checks: {
    label: string;
    status: "Passed" | "Warning";
    detail: string;
  }[];
  relatedWork: string[];
};

export const reviewSubmissions: ReviewSubmission[] = [
  {
    id: "SUB-2026-0142",
    title: "Sea Ice Thickness Study",
    type: "Research",
    researcher: "Dr. Aditi Sharma",
    researcherInitials: "AS",
    institution: "National Centre for Polar and Ocean Research",
    email: "aditi.sharma@ncpor.res.in",
    department: "Polar Oceanography",
    researchArea: "Climate Science",
    polarRegion: "Antarctica",
    submittedDate: "24 Sep 2026",
    abstract:
      "This study analyses seasonal variations in Antarctic sea ice thickness using field observations and satellite-derived measurements. The work combines expedition observations with historical datasets to understand regional changes and their relationship with atmospheric and oceanographic conditions.",
    keywords: [
      "Sea Ice",
      "Antarctica",
      "Climate Change",
      "Remote Sensing",
    ],
    files: [
      {
        name: "sea-ice-thickness-study.pdf",
        type: "PDF",
        size: "4.8 MB",
      },
      {
        name: "antarctic-observations.csv",
        type: "CSV",
        size: "12.4 MB",
      },
      {
        name: "supplementary-methodology.pdf",
        type: "PDF",
        size: "1.7 MB",
      },
    ],
    checks: [
      {
        label: "Required metadata",
        status: "Passed",
        detail: "All mandatory metadata fields are complete.",
      },
      {
        label: "File validation",
        status: "Passed",
        detail: "All uploaded files are readable and supported.",
      },
      {
        label: "Researcher verification",
        status: "Passed",
        detail: "Researcher affiliation has been verified.",
      },
      {
        label: "Duplicate content scan",
        status: "Warning",
        detail:
          "A similar title was found in an older repository entry.",
      },
      {
        label: "Content safety check",
        status: "Passed",
        detail: "No restricted content was detected.",
      },
    ],
    relatedWork: [
      "Antarctic Sea Ice Monitoring — 2024",
      "Southern Ocean Climate Observations — 2025",
    ],
  },

  {
    id: "SUB-2026-0141",
    title: "Bharati Station Annual Report",
    type: "Report",
    researcher: "Dr. Rahul Kumar",
    researcherInitials: "RK",
    institution: "National Institute of Oceanography",
    email: "rahul.kumar@nio.org",
    department: "Marine Geoscience",
    researchArea: "Earth Sciences",
    polarRegion: "Antarctica",
    submittedDate: "23 Sep 2026",
    abstract:
      "Annual scientific and operational report covering observations, environmental measurements, station activities and research outcomes from Bharati Station during the latest expedition cycle.",
    keywords: [
      "Bharati Station",
      "Antarctica",
      "Expedition",
      "Earth Sciences",
    ],
    files: [
      {
        name: "bharati-annual-report.pdf",
        type: "PDF",
        size: "8.2 MB",
      },
      {
        name: "station-observations.xlsx",
        type: "XLSX",
        size: "3.1 MB",
      },
    ],
    checks: [
      {
        label: "Required metadata",
        status: "Passed",
        detail: "All mandatory metadata fields are complete.",
      },
      {
        label: "File validation",
        status: "Passed",
        detail: "Uploaded files passed format validation.",
      },
      {
        label: "Researcher verification",
        status: "Warning",
        detail:
          "Affiliation information requires final administrative confirmation.",
      },
      {
        label: "Duplicate content scan",
        status: "Passed",
        detail: "No significant duplicate content detected.",
      },
      {
        label: "Content safety check",
        status: "Passed",
        detail: "No restricted content was detected.",
      },
    ],
    relatedWork: [
      "Bharati Station Research Archive",
      "Indian Antarctic Expedition Reports",
    ],
  },

  {
    id: "SUB-2026-0138",
    title: "Bharati Station Dataset",
    type: "Dataset",
    researcher: "Dr. Meera Sen",
    researcherInitials: "MS",
    institution: "University Research Centre",
    email: "meera.sen@urc.edu.in",
    department: "Polar Ecology",
    researchArea: "Polar Biology",
    polarRegion: "Arctic",
    submittedDate: "22 Sep 2026",
    abstract:
      "A structured dataset containing environmental observations and biological measurements collected during polar field research. The dataset is intended to support comparative studies of polar ecosystems.",
    keywords: [
      "Polar Biology",
      "Dataset",
      "Ecosystem",
      "Environmental Data",
    ],
    files: [
      {
        name: "bharati-biological-observations.csv",
        type: "CSV",
        size: "24.6 MB",
      },
      {
        name: "dataset-documentation.pdf",
        type: "PDF",
        size: "2.2 MB",
      },
    ],
    checks: [
      {
        label: "Required metadata",
        status: "Passed",
        detail: "All mandatory metadata fields are complete.",
      },
      {
        label: "File validation",
        status: "Warning",
        detail:
          "Some dataset fields require manual schema verification.",
      },
      {
        label: "Researcher verification",
        status: "Passed",
        detail: "Researcher credentials are verified.",
      },
      {
        label: "Duplicate content scan",
        status: "Passed",
        detail: "No significant duplicate content detected.",
      },
      {
        label: "Content safety check",
        status: "Passed",
        detail: "No restricted content was detected.",
      },
    ],
    relatedWork: [
      "Polar Biodiversity Observations",
      "Indian Polar Ecology Dataset",
    ],
  },
];

export function getReviewSubmission(id: string) {
  return reviewSubmissions.find((submission) => submission.id === id);
}
