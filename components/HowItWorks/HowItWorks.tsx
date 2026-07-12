export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Write a Prompt",
      description: "Describe the website you want to build using simple language.",
    },
    {
      number: "02",
      title: "AI Generates Website",
      description: "Our AI creates the layout, sections and content instantly.",
    },
    {
      number: "03",
      title: "Customize & Export",
      description: "Edit your website, preview it live and export the code.",
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          How It Works
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Create your website in just three simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8"
            >
              <span className="text-blue-500 text-4xl font-bold">
                {step.number}
              </span>

              <h3 className="text-2xl font-semibold mt-6">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
