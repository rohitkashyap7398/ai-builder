import { create } from "zustand";
import { companyTemplate } from "@/lib/templates/company";

type BuilderStore = {
  website: any;
  setWebsite: (website: any) => void;
};

export const useBuilderStore = create<BuilderStore>((set) => ({
  website: companyTemplate,
  setWebsite: (website) => set({ website }),
}));