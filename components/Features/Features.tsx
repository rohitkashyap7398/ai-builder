export default function Features() {
  const features = [
    {
      title: "AI Website Generation",
      description: "Generate complete websites using simple prompts.",
    },
    {
      title: "Live Preview",
      description: "See your website update instantly as you build.",
    },
    {
      title: "Export Code",
      description: "Download clean Next.js and React source code.",
    },
    {
      title: "One Click Deploy",
      description: "Deploy your website to Vercel in one click.",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center">
          Powerful Features
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Everything you need to build websites with AI.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}