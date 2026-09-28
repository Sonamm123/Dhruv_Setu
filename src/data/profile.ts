export type ProfileStat = {
  label: string;
  value: string;
  description: string;
};

export const profileStats: ProfileStat[] = [
  {
    label: "Learning",
    value: "12",
    description: "Resources explored",
  },
  {
    label: "Research",
    value: "8",
    description: "Research articles read",
  },
  {
    label: "Expeditions",
    value: "5",
    description: "Expeditions explored",
  },
  {
    label: "Saved",
    value: "14",
    description: "Items saved",
  },
];

export const savedTopics = [
  "Polar Science",
  "Climate Change",
  "Antarctic Biodiversity",
  "Indian Polar Research",
];

export const recentActivity = [
  {
    title: "Impact of Climate Change on Antarctic Ice Shelf",
    type: "Research",
    date: "Today",
  },
  {
    title: "Introduction to Polar Science",
    type: "Learning",
    date: "Yesterday",
  },
  {
    title: "Maitri Research Expedition",
    type: "Expedition",
    date: "2 days ago",
  },
  {
    title: "Antarctic Landscape",
    type: "Media",
    date: "4 days ago",
  },
];