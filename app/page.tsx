import { Divider } from "@nextui-org/divider";
import { PiAlignLeftBold } from "react-icons/pi";

export default function Page() {
  return (
    <main className="w-full h-full overflow-y-scroll">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="w-3/4 h-1/2 flex flex-row gap-4">
          <div className="px-10 py-16">
            <span className="text-white text-6xl">
              <PiAlignLeftBold />
            </span>
          </div>
          <Divider orientation="vertical" className="bg-white bg-opacity-30" />
          <div className="px-10 grow flex flex-col justify-center gap-4">
            <p className="text-6xl font-bold">GanttChat</p>
            <p className="text-xl font-normal opacity-80">
              Gestiona y organiza tus proyectos de forma sencilla y eficaz.
            </p>
          </div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex perferendis
        animi esse eos neque nobis mollitia sint alias unde laboriosam modi
        eveniet quas consequuntur quos, nesciunt, ipsa saepe ullam commodi!
      </div>
    </main>
  );
}
