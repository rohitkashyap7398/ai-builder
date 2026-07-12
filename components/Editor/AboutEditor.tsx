"use client";

import { useBuilderStore } from "@/store/builderStore";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";

export default function AboutEditor() {
  const website = useBuilderStore((state) => state.website);

  const updateAboutTitle = useBuilderStore(
    (state) => state.updateAboutTitle
  );

  const updateAboutDescription = useBuilderStore(
    (state) => state.updateAboutDescription
  );

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">
        About Settings
      </h3>

      <div>
        <Label>Title</Label>

        <Input
          value={website.about.title}
          onChange={(e) => updateAboutTitle(e.target.value)}
        />
      </div>

      <div>
        <Label>Description</Label>

        <Input
          value={website.about.description}
          onChange={(e) =>
            updateAboutDescription(e.target.value)
          }
        />
      </div>
    </div>
  );
}