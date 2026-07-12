"use client";

import { useBuilderStore } from "@/store/builderStore";

export default function About() {
  const website = useBuilderStore((state) => state.website);

  return (
    <section className="bg-gray-50 px-8 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-black">
          {website.about?.title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          {website.about?.description}
        </p>
      </div>
    </section>
  );
}