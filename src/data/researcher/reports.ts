export type ReportStatus =
  | "Published"
  | "Under Review"
  | "Draft"
  | "Needs Changes";

export type ResearchReport = {
  id: string;
  title: string;
  reportType: string;
  researchArea: string;
  region: string;
  station: string;
  date: string;
  status: ReportStatus;
  authors: string[];
  summary: string;
  linkedResearch: string;
  pages: number;
  keywords: string[];
};

export const researchReports: ResearchReport[] = [
  {
    id: "report-sea-ice-2024",
    title: "Preliminary Sea Ice Analysis Report",
    reportType: "Research Report",
    researchArea: "Climate Science",
    region: "Antarctica",
    station: "Maitri",
    date: "18 June 2024",
    status: "Published",
    authors: ["Dr. Rakesh Kumar", "Dr. Ananya Sharma"],
    summary:
      "Preliminary analysis of seasonal sea ice thickness observations collected during the 2024 Antarctic research campaign.",
    linkedResearch: "Sea Ice Thickness Study 2024",
    pages: 42,
    keywords: ["Sea Ice", "Climate", "Antarctica", "Satellite Data"],
  },
  {
    id: "report-bharati-environment",
    title: "Bharati Environmental Observations Report",
    reportType: "Technical Report",
    researchArea: "Earth Sciences",
    region: "Antarctica",
    station: "Bharati",
    date: "12 March 2025",
    status: "Under Review",
    authors: ["Dr. Vikram Singh", "Dr. Neha Gupta"],
    summary:
      "Technical report documenting environmental and geophysical observations collected around Bharati Research Station.",
    linkedResearch: "Bharati Station Dataset",
    pages: 68,
    keywords: ["Environment", "Geophysics", "Bharati", "Observations"],
  },
  {
    id: "report-biodiversity",
    title: "Polar Biodiversity Field Report",
    reportType: "Field Report",
    researchArea: "Polar Biology",
    region: "Arctic",
    station: "Himadri",
    date: "24 November 2024",
    status: "Published",
    authors: ["Dr. Meera Nair", "Dr. Prakash Menon"],
    summary:
      "Field observations documenting biodiversity patterns and species adaptation across Arctic ecosystems.",
    linkedResearch: "Polar Biodiversity Assessment",
    pages: 35,
    keywords: ["Biodiversity", "Arctic", "Ecology", "Species"],
  },
  {
    id: "report-marine-ecosystem",
    title: "Antarctic Marine Research Report",
    reportType: "Research Report",
    researchArea: "Marine Biology",
    region: "Antarctica",
    station: "Maitri",
    date: "08 August 2023",
    status: "Published",
    authors: ["Dr. Arjun Rao", "Dr. Kavita Iyer"],
    summary:
      "Long-term observations of Antarctic marine ecosystems and interactions between environmental conditions and marine biodiversity.",
    linkedResearch: "Antarctic Ecosystem Study",
    pages: 57,
    keywords: ["Marine Biology", "Ecosystem", "Ocean", "Antarctica"],
  },
  {
    id: "report-atmospheric",
    title: "Arctic Atmospheric Observation Report",
    reportType: "Technical Report",
    researchArea: "Atmospheric Science",
    region: "Arctic",
    station: "Himadri",
    date: "16 January 2026",
    status: "Draft",
    authors: ["Dr. Rahul Verma"],
    summary:
      "Research report analysing atmospheric conditions and changing weather patterns observed during an Arctic research campaign.",
    linkedResearch: "Arctic Atmospheric Observation Study",
    pages: 29,
    keywords: ["Atmosphere", "Weather", "Arctic", "Climate"],
  },
  {
    id: "report-polar-ocean",
    title: "Southern Ocean Observation Report",
    reportType: "Expedition Report",
    researchArea: "Oceanography",
    region: "Southern Ocean",
    station: "Other / Not Applicable",
    date: "05 February 2025",
    status: "Needs Changes",
    authors: ["Dr. Aditya Menon", "Dr. Sneha Rao"],
    summary:
      "Expedition observations covering oceanographic conditions, temperature profiles and water characteristics in the Southern Ocean.",
    linkedResearch: "Southern Ocean Observation Programme",
    pages: 51,
    keywords: ["Oceanography", "Southern Ocean", "Temperature", "Expedition"],
  },
];
