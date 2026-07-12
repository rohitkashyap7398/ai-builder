import { create } from "zustand";

type EditorStore = {
  selectedComponent: string;
  setSelectedComponent: (component: string) => void;
};

export const useEditorStore = create<EditorStore>((set) => ({
  selectedComponent: "Hero",
  setSelectedComponent: (component) =>
    set({ selectedComponent: component }),
}));