import "./styles/globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Providers from "./providers";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GanttChat",
  description: "GanttChat is a project management tool for teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>
          <div className="h-[100dvh] flex bg-secondary-100 text-white overflow-hidden">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
