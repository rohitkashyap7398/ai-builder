export default function Templates() {
  const templates = [
    "Business Website",
    "Portfolio",
    "E-Commerce",
    "Restaurant",
    "Agency",
    "Blog",
  ];

  return (
    <section className="bg-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Website Templates
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Start with professionally designed templates.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {templates.map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 p-10 hover:border-blue-500 transition"
            >
              <div className="h-40 bg-zinc-800 rounded-xl"></div>

              <h3 className="text-2xl font-bold mt-6">
                {item}
              </h3>

              <button className="mt-6 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700">
                Preview
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}