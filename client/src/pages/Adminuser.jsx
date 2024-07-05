import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import {Link} from 'react-router-dom'
import "./Aminuser.css"
function Adminuser() {
    const [users,setUsers]=useState([])
    const authorizationToken=useAuth();
    const getAllUserData=async ()=>{
        try {
            const response= await fetch("http://localhost:5000/api/admin/users",{
                method:"GET",
                headers:{
                    Authorization:authorizationToken.authorizationToken,
                },
            });
            const data=await response.json();
            setUsers(data)
            console.log(authorizationToken)
            console.log(`user ${data}`)
        } catch (error) {
            console.log(error);
        }
    }

    //deleteing the user 
    const deleteUser=async (id)=>{
      const response= await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,{
        method:"DELETE",
        headers:{
            Authorization:authorizationToken.authorizationToken,
        },
    });
    if(response.ok){
      getAllUserData();
    }
    }
    useEffect(()=>{
        getAllUserData();
    },[]);
  return (
    <>
   <section className="admin-page">
    <div className="container-admin">
      <h1>Admin page with user details</h1>
      <div className="userdata">
      
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th >delete</th>
            </tr>
          </thead>
          <tbody>
          { users.map((curr,index)=>{
          return <tr key={index}>
            <td>{curr.username}</td>
            <td>{curr.email}</td>
            <td>{curr.phone}</td>
            <td><Link className="updatelink"to={`/admin/users/${curr._id}/edit`}>Edit</Link></td>
            <td><button onClick={()=>deleteUser(curr._id)} className='aminbtn'>Delete</button></td>
          </tr>
        })
      }
          </tbody>
        </table>
     
      </div>
      </div>
    </section>
    </>
  )
}

export default Adminuser;
