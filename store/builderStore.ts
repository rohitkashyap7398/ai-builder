import { create } from "zustand";
import { companyTemplate } from "@/lib/templates/company";

type BuilderStore = {
  website: any;

  setWebsite: (website: any) => void;

  updateHeroHeading: (heading: string) => void;
  updateHeroSubHeading: (subHeading: string) => void;
  updateHeroButton: (button: string) => void;
};

export const useBuilderStore = create<BuilderStore>((set) => ({
  website: companyTemplate,

  setWebsite: (website) => set({ website }),

  updateHeroHeading: (heading) =>
    set((state) => ({
      website: {
        ...state.website,
        hero: {
          ...state.website.hero,
          heading,
        },
      },
    })),

  updateHeroSubHeading: (subHeading) =>
    set((state) => ({
      website: {
        ...state.website,
        hero: {
          ...state.website.hero,
          subHeading,
        },
      },
    })),

  updateHeroButton: (button) =>
    set((state) => ({
      website: {
        ...state.website,
        hero: {
          ...state.website.hero,
          button,
        },
      },
    })),
}));