"use client";

import { useBuilderStore } from "@/store/builderStore";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";

export default function HeroEditor() {
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
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Hero Settings</h3>

      <div>
        <Label>Heading</Label>
        <Input
          value={website.hero.heading}
          onChange={(e) => updateHeroHeading(e.target.value)}
        />
      </div>

      <div>
        <Label>Sub Heading</Label>
        <Input
          value={website.hero.subHeading}
          onChange={(e) => updateHeroSubHeading(e.target.value)}
        />
      </div>

      <div>
        <Label>Button Text</Label>
        <Input
          value={website.hero.button}
          onChange={(e) => updateHeroButton(e.target.value)}
        />
      </div>
    </div>
  );
}