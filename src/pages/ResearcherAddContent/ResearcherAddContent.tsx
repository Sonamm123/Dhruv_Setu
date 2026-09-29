import {
  ArrowLeft,
  Check,
  File,
  FileImage,
  FilePlus2,
  FileText,
  Film,
  Upload,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";

import {
  contentTypes,
  type ContentType,
} from "../../data/researcher/entry";

import { useResearcherEntry } from "../../context/ResearcherEntryContext";

const steps = [
  "Metadata",
  "Add Content",
  "Link Related Work",
  "Review & Submit",
];

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getContentIcon(type: ContentType) {
  if (type === "Images") {
    return FileImage;
  }

  if (type === "Videos") {
    return Film;
  }

  if (type === "Dataset") {
    return File;
  }

  return FileText;
}

export default function ResearcherAddContent() {
  const navigate = useNavigate();
  const { entry, addContent, removeContent } =
    useResearcherEntry();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [contentType, setContentType] =
    useState<ContentType>("Report");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [dragActive, setDragActive] = useState(false);
  const [message, setMessage] = useState("");

  const addFiles = (files: FileList | File[]) => {
    const selectedFiles = Array.from(files);

    if (selectedFiles.length === 0) {
      return;
    }

    const file = selectedFiles[0];

    const content = {
      id: `${Date.now()}-${file.name}`,
      type: contentType,
      title: title.trim() || file.name,
      description: description.trim(),
      fileName: file.name,
      fileSize: file.size,
    };

    addContent(content);

    setTitle("");
    setDescription("");

    setMessage(`${file.name} added successfully.`);

    window.setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files) {
      addFiles(event.target.files);
    }

    event.target.value = "";
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();
    setDragActive(false);

    addFiles(event.dataTransfer.files);
  };

  return (
    <div className="min-h-full bg-slate-50 p-5 md:p-7">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div>
          <p className="text-sm font-medium text-cyan-700">
            Researcher Workspace
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-indigo-950">
            New Research Entry
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Add supporting reports, datasets, publications, images,
            or videos to your research entry.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-2 overflow-x-auto">
            {steps.map((step, index) => {
              const active = index === 1;
              const completed = index === 0;

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
                          : completed
                            ? "bg-cyan-100 text-cyan-700"
                            : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {completed ? (
                        <Check size={15} />
                      ) : (
                        index + 1
                      )}
                    </div>

                    <span
                      className={`text-xs font-semibold ${
                        active
                          ? "text-indigo-950"
                          : completed
                            ? "text-cyan-700"
                            : "text-slate-400"
                      }`}
                    >
                      {step}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`mx-3 hidden h-px w-10 sm:block md:w-16 ${
                        completed
                          ? "bg-cyan-200"
                          : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Metadata summary */}
        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Entry Metadata
              </p>

              <h2 className="mt-1 text-lg font-bold text-indigo-950">
                {entry.title || "Untitled Research Entry"}
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                {entry.entryType} ·{" "}
                {entry.researchArea || "Research area not selected"}
              </p>
            </div>

            <Link
              to="/researcher/new-entry"
              className="shrink-0 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Edit Metadata
            </Link>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Region
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-700">
                {entry.polarRegion || "Not selected"}
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Station
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-700">
                {entry.researchStation || "Not selected"}
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Period
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-700">
                {entry.datePeriod || "Not specified"}
              </p>
            </div>
          </div>
        </div>

        {/* Content form */}
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                <FilePlus2 size={20} />
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Add Content
                </h2>

                <p className="mt-0.5 text-xs text-slate-500">
                  Attach supporting material to this research entry.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* Content type */}
            <section>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Content Type
              </label>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                {contentTypes.map((type) => {
                  const selected = contentType === type;
                  const Icon = getContentIcon(type);

                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setContentType(type)}
                      className={`rounded-lg border px-3 py-3 text-left transition ${
                        selected
                          ? "border-cyan-500 bg-cyan-50 text-cyan-800 ring-1 ring-cyan-500"
                          : "border-slate-200 bg-white text-slate-600 hover:border-cyan-200 hover:bg-slate-50"
                      }`}
                    >
                      <Icon size={18} />

                      <span className="mt-2 block text-xs font-semibold">
                        {type}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Title */}
            <section className="mt-7">
              <label
                htmlFor="content-title"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Content Title
              </label>

              <input
                id="content-title"
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
                placeholder="Enter a title for this content"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </section>

            {/* Description */}
            <section className="mt-5">
              <label
                htmlFor="content-description"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Description
              </label>

              <textarea
                id="content-description"
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                rows={3}
                placeholder="Briefly describe this content..."
                className="w-full resize-y rounded-lg border border-slate-200 px-3 py-2.5 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </section>

            {/* Upload */}
            <section className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Upload File
              </label>

              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />

              <div
                onDragOver={(event) => {
                  event.preventDefault();
                  setDragActive(true);
                }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
                className={`rounded-xl border-2 border-dashed p-8 text-center transition ${
                  dragActive
                    ? "border-cyan-500 bg-cyan-50"
                    : "border-slate-200 bg-slate-50 hover:border-cyan-300 hover:bg-cyan-50/30"
                }`}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-cyan-700 shadow-sm">
                  <Upload size={21} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-800">
                  Drag and drop your file here
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  or browse files from your computer
                </p>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-900"
                >
                  <Upload size={16} />
                  Browse Files
                </button>

                <p className="mt-3 text-[11px] text-slate-400">
                  Frontend demo: selected files are stored in the
                  current research-entry state.
                </p>
              </div>
            </section>

            {/* Message */}
            {message && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                <Check size={16} />
                {message}
              </div>
            )}

            {/* Added content */}
            <section className="mt-7">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Added Content
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {entry.contents.length} item
                    {entry.contents.length === 1 ? "" : "s"} added
                  </p>
                </div>
              </div>

              {entry.contents.length > 0 ? (
                <div className="mt-3 space-y-2">
                  {entry.contents.map((content) => {
                    const Icon = getContentIcon(content.type);

                    return (
                      <div
                        key={content.id}
                        className="flex items-center gap-3 rounded-lg border border-slate-200 p-3"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                          <Icon size={18} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-slate-800">
                            {content.title}
                          </p>

                          <div className="mt-0.5 flex flex-wrap gap-x-2 text-xs text-slate-500">
                            <span>{content.type}</span>
                            <span>•</span>
                            <span>{content.fileName}</span>
                            <span>•</span>
                            <span>
                              {formatFileSize(content.fileSize)}
                            </span>
                          </div>

                          {content.description && (
                            <p className="mt-1 truncate text-xs text-slate-500">
                              {content.description}
                            </p>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeContent(content.id)
                          }
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                          title="Remove content"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-3 rounded-lg border border-slate-100 bg-slate-50 p-5 text-center">
                  <FileText
                    size={24}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-2 text-sm font-medium text-slate-600">
                    No content added yet
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Add at least one supporting file or continue
                    without attachments.
                  </p>
                </div>
              )}
            </section>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <Link
              to="/researcher/new-entry"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <ArrowLeft size={16} />
              Back to Metadata
            </Link>

            <button
              type="button"
              onClick={() =>
                navigate("/researcher/new-entry/link-work")
              }
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-900"
            >
              Continue
              <Check size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
