import NavbarRoutes from "@/components/navbar-routes"
import MobileSidebar from "./mobile-sidebar"

export const Navbar = () => {
    return(
        <div  style={{"background":"#cee4f9","borderColor":"hsl(214.3 60.24% 86.14% / var(--tw-border-opacity, 1))"}} className="p-3 border-b flex items-center h-full bg-white">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    )
}