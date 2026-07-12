"use client";

import { useBuilderStore } from "@/store/builderStore";

export default function Hero() {
  const website = useBuilderStore((state) => state.website);

  return (
    <section className="px-8 py-24 text-center">
      <h1 className="text-5xl font-bold text-black">
        {website.hero?.heading}
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        {website.hero?.subHeading}
      </p>

      <button className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-white">
        {website.hero?.button}
      </button>
    </section>
  );
}