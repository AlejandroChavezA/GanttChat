"use client";

import { PiAlignLeftDuotone, PiUserCircleDuotone } from "react-icons/pi";

import sidebarData from "../data/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Divider } from "@nextui-org/react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-full px-2 py-6 flex flex-col gap-6 bg-secondary-300 border-r-1 border-secondary-800 border-opacity-50">
      <div className="px-2 flex flex-row items-center gap-2">
        <p>
          <PiUserCircleDuotone />
        </p>
        <p className="text-xs font-medium">Testing user</p>
      </div>
      <Divider
        orientation="horizontal"
        className="bg-secondary-900 bg-opacity-25"
      />

      <div className="grow flex flex-col gap-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {sidebarData.routes.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  href={item.path}
                  className={`px-2 py-1 flex flex-row items-center gap-2 rounded-md hover:bg-secondary-700 transition-all ${
                    isActive && "bg-secondary-600"
                  }`}
                >
                  <p>{item.icon}</p>
                  <p className="text-xs">{item.label}</p>
                </Link>
              );
            })}
          </div>
          <Divider
            orientation="horizontal"
            className="bg-secondary-900 bg-opacity-25"
          />
          <div className="flex flex-col gap-2">
            {sidebarData.configs.map((item) => {
              return (
                <button
                  onClick={item.function}
                  className="px-2 py-1 flex flex-row items-center gap-2 rounded-md hover:bg-secondary-700 active:bg-secondary-600 transition-all "
                >
                  <p>{item.icon}</p>
                  <p className="text-xs">{item.label}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-2 flex flex-row items-center gap-2">
        <p>
          <PiAlignLeftDuotone />
        </p>
        <p>GanttChat</p>
      </div>
    </div>
  );
};

export default Sidebar;
