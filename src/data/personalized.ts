export type PersonalizedContent = {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
};

export const personalizedContent: PersonalizedContent[] = [
  {
    id: "antarctic-ice-shelf",
    title: "Impact of Climate Change on Antarctic Ice Shelf",
    category: "Climate & Environment",
    date: "12 Aug 2024",
    description:
      "Explore recent observations and research surrounding changes in Antarctic ice shelves and polar climate.",
    image:
      "https://images.unsplash.com/photo-1517783992600-8c5c2b9f1d67?auto=format&fit=crop&w=800&q=80",
    tags: ["Climate", "Antarctica", "Research"],
  },
  {
    id: "polar-biodiversity",
    title: "Biodiversity of the Polar Regions",
    category: "Biodiversity",
    date: "08 Aug 2024",
    description:
      "Discover the unique species and ecosystems that exist across the Arctic and Antarctic regions.",
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&q=80",
    tags: ["Wildlife", "Ecosystem", "Polar"],
  },
  {
    id: "indian-polar-research",
    title: "India's Journey in Polar Research",
    category: "Research",
    date: "02 Aug 2024",
    description:
      "Learn about India's scientific programmes, expeditions and contribution to polar research.",
    image:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80",
    tags: ["India", "Research", "Expedition"],
  },
  {
    id: "antarctic-ecosystem",
    title: "Understanding Antarctic Ecosystems",
    category: "Science",
    date: "28 Jul 2024",
    description:
      "An introduction to the interconnected ecosystems found across Antarctica.",
    image:
      "https://images.unsplash.com/photo-1551415923-a2297c7fda79?auto=format&fit=crop&w=800&q=80",
    tags: ["Science", "Ecosystem"],
  },
  {
    id: "polar-ocean",
    title: "The Changing Polar Ocean",
    category: "Ocean & Climate",
    date: "21 Jul 2024",
    description:
      "Understand how changing ocean conditions influence polar environments and marine ecosystems.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    tags: ["Ocean", "Climate"],
  },
  {
    id: "polar-expedition",
    title: "Inside an Indian Polar Expedition",
    category: "Expeditions",
    date: "15 Jul 2024",
    description:
      "Take a closer look at the preparation, fieldwork and scientific objectives of a polar expedition.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
    tags: ["Expedition", "India", "Fieldwork"],
  },
];