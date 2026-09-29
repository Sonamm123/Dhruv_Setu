import { useState } from "react";
import {
  Check,
  ChevronDown,
  FileText,
  Image,
  Plus,
  Save,
  Upload,
} from "lucide-react";
import { Link } from "react-router";

import {
  entryTypes,
  polarRegions,
  researchAreas,
  researchStations,
} from "../../data/researcher/entry";

import { useResearcherEntry } from "../../context/ResearcherEntryContext";

const steps = [
  "Metadata",
  "Add Content",
  "Link Related Work",
  "Review & Submit",
];

function SelectField({
  label,
  value,
  options,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
}

export default function ResearcherNewEntry() {
  const { entry, updateEntry } = useResearcherEntry();

  const [keywordInput, setKeywordInput] = useState("");
  const [saved, setSaved] = useState(false);

  const addKeyword = () => {
    const keyword = keywordInput.trim();

    if (!keyword || entry.keywords.includes(keyword)) {
      return;
    }

    updateEntry({
      keywords: [...entry.keywords, keyword],
    });

    setKeywordInput("");
  };

  const removeKeyword = (keyword: string) => {
    updateEntry({
      keywords: entry.keywords.filter(
        (item) => item !== keyword,
      ),
    });
  };

  const saveDraft = () => {
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="min-h-full bg-slate-50 p-5 md:p-7">
      <div className="mx-auto max-w-[1200px]">
        {/* Page heading */}
        <div>
          <p className="text-sm font-medium text-cyan-700">
            Researcher Workspace
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-indigo-950">
            New Research Entry
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Add a new research record to the PolarConnect knowledge
            repository.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-2 overflow-x-auto">
            {steps.map((step, index) => {
              const active = index === 0;

              return (
                <div
                  key={step}
                  className="flex min-w-max items-center"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                        active
                          ? "bg-indigo-950 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <span
                      className={`text-xs font-semibold ${
                        active
                          ? "text-indigo-950"
                          : "text-slate-400"
                      }`}
                    >
                      {step}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="mx-3 hidden h-px w-10 bg-slate-200 sm:block md:w-16" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main form */}
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* Section heading */}
          <div className="border-b border-slate-200 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                <FileText size={20} />
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Metadata
                </h2>

                <p className="mt-0.5 text-xs text-slate-500">
                  Provide the basic information about your research
                  entry.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* Entry type */}
            <section>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Entry Type
              </label>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {entryTypes.map((type) => {
                  const selected = entry.entryType === type;

                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        updateEntry({
                          entryType: type,
                        })
                      }
                      className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold transition ${
                        selected
                          ? "border-cyan-500 bg-cyan-50 text-cyan-800 ring-1 ring-cyan-500"
                          : "border-slate-200 bg-white text-slate-600 hover:border-cyan-200 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span>{type}</span>

                        {selected && (
                          <Check
                            size={16}
                            className="text-cyan-600"
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Title */}
            <section className="mt-7">
              <label
                htmlFor="entry-title"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Title
              </label>

              <input
                id="entry-title"
                value={entry.title}
                onChange={(event) =>
                  updateEntry({
                    title: event.target.value,
                  })
                }
                placeholder="Enter the research title"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </section>

            {/* Research information */}
            <section className="mt-7">
              <h3 className="text-sm font-bold text-slate-900">
                Research Information
              </h3>

              <div className="mt-4 grid gap-5 md:grid-cols-2">
                <SelectField
                  label="Research Area"
                  value={entry.researchArea}
                  options={researchAreas}
                  placeholder="Select research area"
                  onChange={(value) =>
                    updateEntry({
                      researchArea: value,
                    })
                  }
                />

                <SelectField
                  label="Polar Region"
                  value={entry.polarRegion}
                  options={polarRegions}
                  placeholder="Select polar region"
                  onChange={(value) =>
                    updateEntry({
                      polarRegion: value,
                    })
                  }
                />

                <SelectField
                  label="Research Station"
                  value={entry.researchStation}
                  options={researchStations}
                  placeholder="Select research station"
                  onChange={(value) =>
                    updateEntry({
                      researchStation: value,
                    })
                  }
                />

                <div>
                  <label
                    htmlFor="entry-period"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Date / Period
                  </label>

                  <input
                    id="entry-period"
                    value={entry.datePeriod}
                    onChange={(event) =>
                      updateEntry({
                        datePeriod: event.target.value,
                      })
                    }
                    placeholder="e.g. 2024–2025"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>
            </section>

            {/* Authors */}
            <section className="mt-7">
              <label
                htmlFor="entry-authors"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Authors / Contributors
              </label>

              <input
                id="entry-authors"
                value={entry.authors}
                onChange={(event) =>
                  updateEntry({
                    authors: event.target.value,
                  })
                }
                placeholder="Enter names separated by commas"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </section>

            {/* Summary */}
            <section className="mt-7">
              <label
                htmlFor="entry-summary"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Summary
              </label>

              <textarea
                id="entry-summary"
                value={entry.summary}
                onChange={(event) =>
                  updateEntry({
                    summary: event.target.value,
                  })
                }
                rows={5}
                placeholder="Provide a concise summary of the research..."
                className="w-full resize-y rounded-lg border border-slate-200 px-3 py-2.5 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </section>

            {/* Source */}
            <section className="mt-7">
              <label
                htmlFor="entry-source"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Source / Identifier
              </label>

              <input
                id="entry-source"
                value={entry.sourceIdentifier}
                onChange={(event) =>
                  updateEntry({
                    sourceIdentifier: event.target.value,
                  })
                }
                placeholder="DOI, report number, repository URL, or source"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </section>

            {/* Keywords */}
            <section className="mt-7">
              <label
                htmlFor="entry-keywords"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Keywords
              </label>

              <div className="flex gap-2">
                <input
                  id="entry-keywords"
                  value={keywordInput}
                  onChange={(event) =>
                    setKeywordInput(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      addKeyword();
                    }
                  }}
                  placeholder="Add a keyword"
                  className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />

                <button
                  type="button"
                  onClick={addKeyword}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  <Plus size={16} />
                  Add
                </button>
              </div>

              {entry.keywords.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.keywords.map((keyword) => (
                    <button
                      key={keyword}
                      type="button"
                      onClick={() => removeKeyword(keyword)}
                      className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-medium text-cyan-800 transition hover:bg-red-50 hover:text-red-700"
                      title="Remove keyword"
                    >
                      {keyword} ×
                    </button>
                  ))}
                </div>
              )}
            </section>

            {/* Upload hint */}
            <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm">
                  <Image size={17} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    Content can be added in the next step
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Reports, datasets, publications, images, and
                    videos will be uploaded after the metadata is
                    saved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <div className="text-xs text-slate-500">
              {saved ? (
                <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600">
                  <Check size={14} />
                  Draft saved successfully
                </span>
              ) : (
                "You can save your progress and continue later."
              )}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={saveDraft}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <Save size={16} />
                Save Draft
              </button>

              <Link
                to="/researcher/new-entry/content"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-900"
              >
                Continue
                <Upload size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
