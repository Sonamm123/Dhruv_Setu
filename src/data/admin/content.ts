export type ContentStatus =
  | "Published"
  | "Under Review"
  | "Draft"
  | "Archived";

export type ContentType =
  | "Research"
  | "Report"
  | "Dataset"
  | "Publication"
  | "Media";

export type ManagedContent = {
  id: string;
  title: string;
  type: ContentType;
  researcher: string;
  institution: string;
  researchArea: string;
  polarRegion: "Arctic" | "Antarctica" | "Both";
  status: ContentStatus;
  publishedDate: string;
  views: number;
  downloads: number;
};

export const managedContent: ManagedContent[] = [
  {
    id: "RES-2026-0118",
    title: "Antarctic Sea Ice Observation Report",
    type: "Research",
    researcher: "Dr. Aditi Sharma",
    institution: "NCPOR",
    researchArea: "Climate Science",
    polarRegion: "Antarctica",
    status: "Published",
    publishedDate: "24 Sep 2026",
    views: 1284,
    downloads: 342,
  },
  {
    id: "RES-2026-0115",
    title: "Bharati Station Annual Report 2025–26",
    type: "Report",
    researcher: "Dr. Rahul Kumar",
    institution: "NIO",
    researchArea: "Earth Sciences",
    polarRegion: "Antarctica",
    status: "Published",
    publishedDate: "22 Sep 2026",
    views: 946,
    downloads: 218,
  },
  {
    id: "RES-2026-0109",
    title: "Bharati Station Oceanographic Dataset",
    type: "Dataset",
    researcher: "Dr. Meera Sen",
    institution: "University Research Centre",
    researchArea: "Oceanography",
    polarRegion: "Antarctica",
    status: "Published",
    publishedDate: "20 Sep 2026",
    views: 731,
    downloads: 187,
  },
  {
    id: "RES-2026-0104",
    title: "Antarctic Microbial Diversity",
    type: "Research",
    researcher: "Dr. Vikram Singh",
    institution: "IIT Delhi",
    researchArea: "Polar Biology",
    polarRegion: "Antarctica",
    status: "Under Review",
    publishedDate: "—",
    views: 0,
    downloads: 0,
  },
  {
    id: "RES-2026-0098",
    title: "Polar Atmospheric Chemistry",
    type: "Publication",
    researcher: "Dr. Arjun Mehta",
    institution: "IISc Bangalore",
    researchArea: "Atmospheric Science",
    polarRegion: "Arctic",
    status: "Published",
    publishedDate: "16 Sep 2026",
    views: 1102,
    downloads: 276,
  },
  {
    id: "RES-2026-0092",
    title: "Expedition 42 Field Photography",
    type: "Media",
    researcher: "Dr. Priya Nair",
    institution: "IIT Madras",
    researchArea: "Climate Science",
    polarRegion: "Antarctica",
    status: "Draft",
    publishedDate: "—",
    views: 0,
    downloads: 0,
  },
  {
    id: "RES-2026-0086",
    title: "Glacial Mass Balance Analysis",
    type: "Research",
    researcher: "Dr. Priya Nair",
    institution: "IIT Madras",
    researchArea: "Climate Science",
    polarRegion: "Antarctica",
    status: "Archived",
    publishedDate: "12 Sep 2026",
    views: 542,
    downloads: 94,
  },
];
