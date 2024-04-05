import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

import {toast} from "react-toastify"

export const Login=()=>{
const URI="http://localhost:5000/api/auth/login"
    const [user,setUser]=useState({
        email:"",
        password:"",
    });

    const navigate=useNavigate();
    const {storetokenInLS}=useAuth();
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value,
    });
    };
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try
        {const response= await fetch(URI,{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(user),

        })

        const res_data=await response.json();
        if(response.ok){
            setUser({ email:"",
            password:""})
            toast.success("Succesfully login")
            // localStorage.setItem("token",res_data.token);
            storetokenInLS(res_data.token);
            navigate("/")
        }
        else{
            toast.error(res_data.extradetails?res_data.extradetails:res_data.message)
            console.log("invalid credential");
        }
        console.log("login",response);
    
    
    
    }
        catch(e){
            console.log("login",e)
        }
    }



    return <>
    <div className="login-container">
        <div className="login-left">
        <img src="./registerpng.png" alt="" />
        </div>
        <div className="login-right">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="login-form">
                    <label htmlFor="username">email</label>
                    <input type="email" name="email" placeholder="email" id="email" required
                    value={user.email}
                    onChange={handleInput}/>
                </div>
                <div className="login-form">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" placeholder="password" id="password" required
                    value={user.password}
                    onChange={handleInput}/>
                </div>
                <div className="login-submit">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
    
    
    
    </>
};