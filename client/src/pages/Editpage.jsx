import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth';
import { useEffect } from 'react';
import {toast} from 'react-toastify'
function Editpage() {
    const {id}=useParams();
    const [users,setUsers]=useState({username:"",email:"",phone:""})
    const authorizationToken=useAuth();
    const getOneUserData=async(userid)=>{
        try {
            const response=await fetch(`http://localhost:5000/api/admin/users/${userid}`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken.authorizationToken,
                },
            })
            const data= await response.json();
            console.log(data);
            setUsers(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (id) {
          getOneUserData(id);
        }
      }, [id]);
const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  //to udpate data dynamically 
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
        const response= await fetch(`http://localhost:5000/api/admin/users/update/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
                Authorization:authorizationToken.authorizationToken,
                
            },
            body:JSON.stringify(users)
        }
    )
    if(response.ok){
    toast.success("update succesfully");
    }
    else{
        toast.error("Not update succesfully");
    }
    }
     catch (error) {
        console.log(error)
    }
}

  return (
   <div className="editpage">
    <div className="sec-container">
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="">UserName</label>
        <input type="text" name="username" id="username" value={users.username} onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="">Email</label>
        <input type="text" name="email" id="email"value={users.email} onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="">Phone</label>
        <input type="text" name="phone" id="phone" value={users.phone} onChange={handleChange}/>
        </div>
        <button>Submit</button>
        </form>
        </div>
   </div>
  )
}

export default Editpage
