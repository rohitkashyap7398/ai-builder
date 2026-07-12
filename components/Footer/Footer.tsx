export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold">
              AI Builder
            </h2>

            <p className="text-gray-400 mt-2">
              Build websites with AI in seconds.
            </p>
          </div>

          <div className="flex gap-8 mt-8 md:mt-0">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 AI Builder. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}