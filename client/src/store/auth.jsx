import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext =createContext();

export const Authprovider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem('token'));
    const [user,setUser]=useState("");
    const [services,setServices]=useState("");


    const storetokenInLS =(servertoken)=>{
        setToken(servertoken);
        return localStorage.setItem("token",servertoken);
    };


    let isLoggedIn=!!token;
    //tackling the logout functionality

    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    };


    //authentication
const userAuthentication=async()=>{
    try {
const response=await fetch("http://localhost:5000/api/auth/user",{
    method:"GET",
    headers:{
        Authorization:`Bearer ${token}`,
    },
});

if(response.ok){
    const data=await response.json();
    console.log("user data",data.userData);
    setUser(data.userData);
}
    } catch (error) {
        console.error("int fecting the data")
    }
}

//to fect the services data
const getServices= async()=>{
    try {
       const response=await fetch("http://localhost:5000/api/data/service",{
        method:"GET",
       }); 

       if(response.ok){
        const data=await response.json();
        console.log(data);
        setServices(data.msg);
       }
    } catch (error) {
        console.log("error in the getService page");
    }
}

    useEffect(()=>{
        getServices();
        userAuthentication()
    },[]);



    return <AuthContext.Provider value={{ isLoggedIn ,storetokenInLS,LogoutUser,user,services}}>

        {children}
    </AuthContext.Provider>
}

export const useAuth=()=>{
 return useContext(AuthContext);
}

