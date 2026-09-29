export type LearnItem = {
  id: string;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  image: string;
  description: string;
  topics: string[];
};

export const learnData: LearnItem[] = [
  {
    id: "polar-science-basics",
    title: "Introduction to Polar Science",
    category: "Polar Science",
    level: "Beginner",
    duration: "15 min",
    image:
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1000&q=80",
    description:
      "Understand the fundamentals of polar science and why the Arctic and Antarctic are important to Earth's systems.",
    topics: ["Polar Regions", "Earth Science", "Research"],
  },
  {
    id: "climate-change-poles",
    title: "Climate Change in Polar Regions",
    category: "Climate",
    level: "Beginner",
    duration: "20 min",
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1000&q=80",
    description:
      "Learn how climate change affects ice, oceans, ecosystems and communities in polar regions.",
    topics: ["Climate", "Ice", "Ocean"],
  },
  {
    id: "antarctic-ecosystems",
    title: "Understanding Antarctic Ecosystems",
    category: "Biodiversity",
    level: "Intermediate",
    duration: "25 min",
    image:
      "https://images.unsplash.com/photo-1551415923-a2297c7fda79?auto=format&fit=crop&w=1000&q=80",
    description:
      "Explore Antarctic food webs, species interactions and adaptations to extreme environments.",
    topics: ["Ecosystems", "Wildlife", "Adaptation"],
  },
  {
    id: "polar-expedition-guide",
    title: "How Polar Expeditions Work",
    category: "Expeditions",
    level: "Beginner",
    duration: "18 min",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80",
    description:
      "Discover how scientific expeditions are planned, organised and conducted in challenging polar environments.",
    topics: ["Expedition", "Fieldwork", "Logistics"],
  },
  {
    id: "glaciology",
    title: "Fundamentals of Glaciology",
    category: "Polar Science",
    level: "Advanced",
    duration: "35 min",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Learn how scientists study glaciers, ice sheets and changes in frozen environments.",
    topics: ["Glaciers", "Ice Sheets", "Research"],
  },
  {
    id: "polar-oceanography",
    title: "Polar Oceans and Their Role",
    category: "Ocean",
    level: "Intermediate",
    duration: "28 min",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    description:
      "Understand the role of polar oceans in climate systems and marine ecosystems.",
    topics: ["Ocean", "Climate", "Marine Science"],
  },
];