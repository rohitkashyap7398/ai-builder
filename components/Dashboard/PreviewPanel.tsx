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
      <div className="h-full overflow-auto bg-white">

        {/* Navbar */}
        <nav className="flex items-center justify-between border-b px-8 py-5">

          <h2 className="text-2xl font-bold text-black">
            {website.navbar?.logo}
          </h2>

          <div className="flex gap-6 text-black">
            {website.navbar?.links?.map(
              (link: { label: string; href: string }) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-blue-600"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

        </nav>

        {/* Hero */}
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

        {/* About */}
        <section className="bg-gray-50 px-8 py-20">

          <h2 className="text-4xl font-bold text-black">
            {website.about?.title}
          </h2>

          <p className="mt-6 max-w-3xl text-gray-600">
            {website.about?.description}
          </p>

        </section>

        {/* Services */}
        <section className="px-8 py-20">

          <h2 className="text-center text-4xl font-bold text-black">
            Our Services
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-6">

            {website.services?.map((service: string) => (
              <div
                key={service}
                className="rounded-xl border p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-black">
                  {service}
                </h3>
              </div>
            ))}

          </div>

        </section>

        {/* Contact */}
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

      </div>

    </Card>
  );
}