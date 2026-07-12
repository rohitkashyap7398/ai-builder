"use client";

import { useBuilderStore } from "@/store/builderStore";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { Card } from "@/components/UI/card";
import { Button } from "@/components/UI/button";

export default function PropertiesPanel() {
  const website = useBuilderStore((state) => state.website);

  const updateHeroHeading = useBuilderStore(
    (state) => state.updateHeroHeading
  );

  const updateHeroSubHeading = useBuilderStore(
    (state) => state.updateHeroSubHeading
  );

  const updateHeroButton = useBuilderStore(
    (state) => state.updateHeroButton
  );

  return (
    <Card className="h-full rounded-none border-zinc-800 bg-zinc-950 p-6">
      <h2 className="mb-8 text-3xl font-bold">
        ⚙️ Properties
      </h2>

      <div className="space-y-6">
        <div>
          <Label>Hero Heading</Label>

          <Input
            value={website.hero.heading}
            onChange={(e) => updateHeroHeading(e.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <Label>Hero Sub Heading</Label>

          <Input
            value={website.hero.subHeading}
            onChange={(e) => updateHeroSubHeading(e.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <Label>Button Text</Label>

          <Input
            value={website.hero.button}
            onChange={(e) => updateHeroButton(e.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <Label>Theme</Label>

          <select className="mt-2 h-11 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3">
            <option>Dark</option>
            <option>Light</option>
          </select>
        </div>

        <div>
          <Label>Primary Color</Label>

          <input
            type="color"
            className="mt-2 h-12 w-full rounded-md"
          />
        </div>

        <Button className="w-full">
          Save Changes
        </Button>
      </div>
    </Card>
  );
}