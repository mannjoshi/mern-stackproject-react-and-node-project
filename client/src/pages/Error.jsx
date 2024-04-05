import { NavLink } from "react-router-dom"

export const Error=()=>{


    return <>
    <div className="content-error">
<h2 className="header">404</h2>
<h4>Sorry!you are on the wrong track</h4>
<p>
    oops! it seems like the page you're trying to access doesn't exist.
    If you belive is there an issue,feel freee to contact and we'll look into
</p>
<div className="btns">
    <NavLink to="/">return home</NavLink>
    <NavLink to="/conact">contact</NavLink>
</div>



    </div>
    
    </>
}