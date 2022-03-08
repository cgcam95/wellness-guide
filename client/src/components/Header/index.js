import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

const Header = () => {

    return(
        <div className="container mw-100 pt-4 pb-2" id="header">
            <nav className="row mw-100">
                <Link to="/" className="col-4 px-5"><h1>Wellness Guide</h1></Link>
                <Link to="/" className ="a-header col pt-5 pb-2">Home</Link>
                <Link to="/nutrition" className ="a-header col pt-5 pb-2">Nutrition</Link>
                <Link to="/meditation" className ="a-header col pt-5 pb-2">Meditation</Link>
                <Link to="/exercise" className ="a-header col pt-5 pb-2">Exercise</Link>
            </nav>
        </div>
    )

}

export default Header;