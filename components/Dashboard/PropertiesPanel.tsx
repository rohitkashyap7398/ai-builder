export default function PropertiesPanel() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">
        Properties
      </h2>

      <div className="mt-8 space-y-5">

        <div>
          <label>Theme</label>

          <select className="mt-2 w-full bg-zinc-900 p-3 rounded-lg">
            <option>Dark</option>
            <option>Light</option>
          </select>
        </div>

        <div>
          <label>Primary Color</label>

          <input
            type="color"
            className="w-full h-12 mt-2"
          />
        </div>

      </div>
    </div>
  );
}