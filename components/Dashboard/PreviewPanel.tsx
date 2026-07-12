"use client";

import { Globe } from "lucide-react";
import { Card } from "@/components/UI/card";
import { useBuilderStore } from "@/store/builderStore";

export default function PreviewPanel() {
  const website = useBuilderStore((state) => state.website);

  return (
    <Card className="h-full overflow-hidden rounded-none">

      {/* Browser Header */}
      <div className="flex items-center justify-between border-b bg-zinc-100 px-4 py-3">

        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow">
          <Globe size={16} />
          preview.ai
        </div>

      </div>

      {/* Website */}
      <div className="overflow-auto bg-white h-full">

        <nav className="flex justify-between items-center px-8 py-5 border-b">
          <h2 className="text-2xl font-bold text-black">
            {website.navbar?.logo}
          </h2>

          <div className="flex gap-6 text-black">
            {website.navbar?.links?.map((link: string) => (
              <a key={link}>{link}</a>
            ))}
          </div>
        </nav>

        <section className="text-center py-24 px-8">
          <h1 className="text-5xl font-bold text-black">
            {website.hero?.heading}
          </h1>

          <p className="mt-6 text-gray-600">
            {website.hero?.subHeading}
          </p>

          <button className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-white">
            {website.hero?.button}
          </button>
        </section>

      </div>

    </Card>
  );
}