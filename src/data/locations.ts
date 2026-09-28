export type PolarLocation = {
  id: string;
  name: string;
  country: string;
  region: "Arctic" | "Antarctica";
  type: "Research Station" | "Research Centre" | "Expedition Base";
  description: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  focusAreas: string[];
};

export const polarLocations: PolarLocation[] = [
  {
    id: "maitri",
    name: "Maitri Research Station",
    country: "India",
    region: "Antarctica",
    type: "Research Station",
    description:
      "India's permanent research station in Antarctica supporting multidisciplinary polar research.",
    image:
      "https://images.unsplash.com/photo-1517783992600-8c5c2b9f1d67?auto=format&fit=crop&w=900&q=80",
    coordinates: {
      lat: -70.7697,
      lng: 11.7333,
    },
    focusAreas: ["Glaciology", "Atmospheric Science", "Geology"],
  },
  {
    id: "bharati",
    name: "Bharati Research Station",
    country: "India",
    region: "Antarctica",
    type: "Research Station",
    description:
      "An Indian polar research station focused on oceanographic, atmospheric and biological studies.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    coordinates: {
      lat: -69.413,
      lng: 76.187,
    },
    focusAreas: ["Oceanography", "Biology", "Climate"],
  },
  {
    id: "ny-alesund",
    name: "Ny-Ålesund Research Community",
    country: "Norway",
    region: "Arctic",
    type: "Research Centre",
    description:
      "An international Arctic research community supporting studies of climate, atmosphere and ecosystems.",
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=900&q=80",
    coordinates: {
      lat: 78.923,
      lng: 11.923,
    },
    focusAreas: ["Climate", "Atmosphere", "Biodiversity"],
  },
  {
    id: "south-pole",
    name: "Amundsen-Scott South Pole Station",
    country: "United States",
    region: "Antarctica",
    type: "Research Station",
    description:
      "A major scientific facility located at the geographic South Pole supporting year-round research.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",
    coordinates: {
      lat: -90,
      lng: 0,
    },
    focusAreas: ["Astronomy", "Atmosphere", "Climate"],
  },
  {
    id: "svalbard",
    name: "Svalbard Research Area",
    country: "Norway",
    region: "Arctic",
    type: "Expedition Base",
    description:
      "A key Arctic field location used for glaciology, marine science and environmental research.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    coordinates: {
      lat: 78.223,
      lng: 15.646,
    },
    focusAreas: ["Glaciology", "Marine Science", "Ecology"],
  },
  {
    id: "concordia",
    name: "Concordia Station",
    country: "France / Italy",
    region: "Antarctica",
    type: "Research Station",
    description:
      "A high-altitude Antarctic research station supporting atmospheric, climate and human physiology research.",
    image:
      "https://images.unsplash.com/photo-1551415923-a2297c7fda79?auto=format&fit=crop&w=900&q=80",
    coordinates: {
      lat: -75.1,
      lng: 123.35,
    },
    focusAreas: ["Climate", "Atmosphere", "Human Science"],
  },
];