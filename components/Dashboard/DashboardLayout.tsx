import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import ChatPanel from "../Chat/ChatPanel";
import PreviewPanel from "./PreviewPanel";

import ComponentTree from "@/components/Editor/ComponentTree";
import PropertiesPanel from "./PropertiesPanel";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <div className="flex flex-1">

          {/* Left - AI Chat */}
          <div className="w-1/3 border-r border-zinc-800">
            <ChatPanel />
          </div>

          {/* Center - Website Preview */}
          <div className="flex-1 border-r border-zinc-800">
            <PreviewPanel />
          </div>

          {/* Right */}
          <div className="w-80 border-l border-zinc-800 flex flex-col">

            {/* Component Tree */}
            <div className="border-b border-zinc-800 p-4">
              <ComponentTree />
            </div>

            {/* Dynamic Properties */}
            <div className="flex-1 overflow-auto">
              <PropertiesPanel />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}