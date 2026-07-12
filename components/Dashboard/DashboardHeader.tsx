export default function DashboardHeader() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-[#111827] flex items-center justify-between px-6">

      {/* Left */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-80 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 outline-none"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <button className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700">
          New Project
        </button>

        <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700">
          Export
        </button>

        <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700">
          Deploy
        </button>

        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">
          R
        </div>

      </div>

    </header>
  );
}