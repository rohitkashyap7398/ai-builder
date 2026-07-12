"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/UI/button";
import { Card } from "@/components/UI/card";
import { Textarea } from "@/components/UI/textarea";

import { useBuilderStore } from "@/store/builderStore";
import { selectTemplate } from "@/services/builder/selectTemplate";

export default function PromptPanel() {
  const [prompt, setPrompt] = useState("");

  const setWebsite = useBuilderStore((state) => state.setWebsite);

  const handleGenerate = () => {
    const template = selectTemplate(prompt);
    setWebsite(template);
  };

  return (
    <Card className="h-full border-zinc-800 bg-zinc-950 p-6 rounded-none">

      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-blue-500" size={22} />
        <h2 className="text-2xl font-bold">
          AI Website Builder
        </h2>
      </div>

      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your dream website..."
        className="flex-1 min-h-[350px] bg-zinc-900 border-zinc-700"
      />

      <Button
        onClick={handleGenerate}
        className="mt-6 w-full h-12 text-lg"
      >
        ✨ Generate Website
      </Button>

    </Card>
  );
}