import Sidebar from "../components/Sidebar";



const Layout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="
            h-full
            relative
        ">
            <div className="
                hidden
                h-full
                md:flex
                md:w-72
                md:flex-col
                md:fixed
                md-inset-y-0
                z-[80]
                border-r-[1px]
                
            ">
                <Sidebar />
            </div>
            <main className="md:pl-72">
               
                {children}
            </main>

        </div>
    );
};

export default Layout;
