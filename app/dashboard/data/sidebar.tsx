import {
  PiChatTeardropTextDuotone,
  PiDoorOpenDuotone,
  PiHouseDuotone,
} from "react-icons/pi";

const routes = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: <PiHouseDuotone />,
  },
  {
    path: "/dashboard/chat",
    label: "Chat",
    icon: <PiChatTeardropTextDuotone />,
  },
];

const configs = [
  {
    label: "Cerrar sesión",
    icon: <PiDoorOpenDuotone />,
    function: () => {},
  },
];

export default { routes, configs };
