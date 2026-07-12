export default function FAQ() {
  const faqs = [
    {
      question: "What is AI Builder?",
      answer: "AI Builder helps you create websites using simple prompts."
    },
    {
      question: "Can I export my code?",
      answer: "Yes, you can export clean React and Next.js code."
    },
    {
      question: "Do I need coding knowledge?",
      answer: "No. Beginners can also build websites using AI."
    },
    {
      question: "Can I deploy my website?",
      answer: "Yes, you can deploy your website with one click."
    }
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>

              <p className="text-gray-400 mt-3">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}