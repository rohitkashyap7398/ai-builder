import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import PromptPanel from "./PromptPanel";
import PreviewPanel from "./PreviewPanel";
import PropertiesPanel from "./PropertiesPanel";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <div className="flex flex-1">
          {/* Left */}
          <div className="w-1/3 border-r border-zinc-800">
            <PromptPanel />
          </div>

          {/* Center */}
          <div className="flex-1 border-r border-zinc-800">
            <PreviewPanel />
          </div>

          {/* Right */}
          <div className="w-80">
            <PropertiesPanel />
          </div>
        </div>
      </div>
    </div>
  );
}