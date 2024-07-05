import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import { Admin } from "./components/layouts/Admin";
import Adminuser from "./pages/Adminuser";
import Admincontact from "./pages/Admincontact";
import Editpage from "./pages/Editpage";
const App = () => {
    return (<>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
                <Route path="*" element={<Error />} />
                
                <Route path="/admin" element={<Admin/>} >
                 <Route path="user" element={<Adminuser/>}/>
                 <Route path="contact" element={<Admincontact/>}/>
                 <Route path="users/:id/edit" element={<Editpage/>}></Route>
                </Route>
            </Routes>


        </BrowserRouter>

    </>
    );
};

export default App;