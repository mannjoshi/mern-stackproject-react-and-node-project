import { useAuth } from "../store/auth";
import "./Service.css"
export const Service=()=>{

    const {services}=useAuth();
    return (
        <div className="containercenter">
        <section className="container-service">
        <div className="c-service">
            <h1>Service</h1>
        </div>
        <div className="container-3 grid grid-three">
            {services.map((cur, index) => {
                const { price, description, service, provider } = cur;
                return (
                    <div className="main-card" key={index}>
                        <div className="card">
                            <img src="/contact-us.png" alt="" width="250" height="250" />
                        </div>
                        <div className="card-details">
                            <div className="grid grid-two">
                                <p>{provider}</p>
                                <p>₹{price}</p>
                            </div>
                            <h2>{service}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
    </div>
   
    )
};