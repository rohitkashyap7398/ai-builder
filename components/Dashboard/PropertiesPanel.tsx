"use client";

import { Card } from "@/components/UI/card";

import { useEditorStore } from "@/store/editorStore";

import HeroEditor from "@/components/Editor/HeroEditor";
import AboutEditor from "@/components/Editor/AboutEditor";
import NavbarEditor from "@/components/Editor/NavbarEditor";

export default function PropertiesPanel() {
  const selectedComponent = useEditorStore(
    (state) => state.selectedComponent
  );

  return (
    <Card className="h-full rounded-none border-zinc-800 bg-zinc-950 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        ⚙️ Properties
      </h2>

      {selectedComponent === "Hero" && <HeroEditor />}

      {selectedComponent === "About" && <AboutEditor />}

      {selectedComponent === "Navbar" && <NavbarEditor />}

      {selectedComponent === "Services" && (
        <div>Services Editor Coming Soon</div>
      )}

      {selectedComponent === "Contact" && (
        <div>Contact Editor Coming Soon</div>
      )}
    </Card>
  );
}