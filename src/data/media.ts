export type MediaItem = {
  id: string;
  title: string;
  type: "Image" | "Video";
  category: string;
  date: string;
  image: string;
  description: string;
};

export const mediaData: MediaItem[] = [
  {
    id: "antarctic-landscape",
    title: "Antarctic Landscape",
    type: "Image",
    category: "Antarctica",
    date: "18 Aug 2024",
    image:
      "https://images.unsplash.com/photo-1517783992600-8c5c2b9f1d67?auto=format&fit=crop&w=1000&q=80",
    description:
      "A visual exploration of the Antarctic landscape and its extreme polar environment.",
  },
  {
    id: "polar-research-station",
    title: "Inside a Polar Research Station",
    type: "Image",
    category: "Research",
    date: "12 Aug 2024",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80",
    description:
      "Explore the environment and infrastructure supporting scientific research in polar regions.",
  },
  {
    id: "arctic-ice",
    title: "Arctic Ice and Ocean",
    type: "Image",
    category: "Climate",
    date: "05 Aug 2024",
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1000&q=80",
    description:
      "A closer look at Arctic ice and the surrounding marine environment.",
  },
  {
    id: "polar-expedition",
    title: "Indian Polar Expedition",
    type: "Video",
    category: "Expeditions",
    date: "29 Jul 2024",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Follow researchers as they prepare for scientific fieldwork during a polar expedition.",
  },
  {
    id: "antarctic-wildlife",
    title: "Life in Antarctica",
    type: "Video",
    category: "Biodiversity",
    date: "21 Jul 2024",
    image:
      "https://images.unsplash.com/photo-1551415923-a2297c7fda79?auto=format&fit=crop&w=1000&q=80",
    description:
      "Discover the wildlife and ecosystems that survive in one of Earth's most extreme environments.",
  },
  {
    id: "polar-ocean",
    title: "Polar Ocean Research",
    type: "Image",
    category: "Ocean",
    date: "15 Jul 2024",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    description:
      "Scientific observations from the polar oceans and surrounding marine ecosystems.",
  },
];