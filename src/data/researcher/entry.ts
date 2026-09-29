export const entryTypes = [
  "Research",
  "Report",
  "Dataset",
  "Publication",
  "Expedition",
  "Image / Video",
] as const;

export type EntryType = (typeof entryTypes)[number];

export const contentTypes = [
  "Report",
  "Dataset",
  "Publication",
  "Images",
  "Videos",
] as const;

export type ContentType = (typeof contentTypes)[number];

export type ResearcherContent = {
  id: string;
  type: ContentType;
  title: string;
  description: string;
  fileName: string;
  fileSize: number;
};

export type ResearcherEntry = {
  entryType: EntryType;
  title: string;
  researchArea: string;
  polarRegion: string;
  researchStation: string;
  datePeriod: string;
  authors: string;
  summary: string;
  sourceIdentifier: string;
  keywords: string[];
  contents: ResearcherContent[];
  relatedResearchIds: string[];
};

export const initialResearcherEntry: ResearcherEntry = {
  entryType: "Research",
  title: "",
  researchArea: "",
  polarRegion: "",
  researchStation: "",
  datePeriod: "",
  authors: "",
  summary: "",
  sourceIdentifier: "",
  keywords: [],
  contents: [],
  relatedResearchIds: [],
};

export const researchAreas = [
  "Climate Science",
  "Polar Biology",
  "Earth Sciences",
  "Marine Biology",
  "Atmospheric Science",
  "Oceanography",
  "Geophysics",
];

export const polarRegions = [
  "Antarctica",
  "Arctic",
  "Southern Ocean",
  "Polar Regions",
];

export const researchStations = [
  "Maitri",
  "Bharati",
  "Himadri",
  "Other / Not Applicable",
];