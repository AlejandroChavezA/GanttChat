import { PiAlignLeftBold } from "react-icons/pi";

const sidebarRoutes = [
  {
    path: "/",
    label: "Home",
    icon: <></>,
  },
  {
    path: "/",
    label: "Contact",
    icon: <></>,
  },
];

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col px-3 py-4">
      <div className="grow test">
        <div>
          <div>T</div>
          <div>Testing account</div>
        </div>
        <div>
          {sidebarRoutes.map((route) => {
            return <div>{route.label}</div>;
          })}
        </div>
      </div>
      <div className="flex flex-row items-center gap-1.5 px-2 py-1">
        <div className="bg-white p-1 rounded-full text-sm">
          <span className="text-black">
            <PiAlignLeftBold />
          </span>
        </div>
        <p className="text-xs font-medium">GanttChat</p>
      </div>
    </div>
  );
}
