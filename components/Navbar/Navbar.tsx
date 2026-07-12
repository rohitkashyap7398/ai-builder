export default function Navbar() {
  return (
    <nav className="w-full h-16 border-b border-gray-800 bg-black flex items-center justify-between px-8">
      <h1 className="text-2xl font-bold text-white">
        AI Builder
      </h1>

      <div className="flex gap-6 text-gray-300">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}