export default function Trusted() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "OpenAI",
    "Netflix",
  ];

  return (
    <section className="bg-black py-16 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-400 mb-10">
          Trusted by developers inspired by the world's leading companies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {companies.map((company) => (
            <div
              key={company}
              className="bg-zinc-900 rounded-xl p-6 text-white font-semibold border border-zinc-800"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}