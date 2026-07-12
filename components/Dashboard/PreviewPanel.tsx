"use client";

import { Globe } from "lucide-react";
import { Card } from "@/components/UI/card";

import Navbar from "@/components/Website/Navbar";
import Hero from "@/components/Website/Hero";
import About from "@/components/Website/About";
import Services from "@/components/Website/Services";
import Contact from "@/components/Website/Contact";

export default function PreviewPanel() {
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

        <Navbar />

        <Hero />

        <About />

        <Services />

        <Contact />

      </div>

    </Card>
  );
}