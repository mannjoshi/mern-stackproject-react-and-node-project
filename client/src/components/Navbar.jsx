import { NavLink } from "react-router-dom"
import "./Navbar.css";
import { useAuth } from "../store/auth";
export const Navbar = () => {
const {isLoggedIn}=useAuth();
    return <>
        <header>
            <div className="container">
                <div className="logo">
                    <a href="/">Mannn joshi</a>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home </NavLink></li>
                        <li><NavLink to="/about">About </NavLink></li>
                        <li><NavLink to="/contact"> Contact</NavLink></li>
                        <li><NavLink to="/service">Service </NavLink></li>
                            {
                                isLoggedIn ?(<li><NavLink to="/logout">logout</NavLink></li>)
                                :(
                                <>
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/register">Register </NavLink></li>
                                </>)
                            }
                        
                        

                        
                    </ul>
                </nav>
            </div>

        </header>


    </>
}