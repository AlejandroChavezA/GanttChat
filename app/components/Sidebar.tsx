'use client'

import Link from "next/link";
import Avatar from "./Avatar";
import {AiOutlineUpload} from "react-icons/ai"
import {LuLayoutDashboard} from "react-icons/lu"
import {TbBrandGoogleAnalytics} from "react-icons/tb"
import { usePathname } from "next/navigation";
import Merge from "../utils/Merge";
import React from "react";

const routes = [
    {
        label: "Dashboard",
        icon: LuLayoutDashboard,
        href: '/dashboard',
        color: 'text-blue-500'
    },
]

const Sidebar = () => {

    const pathname = usePathname();
 
    return(
        <div className="
            space-y-4
            py-4
            flex
            flex-col
            h-full
            px-4
            
        ">
            <Avatar/ >
            <div className="
                space-y-1

            ">
                {routes.map((route) => (
                    <Link   
                        href={route.href}
                        key={route.href}
                        className= {Merge(
                            `text-base
                            group
                            flex
                            px-2
                            py-3
                            w-full
                            justify-start
                            font-medium
                            cursor-pointer
                            hover:text-blue-500
                            hover:bg-gray-200
                            rounded-lg
                            transition`, 
                            pathname === route.href ? "bg-gray-200" : "bg-white"
                            )}
                    >
                        <div className="
                            flex
                            items-center
                            flex-row
                            text-blue-500
                        ">
                            <route.icon className={Merge("h-6 w-6 mr-2", route.color)}/>
                            {route.label}
                        </div>
                    
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;