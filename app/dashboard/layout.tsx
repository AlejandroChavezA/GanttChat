import Sidebar from "./components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-row">
      <Sidebar />
      <main className="h-full">{children}</main>
    </div>
  );
}
