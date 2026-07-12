"use client";

import { useBuilderStore } from "@/store/builderStore";

export default function Contact() {
  const website = useBuilderStore((state) => state.website);

  return (
    <section className="bg-gray-100 px-8 py-20">
      <h2 className="text-4xl font-bold text-black">
        Contact Us
      </h2>

      <p className="mt-6 text-gray-700">
        📧 {website.contact?.email}
      </p>

      <p className="mt-2 text-gray-700">
        📞 {website.contact?.phone}
      </p>
    </section>
  );
}