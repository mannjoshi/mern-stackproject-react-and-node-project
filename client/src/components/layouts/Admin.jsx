import { NavLink ,Outlet,Navigate} from "react-router-dom"
import { FaMessage, FaUser } from "react-icons/fa6";
import { FaHome} from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md"
import { useAuth } from "../../store/auth";
import "./Admin.css"


export const Admin=()=>{
    const {user,isLoading}= useAuth()
    if(isLoading){
        return <h2>loading</h2>
    }
    else{
    if(!user.isAdmin){
        return <Navigate to="/"/>
    }
}
return (
    <>
    
    <div className="container-admin">
    <nav>
        <ul>
            <li><NavLink to="/admin/user"> <FaUser />User</NavLink></li>
            <li><NavLink to={"/admin/contact"}> <FaMessage/>Contact </NavLink></li>
            <li><NavLink to="/service"><MdOutlineMiscellaneousServices/>Service</NavLink></li>
            <li><NavLink to ="/"><FaHome/>Home</NavLink></li>
        </ul>
    </nav>
<Outlet/>

    </div>
    
    
    </>
)
}