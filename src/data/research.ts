export type ResearchItem = {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  summary: string;
  tags: string[];
  content: string[];
};

export const researchData: ResearchItem[] = [
  {
    id: "antarctic-ice-shelf",
    title: "Impact of Climate Change on Antarctic Ice Shelf",
    category: "Climate & Environment",
    date: "12 Aug 2024",
    author: "Polar Research Team",
    image:
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Explore observations and research surrounding changes in Antarctic ice shelves and their connection with the changing polar climate.",
    tags: ["Climate", "Antarctica", "Research"],
    content: [
      "Antarctic ice shelves play an important role in the polar environment by connecting land-based ice with the surrounding ocean.",
      "Scientific observations help researchers understand changes in ice shelf structure, ocean conditions and the wider effects of climate change.",
      "Long-term monitoring and field research are essential for understanding these changes and improving our knowledge of the polar environment.",
    ],
  },
  {
    id: "polar-biodiversity",
    title: "Biodiversity of the Polar Regions",
    category: "Biodiversity",
    date: "08 Aug 2024",
    author: "Polar Biodiversity Group",
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Discover the unique species and ecosystems that exist across the Arctic and Antarctic regions.",
    tags: ["Wildlife", "Ecosystem", "Polar"],
    content: [
      "Polar ecosystems support highly specialised organisms that have adapted to extreme environmental conditions.",
      "Changes in temperature, sea ice and food availability can influence the distribution and behaviour of polar species.",
      "Researchers continue to study these ecosystems to understand biodiversity and the long-term effects of environmental change.",
    ],
  },
  {
    id: "indian-polar-research",
    title: "India's Journey in Polar Research",
    category: "Research",
    date: "02 Aug 2024",
    author: "Indian Polar Research Community",
    image:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Learn about India's scientific programmes, expeditions and contribution to polar research.",
    tags: ["India", "Research", "Expedition"],
    content: [
      "India has developed a long-standing scientific presence in polar regions through research programmes and expeditions.",
      "Indian researchers conduct studies across disciplines including atmospheric science, glaciology, biology and oceanography.",
      "Polar research contributes to a broader understanding of Earth's climate system and environmental processes.",
    ],
  },
  {
    id: "antarctic-ecosystem",
    title: "Understanding Antarctic Ecosystems",
    category: "Science",
    date: "28 Jul 2024",
    author: "Polar Science Team",
    image:
      "https://images.unsplash.com/photo-1551415923-a2297c7fda79?auto=format&fit=crop&w=1200&q=80",
    summary:
      "An introduction to the interconnected ecosystems found across Antarctica.",
    tags: ["Science", "Ecosystem"],
    content: [
      "Antarctic ecosystems are closely connected through marine and terrestrial processes.",
      "Tiny organisms form the foundation of food webs that support larger marine species.",
      "Understanding these connections helps researchers study how environmental changes may affect the polar ecosystem.",
    ],
  },
];