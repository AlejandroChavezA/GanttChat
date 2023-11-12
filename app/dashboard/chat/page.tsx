import { Input } from "@nextui-org/react";
import GanttChart from "./components/ganttChart";

const ChatPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="grow bg-secondary-400 rounded-lg">
        <GanttChart />
      </div>
      <Input
        radius="lg"
        classNames={{
          inputWrapper: "bg-secondary-400 hover:bg-secondary-600",
        }}
        placeholder="Escribe un mensaje..."
      />
    </div>
  );
};

export default ChatPage;
