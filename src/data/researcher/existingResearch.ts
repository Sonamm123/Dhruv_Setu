export type ResearchStatus =
  | "Published"
  | "Under Review"
  | "Draft";

export type ResearchRecord = {
  id: string;
  title: string;
  researchArea: string;
  region: string;
  station: string;
  period: string;
  status: ResearchStatus;
  authors: string[];
  summary: string;
  source: string;
  keywords: string[];
  linkedContent: {
    title: string;
    type: "Report" | "Dataset" | "Publication" | "Media";
  }[];
};

export const existingResearch: ResearchRecord[] = [
  {
    id: "sea-ice-thickness-2024",
    title: "Sea Ice Thickness Study 2024",
    researchArea: "Climate Science",
    region: "Antarctica",
    station: "Maitri",
    period: "2024",
    status: "Published",
    authors: [
      "Dr. Rakesh Kumar",
      "Dr. Ananya Sharma",
    ],
    summary:
      "A study analysing seasonal changes in Antarctic sea ice thickness using field observations and satellite-derived measurements.",
    source: "NCPOR / Polar Research Archive",
    keywords: [
      "Sea Ice",
      "Climate",
      "Antarctica",
      "Satellite Data",
    ],
    linkedContent: [
      {
        title: "Preliminary Sea Ice Analysis Report",
        type: "Report",
      },
      {
        title: "Antarctic Sea Ice Dataset 2024",
        type: "Dataset",
      },
    ],
  },
  {
    id: "polar-biodiversity-assessment",
    title: "Polar Biodiversity Assessment",
    researchArea: "Polar Biology",
    region: "Arctic",
    station: "Himadri",
    period: "2023–2024",
    status: "Published",
    authors: [
      "Dr. Meera Nair",
      "Dr. Prakash Menon",
    ],
    summary:
      "Assessment of biodiversity patterns across polar ecosystems with emphasis on species adaptation and environmental change.",
    source: "National Centre for Polar and Ocean Research",
    keywords: [
      "Biodiversity",
      "Arctic",
      "Ecology",
      "Species",
    ],
    linkedContent: [
      {
        title: "Polar Biodiversity Field Report",
        type: "Report",
      },
      {
        title: "Species Observation Dataset",
        type: "Dataset",
      },
    ],
  },
  {
    id: "bharati-station-dataset",
    title: "Bharati Station Dataset",
    researchArea: "Earth Sciences",
    region: "Antarctica",
    station: "Bharati",
    period: "2022–2024",
    status: "Under Review",
    authors: [
      "Dr. Vikram Singh",
      "Dr. Neha Gupta",
    ],
    summary:
      "A consolidated research dataset containing environmental and geophysical observations collected around Bharati Research Station.",
    source: "Indian Antarctic Research Programme",
    keywords: [
      "Dataset",
      "Geophysics",
      "Environment",
      "Bharati",
    ],
    linkedContent: [
      {
        title: "Bharati Environmental Observations",
        type: "Dataset",
      },
      {
        title: "Geophysical Research Summary",
        type: "Publication",
      },
    ],
  },
  {
    id: "antarctic-ecosystem-study",
    title: "Antarctic Ecosystem Study",
    researchArea: "Marine Biology",
    region: "Antarctica",
    station: "Maitri",
    period: "2021–2023",
    status: "Published",
    authors: [
      "Dr. Arjun Rao",
      "Dr. Kavita Iyer",
    ],
    summary:
      "Long-term observations of Antarctic marine ecosystems examining ecosystem interactions and environmental variability.",
    source: "Polar Marine Research Programme",
    keywords: [
      "Marine Biology",
      "Ecosystem",
      "Ocean",
      "Antarctica",
    ],
    linkedContent: [
      {
        title: "Antarctic Marine Research Report",
        type: "Report",
      },
      {
        title: "Marine Ecosystem Publication",
        type: "Publication",
      },
    ],
  },
  {
    id: "arctic-atmospheric-study",
    title: "Arctic Atmospheric Observation Study",
    researchArea: "Atmospheric Science",
    region: "Arctic",
    station: "Himadri",
    period: "2024–2025",
    status: "Draft",
    authors: [
      "Dr. Rahul Verma",
    ],
    summary:
      "Research examining atmospheric conditions and changing weather patterns observed during an Arctic research campaign.",
    source: "Polar Atmospheric Research Group",
    keywords: [
      "Atmosphere",
      "Weather",
      "Arctic",
      "Climate",
    ],
    linkedContent: [
      {
        title: "Arctic Atmospheric Observation Data",
        type: "Dataset",
      },
    ],
  },
];
