export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-5xl px-6">
        <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-sm">
          🚀 AI Powered Website Builder
        </span>

        <h1 className="text-7xl font-extrabold mt-8 leading-tight">
          Build Stunning Websites
          <br />
          With One Prompt
        </h1>

        <p className="mt-8 text-xl text-gray-400">
          Create beautiful websites, landing pages and web apps
          in seconds using Artificial Intelligence.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700">
            Start Building
          </button>

          <button className="px-8 py-4 border border-gray-600 rounded-xl">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}