import { Navbar } from "../components/Navbar";
import "./Home.css"
export const Home=()=>{

    return <>
   <div className="home-container">
    <div className="home-main">
        <div className="home-left">
            <p>welocme to my page of the css</p>
            <h1>welcome to the mann</h1>
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
                <span>Register company</span>
            </div>
            <div className="info">
            <h2>100,00+</h2>
                <span>Happy clients</span>
            </div>
            <div className="info">
            <h2>500+</h2>
                <span>wellknow developer</span>
            </div>
            <div className="info">
            <h2>24/7</h2>
                <span>service</span>
            </div>
    </div>
    <div className="home-main">
    <div className="home-right">
            <img src="/registerpng.png" alt=""  />
        </div>
        <div className="home-left2">
            <p>welocme to my page of the css</p>
            <h1>welcome to the mann</h1>
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
       
        
    </div>

   </div>
    
    </>

};
