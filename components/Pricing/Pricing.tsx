export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "2 Projects",
        "Basic AI",
        "Community Support",
      ],
    },
    {
      name: "Pro",
      price: "$19",
      features: [
        "Unlimited Projects",
        "Advanced AI",
        "Export Code",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Team Workspace",
        "API Access",
        "Priority Support",
      ],
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Pricing
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Choose the plan that's right for you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold">{plan.name}</h3>

              <p className="text-5xl font-bold mt-6">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-3 text-gray-300">
                {plan.features.map((item) => (
                  <li key={item}>✅ {item}</li>
                ))}
              </ul>

              <button className="mt-10 w-full py-3 bg-blue-600 rounded-xl">
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}