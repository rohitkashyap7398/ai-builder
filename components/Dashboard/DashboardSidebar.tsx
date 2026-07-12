"use client";

import {
  LayoutDashboard,
  FolderOpen,
  LayoutTemplate,
  Settings,
  Sparkles,
  User,
} from "lucide-react";

export default function DashboardSidebar() {
  const menus = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Projects",
      icon: FolderOpen,
    },
    {
      name: "Templates",
      icon: LayoutTemplate,
    },
    {
      name: "AI Assistant",
      icon: Sparkles,
    },
    {
      name: "Settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-72 h-screen bg-[#09090B] border-r border-zinc-800 flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          🚀 AI Builder
        </h1>

        <p className="text-sm text-zinc-400 mt-2">
          Build websites with AI
        </p>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4 space-y-2">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800 transition-all"
            >
              <Icon size={20} />
              {item.name}
            </button>
          );
        })}
      </div>

      {/* User */}
      <div className="border-t border-zinc-800 p-5">
        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
            <User size={22} />
          </div>

          <div>
            <h2 className="font-semibold">
              Rohit
            </h2>

            <p className="text-xs text-zinc-400">
              Pro Plan
            </p>
          </div>

        </div>
      </div>

    </aside>
  );
}