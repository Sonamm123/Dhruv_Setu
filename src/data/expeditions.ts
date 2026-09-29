export type Expedition = {
  id: string;
  title: string;
  location: string;
  status: "Upcoming" | "Ongoing" | "Completed";
  date: string;
  duration: string;
  image: string;
  description: string;
  objectives: string[];
  timeline: {
    phase: string;
    description: string;
  }[];
};

export const expeditionData: Expedition[] = [
  {
    id: "maitri-expedition",
    title: "Maitri Research Expedition",
    location: "Antarctica",
    status: "Ongoing",
    date: "2024–2025",
    duration: "12 Months",
    image:
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1200&q=80",
    description:
      "A scientific expedition focused on atmospheric, environmental and geological research in the Antarctic region.",
    objectives: [
      "Study Antarctic atmospheric conditions",
      "Monitor environmental changes",
      "Collect scientific field observations",
      "Support long-term polar research",
    ],
    timeline: [
      {
        phase: "Planning",
        description: "Research objectives and field requirements are prepared.",
      },
      {
        phase: "Deployment",
        description: "Researchers and equipment are deployed to the field.",
      },
      {
        phase: "Field Research",
        description: "Scientific observations and sample collection are conducted.",
      },
      {
        phase: "Analysis",
        description: "Collected observations are analysed and documented.",
      },
    ],
  },
  {
    id: "arctic-research",
    title: "Arctic Research Programme",
    location: "Arctic Region",
    status: "Upcoming",
    date: "2025–2026",
    duration: "10 Months",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    description:
      "An interdisciplinary programme designed to investigate climate, ocean and ecosystem changes in the Arctic.",
    objectives: [
      "Study Arctic climate patterns",
      "Monitor ocean conditions",
      "Document biodiversity",
      "Develop long-term observations",
    ],
    timeline: [
      {
        phase: "Preparation",
        description: "Teams prepare research plans and equipment.",
      },
      {
        phase: "Expedition",
        description: "Field teams conduct observations across selected locations.",
      },
      {
        phase: "Data Collection",
        description: "Scientific measurements and samples are collected.",
      },
      {
        phase: "Reporting",
        description: "Results are compiled into research reports.",
      },
    ],
  },
  {
    id: "polar-ocean-study",
    title: "Polar Ocean Observation Mission",
    location: "Southern Ocean",
    status: "Completed",
    date: "2023–2024",
    duration: "8 Months",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    description:
      "A marine research mission focused on understanding ocean conditions and their relationship with polar ecosystems.",
    objectives: [
      "Observe ocean temperature",
      "Study marine ecosystems",
      "Collect oceanographic data",
      "Support climate research",
    ],
    timeline: [
      {
        phase: "Survey",
        description: "Research locations are identified and surveyed.",
      },
      {
        phase: "Observation",
        description: "Oceanographic observations are collected.",
      },
      {
        phase: "Data Processing",
        description: "Collected data is processed and organised.",
      },
      {
        phase: "Completion",
        description: "Mission findings are documented and archived.",
      },
    ],
  },
];