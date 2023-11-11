import { PiAlignLeftBold } from "react-icons/pi";

export default function Sidebar() {
  return (
    <div className="grow test flex flex-col items-end px-5 py-8">
      <div>a</div>
      <div className="flex flex-row items-center gap-2 px-2 py-1 rounded-md bg-slate-400">
        <div className="bg-white p-1 rounded-full text-sm">
          <PiAlignLeftBold />
        </div>
        <p className="text-xs font-medium">GanttChat</p>
      </div>
    </div>
  );
}
