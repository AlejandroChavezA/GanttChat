import Sidebar from "./components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-row">
      <Sidebar />
      <main className="p-5 w-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
