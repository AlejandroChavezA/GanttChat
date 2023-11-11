import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function MainLayout() {
  return (
    <div className="w-full h-[100dvh] flex flex-row bg-secondary-900 text-white text-xs">
      <div>
        <Sidebar />
      </div>
      <div className="grow bg-stone-400">
        <Outlet />
      </div>
    </div>
  );
}
