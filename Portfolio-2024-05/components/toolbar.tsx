import { Folders, Home, Settings } from "lucide-react";
import ToolbarButton from "@/components/toolbar-button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Toolbar() {
  return (
    <div className="absolute bottom-8 gap-2 left-1/2 -translate-x-1/2 flex items-center rounded-full p-2 shadow-lg backdrop-blur border bg-muted/70">
      <ToolbarButton href="/" icon={<Home />} title="Home" />
      <ToolbarButton href="/folder" icon={<Folders />} title="Folders" />
      <ToolbarButton href="/settings" icon={<Settings />} title="Settings" />
      <ModeToggle />
    </div>
  );
}
