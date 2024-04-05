import { useState } from "react"
import { Footer } from "./Footer";
import { useAuth } from "../store/auth";
export const Contact=()=>{

    const defaultContactFormData={
        username:"",
        email:"",
        message:"",
    };
const [contact,setContact]=useState(defaultContactFormData);

const [userData,setUserData]=useState(true);

const {user}=useAuth();

if(userData && user){
    setContact({
        username:user.username,
        email:user.email,
        message:"",
    });
    
    setUserData(false);
}


const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setContact({
        ...contact,
        [name]:value,
    })

}
const handleSubmit= async (e)=>{
    e.preventDefault()

    try {
        const response =await fetch("http://localhost:5000/api/form/contact",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user),
        })
        if(response.ok){
            setContact(defaultContactFormData)
            const data=await response.json();
            console.log(data);
            
        }
    } catch (error) {
        console.log("from the contact form",error)
    }


    
    console.log(contact);
}
    return <>
    <div className="login-container">
        <h2>Contact us</h2>
        <div className="login-left">
        <img src="/contact-us.png" alt=""  />
        </div>
        <div className="login-right">
            <form onSubmit={handleSubmit}>
                <div className="login-form">
                    <label htmlFor="username">username</label>
                    <input type="text"
                    name="username"
                    placeholder="username"
                    id="username"
                    value={contact.username}
                    required
                    onChange={handleInput}
                    
                    />
                </div>
                <div className="login-form">
                    <label htmlFor="email">email</label>
                    <input type="text"
                    name="email"
                    placeholder="email"
                    id="email"
                    value={contact.email}
                    required
                    onChange={handleInput}
                    
                    />
                </div>
                <div className="login-form">
                    <label htmlFor="message">message</label>
                    <textarea type="text"
                    name="message"
                    placeholder="message"
                    id="message"
                    rows="5"
                    cols="30"
                    value={contact.message}
                    required
                    onChange={handleInput}
                    
                    />
                </div>
<div className="login-submit">
                    <button type="submit">Submit</button>
                </div>

            </form>

        </div>

    </div>
        <div className="google-map">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14694.24934138077!2d72.625359!3d22.9663402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8fe0c547cd7f%3A0x90c14806bee3f5e5!2sTexmex%20Instruments!5e0!3m2!1sen!2sin!4v1709962208752!5m2!1sen!2sin" 
        width="80%"
         height="450" 

        loading="lazy" 
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade">

        </iframe>
        </div>
        <Footer/>
    
    
    
    
    
     </>
}