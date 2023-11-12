"use client";

import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { PiAlignLeftBold } from "react-icons/pi";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main className="w-full h-full">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="w-3/4 h-1/2 flex flex-row gap-4">
          <div className="px-10 py-10">
            <span className="text-white text-6xl">
              <PiAlignLeftBold />
            </span>
          </div>
          <Divider orientation="vertical" className="bg-white bg-opacity-30" />
          <div className="px-10 py-10 grow flex flex-col gap-4">
            <p className="text-6xl font-bold">GanttChat</p>
            <p className="text-xl font-normal opacity-80">
              Gestiona y organiza tus proyectos de forma sencilla y eficaz.
            </p>
            <Button
              onClick={() => router.push("/dashboard")}
              color="primary"
              variant="shadow"
              className="w-fit"
            >
              Comienza ahora
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
