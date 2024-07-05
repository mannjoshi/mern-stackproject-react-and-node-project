import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import "./Admincontact.css"

import { toast } from 'react-toastify';

function Admincontact() {
  const authorizationToken=useAuth();
  const [contactData,setContactData]=useState([]);
  const getContactData=async()=>{ 
    try {
      const response =await fetch("http://localhost:5000/api/admin/contacts",{
        method:"GET",
       headers:{
        Authorization:authorizationToken.authorizationToken,
       }
      })
      const data=await response.json();
      setContactData(data)
    
      if(response.ok){
        console.log("the data is  "+data)
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const deleteContactsById=async(paid)=>{
try {
  const response=await fetch(`http://localhost:5000/api/admin/contacts/delete/${paid}`,{
    method:'DELETE',
    headers:{
      Authorization:authorizationToken.authorizationToken,
    }
  });
  if(response.ok){
    getContactData();
    toast.success("contact deleted successfully")
  }else{
    toast.error("not deleted successfully")
  }
} catch (error) {
  console.log(error)
}
  }

  useEffect(()=>{
    getContactData();
  },[])
  return (
    <div className="contact-page">
    <h1>Contact Messages</h1>
    <div className="contact-list">
      {contactData.map((curr, index) => {
        const { username, email, message, _id } = curr;
        return (
          <div className="contact-item" key={index}>
            <div className="contact-info">
              <p><strong>Name:</strong> {username}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Message:</strong> {message}</p>
            </div>
            <button className="delete-btn" onClick={() => deleteContactsById(_id)}>Delete</button>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Admincontact
