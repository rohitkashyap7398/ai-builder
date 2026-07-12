"use client";

import { useEditorStore } from "@/store/editorStore";

const components = [
  "Navbar",
  "Hero",
  "About",
  "Services",
  "Contact",
];

export default function ComponentTree() {
  const { selectedComponent, setSelectedComponent } = useEditorStore();

  return (
    <div className="space-y-2">
      <h2 className="mb-4 text-xl font-bold">
        📦 Website Components
      </h2>

      {components.map((component) => (
        <button
          key={component}
          onClick={() => setSelectedComponent(component)}
          className={`w-full rounded-lg p-3 text-left transition ${
            selectedComponent === component
              ? "bg-blue-600 text-white"
              : "bg-zinc-900 hover:bg-zinc-800"
          }`}
        >
          {component}
        </button>
      ))}
    </div>
  );
}