
import { useAuth } from "../store/auth";
export const About=()=>{
    const {user}=useAuth();
    return <>
    
    <div className="home-container">
    <div className="home-main">
        <div className="home-left">
            <p>welocme to my page of the css</p>
            <h1>welcome to the {
                user?user.username:"to our website"
}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Enim quisquam cumque cupiditate sunt unde? Ut sit, consequuntur fuga illum distinctio mollitia 
            voluptate? Eos dolorum quidem consequatur excepturi, minus rem delectus.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Enim quisquam cumque cupiditate sunt unde? Ut sit, consequuntur fuga illum distinctio mollitia 
            voluptate? Eos dolorum quidem consequatur excepturi, minus rem delectus.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Enim quisquam cumque cupiditate sunt unde? Ut sit, consequuntur fuga illum distinctio mollitia 
            voluptate? Eos dolorum quidem consequatur excepturi, minus rem delectus.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Enim quisquam cumque cupiditate sunt unde? Ut sit, consequuntur fuga illum distinctio mollitia 
            voluptate? Eos dolorum quidem consequatur excepturi, minus rem delectus.</p>
            <div className="btn-div">
                <a href="/contact"> 
                <button className="btn">Contact</button>
                </a>
                <a href="/service"> 
                <button className="btn">Learn more</button>
                </a>
            </div>
        </div>
        <div className="home-right">
            <img src="/registerpng.png" alt=""  />
        </div>
        
    </div>
    <div className="infromation">
            <div className="info">
                <h2>50+</h2>
                <span>Company Register</span>
            </div>
            <div className="info">
            <h2>150+</h2>
                <span>Project done</span>
            </div>
            <div className="info">
            <h2>250+</h2>
                <span>wellknow developer</span>
            </div>
            <div className="info">
            <h2>650k+</h2>
                <span>service</span>
            </div>
    </div>
    
       
        
   

   </div>
    </>
};