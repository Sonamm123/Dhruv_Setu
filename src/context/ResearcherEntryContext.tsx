import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  initialResearcherEntry,
  type ResearcherContent,
  type ResearcherEntry,
} from "../data/researcher/entry";

type ResearcherEntryContextValue = {
  entry: ResearcherEntry;
  updateEntry: (updates: Partial<ResearcherEntry>) => void;
  addContent: (content: ResearcherContent) => void;
  removeContent: (contentId: string) => void;
  toggleRelatedResearch: (researchId: string) => void;
  resetEntry: () => void;
};

const ResearcherEntryContext =
  createContext<ResearcherEntryContextValue | null>(null);

export function ResearcherEntryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [entry, setEntry] = useState<ResearcherEntry>(
    initialResearcherEntry,
  );

  const value = useMemo(
    () => ({
      entry,

      updateEntry: (updates: Partial<ResearcherEntry>) => {
        setEntry((current) => ({
          ...current,
          ...updates,
        }));
      },

      addContent: (content: ResearcherContent) => {
        setEntry((current) => ({
          ...current,
          contents: [...current.contents, content],
        }));
      },

      removeContent: (contentId: string) => {
        setEntry((current) => ({
          ...current,
          contents: current.contents.filter(
            (content) => content.id !== contentId,
          ),
        }));
      },

      toggleRelatedResearch: (researchId: string) => {
        setEntry((current) => {
          const alreadySelected =
            current.relatedResearchIds.includes(researchId);

          return {
            ...current,
            relatedResearchIds: alreadySelected
              ? current.relatedResearchIds.filter(
                  (id) => id !== researchId,
                )
              : [...current.relatedResearchIds, researchId],
          };
        });
      },

      resetEntry: () => {
        setEntry(initialResearcherEntry);
      },
    }),
    [entry],
  );

  return (
    <ResearcherEntryContext.Provider value={value}>
      {children}
    </ResearcherEntryContext.Provider>
  );
}

export function useResearcherEntry() {
  const context = useContext(ResearcherEntryContext);

  if (!context) {
    throw new Error(
      "useResearcherEntry must be used inside ResearcherEntryProvider",
    );
  }

  return context;
}