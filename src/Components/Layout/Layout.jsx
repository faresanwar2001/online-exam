import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"


const Layout =()=>{

    return<>
    <Navbar/>
    <div className="container mx-auto py-5">

    <Outlet></Outlet>
    </div>
    </>
}
export default Layout;