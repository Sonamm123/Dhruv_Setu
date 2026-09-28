import {
  Compass,
  MapPin,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";
import LocationCard from "../../components/map/LocationCard";
import { polarLocations } from "../../data/locations";

const regions = ["All", "Arctic", "Antarctica"];

const mapPosition = (lat: number, lng: number) => {
  const left = ((lng + 180) / 360) * 100;
  const top = ((90 - lat) / 180) * 100;

  return {
    left: `${Math.max(4, Math.min(96, left))}%`,
    top: `${Math.max(8, Math.min(92, top))}%`,
  };
};

export default function Map() {
  const [region, setRegion] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(
    polarLocations[0]?.id ?? "",
  );

  const filteredLocations = useMemo(() => {
    const search = query.toLowerCase().trim();

    return polarLocations.filter((location) => {
      const regionMatch =
        region === "All" || location.region === region;

      const searchMatch =
        !search ||
        location.name.toLowerCase().includes(search) ||
        location.country.toLowerCase().includes(search) ||
        location.description.toLowerCase().includes(search) ||
        location.focusAreas.some((area) =>
          area.toLowerCase().includes(search),
        );

      return regionMatch && searchMatch;
    });
  }, [region, query]);

  const selectedLocation =
    polarLocations.find((location) => location.id === selectedId) ??
    filteredLocations[0];

  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-6 lg:px-7">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-indigo-600">
          <Compass size={17} />

          <p className="text-xs font-semibold uppercase tracking-wider">
            Polar Explorer
          </p>
        </div>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Polar Research Map
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Explore important research stations, expedition bases and
          scientific locations across the Arctic and Antarctica.
        </p>
      </div>

      {/* Search and region filters */}
      <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search research locations..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div className="mt-4 flex gap-2">
          {regions.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setRegion(item)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                region === item
                  ? "bg-indigo-700 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Main map + information */}
      <div className="mt-7 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        {/* Map */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
          <div className="border-b border-white/10 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-white">
                  Global Polar Research Network
                </h2>

                <p className="mt-1 text-[11px] text-slate-400">
                  Select a location to view research information
                </p>
              </div>

              <div className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-medium text-slate-300">
                {filteredLocations.length} locations
              </div>
            </div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden bg-[radial-gradient(circle_at_center,_#334155,_#0f172a_65%)]">
            {/* Latitude lines */}
            <div className="absolute inset-x-0 top-1/4 border-t border-white/10" />
            <div className="absolute inset-x-0 top-1/2 border-t border-white/10" />
            <div className="absolute inset-x-0 top-3/4 border-t border-white/10" />

            {/* Longitude lines */}
            <div className="absolute inset-y-0 left-1/4 border-l border-white/10" />
            <div className="absolute inset-y-0 left-1/2 border-l border-white/10" />
            <div className="absolute inset-y-0 left-3/4 border-l border-white/10" />

            {/* Simplified polar zones */}
            <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />

            <div className="absolute left-1/2 top-[88%] h-40 w-[75%] -translate-x-1/2 rounded-[50%] bg-indigo-500/10 blur-2xl" />

            <div className="absolute left-1/2 top-[12%] h-40 w-[75%] -translate-x-1/2 rounded-[50%] bg-cyan-400/10 blur-2xl" />

            {/* Location markers */}
            {filteredLocations.map((location) => {
              const position = mapPosition(
                location.coordinates.lat,
                location.coordinates.lng,
              );

              const selected = selectedLocation?.id === location.id;

              return (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => setSelectedId(location.id)}
                  style={position}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  title={location.name}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition ${
                      selected
                        ? "scale-110 border-white bg-indigo-600 shadow-lg shadow-indigo-500/40"
                        : "border-indigo-200 bg-indigo-600/80 hover:scale-110"
                    }`}
                  >
                    <MapPin
                      size={16}
                      className="text-white"
                      fill="currentColor"
                    />
                  </span>

                  {selected && (
                    <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-[9px] font-semibold text-slate-800 shadow-lg">
                      {location.name}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Labels */}
            <span className="absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-widest text-cyan-200/60">
              Arctic
            </span>

            <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-widest text-indigo-200/60">
              Antarctica
            </span>
          </div>
        </section>

        {/* Location details */}
        <section className="min-h-[480px] rounded-2xl border border-slate-200 bg-white shadow-sm">
          {selectedLocation ? (
            <>
              <div className="relative h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  className="h-full w-full object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-indigo-700 shadow-sm">
                  {selectedLocation.region}
                </span>
              </div>

              <div className="p-5">
                <p className="text-[11px] font-medium uppercase tracking-wider text-indigo-600">
                  {selectedLocation.type}
                </p>

                <h2 className="mt-2 text-xl font-semibold text-slate-900">
                  {selectedLocation.name}
                </h2>

                <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                  <MapPin size={12} />
                  {selectedLocation.country}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {selectedLocation.description}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-semibold text-slate-900">
                    Research Focus
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedLocation.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-lg bg-indigo-50 px-3 py-1.5 text-[11px] font-medium text-indigo-700"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] text-slate-400">
                      Latitude
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-700">
                      {selectedLocation.coordinates.lat.toFixed(4)}°
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] text-slate-400">
                      Longitude
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-700">
                      {selectedLocation.coordinates.lng.toFixed(4)}°
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-full min-h-[480px] items-center justify-center p-6 text-center">
              <div>
                <MapPin
                  size={30}
                  className="mx-auto text-slate-300"
                />

                <p className="mt-3 text-sm font-medium text-slate-700">
                  No location selected
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Try another region or search term.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Location cards */}
      <section className="mt-8">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Research Locations
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Select a location to highlight it on the map.
          </p>
        </div>

        {filteredLocations.length > 0 ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredLocations.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                selected={selectedLocation?.id === location.id}
                onSelect={() => setSelectedId(location.id)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 py-16 text-center">
            <p className="font-medium text-slate-700">
              No research locations found
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Try another search or region.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}