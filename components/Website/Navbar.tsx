"use client";

import { useBuilderStore } from "@/store/builderStore";

export default function Navbar() {
  const website = useBuilderStore((state) => state.website);

  return (
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
  );
}