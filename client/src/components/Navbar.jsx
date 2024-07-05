import { NavLink } from "react-router-dom"
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxFill } from "react-icons/ri";
import { MdLiveHelp } from "react-icons/md";
import { FaRegRegistered } from "react-icons/fa6";
export const Navbar = () => {
const {isLoggedIn}=useAuth();
    return <>
       
            <div className="container">
                <div className="logo">
                    <a href="/">Mannn joshi</a>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/"><FaHome />Home </NavLink></li>
                        <li><NavLink to="/about"><MdLiveHelp  />About </NavLink></li>
                        <li><NavLink to="/contact"><RiContactsFill /> Contact</NavLink></li>
                        <li><NavLink to="/service"><GrServices />Service </NavLink></li>
                            {
                                isLoggedIn ?(<li><NavLink to="/logout"><RiLogoutBoxFill />logout</NavLink></li>)
                                :(
                                <>
                                <li><NavLink to="/login"><RiLoginBoxLine />Login</NavLink></li>
                                <li><NavLink to="/register"><FaRegRegistered />Register </NavLink></li>
                                </>)
                            }
                        
                        

                        
                    </ul>
                </nav>
            </div>

      


    </>
}