import { Logo } from "./logo";
import SidebarRoutes from "./sidebar-routes";

export const Sidebar = () => {
    return ( 
        <div style={{"background":"#180c3c"}} className="h-full shadow-sm border-r flex flex-col overflow-y-auto bg-white ">
            <div className="p-6">
                <h3  style={{"color":"#fff"}}>LMS Dashboard</h3>
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
     );
}
 
export default Sidebar;