import { useState } from "react"
import {useNavigate} from "react-router-dom"
import "./Register.css"
import { useAuth } from "../store/auth"
import {toast} from "react-toastify"

export const Register =()=>{
    const URI="http://localhost:5000/api/auth/reg"
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:"",

    });

    const handleInput=(e)=>{
    let name= e.target.name;
    let value=e.target.value;
    setUser({
        ...user,
        [name]:value
    })
    }

const navigate=useNavigate();

const {storetokenInLS}=useAuth();
    //fotm submit;

    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(user);

try{
        const response= await fetch(URI,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify(user),
        });


        const res_data=await response.json();
        console.log("res from the server",res_data)
        if(response.ok){
            //store data in local storage 
            storetokenInLS(res_data.token);
            toast.success("Resgistration succesfull")
            // localStorage.setItem("token",res_data.token);
            setUser({username:"",email:"",phone:"",password:"",})
        navigate("/")
        }
        else{
            toast.error(res_data.extradetails?res_data.extradetails:res_data.message)
        }
        console.log(response);


    }
    catch(error){
        console.log("register",error);
    }
}

    return <>
    <div className="reg-container">
        <div className="reg-left">
    <img src="./registerpng.png" alt="not found"  />
        </div>
    <div className="reg-right">
        <h1>Register Form </h1>
        <form onSubmit={handleSubmit}>
        <div className="form-details">
            <label htmlFor="username">username</label>
            <input type="text" name="username"  
            placeholder="username" id="username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleInput}/>
            </div>

            <div className="form-details">
            <label htmlFor="email">email</label>
            <input type="email" name="email"  
            placeholder="email" id="email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}/>
            </div>


            <div className="form-details">
            <label htmlFor="phone">phone</label>
            <input type="number" name="phone"  
            placeholder="phone" id="phone"
            required
            autoComplete="off"
            value={user.phone}
            onChange={handleInput}/>
            </div>
            <div className="form-details">
            <label htmlFor="password">password</label>
            <input type="password" name="password"  
            placeholder="password" id="password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInput}/>
            </div>
            <div>
                <button type="submit">Register now</button>
            </div>
        </form>

    </div>

    </div>
    
    </>
}